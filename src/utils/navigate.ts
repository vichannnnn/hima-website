import { useNavigate } from 'react-router-dom';

export const useNavigation = () => {
  const navigate = useNavigate();

  const goToHome = (options = {}) => navigate('/', options);
  const goToLink = (options = {}) => navigate('/links', options);
  const goToBlog = () => window.open('https://blog.himaa.me', '_blank');
  const goToResume = () => window.open('https://image.himaa.me/hima-anon-resume.pdf', '_blank');

  return {
    goToHome,
    goToLink,
    goToBlog,
    goToResume,
  };
};
