import fs from 'fs'
import path from 'path'

export async function writeFiles(files: any[]) {

  for (const file of files) {

    const fullPath = path.join(
      process.cwd(),
      file.path
    )
    console.log("fullpath", fullPath)
    fs.mkdirSync(
      path.dirname(fullPath),
      { recursive: true }
    )

    console.log('filecontent', file.content)
    fs.writeFileSync(
      fullPath,
      file.content
    )

  }

}
