import React from "react";
import {StyleSheet} from "react-native";
import {HStack, Text, View, VStack, Button, Spacer} from "native-base";
import {Image} from "expo-image";

const OnboardingScreen = () => {
    return (
        <VStack justifyContent={"center"} alignItems={"center"} pt={10} space={"md"}>
            <Text fontSize={32}>
                Welcome to Lemmy!
            </Text>
            <Image
                source={require("../../assets/splash.png")}
                style={styles.image}
            />
            <Text fontSize={18} textAlign={"center"}>
                New to Lemmy? We&apos;ll help you find an instance and create an account.
            </Text>
            <HStack space={"md"}>
                <Button>
                    I Already Have an Account
                </Button>
                <Button>
                    Get Started
                </Button>
            </HStack>

        </VStack>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: 200,
        aspectRatio: 1
    }
});

export default OnboardingScreen;