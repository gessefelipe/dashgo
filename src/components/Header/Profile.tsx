import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps{
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Gessé Felipe de Sá Taveira</Text>
          <Text color="gray.300" fontSize="small">gessefelipe.gf@hotmail.com</Text>
        </Box>
      )}
      
      <Avatar size="md" name="Gessé Felipe de Sá Taveira" src="http://github.com/gessefelipe.png" />

    </Flex>
  );
}