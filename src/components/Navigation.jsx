import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <Router>
      <div>
        <nav className="flex items-center justify-between flex-wrap bg-gray-900 p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <svg
              className="fill-current h-8 w-8 mr-2"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
            </svg>
            <span className="font-semibold text-xl tracking-tight">СайтНейм</span>
          </div>
          <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-400 focus:text-white focus:outline-none hover:text-white hover:border-white">
              <svg
                className="fill-current h-5 w-5"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <Link
                to="/"
                className="block py-1 mt-2 px-2 lg:inline-block lg:mt-0 text-xl text-teal-200 hover:text-white rounded hover:bg-gray-800 mr-4">
                Главная
              </Link>
              <Link
                to="/about"
                className="block py-1 mt-2 px-2 lg:inline-block lg:mt-0 text-xl text-teal-200 hover:text-white rounded hover:bg-gray-800 mr-4">
                О нас
              </Link>
              <Link
                to="/users"
                className="block py-1 mt-2 px-2 lg:inline-block lg:mt-0 text-xl text-teal-200 hover:text-white rounded hover:bg-gray-800">
                Пользователи
              </Link>
            </div>
            <div>
              <a
                href={'/login'}
                className="inline-block text-md px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0">
                Вход
              </a>
            </div>
          </div>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>страница Главная</h2>;
}

function About() {
  return <h2>страница О нас</h2>;
}

function Users() {
  return <h2>страница Пользователи</h2>;
}
