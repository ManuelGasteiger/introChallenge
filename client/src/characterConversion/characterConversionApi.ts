export async function convertCharCode(charCode: number): Promise<string> {
  const data = await fetch(`http://localhost:3000/character/${charCode}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await data.json();
  return result.character;
}
