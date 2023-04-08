import { Box } from '@chakra-ui/react';
import React from 'react';

export const Inner = (props) => {
  const { children } = props;
  return (
    <Box
      mx="auto"
      maxW={800}
      minW={300}
      py={100}
      px={0}
      display="flex"
      w="93%"
      flexDirection={{ base: 'column', md: 'row' }}
      justifyContent="space-between"
    >
      {children}
    </Box>
  );
};
