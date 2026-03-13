import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET(
  req: Request,
) {
  const body = await req.json()
  const component = body.name

  const metaPath = path.join(
    process.cwd(),
    "../../../registry/ui",
    component,
    "meta.json"
  )

  const meta = JSON.parse(
    fs.readFileSync(metaPath, "utf8")
  )

  const files = meta.files.map((file: string) => {

    const filePath = path.join(
      process.cwd(),
      "../../../registry/ui",
      component,
      file
    )

    const content = fs.readFileSync(filePath, "utf8")

    return {
      path: `components/ui/${file}`,
      content
    }

  })

  return NextResponse.json({
    name: component,
    files,
  })

}
