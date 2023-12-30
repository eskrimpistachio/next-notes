import prisma from '@/prisma/prisma';
import Notes from './components/Notes';
import Link from 'next/link';
import { Button } from '@chakra-ui/react';

export default async function Home() {
  const notes = await prisma.notes.findMany();

  return (
    <>
      <main className="flex min-h-screen flex-col items-center py-16 text-black gap-8">
        <h1 className="font-bold text-2xl border-b border-[#ABABAB] py-4">
          My Simple Notes App
        </h1>
        {notes.length === 0 ? (
          <h1 className="font-bold text-xl">Tidak ada catatan</h1>
        ) : (
          <>
            <div className='flex flex-row flex-wrap gap-8'>
              {notes.map((p) => (
                <Link key={p.id} href={`/notes/${p.id}`} >
                  <Notes id={p.id} title={p.title} />
                </Link>
              ))}
            </div>
          </>
        )}

        <Link href="/add-notes">
          <Button colorScheme="blue">Add Note</Button>
        </Link>
      </main>
    </>
  );
}
