'use client';

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { format } from 'date-fns';
import { Prisma } from '@prisma/client';

export default function UsersTable({
  users,
  deleteUser,
}: {
  users: Prisma.UserCreateInput[];
  deleteUser: (id: number) => void;
}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Nr. of children</TableCell>
            <TableCell>Age of children</TableCell>
            <TableCell>Start date of care</TableCell>
            <TableCell>Frequency of care</TableCell>
            <TableCell>Total hours of care</TableCell>
            <TableCell>Date of creation</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row: Prisma.UserUncheckedCreateInput) => (
            <TableRow
              key={row.first_name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.first_name} {row.last_name}
              </TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.phone}</TableCell>
              <TableCell>{row.number_of_children}</TableCell>
              <TableCell>{row.age_of_children}</TableCell>
              <TableCell>{format(row.start_date_of_care!, 'dd-MM-yyyy')}</TableCell>
              <TableCell>{row.frequency}</TableCell>
              <TableCell>{row.total_hours}</TableCell>
              <TableCell>{format(row.createdAt!, 'dd-MM-yyyy HH:mm')}</TableCell>
              <TableCell>
                <IconButton onClick={() => deleteUser(row.id!)}>
                  <DeleteForeverIcon></DeleteForeverIcon>
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
