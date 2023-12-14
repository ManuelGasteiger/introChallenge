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
    <div>
      <h1>Character Conversion History</h1>
      <table>
        <thead>
          <tr>
            <th>CharCode</th>
            <th>Character</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item) => (
            <tr key={item._id}>
              <td>{item.number}</td>
              <td>{item.character}</td>
              <td>{new Date(item.createdAt).toISOString().split("T")[0]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
