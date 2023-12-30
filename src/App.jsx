// import {useEffect} from 'react'
import { useGreeting } from './utils/hooks/apollo.hooks'

export default function App() {

  const greeting = useGreeting();

  return (
    <div>{greeting || 'App'}</div>
  )
}
