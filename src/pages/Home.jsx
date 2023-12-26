import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import { fetchTrending } from 'api';
import { MoviesList } from 'components/MoviesList';
import { Loader } from 'components/Loader';

const Home = () => {
  const [trending, setTrending] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function getTrending() {
      try {
        setIsLoading(true);

        const data = await fetchTrending();

        setTrending(data.results);
      } catch {
        toast.error('something went wrong');
      } finally {
        setIsLoading(false);
      }
    }
    getTrending();
  }, []);
  return (
    <>
      <h1>Trending Movies</h1>
      {isLoading && <Loader />}

      {trending.length > 0 && <MoviesList movies={trending} />}
    </>
  );
};

export default Home;