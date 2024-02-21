'use client'

import { usePathname } from "next/navigation"


export default function useIsCloset(){
    const path = usePathname()
    console.log(path)

    if (path.includes('closet')){
        return("")
    }
    return path.includes('closet')
}
