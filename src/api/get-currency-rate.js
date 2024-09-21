// endpoints
import * as E from '../utilities/endpoints'
/////////////////////////////////////////////////

export const getCurrencyRate = async () => {
  try {
    // eslint-disable-next-line no-undef
    const response = await fetch(E.BASE_URL, {
      method: E.METHODS.GET,
    })

    return response.json()
  } catch (error) {
    throw error
  }
}
