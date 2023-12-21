import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { CharacterDetails, ListCharacters } from "@/screens";
import { Character } from "@/types";

export type RootStackParamList = {
  ListCharacters: undefined;
  CharacterDetails: {
    character: Character;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Router = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListCharacters" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ListCharacters" component={ListCharacters} />
        <Stack.Screen name="CharacterDetails" component={CharacterDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
