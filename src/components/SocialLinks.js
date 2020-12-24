import React from 'react';
import { Link } from 'gatsby';
import {
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Github,
} from '@icons-pack/react-simple-icons';

const SocialLinks = () => {
  const hover =
    'transition duration-400 ease-in transform hover:-translate-y-1 hover:scale-110';

  return (
    <div className='flex space-x-10'>
      <Link to='/' className={hover}>
        <Instagram size={30} />
      </Link>
      <Link to='/' className={hover}>
        <Twitter size={30} />
      </Link>
      <Link to='/' className={hover}>
        <Youtube size={30} />
      </Link>
      <Link to='/' className={hover}>
        <Github size={30} />
      </Link>
      <Link to='/' className={hover}>
        <Linkedin size={30} />
      </Link>
    </div>
  );
};

export default SocialLinks;
