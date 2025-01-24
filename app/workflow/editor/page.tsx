import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import React from "react";

async function page({ params }: { params: { workflowId: string } }) {
  const { workflowId } = params;
  const { userId } = auth();

  if (!userId) return <div>unauthenticated</div>;

  const workflow = await prisma.workflow.findUnique({
    where: {
      id: workflowId,
      userId,
    },
  });
  return <div>page</div>;
}

export default page;
