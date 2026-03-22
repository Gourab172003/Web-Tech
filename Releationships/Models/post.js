const mongoose = require("mongoose");


main()
.then(()=>{console.log("connection successful")})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/releationDemo");
  console.log("Connection Successful");
  await addUser();
}

main().catch(err => console.log(err));



const userSchema= new mongoose.Schema({
    username:String,
    email:String,
});



const postSchema= new mongoose.Schema({
    content:String,
    linkes:Number,
    user:{
        types:mongoose.Schema.Types.ObjectId,
        ref: userSchema,
    }
});


const User=mongoose.model("User", userSchema);
const Post=mongoose.model("Post", postSchema);

const addData= async()=>{
     
    const user1= new User({
       username:"Rahul Kunmar",
       email: "rahul@gmail.com",
    })
}


const post1= new Post({
    content:"Hello world",
    likes:100,
});
post1.user=user1;

await user1.save();
await post1.save();
