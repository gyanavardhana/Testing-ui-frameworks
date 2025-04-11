import React from 'react';
import {
  ScrollView,
  View,
  Text as RNText,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Button as UIKittenButton } from '@ui-kitten/components';
import { Button as PaperButton, Provider as PaperProvider } from 'react-native-paper';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { Button as GluestackButton } from '@/components/ui/button';
import LinearGradient from 'react-native-linear-gradient';

const screenWidth = Dimensions.get('window').width;

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <RNText style={styles.header}>All UI Framework Buttons (Styled Like Figma)</RNText>

      {/* UI Kitten Button */}
      <UIKittenButton style={styles.button} size="large" appearance="filled">
        <RNText style={styles.buttonText}>UI Kitten Button</RNText>
      </UIKittenButton>

      {/* React Native Paper */}
      <PaperProvider>
        <PaperButton
          mode="contained"
          contentStyle={styles.paperContent}
          style={styles.button}
          labelStyle={styles.buttonText}
        >
          React Native Paper
        </PaperButton>
      </PaperProvider>

      {/* React Native Elements style with manual LinearGradient */}
      <LinearGradient
        colors={['#FFEE59', '#FFFFFF']}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
        style={styles.button}
      >
        <TouchableOpacity style={styles.gradientButtonTouchable}>
          <RNText style={styles.buttonText}>React Native Elements</RNText>
        </TouchableOpacity>
      </LinearGradient>

      {/* Gluestack UI */}
      <GluestackUIProvider>
        <GluestackButton
          size="md"
          variant="solid"
          style={[styles.button, styles.gradientBackground]}
        >
          <RNText style={styles.buttonText}>Gluestack Button</RNText>
        </GluestackButton>
      </GluestackUIProvider>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    width: 329,
    height: 52,
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  paperContent: {
    height: 52,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  gradientBackground: {
    backgroundColor: 'transparent',
  },
  gradientButtonTouchable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
});
