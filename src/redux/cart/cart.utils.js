export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItems = cartItems.find((cartItem) => cartItem._id === cartItemToAdd._id)

    if (existingCartItems) {
        return cartItems.map((cartItem) => cartItem._id === cartItemToAdd._id ?
            { ...cartItem, quantity: cartItem.quantity + 1 }
            :
            cartItem
        )
    }
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

