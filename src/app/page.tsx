import Link from 'next/link';

export default function Home() {
  return (
    <main className={'flex h-32 flex-col items-center justify-center gap-5'}>
      <h1>Hello world!</h1>

      <Link className={'underline'} href={'/users'}>
        Go to users
      </Link>
    </main>
  );
}
