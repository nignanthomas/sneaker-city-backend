import { findAllSizes } from "../services/sizes.service";

export const allSizes = async (req, res, next) => {
  try {
    const sizes = await findAllSizes();
    return res.status(200).json({ data: sizes });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
