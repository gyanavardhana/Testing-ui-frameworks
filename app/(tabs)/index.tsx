import React from 'react';
import { ScrollView, View, Text as RNText, StyleSheet } from 'react-native';
import { Button as UIKittenButton, Text as UIKittenText } from '@ui-kitten/components';
import { Button as PaperButton, Provider as PaperProvider } from 'react-native-paper';
import { Button as RNEButton } from 'react-native-elements';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { Button as GluestackButton } from '@/components/ui/button';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  // Define constants for reuse
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
        <RNText style={styles.headerText}>All UI Framework Buttons</RNText>

        {/* UI Kitten Button */}
        <ButtonGradientWrapper>
          <UIKittenButton
            style={styles.transparentButton}
            appearance="ghost"
          >
            {evaProps => (
              <UIKittenText 
                {...evaProps} 
                style={[buttonConfig.text, { fontSize: 16 }]}
              >
                UI Kitten Button
              </UIKittenText>
            )}
          </UIKittenButton>
        </ButtonGradientWrapper>

        {/* React Native Paper Button */}
        <PaperProvider>
          <ButtonGradientWrapper>
            <PaperButton
              mode="text"
              labelStyle={buttonConfig.text}
              style={styles.fullSizeButton}
            >
              React Native Paper
            </PaperButton>
          </ButtonGradientWrapper>
        </PaperProvider>

        {/* React Native Elements Button */}
        <RNEButton
          title="React Native Elements"
          ViewComponent={LinearGradient}
          linearGradientProps={{
            colors: GRADIENT_COLORS,
            start: GRADIENT_START,
            end: GRADIENT_END,
          }}
          buttonStyle={{
            ...buttonConfig.dimensions,
            backgroundColor: 'transparent',
            paddingVertical: buttonConfig.padding.vertical,
            paddingHorizontal: buttonConfig.padding.horizontal,
          }}
          titleStyle={buttonConfig.text}
          containerStyle={styles.buttonWrapper}
        />

        {/* Gluestack Button */}
        <GluestackUIProvider>
          <ButtonGradientWrapper>
            <GluestackButton
              size="md"
              variant="solid"
              style={styles.transparentButton}
            >
              <RNText style={buttonConfig.text}>Gluestack Button</RNText>
            </GluestackButton>
          </ButtonGradientWrapper>
        </GluestackUIProvider>
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