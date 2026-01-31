import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import {
    Dimensions,
    FlatList,
    NativeScrollEvent,
    NativeSyntheticEvent,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { IconSymbol } from "@/components/ui/icon-symbol";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const BRAND_BLUE = "#3582DE";
const GREY_TEXT = "#687076";
const DOT_INACTIVE = "#D0D0D0";

const SLIDES = [
  {
    image: require("@/assets/images/onboarding1.png"),
    title: "Menya",
    body: "Murakaza neza kuri Menya! Twahinduye uburyo bwo gusobanukirwa uburenganzira bwawe no kubona ubufasha mu mategeko. Menya yagenewe kugufasha kumenya amategeko n'uburenganzira, ikoresheje ururimi rwawe rwa Kinyarwanda.",
  },
];

export default function OnboardingScreen() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const listRef = useRef<FlatList>(null);

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(e.nativeEvent.contentOffset.x / SCREEN_WIDTH);
    setCurrentIndex(index);
  };

  const goNext = () => {
    if (currentIndex < SLIDES.length - 1) {
      listRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    } else {
      router.replace("/(tabs)");
    }
  };

  const skip = () => {
    router.replace("/(tabs)");
  };

  const renderSlide = ({ item }: { item: (typeof SLIDES)[0] }) => (
    <View style={[styles.slide, { width: SCREEN_WIDTH }]}>
      <Image
        source={item.image}
        style={styles.illustration}
        contentFit="contain"
      />
      <View style={styles.textBlock}>
        <View style={styles.titleTextWrapper}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <Text style={styles.body}>{item.body}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <FlatList
        ref={listRef}
        data={SLIDES}
        renderItem={renderSlide}
        keyExtractor={(_, i) => String(i)}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={onScroll}
        onScroll={onScroll}
        scrollEventThrottle={16}
      />

      <View style={styles.footer}>
        <View style={styles.dots}>
          {SLIDES.map((_, i) => (
            <View
              key={i}
              style={[
                styles.dot,
                i === currentIndex ? styles.dotActive : styles.dotInactive,
              ]}
            />
          ))}
        </View>

        <View style={styles.actions}>
          <Pressable onPress={skip} style={styles.skipButton} hitSlop={12}>
            <Text style={styles.skipText}>Skip</Text>
          </Pressable>
          <Pressable onPress={goNext} style={styles.nextButton}>
            <IconSymbol name="chevron.right" size={24} color="#fff" />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  slide: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  illustration: {
    width: SCREEN_WIDTH - 48,
    height: 280,
    marginBottom: 24,
  },
  textBlock: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 16,
  },
  titleTextWrapper: {
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    color: BRAND_BLUE,
    textAlign: "center",
  },
  body: {
    fontSize: 16,
    fontWeight: "400",
    color: GREY_TEXT,
    textAlign: "center",
    lineHeight: 24,
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 48,
    paddingTop: 24,
  },
  dots: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    marginBottom: 32,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  dotActive: {
    backgroundColor: BRAND_BLUE,
  },
  dotInactive: {
    backgroundColor: DOT_INACTIVE,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  skipButton: {
    paddingVertical: 12,
    paddingRight: 12,
  },
  skipText: {
    fontSize: 16,
    fontWeight: "500",
    color: GREY_TEXT,
  },
  nextButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: BRAND_BLUE,
    alignItems: "center",
    justifyContent: "center",
  },
});
