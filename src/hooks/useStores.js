import { useContext } from 'react'
import { stores } from '@/store/storesManager'

export const useStores = () => useContext(stores)