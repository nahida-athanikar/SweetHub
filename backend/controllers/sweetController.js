import sweetModel from "../models/sweetModel.js";

// GET /api/sweets
// View all available sweets
const listSweets = async (req, res) => {
  try {
    const sweets = await sweetModel.find({});
    res.json({ success: true, data: sweets });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// POST /api/sweets
// Add a new sweet (Admin only)
const addSweet = async (req, res) => {
  try {
    const { name, category, price, quantity } = req.body;

    if (!name || !category || !price || quantity == null) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const sweet = new sweetModel({
      name,
      category,
      price,
      quantity,
    });

    await sweet.save();
    res.status(201).json({ success: true, message: "Sweet added successfully" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// DELETE /api/sweets/:id
// Delete a sweet (Admin only)
const deleteSweet = async (req, res) => {
  try {
    const sweet = await sweetModel.findById(req.params.id);

    if (!sweet) {
      return res
        .status(404)
        .json({ success: false, message: "Sweet not found" });
    }

    await sweetModel.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Sweet deleted successfully" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// POST /api/sweets/:id/purchase
// Purchase a sweet (decrease quantity)
const purchaseSweet = async (req, res) => {
  try {
    const sweet = await sweetModel.findById(req.params.id);

    if (!sweet) {
      return res
        .status(404)
        .json({ success: false, message: "Sweet not found" });
    }

    if (sweet.quantity <= 0) {
      return res
        .status(400)
        .json({ success: false, message: "Sweet out of stock" });
    }

    sweet.quantity -= 1;
    await sweet.save();

    res.json({
      success: true,
      message: "Sweet purchased successfully",
      remainingQuantity: sweet.quantity,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// POST /api/sweets/:id/restock
// Restock a sweet (Admin only)
const restockSweet = async (req, res) => {
  try {
    const { quantity } = req.body;

    if (!quantity || quantity <= 0) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid quantity" });
    }

    const sweet = await sweetModel.findById(req.params.id);

    if (!sweet) {
      return res
        .status(404)
        .json({ success: false, message: "Sweet not found" });
    }

    sweet.quantity += quantity;
    await sweet.save();

    res.json({
      success: true,
      message: "Sweet restocked successfully",
      updatedQuantity: sweet.quantity,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export {
  listSweets,
  addSweet,
  deleteSweet,
  purchaseSweet,
  restockSweet,
};
