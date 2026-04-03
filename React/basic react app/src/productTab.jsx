
import Title from "./Title.jsx";
function productTab(){
let prize=1000;
    let featues=["durable","long-lasting"]
    return(
        <div>
            <Title  title="Laptop" price="60000" company="BC" Prize={prize} Features={featues} />
           
        </div>
    )
}
export default productTab;