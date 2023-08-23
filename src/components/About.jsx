import React from 'react'

const About=() =>{
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>

            <p className='text-xl mt-20'>
                Currently pursuing Bachelor of Technology in the stream of Computer Science and Engineering with good technical skills and experience of hands-on projects across full-stack web applications.
            </p>

            <br />

            <p className='text-xl'>
               {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto atque molestiae nesciunt corporis officia minima quis libero. Numquam provident placeat itaque quis minima dolorum voluptatum asperiores, fugit eius, ipsa fugiat omnis laboriosam libero error dolores. Eligendi nulla vitae ipsa saepe soluta praesentium obcaecati deleniti expedita?  */}
                I love to travel and explore new places with pleasant nature, I enjoy cooking, My ultimate stress buster is to listening to melodious music.
            </p>
        </div>
    </div>
  );
};

export default About