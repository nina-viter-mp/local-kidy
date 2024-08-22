import Link from "next/link";

export default function Users() {
    return (
        <main className={'flex flex-col h-32 justify-center items-center gap-5'}>
            <h1>Users list:</h1>

            <ul>
                <li>User 1</li>
                <li>User 2</li>
            </ul>




            <Link className={'underline'} href={'/'}>Go to home</Link>
        </main>
    );
}