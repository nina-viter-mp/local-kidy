import Link from "next/link";
import prisma from '@/lib/db'
import {addUser} from "@/actions/actions";

export default async function Users() {

    const users = await prisma.user.findMany()
    return (
        <main className={'flex flex-col mt-5 justify-center items-center gap-5'}>
            <Link className={'underline'} href={'/'}>Go to home</Link>

            <h1> All Users</h1>
            <ul>
                <hr />
                {(users.map(user => (
                    <li  key={user.id}>
                        <div className="flex justify-between items-center py-1 gap-3">
                            <div>{user.name}</div>
                            <div>{user.email}</div>
                        </div>
                        <hr />
                    </li>
                )))}
            </ul>
            <form
                      action={addUser} className="flex flex-col gap-2">
                <input type="text" name="name"  placeholder="Name" className={'px-2 py-1 rounded-sm border'}/>
                <input type="email" name="email"  placeholder="Email" className={'px-2 py-1 rounded-sm border'}/>
                <button type="submit" className="rounded-sm bg-gray-100 py-1">Add user</button>
            </form>


        </main>
    );
}