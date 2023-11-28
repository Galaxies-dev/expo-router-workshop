// Expo Router Head and Meta
import { Link, Route } from 'expo-router';
import './page.css';

// Task: Add Meta information to your pages

// 🐱 Add a Head component to this page with title and meta

// 🦫 Also update the about page with meta information

// 🦉 You can import Head from expo-router/head

// 🔗 You can also host the app as a SPA: https://docs.expo.dev/distribution/publishing-websites/#hosting-on-third-party-services

const Page = () => {
  const routes: { name: string; path: Route<string> }[] = [
    { name: 'About', path: '/about' },
    { name: 'Disclaimer', path: '/util/disclaimer' },
    { name: 'Tabs', path: '/tabs/list/' },
    { name: 'Drawer', path: '/drawer/list/' },
  ];

  return (
    <div className="container">
      {/* 🐱 Add your Head with meta and title */}
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
