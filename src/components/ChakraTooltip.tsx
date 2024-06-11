import { Button, HStack, Heading, Stack, Tooltip } from "@chakra-ui/react";
import { useEffect } from "react";
const ChakraTooltip = () => {
  useEffect(() => {
    console.log("ToolTip");
  }, []);
  return (
    <Stack gap={4}>
      <Heading size="md">Tooltip</Heading>

      <Stack spacing={10}>
        <HStack justifyContent={"space-around"} flexWrap={"wrap"}>
          <Tooltip hasArrow label="Auto start" placement="auto-start">
            <Button>Auto-Start</Button>
          </Tooltip>

          <Tooltip hasArrow label="Auto" placement="auto">
            <Button>Auto</Button>
          </Tooltip>

          <Tooltip hasArrow label="Auto end" placement="auto-end">
            <Button>Auto-End</Button>
          </Tooltip>
        </HStack>

        <HStack justifyContent={"space-around"} flexWrap={"wrap"}>
          <Tooltip hasArrow label="Top start" placement="top-start">
            <Button>Top-Start</Button>
          </Tooltip>

          <Tooltip hasArrow label="Top" placement="top">
            <Button>Top</Button>
          </Tooltip>

          <Tooltip hasArrow label="Top end" placement="top-end">
            <Button>Top-End</Button>
          </Tooltip>
        </HStack>

        <HStack justifyContent={"space-around"} flexWrap={"wrap"}>
          <Tooltip hasArrow label="Right start" placement="right-start">
            <Button>Right-Start</Button>
          </Tooltip>

          <Tooltip hasArrow label="Right" placement="right">
            <Button>Right</Button>
          </Tooltip>

          <Tooltip hasArrow label="Right end" placement="right-end">
            <Button>Right-End</Button>
          </Tooltip>
        </HStack>

        <HStack justifyContent={"space-around"} flexWrap={"wrap"}>
          <Tooltip hasArrow label="Bottom start" placement="bottom-start">
            <Button>Bottom Start</Button>
          </Tooltip>

          <Tooltip hasArrow label="Bottom" placement="bottom">
            <Button>Bottom</Button>
          </Tooltip>

          <Tooltip hasArrow label="Bottom end" placement="bottom-end">
            <Button>Bottom End</Button>
          </Tooltip>
        </HStack>

        <HStack justifyContent={"space-around"} flexWrap={"wrap"}>
          <Tooltip hasArrow label="Left start" placement="left-start">
            <Button>Left-Start</Button>
          </Tooltip>

          <Tooltip hasArrow label="Left" placement="left">
            <Button>Left</Button>
          </Tooltip>

          <Tooltip hasArrow label="Left end" placement="left-end">
            <Button>Left-End</Button>
          </Tooltip>
        </HStack>
      </Stack>
    </Stack>
  );
};

export default ChakraTooltip;
