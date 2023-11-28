import { View, Text } from 'react-native';
import Head from 'expo-router/head';

const Page = () => {
  return (
    <View>
      <Head>
        <title>About Me</title>
        <meta name="description" content="The details page." />
        <meta property="expo:handoff" content="true" />
      </Head>
      <Text>About</Text>
    </View>
  );
};
export default Page;
