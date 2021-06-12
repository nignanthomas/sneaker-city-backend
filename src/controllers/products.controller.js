import { findAllProducts } from "../services/products.service";

export const allProducts = async (req, res, next) => {
  try {
    const products = await findAllProducts({
      include: [
        { association: 'category' },
        { association: 'sizes' },
      ]
    });
    return res.status(200).json({ data: products });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
