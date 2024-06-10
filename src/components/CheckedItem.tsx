import { CheckCircleIcon } from "@chakra-ui/icons";
import { HStack, Text } from "@chakra-ui/react";
interface Props {
  text: string;
  color: string;
}
const CheckedItem = ({ text, color }: Props) => {
  return (
    <HStack textAlign={["left", "left", "center"]} mt={".5rem"}>
      <CheckCircleIcon color={color} />
      <Text textAlign={"left"}>{text}</Text>
    </HStack>
  );
};

export default CheckedItem;
