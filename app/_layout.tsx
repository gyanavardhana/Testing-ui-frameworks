// app/_layout.tsx or _layout.js
import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { Slot } from 'expo-router';

export default function LayoutWrapper() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Slot />
    </ApplicationProvider>
  );
}
