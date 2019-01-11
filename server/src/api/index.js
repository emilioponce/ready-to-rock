import { Router } from 'express'
import { getBands } from '../db'
import { prependImageUrlInBody } from '../utils'

let api = Router()

const bands = getBands()

/* Bands IDs, OR bands containing 'search' text in title, body or members */
api.get('/bands', (req, res) => {
  let text = req.query.q
  if (text !== undefined) {
    let matchingBands = []
    // using a regexp with search() to ignore case
    let myRegEx = new RegExp(text, 'i')
    matchingBands = bands.filter(band => {
      let found = false
      if (band.title) {
        let index = band.title.search(myRegEx)
        if (index > -1) found = true
      }
      if (band.body) {
        let index = band.body.search(myRegEx)
        if (index > -1) found = true
      }
      if (band.members) {
        let membersString = band.members.join(',')
        let index = membersString.search(myRegEx)
        if (index > -1) found = true
      }
      return found
    })
    const idList = matchingBands.map(band => band.id)
    return res.send(idList)
  }

  // there's no search text, so we are asking for the list of bands IDs
  const idList = bands.map(band => band.id)
  return res.send(idList)
})

/* Band filtered by id */
api.get('/bands/:id', (req, res) => {
  let id = parseInt(req.params.id)
  let filteredBand = bands.find(band => band.id === id)

  if (filteredBand === undefined)
    return res.send({ message: `No band matching with id=${id}` })

  // parsing images with cdn url
  const parsedBodyBand = prependImageUrlInBody(filteredBand)
  const { title, body, members } = parsedBodyBand
  const band = { title, body, members }
  return res.send(band)
})

api.get('*', (req, res) =>
  res.status(200).send({
    message: 'Welcome to the Ready to rock Barcelona API'
  })
)

export default api
