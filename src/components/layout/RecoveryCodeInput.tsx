import { HStack } from "@gluestack-ui/themed";
import React, { useRef, useState, useEffect } from "react";
import { InputBox } from "./InputBox";

export function RecoveryCodeInput({ onCodeComplete }: { onCodeComplete: (code: string) => void }) {
  const inputRefs = Array.from({ length: 6 }, () => useRef<any>(null));
  const [code, setCode] = useState<string[]>(Array(6).fill("")); 

  const handleChange = (index: number, value: string) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
  };

  const handleSubmit = () => {
    const fullCode = code.join("");
    onCodeComplete(fullCode);
  };

  useEffect(() => {
    if (code.every((digit) => digit !== "")) {
      handleSubmit();
    }
  }, [code]);

  return (
    <HStack gap={"$3"}>
      {inputRefs.map((_, index) => (
        <InputBox key={index} index={index} inputRefs={inputRefs} onChange={handleChange} />
      ))}
    </HStack>
  );
}
