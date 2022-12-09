import React from 'react'
import { Stylable } from 'types/react'
import { Box } from '@mui/system'

export const StravaActivity: React.FC<Stylable> = props => {
  const { className } = props
  return <Box className={className} />
}
