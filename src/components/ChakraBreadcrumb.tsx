import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Stack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ChakraBreadcrumb = () => {
  useEffect(() => {
    console.log("Breadcrumb");
  }, []);
  return (
    <Stack gap={4}>
      <Heading size={"md"}>Chakra Breadcrumb</Heading>
      <Breadcrumb
        spacing="8px"
        separator={<ChevronRightIcon color="gray.500" />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink to="/" as={Link}>
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink to="#" as={Link}>
            About
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink to="#" as={Link}>
            Contact
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Stack>
  );
};

export default ChakraBreadcrumb;
