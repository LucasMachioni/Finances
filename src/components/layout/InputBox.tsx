import { Input } from '@gluestack-ui/themed';
import React from 'react';

export function InputBox() {
    return (
        <>
            <Input
                borderWidth={0.5}
                bgColor="$white"
                borderColor="$black"
                w={"$10"}
                paddingLeft={3}
            ></Input>
        </>
    );
}