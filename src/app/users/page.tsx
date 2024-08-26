import prisma from '@/lib/db';
import { addUser } from '@/actions/actions';
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
      <Typography variant="h6">All Users ({usersCount})</Typography>
      <UsersTable users={users} deleteUser={deleteUser}></UsersTable>
      <form action={addUser} className="flex flex-col gap-2">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className={'rounded-sm border px-2 py-1'}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={'rounded-sm border px-2 py-1'}
        />
        <button type="submit" className="rounded-sm bg-gray-100 py-1">
          Add user
        </button>
      </form>
    </main>
  );
}
