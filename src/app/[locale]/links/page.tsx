import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { PixelButton } from '@components/Button';
import { Link } from '@navigation';

type MetadataProps = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: MetadataProps) {
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('Links.title'),
    description: t('Links.description'),
    keywords: t('Links.keywords'),
    openGraph: {
      title: t('Links.title'),
      description: t('Links.description'),
      images: [
        {
          url: 'https://image.himaa.me/hima-chan-posing.png',
        },
      ],
    },
  };
}

const Links = () => {
  const t = useTranslations('Links');

  return (
    <div className='flex flex-col items-center gap-6 mb-48'>
      <h1 className='mt-4 mb-4'>{t('personal_title')}</h1>
      <div className='flex flex-col'>
        <Link href='https://www.linkedin.com/in/hima7459/' passHref>
          <PixelButton>
            <Image
              height={24}
              width={24}
              src='https://image.himaa.me/pixel-linkedin.png'
              alt='ig'
            ></Image>{' '}
            <p className='font-PressStart2P'>{t('linkedin')}</p>
          </PixelButton>
        </Link>
        <br></br>
        <Link href='https://www.github.com/vichannnnn' passHref>
          <PixelButton>
            <Image
              height={24}
              width={24}
              src='https://image.himaa.me/pixel-github.png'
              alt='ig'
            ></Image>{' '}
            <p className='font-PressStart2P'>{t('github')}</p>
          </PixelButton>
        </Link>
        <br></br>
        <Link href='https://www.instagram.com/plum.blossoms.in.the.snow/' passHref>
          <PixelButton>
            <Image
              height={24}
              width={24}
              src='https://image.himaa.me/pixel-instagram.png'
              alt='ig'
            ></Image>{' '}
            <p className='font-PressStart2P'>{t('instagram')}</p>
          </PixelButton>
        </Link>
      </div>

      <h1>{t('project_title')}</h1>
      <div className='flex flex-col'>
        <Link href='https://mugg.ing' passHref>
          <PixelButton>
            <Image
              height={24}
              width={24}
              src='https://image.himaa.me/pixel-grail.png'
              alt='ig'
            ></Image>{' '}
            <p className='font-PressStart2P'>{t('holy_grail')}</p>
          </PixelButton>
        </Link>
      </div>
    </div>
  );
};

export default Links;
