import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './Componentes/Navbar';
import Eventos from './Paginas/Eventos/Eventos';
import EventosCadastro from './Paginas/Eventos/EventosCadastro';
import Despesas from './Paginas/Despesas/Despesas';
import DespesasCadastro from './Paginas/Despesas/DespesasCadastro';
import Doadores from './Paginas/Doadores/Doadores';
import DoadorCadastro from './Paginas/Doadores/DoadorCadastro';
import Membros from './Paginas/Membros/Membros';
import MembroCadastro from './Paginas/Membros/MembroCadastro';

const router = createBrowserRouter([
  {
    element: <Navbar />,
    children: [
      {
        path: '/',
        element: <App />
      },
      {
        path: '/eventos',
        element: <Eventos />
      },
      {
        path: '/eventos/:idEvento',
        element: <EventosCadastro />
      },
      {
        path: '/evento/novo',
        element: <EventosCadastro />
      },
      {
        path: '/despesas',
        element: <Despesas />
      },
      {
        path: '/despesas/:idDespesa',
        element: <DespesasCadastro />
      },
      {
        path: '/despesa/novo',
        element: <DespesasCadastro />
      },
      {
        path: '/doadores',
        element: <Doadores />
      },
      {
        path: '/doadores/:idDoador',
        element: <DoadorCadastro />
      },
      {
        path: '/doadores/novo',
        element: <DoadorCadastro />
      },
      {
        path: '/membros',
        element: <Membros />
      },
      {
        path: '/membros/:idMembro',
        element: <MembroCadastro />
      },
      {
        path: '/membros/novo',
        element: <MembroCadastro />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
