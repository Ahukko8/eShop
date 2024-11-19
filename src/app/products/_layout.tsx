import { Stack } from "expo-router";
import { Pressable } from "react-native";
import {Ionicons} from '@expo/vector-icons'


export default function ProductsLayout() {
    return (
        <Stack>
            <Stack.Screen name="[slug]" options={({ navigation }) => ({
                headerShown: true,
                headerLeft: () => (
                    <Pressable onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back" size={24} color="black" />

                    </Pressable>
                )

            })} />
        </Stack>
    )
}