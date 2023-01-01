import { Chip } from '@mui/material'
import { Box } from '@mui/system'
import { makeStyles } from '@styles'
import React, { useState } from 'react'
import { Stylable } from 'types/react'

import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

interface GalleryProps extends Stylable {
  components: Array<JSX.Element>
  expandable?: boolean
}

export const Gallery: React.FC<GalleryProps> = props => {
  const { components, expandable = true, className } = props
  const { classes, cx } = useStyles()

  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Box className={cx(className, classes.container)}>
      <Box
        className={cx(
          classes.galleryContainer,
          isExpanded && classes.expanded,
        )}>
        {components.map((component, i) => (
          <Box className={classes.galleryItem} key={`gallery-item-${i}`}>
            {component}
          </Box>
        ))}
      </Box>
      {expandable && components.length > 7 && (
        <Chip
          variant="outlined"
          label={isExpanded ? 'Collapse' : 'Expand'}
          icon={isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          onClick={() => setIsExpanded(prev => !prev)}
        />
      )}
    </Box>
  )
}

const useStyles = makeStyles()(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  galleryContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'hidden',
    justifyContent: 'space-evenly',
    transition: 'max-height 0.6s ease-in-out',
    maxHeight: theme.spacing(27),
  },
  expanded: {
    maxHeight: theme.spacing(79),
  },
  galleryItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    width: theme.spacing(18),
    margin: theme.spacing(1),
  },
}))
