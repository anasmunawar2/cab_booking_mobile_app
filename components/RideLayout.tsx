import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const RideLayout = ({ children }: { children: React.ReactNode }) => {
  return <GestureHandlerRootView>{children}</GestureHandlerRootView>;
};

export default RideLayout;
