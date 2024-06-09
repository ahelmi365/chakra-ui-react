import { Box } from "@chakra-ui/react";
import { useEffect } from "react";

const ResponsiveStyle = () => {
  useEffect(() => {
    console.log("Responsive Style");
  }, []);
  // base = 0em, sm = 30em, md = 48em, lg = 62em, xl = 80em,, 2xl = 96em

  // Here's how to interpret this syntax
  // fontSize={{ base: '24px', md: '40px', lg: '56px' }}:

  // 24px: From 0em upwards
  // 40px: From 48em upwards
  // 56px: From 62em upwards

  return (
    <>
      <Box
        width={[
          "100%", // 0-30em
          "50%", // 30em-48em
          "25%", // 48em-62em
          "15%", // 62em+
        ]}
        height={{
          base: "100%", // 0-48em
          md: "50%", // 48em-80em,
          xl: "25%", // 80em+
        }}
        bg="teal.400"
      >
        hiii
      </Box>
      {/* responsive font size */}
      <Box fontSize={["sm", "md", "lg", "xl"]}>Font Size</Box>
      {/* responsive margin */}
      <Box mt={[2, 4, 6, 8]} width="full" height="24px" bg="tomato" />
      {/* responsive padding */}
      <Box bg="papayawhip" p={[2, 4, 6, 8]}>
        Padding
      </Box>
    </>
  );
};

export default ResponsiveStyle;
