import prisma from '@/lib/db';
import Typography from '@mui/material/Typography';
import UsersTable from '@/components/users/UsersTable';
import { revalidatePath } from 'next/cache';

export default async function Users() {
  const users = await prisma.user.findMany();
  const usersCount = await prisma.user.count();

  const deleteUser = async (id: number) => {
    'use server';
    await prisma.user.delete({
      where: {
        id: id,
      },
    });
    revalidatePath('users');
  };
  return (
    <main className={'mt-5 flex flex-col items-center justify-center gap-5 px-7'}>
      <Typography variant="h6">All Families ({usersCount})</Typography>
      <UsersTable users={users} deleteUser={deleteUser}></UsersTable>
    </main>
  );
}
