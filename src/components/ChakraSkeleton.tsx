import {
  HStack,
  Heading,
  SkeletonCircle,
  SkeletonText,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import profileImage from "../assets/images/ali.jpg";
import ProfileAvatar from "./ProfileAvatar";

const ChakraSkeleton = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    console.log("Skeleton");
    setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
  }, []);
  return (
    <Stack gap={4}>
      <SkeletonText
        isLoaded={isLoaded}
        noOfLines={1}
        skeletonHeight={4}
        width={"fit-content"}
      >
        <Heading size="md">Skeleton</Heading>
      </SkeletonText>
      <Stack gap={4}>
        <HStack gap={4}>
          <SkeletonCircle size="fit-content" isLoaded={isLoaded}>
            <ProfileAvatar profileImage={profileImage} size={"lg"} />
          </SkeletonCircle>
          <SkeletonText noOfLines={1} skeletonHeight="2" isLoaded={isLoaded}>
            <Text>Ali Helmi</Text>
          </SkeletonText>
        </HStack>

        <SkeletonText
          mt="2"
          noOfLines={5}
          spacing="4"
          skeletonHeight="2"
          isLoaded={isLoaded}
        >
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            voluptates cum ipsum soluta recusandae, architecto natus enim
            excepturi ratione qui dolore eveniet magni iste. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Omnis voluptates cum ipsum
            soluta recusandae, architecto natus enim excepturi ratione qui
            dolore eveniet magni iste. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Omnis voluptates cum ipsum soluta recusandae,
            architecto natus enim excepturi ratione qui dolore eveniet magni
            iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            voluptates cum ipsum soluta recusandae, architecto natus enim
            excepturi ratione qui dolore eveniet magni iste.
          </Text>
        </SkeletonText>
      </Stack>
    </Stack>
  );
};

export default ChakraSkeleton;
