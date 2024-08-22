import Link from "next/link";

export default function Home() {
  return (
    <main className={'flex flex-col h-32 justify-center items-center gap-5'}>
      <h1>Hello world!</h1>

      <Link className={'underline'} href={'/users'}>Go to users</Link>
    </main>
  );
}
