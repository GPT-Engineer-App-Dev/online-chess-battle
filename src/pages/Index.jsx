import { Box, Flex, Text, useColorMode, useColorModeValue, IconButton, Container } from '@chakra-ui/react';
import { FaSun, FaMoon, FaChessBoard } from 'react-icons/fa';

const Index = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('gray.50', 'gray.800');
  const color = useColorModeValue('black', 'white');

  return (
    <Container maxW="container.xl" p={0} height="100vh">
      <Flex direction="column" height="100%" bg={bgColor} color={color}>
        <Flex justifyContent="space-between" alignItems="center" p={4}>
          <Text fontSize="2xl">Online Chess</Text>
          <IconButton
            aria-label="Toggle color mode"
            icon={useColorModeValue(<FaMoon />, <FaSun />)}
            onClick={toggleColorMode}
          />
        </Flex>
        <Flex flex={1} direction={{ base: 'column', md: 'row' }}>
          <Box flex={1} p={4}>
            <Text mb={2}>Chess Board:</Text>
            <Flex justifyContent="center" alignItems="center" height="full" bg="gray.300">
              <FaChessBoard size="50%" />
            </Flex>
          </Box>
          <Flex direction="column" width={{ base: '100%', md: '30%' }} p={4}>
            <Box bg="gray.200" p={4} mb={4}>
              <Text mb={2}>Player Chat:</Text>
              <Box height="200px" bg="white" />
            </Box>
            <Box bg="gray.200" p={4}>
              <Text mb={2}>Game Controls:</Text>
              <Box height="100px" bg="white" />
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Index;