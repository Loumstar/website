import { makeStyles } from 'tss-react/mui'
import { AppBar } from '@mui/material'

export default function Design() {
  const { classes } = useStyles()
  return (
    <div>
      <AppBar />
      <h1 className={classes.title}>Design</h1>
    </div>
  )
}

const useStyles = makeStyles()(theme => ({
  title: {
    color: theme.palette.error.main,
  },
}))
