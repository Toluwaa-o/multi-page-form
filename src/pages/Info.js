import { Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { planActions } from '../store/plan-slice'
import { useState } from 'react'
import Radium from 'radium'

function Info() {
    const canSubmit = useState(true)

    const dispatch = useDispatch()
    const valid = useSelector(state => state.plan.validInfo)
    const infoF = useSelector(state => state.plan.info)
    const eValid = useSelector(state => state.plan.emailInvalid)
    const formValid = useSelector(state => state.plan.formValid)

    const submitHandler = (e) => {
      e.preventDefault()
      dispatch(planActions.submitHandler())
    }

    const changeHandler = (e) => {
      const {name, value} = e.target
      dispatch(planActions.changeHandler({name, value}))
    }


    // const [validation, setValidation] = useState({
    //   emailValid: false,
    //   nameValid: false,
    //   numberValid: false,
    //   formValid: false
    // })

  return (
    <div className='page'>
        <h2>Personal info</h2>
        <p>Please provide your name, email address, and phone number.</p>

        <form onSubmit={submitHandler} action='/plan'>
            <div>
              <label htmlFor='name'>Name</label>
              {valid.name === false && <p className='errorMsg'>This field is required</p>}
              <input key='key1' style={{border: valid.name === false ? '1px solid var(--stRed)':'1px solid var(--cGray)', border: '1px solid var(--cGray)',
      ':hover': {
        border: '1px solid var(--mBlue)'
      }}} placeholder='e.g. Stephen King' type='text' name='name' value={infoF.name} onChange={changeHandler} />
            </div>

            <div>
            <label htmlFor='email'>Email Address</label>
            {valid.email === false && <p className='errorMsg'>{eValid ? 'Enter a valid email' : 'This field is required'}</p>}
            <input key='key2' style={{border: valid.email === false ? '1px solid var(--stRed)':'1px solid var(--cGray)', border: '1px solid var(--cGray)',
      ':hover': {
        border: '1px solid var(--mBlue)'
      }}} value={infoF.email} placeholder='e.g. stephenking@lorem.com' type='email' name='email' onChange={changeHandler} />
            </div>

            <div>
            <label htmlFor='number'>Phone Number</label>
            {valid.number === false && <p className='errorMsg'>This field is required</p>}
            <input key='key3' style={{border: valid.number === false ? '1px solid var(--stRed)':'1px solid var(--cGray)', border: '1px solid var(--cGray)',
      ':hover': {
        border: '1px solid var(--mBlue)'
      }}} value={infoF.number} placeholder='e.g. +1 234 567 890' type='tel' name='number' onChange={changeHandler} />
            </div>

            <button disabled={!canSubmit} style={{marginTop: '1em'}}>Next Step</button>
            {formValid && <Navigate to='/plan' replace={true}/>}
            
        </form>
    </div>
  )
}

export default Radium(Info)