import React from 'react';
import { Link } from 'gatsby';

const LinkItem = ({ title, url }) => {
  return (
    <>
      <Link
        className='transition duration-400 transform hover:-translate-y-1 hover:scale-100 ease-in border-solid border-2 border-purple-500 p-2 rounded-xl bg-purple-500'
        to={url}
        target='_blank'
      >
        {title}
      </Link>
    </>
  );
};

export default LinkItem;
