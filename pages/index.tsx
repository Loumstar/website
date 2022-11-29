import { makeStyles } from 'tss-react/mui'
import { AppBar } from '@mui/material'

export default function Home() {
  const { classes } = useStyles()
  return (
    <div>
      <AppBar />
      <h1 className={classes.title}>Homepage</h1>
    </div>
  )
}

const useStyles = makeStyles()(theme => ({
  title: {
    color: theme.palette.error.main,
  },
}))
