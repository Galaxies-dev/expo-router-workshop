import { User } from '@/interfaces/user';
import { getUserById } from '@/services/api';
import { Stack, useLocalSearchParams } from 'expo-router';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator, Button } from 'react-native';

const Page = () => {
  const { id, query } = useLocalSearchParams<{ id: string; query?: string }>();
  const [user, setUser] = useState<User>();

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
