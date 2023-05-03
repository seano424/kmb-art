import { isValidRequest } from '@sanity/webhook'
import { NextApiRequest, NextApiResponse } from 'next'

const secret = process.env.SANITY_WEBHOOK

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  //authenticating the webhook
  try {
    if (!isValidRequest(req, secret!)) {
      res.status(401).json({ message: 'Invalid signature' })
      return
    }

    //getting payload
    const { slug } = req.body
    await res.revalidate(`/`)
    await res.revalidate(`/work/`)
    await res.revalidate(`/work/${slug}`)

    res.status(200).json({ msg: 'Art pages revalidated.' })
  } catch (error) {
    res.status(500).json({ err: 'Something went wrong!' })
  }
}

export default handler
