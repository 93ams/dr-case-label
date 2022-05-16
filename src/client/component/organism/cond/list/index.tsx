import { Box, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { Condition } from '../../../../../shared/graphql/condition.model'
import { CONDITIONS } from '../../../../../shared/graphql/conditions'
import { FixedSizeList, ListChildComponentProps } from 'react-window'
import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'

export type Props = {
  select: (s: string) => void
  selected: string
  disabled: boolean
}
export const ConditionList = ({ select, selected, disabled }: Props) => {
  const { data, error } = useQuery<{ conditions: Condition[] }>(CONDITIONS)
  useEffect(() => {
    if (error) console.log(error)
  }, [error])
  return (
    <Box
      sx={{
        width: '650px',
        height: '600px',
        overflow: 'hide',
        bgcolor: 'background.paper',
      }}
      id='conditionList'
    >
      <FixedSizeList
        height={600}
        width={650}
        itemSize={40}
        overscanCount={5}
        itemCount={data?.conditions?.length || 0}
      >
        {({ index, style }: ListChildComponentProps) => {
          const condition = data?.conditions[index]
          return (
            <ListItem
              style={style}
              key={index}
              component="div"
              selected={condition?.id == selected}
              disablePadding
            >
              <ListItemButton
                disabled={disabled}
                onClick={() => condition && select(condition.id)}
              >
                <ListItemText
                  primary={
                    condition?.code
                      ? `${condition?.code} ${condition?.description}`
                      : condition?.description
                  }
                />
              </ListItemButton>
            </ListItem>
          )
        }}
      </FixedSizeList>
    </Box>
  )
}
