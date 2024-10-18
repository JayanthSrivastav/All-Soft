import { Typography } from '@mui/material'
import React from 'react'

const NotFound = () => {
  return (
    <>
    <div className='not-found'>

      <Typography variant='h1' component={'h1'}>404</Typography>
      <Typography variant='h3' component={'h2'}>Not Found</Typography>
      <Typography variant='h6' component={'h2'}>The page you're trying to access does not exist.</Typography>

    </div>
    </>
  )
}

export default NotFound