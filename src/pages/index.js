import * as React from 'react';
import photo from '../images/justin.jpg';

import SocialLinks from '../components/SocialLinks';
import PageLinks from '../components/PageLinks';

import { data } from '../data/data';

// markup
const IndexPage = () => {
  const grad = 'bg-gradient-to-br from-yellow-500 via-red-500 to-pink-600';
  const background = 'bg-primary text-primary';

  return (
    <main
      className={`${background} flex flex-col h-screen justify-center items-center flex-wrap`}
    >
      <title>Home Page</title>
      <div id='picture' className='flex justify-center mb-4'>
        <img src={photo} alt='portrait' className='w-3/6 rounded-full mb-0' />
      </div>
      <div id='bio' className='flex flex-col justify-center content-center m-0'>
        <h1 className='text-2xl mb-3 font-bold text-center'>
          Hello, I'm {data.name}
        </h1>
        <p className='w-3/4 mx-auto text-center'>{data.description}</p>
      </div>
      <PageLinks />
      <div id='links' className='mt-8'>
        <SocialLinks />
      </div>
    </main>
  );
};

export default IndexPage;
