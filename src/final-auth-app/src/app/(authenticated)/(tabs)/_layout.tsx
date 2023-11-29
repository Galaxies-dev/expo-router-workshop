import Colors from '@/constants/Colors';
import { useAuth } from '@/context/AuthContext';
import { Ionicons } from '@expo/vector-icons';
import { DrawerToggleButton } from '@react-navigation/drawer';
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity } from 'react-native';

const Layout = () => {
  const { onLogout } = useAuth();
  return (
    <>
      <StatusBar style="light" />

      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors.primary,
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerTintColor: '#fff',
          headerRight: () => (
            <TouchableOpacity onPress={onLogout}>
              <Ionicons name="log-out-outline" size={24} color="white" />
            </TouchableOpacity>
          ),
          headerLeft: () => <DrawerToggleButton tintColor="#fff" />,
        }}>
        <Tabs.Screen
          name="home"
          options={{
            title: 'My Homefeed',
            tabBarLabel: 'Home',
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'My Profile',
            tabBarLabel: 'Profile',
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="person-circle-outline" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
};
export default Layout;
