// Expo Router Web Layout
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { Link, usePathname } from 'expo-router';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Platform, Pressable, Text } from 'react-native';
import { useEffect, useState } from 'react';

// Task: Create a Web Layout with a Header and a Footer

// 🐱 Update the app/drawer/_layout.tsx file to include a web layout
// 🐱 Show a HeaderLink to /drawer/list and /drawer/profile in the header
// 🐱 Replace the list.tsx with the app/tabs/list folder

// 🦫 Fix the web list layout inside the app/drawer/list/_layout.tsx file
// 🦫 Fix the native list layout and use a <DrawerToggleButton/>
// 🦫 Mark the selected header link with an underline

// 🦉 You can use div, header and footer in the web layout
// 🦉 You get all path segments with useSegments()

// 🔗 Fix for Hydration issue with Reanimated on the web: https://github.com/expo/router/issues/718#issuecomment-1806886353

const DrawerLayout = () => {
  if (Platform.OS === 'web') {
    return (
      <div style={{ flex: 1 }}>
        <header>{/* 🐱 Create a layout with header and footer */}</header>
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
    // 🐱 Check if the href matches the segments and set selected
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
