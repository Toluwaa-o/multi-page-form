import { useSelector, useDispatch } from 'react-redux'
import { planActions } from '../store/plan-slice'
import { useState } from 'react'
import { Navigate, Link } from 'react-router-dom'

export default function Addons(props) {
  const addOns = useSelector(state => state.plan.addOns)
  const isMonthly = useSelector(state => state.plan.monthly)

  const dispatch = useDispatch()

  const checkHandler = (e) => {
    console.log(e.target.name)
    dispatch(planActions.checkUpdate(e.target.name))
  }

  const [nextPage, setNextPage] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    setNextPage(true)
    dispatch(planActions.calcTotal())
  }

  return (
    <div className='page'>
      <h2>Pick add-ons</h2>
      <p>Add-ons help enhance your gaming experience.</p>

      <form onSubmit={submit} action='summary' >
        <div className={`checkbox ${addOns.addon1 ? 'selected' : null}`}>
          <input onChange={checkHandler} checked={addOns.addon1} type='checkbox' name='addon1' value='online service' />
          <div className='middle'>
            <label htmlFor='addon1'>Online service</label>
            <p>Access to multiplayer games</p>
          </div>
          <p>{isMonthly ? '+$1/mo' : '+$10/yr'}</p>
        </div>
        
        <div className={`checkbox ${addOns.addon2 ? 'selected' : null}`}>
          <input onChange={checkHandler} checked={addOns.addon2} type='checkbox' name='addon2' value='large storage' />
          <div className='middle'>
            <label htmlFor='addon2'>Large Storage</label>
            <p>Extra 1TB of cloud save</p>
          </div>
          <p>{isMonthly ? '+$2/mo' : '+$20/yr'}</p>
        </div>

        <div className={`checkbox ${addOns.addon3 ? 'selected' : null}`}>
          <input onChange={checkHandler} checked={addOns.addon3} type='checkbox' name='addon3' value='online service' />
          <div className='middle'>
            <label htmlFor='addon3'>Customizable profile</label>
            <p>Custom theme on your profile</p>
          </div>
          <p>{isMonthly ? '+$2/mo' : '+$20/yr'}</p>
        </div>

        <div className='bottom'>
          <Link to='/plan'>Go Back</Link>
          <button>Next Step</button>
          {nextPage && <Navigate to='/summary' />}
        </div>
      </form>
    </div>
  )
}