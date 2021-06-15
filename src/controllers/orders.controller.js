import db from '../database/models';
import { findAllOrders, findOneOrder } from "../services/orders.service";

export const allOrders = async (req, res, next) => {
  try {
    const orders = await findAllOrders();
    return res.status(200).json({ data: orders });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const oneOrder = async (req, res, next) => {
  try {
    const { orderId } = req.params;
    const order = await findOneOrder({ where: { id: orderId } });
    return res.status(200).json({ data: order });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const createOrder = async (req, res, next) => {
  try {
    const { userId, order, deliveryDetails, deliveryMethod, payment } = req.body;
    const orderInstance = await db.orders.build({
      userId,
      order,
      deliveryDetails,
      deliveryMethod,
      payment,
    });
    orderInstance.save()
      .then(order => res.status(201).json({ data: order, message: "Order successfully created!" }))
      .catch(error => res.status(500).json({ error: error.message }));
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
