import { NextResponse } from 'next/server';
import prisma from '@/prisma/prisma';

export async function DELETE(request, { params }) {
  const id = params.id;

  const post = await prisma.Post.delete({
    where: { id },
  });

  return NextResponse.json(post);
}
