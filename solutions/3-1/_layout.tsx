// Auth Scenario: Login
import Colors from '@/constants/Colors';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';

// Task: Create the Stack for the login area

// 🐱 Implement a stack layout with login and reigster
// 🐱 Display privacy as a modal

// 🦫 Fix the buttons inside the app/index.tsx

// 🦉 You can define a modal with presentation: 'modal'

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />

      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerTintColor: '#fff',
        }}>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="register" options={{ title: 'Create Account' }} />
        <Stack.Screen
          name="privacy"
          options={{
            presentation: 'modal',
            title: 'Privacy',
            headerStyle: {
              backgroundColor: Colors.background,
            },
            headerTintColor: '#fff',
            headerShown: Platform.OS === 'ios' ? false : true,
          }}
        />
      </Stack>
    </>
  );
}
