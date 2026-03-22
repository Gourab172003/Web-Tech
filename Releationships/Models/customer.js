const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
  console.log("Connection Successful");
  
}

main().catch(err => console.log(err));


//ORDER SCHEMA
const orderSchema = new mongoose.Schema({
  item: String,
  price: Number,
});



//CUSTOMER SCHEMA
let customerSchema= new mongoose.Schema({
    name:String,
    orders: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Order"
        }
    ]
})


customerSchema.post("findOneAndDelete", async(customer)=>{
    if(customer.orders.length)
    {
        let res= await Order.deleteMany({_id: {$in : customer.orders}})
          console.log(res);
    }
  
})

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);


// functions 
// let addCustomer= async()=>{
//     let newCustomer= new Customer({
//         name: "Kabir Singh",
        
//     });

//     let order1= await Order.findOne({item: "Samosa"});
//     let order2= await Order.findOne({ item: "Gold Flake"});

//     newCustomer.orders.push(order1);
    
//     newCustomer.orders.push(order2);



// await newCustomer.save();
// }
// addCustomer().catch(err => console.log(err));



// let addOrder = async () => {
//     let orders = await Order.insertMany([  // ✅ insertMany for multiple docs
//         { item: "Samosa", price: 7 },
//         { item: "Piza", price: 50 },
//         { item: "Gold Flake", price: 70 }
//     ]);

//     console.log(orders);
// }

// addOrder()
//   .then(() => {
//     console.log("Information saved");
//   })
//   .catch((err) => {
//     console.log(err);
// });

// let findCustomer= async()=>{
//     let result=await Customer.find({}).populate("orders");
//     console.log(result);
// }
// findCustomer()


// let addNew= async()=>{
//     let newCus= new Customer({
//         name: "Gourab Sarkar"
//     });

//     let newOrder= new Order({
//         item: "Biriyani",
//         price: 50,
//     });
//  newCus.orders.push(newOrder);

//     await newCus.save();
//     await newOrder.save();

//     console.log("added new Customer");
// }

// addNew();



let delCus= async()=>{
    let find= await Customer.findByIdAndDelete( "69c0151ba7a5515c4a98f46d");
    console.log(find);
}
delCus();