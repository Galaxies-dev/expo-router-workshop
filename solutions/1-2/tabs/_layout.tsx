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
        name="list"
        options={{
          title: 'List',
          tabBarIcon: ({ size, color }) => <Ionicons name="list" size={size} color={color} />,
          tabBarBadge: 9,
          headerRight: () => (
            <Link href={'/'} replace>
              <Ionicons name="log-out-outline" size={28} color={'#fff'} />
            </Link>
          ),
        }}
      />

      <Tabs.Screen
        name="action"
        options={{
          title: 'Action',
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="alert-circle-outline" size={size} color={color} />
          ),
        }}
        listeners={() => ({
          tabPress: (e) => {
            e.preventDefault();
            alert('Action!');
          },
        })}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'My Profile',
          tabBarIcon: ({ size, color }) => <Ionicons name="list" size={size} color={color} />,
        }}
      />

      <Tabs.Screen name="secret" options={{ href: null }} />
    </Tabs>
  );
};
export default TabsLayout;
