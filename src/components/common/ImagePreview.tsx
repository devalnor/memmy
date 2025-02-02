import { Box, HStack, Text } from "@src/components/common/Gluestack";
import React from "react";
import { Dimensions } from "react-native";
import ImageViewer from "./ImageViewer/ImageViewer";

interface IProps {
  images: string[];
  postId: number;
  isNsfw: boolean;
  recycled?: React.MutableRefObject<{}>;
  setPostRead?: () => void;
}

function ImagePreview({
  images,
  postId,
  recycled,
  isNsfw,
  setPostRead,
}: IProps) {
  if (images.length === 1) {
    return (
      <ImageViewer
        source={images[0]}
        nsfw={isNsfw}
        postId={postId}
        recycled={recycled}
        setPostRead={setPostRead}
      />
    );
  }

  if (images.length >= 2 && images[0] !== images[1]) {
    return (
      <HStack space="xs">
        <ImageViewer
          source={images[0]}
          nsfw={isNsfw}
          postId={postId}
          recycled={recycled}
          heightOverride={200}
          widthOverride={Dimensions.get("screen").width / 2}
          setPostRead={setPostRead}
        />
        <ImageViewer
          source={images[1]}
          nsfw={isNsfw}
          postId={postId}
          recycled={recycled}
          heightOverride={200}
          widthOverride={Dimensions.get("screen").width / 2}
          setPostRead={setPostRead}
        />
        <Box position="absolute" right="$1" bottom="$1">
          <Box px="$1" m="$0.5" backgroundColor="gray700" borderRadius="$md">
            <Text size="2xs">{images.length} IMAGES</Text>
          </Box>
        </Box>
      </HStack>
    );
  }

  return null;
}

export default ImagePreview;
