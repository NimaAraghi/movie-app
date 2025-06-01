import { getMovies } from "@/lib/tmdb";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;

  const genreId = searchParams.get("genreId");
  const page = searchParams.get("page") || "1";
  const sortBy = searchParams.get("sort_by") || "popularity.desc";

  const response = await getMovies(
    Number(page),
    sortBy,
    genreId ? Number(genreId) : undefined
  );

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  }); // Return full response
}
