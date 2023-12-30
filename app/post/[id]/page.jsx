import prisma from '@/prisma/prisma';
import DeletePostButton from '@/app/components/DeletePostButton';
import { Button } from '@chakra-ui/react';
import Link from 'next/link';

export default async function DetailPost({ params }) {
  const { id } = params.id;
  // const [post, setPost] = useState([]);

  const posts = await prisma.Post.findMany({
    where: {
      published: true,
      id: id,
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  // console.log(posts)

  return (
    <>
      {posts.map((p) => (
        <div className="py-8 mx-16 flex flex-col gap-16">
          <h1 className='text-2xl font-bold'>{p.title}</h1>
          <p>{p.content}</p>
          <div className="flex flex-row gap-4">
            <Link href="/">
              <Button colorScheme="green">Back to all notes</Button>
            </Link>
            <DeletePostButton postId={p.id} />
          </div>
        </div>
      ))}
    </>
  );
}
