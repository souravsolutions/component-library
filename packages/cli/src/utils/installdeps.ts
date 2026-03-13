import { execSync } from "child_process"
export async function installdeps(deps: string[]) {
  if (!deps || deps.length === 0) return
  const cmd = `pnpm add ${deps.join(" ")}`
  execSync(cmd, { stdio: "inherit" })

}
