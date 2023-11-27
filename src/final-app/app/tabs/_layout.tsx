import { Ionicons } from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#171630',
        headerStyle: {
          backgroundColor: '#171630',
        },
        headerTintColor: '#fff',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'List',
          tabBarIcon: ({ size, color }) => <Ionicons name="list" size={size} color={color} />,
          headerRight: () => (
            <Link href={'/'} replace>
              <Ionicons name="log-out-outline" size={28} color={'#fff'} />
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'My Profile',
          tabBarIcon: ({ size, color }) => <Ionicons name="list" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
};
export default TabsLayout;
