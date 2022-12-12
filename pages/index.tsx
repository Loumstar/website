import { NextPage } from 'next'
import { makeStyles } from 'tss-react/mui'
import { loremIpsum } from 'react-lorem-ipsum'
import { Heading, Section, SummaryCards } from '@components/shared'
import { Box, Typography } from '@mui/material'
import { TypeAnimation } from 'react-type-animation'
import Script from 'next/script'
import Image from 'next/image'

const Home: NextPage = () => {
  const { classes, cx } = useStyles()

  return (
    <Box className={classes.container}>
      <Box className={classes.titleContainer}>
        <Typography variant="h1" className={classes.titleText}>
          {'Hello, my name is '}
          <span className={classes.colourfulText}>Louis.</span>
        </Typography>
        <Box className={cx(classes.titleText, classes.iAm)}>
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
        </Box>
      </Box>
      <Heading className={classes.intro}>
        <Typography>{loremIpsum()}</Typography>
      </Heading>
      <Heading title="About Me">
        <Section>
          <>
            <Image
              className={cx(classes.image, classes.floatRight)}
              src="/windsor.jpeg"
              width={375}
              height={281.25}
              alt="Cycling around Windsor Great Park."
              priority
            />
            <Typography>{loremIpsum()}</Typography>
          </>
        </Section>
      </Heading>
      <Heading title="What I do">
        <>
          <Section>
            <Typography>{loremIpsum()}</Typography>
          </Section>
          <SummaryCards className={classes.summaryCards} />
          <Section title="Non-technical">
            <Typography>{loremIpsum()}</Typography>
          </Section>
          <Section title="Music">
            <>
              <Image
                className={cx(classes.image, classes.floatRight)}
                src="/elements.jpeg"
                width={375}
                height={468.75}
                alt="Playing with The Elements @ Club 85 2018."
              />
              <Typography>{loremIpsum()}</Typography>
            </>
          </Section>
          <Section title="Flying">
            <>
              <Image
                className={cx(classes.image, classes.floatRight)}
                src="/brighton-flight.jpeg"
                width={375}
                height={667}
                alt="A flight out to Brighton June 2019."
              />
              <Typography>{loremIpsum()}</Typography>
            </>
          </Section>
          <Section title="Climbing">
            <>
              <Image
                className={cx(classes.image, classes.floatRight)}
                src="/fontainebleu.jpeg"
                width={375}
                height={667}
                alt="Into the forest of Fontainebleu for some night climbing."
              />
              <Typography>{loremIpsum()}</Typography>
            </>
          </Section>
          <Section title="Cycling">
            <>
              <Box className={cx(classes.stravaEmbedding, classes.floatRight)}>
                <div
                  className="strava-embed-placeholder"
                  data-embed-type="activity"
                  data-embed-id="8177352750"></div>
                <Script src="https://strava-embeds.com/embed.js"></Script>
              </Box>
              <Typography>{loremIpsum()}</Typography>
            </>
          </Section>
          <Section title="Art Exhibitions" />
          <Section title="Coffee">
            <>
              <Image
                className={cx(classes.image, classes.floatRight)}
                src="/coffee.jpeg"
                width={375}
                height={667}
                alt="My best attempt at a flat white."
              />
              <Typography>{loremIpsum()}</Typography>
            </>
          </Section>
        </>
      </Heading>
    </Box>
  )
}

const useStyles = makeStyles()(theme => ({
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
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  colourfulText: {
    background: `-webkit-linear-gradient(45deg, ${theme.palette.primary.light} 5%, #FF8E53 90%)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  summaryCards: {
    margin: '1rem 0',
    alignSelf: 'center',
  },
  image: {
    margin: theme.spacing(1),
    overflow: 'hidden',
    objectFit: 'cover',
    width: theme.spacing(40),
    height: theme.spacing(50),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(2, 'auto'),
      display: 'block',
      float: 'none',
      width: '100%',
    },
  },
  floatLeft: {
    float: 'left',
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(0),
  },
  floatRight: {
    float: 'right',
    marginRight: theme.spacing(0),
    marginLeft: theme.spacing(2),
  },
  coffeeImage: {
    objectPosition: 'center 78%',
  },
  stravaEmbedding: {
    height: '537px',
    width: '375px',
    margin: '1px',
  },
}))

export default Home
