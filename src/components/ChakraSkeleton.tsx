import {
  Avatar,
  AvatarBadge,
  HStack,
  Heading,
  SkeletonCircle,
  SkeletonText,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import profileImage from "../assets/images/ali.jpg";

const ChakraSkeleton = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
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
        <Heading size="md">Chakra-UI Skeleton</Heading>
      </SkeletonText>
      <Stack gap={4}>
        <HStack gap={4}>
          <SkeletonCircle size="3.5rem" isLoaded={isLoaded}>
            <Avatar
              name="Profile avatar"
              src={profileImage}
              size={"lg"}
              border={"1px solid gray"}
            >
              <AvatarBadge boxSize="1em" bg="green.500" />
            </Avatar>
          </SkeletonCircle>
          <SkeletonText noOfLines={1} skeletonHeight="2" isLoaded={isLoaded}>
            <Text>Ali Helmi</Text>
          </SkeletonText>
        </HStack>

        <SkeletonText
          mt="2"
          noOfLines={4}
          spacing="4"
          skeletonHeight="2"
          isLoaded={isLoaded}
        >
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            voluptates cum ipsum soluta recusandae, architecto natus enim
            excepturi ratione qui dolore eveniet magni iste .
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            voluptates cum ipsum soluta recusandae, architecto natus enim
            excepturi ratione qui dolore eveniet magni iste .
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            voluptates cum ipsum soluta recusandae, architecto natus enim
            excepturi ratione qui dolore eveniet magni iste .
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            voluptates cum ipsum soluta recusandae, architecto natus enim
            excepturi ratione qui dolore eveniet magni iste .
          </Text>
        </SkeletonText>
      </Stack>
    </Stack>
  );
};

export default ChakraSkeleton;
