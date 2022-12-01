import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { makeStyles } from '@styles'
import { AppBar, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Button } from '@mui/material'
import { Logo } from '@components/shared/icons'
import { Stylable } from 'types/react'

export const TopBar: React.FC<Stylable> = props => {
  const { className } = props
  const { cx, classes } = useStyles()
  const router = useRouter()

  const [addColour, setAddColour] = useState(false)

  const links: Array<{ label: string; route: string; isDisabled: boolean }> = [
    { label: 'Music', route: '/music', isDisabled: false },
    { label: 'Design', route: '/design', isDisabled: true },
    { label: 'Software', route: '/software', isDisabled: true },
    { label: 'Contact', route: '/contact', isDisabled: true },
  ]

  return (
    <AppBar
      className={cx(className, classes.appbar)}
      position="static"
      color="transparent"
      elevation={router.pathname != '/' ? 4 : 0}>
      <Toolbar className={cx(className, classes.toolbar)}>
        <IconButton
          disableRipple
          onMouseEnter={() => setAddColour(true)}
          onMouseLeave={() => setAddColour(false)}
          onClick={() => router.push('/')}>
          <Logo colourful={addColour} className={cx(className, classes.logo)} />
        </IconButton>
        <Box>
          {links.map(({ label, route, isDisabled }) =>
            isDisabled ? (
              <Tooltip key={`${label}-tooltip`} title="Under construction">
                <span>
                  <Button
                    key={label}
                    className={cx(className, classes.button)}
                    color="primary"
                    disabled>
                    {label}
                  </Button>
                </span>
              </Tooltip>
            ) : (
              <Button
                key={label}
                className={cx(className, classes.button)}
                color="primary"
                onClick={() => router.push(route)}>
                {label}
              </Button>
            ),
          )}
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
  logo: {
    fontSize: theme.spacing(6),
  },
  toolbar: {
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '75rem',
  },
}))
