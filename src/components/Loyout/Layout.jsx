import { Outlet } from 'react-router-dom';
import { Box } from '../Box/Box';
import { AppBar } from '../AppBar';
import { ToastContainer } from 'react-toastify';
import { Suspense } from 'react';
import 'react-toastify/dist/ReactToastify.css';

export const Layout = () => {
  return (
    <Box display="grid" gridTemplateColumns="200px lfr">
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <ToastContainer position="top-center" />
    </Box>
  );
};