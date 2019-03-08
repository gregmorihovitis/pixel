import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import MyRobots from '../components/_MyRobot';
import HallOfFame from '../components/_HallOfFame';
// import { throws } from 'assert';
class Home extends Component {

  render() {
    if (!this.props.userInfo.name) {
      return (<Redirect to="/login" />)
    }
    return (
      <div>
        <h1>Welcome {this.props.userInfo.name}!</h1>
        <MyRobots 
          user_id={this.props.userInfo.id}
          robots={this.props.userInfo.robots} 
          updateRobotInfo={this.props.updateRobotInfo}
          updateChosenBattleRobot={this.props.updateChosenBattleRobot}
        />
        <Link to='/hall-of-fame'><button>Hall of fame</button></Link>
      </div>
    );
  }
}

export default Home;