import React,{Component} from 'react';
import axios from 'axios';
import './table.css';


class Home extends Component{
    constructor(){
        super();
        this.state = {userData:[]}
    }

    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/users`)
       .then(res => {
        console.log("response data "+JSON.stringify(res.data));
        this.setState({userData : res.data});
        console.log("after setstate "+JSON.stringify(this.state.userData));
       })

    }

    render() {
        return (
           <div>
              <h1 id='title'>User Data</h1>
              <table id='users'>
                 <tbody>
                    <tr>{this.renderUserDataHeader()}</tr> 
                    {this.renderUserData()}
                 </tbody>
              </table>
           </div>
        )
     }


     renderUserDataHeader() {
        if(this.state.userData[0]){
        let header = Object.keys(this.state.userData[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
       }
     }   

     renderUserData() {
        return this.state.userData.map((user, idx) => {
           const { id, name, username, email,address, phone, website ,company} = user
           return (
              <tr key={id}>
                 <td>{id}</td>
                 <td>{name}</td>
                 <td>{username}</td>
                 <td>{email}</td>
                 <td>{address.city}</td>
                 <td>{phone}</td>
                 <td>{website}</td>
                 <td>{company.name}</td>
              </tr>
           )
        })
     }
}

export default Home;
