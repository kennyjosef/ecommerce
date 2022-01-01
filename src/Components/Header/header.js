import classes from "./header.module.css";
import Logo1 from "../../Assets/icon-cart.svg";
import Logo2 from "../../Assets/image-avatar.png";
const Header = () => {
    return ( 
        <nav className={classes.overall}>
            <div className={classes.items}>
                <div>
                    <h2>sneakers</h2>
                </div>
                <div className={classes.link}>
                    <ul>
                     <li><a href="#">Collections</a></li>
                    <li><a href="#">Men</a></li>
                    <li><a href="#">Women</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className={classes.item}>
                <img src={Logo1} className={classes.carts}  alt="myumg" />
                <img src={Logo2} className={classes.myimg}  alt="myumg" />
                
            </div>

            </div>

        </nav>
     );
}
 
export default Header;