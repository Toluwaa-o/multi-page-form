import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { planActions } from '../store/plan-slice'

export default function Summary(props) {
  const isMonthly = useSelector(state => state.plan.monthly)
  const addOns = useSelector(state => state.plan.addOns)
  const plans = useSelector(state => state.plan.plan)
  const total = useSelector(state => state.plan.total)

  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(planActions.reset())
  },[])
  
  return (
    <div className="page">
      <h2>Finishing up</h2>
      <p>Double-check everything looks OK before confirming.</p>

      <div>
        <div className='addonsBlue'>
          <div className='selectedPlan'>
            <div>
              <p>{plans.arcade ? 'Arcade' : props.advanced ? 'Advanced' : 'Pro'} ({isMonthly ? 'Monthly' : 'Yearly'})</p>
              <Link to='/plan'>Change</Link>
            </div>
            <p>{plans.arcade ? isMonthly ? '$9/mo' : '$90/yr' : plans.advanced ? isMonthly ? '$12/mo' : '$120/yr' : isMonthly ? '$15/mo' : '$150/yr'}</p>
          </div>

          <div className='addOnList'>
            {addOns.addon1 && <div>
              <p>Online Service</p>
              <p>+${isMonthly ? '1/mo' : '10/yr'}</p>
            </div>}

            {addOns.addon2 && <div>
              <p>Large Storage</p>
              <p>+${isMonthly ? '2/mo' : '20/yr'}</p>
            </div>}

            {addOns.addon3 && <div>
              <p>Customizable Profile</p>
              <p>+${isMonthly ? '2/mo' : '20/yr'}</p>
            </div>}
          </div>

          {/* {addons} */}
        </div>

        <div className='Total'>
          <p>Total (per {isMonthly ? 'month' : 'year'})</p>
          <p>${total}/{isMonthly ? 'mo' : 'yr'}</p>
        </div>
      </div>

      <div className='summaryBtm'>
        <Link to='/add-ons'>Go Back</Link>
        <Link to='/completed'>Confirm</Link>
      </div>
    </div>
  )
}
