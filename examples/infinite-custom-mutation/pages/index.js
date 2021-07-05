import { useState } from 'react'

import useLocalStorage from '../hooks/useLocalStorage'

export default function App() {
  const [name, setName] = useLocalStorage("name1", ['a', 'b', 'c']);
console.log(name)
  return (
    <div style={{ fontFamily: 'sans-serif' }}>
    {name}
    <div onClick={() => setName(name => [...name, 'd'])}>a</div>
      {/* <input
        value={val}
        onChange={(e) => setVal(e.target.value)}
        placeholder="reactjs/react-a11y"
      />
      <button
        onClick={() => {
          setRepo(val)
          setSize(1)
        }}
      >
        load issues
      </button>
      <p>
        showing {size} page(s) of {isLoadingMore ? '...' : issues.length}{' '}
        issue(s){' '}
        <button
          disabled={isLoadingMore || isReachingEnd}
          onClick={() => setSize(size + 1)}
        >
          {isLoadingMore
            ? 'loading...'
            : isReachingEnd
            ? 'no more issues'
            : 'load more'}
        </button>
        <button disabled={isRefreshing} onClick={() => mutate()}>
          {isRefreshing ? 'refreshing...' : 'refresh'}
        </button>
        <button disabled={!size} onClick={() => setSize(0)}>
          clear
        </button>
      </p>
      {isEmpty ? <p>Yay, no issues found.</p> : null}
      {issues.map((issue) => {
        return (
          <p key={issue.id} style={{ margin: '6px 0' }}>
            - {issue.title}
          </p>
        )
      })} */}
    </div>
  )
}
