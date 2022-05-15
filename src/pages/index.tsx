import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import { ConditionList } from '../client/component/organism'
import MainLayout from '../client/component/layout/main'
import { LABEL_RECORD } from '../shared/graphql/record'
import { EHR } from '../shared/graphql/ehr.model'
import { useMutation } from '@apollo/client'
import {useEffect, useState} from 'react'

const Home = () => {
  const [state, setState] = useState<EHR>()
  const [selected, select] = useState('')
  const [startTime, setStartTime] = useState(Date.now())
  const [mutateFunction, { loading }] = useMutation<{ labelRecord: EHR }>(
    LABEL_RECORD,
    {
      onCompleted: ({ labelRecord: nextRecord }) =>{
          setState(nextRecord || undefined)
          setStartTime(Date.now())
          select('')
      },
    },
  )
  const mutate = () => mutateFunction({
    variables: {
      in: { ehr: state?.id, label: selected, ttl: Date.now() - startTime },
    }
  })
  useEffect(() => {mutate().catch(console.error)}, [])
  return (
    <MainLayout>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography sx={{ marginBottom: '15px', marginLeft: '5px' }}>
            {state ? 'Please Review This Case' : 'You are Done'}
          </Typography>
          <TextField
            multiline
            disabled
            rows={30}
            sx={{ width: '100%' }}
            value={state?.description || ''}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography sx={{ marginBottom: '15px', marginLeft: '5px' }}>
            Select Condition
          </Typography>
          <ConditionList
            select={select}
            selected={selected}
            disabled={loading || !state?.id}
          />
          <Box
            sx={{
              width: '100%',
              paddingTop: '100px',
              paddingLeft: '200px',
            }}
          >
            <Button
              disabled={loading || (!!state && !selected)}
              onClick={mutate}
            >
              {state ? 'Next Record' : 'Refresh'}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </MainLayout>
  )
}
export default Home
