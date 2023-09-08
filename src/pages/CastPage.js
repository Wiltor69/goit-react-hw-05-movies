import { fetchCast } from 'Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { Loader } from 'components/Loader/Loader';
import { Casts } from 'components/Casts/Casts';

const CastPage = () => {
  const [casts, setCasts] = useState([]);
  const { movieId } = useParams();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const getCast = async () => {
      try {
        setLoader(true);
        const response = await fetchCast(`${movieId}`);
        setCasts(response);
        console.log(response);
      } catch (error) {
        toast.error(error);
      } finally {
        setLoader(false);
      }
    };
    getCast();
  }, [movieId]);

  return (
    <>
      {loader && <Loader />}
      <Casts cast={casts} />
      <Toaster position="bottom-center" reverseOrder={true} />
    </>
  );
};

export default CastPage;
