// Auth Scenario: Additional Drawer

import Colors from '@/constants/Colors';
import { Drawer } from 'expo-router/drawer';

// Task: Wrap the tabs with a Drawer

// 🐱 Remodel the folder structure inside the (authenticated) folder
// 🐱 Create a drawer with 2 pages: the tabs page and a settings page
// 🐱 Fix routing issue in app/_layout.tsx

// 🦫 Add a menu toggle to the Home page
// 🦫 Fix all duplicate headers and styling issues

// 🦉 Install additional packages for drawer: npx expo install @react-navigation/drawer react-native-gesture-handler react-native-reanimated

const DrawerLayout = () => {
  return (
    <Drawer
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.background,
        },
        headerTintColor: '#fff',
        drawerActiveBackgroundColor: Colors.primary,
        drawerActiveTintColor: '#fff',
      }}>
      {/* 🐱 Define Screens with <Drawer.Screen name="filename"> */}
    </Drawer>
  );
};
export default DrawerLayout;
