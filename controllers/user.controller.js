import cart from "../models/cart.js"
import wishList from "../models/wishlist.js";

export const getById = async (req, res, next) => {
    try {
        const userId = await cart.find({
            userId: { $regex: '^' + req.params.key }
        });
        res.json(userId)
        // if(!userId)
        // return next(404,"No userId found")
    } catch (error) {
        return next(500, "internal server error")
    }
}

export const wishListById = async (req, res, next) => {
    try {
        const userId = await wishList.find({
            userId: { $regex: '^' + req.params.key }
        });
        res.json(userId)
        // if(!userId)
        // return next(404,"No userId found")
    } catch (error) {
        return next(500, "internal server error")
    }
}

export const wishlistByuserIdandproductId = async (req, res, next) => {
    try {
        const product = await wishList.find({
            $and: [
                { productId: { $regex: '^' + req.params.id } },
                { userId: { $regex: '^' + req.params.key } }
            ]
        })
        res.json(product)
    } catch (error) {
        return next(500, "internal server error");
    }
}

export const deleteById = async (req, res, next) => {
    try {
        const roleId = req.params.key;
        const role = await cart.findById({ _id: roleId })
        if (role) {
            await cart.findByIdAndDelete(roleId);
            return res.json("id deleted");
        } else {
            return res.status(404).json("role not found!")
        }
    } catch (error) {
        return res.status(500).json("internal server error!")
    }
}

export const wishlistDeleteproduct = async (req, res, next) => {
    try {
        const role = await wishList.deleteOne({
            $and: [
                { productId: { $regex: '^' + req.params.id } },
                { userId: { $regex: '^' + req.params.key } }
            ]
        })
        res.json("product deleted from wishlist")
    } catch (error) {
        return res.status(500).json("internal server error")
    }
}



export const incrementProduct = async (req, res, next) => {
    try {
        const role = await cart.findById({ _id: req.params.id });
        if (!role) {
            return res.status(404).json("Product not found")
        }

        {
            role.quantity++;
            await role.save();
            res.json(role);
        }
    } catch (error) {
        return res.status(500).json('Internal server error!');
    }

}

export const decrementProduct = async (req, res, next) => {
    try {
        const role = await cart.findById({ _id: req.params.id });
        if (!role) {
            return res.status(404).json("Product not found")
        }
        if (role.quantity > 1) {
            role.quantity--;
            await role.save();
            res.json(role);
        }
        else {

        }
    } catch (error) {
        return res.status(500).json('Internal server error!');
    }
}

export const deleteCartProducts=async(req,res,next)=>{
    try {
        const userId=req.params.key
        const user=await cart.find({userId:userId});
        if (user) {
            await cart.deleteMany({userId})
            return res.json("product deleted");
        } else {
            return res.status(404).json("role not found!")
        }   
      } catch (error) {
        return res.status(500).json("internal server error")
    }
}