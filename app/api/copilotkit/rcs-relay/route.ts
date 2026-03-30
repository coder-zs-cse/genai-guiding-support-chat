import { NextRequest, NextResponse } from "next/server";

const NGROK_URL = "https://nondisturbing-charley-ungual.ngrok-free.dev/botapp/api/rcschannel/dotgomessagegoogle/115373698";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const response = await fetch(NGROK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const text = await response.text();

    return new NextResponse(text, {
      status: response.status,
    });
  } catch (error) {
    console.error("Forwarding failed:", error);

    return NextResponse.json(
      { error: "Forwarding failed" },
      { status: 500 }
    );
  }
}