export async function fetchRegistry(name: string) {
  const res = await fetch(
    `http://localhost:3000/api/registry/component`,
    {
      body: JSON.stringify({ name }),
      method: "POST"
    }
  )

  if (!res.ok) {
    throw new Error("Component not found")
  }

  return res.json()
}
