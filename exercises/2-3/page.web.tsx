// Expo Router CSS
import { Link, Route } from 'expo-router';

// Task: Use CSS for web styling

// 🐱 Import the CSS file
// 🐱

// 🦫 Fix the TS error for the routes array
// 🦫 Fix the web layout in the app/_layout.tsx

// 🦉 You can use all kind of web tags in the web layout

const Page = () => {
  const routes: { name: string; path: Route<string> }[] = [
    { name: 'About', path: '/about' },
    { name: 'Disclaimer', path: '/util/disclaimer' },
    { name: 'Tabs', path: '/tabs/list/' },
    { name: 'Drawer', path: '/drawer/list/' },
  ];

  return (
    <div>
      <h2>Expo Router Workshop App</h2>
      <div style={{ display: 'flex', flex: 1, flexDirection: 'column', gap: 12 }}>
        {routes.map((route) => (
          <Link key={route.path} href={route.path}>
            <button className="button">Open {route.name}</button>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Page;
