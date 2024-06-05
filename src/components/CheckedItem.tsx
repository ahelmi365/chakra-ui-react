import { CheckCircleIcon } from "@chakra-ui/icons";
import { HStack, Text } from "@chakra-ui/react";
interface Props {
  text: string;
}
const CheckedItem = ({ text }: Props) => {
  return (
    <HStack textAlign={["left", "left", "center"]}>
      <CheckCircleIcon color="#652CD3" />
      <Text textAlign={"left"}>{text}</Text>
    </HStack>
  );
};

export default CheckedItem;
