import React from 'react';
import { ScrollView, View, Text as RNText, StyleSheet } from 'react-native';
import { Button as UIKittenButton, Text as UIKittenText } from '@ui-kitten/components';
import { Button as PaperButton, Provider as PaperProvider } from 'react-native-paper';
import { Button as RNEButton } from 'react-native-elements';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { Button as GluestackButton } from '@/components/ui/button';
import { LinearGradient } from 'expo-linear-gradient';
import { Header } from '@/components/aarmabha-comps/Header';
import { useNavigation } from '@react-navigation/native'
import { ChapterCard } from '@/components/ChapterCard';
import { Image } from "react-native"
import { LessonCard } from '@/components/LessonCard';
import { StarIcon } from 'lucide-react-native';
export default function HomeScreen() {
  // Define constants for reuse
  const toggleSound = () => {
    console.log("hello")
  }
  const navigation = useNavigation()
  const GRADIENT_COLORS = ['#FFEE59', '#FFFFFF'];
  const GRADIENT_START = { x: 1, y: 0 };
  const GRADIENT_END = { x: 0, y: 0 };
  const BACKGROUND_COLORS = ['#6E38BF', '#9239AE', '#863FAF'];
  const BACKGROUND_LOCATIONS = [0.1743, 0.4617, 0.8885];

  // Common button config
  const buttonConfig = {
    dimensions: {
      width: 329,
      height: 52,
      borderRadius: 24,
    },
    text: {
      fontWeight: 'bold',
      fontSize: 18,
      color: '#000',
    },
    padding: {
      vertical: 8,
      horizontal: 50,
    },
  };

  // Button gradient wrapper component for DRY code
  const ButtonGradientWrapper = ({ children }) => (
    <View style={styles.buttonWrapper}>
      <LinearGradient
        colors={GRADIENT_COLORS}
        start={GRADIENT_START}
        end={GRADIENT_END}
        style={{
          width: buttonConfig.dimensions.width,
          height: buttonConfig.dimensions.height,
          borderRadius: buttonConfig.dimensions.borderRadius,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {children}
      </LinearGradient>
    </View>
  );

  return (
    <LinearGradient
      colors={BACKGROUND_COLORS}
      locations={BACKGROUND_LOCATIONS}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.gradientBackground}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Header
          title="Learn"
          subtitle="Become a Savvy Investor"
          alignLeft={true}
        />

        <Header
          title="Saving vs. Investing"
          showBack
          onBackPress={() => navigation.goBack()}
        />

        <Header
          title="Why Invest"
          showBack
          showSoundIcon
          isSoundOn={false}
          onBackPress={() => navigation.goBack()}
          onToggleSound={() => toggleSound()}
        />

        <ChapterCard
          chapterNumber={1}
          title="Investing Basics"
          icon={
            <Image
              source={require("../../assets/images/books.png")} // or use an Emoji/Icon component
              style={{ width: 48, height: 48 }}
            />
          }
        />

        <LessonCard
          title="Saving vs. Investing"
          subtitle="Understand how saving differs from investing"
          actionType="start"
          onActionClick={() => console.log("Lesson Started")}
        />

      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
  },
  scrollContainer: {
    padding: 20,
    flexGrow: 1,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  buttonWrapper: {
    marginVertical: 10,
    alignItems: 'center',
  },
  transparentButton: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullSizeButton: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
});