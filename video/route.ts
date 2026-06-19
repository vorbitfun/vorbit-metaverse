import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    success: true,
    video:
      "https://cdn.vorbit.fun/generated/video.mp4"
  });
}
