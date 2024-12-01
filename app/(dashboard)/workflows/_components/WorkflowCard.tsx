"use client";

import React from "react";
import { Workflow } from "@prisma/client";
import { Card, CardContent } from "@/components/ui/card";
import { WorkflowStatus } from "@/types/workflow";
import { FileTextIcon, PlayIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const statusColors = {
  [WorkflowStatus.DRAFT]: "bg-yellow-400 text-yellow-600",
  [WorkflowStatus.PUBLISH]: "bg-primary",
};

function WorkflowCard({ workflow }: { workflow: Workflow }) {
  const isDraft = workflow.status === WorkflowStatus.DRAFT;
  return (
    <Card className="border border-separate shadow-sm rounded-lg overflow-hidden hover:shadow-md dark:shadow-primar">
      <CardContent className=" p-4 flex items-center justify-between h-[100px]">
        <div
          className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center",
            statusColors[workflow.status as WorkflowStatus]
          )}
        >
          {isDraft ? (
            <FileTextIcon className="h-5 w-5" />
          ) : (
            <PlayIcon className="h-5 w-5 text-white" />
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default WorkflowCard;
