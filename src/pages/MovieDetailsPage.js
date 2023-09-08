import { fetchMoveDetals } from 'Api';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { Loader } from 'components/Loader/Loader';
import { Navigation, Link } from 'components/App.styled';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const getMovie = async () => {
      setLoader(true);
      try {
        const response = await fetchMoveDetals(`${movieId}`);
        setMovie(response);
        setGenres([...response.genres]);
      } catch (error) {
        toast.error(error);
      } finally {
        setLoader(false);
      }
    };

    getMovie();
  }, [movieId]);

  return (
    <>
      {loader && <Loader />}
      <MovieDetails movie={movie} genres={genres} />
      <Navigation>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </Navigation>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Toaster position="bottom-center" reverseOrder={true} />
    </>
  );
};
export default MovieDetailsPage;
