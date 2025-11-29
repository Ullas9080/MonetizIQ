import { atomWithStorage } from "jotai/utils";

export const userDeatils=atomWithStorage("userDeatils",{
    user_id:"",
    name:"",
    title:"",
    logo:"",
    gmailProfile:""
})