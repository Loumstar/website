import type { NextApiRequest, NextApiResponse } from 'next'
import emailjs from '@emailjs/browser'
import { env } from 'process'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<null | { message: string }>,
) => {
  if (req.method !== 'POST') {
    res.status(400).json({ message: 'Only "POST" methods accepted.' })
    return
  } else if (!req?.body.email || !req?.body.message) {
    res.status(400).json({ message: 'No email or message provided.' })
    return
  } else if (
    !env.EMAILJS_PUBLIC_KEY ||
    !env.EMAILJS_SERVICE_ID ||
    !env.EMAILJS_TEMPLATE_ID
  ) {
    throw Error('EmailJS credentials not provided.')
  }

  let templateParams: { email: string; message: string } = {
    email: req.body.email,
    message: req.body.message,
  }

  let { status } = await emailjs.send(
    env.EMAILJS_SERVICE_ID,
    env.EMAILJS_TEMPLATE_ID,
    templateParams,
    env.EMAILJS_PUBLIC_KEY,
  )

  res.status(status)
}

export default handler
