import { useTranslations } from 'next-intl';
import { Button } from '@components/Button';
import { Link } from '@navigation';

export const ButtonsRow = () => {
  const t = useTranslations('Buttons');
  return (
    <>
      <Link href='/' passHref>
        <Button>{t('about')}</Button>
      </Link>
      <Link href='https://blog.himaa.me' passHref>
        <Button>{t('blog')}</Button>
      </Link>
      <Link href='/links' passHref>
        <Button>{t('links')}</Button>
      </Link>
      <Link href='https://image.himaa.me/hima-anon-resume.pdf' passHref>
        <Button>{t('resume')}</Button>
      </Link>
    </>
  );
};
