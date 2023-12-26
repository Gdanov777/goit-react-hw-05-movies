import { SearchBar } from 'components/SearchBar/SearchBar';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { fetchSearchMovies } from 'api';
import { MoviesList } from 'components/MoviesList';
import { Loader } from 'components/Loader';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const nameRequest = searchParams.get('query') ?? '';

  useEffect(() => {
    if (nameRequest === '') return;
    async function getSearchMovies() {
      try {
        setLoading(true);

        const data = await fetchSearchMovies(nameRequest);
        setMovies(data.results);
      } catch {
        toast.error('Please input search query!');
      } finally {
        setLoading(false);
      }
    }
    getSearchMovies();
  }, [nameRequest]);

  const onSubmit = name => {
    setSearchParams(name !== '' ? { query: name } : {});
    if (name === '') {
      toast.info('Please input search query!');
    }
  };

  return (
    <>
      <SearchBar value={nameRequest} onSubmit={onSubmit} />
      {loading && <Loader />}
      {movies && <MoviesList movies={movies} />}
    </>
  );
};

export default Movies;