import prisma from '@/prisma/prisma';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const res = await request.json();
  const { title, body } = res;

  const result = await prisma.notes.create({
    data: {
      title,
      body,
    },
  });

  return NextResponse.json(result);
}
