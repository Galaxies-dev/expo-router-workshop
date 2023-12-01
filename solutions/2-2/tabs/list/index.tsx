import { User } from '@/interfaces/user';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { getUsers } from '@/services/api';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const Page = () => {
  const [items, setItems] = useState<User[]>([]);

  useEffect(() => {
    const load = async () => {
      const users = await getUsers();
      setItems(users);
    };
    load();
  }, []);

  const renderRow = ({ item }: { item: User }) => {
    return (
      <Link href={`/util/${item.id}?query=foo`} asChild>
        {/* <Link href={`/tabs/list/${item.id}?query=foo`} asChild> */}
        <TouchableOpacity
          style={{
            padding: 10,
            height: 50,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text>
            {item.firstName} - {item.macAddress}
          </Text>
          <Ionicons name="chevron-forward-outline" size={24} color="black" />
        </TouchableOpacity>
      </Link>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <FlatList
        renderItem={renderRow}
        data={items}
        ListEmptyComponent={() => <ActivityIndicator />}
        ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#ccc' }} />}
      />
    </View>
  );
};
export default Page;
