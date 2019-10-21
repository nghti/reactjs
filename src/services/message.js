import format from 'string-format'

import { client } from '../utils/axios'

const PLACE_DETAIL_ENDPOINT = '/unknown'

export const getPlaceDetail = () => {
  return client().get(format(PLACE_DETAIL_ENDPOINT))
}
