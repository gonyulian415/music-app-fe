import React from 'react'
import UserStore from './UserStore'


export const stores = React.createContext({
    userStore: new UserStore()
})