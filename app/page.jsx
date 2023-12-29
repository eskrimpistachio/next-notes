import Image from 'next/image';
import prisma from '@/prisma/prisma';
import Post from './components/Post';

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

  console.log(post);

  return (
    <main className="flex min-h-screen flex-col items-center py-16">
      <h1 className="font-bold text-2xl">Notes</h1>
      {post.map((p) => (
        <Post
          key={p.id}
          id={p.id}
          title={p.title}
          content={p.content}
          authorName={p.author.name}
        />
      ))}
    </main>
  );
}
