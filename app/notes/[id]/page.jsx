import prisma from '@/prisma/prisma';
import DeleteNotesButton from '@/app/components/DeleteNotesButton';
import { Button } from '@chakra-ui/react';
import Link from 'next/link';

export default async function DetailNotes({ params }) {

  const notes = await prisma.notes.findMany({
    where: {
      id: params.id,
    },
  });

  return (
    <>
      {notes.map((n) => (
        <div key={n.id} className="py-8 mx-16 flex flex-col gap-16">
          <h1 className="text-2xl font-bold">{n.title}</h1>
          <p>{n.body}</p>
          <p>Created at : {JSON.stringify(n.createdAt)}</p>
          <div className="flex flex-row gap-4">
            <Link href="/">
              <Button colorScheme="green">Back to all notes</Button>
            </Link>
            <DeleteNotesButton notesId={n.id} />
          </div>
        </div>
      ))}
    </>
  );
}
