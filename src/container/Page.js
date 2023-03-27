import { Outlet, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Bar from '../components/Bar/Bar'

export default function Page() {
  const {pathname} = useLocation()

  const [loc, setLoc] = useState(pathname.slice(1))

  useEffect(() => {
    setLoc(pathname.slice(1))
  },[pathname])

  return (
    <div className='body'>
      <header>
        <Bar loc={loc} />
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}
