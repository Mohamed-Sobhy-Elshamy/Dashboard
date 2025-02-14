import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// imports to all things to use router
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
// import pages
import Dashboard from './pages/dashboard/Dashboard';
import Team from './pages/team/Team';
import Contacts from './pages/contacts/Contacts';
import Invoices from './pages/invoices/Invoices';
import Calender from './pages/calender/Calender';
import Bar from './pages/bar/Bar';
import Pie from './pages/pie/Pie';
import Line from './pages/line/Line'
import Geography from './pages/geography/Geography';
import FAQ from './pages/faq/Faq';
import Form from './pages/form/Form';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path='team' element={<Team />} />
      <Route path='contacts' element={<Contacts />} />
      <Route path='invoices' element={<Invoices />} />
      <Route path='form' element={<Form />} />
      <Route path='Calender' element={<Calender />} />
      <Route path='faq' element={<FAQ />} />
      <Route path='bar' element={<Bar />} />
      <Route path='pie' element={<Pie />} />
      <Route path='line' element={<Line />} />
      <Route path='geography' element={<Geography />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
