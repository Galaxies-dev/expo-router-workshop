import { Slot, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';

const RootLayout = () => {
  if (Platform.OS === 'web') {
    return <Slot />;
  } else {
    return (
      <>
        <StatusBar style="light" />
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: '#171630',
            },
            headerTintColor: '#fff',
          }}>
          <Stack.Screen name="index" options={{ title: 'Home', headerShown: true }} />
          <Stack.Screen name="about" options={{ title: 'About', headerBackTitle: 'Go Back' }} />
          <Stack.Screen name="tabs" options={{ headerShown: false }} />
          <Stack.Screen name="drawer" options={{ headerShown: false }} />
          <Stack.Screen
            name="util/disclaimer"
            options={{ presentation: 'modal', title: 'Disclaimer' }}
          />
        </Stack>
      </>
    );
  }
};

export default RootLayout;
