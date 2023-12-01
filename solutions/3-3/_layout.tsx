import Colors from '@/constants/Colors';
import { AuthProvider, useAuth } from '@/context/AuthContext';
import { Stack, useRouter, useSegments } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { ActivityIndicator, Platform } from 'react-native';

const InitialLayout = () => {
  const { token, initialized } = useAuth();
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    if (!initialized) return;

    const inAuthGroup = segments[0] === '(authenticated)';

    if (token && !inAuthGroup) {
      router.replace('/home');
    } else if (!token && inAuthGroup) {
      router.replace('/');
    }
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
        <Stack.Screen name="(authenticated)/(tabs)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

export default function RootLayout() {
  return (
    <AuthProvider>
      <InitialLayout />
    </AuthProvider>
  );
}
