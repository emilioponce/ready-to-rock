import axios from 'axios'
import { ENDPOINT_BANDS } from './constants'

const fetchData = url => {
  return axios
    .get(url)
    .catch(error => console.log(`Error in request to endpoint ${url} `, error))
}

// extendable requests declarations
export const getBandsIds = () => fetchData(ENDPOINT_BANDS)
export const getBand = id => fetchData(`${ENDPOINT_BANDS}/${id}`)
export const getBandsIdsBySearchTerms = searchTerms =>
  fetchData(`${ENDPOINT_BANDS}?q=${searchTerms}`)
