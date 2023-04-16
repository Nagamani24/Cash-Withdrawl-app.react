// Write your code here

import './index.css'

const DenominationItem = props => {
  const {value, denominationValue} = props
  const clickButton = () => {
    denominationValue(value)
  }

  return (
    <li className="button-container">
      <button type="button" onClick={clickButton}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
