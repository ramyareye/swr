import useSWR from "swr"
// https://github.com/vercel/swr/discussions/582

export default function Home() {
  const { data, isValidating } = useSWR("https://my.backend/posts?take=1")

  console.log('data', data)
  return (
    <div>
    {isValidating && <div>loading...</div>}
    {!isValidating && data?.map(p => <div key={p.id}>{p.title}</div>)}
    </div>
  )
}