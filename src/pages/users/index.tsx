import { Avatar, Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" py="8" px={["5", "8"]}>
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>

            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>
        
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                { isWideVersion && <Th>Data de cadastro</Th> }
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  {/* <Avatar size="md" name="Gessé Felipe de Sá Taveira" src="https://www.gravatar.com/avatar/49556ce83a1ee71cd752b8a903abf67d?s=96&d=mm" /> */}

                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Gessé Felipe de Sá Taveira</Text>
                    <Text fontSize="sm" color="gray.300">gessefelipe.gf@hotmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>04 de Abril, 2021</Td> }
              </Tr>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  {/* <Avatar size="md" name="Ingrid dos Santos Martins Viana" src="https://scontent.fcgh17-1.fna.fbcdn.net/v/t1.18169-9/29793833_1828704147430099_1024729234689482558_n.jpg?_nc_cat=101&ccb=1-4&_nc_sid=09cbfe&_nc_ohc=D4ksQU0v9rMAX_yImiE&_nc_ht=scontent.fcgh17-1.fna&oh=3b09012caa203c4e702c0c08426de490&oe=613320CB" /> */}
                  
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Ingrid dos Santos Martins Viana</Text>
                    <Text fontSize="sm" color="gray.300">ingrid.smviana@gmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>04 de Abril, 2021</Td> }
              </Tr>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  {/* <Avatar size="md" name="Bob Martins de Sá" src="bob.jpg" /> */}

                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Bob Martins de Sá</Text>
                    <Text fontSize="sm" color="gray.300">bob.sa@gmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>04 de Abril, 2021</Td> }
              </Tr>
            </Tbody>


          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}