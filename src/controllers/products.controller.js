import { findAllProducts } from "../services/products.service";

export const allProducts = async (req, res, next) => {
  try {
    const products = await findAllProducts();
    return res.status(200).json({ data: products });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const latestProducts = async (req, res, next) => {
  try {
    const products = await findAllProducts({
      limit: 10,
      order: [['releaseDate', 'DESC']]
    });
    return res.status(200).json({ data: products });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
