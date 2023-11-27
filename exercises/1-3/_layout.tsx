// Expo Router Drawer Layout
import React from 'react';
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

// Task: Create a Drawer Layout with two screens, List and Profile

// 🐱 Add 'react-native-reanimated/plugin' to your babel.config.js
// 🐱 Create a drawer folder with two files, list.tsx and profile.tsx
// 🐱 Define a <Drawer> component in app/drawer/_layout.tsx
// 🐱 Navigate between Drawer and Home

// 🦫 Use the headerShown property in the right layout
// 🦫 Display a custom drawerContent with <Drawer drawerContent={...}>

// 🦉 Drawer requires additional packages: @react-navigation/drawer react-native-gesture-handler react-native-reanimated
// 🦉 For these packaes you ned to update your Babel Config and restart Expo with `npx expo start --clear`
// 🦉 Starting with SDK 50: Wrap the <Drawer> component with <GestureHandlerRootView>

const DrawerLayout = () => {
  return (
    <>
      {/* 🐱 Create a <Drawer> layout */}
      {/* 🦉 Define Screens with <Drawer.Screen name="filename"> */}
    </>
  );
};

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Help" onPress={() => alert('Link to help')} />
    </DrawerContentScrollView>
  );
}

export default DrawerLayout;
