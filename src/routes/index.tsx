// routes/index.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackRoutes from './Stack.routes';
import TabRoutes from './BottomTab.routes';

export default function Routes() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}
