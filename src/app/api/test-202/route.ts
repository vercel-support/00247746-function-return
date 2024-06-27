import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const maxDuration = 900;

export async function GET(request: NextRequest) {
  console.log("***GET started");

  // Immediately return a 202 Accepted response
  const response = NextResponse.json(
    { message: "Request accepted" },
    { status: 202 }
  );

  // Perform the long-running task in the background
  backgroundTask()
    .then(() => {
      console.log("***Done");
    })
    .catch((err) => {
      console.error("***Got err in background task", err);
    });

  return response;
}

async function backgroundTask() {
  await new Promise((resolve) => setTimeout(resolve, 1000 * 60 * 10));
}
