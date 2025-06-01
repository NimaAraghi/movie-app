import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "./ui/sidebar";
import Link from "next/link";
import { CalendarArrowUp, Lightbulb, Star, TrendingUp } from "lucide-react";
import { getGenres } from "@/lib/genres";

export default async function AppSidebar() {
  const genresMap = await getGenres();

  return (
    <Sidebar className='top-16 !h-[calc(100svh-var(--header-height))]'>
      <SidebarHeader />

      <SidebarMenu>
        <SidebarMenuItem className='flex items-center'>
          <Link href='/' className='pl-3 text-2xl font-bold'>
            Next Movies
          </Link>
        </SidebarMenuItem>
      </SidebarMenu>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {/* Discover Section */}
            <SidebarMenuItem>
              <SidebarMenuButton className='text-lg font-semibold'>
                Discover
              </SidebarMenuButton>
              <SidebarMenuSub>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton asChild>
                    <Link href='/movies/discover' className='gap-3 text-[16px]'>
                      <Lightbulb size={40} />
                      Discover Movies
                    </Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton asChild>
                    <Link href='/movies/popular' className='gap-3 text-[16px]'>
                      <TrendingUp />
                      Popular Movies
                    </Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton asChild>
                    <Link
                      href='/movies/top-rated'
                      className='gap-3 text-[16px]'
                    >
                      <Star />
                      Top Rated Movies
                    </Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton asChild>
                    <Link href='/movies/upcoming' className='gap-3 text-[16px]'>
                      <CalendarArrowUp />
                      Upcoming Movies
                    </Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              </SidebarMenuSub>
            </SidebarMenuItem>

            {/* Genres Section */}
            <SidebarMenuItem>
              <SidebarMenuButton className='text-lg font-semibold'>
                Genres
              </SidebarMenuButton>
              <SidebarMenuSub>
                {Array.from(genresMap.entries()).map(([id, name]) => (
                  <SidebarMenuSubItem key={id}>
                    <SidebarMenuSubButton asChild>
                      <Link
                        href={`/movies/discover/${id}`}
                        className='text-[16px]'
                      >
                        {name}
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
