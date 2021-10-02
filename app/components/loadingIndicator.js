import { ActivityIndicator, View } from "react-native";
import colors from "../../config/colors";
import React from "react";

const loadingIndicator = () => {
  return (
    <View style={{ height: 300, justifyContent: "center" }}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
};

export default loadingIndicator;
