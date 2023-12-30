import { NextResponse } from 'next/server';
import prisma from '@/prisma/prisma';

export async function DELETE(request, { params }) {
  const id = params.id;

  const notes = await prisma.Notes.delete({
    where: { id },
  });

  return NextResponse.json(notes);
}
