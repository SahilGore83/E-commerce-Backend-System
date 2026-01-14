const Cart = require('../model/Cart')

const Fetch_cart = async (req, res) => {
    const u_name = req.body.u_name
    if (!u_name) {
        res.status(400).send(`User name is required`)
    }
    try {
        const carts = await Cart.find({ u_name })

        if (carts.length == 0) {
            console.log(`No items found ${carts}`);
            res.json([])
        }
        else {
            console.log(`Items found`);
            res.json(carts)

        }
    }
    catch (error) {
        res.status(400).send(error)
        console.log(`error ocurred:- ${error}`);

    }
}

const insert_cart = async (req, res) => {
    const cart_items = new Cart({
        p_id: req.body.p_id,
        p_img: req.body.p_img,
        p_cost: req.body.p_cost,
        u_name: req.body.u_name,
    })
    try {
        const saveCart = await cart_items.save()
        console.log("User Inserted ");
        res.status(200).send(saveCart)
    }
    catch (err) {
        console.log(`insert error :- ${err}`);
        res.json({ "message": err })
    }
}

const update_cart = async (req,res)=>{
    let p_id = req.body.p_id;
    let u_name = req.body.u_name;

    const cart ={
        p_img:req.body.p_img,
        p_cost:req.body.p_cost,
        uname,
    }
    try{
        const updateCart = await Cart.updateOne({p_id,uname}, cart)

        if(updateCart.modifiedCount != 0 || updateCart.matchedCount != 0){
            console.log("Cart Updated")
            res.json({ 'update': 'Success' })
        }
        else{
            console.log("Cart Not updated");
            res.json({ 'update': 'Record not found' })
        }

    }
    catch (err) {
        console.log(`update error :- ${err}`);
        res.json({ "message": err })
    }
}

const delete_cart = async (req,res)=>{
    let p_id = req.body.p_id;
    let u_name = req.body.u_name;
    try {
            const cartDelete = await Cart.deleteOne({ p_id,u_name })
            if (cartDelete.deletedCount != 0) {
                console.log("Cart Deleted");
                res.json({ "message": "deleted" })
            }
            else {
                console.log("record not found");
                res.send({ "message": "record not found" })
    
            }
        }
        catch (error) {
            res.status(400).send(error)
        }
}

module.exports = {
    Fetch_cart,
    insert_cart,
    update_cart,
    delete_cart
}