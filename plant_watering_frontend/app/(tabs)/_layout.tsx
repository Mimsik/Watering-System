import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, // Adjust based on your preference
      }}
    >
      <Tabs.Screen
        name="index" // Corresponds to app/(tabs)/index.tsx
        options={{
          title: 'Entry', // Name of the tab
        }}
      />
      <Tabs.Screen
        name="home" // Corresponds to app/(tabs)/home.tsx
        options={{
          title: 'Home', // Name of the tab
        }}
      />
    </Tabs>
  );
}
