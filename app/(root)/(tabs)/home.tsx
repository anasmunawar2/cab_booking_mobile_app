import { SignedIn, useUser } from "@clerk/clerk-expo";
import { SafeAreaView, Text } from "react-native";

const Home = () => {
  const { user } = useUser();
  return (
    <SafeAreaView>
      <SignedIn>
        <Text>Hi {user?.emailAddresses[0].emailAddress}</Text>
      </SignedIn>
    </SafeAreaView>
  );
};

export default Home;
