const { Schema, models, model, default: mongoose } = require("mongoose");


const ExtraPriceSchema = new Schema({
  name: String,
  price: Number,
});

const MenuItemSchema = new Schema(
  {
    image: { type: String },
    name: { type: String },
    description: { type: String },

    category: { type: mongoose.Types.ObjectId },

    basePrice: { type: Number },
    sizes: { type: [ExtraPriceSchema] },
    extraIngredientPrices: { type: [ExtraPriceSchema] },
  },
  { timestamps: true }
);

const MenuItem = models?.MenuItem || model("MenuItem", MenuItemSchema);
export default MenuItem;
