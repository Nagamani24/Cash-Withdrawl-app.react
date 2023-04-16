// Write your code here

import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  denominationValue = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <div className="header">
            <p className="icon">S</p>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balance">
            <p className="bal">Your Balance</p>
            <div>
              <p className="value">{balance}</p>
              <p className="rupees">In Rupees</p>
            </div>
          </div>
          <div>
            <p className="withdraw">Withdraw</p>
            <p className="select-sum">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="values">
            {denominationsList.map(eachItem => (
              <DenominationItem
                value={eachItem.value}
                key={eachItem.id}
                denominationValue={this.denominationValue}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
