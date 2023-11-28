import { Link, Route } from 'expo-router';
import './page.css';
import Head from 'expo-router/head';

const Page = () => {
  const routes: { name: string; path: Route<string> }[] = [
    { name: 'About', path: '/about' },
    { name: 'Disclaimer', path: '/util/disclaimer' },
    { name: 'Tabs', path: '/tabs/list/' },
    { name: 'Drawer', path: '/drawer/list/' },
  ];

  return (
    <div className="container">
      <Head>
        <title>Galactic Workshop</title>
        <meta name="description" content="Expo Router is awesome." />
      </Head>
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

  // return (
  //   <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  //     <h2>Expo Router Workshop App</h2>
  //     <div style={{ display: 'flex', flex: 1, flexDirection: 'column', gap: 12 }}>
  //       {routes.map((route) => (
  //         <Link key={route.path} href={route.path}>
  //           <button>
  //             <p style={{ fontSize: 18 }}>Open {route.name}</p>
  //           </button>
  //         </Link>
  //       ))}
  //     </div>
  //   </div>
  // );
};
export default Page;
