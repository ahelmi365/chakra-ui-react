import { Alert, AlertIcon, Box } from "@chakra-ui/react";
import { ReactNode } from "react";
interface Props {
  status: "info" | "warning" | "success" | "error" | "loading" | undefined;
  children: ReactNode;
}
const ChakraAlert = ({ status, children }: Props) => {
  return (
    <Alert status={status} rounded={8}>
      <AlertIcon />
      <Box p={2} fontSize={"large"}>
        {children}
      </Box>
    </Alert>
  );
};

export default ChakraAlert;
