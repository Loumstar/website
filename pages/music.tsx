import { AppBar } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

export default function Music() {
  const { classes } = useStyles()
  return (
    <div>
      <AppBar />
      <h1 className={classes.title}>Music</h1>
    </div>
  )
}

const useStyles = makeStyles()(theme => ({
  title: {
    color: theme.palette.error.main,
  },
}))
