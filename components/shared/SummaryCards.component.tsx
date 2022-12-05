import { Button, Paper, Typography, Grid } from '@mui/material'
import React from 'react'
import { Stylable } from 'types/react'
import { makeStyles } from '@styles'
import { useRouter } from 'next/router'

import SmartToyIcon from '@mui/icons-material/SmartToy'
import DevicesIcon from '@mui/icons-material/Devices'
import FilterDramaIcon from '@mui/icons-material/FilterDrama'
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing'

export const SummaryCards: React.FC<Stylable> = props => {
  const { className } = props
  const { classes, cx } = useStyles()
  const router = useRouter()
  const cards: Array<{
    name: string
    title: string
    logo: JSX.Element
    message: string
    link: string
  }> = [
    {
      name: 'ai-ml',
      title: 'Machine Learning & AI',
      logo: <SmartToyIcon className={classes.icon} />,
      message: `I specialise in machine learning, particularly computer vision and deep 
        learning. However, I also have experience working in reinforcement learning, robot
        learning and natural language processing.`,
      link: '/software',
    },
    {
      name: 'appdev',
      title: 'App Development',
      logo: <DevicesIcon />,
      message: `I have developed several web-apps over the years. For interactive, visual
        applications I like to use TypeScript and Next.js with the Material UI library. 
        Otherwise, I'm a big fan of Python for rapid prototyping and app development.`,
      link: '/design',
    },
    {
      name: 'cloud',
      title: 'Infrastructure and DevOps',
      logo: <FilterDramaIcon />,
      message: `I have experience working on cloud-based projects, including setting up 
        pipelines and making use of microservices. I know AWS the best, but I have
        also experimented with GCP and Azure.`,
      link: '/design',
    },
    {
      name: 'mecheng',
      title: 'Engineering and Product Design',
      logo: <PrecisionManufacturingIcon />,
      message: `I have experience working on cloud-based projects, including setting up 
        pipelines and making use of microservices. I know AWS the best, but I have
        also experimented with GCP and Azure.`,
      link: '/design',
    },
  ]

  return (
    <Paper className={cx(className, classes.gridPaper)} elevation={0}>
      <Grid
        container
        className={classes.grid}
        columns={{ xs: 1, sm: 2, md: 2 }}>
        {cards.map(({ name, title, logo, message, link }) => (
          <Grid key={name} className={classes.cardContainer} item xs={1}>
            <Paper className={classes.paper}>
              <Grid className={classes.card} container spacing={1}>
                <Grid item xs>
                  {logo}
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    className={classes.cardTitle}
                    gutterBottom
                    variant="subtitle1">
                    {title}
                  </Typography>
                </Grid>
                <Grid item className={classes.textItem} xs={12}>
                  <Typography
                    className={classes.text}
                    variant="body2"
                    gutterBottom>
                    {message}
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                className={classes.buttonGrid}
                justifySelf={'flex-end'}>
                <Grid item>
                  <Button
                    key={`${name}-button`}
                    className={classes.button}
                    color="primary"
                    onClick={() => router.push(link)}>
                    See more
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Paper>
  )
}

const useStyles = makeStyles()(theme => ({
  icon: {
    padding: 0,
  },
  button: {
    right: 0,
    textTransform: 'capitalize',
  },
  grid: {},
  textItem: {
    height: '100%',
  },
  cardTitle: {
    marginBottom: 0,
  },
  text: {
    overflowWrap: 'break-word',
  },
  cardContainer: {
    padding: theme.spacing(2),
    height: 'inherit',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
    height: '100%',
  },
  card: {
    //display: 'grid',
    //gridTemplateColumns: [theme.spacing(3), 'auto'],
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  buttonGrid: {
    justifyContent: 'flex-end',
    paddingTop: theme.spacing(1),
  },
  gridPaper: {
    background: '-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
}))
