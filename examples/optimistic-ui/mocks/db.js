import { factory, primaryKey } from '@mswjs/data'

import {fakePosts} from './fake-data'

export const db = factory({
  post: {
    id: primaryKey(String),
    title: () => String,
  },
})

fakePosts.map(({id, title}) => {
    db.post.create({id, title})
})


