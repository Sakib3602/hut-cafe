import 'daisyui/dist/full.css';
import Nav from './Components/Nav/Nav';
import { useState } from 'react';
import { useEffect } from 'react';
import Hero from './Hero/Hero';

function App() {

  const [api,setApi] = useState([])

  useEffect(()=>{
    fetch('fakeData.json')
    .then(res => res.json())
    .then(data => setApi(data))
  },[])

  console.log(api)
 

  return (
    <>
      <div className='w-[85%] m-auto'>
      <Nav></Nav>
      <Hero></Hero>
      </div>
    
    </>
  )
}

export default App
