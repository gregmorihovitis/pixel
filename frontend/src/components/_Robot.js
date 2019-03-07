import React from 'react';
import styled from 'styled-components';

const RobotFront = styled.div`
  display:flex;
  /* justify-content: center; */
  align-items: flex-end;
  position: absolute;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-size: cover;
  background-origin: center;
  background-repeat: no-repeat;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transition: all .8s ease;
  border-radius: 6px;
  border: 1px solid #ddd;
  box-shadow: 0 1.5rem 4rem rgba(#111, .15);
`
const RobotBack = styled.div`
  position: absolute;
  background-color: #F5F3F5;
  height: 100%;
  width: 100%;
  top:0;
  left:0;
  overflow: hidden;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform: rotateY(180deg);
  transition: all .8s ease;
  border-radius: 6px;
  box-shadow: 0 1.5rem 4rem rgba(#111, .15);
  color: #444;

`

const RobotCard = styled.div`
  width:300px;
  height:420px;
  perspective: 150rem;
  position: relative;
  -moz-perspective: 150rem;
  border-radius: 5px;
  &:hover ${RobotFront}{
    transform: rotateY(-180deg)
  }
  &:hover ${RobotBack}{
    transform: rotateY(0deg);
  }
`
const RobotName = styled.p`
  flex: 1;
  margin-bottom: 3rem;
  background-color: #999;
  height: 3rem;
  text-align: center;
`
const Stats = styled.div`

`
const Stat = styled.div`

`
const StatDescription = styled.p`
  display: inline-block;
  margin-right: 5px;
`
const StatButton = styled.button`

`

class Robot extends React.Component{
  state = {
    id : this.props.robot.id,
    name: this.props.robot.name,
    strength: this.props.robot.strength,
    dexterity: this.props.robot.dexterity,
    health: this.props.robot.health,
    armour: this.props.robot.armour,
    active: this.props.robot.active, 
    remainingStats: 5
  }
  fixedState = {
    id : this.props.robot.id,
    name: this.props.robot.name,
    strength: this.props.robot.strength,
    dexterity: this.props.robot.dexterity,
    health: this.props.robot.health,
    armour: this.props.robot.armour,
    active: this.props.robot.active, 
    remainingStats: 5 || this.props.robot.remainingStats
  }
  handleStat = (prop, value, operation) => {
    return function (e){
      const obj = {};
      let points = this.state.remainingStats;
      if (operation === 'minus' && value > this.fixedState[prop]){
        value--;
        points++;
        this.setState({remainingStats: points})
      } else if(operation === 'plus' && this.state.remainingStats > 0) {
        value++;
        points--
        this.setState({remainingStats: points})
      }
      obj[prop] = value;
      this.setState(obj);
    }
  }

  render(){
    return (
      <RobotCard>
        <RobotFront key={this.state.id} style={{backgroundImage: 'url("https://66.media.tumblr.com/4f8896ebca88bb0d8308607315d085c9/tumblr_n439wbdHxA1sulisxo1_400.gif")'}}>
          <RobotName>{this.state.name}</RobotName>
        </RobotFront>
        <RobotBack>
          <Stats>
            <Stat>
              <StatDescription>Str: {this.state.strength}</StatDescription>
              <StatButton onClick={this.handleStat('strength', this.state.strength, 'minus').bind(this)}>-</StatButton>
              <StatButton onClick={this.handleStat('strength', this.state.strength, 'plus').bind(this)}>+</StatButton>
              </Stat>
            <Stat>
              <StatDescription>Dex: {this.state.dexterity}</StatDescription>
              <StatButton onClick={this.handleStat('dexterity', this.state.dexterity, 'minus').bind(this)}>-</StatButton>
              <StatButton onClick={this.handleStat('dexterity', this.state.dexterity, 'plus').bind(this)}>+</StatButton>
              </Stat>
            <Stat>
              <StatDescription>Stat: {this.state.health}</StatDescription>
              <StatButton onClick={this.handleStat('health', this.state.health, 'minus').bind(this)}>-</StatButton>
              <StatButton onClick={this.handleStat('health', this.state.health, 'plus').bind(this)}>+</StatButton>
              </Stat>
            <Stat>
              <StatDescription>ARM: {this.state.armour}</StatDescription>
              <StatButton onClick={this.handleStat('armour', this.state.armour, 'minus').bind(this)}>-</StatButton>
              <StatButton onClick={this.handleStat('armour', this.state.armour, 'plus').bind(this)}>+</StatButton>
              </Stat>
            <Stat>
              <StatDescription>Active: {this.state.active ? 'Active':'Retired'}</StatDescription>
              <StatButton onClick={this.handleStat('active', this.state.active, 'minus').bind(this)}>-</StatButton>
              <StatButton onClick={this.handleStat('active', this.state.active, 'plus').bind(this)}>+</StatButton>
              </Stat>
            <Stat>
              <StatDescription>RS: {this.state.remainingStats}</StatDescription>
              </Stat>
          </Stats>
          <div>
            {this.state.active && (
              <React.Fragment>
                <button onClick={this.props.retireRobot(this.state)}>Retire</button>
                <button onClick={this.props.launchBattle(this.state)}>Battle</button>
              </React.Fragment>
            )}
          </div>
        </RobotBack>
      </RobotCard>
    )}
}

export default Robot;