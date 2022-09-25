import React from 'react';
import { Link } from 'react-router-dom';
import styles from './TextWithLink.module.css';

const TextWithLink = ({ text, link, linkText }) => {
  return (
    <p>
      {text}{' '}
      <Link className={styles.link} to={link}>
        {linkText}
      </Link>
    </p>
  );
};

export default TextWithLink;
