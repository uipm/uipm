import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Accordion from "react-native-collapsible/Accordion";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useTheme } from "@react-navigation/native";
import { AccordionSectionProps } from "./AccordionSectionProps";
import { FontProps } from "../@Interface/FontProps";
import { FONTS, COLORS } from "../@Interface/Style";
export interface AccordionHighlightProps {
  sections: AccordionSectionProps[];
  font?: FontProps;
  fontMedium?: FontProps;
  bgColorActive?: string;
  bgcolor?: string;
  colorActive?: string;
  color?: string;
  borderRadius?: number;
  borderBottomColor?: string;
}

export const AccordionHighlight = ({
  sections = [],
  font = FONTS.font,
  fontMedium = FONTS.fontMedium,
  borderRadius = 10,
  bgColorActive = COLORS.primary,
  bgcolor = COLORS.primaryLight,
  color = "#20212D",
  colorActive = "#fff",
}: AccordionHighlightProps) => {
  const { colors } = useTheme();
  const [activeSections, setActiveSections] = useState([0]);
  const setSections = (indexes: number[]) => {
    setActiveSections(indexes.includes(-1) ? [] : indexes);
  };

  const AccordionHeader = (item: any, _: any, isActive: any) => {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 12,
          paddingHorizontal: 15,
          borderRadius: borderRadius,
          backgroundColor: isActive ? bgColorActive : bgcolor,
        }}
      >
        <FontAwesome
          style={{ marginRight: 10 }}
          name={item.icon}
          size={15}
          color={isActive ? colorActive : color}
        />
        <Text
          style={[
            font,
            fontMedium,
            { color: isActive ? colorActive : color, flex: 1 },
          ]}
        >
          {item.title}
        </Text>
        <FontAwesome
          name={isActive ? "angle-up" : "angle-down"}
          size={20}
          color={isActive ? colorActive : color}
        />
      </View>
    );
  };

  const AccordionBody = (item: any, _: any, isActive: any) => {
    return (
      <View style={{ marginBottom: 15, marginTop: 10, paddingHorizontal: 15 }}>
        <Text style={[FONTS.fontSm, { color: colors.text }]}>
          {item.content}
        </Text>
      </View>
    );
  };

  return (
    <>
      <Accordion
        sections={sections}
        sectionContainerStyle={{ marginBottom: 8 }}
        duration={300}
        activeSections={activeSections}
        onChange={setSections}
        touchableComponent={TouchableOpacity}
        renderHeader={AccordionHeader}
        renderContent={AccordionBody}
      />
    </>
  );
};

export default AccordionHighlight;
