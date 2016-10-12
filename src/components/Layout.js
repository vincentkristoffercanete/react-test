import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default class Layout extends React.Component{
  constructor(){
    super();
    this.state = {title: "Vince"};
  }

  changeTitle(newTitle){
      this.setState({title: newTitle});
  }

  render(){
    return(
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <Footer />
      </div>
    );
  }
}
