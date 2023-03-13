
const Navbar = (props)=>{
    return <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <h4 class="navbar-brand">Time: {props.time}</h4>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                <h4 class="nav-link">WPM: {props.WPM}<span class="sr-only">(current)</span></h4>
                </li>
                <li class="nav-item">
                <h4 class="nav-link">Accuracy: {props.Accuracy}</h4>
                </li>
            </ul>
            </div>
        </nav>
    </div>
}

export default Navbar;