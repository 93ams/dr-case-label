import { useState } from 'react'
import MainLayout from '../client/component/layout/main'
import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import { ConditionList } from '../client/component/organism'
import { LABEL_RECORD } from '../shared/graphql/record'
import { useMutation } from '@apollo/client'
import { EHR } from '../shared/graphql/ehr.model'
import { NextPageContext } from 'next'

export type Props = { record?: EHR }
const Home = ({ record }: Props) => {
  const [state, setState] = useState(record)
  const [mutateFunction, { loading }] = useMutation<{ labelRecord: EHR }>(
    LABEL_RECORD,
    {
      onCompleted: ({ labelRecord: nextRecord }) =>
        setState(nextRecord || undefined),
    },
  )
  console.log(record)
  const [selected, select] = useState('')
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
              disabled={loading}
              onClick={() =>
                mutateFunction({
                  variables: {
                    in: { ehr: state?.id, label: selected },
                  },
                })
              }
            >
              {state ? 'Next Record' : 'Refresh'}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </MainLayout>
  )
}
Home.getInitialProps = (ctx: NextPageContext) =>
  ctx.query.id
    ? {
        record: {
          description: ctx.query.description,
          id: ctx.query.id,
        },
      }
    : {}
export default Home
