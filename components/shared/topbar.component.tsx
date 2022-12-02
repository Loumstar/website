import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { makeStyles } from '@styles'
import { AppBar, IconButton, Toolbar, Tooltip } from '@mui/material'
import { Button } from '@mui/material'
import { Logo } from '@components/shared/icons'
import { Stylable } from 'types/react'

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
      elevation={router.pathname != '/' ? 4 : 0}>
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
          <Button
            className={cx(className, classes.button)}
            color="primary"
            onClick={onContactClick}>
            Contact
          </Button>
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
  },
  button: {
    textTransform: 'capitalize',
  },
  logo: {
    fontSize: theme.spacing(6),
  },
  logoButton: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
    },
  },
  toolbar: {
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '75rem',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
      paddingRight: theme.spacing(1),
    },
  },
}))
