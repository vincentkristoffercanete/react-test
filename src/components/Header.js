import React from 'react';
import Title from './Header/Title';

export default class Header extends React.Component{
  handleChange(e){
      const title = e.target.value;
      this.props.changeTitle(title);
  }
  render(){
    return(
      <div className="header">
        <Title title={this.props.title} />
        <input type="text" onChange={this.handleChange.bind(this)} value={this.props.title}/>
      </div>
    );
  }
}
