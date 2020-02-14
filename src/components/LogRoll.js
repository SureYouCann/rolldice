import React, {Component} from 'react';

class LogRoll extends Component {
    render(){
      return(
        <div className = "logbox">
        {this.props.logit}
        </div>
      )
}}

export default LogRoll
