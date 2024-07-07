import { Button } from '@components';
import Link from 'next/link';

export const ButtonsRow = () => {
  return (
    <>
      <Link href='/' passHref>
        <Button>About</Button>
      </Link>
      <Link href='https://blog.himaa.me' passHref>
        <Button>Blog</Button>
      </Link>
      <Link href='/links' passHref>
        <Button>Links</Button>
      </Link>
      <Link href='https://image.himaa.me/hima-anon-resume.pdf' passHref>
        <Button>Resume</Button>
      </Link>
    </>
  );
};
