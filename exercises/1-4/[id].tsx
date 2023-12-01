import { User } from '@/interfaces/user';
import { getUserById } from '@/services/api';
import { useState, useEffect } from 'react';
import { ActivityIndicator, View, Text, StyleSheet, Image } from 'react-native';

const Page = () => {
  // 🐱 Extract the ID from the URL
  const id = 1337;

  const [user, setUser] = useState<User>();

  useEffect(() => {
    const load = async () => {
      const user = await getUserById(id);
      setUser(user);
    };
    load();
  }, []);

  return (
    <View>
      {!user && <ActivityIndicator />}
      {user && (
        <View style={styles.card}>
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
