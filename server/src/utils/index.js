import { CDN_URL_BASE } from '../constants'

/* Prepend cdn URL to each BODY image */
export const prependImageUrlInBody = band => {
  // new immutable band, to prevent side-effects
  const parsedBodyBand = {
    ...band,
    body: band.body.replace(/<img src="/g, `<img src="${CDN_URL_BASE}`)
  }
  return parsedBodyBand
}
