import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";

import { Colors } from "../../constants/Colors";
import { SignedIn, SignedOut } from "@clerk/clerk-expo";
import { Link } from "expo-router";

export default function Login() {
  return (
    <View
      style={{
        height: "100%",
      }}
    >
      <Image
        source={require("./../../assets/images/login.png")}
        style={styles.image}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Ready to adopt a friend?</Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          tenetur numquam esse consectetur aliquam quaerat eaque temporibus
          blanditiis repudiandae autem
        </Text>
        <SignedIn>
          <Text>Already Logged In</Text>
        </SignedIn>
        <SignedOut>
          <Link href="/sign-in" style={styles.button}>
            <Text style={{ textAlign: "center" }}>Login</Text>
          </Link>
          <Link href="/sign-up" asChild>
            <Text>or sign up to get started</Text>
          </Link>
        </SignedOut>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    display: "flex",
    justifyContent: "space-between",
    height: "40%",
    paddingVertical: 20,
  },
  image: {
    width: "100%",
    height: "60%",
    maxWidth: 600,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 30,
  },
  text: {
    color: Colors.GRAY,
  },
  button: {
    backgroundColor: Colors.PRIMARY,
    width: "100%",
    borderRadius: 14,
    padding: 14,
  },
});
