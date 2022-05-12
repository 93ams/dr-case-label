import { Condition } from '../../../../../shared/graphql/condition.model'
import { CONDITIONS } from '../../../../../shared/graphql/conditions'
import { List, ListItem, Typography } from '@mui/material'
import { useQuery } from '@apollo/client'
import { useEffect } from 'react'

export const ConditionList = () => {
  const { data, error } = useQuery<Condition[]>(CONDITIONS)
  useEffect(() => {
    if (error) console.log(error)
  }, [error])
  return (
    <List>
      {data?.map(({ id, code, description }) => (
        <ListItem id={id}>
          <Typography>
            {code} {description}
          </Typography>
        </ListItem>
      ))}
    </List>
  )
}
