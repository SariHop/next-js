import axios from "axios"

export const getUsersfromNEXT = async (userName: string, email: string, password: string) => {

    return (await axios.post(`/api/mongoAPI`, { "userName": userName, "email": email, "password": password })).data
}