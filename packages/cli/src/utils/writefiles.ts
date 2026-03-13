import fs from 'fs'
import path from 'path'

export async function writeFiles(files: any[]) {

  for (const file of files) {

    const fullPath = path.join(
      process.cwd(),
      file.path
    )

    fs.mkdirSync(
      path.dirname(fullPath),
      { recursive: true }
    )

    fs.writeFileSync(
      fullPath,
      file.content
    )

  }

}
