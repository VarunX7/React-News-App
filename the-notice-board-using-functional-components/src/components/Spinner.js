import React from 'react'
import spinner from './spinner.gif'

const Spinner = () => {
    return (
      <div className='text-center'>
        <img src={spinner} alt="loading..." style={{height: '50px'}}/>
      </div>
    )
}

export default Spinner
