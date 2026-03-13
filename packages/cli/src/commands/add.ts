import { fetchRegistry } from "../utils/fetchregistry.ts"
import { writeFiles } from "../utils/writefiles.ts"


export async function add(component: string) {

  console.log(component)
  console.log("Installing:", component)
  const data = await fetchRegistry(component)
  await writeFiles(data.files)
  console.log("Done")

}
