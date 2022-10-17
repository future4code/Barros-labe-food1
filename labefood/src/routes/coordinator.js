export const goToHome = (navigator) =>{
    navigator('/')
}

export const goToLogin = (navigator) =>{
    navigator('/login')
}

export const goToSignUp = (navigator) => {
    navigator('/signup')
}

export const goToAdressRegistration = (navigator) =>{
    navigator('/adress')
}

export const goToFeedPage = (navigator) =>{
    navigator('/feed')
}

export const goBack = (navigator) =>{
    navigator(-1)
}

export const goToRestaurants = (navigator, restaurantsId) =>{
    navigator(`/restaurants/${restaurantsId}`)
}


export const goToCartPage = (navigator) =>{
    navigator('/cart')
}

export const goToProfile = (navigator) =>{
    navigator('/profile')
}

export const goToEditAddress = (navigator) =>{
    navigator('/edit-address')
}

export const goToEditProfile = (navigator)=>{
    navigator('./edit-profile')
}