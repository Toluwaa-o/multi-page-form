import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <div className='page' style={{textAlign: 'center', top: '2em'}}>
      <h2 style={{marginBottom: '2em'}}>Oh Oh! Looks like we could not find that page.</h2>

      <p>Go back to the <Link to='/'>Homepage</Link></p>
    </div>
  )
}
