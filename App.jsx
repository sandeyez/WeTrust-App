import HomeScreen from "./app/components/pages/HomeScreen";
import { StepProvider, useSteps } from "./app/contexts/stepContext";
import "react-native-get-random-values";
import { useState, useEffect } from "react";
import AppLoading from "expo-app-loading";
import { PatientProvider } from "./app/contexts/patientContext";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EndScreen from "./app/components/pages/EndScreen";
import SplashScreen from "./app/components/pages/SplashScreen";

export default function App() {
  return (
    <NavigationContainer>
      <StepProvider>
        <PatientProvider>
          <AppContent />
        </PatientProvider>
      </StepProvider>
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

function AppContent() {
  const [render, setRender] = useState(true);

  const { steps } = useSteps();

  useEffect(() => {
    setRender(steps.length > 0);
  }, [steps]);

  return render ? (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="End"
        component={EndScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  ) : (
    <SplashScreen />
  );
}
