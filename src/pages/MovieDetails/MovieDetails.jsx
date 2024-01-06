import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Outlet, Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';
import { fetchMovieDetails } from 'api';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { GoBackLink } from 'components/GoBackLink/GoBackLink';

const MovieDetails = () => {
  const [movies, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  useEffect(() => {
    async function getMovieDetails() {
      try {
        setLoading(true);
        const data = await fetchMovieDetails(id);

        setMovie(data);
      } catch {
        toast.error('something went wrong');
      } finally {
        setLoading(false);
      }
    }
    getMovieDetails();
  }, [id]);

  return (
    <div>
      {loading && <Loader />}
      <GoBackLink to={backLinkHref}>Go Back</GoBackLink>
      {!loading && <MovieCard movies={movies} />}
      <ul>
        <Link to="reviews" state={{ from: backLinkHref }}>
          Reviews
        </Link>
        <Link to="cast" state={{ from: backLinkHref }}>
          Cast
        </Link>
      </ul>

      <Outlet />
    </div>
  );
};

export default MovieDetails;