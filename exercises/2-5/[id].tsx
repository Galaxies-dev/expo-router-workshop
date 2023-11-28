// Expo Router Static Export
import { User } from '@/interfaces/user';
import { getUserById } from '@/services/api';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator, Button } from 'react-native';

// Task: Create and serve a static build of your app

// 🐱 Implement the generateStaticParams function

// 🦫 Create a public folder at the root of your project to serve static files

// 🦉 You can use the generateStaticParams function to generate static routes
// 🦉 Useful commands:
// npm i react-native-reanimated@3.5.4 (bugfix for web, breaks Expo Go)
// npx expo export -p web
// npx serve dist

export async function generateStaticParams(): Promise<Record<string, string>[]> {
  // 🐱 Return possible values for id
}

const Page = () => {
  const { id, query } = useLocalSearchParams<{ id: string; query?: string }>();
  const [user, setUser] = useState<User>();
  const router = useRouter();

  useEffect(() => {
    const load = async () => {
      const user = await getUserById(+id);
      setUser(user);
    };
    load();
  }, [id]);

  return (
    <View>
      {!user && <ActivityIndicator />}
      {user && (
        <View style={styles.card}>
          <Stack.Screen options={{ title: `${user?.firstName} ${user?.lastName}` }} />

          <Image
            source={{ uri: user.image }}
            style={{ width: '100%', height: 200, resizeMode: 'contain' }}
          />

          <Text>{user.firstName}</Text>
          <Text>{user.lastName}</Text>
          <Text>{user.email}</Text>
          <Text>{user.macAddress}</Text>
        </View>
      )}
      <Button title="Go back" onPress={() => router.back()} />
      <Button title="Open Profile" onPress={() => router.push('/tabs/profile')} />
      <Button
        title="Open User 5"
        onPress={() => router.push({ pathname: '/tabs/list/[id]', params: { id: '5' } })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
  },
});
export default Page;
