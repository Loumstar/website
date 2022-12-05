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
        headingTitle="About Me"
        text={`${loremIpsum()}`}
        imagePath="/windsor.jpg"
        imageWidth={400}
        imageHeight={300}
        float="right"
        imageAlt="Cycling around Windsor Great Park."
      />
      <Section
        className={cx(classes.textBlock, classes.technical)}
        headingTitle="What I do"
        sectionTitle="Technical"
        text={`${loremIpsum()}`}
      />
      <SummaryCards className={classes.summaryCards} />
      <Section
        className={cx(classes.textBlock, classes.nonTechnical)}
        sectionTitle="Non-technical"
        text={`${loremIpsum()}`}
      />
      <Section
        className={cx(classes.textBlock, classes.nonTechnical)}
        sectionTitle="Music"
        imagePath="/elements.jpeg"
        imageWidth={320}
        imageHeight={400}
        float="right"
        text={`${loremIpsum()}`}
      />
      <Section
        className={cx(classes.textBlock, classes.nonTechnical)}
        sectionTitle="Climbing and Cycling"
        imagePath="/fontainebleu.jpeg"
        imageWidth={375}
        imageHeight={667}
        float="left"
        text={`${loremIpsum()}`}
      />
    </div>
  )
}

const useStyles = makeStyles()(theme => ({
  about: {},
  heading: {},
  technical: {},
  nonTechnical: {},
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
    maxWidth: '75rem',
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
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  colourfulText: {
    background: '-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  summaryCards: {
    margin: '1rem 0',
    //maxWidth: '65rem',
    alignSelf: 'center',
  },
}))

export default Home
