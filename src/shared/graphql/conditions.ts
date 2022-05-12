import gql from 'graphql-tag'

export const CONDITIONS = gql`
  query {
    conditions {
      id
      code
      description
    }
  }
`
