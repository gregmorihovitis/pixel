import React, { Component } from 'react';

class MyRobots extends Component {

  render() {
    return (
      <div>
        {this.props.robots.map(robot => 
         (<div>
            <p>{robot.name}</p>
            
          </div>)
        )}
        Test
      </div>
    )
  }
}
export default MyRobots;