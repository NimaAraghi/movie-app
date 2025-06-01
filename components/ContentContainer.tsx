import React from "react";
import { ScrollArea } from "./ui/scroll-area";

export default function ContentContainer({
  title,
  children,
  contentLength,
}: {
  title: string;
  children: React.ReactNode;
  contentLength: number;
}) {
  return (
    <ScrollArea className='w-full rounded-md border'>
      <div>
        <h2 className='text-2xl px-4 py-3 bg-zinc-800'>{title}</h2>
        <h4 className='px-4'>
          {contentLength} {title}(s)
        </h4>
      </div>
      {children}
    </ScrollArea>
  );
}
