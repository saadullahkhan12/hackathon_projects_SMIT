import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="main-container">
            <div>
                <img src='https://logodix.com/logo/816161.jpg' className="logo" alt="Vite logo" />
            </div>
            <div className="menu">
            <Link to="/weddingload">
                <p className="para_menu">Wedding Loans</p>
                </Link>
                <Link to="/homeload">
                <p className="para_menu"> Home Construction Loans</p>
                </Link>
                <Link to="/businessload">
                <p className="para_menu">Business Startup Loans</p>
                </Link>
                <Link to="/educationload">
                <p className="para_menu">Education Loans</p>
                </Link>
                  

                
             
            </div>
            <div>
                <Link to="/calculate">
                    <button className="btn">Loan Calculator</button>
                </Link>
            </div>
        </div>
    );
}

export default Header;