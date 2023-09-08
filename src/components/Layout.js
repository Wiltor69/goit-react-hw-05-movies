import { Outlet } from 'react-router-dom';
import { Link, Navigation } from './App.styled';
import { Suspense } from 'react';
import { Loader } from './Loader/Loader';

export const Layout = () => {
  return (
    <>
      <Navigation>
        <Link to="/">Home</Link>
        <Link to="/movies">Moves</Link>
      </Navigation>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
