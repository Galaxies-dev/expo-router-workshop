import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { Link, Slot, usePathname, useSegments } from 'expo-router';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Platform, Pressable, Text } from 'react-native';
import { useEffect, useState } from 'react';

const DrawerLayout = () => {
  if (Platform.OS === 'web') {
    return (
      <div style={{ flex: 1 }}>
        <header>
          <div
            style={{
              display: 'flex',
              gap: 20,
              padding: 16,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#171630',
            }}>
            <HeaderLink href="/drawer/list" text={'List'} />
            <HeaderLink href="/drawer/profile" text={'Profile'} />
          </div>
        </header>
        <Slot />
        <footer>
          <div
            style={{
              textAlign: 'center',
              padding: 16,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#171630',
              color: '#fff',
            }}>
            Made with ❤️ by{' '}
            <a
              href="https://galaxies.dev"
              target="_blank"
              style={{ textDecoration: 'none', color: '#fff' }}>
              Galaxies.dev
            </a>
          </div>
        </footer>
      </div>
    );
  } else {
    return <NativeDrawer />;
  }
};

const HeaderLink = ({ href, text }: any) => {
  const path = usePathname();
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    setSelected(path === href);
  }, [path]);

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

// Code from previous chapter
const NativeDrawer = () => (
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
          headerShown: false,
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
function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Help" onPress={() => alert('Link to help')} />
    </DrawerContentScrollView>
  );
}
export default DrawerLayout;
