import { NextRequest, NextResponse } from "next/server";
import { waitUntil } from "@vercel/functions";

export const dynamic = "force-dynamic";
export const maxDuration = 900;

export async function GET(request: NextRequest) {
  try {
    console.log("***GET started");

    // Send an immediate response
    const response = NextResponse.json({ success: true }, { status: 200 });

    // Use waitUntil to keep the function running in the background
    waitUntil(
      new Promise((resolve) => {
        setTimeout(() => {
          console.log("***Done");
          resolve(true);
        }, 1000 * 60 * 10);
      })
    );

    return response;
  } catch (err) {
    console.error("***Got err in handler", err);
    return NextResponse.json(err, { status: 500 });
  }
}
