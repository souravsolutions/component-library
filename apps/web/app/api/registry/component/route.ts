import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
export async function POST(req: Request) {
  const body = await req.json();
  const component = body.name;
  if (!component) {
    return NextResponse.json(
      { error: "Missing component name" },
      { status: 400 },
    );
  }
  const componentPath = path.join(
    process.cwd(),
    "../../registry/ui/",
    component,
  );
  const metaPath = path.join(componentPath, "meta.json");

  if (!fs.existsSync(metaPath)) {
    return NextResponse.json(
      { error: `Component not found: ${component}` },
      { status: 404 },
    );
  }
  const meta = JSON.parse(fs.readFileSync(metaPath, "utf8"));
  const files = meta.files.map((file: string) => {
    const filePath = path.join(componentPath, file);
    const content = fs.readFileSync(filePath, "utf8");

    return {
      path: `components/ui/${file}`,
      content,
    };
  });

  return NextResponse.json({
    name: component,
    files,
  });
}
