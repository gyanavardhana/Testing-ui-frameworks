import React from "react"
import { View, Text, StyleSheet, ViewStyle, TextStyle } from "react-native"

interface ChapterCardProps {
  chapterNumber: number
  title: string
  icon: React.ReactNode
}

export function ChapterCard({ chapterNumber, title, icon }: ChapterCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>{icon}</View>
      <Text style={styles.chapterText}>Chapter {chapterNumber}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 12,
    backgroundColor: "transparent", // transparent background
  } as ViewStyle,
  iconContainer: {
    marginBottom: 8,
  } as ViewStyle,
  chapterText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  } as TextStyle,
  title: {
    fontSize: 16,
    fontStyle: "italic",
    color: "white",
    marginTop: 4,
  } as TextStyle,
})
