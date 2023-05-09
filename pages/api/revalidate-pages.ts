import { SIGNATURE_HEADER_NAME, isValidSignature } from '@sanity/webhook'
import { NextApiRequest, NextApiResponse } from 'next'

const secret = process.env.SANITY_WEBHOOK

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  //authenticating the webhook
  try {
    let signature
    if (req.headers[SIGNATURE_HEADER_NAME]) {
      signature = req.headers[SIGNATURE_HEADER_NAME].toString()
    } else {
      signature = 'sanity-webhook-signature'
    }
    if (!isValidSignature(JSON.stringify(req.body), signature, secret!))
      return res.status(401).json({ msg: 'Invalid request!' })

    //getting payload
    const { slug } = req.body
    await res.revalidate(`/`)
    await res.revalidate(`/work`)
    await res.revalidate(`/${slug}`)

    res.status(200).json({ msg: 'Single pages revalidated.' })
  } catch (error) {
    res.status(500).json({ err: 'Something went Wrong!' })
  }
}

export default handler
