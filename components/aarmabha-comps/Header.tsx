import React from "react"
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ViewStyle,
    TextStyle,
    Dimensions,
} from "react-native"
import { ArrowLeft, Volume2, VolumeX } from "lucide-react-native"

interface HeaderProps {
    title?: string
    subtitle?: string
    showBack?: boolean
    showSoundIcon?: boolean
    isSoundOn?: boolean
    onBackPress?: () => void
    onToggleSound?: () => void
    alignLeft?: boolean
    backgroundColor?: string
    titleStyle?: TextStyle // 👈 add this
    subtitleStyle?: TextStyle // 👈 and this
}


const { width: SCREEN_WIDTH } = Dimensions.get("window")
export function Header({
    title = "",
    subtitle,
    showBack = false,
    showSoundIcon = false,
    isSoundOn = true,
    onBackPress,
    onToggleSound,
    alignLeft = false,
    backgroundColor = "transparent",
    titleStyle,
    subtitleStyle,
}: HeaderProps) {
    return (
        <View style={[styles.container, { backgroundColor }]}>
            {showBack ? (
                <TouchableOpacity onPress={onBackPress} style={styles.iconButton}>
                    <ArrowLeft color="white" size={24} />
                </TouchableOpacity>
            ) : (
                <View style={styles.iconPlaceholder} />
            )}

            <View
                style={[
                    styles.textContainer,
                    alignLeft ? { alignItems: "flex-start", marginLeft: 8 } : { alignItems: "center" },
                ]}
            >
                <Text style={[styles.title, titleStyle]}>{title}</Text>
                {subtitle ? <Text style={[styles.subtitle, subtitleStyle]}>{subtitle}</Text> : null}
            </View>

            {showSoundIcon ? (
                <TouchableOpacity onPress={onToggleSound} style={styles.iconButton}>
                    {isSoundOn ? (
                        <Volume2 color="white" size={24} />
                    ) : (
                        <VolumeX color="white" size={24} />
                    )}
                </TouchableOpacity>
            ) : (
                <View style={styles.iconPlaceholder} />
            )}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingVertical: 16,
        paddingHorizontal: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    } as ViewStyle,
    textContainer: {
        flex: 1,
    } as ViewStyle,
    title: {
        color: "white",
        fontSize: SCREEN_WIDTH < 350 ? 16 : 18,
        fontWeight: "700",
    } as TextStyle,
    subtitle: {
        color: "white",
        fontSize: 12,
        fontWeight: "400",
        marginTop: 2,
    } as TextStyle,
    iconButton: {
        padding: 4,
    } as ViewStyle,
    iconPlaceholder: {
        width: 24,
    } as ViewStyle,
})
