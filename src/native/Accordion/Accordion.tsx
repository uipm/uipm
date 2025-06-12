import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import NAccordion from "react-native-collapsible/Accordion";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useTheme } from "@react-navigation/native";

import { AccordionSectionProps } from "./AccordionSectionProps";
import { FontProps } from "../@Interface/FontProps";
import { FONTS, COLORS } from "../@Interface/Style";

export interface AccordionProps {
  sections: AccordionSectionProps[];
  font?: FontProps;
  fontMedium?: FontProps;
  colorActive?: string;
  color?: string;
  borderColor?: string;
}

export const Accordion = ({
  sections = [],
  font = FONTS.font,
  fontMedium = FONTS.fontMedium,
  borderColor = COLORS.darkBorder,
  color = "#20212D",
  colorActive = "#fff",
}: AccordionProps) => {
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
      <View style={{ marginBottom: 15 }}>
        <Text style={[FONTS.fontSm, { color: colors.text }]}>
          {item.content}
        </Text>
      </View>
    );
  };

  return (
    <>
      <NAccordion
        sections={sections}
        sectionContainerStyle={{
          borderBottomWidth: 1,
          borderColor: borderColor,
        }}
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
