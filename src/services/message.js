import format from 'string-format'

import { client } from '../utils/axios'

const PLACE_DETAIL_ENDPOINT = '/master-data'

export const getPlaceDetail = () => {
  return client().get(format(PLACE_DETAIL_ENDPOINT))
}
