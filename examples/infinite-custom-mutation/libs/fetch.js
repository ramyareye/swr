import useLocalStorage from '../hooks/useLocalStorage'

export default function (...args) {
  const [name, setName] = useLocalStorage("name1", ['a', 'b', 'c']);
  const res = await fetch(...args)
  return res.json()
}
