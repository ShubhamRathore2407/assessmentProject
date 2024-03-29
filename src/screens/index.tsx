import React from 'react'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { routes } from '../utils/routes';
import Population from './Population';
import Currency from './Crypto';
import Combined from './Combined';

const Screens: React.FC = () => {

    const router = createBrowserRouter([
        {
            path : routes.root,
            element: <Navigate to={routes.population.root} />,
            errorElement: <Navigate to={routes.root} />
        },
        {
            path : routes.population.root,
            element: <Population />,
            errorElement: <Navigate to={routes.root} />
        },
        {
            path : routes.crypto.root,
            element: <Currency />,
            errorElement: <Navigate to={routes.root} />
        },
        {
            path : routes.combined.root,
            element: <Combined />,
            errorElement: <Navigate to={routes.root} />
        },
    ])
  return (
    <RouterProvider router={router} />
  )
}

export default Screens