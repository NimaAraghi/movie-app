"use client";

import { Search } from "lucide-react";
import { Label } from "@/components/ui/label";
import { SidebarInput } from "@/components/ui/sidebar";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function SearchForm({ ...props }: React.ComponentProps<"form">) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  return (
    <form
      {...props}
      onSubmit={async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const query = formData.get("q") as string;
        if (query) {
          router.push(`/search?q=${encodeURIComponent(query)}`);
        }
      }}
    >
      <div className='relative'>
        <Label htmlFor='search' className='sr-only'>
          Search
        </Label>
        <SidebarInput
          id='search'
          name='q'
          placeholder='Type to search...'
          defaultValue={query}
          className='h-8 pl-7'
        />
        <button
          type='submit'
          className='cursor-pointer absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50 flex items-center'
        >
          <Search />
        </button>
      </div>
    </form>
  );
}
