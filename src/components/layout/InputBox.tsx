import { Input, InputField } from "@gluestack-ui/themed";
import React from "react";

export function InputBox({ index, inputRefs, onChange }: { index: number, inputRefs: React.RefObject<any>[], onChange: (index: number, value: string) => void }) {
    const handleTextChange = (text: string) => {
        if (!/^\d?$/.test(text)) return;
        
        onChange(index, text);

        if (text && index < inputRefs.length - 1) {
            inputRefs[index + 1].current?.focus();
        } else if (!text && index > 0) {
            inputRefs[index - 1].current?.focus();
        }
    };

    return (
        <Input borderWidth={0.5} bgColor="$white" borderColor="$black" w={"$10"} h={"$12"}>
            <InputField
                ref={inputRefs[index]}
                type="text"
                fontSize={26}
                paddingLeft={0}
                textAlign="center"
                keyboardType="numeric"
                maxLength={1}
                left={"$1"}
                onChangeText={handleTextChange}
            />
        </Input>
    );
}
