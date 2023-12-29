// import {useEffect} from 'react'
import { useGreeting } from './utils/hooks/apollo.hooks'

export default function App() {

  const greeting = useGreeting();
  console.log(greeting)

  // useEffect(() => {
  //   (async () => {
  //     await getGreeting();
  //   })()
      
  // }, [])

  return (
    <div>App</div>
  )
}
