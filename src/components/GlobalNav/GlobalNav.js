import React from 'react';
import { Link } from 'react-router-dom';

const GlobalNav = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="projects">Projects</Link>
          </li>
          <li>
            <a
              href="https://medium.com/@rockettechnology"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </a>
          </li>
          <li>
            <Link to="working">Working at RT!</Link>
          </li>
          <li>
            <Link to="sponsored">Sponsored</Link>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default GlobalNav;
