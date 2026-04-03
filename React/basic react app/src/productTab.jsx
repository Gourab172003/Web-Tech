
import Title from "./Title.jsx";
function productTab(){

    let featues=["durable","long-lasting"]
    return(
        <div>
            <Title  title="Laptop" price="60000" company="BC" Features={featues} />
           
        </div>
    )
}
export default productTab;