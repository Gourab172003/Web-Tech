
const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/releationDemo");
  console.log("Connection Successful");
  await addUser();
}

main().catch(err => console.log(err));

const userSchema = new mongoose.Schema({
  username: String,
  address: [
    {
        _id: false,
      location: String,
      city: String,
    }
  ]
});

const User = mongoose.model("User", userSchema);

const addUser = async () => {
  let user1 = new User({
    username: "Shylock",
    address: [
      {
        
        location: "Venice",
        city: "Europe",
      }
    ]
  });

  user1.address.push({
    location: "Islampur",
    city: "India"
  });

  let result = await user1.save();
  console.log(result);
};

