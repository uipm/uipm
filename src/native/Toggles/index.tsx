import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import FeatherIcon from "react-native-vector-icons/Feather";

import { COLORS, FONTS } from '../@Interface/Style';

export interface ToggleProps {
    active?: boolean;
    onToggle?: (arg0: boolean) => any;
    type?: 'none' | 'icon' | 'text' | 'both';
    colorActive?: string
    colorNotActive?: string
    titleOn?: string
    titleOff?: string
}

export const Toggle = ({
    active,
    onToggle,
    type = 'none',
    colorActive = COLORS.success,
    colorNotActive = '#e8e9ea',
    titleOn = 'ON',
    titleOff = 'OFF'
}: ToggleProps) => {


    const [curActive, setCurActive] = useState(false);

    const offset = useSharedValue(0);
    const toggleStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: offset.value
                }
            ],
        };
    });
    useEffect(() => {
        if (active) {
            setCurActive(true);
            offset.value = withSpring(28)
        }
    }, [active])

    const renderType = () => {
        switch (type) {
            case 'none':
                return null;
            case 'icon':
                return (
                    <View
                        style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            flexDirection: "row",
                            alignItems: "center",
                            paddingHorizontal: 4,
                            justifyContent: "space-around",
                        }}
                    >
                        <FeatherIcon name={"check"} size={16} color={colorNotActive} />
                        <FeatherIcon name={"x"} size={16} color={colorNotActive} />
                    </View>
                )
            case 'text':
                return (
                    <View
                        style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            flexDirection: "row",
                            alignItems: "center",
                            paddingHorizontal: 4,
                            justifyContent: "space-around",
                        }}
                    >
                        <Text
                            style={{
                                ...FONTS.font,
                                ...FONTS.fontBold,
                                fontSize: 10,
                                color: COLORS.white,
                            }}
                        >
                            {titleOn}
                        </Text>
                        <Text
                            style={{
                                ...FONTS.font,
                                ...FONTS.fontBold,
                                fontSize: 10,
                                color: COLORS.white,
                            }}
                        >
                            {titleOff}
                        </Text>
                    </View>
                )
        }
    }


    const renderTypeBoth = ()=>{
        return(
            <View
      style={{
        height: 32,
        justifyContent: "center",
      }}
    >
      <TouchableOpacity
        onPress={() => {
          setCurActive(!active);
          if (active) {
            offset.value = withSpring(0);
          } else {
            offset.value = withSpring(30);
          }
        }}
        style={[
          {
            height: 17,
            width: 55,
            backgroundColor: active ? colorActive : colorNotActive,
            borderRadius: 30,
          },
        ]}
      >
        <Animated.View
          style={[
            toggleStyle,
            {
              height: 28,
              width: 28,
              backgroundColor: active ? colorActive : colorNotActive,
              borderRadius: 30,
              borderWidth: 1,
              borderColor: active ? colorActive : colorNotActive,
              top: -5,
              left: -2,
              shadowColor: "rgba(0,0,0,.6)",
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.3,
              shadowRadius: 4.65,
              elevation: 8,
            },
          ]}
        />
      </TouchableOpacity>
    </View>
        )
    }
    return type == 'both' ? renderTypeBoth()
        : (
            <TouchableOpacity
                onPress={() => {
                    onToggle && onToggle(curActive);
                    setCurActive(!curActive);
                    if (active) {
                        offset.value = withSpring(0)
                    } else {
                        offset.value = withSpring(28)
                    }
                }}
                style={[{
                    height: 32,
                    width: 60,
                    backgroundColor: active ? colorActive : colorNotActive,
                    borderRadius: 30,
                }]}
            >
                {renderType()}
                <Animated.View
                    style={[toggleStyle, {
                        height: 28,
                        width: 28,
                        backgroundColor: "#fff",
                        borderRadius: 30,
                        top: 2,
                        left: 2,
                    }]}
                />
            </TouchableOpacity>
        );
};
