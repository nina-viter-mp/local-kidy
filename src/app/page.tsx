'use client';

import { addUser } from '@/actions/actions';
import Typography from '@mui/material/Typography';
import { Divider, TextField } from '@mui/material';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { DatePicker } from '@mui/x-date-pickers';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import Image from 'next/image';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function Home() {
  const [hostingPhotos, setHostingPhotos] = useState([]);
  return (
    <main className="mb-11 mt-7 flex w-full flex-col justify-center">
      <Container maxWidth="md">
        <Typography variant="h6" sx={{ marginBottom: '16px' }}>
          Help us tailor your results:
        </Typography>
        <form action={addUser} className="flex flex-col gap-3">
          <Divider sx={{ marginBottom: '4px' }} textAlign="left">
            Personal Details
          </Divider>
          <div className="flex gap-3">
            <TextField
              required
              fullWidth
              type="text"
              label="First Name"
              name="first_name"
              size="small"
            ></TextField>
            <TextField
              required
              fullWidth
              type="text"
              label="Last Name"
              name="last_name"
              size="small"
            ></TextField>
          </div>
          <TextField
            required
            fullWidth
            type="email"
            label="Email"
            name="email"
            size="small"
          ></TextField>
          <TextField
            fullWidth
            required
            type="text"
            label="Phone Number"
            name="phone"
            size="small"
          ></TextField>
          <TextField
            required
            fullWidth
            type="text"
            label="Address"
            name="address"
            size="small"
          ></TextField>
          <Divider sx={{ marginBottom: '4px' }} textAlign="left">
            Care Details
          </Divider>
          <div className="flex gap-3">
            <TextField
              required
              sx={{ width: '200px' }}
              type="number"
              label="Nr. of children"
              inputProps={{ min: 1 }}
              name="number_of_children"
              size="small"
            ></TextField>
            <TextField
              required
              fullWidth
              label="Age of children"
              name="age_of_children"
              size="small"
            ></TextField>
          </div>
          <DatePicker
            label="Start date of care"
            name="start_date_of_care"
            slotProps={{
              textField: {
                size: 'small',
                required: true,
              },
            }}
          />
          <TextField
            required
            fullWidth
            label="Frequency of care"
            name="frequency"
            size="small"
            select
          >
            <MenuItem value="everyday">Everyday</MenuItem>
            <MenuItem value="one_time">1 times per week</MenuItem>
            <MenuItem value="two_times">2 times per week</MenuItem>
            <MenuItem value="three_times">3 times per week</MenuItem>
            <MenuItem value="four_times">4 times per week</MenuItem>
            <MenuItem value="five_times">5 times per week</MenuItem>
          </TextField>
          <TextField
            required
            type="number"
            label="Total hours of care"
            inputProps={{ min: 1 }}
            name="total_hours"
            size="small"
          ></TextField>
          <Divider sx={{ marginBottom: '4px' }} textAlign="left">
            Hosting Details
          </Divider>
          <Typography variant="body1">
            Upload of photos of the home (play area, rest area, dining room, bathroom)
          </Typography>
          <div>
            <Button component="label" variant="text" tabIndex={-1} startIcon={<CloudUploadIcon />}>
              Upload files
              <VisuallyHiddenInput
                type="file"
                onChange={(event) =>
                  setHostingPhotos((photos) => [
                    ...photos,
                    ...Array.from(event.target.files).map((file) => URL.createObjectURL(file)),
                  ])
                }
                multiple
              />
            </Button>
          </div>
          <div className="flex flex-wrap gap-3">
            {hostingPhotos.map((photo) => {
              return (
                <div key={photo} className="relative">
                  <Image src={photo} width={100} height={100} alt="Hosting Photo"></Image>
                  <div className="absolute right-0 top-0 cursor-pointer rounded px-1">
                    <DeleteForeverIcon
                      className="text-red-400"
                      onClick={() =>
                        setHostingPhotos((photos) => photos.filter((p) => p !== photo))
                      }
                      fontSize="small"
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-11 flex justify-center">
            <Button type="submit" variant="contained">
              {`Save family's details`}
            </Button>
          </div>
        </form>
      </Container>
    </main>
  );
}
