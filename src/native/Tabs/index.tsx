import React, { useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { FONTS, SIZES ,COLORS} from "../@Interface/Style";

export interface TabButtonProps {
  buttons: string[];
  onClick: (index: number) => void;
  scrollX: Animated.Value;
  isButton?: boolean;
  color?:string;
  colorText?:string;
}
export const TabButton = ({
  buttons,
  onClick,
  scrollX,
  isButton,
  color:COLORS.primary,
  colorText:COLORS.primary
}: TabButtonProps) => {

  const [btnContainerWidth, setWidth] = useState(0);
  const btnWidth = btnContainerWidth / buttons.length;

  const translateX = scrollX.interpolate({
    inputRange: [0, SIZES.width - 60],
    outputRange: [0, btnWidth],
  });
  const translateXOpposit = scrollX.interpolate({
    inputRange: [0, SIZES.width - 60],
    outputRange: [0, -btnWidth],
  });

  return (
    <View
      style={{
        ...styles.btnContainer,
        borderBottomWidth: 1,
        borderColor: colors.borderColor,
      }}
      onLayout={(e) => setWidth(e.nativeEvent.layout.width)}
    >
      {buttons.map((btn, i) => (
        <TouchableOpacity
          key={btn}
          style={styles.btn}
          onPress={() => onClick(i)}
        >
          <Text style={{ ...FONTS.font, color: colorText }}>{btn}</Text>
        </TouchableOpacity>
      ))}
      <Animated.View
        style={[
          styles.animatedBtnContainer,
          { width: btnWidth, transform: [{ translateX }], borderRadius: isButton ? 10 : 0, },
        ]}
      >
        {buttons.map((btn) => (
          <Animated.View
            key={btn}
            style={[
              styles.animatedBtn,
              {
                width: btnWidth,
                transform: [{ translateX: translateXOpposit }],
              },
            ]}
          >
            <Text style={{ ...FONTS.font, color: COLORS.primary }}>{btn}</Text>
            <View
              style={{
                height: 3,
                width: btnWidth,
                backgroundColor: COLORS.primary,
                position: "absolute",
                bottom: 0,
              }}
            />
          </Animated.View>
        ))}
      </Animated.View>
    </View >
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    height: 45,
    flexDirection: "row",
    width: "100%",
  },
  btn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  animatedBtnContainer: {
    height: 45,
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
  },
  animatedBtn: {
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTextActive: {
    color: "#fff",
    fontWeight: "bold",
  },
});
