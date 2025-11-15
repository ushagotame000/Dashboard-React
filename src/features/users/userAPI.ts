 import type { User } from '../../types/user'
import axios from 'axios'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

 export const fetchUsersFromAPI = async (): Promise<User[]> => {
 const res = await axios.get(`${BASE_URL}/users`)
 return res.data as User[]
 }