import { desserts } from "@/mocks/mocks";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(desserts);
}
