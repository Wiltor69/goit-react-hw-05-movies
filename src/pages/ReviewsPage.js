import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { fetchReviews } from 'Api';
import { Loader } from 'components/Loader/Loader';
import { Reviews } from 'components/Reviews/Reviews';

const ReviewsPage = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const getReviews = async () => {
      try {
        setLoader(true);
        const response = await fetchReviews(`${movieId}`);
        setReviews(response);
        console.log(response);
      } catch (error) {
        toast.error(error);
      } finally {
        setLoader(false);
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <>
      {loader && <Loader />}
      <Reviews reviews={reviews} />
      <Toaster position="bottom-center" reverseOrder={true} />
    </>
  );
};
export default ReviewsPage;
