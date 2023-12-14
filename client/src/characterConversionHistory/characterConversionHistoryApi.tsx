export async function getConversionHistory(): Promise<
  { _id: string; number: number; character: string; createdAt: Date }[]
> {
  const data = await fetch("http://localhost:3000/history", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await data.json();
  return result;
}
