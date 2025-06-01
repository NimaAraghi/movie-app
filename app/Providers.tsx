"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute='class' // or "data-theme", depending on your setup
      defaultTheme='system'
      enableSystem>
      <SidebarProvider className='flex flex-col'>{children}</SidebarProvider>
    </ThemeProvider>
  );
}
