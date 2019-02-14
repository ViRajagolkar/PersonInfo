import React, {Component} from 'react';
import HeaderComponent from './HeaderComponent.jsx';
import FooterComponent from './FooterComponent.jsx';
import UserService from './../services/UserService';

class UserlistComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            users:[]
        }

        this.serv = new UserService();
        this.token = sessionStorage.getItem("token");
        this.roleName = sessionStorage.getItem("roleName");

        if(this.token==="" || this.token===null || this.roleName==="" || this.roleName===null){
            
            var h = this.props.history;
            h.push('/login');
        }
    }

    componentDidMount(){
        let prds = this.serv.getUsers(this.token)
                            .then((data) => data.json())
                            .then((value)=>{
                               //console.log(JSON.stringify(value.data));
                               this.setState({users:value.data})
                            })
                            .catch(error =>{
                                console.log(`Error Status ${error.status}`);
                            });
    }

    render() { 
        return ( 
            <div className="container">
                <HeaderComponent/>

                <div className="main-content">
                    <div className="row roletable">
                        <div className="col-md-2">
                        </div>

                        <div className="col-md-8">
                            <table className="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>User Id</th>
                                        <th>UserName</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.users.map((u,i)=>(
                                            
                                           <TableRow key={i}  row={u} users={this.state.users}></TableRow> 
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <FooterComponent/>
            </div>
         );
    }
}

class TableRow extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <tr>
                {
                    Object.keys(this.props.users[0]).map((u,i)=>(
                        
                        <td>{this.props.row[u]}</td>
                    ))
                }
            </tr>
        )
    }
}
 
export default UserlistComponent;