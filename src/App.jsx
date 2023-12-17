import {useEffect} from 'react'

export default function App() {

  useEffect(() => {
    (async () => {
      const resp = await fetch('http://localhost:80')
      const r = await resp.json();
      console.log(r)
    })()
      
  }, [])

  return (
    <div>App</div>
  )
}
