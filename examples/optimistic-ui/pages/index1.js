import React from 'react'
import fetch from '../libs/fetch'

import {useSWRInfinite} from 'swr'

export default () => {
  const [text, setText] = React.useState('');
  const { data, mutate, size, setSize } = useSWRInfinite('/api/data', fetch)

  // const { data } = useSWR('/api/data', fetch)

  async function handleSubmit(event) {
    event.preventDefault()
    // Call mutate to optimistically update the UI.
    mutate([...data, text], false)
    // Then we send the request to the API and let mutate
    // update the data with the API response.
    // Our action may fail in the API function, and the response differ
    // from what was optimistically updated, in that case the UI will be
    // changed to match the API response.
    // The fetch could also fail, in that case the UI will
    // be in an incorrect state until the next successful fetch.
    mutate('/api/data', await fetch('/api/data', {
      method: 'POST',
      body: JSON.stringify({ text })
    }))
    setText('')
  }

  const texts = data ? [].concat(data) : []

  return <div>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={event => setText(event.target.value)}
        value={text}
      />
      <button>Create</button>
    </form>
    <ul>
      {texts ? texts.map(text => <li key={text}>{text}</li>) : 'loading...'}
    </ul>
  </div>
}
