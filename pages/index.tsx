import type { NextPage } from 'next';
import { Typography } from '@mui/material';

import { AppLayout } from '../components/layouts';



import { FullScreenLoading } from '../components/ui';


const HomePage: NextPage = () => {


  return (
    <AppLayout title={'APP'} pageDescription={'Rutinas'}>
        <Typography variant='h1' component='h1'>Rutinas</Typography>
        <Typography variant='h2' sx={{ mb: 1 }}>Todos las rutinas</Typography>
      <></>
        
    

    </AppLayout>
  )
}

export default HomePage
