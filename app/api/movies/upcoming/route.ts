import { getUpcomingMovies } from "@/lib/tmdb";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;

  const page = searchParams.get("page") || "1";

  const response = await getUpcomingMovies(Number(page));

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  }); // Return full response
}
