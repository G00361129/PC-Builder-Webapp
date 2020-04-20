import React from 'react';
import Card from 'react-bootstrap/Card';

import '../App.css';

class CaseInstance extends React.Component{

  constructor(){
    super();
  }

  render(){
    return(
      <div>
          <Card className="bg-dark m-5" border="primary" style={{ width: '15.000rem', height: "22rem" }}>
            <Card.Img variant="top" height="200" width="200" src={this.props.pcCase.artwork}/>
            <Card.Body>             
              <Card.Title><b>{this.props.pcCase.brand}</b></Card.Title>
              <Card.Subtitle>
                {this.props.pcCase.name} 
                <br></br>
                {this.props.pcCase.price}
                <br></br>
                {this.props.pcCase.size}
              </Card.Subtitle>        
            </Card.Body>
          </Card>
      </div>
    )
  }
}

export default CaseInstance;