import React from "react";
import {
  ChevronRightIcon,
  HStack,
  Spacer,
  Text,
  useTheme,
  VStack,
} from "native-base";
import { truncateImageLink } from "../../../helpers/TextHelper";

interface ImageButtonProps {
  src: string;
  marginY?: number;
  children: React.ReactNode;
}

function ImageButton({ src, marginY = 4, children }: ImageButtonProps) {
  const theme = useTheme();

  return (
    <>
      <HStack
        backgroundColor={theme.colors.app.bg}
        borderRadius={5}
        padding={2}
        flexDirection="row"
        alignItems="center"
        space={2}
        my={marginY}
      >
        {children}
        <Spacer />
        <Text color={theme.colors.app.textPrimary}>
          {truncateImageLink(src)}
        </Text>
        <Spacer />
        <ChevronRightIcon />
      </HStack>
      <VStack />
    </>
  );
}

export default ImageButton;
