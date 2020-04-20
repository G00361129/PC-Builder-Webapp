import React from 'react';
import Forums from "./forums";
import '../App.css';
import axios from "axios";


class Contact extends React.Component{

    state = {
        forums: []
    }

    componentDidMount() {
        axios.get('http://localhost:4000/api/forums')
        .then((response)=>{
            this.setState({forums: response.data.forums})
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    render(){
        return(
          <div class="bodyFormat">
            <h1>Help</h1>
            <Forums theForums={this.state.forums} ReloadDataMethod={this.ReloadDataMethod}></Forums>
          </div>
        )
      }



}

export default Contact;