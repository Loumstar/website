import { NextPage } from 'next'
import { makeStyles } from 'tss-react/mui'
import { loremIpsum } from 'react-lorem-ipsum'
import { Section } from '@components/shared'
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
        <div className={classes.titleText}>
          <span>{'I am '}</span>
          <TypeAnimation
            sequence={[
              'a Musician.',
              1250,
              'an Engineer.',
              1250,
              'a Pilot.',
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
      <div className={classes.textContainer}>
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
      </div>
    </div>
  )
}

const useStyles = makeStyles()(theme => ({
  about: {},
  container: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '70rem',
    padding: '2.5rem',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  intro: {},
  navbar: {
    backgroundColor: 'transparent',
  },
  page: {
    //backgroundColor: 'rgba(255, 22, 68, 0.1)',
    height: '100%',
  },
  textBlock: {
    margin: theme.spacing(2, 0),
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 5rem',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  titleContainer: {
    marginBottom: theme.spacing(4),
  },
  titleText: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: '2.5em',
  },
  colourfulText: {
    background: '-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
}))

export default Home
