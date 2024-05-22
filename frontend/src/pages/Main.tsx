import { SyntheticEvent, useCallback } from 'react';
import { Box, Button, Stack, TextField } from '@mui/material';

import { useSignUpMutation } from 'store';

const Main = () => {
  const [signup] = useSignUpMutation();

  const handleSubmit = useCallback(async (e: SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      username: { value: string };
      password: { value: string };
    };
    const body = {
      username: target.username.value,
      password: target.password.value,
    };
    try {
      const result = await signup({ body }).unwrap();
      console.log(result);
    } catch (ex) {
      console.error(ex)
    }
  }, [signup]);

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
      <Box component="form" maxWidth={500} onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <TextField
            required
            size="small"
            name="username"
            label="Username"
          />
          <TextField
            required
            size="small"
            type="password"
            name="password"
            label="Password"
          />
          <Button
            type="submit"
            variant="contained"
          >
            Submit
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Main;
