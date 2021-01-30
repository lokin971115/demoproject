import React,{Component} from 'react'

class Navbar extends Component{
    constructor(props) {
        super(props);
    }

    navbar={
        marginBottom: 25,
        color: 'white'
    }

    render(){
        return (
            <nav className="navbar navbar navbar-dark bg-dark" style={this.navbar}>

                <a className="navbar-brand" href="#">Demo Shopping Project</a>

                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="https://lokin971115.github.io/Profile_Page/">Lok In's Profile</a>
                    </li>
                </ul>
            </nav>
		)
    }
}

export default Navbar;