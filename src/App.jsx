import {useEffect} from 'react'
import { getGreeting } from './utils/graphql/apollo-client'

export default function App() {

  useEffect(() => {
    (async () => {
      await getGreeting();
    })()
      
  }, [])

  return (
    <div>App</div>
  )
}
