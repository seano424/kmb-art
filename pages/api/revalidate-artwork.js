import { SIGNATURE_HEADER_NAME, isValidSignature } from '@sanity/webhook'

const secret = process.env.SANITY_WEBHOOK

const handler = async (req, res) => {
  //authenticating the webhook
  try {
    const signature = req.headers[SIGNATURE_HEADER_NAME].toString()
    if (!isValidSignature(JSON.stringify(req.body), signature, secret))
      return res.status(401).json({ msg: 'Invalid request!' })

    //getting payload
    const { slug } = req.body
    await res.revalidate(`/`)
    await res.revalidate(`/work/`)
    await res.revalidate(`/work/${slug}`)

    res.status(200).json({ msg: 'Product pages revalidated.' })
  } catch (error) {
    res.status(500).json({ err: 'Something went Wrong!' })
  }
}

export default handler
