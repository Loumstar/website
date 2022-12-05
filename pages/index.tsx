import { NextPage } from 'next'
import { makeStyles } from 'tss-react/mui'
import { loremIpsum } from 'react-lorem-ipsum'
import { Section, SummaryCards } from '@components/shared'
import { Typography } from '@mui/material'
import { TypeAnimation } from 'react-type-animation'

const Home: NextPage = () => {
  const { classes, cx } = useStyles()

  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <Typography variant="h1" className={classes.titleText}>
          {'Hello, my name is '}
          <span className={classes.colourfulText}>Louis.</span>
        </Typography>
        <div className={cx(classes.titleText, classes.iAm)}>
          <span>{'I am '}</span>
          <TypeAnimation
            sequence={[
              'a Musician.',
              1250,
              'a Software Engineer.',
              1250,
              'a Pilot.',
              1250,
              'a Mechanical Engineer.',
              1250,
              'a Climber.',
              1250,
              'a Cyclist™.',
              1250,
            ]}
            speed={20}
            deletionSpeed={40}
            repeat={Infinity}
            wrapper="span"
            cursor
          />
        </div>
      </div>
      <Typography
        variant="body1"
        className={cx(classes.textBlock, classes.intro)}>
        {loremIpsum()}
      </Typography>
      <Section
        className={cx(classes.textBlock, classes.about)}
        title="About Me"
        text={`${loremIpsum()}`}
      />
      <Section
        className={cx(classes.textBlock, classes.about)}
        title="What I do"
        text={`${loremIpsum()}`}
      />
      <SummaryCards />
    </div>
  )
}

const useStyles = makeStyles()(theme => ({
  about: {},
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '75rem',
    padding: '2.5rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3), // This needs to be designed better with top-bar
      paddingTop: theme.spacing(2),
    },
  },
  intro: {
    maxWidth: '60rem',
  },
  navbar: {
    backgroundColor: 'transparent',
  },
  textBlock: {
    margin: theme.spacing(2, 0),
  },
  titleContainer: {
    marginBottom: theme.spacing(4),
  },
  titleText: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: '2.5em',
    lineHeight: 1.5,
  },
  iAm: {
    //overflow: 'scroll',
    //whiteSpace: 'nowrap',
    //textiAm: 'ellipsis',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  colourfulText: {
    background: '-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
}))

export default Home
