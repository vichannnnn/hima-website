import { useNavigate } from 'react-router-dom';

export const useNavigation = () => {
  const navigate = useNavigate();

  const goToHome = (options = {}) => navigate('/', options);
  const goToLink = (options = {}) => navigate('/links', options);
  const goToBlog = () => window.open('https://blog.himaa.me', '_blank');
  const goToLinkedIn = () =>
    window.open('https://www.linkedin.com/in/hima7459/?_l=en_US', '_blank');
  const goToGitHub = () => window.open('https://www.github.com/vichannnnn', '_blank');
  const goToHolyGrail = () => window.open('https://grail.moe', '_blank');
  const goToResume = () => window.open('https://image.himaa.me/hima-anon-resume.pdf', '_blank');

  return {
    goToHome,
    goToLink,
    goToBlog,
    goToLinkedIn,
    goToGitHub,
    goToHolyGrail,
    goToResume,
  };
};
