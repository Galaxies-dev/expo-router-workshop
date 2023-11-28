import { Link } from 'expo-router';
import { View, Text } from 'react-native';

const Page = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>404 - Nothing Here</Text>
      <Link href={'/'} asChild>
        <Text style={{ fontSize: 18 }}>Go Home</Text>
      </Link>
    </View>
  );
};
export default Page;
