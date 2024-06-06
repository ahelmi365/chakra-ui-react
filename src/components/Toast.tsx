import {
  Button,
  Heading,
  Stack,
  ToastPosition,
  Wrap,
  WrapItem,
  useToast,
} from "@chakra-ui/react";
type TToastStatus =
  | "success"
  | "error"
  | "warning"
  | "info"
  | "loading"
  | undefined;
function ChakraToast() {
  console.log("Toast");
  const toast = useToast();
  const positions = [
    "top-left",
    "top",
    "top-right",
    "bottom-left",
    "bottom",
    "bottom-right",
  ];
  // ToastStatus[]
  const statuses: TToastStatus[] = ["success", "error", "warning", "info"];
  return (
    <Stack gap={4}>
      <Heading size="md">Chakra-UI Toasts</Heading>

      <Stack>
        <Heading size="sm">Positions</Heading>
        <Wrap spacing={"1rem"}>
          {positions.map((position, i) => (
            <WrapItem key={i}>
              <Button
                // colorScheme={Math.random() > 0.5 ? "green" : "red"}
                onClick={() =>
                  toast({
                    title: `${position} toast`,
                    position: position as ToastPosition,
                    isClosable: true,
                    status: "error",
                  })
                }
              >
                Show {position} toast
              </Button>
            </WrapItem>
          ))}
        </Wrap>
      </Stack>
      <Stack>
        <Heading size="sm">status</Heading>
        <Wrap>
          {statuses.map((status, i) => (
            <WrapItem key={i}>
              <Button
                onClick={() =>
                  toast({
                    title: `${status} toast`,
                    status: status,
                    isClosable: true,
                  })
                }
              >
                Show {status} toast
              </Button>
            </WrapItem>
          ))}
        </Wrap>
      </Stack>
    </Stack>
  );
}

export default ChakraToast;