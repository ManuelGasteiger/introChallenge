import React, { useState } from "react";
import { convertCharCode } from "./characterConversionApi";

export const CharacterConversion: React.FC = () => {
  const [result, setResult] = useState<string | undefined>(undefined);
  const [charCode, setCharCode] = useState<number | undefined>(undefined);

  const convert = async (character: number) => {
    const result = await convertCharCode(character);
    console.log(result);
    setResult(result);
  };

  return (
    <div className="max-w-md mx-auto my-8 p-8 bg-gray-100 rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4">Character Conversion</h1>
      <form
        className="flex items-center"
        onSubmit={(e) => {
          e.preventDefault();
          convert(e.currentTarget.character.value);
          setCharCode(e.currentTarget.character.value);
        }}
      >
        <input
          className="flex-1 py-2 px-4 border border-gray-300 rounded-l"
          id="character"
          name="character"
          type="number"
          placeholder="CharCode"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-r"
        >
          Get character
        </button>
      </form>
      {result && (
        <div className="mt-4">
          {`The CharCode ${charCode} represents the character: ${result}`}
        </div>
      )}
    </div>
  );
};
