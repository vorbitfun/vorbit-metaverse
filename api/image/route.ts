import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    success: true,
    image:
      "https://cdn.vorbit.fun/generated/image.png"
  });
}
