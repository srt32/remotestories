/* @flow */

import './styles.css';
import React from 'react';
import illustration from './assets/illustration.jpg';
import logo from './assets/logo.svg';
import { Headline } from 'src/shared/typography';
import { Link } from 'react-router';

export default function NotFound() {
  return (
    <div className="NotFound">
      <Link className="NotFound-logo" to="/">
        <img src={logo} alt="Remote Stories" />
      </Link>

      <Headline component="p" className="NotFound-headline">
        Oops, we can’t seem to find the page you are looking for…
      </Headline>

      <Link className="NotFound-link" to="/">
        Go back to our homepage
      </Link>

      <img className="NotFound-illustration" src={illustration} alt="" />
    </div>
  );
}
