let { productData } = require("./data.js");
const mongoose = require("mongoose");
const Product=require("./product.js")
const Post=require("./posts.js")
const main = async () => {
    await mongoose.connect(process.env.ATLASURL);
  }
main().then(() => {
    console.log("Connected....")
}).catch((err) => {
    console.log(err);
})


const initialize = async () => {
    await Product.deleteMany({});
    const data=await Product.insertMany(productData);
//    initdata= initdata.map((obj) => ({
//         ...obj,
//        owner: "65e8b3fffdc903d86e01648c"
//     }))
//     await SampleListing.insertMany(initdata);
    // const data = Product.find({});
//     const data=await Post.find({tag:"668ec1d3152270bae825a11d"}).populate('owner');
console.log(data);
}

initialize().catch((err) => {
    console.log(err);
})