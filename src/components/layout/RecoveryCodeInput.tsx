import { HStack } from '@gluestack-ui/themed';
import React from 'react';
import { InputBox } from './InputBox';

export function RecoveryCodeInput() {
    return (
        <>
            <HStack gap={"$3"}>
            <InputBox />
            </HStack>
        </>
    );
}