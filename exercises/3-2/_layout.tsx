// Auth Scenario: Auth Context
import Colors from '@/constants/Colors';
import { AuthProvider, useAuth } from '@/context/AuthContext';
import { Stack, useRouter, useSegments } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Task: Protect the (authenticated) group

// 🐱 Wrap the layout with our AuthProvider
// 🐱 Listen to token changes with useEffect
// 🐱 Route the user to the inside area if the token is present
// 🐱 Route the user to the outside area if the token is not present

// 🦫 Add a Logout button to the (authenticated)/home.tsx page

// 🦉 Compare path comnponents by using useSegments
// 🦉 To prevent pages stacking, use the replace method

const InitialLayout = () => {
  const { token, initialized } = useAuth();
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    if (!initialized) return;

    // 🐱 Implement the auth logic
  }, [token, initialized]);

  if (!initialized) return <ActivityIndicator size={'large'} style={{ flex: 1 }} />;

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
        <Stack.Screen name="index" options={{ headerShown: false }} />
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
};

export default function RootLayout() {
  return <>{/* 🐱 Implement the basic structure */}</>;
}
