import Image from "next/image";
import SidebarMenu from "@/components/SidebarMenu";
import { cn } from "@/lib/utils";
import ProductPassport from "@/components/ProductPassport";
import React from "react";
import PassportList from "@/components/PassportList";
import PassportContainer from "@/components/PassportContainer";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function Home() {
  return (
  <ProtectedRoute>
    <main className="">
      <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-neutral-100 dark:bg-neutral-800 w-full flex-1 mx-auto border border-neutral-200 overflow-hidden",
        "h-screen"
      )}
      >
        <SidebarMenu/>

        <PassportContainer userId="64c9b5f4f2c4b7a0b8b45678"/>
      </div>
    </main>
  </ProtectedRoute>
  );
}