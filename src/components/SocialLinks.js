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
  return (
    <div className='flex space-x-10'>
      <Link to='/'>
        <Instagram size={30} />
      </Link>
      <Link to='/'>
        <Twitter size={30} />
      </Link>
      <Link to='/'>
        <Youtube size={30} />
      </Link>
      <Link to='/'>
        <Github size={30} />
      </Link>
    </div>
  );
};

export default SocialLinks;
