import React from 'react'

function Footer() {
  return (
    <footer class="bg-[#151030]">
        <div className='flex  max-[800px]:flex-col'>
            <div className=' md:w-1/2 ml-24  flex flex-col   p-10 gap-9 sm:w-ful'>
                <h1 className='flex justify-start text-white font-bold text-xl'>Hackaton2023</h1>
                <p className='flex indent-5 break-words text-[#ffffff] font-medium text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi eos at assumenda quia porro deserunt earum voluptas, hic dolorem consectetur labore? Cum repellat accusamus porro nisi velit enim natus harum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi eos at assumenda quia porro deserunt earum voluptas, hic dolorem consectetur labore? Cum repellat accusamus porro nisi velit enim natus harum.</p>
                <a href='https://www.youtube.com/watch?v=dmajqKFrxyg' className='flex font-normal justify-center border-2 w-40 text-center bg-[#3f9fef] text-white'>Youtube</a>
                
            </div>
            
            <div className='md:w-1/2  flex flex-col  p-10 gap-6 sm:w-ful'>
                <h1 className='flex justify-center text-white font-bold'>Let's Talk</h1>
                <ul className='text-white flex justify-center  gap-12 md:flex-col    md:gap-3'>
                <li className='flex justify-center'>Rahul</li>
                    <li className='flex justify-center'>Kamal Raj</li>
                    <li className='flex justify-center'>Shafwaan </li>
                    <li className='flex justify-center'>Vadipeer</li>
                    <li className='flex justify-center'>Zaheer Abbas</li>
                    <li className='flex justify-center'>Vahitha</li>
                    
                    
                 </ul>
            </div>
            
        </div>
        <div ><h1 className='bg-[#100d25] text-center text-white p-2'>&copy; Copyright 2023 </h1></div>
</footer>

  )
}

export default Footer;