 function Title ( {title, price, company, Features})
{
  
  return (
  <div>
  <h1> {title} </h1>
  <h2> {price} </h2>
  <p> {company} </p>
  <h4> {Features.map((feature)=>{  <li>{feature}</li>})}</h4>
  </div>
  )

}


export default Title;