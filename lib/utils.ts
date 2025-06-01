import { Image } from "@/types/image";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatVoteAverage(vote: number | undefined): number {
  return vote ? Number(vote.toFixed(1)) : 0;
}

export function getImageId(images: Image[], imageId: string) {
  return images.findIndex((image) => image.file_path === `/${imageId}`);
}
