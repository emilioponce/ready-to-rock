import mockAxios from 'axios'
import mockBandsIdList from '../__mocks__/mockBandsIdList'
import mockFilteredBandsIdList from '../__mocks__/mockFilteredBandsIdList'
import mockBand from '../__mocks__/mockBand'
import { getBandsIds, getBand, getBandsIdsBySearchTerms } from '../api'
import { ENDPOINT_BANDS } from '../constants'

afterEach(() => {
  jest.clearAllMocks()
})

describe('API tests', () => {
  it('Success fetching the ID list from all bands', async () => {
    mockAxios.get.mockImplementationOnce(() => Promise.resolve(mockBandsIdList))
    const bandsIds = await getBandsIds()
    expect(bandsIds).toEqual(mockBandsIdList)
    expect(mockAxios.get).toHaveBeenCalledTimes(1)
    expect(mockAxios.get).toHaveBeenCalledWith(ENDPOINT_BANDS)
  })

  it('Success fetching a band by ID', async () => {
    mockAxios.get.mockImplementationOnce(() => Promise.resolve(mockBand))
    const id = 9
    const band = await getBand(id)
    expect(band).toEqual(mockBand)
    expect(mockAxios.get).toHaveBeenCalledTimes(1)
  })

  it('Success fetching the ID list from bands filtered by search term', async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve(mockFilteredBandsIdList)
    )
    const searchTerms = 'wallnut'
    const filteredBandsIds = await getBandsIdsBySearchTerms(searchTerms)
    expect(filteredBandsIds).toEqual(mockFilteredBandsIdList)
    expect(mockAxios.get).toHaveBeenCalledTimes(1)
  })
})
