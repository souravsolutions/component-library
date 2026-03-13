import { fetchRegistry } from "../utils/fetchregistry"
import { writeFiles } from "../utils/writefiles"


export async function add(component: string) {

  console.log("Installing:", component)

  const data = await fetchRegistry(component)

  await writeFiles(data.files)

  console.log("Done")

}
