import {
  Button,
  HStack,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import ChakraAlertDialog from "./AlertDialog";
import { useEffect } from "react";

const ChakraModal = () => {
  useEffect(() => {
    console.log("Modal");
  }, []);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Stack gap={4}>
      <Heading size="md">Modals</Heading>

      <HStack>
        <ChakraAlertDialog />

        <Button onClick={onOpen}>Open Modal</Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text fontSize={"sm"} fontWeight={"normal"}>
                Sit nulla est ex deserunt exercitation anim occaecat. Nostrud
                ullamco deserunt aute id consequat veniam incididunt duis in
                sint irure nisi. Mollit officia cillum Lorem ullamco minim
                nostrud elit officia tempor esse quis. Sunt ad dolore quis aute
                consequat.
              </Text>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="primary" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button colorScheme="gray">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </HStack>
    </Stack>
  );
};

export default ChakraModal;
