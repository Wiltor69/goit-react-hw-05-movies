import { fetchHome } from 'Api';
import { HomeList } from 'components/HomeList/HomeList';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const HomePage = () => {
  const [trends, setTrends] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    async function getMovies() {
      setLoader(true);
      try {
        const movies = await fetchHome();

        setTrends(movies);
      } catch (error) {
        toast.error(error);
      } finally {
        setLoader(false);
      }
    }
    getMovies();
  }, []);

  return (
    <>
      {loader && <Loader />}
      <HomeList items={trends} />
      <Toaster position="bottom-center" reverseOrder={true} />
    </>
  );
};
export default HomePage;
