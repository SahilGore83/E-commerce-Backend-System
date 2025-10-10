//import Schema
const Product = require('../model/Product')

const product_all = async (req, res) => {
    try {
        const product = await Product.find()
        console.log(`Data sent`);
        res.json(product)
    } catch (error) {
        console.log(`fetch error :- ${error}`);
        res.json({ 'message': error })
    }
}
const insert_product = async (req, res) => {
    const product = new Product({
        p_id: req.body.p_id,
        p_name: req.body.p_name,
        p_cost: req.body.p_cost,
    })
    try {
        const saveProduct = await product.save()
        console.log("Product Inserted ");
        res.status(200).send(saveProduct)
    } catch (error) {
        console.log("Insert Error");
        res.json({ "message": error })

    }
}

const update_product = async (req, res) => {
    let p_id = req.body.p_id
    const product = {
        p_name: req.body.p_name,
        p_cost: req.body.p_cost
    }

    try {
        const updateProduct = await Product.updateOne({ p_id }, product)
        if (updateProduct.modifiedCount != 0 || updateProduct.matchedCount !=0) {
            console.log("Product Updated")
            res.json({ 'update': 'Success' })
        }
        else {
            console.log("Product Not updated");
            res.json({ 'update': 'Record not found' })
        }
    } catch (error) {
        res.status(400).send(error)
    }
}
const delete_product = async (req,res) => {
    let p_id = req.body.p_id
    try{
        const deleteProduct = await Product.deleteOne({p_id})
        if(deleteProduct.deletedCount != 0 ){
            console.log("Product Deleted");
            res.json({"message":"deleted"})
        }
        else{
            console.log("record not found");
            res.send({"message":"record not found"})
            
        }
    }
    catch(error){
        console.log("Delete Error",error);
        res.send({"message":error})
    }
}

module.exports = {
    product_all,
    insert_product,
    update_product,
    delete_product
}
