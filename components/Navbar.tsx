"use client";

import { Github, SidebarIcon } from "lucide-react";

import SearchForm from "@/components/SearchForm";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import Link from "next/link";
import { Suspense } from "react";

export default function Navbar() {
  const { toggleSidebar } = useSidebar();

  return (
    <header className='flex sticky top-0 z-50 w-full h-[var(--header-height)] items-center border-b bg-background'>
      <div className='flex w-full justify-between items-center gap-2 px-4'>
        <Button
          className='h-8 w-8'
          variant='ghost'
          size='icon'
          onClick={toggleSidebar}
        >
          <SidebarIcon />
        </Button>
        <Suspense>
          <SearchForm className='w-1/2 md:w-1/3' />
        </Suspense>
        <Link
          href='https://github.com/NimaAraghi/movie-app'
          className='flex items-center justify-center size-9 rounded-full hover:bg-accent transition-all duration-300'
        >
          <Github className='size-icon' />
        </Link>
      </div>
    </header>
  );
}
