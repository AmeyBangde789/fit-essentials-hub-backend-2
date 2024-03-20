import express from "express";
import { addToCart, addTowishlist } from "../controllers/cart.controllers.js";
import { decrementProduct, deleteById, getById, wishlistByuserIdandproductId, incrementProduct, wishListById, wishlistDeleteproduct, deleteCartProducts } from "../controllers/user.controller.js";

const router = express.Router();


router.post("/addtocart",addToCart);
router.post("/addtowishlist",addTowishlist);

router.get("/userid/:key",getById);

router.get("/userid/:id/:key",wishlistByuserIdandproductId);


router.get("/wishlistbyuserid/:key",wishListById);

router.delete("/deleteid/:key",deleteById);

router.delete("/wishlistProductdelete/:id/:key",wishlistDeleteproduct)

router.put("/increment/:id",incrementProduct)

router.put("/decrement/:id",decrementProduct)

router.delete("/deleteallcart/:key",deleteCartProducts)


export default router;
