
import { DashboardOutlined } from '@mui/icons-material';

import { AdminLayout } from '../../components/layouts'
import { Grid } from '@mui/material'


const DashboardPage = () => {

  

  return (
    <AdminLayout
        title='Dashboard'
        subTitle='Estadisticas generales'
        icon={ <DashboardOutlined /> }
    >
        
        <Grid container spacing={2}>
            
      
        </Grid>


    </AdminLayout>
  )
}

export default DashboardPage