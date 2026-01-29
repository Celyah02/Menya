import { Image } from "expo-image";
import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function WelcomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <Image
        // TODO: Replace this with your final Menya logo asset once available.
        // e.g. require('@/assets/images/menya-logo.png')
        source={require("@/assets/images/menya-logo.png")}
        style={styles.logo}
        contentFit="contain"
      />

      <ThemedText type="title" style={styles.appName}>
        menya
      </ThemedText>

      <ThemedText type="subtitle" style={styles.tagline}>
        — Know Your Rights. Understand the Law. Speak Up.
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
    gap: 16,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 8,
    borderRadius: 32,
  },
  appName: {
    textTransform: "lowercase",
  },
  tagline: {
    textAlign: "center",
  },
});
