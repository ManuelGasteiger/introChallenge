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
    <div>
      <h1>Character Conversion</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          convert(e.currentTarget.character.value);
          setCharCode(e.currentTarget.character.value);
        }}
      >
        <input
          id="character"
          name="character"
          type="number"
          placeholder="CharCode"
        />
        <button type="submit">Get character</button>
      </form>
      {result && (
        <div>{`The CharCode ${charCode} represents the character: ${result}`}</div>
      )}
    </div>
  );
};
