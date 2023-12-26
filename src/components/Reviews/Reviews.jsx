import { useState, useEffect } from 'react';
import { fetchMovieReviews } from 'api';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader';
import { toast } from 'react-toastify';
import { Text, TextReview } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function getMovieReviews() {
      try {
        setLoading(true);
        const { results } = await fetchMovieReviews(id);
        if (results.length === 0)
          toast.info(
            'While there are no reviews, you have the opportunity to be the first'
          );
        setReviews(results);
      } catch {
        toast.error('something went wrong');
      } finally {
        setLoading(false);
      }
    }
    getMovieReviews();
  }, [id]);

  return (
    <div>
      {loading && <Loader />}
      {reviews.length > 0 &&
        reviews.map(({ author, id, content }) => (
          <div key={id}>
            <Text>Author: {author}</Text>
            <TextReview>{content}</TextReview>
          </div>
        ))}
    </div>
  );
};

export default Reviews;