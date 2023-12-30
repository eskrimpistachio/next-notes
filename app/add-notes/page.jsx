'use client';

import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Container,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddNotes() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const router = useRouter();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await fetch('../api/add-notes', {
        method: 'POST',
        headers: {
          'body-Type': 'application/json',
        },
        body: JSON.stringify({ title, body }),
      });
      router.replace('/')
    } catch (error) {
      console.error(error);
    }

    setTitle('');
    setBody('');
  };

  return (
    <>
      <div className="text-black h-[100vh]">
        <Container className="text-center">
          <h1 className="font-bold text-2xl py-8">Add Notes</h1>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-8">
              <FormControl>
                <FormLabel htmlFor="title">Title :</FormLabel>
                <Input
                  id="title"
                  placeholder="Add your title here..."
                  borderColor="blue"
                  focusBorderColor="black"
                  type="text"
                  value={title}
                  onChange={handleTitleChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="body">Body : </FormLabel>
                <Textarea
                  id="body"
                  placeholder="Add your body here..."
                  borderColor="blue"
                  focusBorderColor="black"
                  value={body}
                  onChange={handleBodyChange}
                />
              </FormControl>
              <Button type="submit" colorScheme="blue">
                Submit
              </Button>
              <Link href="/">
                <Button colorScheme="green">Back to all notes</Button>
              </Link>
            </div>
          </form>
        </Container>
      </div>
    </>
  );
}
