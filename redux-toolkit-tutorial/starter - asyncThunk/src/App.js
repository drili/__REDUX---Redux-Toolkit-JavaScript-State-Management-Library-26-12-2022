import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import { useEffect } from "react";
import Modal from "./components/Modal";

function App() {
    const { cartItems, isLoading } = useSelector((store) => store.cart)
    const { isOpen } = useSelector((store) => store.modal)
    const dispatch = useDispatch()

    // console.log({isOpen});

    useEffect(() => {
        dispatch(calculateTotals())
    }, [cartItems])

    useEffect(() => {
        dispatch(getCartItems())
    }, [])

    if (isLoading) {
        return (
            <div className="loading">
                <h1>Loading...</h1>
            </div>
        )
    }

    return (
        <main>
            {isOpen && (
                <Modal></Modal>
            )}
            
            <Navbar></Navbar>
            <CartContainer></CartContainer>
        </main>
    )
}
export default App