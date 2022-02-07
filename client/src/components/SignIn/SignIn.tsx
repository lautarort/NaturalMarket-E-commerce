import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import { Logo } from "./Logo";
import { OAuthButtonGroup } from "./OAuthButtonGroup";
import { PasswordField } from "./PasswordField";

const SignIn: React.FC = () => (
  <Container maxW="lg" py={{ base: "12" }} px={{ base: "1" }}>
    <Stack spacing="8">
      <Box
        py={{ base: "0" }}
        px={{ base: "2" }}
        bg={mode(
          "white",
          useBreakpointValue({ base: "inherit", sm: "gray.700" })
        )}
        borderRadius={{ base: "none", sm: "xl" }}
        borderStyle={"none"}
      >
        <Stack spacing="6">
          <Stack spacing="5">
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input id="email" type="email" />
            </FormControl>
            <PasswordField />
          </Stack>
          <HStack justify="space-between">
            <Checkbox defaultChecked={true} checked onBlur={true}>
              Remember me
            </Checkbox>
            <Button variant="link" colorScheme="blue" size="sm">
              Forgot password?
            </Button>
          </HStack>
          <Stack spacing="6">
            <Button
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"blue.400"}
              _hover={{
                bg: "blue.300",
              }}
            >
              Sign in
            </Button>
            <HStack>
              <Divider />
              <Text fontSize="sm" whiteSpace="nowrap">
                or continue with
              </Text>
              <Divider />
            </HStack>
            <OAuthButtonGroup />
            <HStack spacing="1" justify="center">
              <Text>Don't have an account?</Text>
              <Button variant="link" colorScheme="blue">
                Sign up
              </Button>
            </HStack>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Container>
);

export default SignIn;
