const Order = require("../models/Order");

exports.placeOrder = async (req, res) => {
    const { userId, pizzaId, amount } = req.body;

    const order = await Order.create({
        user: userId,
        pizza: pizzaId,
        amount,
        status: "Order Received"
    });

    res.json({ message: "Order placed successfully!", order });
};

exports.getOrders = async (req, res) => {
    const orders = await Order.find().populate("user pizza");
    res.json(orders);
};

exports.updateOrderStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    const order = await Order.findByIdAndUpdate(id, { status }, { new: true });
    res.json(order);
};
