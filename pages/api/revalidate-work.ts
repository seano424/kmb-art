import { isValidRequest } from '@sanity/webhook'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}

const secret = process.env.SANITY_WEBHOOK_SECRET

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (!isValidRequest(req, secret!)) {
    res.status(401).json({ message: 'Invalid signature' })
    return
  }

  try {
    const {
      body: { type, slug },
    } = req

    await res.revalidate(`/work/${slug}`)
    return res.json({ message: 'No managed type' })
  } catch (err) {
    return res.status(500).send({ message: 'Error revalidating' })
  }
}
