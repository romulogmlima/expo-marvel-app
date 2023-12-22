import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Router } from "@/routes/Routes";

export default function App() {
  return (
    <SafeAreaProvider>
      <Router />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
