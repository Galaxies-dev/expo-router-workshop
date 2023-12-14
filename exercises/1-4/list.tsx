import { User } from '@/interfaces/user';
import { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { getUsers } from '@/services/api';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

// Task: Navigate to a dynamic details page

// 🐱 Add a new [id].tsx file in the tabs folder
// 🐱 Create a Link component and pass the id as a parameter like /tabs/42
// 🐱 Load the details from the API and display them on the [id] page

// 🦫 Define a new Screen entry for the [id] page
// 🦫 Update the header with API data
// 🦫 Style the StatusBar light

// 🦉 You can extract the ID using useLocalSearchParams

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
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        renderItem={renderRow}
        data={items}
        ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#ccc' }} />}
      />
    </View>
  );
};
export default Page;
