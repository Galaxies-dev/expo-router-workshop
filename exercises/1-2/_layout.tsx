// Expo Router Tabs Layout
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';

// Task: Create a Tabs Layout with two screens, List and Profile

// 🐱 Create a tabs folder with two files, list.tsx and profile.tsx
// 🐱 Define a <Tabs> component in app/tabs/_layout.tsx
// 🐱 Navigate between Tabs and Home
// 🐱 Define a title and tabBarIcon for every tab

// 🦫 Hide the unneccesary duplicate header
// 🦫 Prevent swipe to go back from tabs to home
// 🦫 Add another page without Tab Button using href: null
// 🦫 Add a button with custom function

// 🦉 Use the headerShown property in the right layout!
// 🦉 Use replace on <Link> to replace instead of push

// 🔗 Material Top Tabs: https://github.com/EvanBacon/expo-router-layouts-example/tree/main/app/material-top-tabs

const TabsLayout = () => {
  return (
    <>
      {/* 🐱 Create a <Tabs> layout */}
      {/* 🦉 Define Screens with <Tabs.Screen name="filename"> */}
      {/* 🦉 Use tabBarIcon: ({ size, color }) => (<Ionicons.../>) to show the right icon */}
      {/* 🦉 Use headerRight: () => (...) to define a button in the header */}
    </>
  );
};

export default TabsLayout;
