import React, {Component} from 'react';

class DiceRoll extends Component{


  render(){
    return(
      <div>
        <div className="dice" onClick={ this.props.roll }> {this.props.num} </div>
      </div>
    )
  }
}

export default DiceRoll
