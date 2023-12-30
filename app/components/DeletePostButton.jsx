'use client';
import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

export default function DeletePostButton({ postId }) {
  const router = useRouter();

  async function handleClick() {
    try {
      await fetch(`../api/post/${postId}`, {
        method: 'DELETE',
      });
      router.replace('/')
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <Button type="submit" colorScheme="red" onClick={handleClick}>
      Delete Post
    </Button>
  );
}
