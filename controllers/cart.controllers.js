import cart from "../models/cart.js";
import wishList from "../models/wishlist.js";

export const addToCart= async (req, res, next)=> {
    const newProduct = new cart({
        productName:req.body.productName,
        productBrand:req.body.productBrand,
        productCost:req.body.productCost,
        productDiscount:req.body.productDiscount,
        productCategory: req.body.productCategory,
        productType: req.body.productType,
        productImage: req.body.productImage,
        productDescription:req.body. productDescription,
        productWeight: req.body.productWeight,
        quantity:req.body.quantity,
        userId:req.body.userId,
        productId:req.body.productId,
    });
    await newProduct.save();
    return res.status(200).json("Product added Successfully!");
}

export const addTowishlist= async (req, res, next)=> {
    const newProduct = new wishList({
        productName:req.body.productName,
        productBrand:req.body.productBrand,
        productCost:req.body.productCost,
        productDiscount:req.body.productDiscount,
        productCategory: req.body.productCategory,
        productType: req.body.productType,
        productImage: req.body.productImage,
        productDescription:req.body. productDescription,
        productWeight: req.body.productWeight,
        quantity:req.body.quantity,
        userId:req.body.userId,
        productId:req.body.productId,
    });
    await newProduct.save();
    return res.status(200).json("Product added Successfully!");
}
