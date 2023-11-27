import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { View, Text, Button, TouchableOpacity } from 'react-native';

const Page = () => {
  return (
    <View>
      <Text>There will be dragons</Text>
      <Link href={'/about'} asChild>
        <TouchableOpacity
          style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 18 }}>Open about</Text>
          <Ionicons name="ios-arrow-forward" size={18} />
        </TouchableOpacity>
      </Link>

      {/* <Link href={'/tabs/'} replace asChild>
        <TouchableOpacity
          style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 18 }}>Open tabs</Text>
          <Ionicons name="ios-arrow-forward" size={18} />
        </TouchableOpacity>
      </Link> */}
    </View>
  );
};
export default Page;
