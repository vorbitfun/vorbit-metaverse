import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    success: true,
    voice:
      "https://cdn.vorbit.fun/generated/voice.mp3"
  });
}
