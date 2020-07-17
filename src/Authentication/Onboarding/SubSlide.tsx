import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Button } from "../../components";

interface SubSlideProps {
  subTitle: string;
  description: String;
  last?: Boolean;
  onPress: () => void;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 44,
  },
  subtitle: {
    fontFamily: "SFProText-Semibold",
    fontSize: 24,
    lineHeight: 30,
    marginBottom: 12,
    color: "#0C0D34",
    textAlign: "center",
  },
  description: {
    fontFamily: "SFProText-Regular",
    fontSize: 16,
    lineHeight: 24,
    color: "#0C0D34",
    textAlign: "center",
    marginBottom: 40,
  },
});

const SubSlide = ({ subTitle, description, last, onPress }: SubSlideProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subTitle}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button
        label={last ? "Lets get started" : "Next"}
        variant={last ? "primary" : "default"}
        {... { onPress }}
      />
    </View>
  );
};

export default SubSlide;
