import React from 'react';
import LinkItem from '../components/Link';

const PageLinks = () => {
  return (
    <div className='flex space-x-5 mt-5'>
      <LinkItem url='https://youtube.com/c/chaucodes' title='Projects' />
      <LinkItem url='https://youtube.com/c/chaucodes' title='Blog' />
      <LinkItem url='https://youtube.com/c/chaucodes' title='Resume' />
    </div>
  );
};

export default PageLinks;
