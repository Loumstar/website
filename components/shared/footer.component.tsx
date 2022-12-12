import React from 'react'
import { Stylable } from 'types/react'
import { Grid, Link, Typography, Box } from '@mui/material'
import { makeStyles } from '@styles'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { TypeScriptIcon, VercelIcon, MuiIcon, NextIcon } from './icons'

interface FooterProps extends Stylable {
  onContactClick: () => void
  onHackClick: () => void
}

export const Footer: React.FC<FooterProps> = props => {
  const { onContactClick, onHackClick, className } = props
  const { classes, cx } = useStyles()
  return (
    <div className={cx(className, classes.container)}>
      <Grid
        className={classes.gridContainer}
        container
        columnSpacing={4}
        rowGap={2}
        columns={{ sm: 2, md: 2, lg: 4 }}>
        <Grid item className={classes.gridElement} xs={1}>
          <Box className={classes.elementContainer}>
            <Link
              onClick={onHackClick}
              className={cx(classes.text, classes.link)}
              variant="caption">
              Hack this website!
            </Link>
            <Link
              href="/curriculum-vitae.pdf"
              className={cx(classes.text, classes.link)}
              variant="caption"
              rel="noopener noreferrer"
              target="_blank">
              Curriculum Vitae
            </Link>
            <Link
              onClick={onContactClick}
              className={cx(classes.text, classes.link)}
              variant="caption">
              Contact
            </Link>
          </Box>
        </Grid>
        <Grid item className={classes.gridElement} xs={1}>
          <Box className={classes.elementContainer}>
            <Typography className={classes.text} variant="caption">
              © 2022 Louis Manestar
            </Typography>
            <Box className={classes.iconsFlex}>
              <Link
                href="https://github.com/Loumstar/"
                aria-label="GitHub Profile">
                <GitHubIcon className={classes.icon} />
              </Link>
              <Link
                href="https://www.instagram.com/loumstarlearjet/"
                aria-label="Instagram Profile">
                <InstagramIcon className={classes.icon} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/louis-manestar/"
                aria-label="LinkedIn Profile">
                <LinkedInIcon className={classes.icon} />
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid item className={classes.gridElement} xs={1}>
          <Box className={classes.elementContainer}>
            <Typography className={classes.text} variant="caption">
              Written with love in:
            </Typography>
            <Box className={classes.iconsFlex}>
              <Link
                href="https://www.typescriptlang.org/"
                aria-label="TypeScript">
                <TypeScriptIcon className={classes.icon} />
              </Link>
              <Link href="https://nextjs.org/" aria-label="NextJS">
                <NextIcon className={classes.icon} />
              </Link>
              <Link href="https://mui.com/" aria-label="Material UI">
                <MuiIcon className={classes.icon} />
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid item className={classes.gridElement} xs={1}>
          <Box className={classes.elementContainer}>
            <Typography className={classes.text} variant="caption">
              Hosted by:
            </Typography>
            <Box className={classes.iconsFlex}>
              <Link href="https://vercel.com/" aria-label="Vercel">
                <VercelIcon className={classes.icon} />
              </Link>
            </Box>
          </Box>
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
    justifyContent: 'space-around',
    maxWidth: '60rem',
    padding: '1rem',
    marginTop: 0,
  },
  gridElement: {
    display: 'inline-flex',
    justifyContent: 'center',
  },
  elementContainer: {
    width: theme.spacing(18),
    display: 'inline-flex',
    flexDirection: 'column',
  },
  text: {
    color: theme.palette.primary.contrastText,
    display: 'inline',
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
