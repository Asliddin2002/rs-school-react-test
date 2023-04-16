import { movieImageType } from './type';

export const useImage = (name: string) => {
  const movieNames: movieImageType = {
    ['The Lord of the Rings Series']: require('../components/assets/movies/lordofring.jpg'),
    ['The Hobbit Series']: require('../components/assets/movies/hobbitseries.jpg'),
    ['The Unexpected Journey']: require('../components/assets/movies/journey.jpg'),
    ['The Desolation of Smaug']: require('../components/assets/movies/smug.jpg'),
    ['The Battle of the Five Armies']: require('../components/assets/movies/buttle.jpg'),
    ['The Two Towers']: require('../components/assets/movies/twotower.jpg'),
    ['The Fellowship of the Ring']: require('../components/assets/movies/fellowship.jpg'),
    ['The Return of the King']: require('../components/assets/movies/returnking.jpg'),
  };
  return { image: movieNames[name as keyof movieImageType] };
};

export default useImage;
