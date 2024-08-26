import Link from 'next/link';
import prisma from '@/lib/db';
import { addUser } from '@/actions/actions';

export default async function Users() {
  const users = await prisma.user.findMany();
  return (
    <main className={'mt-5 flex flex-col items-center justify-center gap-5'}>
      <Link className={'underline'} href={'/'}>
        Go to home
      </Link>

      <h1> All Users</h1>
      <ul>
        <hr />
        {users.map((user) => (
          <li key={user.id}>
            <div className="flex items-center justify-between gap-3 py-1">
              <div>{user.name}</div>
              <div>{user.email}</div>
            </div>
            <hr />
          </li>
        ))}
      </ul>
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
