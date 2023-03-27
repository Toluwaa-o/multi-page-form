import { Navigate, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { planActions } from '../store/plan-slice'

export default function Plan(props) {

  const isMonthly = useSelector(state => state.plan.monthly)
  const plans = useSelector(state => state.plan.plan)
  const dispatch = useDispatch()

  const handleToggle = () => {
    dispatch(planActions.billingType())
  }

  useEffect(() => {
    dispatch(planActions.reset())
  }, [])

  const selectPlan = (name) => {
    dispatch(planActions.choosePlan(name))
  }

  const [nextPage, setNextPage] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    setNextPage(true)
  }

  return (
    <div className="page">
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly billing.</p>

      <form onSubmit={submit} action='add-ons'>
        <div className='cards'>
        <div onClick={() => selectPlan('arcade')} className={`card ${plans.arcade ? 'selected' : null}`}>
          <img src='./images/icon-arcade.svg' alt='icon' />
          <input type='radio' name='plan' checked={plans.arcade} value='arcade' />

          <div>
            <label htmlFor='arcade' style={{fontSize: '1.1em', fontWeight: '600'}}>Arcade</label>
            <p>{isMonthly ? '$9/mo' : '$90/yr'}</p>
          </div>
        </div>

        <div onClick={() => selectPlan('advanced')} className={`card ${plans.advanced ? 'selected' : null}`}>
          <img src='./images/icon-advanced.svg' alt='icon' />
          <input checked={plans.arcade} type='radio' name='plan' value='advanced' />

          <div>
            <label htmlFor='advanced' style={{fontSize: '1.1em', fontWeight: '600'}}>Advanced</label>
            <p>{isMonthly ? '$12/mo' : '$120/yr'}</p>
          </div>
        </div>

        <div onClick={() => selectPlan('pro')} className={`card ${plans.pro ? 'selected' : null}`}>
          <img src='./images/icon-pro.svg' alt='icon' />
          <input checked={plans.pro} type='radio' name='plan' value='pro' />

          <div>
            <label style={{fontSize: '1.1em', fontWeight: '600'}} htmlFor='pro'>Pro</label>
            <p>{isMonthly ? '$15/mo' : '$150/yr'}</p>
          </div>
        </div>
        </div>

      <div className="switch">
        <p style={{color: isMonthly ? 'hsl(213, 96%, 18%)' : 'hsl(231, 11%, 63%)'}}>Monthly</p>

        <div style={{justifyContent: isMonthly ? 'flex-start' : 'flex-end'}} onClick={handleToggle} className="toggler">
          <div className="ball"></div>
        </div>

        <p style={{color: !isMonthly ? 'hsl(213, 96%, 18%)' : 'hsl(231, 11%, 63%)'}}>Yearly</p>
      </div>

      <div className='bottom'>
        <Link to='/'>Go Back</Link>
        <button>Next Step</button>
        {nextPage && <Navigate to='/add-ons' />}
      </div>
      </form>
    </div>
  )
}