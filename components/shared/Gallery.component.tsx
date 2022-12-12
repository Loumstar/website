import { Chip } from '@mui/material'
import { Box } from '@mui/system'
import { makeStyles } from '@styles'
import React, { useState } from 'react'
import { Stylable } from 'types/react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'

interface GalleryProps extends Stylable {
  items: Array<JSX.Element>
  expandible?: boolean
  itemClassName: string
}

export const Gallery: React.FC<GalleryProps> = props => {
  const { items, expandible = false, itemClassName, className } = props
  const { classes, cx } = useStyles()()

  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Box className={cx(className, classes.container)}>
      {expandible && (
        <Chip
          className={classes.chip}
          label={isExpanded ? 'Collapse' : 'Expand'}
          icon={isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          onClick={() => setIsExpanded(!isExpanded)}
        />
      )}
      <Box
        className={cx(
          classes.galleryContainer,
          isExpanded ? classes.expanded : classes.collapsed,
        )}>
        {items.map((item, index) => (
          <Box className={cx(classes.item, itemClassName)} key={index}>
            {item}
          </Box>
        ))}
      </Box>
    </Box>
  )
}

const useStyles = () =>
  makeStyles()(theme => ({
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
      //height: '100%',
      justifyContent: 'space-evenly',
    },
    collapsed: {
      maxHeight: theme.spacing(26),
    },
    expanded: {
      maxHeight: theme.spacing(105),
    },
    item: {
      margin: theme.spacing(1),
    },
    chip: {
      width: 'fit-content',
    },
  }))
