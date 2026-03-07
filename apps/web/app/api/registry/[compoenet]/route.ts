import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET(
  req: Request,
  { params }: { params: { component: string } }
) {

  return NextResponse.json({
    data: params
  })

}
