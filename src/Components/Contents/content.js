import Logo1 from "../../Assets/icon-cart.svg";
import Logo3 from "../../Assets/image-product-1.jpg";
import Logo4 from "../../Assets/logo4.jpg";
import Logo5 from "../../Assets/logo5.jpg";
import Logo6 from "../../Assets/logo6.jpg";
import Logo7 from "../../Assets/logo7.jpg";
import classes from  "./content.module.css";
const Content = () => {
    return ( 
        <div className={classes.content}>
        <div className={classes.flex}>
            <div>
                <img src={Logo3} className={classes.shoe} alt="shoe"/>
    
            </div>
            <div className={classes.sample}>
            <img src={Logo4} className={classes.myshoe} alt="shoe"/>
            <img src={Logo5} className={classes.myshoe} alt="shoe"/>
            <img src={Logo6} className={classes.myshoe} alt="shoe"/>
            <img src={Logo7} className={classes.myshoe} alt="shoe"/> 
            </div>

        </div>
        <div className={classes.flex}>
            <h3>SNEAKER COMPANY</h3>
            <h1>Fall Limited Edition Sneakers</h1>
            <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they will withstand everything the weather can offer.</p>
            <div className={classes.money}>
               <div className={classes.dollar}>
                <h1>$125.00</h1>
            
               </div>
               <div className={classes.percent}>
                   <h3>50%</h3>
               </div>
               
            </div>
            <h5 className={classes.prev}>$250.00</h5>
            <div className={classes.btn}>
                <button className={classes.add}>
                    <h3>-</h3>
                    <h4 className={classes.zero}>0</h4>
                    <h3>+</h3>

                </button>
                <button  className={classes.btnCart}>
                    <img src={Logo1} className={classes.carts}  alt="myumg" />          
                    <h5>Add to cart</h5>
                </button>
            </div>

        </div>

    </div>
     );
}
 
export default Content;