"use client";

import Navbar from "@/shared/navbar";
import { CopilotKit } from "@copilotkit/react-core";
import "@copilotkit/react-ui/styles.css";
import 'shepherd.js/dist/css/shepherd.css';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CopilotKit runtimeUrl="/api/copilotkit">
      <div className="min-h-screen w-full">
        <Navbar />
        <div className="relative overflow-hidden  w-full">
          <main className="relative ">{children}</main>
        </div>
      </div>
    </CopilotKit>
  );
}
