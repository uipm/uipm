import React, { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { FontProps } from "../@Interface/FontProps";
import { COLORS, FONTS, SIZES } from "../@Interface/Style";

export interface CustomInputProps {
  type: string;
  value?: string;
  icon?: string;
  font?: FontProps;
  placeholder?: string;
  color?: string;
  borderColor?: string;
  borderRadius?: number;
  inputLg?: boolean;
  inputSm?: boolean;
  inputRounded?: boolean;
  inputBorder?: boolean;
  onChange?: () => void;
}
export const CustomInput = ({
  type,
  value,
  icon,
  font = FONTS.font,
  placeholder = "Vui lòng nhập",
  color = COLORS.title,
  borderColor = COLORS.border,
  borderRadius = SIZES.radius,
  inputLg,
  inputSm,
  inputRounded,
  inputBorder,
  onChange = () => {},
}: CustomInputProps) => {
  const { colors } = useTheme();

  const [passwordShow, setPasswordShow] = useState(true);

  const handndleShowPassword = () => {
    setPasswordShow(!passwordShow);
  };
  const isShowIcon = icon !== undefined;
  return (
    <>
      <View style={{ position: "relative", justifyContent: "center" }}>
        <View
          style={{
            position: "absolute",
            left: 20,
            //top:16,
          }}
        >
          {icon && icon}
        </View>
        <TextInput
          secureTextEntry={type === "password" ? passwordShow : false}
          style={[
            {
              ...font,
              fontSize: 16,
              borderWidth: 1,
              color: color,
              borderColor,
              borderRadius,
              paddingVertical: 12,
              paddingHorizontal: 15,
            },
            isShowIcon && {
              paddingLeft: 50,
            },
            inputLg && {
              paddingVertical: 18,
            },
            inputSm && {
              paddingVertical: 7,
            },
            inputRounded && {
              borderRadius: 30,
            },
            inputBorder && {
              borderWidth: 0,
              borderBottomWidth: 1,
              borderRadius: 0,
            },
          ]}
          placeholderTextColor={colors.text}
          placeholder={placeholder}
          onChangeText={onChange}
          defaultValue={value && value}
        />
        {type === "password" && (
          <TouchableOpacity
            accessible={true}
            accessibilityLabel="Password"
            accessibilityHint="Password show and hidden"
            onPress={() => handndleShowPassword()}
            style={styles.eyeIcon}
          >
            <FeatherIcon
              color={colors.text}
              size={18}
              name={passwordShow ? "eye-off" : "eye"}
            />
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  eyeIcon: {
    position: "absolute",
    height: 54,
    width: 54,
    alignItems: "center",
    justifyContent: "center",
    right: 0,
    zIndex: 1,
    top: 0,
  },
});
