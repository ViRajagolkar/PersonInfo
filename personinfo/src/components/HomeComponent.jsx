import React, {Component} from 'react';
import HeaderComponent from './HeaderComponent.jsx';
import FooterComponent from './FooterComponent.jsx';

class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }

        this.token = sessionStorage.getItem("token");
        this.roleName = sessionStorage.getItem("roleName");

        if(this.token==="" || this.token===null || this.roleName==="" || this.roleName===null){
            
            var h = this.props.history;
            h.push('/login');
        }
    }
    render() { 
        return ( 
            
            <div className="container">
                <HeaderComponent/>

                <div className="main-content">
                    
                </div>
                <FooterComponent/>
            </div>
         )
    }
}
 
export default HomeComponent;