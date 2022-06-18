import React from 'react'
import UserStore from '@/store/UserStore'


export const stores = React.createContext({
    userStore: new UserStore()
})