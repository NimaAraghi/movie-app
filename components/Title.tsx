import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Title({ title, url }: { title: string; url: string }) {
  return (
    <div className='flex justify-between items-center mb-4'>
      <h1 className='font-bold text-2xl'>{title}</h1>
      <Button asChild variant='outline'>
        <Link href={url}>See All</Link>
      </Button>
    </div>
  );
}
