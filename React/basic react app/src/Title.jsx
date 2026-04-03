 function Title ( {title, price, company, Features, Prize})
{ 
  
  return (
  <div>
  <h1> {title} </h1>
  <h2> {price} </h2>
  <p> {company} </p>
  <h4> {Features.map((feature)=>{  <li>{feature}</li>})}</h4>
  {Prize>5000 ? <p>Greater</p> :<p> Not</p> }
  </div>
  )

}


export default Title;