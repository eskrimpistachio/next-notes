'use client';
import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

export default function DeletePostButton({ notesId }) {
  const router = useRouter();

  async function handleClick() {
    try {
      await fetch(`../api/notes/${notesId}`, {
        method: 'DELETE',
      });
      router.replace('/')
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <Button type="submit" colorScheme="red" onClick={handleClick}>
      Delete Notes
    </Button>
  );
}
