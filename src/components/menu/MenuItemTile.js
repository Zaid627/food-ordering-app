import Image from "next/image";
import AddToCartButton from "../../components/menu/AddToCartButton";

export default function ({ onAddToCart, ...item }) {
  const { image, description, name, basePrice, sizes, extraIngredientPrices } =
    item;

  const hasSizesOrExtras =
    sizes?.length > 0 || extraIngredientPrices?.length > 0;
  return (
    <div
      className="bg-gray-200 p-4 rounded-lg text-center group
       hover:bg-white hover:shadow-md hover-shadow-black/25 transition-all"
    >
      <div className="text-center">
        <Image
          src={image}
          width={300}
          height={200}
          className="max-h-auto max-h-24 block mx-auto"
          alt="pizza"
        />
      </div>

      <h4
        className="font-semibold text-xl my-3"
        style={{ height: 60, overflowY: "clip" }}
      >
        {name}
      </h4>

      <p className="text-gray-500 text-sm my-2 line-clamp-2">{description}</p>
      <AddToCartButton
        image={image}
        hasSizesOrExtras={hasSizesOrExtras}
        onClick={onAddToCart}
        basePrice={basePrice}
      />
    </div>
  );
}
