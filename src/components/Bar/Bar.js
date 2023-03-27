export default function Bar(props) {
  return (
    <div className="bar">
        <ul>
            <li>
                <p className={props.loc === 'multi-page-form' ? 'activeBar' : null}>1</p>
                <div className="bar-desc">
                    <p>Step 1</p>
                    <h2>Your info</h2>
                </div>
            </li>
           
            <li>
                <p className={props.loc === 'multi-page-form/plan' ? 'activeBar' : null}>2</p>
                <div className="bar-desc">
                    <p>Step 2</p>
                    <h2>Select plan</h2>
                </div>
            </li>
            
            <li>
                <p className={props.loc === 'multi-page-form/add-ons' ? 'activeBar' : null}>3</p>
                <div className="bar-desc">
                    <p>Step 3</p>
                    <h2>Add-ons</h2>
                </div>
            </li>

            <li>
                <p className={props.loc === 'multi-page-form/summary' || props.loc === 'multi-page-form/completed' ? 'activeBar' : null}>4</p>
                <div className="bar-desc">
                    <p>Step 4</p>
                    <h2>Summary</h2>
                </div>
            </li>
        </ul>
    </div>
  )
}
