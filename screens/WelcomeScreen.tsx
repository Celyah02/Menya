import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

const WELCOME_DURATION_MS = 3000;

export default function WelcomeScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/onboarding");
    }, WELCOME_DURATION_MS);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <ThemedView style={styles.container}>
      <Image
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
