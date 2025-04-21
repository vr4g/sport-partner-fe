import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ROUTES } from '../../routes/routes'
import PageNotFound from '../PageNotFound/PageNotFound'

const Router = () => {
  return (
    <Routes>
      {ROUTES.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default Router
