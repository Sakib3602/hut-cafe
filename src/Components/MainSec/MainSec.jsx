
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

const MainSec = () => {

    
    const [api,setApi] = useState([])

  useEffect(()=>{
    fetch('fakeData.json')
    .then(res => res.json())
    .then(data => setApi(data))
  },[])

  console.log(api)

  
  return (
    <div>
      
    </div>
  )
}

MainSec.propTypes = {

}

export default MainSec
