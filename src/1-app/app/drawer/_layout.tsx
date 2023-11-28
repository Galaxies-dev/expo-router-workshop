import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Help" onPress={() => alert('Link to help')} />
    </DrawerContentScrollView>
  );
}
const DrawerLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={CustomDrawerContent}
        screenOptions={{
          headerStyle: {
            backgroundColor: '#171630',
          },
          headerTintColor: '#fff',
          drawerHideStatusBarOnOpen: true,
          drawerActiveBackgroundColor: '#171630',
          drawerActiveTintColor: '#fff',
          drawerLabelStyle: { marginLeft: -20 },
        }}>
        <Drawer.Screen
          name="list"
          options={{
            drawerLabel: 'List',
            headerTitle: 'My List',
            drawerIcon: ({ size, color }) => (
              <Ionicons name="list-outline" size={size} color={color} />
            ),
            headerRight: () => (
              <Link href={'/'} replace>
                <Ionicons name="log-out-outline" size={28} color={'#fff'} />
              </Link>
            ),
          }}
        />
        <Drawer.Screen
          name="profile"
          options={{
            drawerLabel: 'Profile',
            headerTitle: 'My Profile',
            drawerIcon: ({ size, color }) => (
              <Ionicons name="person-outline" size={size} color={color} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};
export default DrawerLayout;
