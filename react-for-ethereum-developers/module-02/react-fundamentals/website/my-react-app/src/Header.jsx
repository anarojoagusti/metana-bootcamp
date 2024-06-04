
function Header(){

    return (
       //here we can write pure HTML
       <header>
            <h1> My website</h1>
            <nav>
                <ul>
                    <li><a href="#" style={{
                        color:"pink",
                        backgroundColor:'#f1356d',
                        borderradius:'8px'
                    }}>Home</a></li>
                    <li><a href="#" style={{
                        color:"pink",
                        backgroundColor:'#f1356d',
                        borderradius:'8px'
                    }}>About</a></li>
                    <li><a href="#"style={{
                        color:"pink",
                        backgroundColor:'#f1356d',
                        borderradius:'8px'
                    }}>Services</a></li>
                    <li><a href="#" style={{
                        color:"pink",
                        backgroundColor:'#f1356d',
                        borderradius:'8px'
                    }}>Contact</a></li>
                </ul>
            </nav>
            <hr></hr>
       </header> 
    );
}

//To import this function/component elsewhere
export default Header