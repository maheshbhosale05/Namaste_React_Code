import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const totalNumeberOfItem = (cartItems) => {
  let totalQuantity = 0;
  let totalPrice = 0;
  cartItems.forEach(({ detail, quantity }) => {
    totalPrice = totalPrice + (detail.price / 100) * quantity;
    totalQuantity = totalQuantity + quantity;
  });
  return { totalQuantity, totalPrice };
};

const Cart = () => {
  const [showCartDetails, setShowCartDetails] = useState(false);
  const cartItems = useSelector((store) => store.cart.items);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    const { totalPrice, totalQuantity } = totalNumeberOfItem(cartItems);
    setTotalPrice(totalPrice);
    setTotalQuantity(totalQuantity);
  }, [cartItems]);

  const btnRef = useRef();

  useEffect(() => {
    const closeDropdown = (e) => {
      if (!btnRef.current.contains(e.target)) {
        setShowCartDetails(false);
      }
    };
    document.body.addEventListener("click", closeDropdown);
    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);

  return (
    <div class="relative" data-twe-dropdown-ref>
      <button
        ref={btnRef}
        className="border-2 rounded-lg px-2 py-1 swiggy-button-hover disabled:border-slate-200 disabled:text-slate-200"
        onClick={() => setShowCartDetails((prevState) => !prevState)}
        disabled={totalQuantity === 0}
      >
        Cart ({totalQuantity})
      </button>
      {showCartDetails && (
        <div
          id="dropdown"
          class="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-72 dark:bg-gray-700 right-1 top-10"
        >
          <ul
            class="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            {cartItems.map(({ detail, quantity }) => (
              <li>
                <div className="flex justify-between p-4 items-center">
                  <div>
                    <div className="text-xs">
                      {detail.isVeg === 1 ? "🟢" : "🔴"}
                    </div>
                    <div className="text-sm font-bold">{detail.name}</div>
                  </div>
                  <div className="text-sm bold">
                    {detail.price / 100} × {quantity}
                  </div>
                </div>
                <hr className="mx-4" />
              </li>
            ))}
            <li>
              <div className="flex justify-between p-4 items-center">
                <div>
                  <div className="text-sm font-bold">Total: </div>
                </div>
                <div className="text-sm font-bold">{totalPrice}</div>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Cart;
