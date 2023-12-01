import { Ionicons } from '@expo/vector-icons';
import { Link, Stack } from 'expo-router';

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#171630',
        },
        headerTintColor: '#fff',
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
};
export default Layout;
