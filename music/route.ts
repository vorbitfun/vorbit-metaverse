import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    success: true,
    music:
      "https://cdn.vorbit.fun/generated/music.mp3"
  });
}
