import { getMovieByQuery } from "@/lib/tmdb";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;

  const page = searchParams.get("page") || "1";
  const query = searchParams.get("q") || "";

  const response = await getMovieByQuery(Number(page), query);

  console.log("response =>", response);

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  }); // Return full response
}
