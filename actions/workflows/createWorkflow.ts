"use server";

import { createWorkflowSchema } from "@/schema/workflow";
import { z } from "zod";

export async function CreateWorkflow(
  form: z.infer<typeof createWorkflowSchema>
) {}
