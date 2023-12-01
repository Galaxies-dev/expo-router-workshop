import { Stack } from 'expo-router';

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#171630',
        },
        headerTintColor: '#fff',
      }}>
      <Stack.Screen name="index" options={{ title: 'Home', headerShown: true }} />
      <Stack.Screen name="about" options={{ title: 'About', headerBackTitle: 'Go Back' }} />

      <Stack.Screen
        name="util/disclaimer"
        options={{ presentation: 'modal', title: 'Disclaimer' }}
      />
      <Stack.Screen name="tabs" options={{ headerShown: false }} />
      <Stack.Screen name="drawer" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
