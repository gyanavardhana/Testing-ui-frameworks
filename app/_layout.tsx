// app/_layout.tsx or _layout.js
import React from 'react';
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { Slot } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function LayoutWrapper() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GluestackUIProvider mode="light"><ApplicationProvider {...eva} theme={eva.light}>
        <Slot />
      </ApplicationProvider></GluestackUIProvider>
    </GestureHandlerRootView>

  );
}
