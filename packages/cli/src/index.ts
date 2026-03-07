#!/usr/bin/env node

import fs from "fs"
import fetch from "node-fetch"
async function run() {

  const res = await fetch(
    "http://localhost:3000/api/registry/button"
  )

  const data = await res.json()

  const file = data.files[0]

  fs.mkdirSync("components/ui", { recursive: true })

  fs.writeFileSync(
    file.path,
    file.content
  )

  console.log("Button installed")

}

run()
