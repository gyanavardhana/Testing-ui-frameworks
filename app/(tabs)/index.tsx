import React from 'react';
import { ScrollView, View, Text as RNText } from 'react-native';
import { Button as UIKittenButton } from '@ui-kitten/components';
import { Button as PaperButton, Provider as PaperProvider } from 'react-native-paper';
import { Button as RNEButton } from 'react-native-elements';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { Button as GluestackButton } from '@/components/ui/button';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  // Common button style based on Figma specs
  const figmaButtonStyle = {
    width: 329,
    height: 52,
    paddingTop: 8, // sm padding
    paddingRight: 50,
    paddingBottom: 8, // sm padding
    paddingLeft: 50,
    borderRadius: 24, // xxxl border radius
    marginVertical: 15,
  };

  // Common text style
  const buttonTextStyle = {
    fontWeight: 'bold',
    fontSize: 16,
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <RNText style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>
        All UI Framework Buttons
      </RNText>

      {/* UI Kitten Button */}
      <View style={{ marginVertical: 10 }}>
        <LinearGradient
          colors={['#FFEE59', '#FFFFFF']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            ...figmaButtonStyle,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <UIKittenButton
            style={{
              backgroundColor: 'transparent',
              borderWidth: 0,
              width: '100%',
              height: '100%',
            }}
            appearance="ghost"
          >
            {evaProps => <RNText style={{ ...buttonTextStyle, color: '#000' }}>UI Kitten Button</RNText>}
          </UIKittenButton>
        </LinearGradient>
      </View>

      {/* React Native Paper Button */}
      <PaperProvider>
        <View style={{ marginVertical: 10 }}>
          <LinearGradient
            colors={['#FFEE59', '#FFFFFF']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              ...figmaButtonStyle,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <PaperButton
              mode="text"
              labelStyle={{ ...buttonTextStyle, color: '#000' }}
              style={{
                width: '100%',
                height: '100%',
                justifyContent: 'center',
              }}
            >
              React Native Paper
            </PaperButton>
          </LinearGradient>
        </View>
      </PaperProvider>

      {/* React Native Elements Button */}
      <RNEButton
        title="React Native Elements"
        ViewComponent={LinearGradient}
        linearGradientProps={{
          colors: ['#FFEE59', '#FFFFFF'],
          start: { x: 0, y: 0 },
          end: { x: 1, y: 0 },
        }}
        buttonStyle={{
          ...figmaButtonStyle,
          backgroundColor: 'transparent',
        }}
        titleStyle={{
          ...buttonTextStyle,
          color: '#000',
        }}
      />

      {/* Gluestack Button */}
      <GluestackUIProvider>
        <View style={{ marginVertical: 10 }}>
          <LinearGradient
            colors={['#FFEE59', '#FFFFFF']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              ...figmaButtonStyle,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <GluestackButton
              size="md"
              variant="solid"
              style={{
                backgroundColor: 'transparent',
                borderWidth: 0,
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <RNText style={{ ...buttonTextStyle, color: '#000' }}>
                Gluestack Button
              </RNText>
            </GluestackButton>
          </LinearGradient>
        </View>
      </GluestackUIProvider>
    </ScrollView>
  );
}