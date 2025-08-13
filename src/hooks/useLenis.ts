import { LenisContext } from "@/context/LenisContext"
import { useContext } from "react"




export const useLenis = () => {
  return useContext(LenisContext)
}