import { FC } from 'react'
import MainLayout from '../client/component/layout/main'
import { Grid, TextField, Typography } from '@mui/material'

const Home: FC = () => {
  return (
    <MainLayout>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography sx={{ marginBottom: '15px', marginLeft: '5px' }}>
            Please Review This Case
          </Typography>
          <TextField sx={{ width: '100%' }} multiline rows={30} disabled />
        </Grid>
        <Grid item xs={6}>
          <Typography sx={{ marginBottom: '15px', marginLeft: '5px' }}>
            Select Condition
          </Typography>
        </Grid>
      </Grid>
    </MainLayout>
  )
}

export default Home
