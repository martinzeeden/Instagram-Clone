import React from 'react';
import { Link } from 'react-router-dom';

const TextWithLink = ({ text, link, linkText }) => {
  return (
    <p>
      {text} <Link to={link}>{linkText}</Link>
    </p>
  );
};

export default TextWithLink;
