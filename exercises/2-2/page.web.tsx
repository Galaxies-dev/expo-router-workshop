// Expo Router Platform Specific Modules
import { Link, Route } from 'expo-router';

// Task: Create different versions of the home page for web and native

// 🐱 Copy your app/index.tsx to components/home/page.tsx
// 🐱 Use `export { default } from '@/components/home/page';` in your app/index.tsx

// 🦫 Fix the TS error for the routes array
// 🦫 Fix the web layout in the app/_layout.tsx

// 🦉 You can use all kind of web tags in the web layout

const Page = () => {
  const routes = [
    { name: 'About', path: '/about' },
    { name: 'Disclaimer', path: '/util/disclaimer' },
    { name: 'Tabs', path: '/tabs/list/' },
    { name: 'Drawer', path: '/drawer/list/' },
  ];

  return (
    <div>
      <h2>Expo Router Workshop App</h2>
      {/* 🐱 Add links to our pages */}
    </div>
  );
};
export default Page;
