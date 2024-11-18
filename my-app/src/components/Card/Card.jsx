import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";
import PropTypes from "prop-types";
import formatToIDRCurrency from "../../utils/formatToIDRCurrency";
import { Link } from "react-router-dom";

export default function Card({ product }) {
  return (
    <Link
      to={`/products/${product.slug}` ?? ""}
      className="flex flex-col max-w-[370px] flex-wrap bg-white rounded-lg shadow-md 
        hover:shadow-lg transition-all duration-300 
        hover:ring-2 hover:ring-pink-300 
        active:ring-2 active:ring-pink-500"
    >
      <div className="flex flex-col max-w-[370px] flex-wrap p-6 bg-white rounded-lg">
        <img src={product.imageUrl ?? ""} alt={product.name ?? "No name"} className="block max-h-[300px] mb-4 object-cover rounded-md" />
        <div className="flex flex-col gap-3">
          <h4 className="font-medium text-[20px] text-warmGray-800">{product.name ?? "No Name"}</h4>
          <span className="block font-medium text-[14px] text-warmGray-600">{product.category ?? "Uncatagorized"}</span>
          <span className="block font-medium text-[20px] text-pink-600">{formatToIDRCurrency(product.price) ?? "Not for sale"}</span>
          <div>
            {product.stock <= 0 ? (
              <p className="text-xl font-semibold text-center text-pink-800 my-2">Out of Stock</p>
            ) : product.stock <= 25 && product.stock !== 0 ? (
              <>
                <p className="text-xl font-semibold text-center text-pink-500 my-2">Almost Sold Out</p>
                <Button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 p-4 w-full
                    bg-pink-500 text-center text-white rounded-md
                    hover:bg-pink-600 active:bg-pink-700
                    transition-colors duration-200"
                >
                  <FontAwesomeIcon icon={faCartShopping} className="mb-0" />
                  <span>Add to cart</span>
                </Button>
              </>
            ) : (
              <Button
                type="button"
                className="inline-flex items-center justify-center gap-2 p-4 w-full
                  bg-pink-500 text-center text-white rounded-md
                  hover:bg-pink-600 active:bg-pink-700
                  transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faCartShopping} className="mb-0" />
                <span>Add to cart</span>
              </Button>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

Card.propTypes = {
  product: PropTypes.object,
};
