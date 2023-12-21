import React from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";

type PageHeaderProps = {
  title: string;
  subtitle: string;
};

export const PageHeader = ({ title, subtitle }: PageHeaderProps): JSX.Element => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.subtitle}>{subtitle}</Text>
  </View>
);
