import "./Header.css";
const Header = () =>{
    return(
        <div className="Head">
            <div className="GetHome">
                <li className="log"><a href="/"> </a></li>
            </div>
            <div className="nav">
                <li><a href="/">Home</a></li>
                <li><a href="/story">Story</a></li>
                <li><a href="/visit">Visit</a></li>
            </div>
            <div className="soc">
                <li className="insta"><a href="https://www.instagram.com/"></a></li>
                <li className="face"><a href="https://www.facebook.com/"></a></li>
            </div>
        </div>

    );
}

export default Header;