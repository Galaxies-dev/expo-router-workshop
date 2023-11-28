import { Link, Slot, Stack, useSegments } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { Platform, Pressable, Text } from 'react-native';

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
            name="(util)/disclaimer"
            options={{ presentation: 'modal', title: 'Disclaimer' }}
          />
        </Stack>
      </>
    );
  }
};

const HeaderLink = ({ href, text }: any) => {
  const segments = useSegments();
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (segments.length < 2) return;
    const path = '/' + segments.join('/');
    setSelected(path === href);
  }, [segments]);

  return (
    <Link href={href} asChild>
      <Pressable>
        <Text
          style={{
            color: '#fff',
            fontSize: 18,
            textDecorationLine: selected ? 'underline' : 'none',
          }}>
          {text}
        </Text>
      </Pressable>
    </Link>
  );
};

export default RootLayout;
