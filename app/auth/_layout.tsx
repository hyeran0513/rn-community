import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerTintColor: "#000",
        contentStyle: {},
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "로그인",
          headerShown: true,
        }}
      />

      <Stack.Screen
        name="login"
        options={{
          title: "이메일 로그인",
          headerShown: true,
          headerBackButtonDisplayMode: "minimal",
        }}
      />

      <Stack.Screen
        name="signup"
        options={{
          title: "회원가입",
          headerShown: true,
          headerBackButtonDisplayMode: "minimal",
        }}
      />
    </Stack>
  );
}
