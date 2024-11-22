"use server";

import prisma from "@/lib/prisma";
import {
  createWorkflowSchema,
  createWorkflowSchemaType,
} from "@/schema/workflow";
import { auth } from "@clerk/nextjs/server";

export async function CreateWorkflow(form: createWorkflowSchemaType) {
  const { success, data } = createWorkflowSchema.safeParse(form);
  if (!success) throw new Error("invalid form data");

  const { userId } = auth();

  if (!userId) throw new Error("unathenticated");

  const result = await prisma.workflow.create({
    data: {
      userId,
      status: "DRAFT",
      definition: "TODO",
      ...data,
    },
  });
}
