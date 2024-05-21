import { Box } from '@mui/material';

import { useTestQuery } from 'store';

const Main = () => {
  const testQuery = useTestQuery();
  console.log(testQuery);

  return (
    <Box
      py={5}
      px={10}
      width="100dvw"
      height="100dvh"
      maxWidth="100dvw"
      maxHeight="100dvh"
      overflow="auto"
    >
      Main
    </Box>
  );
};

export default Main;
