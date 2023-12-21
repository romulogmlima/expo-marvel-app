import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image } from "react-native";

import { screenOptions, styles } from "./styles";

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
  const marvelLogo = require("../../assets/logo.png");
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListCharacters" screenOptions={screenOptions}>
        <Stack.Screen
          name="ListCharacters"
          component={ListCharacters}
          options={{
            headerTitle: (props) => <Image style={styles.logo} source={marvelLogo} />,
          }}
        />
        <Stack.Screen
          name="CharacterDetails"
          component={CharacterDetails}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
