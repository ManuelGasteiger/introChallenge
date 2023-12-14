// get character conversion history and display result as table

import React, { useEffect, useState } from "react";
import { getConversionHistory } from "./characterConversionHistoryApi";

export const CharacterConversionHistory: React.FC = () => {
  const [history, setHistory] = useState<
    { _id: string; number: number; character: string; createdAt: Date }[]
  >([]);

  useEffect(() => {
    getConversionHistory().then((result) => {
      setHistory(result);
    });
  }, []);

  return (
    <div className="max-w-md mx-auto my-8 p-8 bg-gray-100 rounded shadow-md h-full">
      <h1 className="text-2xl font-bold mb-4">Character Conversion History</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border">CharCode</th>
            <th className="py-2 px-4 border">Character</th>
            <th className="py-2 px-4 border">Date</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item) => (
            <tr key={item._id} className="border">
              <td className="py-2 px-4 border">{item.number}</td>
              <td className="py-2 px-4 border">{item.character}</td>
              <td className="py-2 px-4 border">
                {new Date(item.createdAt).toISOString().split("T")[0]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

/*

      

*/
