import React, { useState } from 'react'
import { Stylable } from 'types/react'
import { makeStyles } from '@styles'
import emailjs from '@emailjs/browser'
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Snackbar,
  TextField,
} from '@mui/material'

interface HackProps extends Stylable {
  isOpen: boolean
  setIsOpen: (state: boolean) => void
}

export const Hack: React.FC<HackProps> = props => {
  if (!process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
    throw Error('EmailJS public key is missing.')
  }

  emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)

  const { isOpen, setIsOpen, className } = props
  const { classes, cx } = useStyles()

  const [snackbarStatus, setSnackbarStatus] = useState(200)
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [emailForm, setEmailForm] = useState('')
  const [messageForm, setMessageForm] = useState('')

  const handleCloseDialog = () => setIsOpen(false)
  const handleCloseSnackbar = () => setSnackbarOpen(false)

  const sendMessage = async () => {
    if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID) {
      throw Error('EmailJS service id is missing.')
    } else if (!process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID) {
      throw Error('EmailJS template id is missing.')
    }

    const templateParams: { email: string; message: string } = {
      email: emailForm,
      message: messageForm,
    }

    handleCloseDialog()

    const { status } = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      templateParams,
    )

    setSnackbarStatus(status)
    setSnackbarOpen(true)
  }

  return (
    <>
      <Dialog
        className={cx(className, classes.dialog)}
        open={isOpen}
        onClose={handleCloseDialog}
        slotProps={{ backdrop: { className: classes.backdrop } }}>
        <DialogTitle>Hack my website!</DialogTitle>
        <DialogContent>
          <DialogContentText variant="body2" className={classes.text}>
            In this website, there is a puzzle which requires you to do some
            hacking! The hint is to{' '}
            <span className={classes.highlighted}>follow the BrewDog.</span>{' '}
            Once you{"'"}ve found the secret key, paste it here. The first
            person to find the secret key will get a free pint on me!
          </DialogContentText>
          <TextField
            className={classes.email}
            size="small"
            autoFocus
            margin="dense"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            value={emailForm}
            onChange={e => setEmailForm(e.target.value)}
          />
          <TextField
            className={classes.message}
            multiline
            minRows={4}
            maxRows={6}
            autoFocus
            margin="dense"
            label="Key"
            type="text"
            fullWidth
            variant="outlined"
            value={messageForm}
            onChange={e => setMessageForm(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button className={classes.button} onClick={handleCloseDialog}>
            Cancel
          </Button>
          <Button
            className={classes.button}
            onClick={sendMessage}
            disabled={!(emailForm && messageForm)}>
            Send
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
        <Alert
          severity={snackbarStatus === 200 ? 'success' : 'error'}
          onClose={handleCloseSnackbar}>
          {snackbarStatus === 200
            ? 'Thanks! Message sent.'
            : 'Oops! Something went wrong.'}
        </Alert>
      </Snackbar>
    </>
  )
}

const useStyles = makeStyles()(theme => ({
  email: {},
  message: {},
  dialog: {},
  highlighted: {
    fontWeight: 700,
  },
  backdrop: {
    backgroundColor: 'transparent',
    backdropFilter: 'blur(5px)',
  },
  text: {},
  button: {
    textTransform: 'capitalize',
  },
}))
