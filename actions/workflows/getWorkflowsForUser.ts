"use server";

import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { unstable_cache } from "next/cache";
import { Workflow } from "@prisma/client";

export type WorkflowListItem = Pick<
  Workflow,
  "id" | "name" | "description" | "createdAt" | "updatedAt"
>;

export const GetWorkflowsForUser = unstable_cache(
  async (): Promise<WorkflowListItem[] | null> => {
    try {
      const { userId } = auth();
      if (!userId) return null;

      const workflows = await prisma.workflow.findMany({
        where: { userId },
        select: {
          id: true,
          name: true,
          description: true,
          createdAt: true,
          updatedAt: true,
        },
        orderBy: { createdAt: "desc" }, // Show newest first
      });

      return workflows;
    } catch (error) {
      console.error("Error fetching workflows:", error);
      return null;
    }
  },
  ["user-workflows"],
  {
    revalidate: 30, // Cache for 30 seconds
    tags: ["workflows"],
  }
);
