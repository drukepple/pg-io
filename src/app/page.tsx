import { get } from './api/io/route';
import Tracks from '@/components/tracks';

export default async function Home() {
  const ioData = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center p-24 max-w-3xl">
      <h1 className="mb-4 text-4xl font-extrabold">Peter Garbiel’s I/O</h1>
      <p className="mb-8">Explore the various mixes.</p>
      <Tracks ioData={ioData} />
    </main>
  );
}

async function getData() {
  return get();
}