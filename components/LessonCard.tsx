import React, { useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native"
import { FontAwesome } from "@expo/vector-icons" // or use any other icon lib you prefer

interface LessonCardProps {
  title: string
  subtitle: string
  actionType: "start" | "review"
  onActionClick: () => void
}

export function LessonCard({
  title,
  subtitle,
  actionType,
  onActionClick,
}: LessonCardProps) {
  const [modalVisible, setModalVisible] = useState(false)
  const buttonText = actionType === "start" ? "Start Lesson" : "Review Lesson"

  return (
    <>
      <TouchableOpacity
        style={styles.card}
        onPress={() => setModalVisible(true)}
        activeOpacity={0.9}
      >
        <View style={styles.iconCircle}>
          <FontAwesome name="star" size={24} color="#A86ED4" />
        </View>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>

      {/* Small Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.popupOverlay}>
          <View style={styles.popupBox}>
            <Text style={styles.popupTitle}>{title}</Text>
            <Text style={styles.popupSubtitle}>{subtitle}</Text>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false)
                onActionClick()
              }}
              style={styles.popupButton}
            >
              <Text style={styles.popupButtonText}>{buttonText}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    paddingVertical: 24,
    paddingHorizontal: 16,
    alignItems: "center",
    margin: 10,
  },
  iconCircle: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 50,
    marginBottom: 10,
  },
  title: {
    color: "#fff",
    fontWeight: "600",
    textAlign: "center",
  },
  // Modal styles - updated to match image
  popupOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  popupBox: {
    backgroundColor: "#A86ED4", // Purple background like the card
    borderRadius: 24,
    padding: 24,
    width: 300,
    alignItems: "center",
  },
  popupTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff", // White text
    marginBottom: 4,
  },
  popupSubtitle: {
    fontSize: 16,
    color: "#fff", // White text
    marginBottom: 20,
    textAlign: "center",
    opacity: 0.9,
  },
  popupButton: {
    backgroundColor: "#FFEB81", // Yellow button
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginTop: 10,
    width: "80%",
  },
  popupButtonText: {
    color: "#000", // Black text for contrast on yellow
    fontWeight: "600",
    fontSize: 16,
    textAlign: "center",
  },
})