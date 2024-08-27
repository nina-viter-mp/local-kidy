'use client';

import { addUser } from '@/actions/actions';
import Typography from '@mui/material/Typography';
import { Divider, TextField } from '@mui/material';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <main className="mt-7 flex w-full flex-col justify-center">
      <Container maxWidth="lg">
        <Typography variant="h6" sx={{ marginBottom: '16px' }}>
          Help us tailor your results to find nannies:
        </Typography>
        <form action={addUser} className="flex flex-col gap-3">
          <Divider sx={{ marginBottom: '4px' }} textAlign="left">
            Personal Details
          </Divider>
          <div className="flex gap-3">
            <TextField
              fullWidth
              type="text"
              name="first_name"
              placeholder="First Name"
              size="small"
            ></TextField>
            <TextField
              fullWidth
              type="text"
              name="last_name"
              placeholder="Last Name"
              size="small"
            ></TextField>
          </div>
          <TextField
            fullWidth
            type="email"
            name="email"
            placeholder="Email"
            size="small"
          ></TextField>
          <TextField
            fullWidth
            type="text"
            name="phone"
            placeholder="Phone Number"
            size="small"
          ></TextField>
          <TextField
            fullWidth
            type="text"
            name="address"
            placeholder="Address"
            size="small"
          ></TextField>
          <Divider sx={{ marginBottom: '4px' }} textAlign="left">
            Care Details
          </Divider>

          <Button type="submit" sx={{ width: 'auto' }} variant="contained">
            See nannies near me
          </Button>
        </form>
      </Container>
    </main>
  );
}
