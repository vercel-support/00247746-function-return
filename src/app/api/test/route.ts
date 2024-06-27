import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    console.log("***GET started");

    await new Promise((resolve) => setTimeout(resolve, 1000 * 60 * 10));
    console.log("***Done");

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("***Got err in handler", err);
    return NextResponse.json(err, { status: 500 });
  }
}
