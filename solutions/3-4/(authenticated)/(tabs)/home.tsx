import { useAuth } from '@/context/AuthContext';
import { View, Text, Button } from 'react-native';
const Page = () => {
  const { onLogout } = useAuth();
  return (
    <View>
      <Text>I AM INSIDE</Text>
      <Button title="Logout" onPress={onLogout} />
    </View>
  );
};
export default Page;
