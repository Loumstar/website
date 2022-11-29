import React from 'react'
import { makeStyles } from '@styles'
import { AppBar, IconButton, Toolbar } from '@mui/material'
import { Box } from '@mui/system'
import { Button } from '@mui/material'
import { Logo } from '@components/shared'
import { Stylable } from 'types/react'

export const TopBar: React.FC<Stylable> = props => {
  const { className } = props
  const { cx, classes } = useStyles()
  const links = ['Music', 'Design', 'Projects', 'Contact']

  return (
    <AppBar
      className={cx(className, classes.appbar)}
      position="static"
      color="transparent"
      elevation={0}>
      <Toolbar className={cx(className, classes.toolbar)}>
        <IconButton>
          <Logo className={cx(className, classes.logo)}></Logo>
        </IconButton>
        <Box>
          {links.map(item => (
            <Button
              key={item}
              className={cx(className, classes.button)}
              color="inherit">
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

const useStyles = makeStyles()(theme => ({
  appbar: {
    alignItems: 'center',
  },
  button: {
    margin: theme.spacing(2, 4),
    textTransform: 'capitalize',
  },
  logo: {},
  toolbar: {
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '70rem',
  },
}))
