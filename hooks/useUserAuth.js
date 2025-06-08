"use client"

//used for fetching the data

import { UserContext } from "@/context/userContext"
import { API_PATHS } from "@/utils/apiPaths"
import axiosInstance from "@/utils/axiosInstance"
import { useContext } from "react"
import { useEffect } from "react"
import { useRouter } from 'next/navigation';


export const useUserAuth = ()=> {
    const {user,updateUser,clearUser} = useContext(UserContext)
    const router = useRouter()
    
    useEffect(()=>{
        if(user) return ;

         let isMounted = true;

         const fetchUserInfo = async()=>{
            try{
                const response = await axiosInstance.get(API_PATHS.AUTH.GET_USER_INFO)
                if(isMounted && response.data){
                    updateUser(response.data)
                }
            }catch(error){
                console.error("error fetching user details" , error)
                if(isMounted){
                    clearUser()
                    router.push("/login")
                }
            }
         }

         fetchUserInfo();
         return ()=>{
            isMounted = false
         }

    },[user,updateUser, clearUser ,router])
    

}