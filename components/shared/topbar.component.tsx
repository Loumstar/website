import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { makeStyles } from '@styles'
import { AppBar, IconButton, Toolbar, Tooltip } from '@mui/material'
import { Button } from '@mui/material'
import { Logo } from '@components/shared/icons'
import { Stylable } from 'types/react'
import { Box } from '@mui/system'

interface TopBarProps extends Stylable {
  onContactClick: () => void
}

export const TopBar: React.FC<TopBarProps> = props => {
  const { onContactClick, className } = props
  const { cx, classes } = useStyles()
  const router = useRouter()

  const [addColour, setAddColour] = useState(false)

  const links: Array<{ label: string; route: string; isDisabled: boolean }> = [
    { label: 'Music', route: '/music', isDisabled: false },
    { label: 'Design', route: '/design', isDisabled: true },
    { label: 'Software', route: '/software', isDisabled: true },
  ]

  return (
    <AppBar
      className={cx(className, classes.appbar)}
      position="static"
      color="transparent"
      elevation={0 /*router.pathname != '/' ? 4 : 0*/}>
      <Toolbar className={cx(className, classes.toolbar)}>
        <IconButton
          className={classes.logoButton}
          disableRipple
          onMouseEnter={() => setAddColour(true)}
          onMouseLeave={() => setAddColour(false)}
          onClick={() => router.push('/')}>
          <Logo colourful={addColour} className={cx(className, classes.logo)} />
        </IconButton>
        <div className={classes.buttonContainer}>
          {links.map(({ label, route, isDisabled }) =>
            isDisabled ? (
              <Tooltip
                className={classes.buttonTooltip}
                key={`${label}-tooltip`}
                title="Under construction">
                <Box className={classes.buttonWrapper} key={`${label}-button`}>
                  <Button
                    key={label}
                    className={cx(className, classes.button)}
                    color="primary"
                    disabled>
                    {label}
                  </Button>
                </Box>
              </Tooltip>
            ) : (
              <Box className={classes.buttonWrapper} key={`${label}-wrapper`}>
                <Button
                  key={label}
                  className={cx(className, classes.button)}
                  color="primary"
                  onClick={() => router.push(route)}>
                  {label}
                </Button>
              </Box>
            ),
          )}
          <Box className={classes.buttonWrapper}>
            <Button
              className={cx(className, classes.button)}
              color="primary"
              onClick={onContactClick}>
              Contact
            </Button>
          </Box>
        </div>
      </Toolbar>
    </AppBar>
  )
}

const useStyles = makeStyles()(theme => ({
  appbar: {
    alignItems: 'center',
  },
  buttonContainer: {
    display: 'inline-flex',
    justifyContent: 'space-between',
    maxWidth: '30rem',
    flexGrow: 1,
    overflow: 'scroll',
    [theme.breakpoints.down('sm')]: {
      maxWidth: 'unset',
      justifyContent: 'flex-start',
    },
  },
  buttonWrapper: {
    display: 'inline-flex',
    justifyContent: 'center',
    flexGrow: 1,
  },
  button: {
    textTransform: 'capitalize',
    [theme.breakpoints.down('sm')]: {},
  },
  buttonTooltip: {},
  logo: {
    fontSize: theme.spacing(6),
  },
  logoButton: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      marginRight: theme.spacing(1),
      paddingRight: theme.spacing(0),
      paddingLeft: theme.spacing(0),
    },
  },
  toolbar: {
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '75rem',
    [theme.breakpoints.down('sm')]: {
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      justifyContent: 'flex-start',
    },
  },
}))
