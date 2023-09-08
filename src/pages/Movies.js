import { fetchSeachMovie } from 'Api';
import { Searchbar } from 'components/Seachbar/Seachbar';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { Loader } from 'components/Loader/Loader';
import { HomeList } from 'components/HomeList/HomeList';

const Movies = () => {
  const [nameMovie, setNameMovie] = useState([]);
  const [seachParams, setSeachParams] = useSearchParams();
  const [seach, setSeach] = useState(seachParams.get('seachMovie') ?? '');
  const [loader, setLoader] = useState(false);

  const location = useLocation();

  const newName = seachParams.get('seachMovie') ?? '';

  useEffect(() => {
    if (!newName) {
      setNameMovie([]);
      return;
    }
    const getNameMovie = async () => {
      setLoader(true);
      try {
        const response = await fetchSeachMovie(newName);
        setNameMovie(response);
        console.log(response);
      } catch (error) {
        toast.error(error);
      } finally {
        setLoader(false);
      }
    };
    getNameMovie();
  }, [newName]);

  const handleSubmit = e => {
    e.preventDefault();
    if (seach === '') {
      return toast.error('Please write name movie');
    }
    setSeachParams({ seachMovie: seach });
  };

  const handleChange = e => {
    setSeach(e.target.value);
  };

  return (
    <>
      {loader && <Loader />}
      <Searchbar
        onSubmit={handleSubmit}
        input={seach}
        onChange={handleChange}
      />
      <HomeList items={nameMovie} state={{ from: location }} />
      <Toaster position="bottom-center" reverseOrder={true} />
    </>
  );
};
export default Movies;
