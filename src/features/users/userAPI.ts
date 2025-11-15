 import type { User } from '../../types/user'
import axios from 'axios'
 export const fetchUsersFromAPI = async (): Promise<User[]> => {
 const res = await axios.get('https://jsonplaceholder.typicode.com/users')
 return res.data as User[]
 }