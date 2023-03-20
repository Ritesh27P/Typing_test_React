
const Navbar = (props)=>{
    return <div className="center">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h4 className="navbar-brand">Time: {props.time}</h4>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                <h4 className="nav-link">WPM: {props.WPM}<span class="sr-only">(current)</span></h4>
                </li>
            </ul>
            </div>
        </nav>
    </div>
}

export default Navbar;