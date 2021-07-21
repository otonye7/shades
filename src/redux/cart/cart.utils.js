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

export const removeItemFromCart = (cartItems, cartItemsToRemove) => {
    const existingCartItems = cartItems.find((cartItem) => cartItem._id === cartItemsToRemove._id)

    if (existingCartItems === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemsToRemove.id)
    }

    return cartItems.map((cartItem) => cartItem._id === cartItemsToRemove._id ?
        { ...cartItem, quantity: cartItem.quantity - 1 }
        :
        cartItem
    )
}
