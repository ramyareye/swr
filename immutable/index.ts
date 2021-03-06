// @ts-ignore
import useSWR from 'swr'

import { withMiddleware } from '../src/utils/with-middleware'
import { Middleware, SWRHook } from '../src/types'

export const immutable: Middleware = useSWRNext => (key, fetcher, config) => {
  // Always override all revalidate options.
  config.revalidateOnFocus = false
  config.revalidateWhenStale = false
  config.revalidateOnReconnect = false
  return useSWRNext(key, fetcher, config)
}

export default withMiddleware(useSWR as SWRHook, immutable)
