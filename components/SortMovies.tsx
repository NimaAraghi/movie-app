import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function SortMovies({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Sort BY' />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='popular.desc'>Most Popular</SelectItem>
        <SelectItem value='vote_count.desc'>Most Voted</SelectItem>
        <SelectItem value='vote_average.desc'>Top Rated</SelectItem>
        <SelectItem value='release_date.desc'>New to Old</SelectItem>
        <SelectItem value='release_date.asc'>Old to New</SelectItem>
      </SelectContent>
    </Select>
  );
}
