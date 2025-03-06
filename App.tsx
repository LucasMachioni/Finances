import React from "react";
import { GluestackUIProvider, StatusBar } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import Routes from "./src/routes";


export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <StatusBar
        backgroundColor="rgb(0, 0, 0)"
        barStyle="light-content"
        translucent={false}
      />
      <Routes />
    </GluestackUIProvider>
  );
}