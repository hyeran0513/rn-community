import { Stack } from "expo-router";

export default function SettingLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {},
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "설정",
          headerShown: false,
        }}
      />
    </Stack>
  );
}
