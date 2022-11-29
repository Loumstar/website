import React from 'react'
import { Stylable } from 'types/react'
import { Grid, Link, Typography } from '@mui/material'
import { makeStyles } from '@styles'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { TypeScriptIcon, VercelIcon, MuiIcon } from './icons'

export const Footer: React.FC<Stylable> = props => {
  const { className } = props
  const { classes, cx } = useStyles()
  return (
    <div className={cx(className, classes.container)}>
      <Grid
        className={classes.gridContainer}
        container
        columnSpacing={4}
        columns={{ xs: 1, md: 2, lg: 4 }}>
        <Grid className={classes.gridElement} item xs={1}>
          <Typography className={classes.text} variant="body2">
            © 2022 Louis Manestar
          </Typography>
          <div className={classes.iconsFlex}>
            <Link href="https://github.com/Loumstar/">
              <GitHubIcon className={classes.icon} />
            </Link>
            <Link href="https://www.instagram.com/loumstarlearjet/">
              <InstagramIcon className={classes.icon} />
            </Link>
            <Link href="https://www.linkedin.com/in/louis-manestar/">
              <LinkedInIcon className={classes.icon} />
            </Link>
          </div>
        </Grid>
        <Grid className={classes.gridElement} item xs={1}>
          <Link className={cx(classes.text, classes.link)} variant="body2">
            Hack this website!
          </Link>
          <Link className={cx(classes.text, classes.link)} variant="body2">
            Curriculum Vitae
          </Link>
          <Link className={cx(classes.text, classes.link)} variant="body2">
            Contact
          </Link>
        </Grid>
        <Grid className={classes.gridElement} item xs={1}>
          <Typography className={classes.text} variant="body2">
            Written with love in:
          </Typography>
          <div className={classes.iconsFlex}>
            <Link href="https://www.typescriptlang.org/">
              <TypeScriptIcon className={classes.icon} />
            </Link>
            <Link href="https://mui.com/">
              <MuiIcon className={classes.icon} />
            </Link>
          </div>
        </Grid>
        <Grid className={classes.gridElement} item xs={1}>
          <Typography className={classes.text} variant="body2">
            Hosted by:
          </Typography>
          <div className={classes.iconsFlex}>
            <Link href="https://vercel.com/">
              <VercelIcon className={classes.icon} />
            </Link>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

const useStyles = makeStyles()(theme => ({
  container: {
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  gridContainer: {
    maxWidth: '60rem',
    padding: '1rem',
    marginTop: 0,
  },
  gridElement: {},
  text: {
    color: theme.palette.primary.contrastText,
    display: 'block',
  },
  iconsFlex: {
    display: 'inline-flex',
  },
  icon: {
    fontSize: theme.spacing(4),
    color: theme.palette.common.white,
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  link: {
    marginBottom: theme.spacing(1),
  },
}))
