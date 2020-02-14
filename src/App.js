import React, {Component} from 'react';
import './App.css';
import DiceRoll from './components/DiceRoll'
import LogRoll from './components/LogRoll'


class App extends Component{
  constructor(props){
    super(props)
    this.state = {

      rolledNumber: 1,
      logRoll: [1]

    }
  }

  rollDice = () => {
    var ranNum = Math.floor(Math.random() * 6 +1)
    var ranArr = this.state.logRoll.push(this.state.rolledNumber)
    this.setState({rolledNumber: ranNum, logRoll: ranArr})
    //this.setState({ currentPerson: nextPerson })

  }

  render(){
    return(
        <div>
            <DiceRoll
                num = {this.state.rolledNumber}
                roll = {this.rollDice}
                />
                <br />
            <LogRoll logit = {this.state.logRoll}/>
        </div>
    )
  }
}

export default App;
