import { Feather, Foundation } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";

export default function PostLayout() {
  return (
    <Stack
      screenOptions={{
        headerTintColor: "#000",
        contentStyle: {},
      }}
    >
      <Stack.Screen
        name="write"
        options={{
          title: "글쓰기",
          headerShown: true,
          headerLeft: () => (
            <Link href={"/"} replace>
              <Feather name="arrow-left" size={28} color={"black"} />
            </Link>
          ),
        }}
      />
    </Stack>
  );
}
