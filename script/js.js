import { getProduct } from "../store/fetch.js";
import { cardProduct } from "../component/card.js";
import { User } from "../component/card.js";
const render=document.querySelector("#cardRender")
const user1=document.querySelector("#user")
const data=await getProduct("product")
const dataUser=await getProduct("user")
data.map((pro)=>{
    render.innerHTML+=cardProduct(pro)
})
dataUser.map((user)=>{
    user1.innerHTML+=User(user)
})

