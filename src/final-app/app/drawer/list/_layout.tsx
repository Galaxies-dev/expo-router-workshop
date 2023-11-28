import { Ionicons } from '@expo/vector-icons';
import { DrawerToggleButton } from '@react-navigation/drawer';
import { Link, Slot, Stack } from 'expo-router';
import { Platform } from 'react-native';

const Layout = () => {
  if (Platform.OS === 'web') {
    return <Slot />;
  } else {
    return (
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#171630',
          },
          headerTintColor: '#fff',
          headerLeft: () => <DrawerToggleButton tintColor="#fff" />,
        }}>
        <Stack.Screen
          name="index"
          options={{
            title: 'List',
            headerRight: () => (
              <Link href={'/'} replace>
                <Ionicons name="log-out-outline" size={28} color={'#fff'} />
              </Link>
            ),
          }}
        />
        <Stack.Screen
          name="[id]"
          options={{
            title: '',
          }}
        />
      </Stack>
    );
  }
};
export default Layout;
