import gql from 'graphql-tag'

export const NEXT_RECORD = gql`
  query {
    nextRecord {
      id
      labels
      description
    }
  }
`

export const LABEL_RECORD = gql`
  mutation labelRecord($in: LabelInput!) {
    labelRecord(in: $in) {
      id
      description
    }
  }
`
