"use client";

import Navbar from "@/shared/navbar";
import { CopilotKit } from "@copilotkit/react-core";
import "@copilotkit/react-ui/styles.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CopilotKit runtimeUrl="/api/copilotkit">
      <div className="h-screen w-full debug">
        <Navbar />
        <div className="relative overflow-hidden  w-full">
          <main className="relative ">{children}</main>
        </div>
      </div>
    </CopilotKit>
  );
}