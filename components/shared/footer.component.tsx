import React from 'react'
import { Stylable } from 'types/react'
import { Grid, Link, Typography } from '@mui/material'
import { makeStyles } from '@styles'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { TypeScriptIcon, VercelIcon, MuiIcon, NextIcon } from './icons'

interface FooterProps extends Stylable {
  onContactClick: () => void
}

export const Footer: React.FC<FooterProps> = props => {
  const { onContactClick, className } = props
  const { classes, cx } = useStyles()
  return (
    <div className={cx(className, classes.container)}>
      <Grid
        className={classes.gridContainer}
        container
        columnSpacing={4}
        columns={{ xs: 1, md: 2, lg: 4 }}>
        <Grid className={classes.gridElement} item xs={1}>
          <Typography className={classes.text} variant="caption">
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
          <Link
            href="/contact"
            className={cx(classes.text, classes.link)}
            variant="caption">
            Hack this website!
          </Link>
          <Link
            href="/curriculum-vitae.pdf"
            className={cx(classes.text, classes.link)}
            variant="caption">
            Curriculum Vitae
          </Link>
          <Link
            onClick={onContactClick}
            className={cx(classes.text, classes.link)}
            variant="caption">
            Contact
          </Link>
        </Grid>
        <Grid className={classes.gridElement} item xs={1}>
          <Typography className={classes.text} variant="caption">
            Written with love in:
          </Typography>
          <div className={classes.iconsFlex}>
            <Link href="https://www.typescriptlang.org/">
              <TypeScriptIcon className={classes.icon} />
            </Link>
            <Link href="https://nextjs.org/">
              <NextIcon className={classes.icon} />
            </Link>
            <Link href="https://mui.com/">
              <MuiIcon className={classes.icon} />
            </Link>
          </div>
        </Grid>
        <Grid className={classes.gridElement} item xs={1}>
          <Typography className={classes.text} variant="caption">
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
    cursor: 'pointer',
  },
}))
