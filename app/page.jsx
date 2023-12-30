import Image from 'next/image';
import prisma from '@/prisma/prisma';
import Post from './components/Post';
import Link from 'next/link';
import { Button } from '@chakra-ui/react';

async function getPosts() {
  const posts = await prisma.Post.findMany({
    where: {
      published: true,
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return posts;
}

export default async function Home() {
  const post = await getPosts();

  // console.log(post);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center py-16 text-black gap-8">
        <h1 className="font-bold text-2xl border-b border-[#ABABAB] py-4">
          My Simple Notes App
        </h1>
        {post.length === 0 ? (
          <h1 className="font-bold text-xl">Tidak ada catatan</h1>
        ) : (
          <>
            {post.map((p) => (
              <Link key={p.id} href={`/post/${p.id}`}>
                <Post
                  id={p.id}
                  title={p.title}
                  content={p.content}
                  authorName={p.author.name}
                />
              </Link>
            ))}
          </>
        )}

        <Link href="/add-notes">
          <Button colorScheme="blue">Add Note</Button>
        </Link>
      </main>
    </>
  );
}
