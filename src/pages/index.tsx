import type { NextPage } from 'next'
import { Container, Button } from '@mui/material'

const Home: NextPage = () => {
  return (
    <Container sx={{ display: 'grid', placeItems: 'center' }}>
      <Button onClick={() => alert('Hello! o/')}>click me! :D</Button>
    </Container>
  )
}

export default Home
