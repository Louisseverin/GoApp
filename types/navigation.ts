import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  VerifyOTP: undefined;
  Home: undefined;
};

export type VerifyOTPScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "VerifyOTP">;
  route: RouteProp<RootStackParamList, "VerifyOTP">;
};
