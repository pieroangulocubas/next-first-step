import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import { ActiveLink } from "../active-link/ActiveLink"


const navItems=[
    {path:"/about",text:"About"},
    {path:"/pricing",text:"Pricing"},
    {path:"/contact",text:"Contact"}
]

export const Navbar=()=>{
    return (
        <nav className="flex bg-blue-800 bg-opacity-30 p-4 rounded items-center">
            <Link href={"/"}>
                <HomeIcon size={"medium"}/>
            </Link>
            <div className="flex-1"></div>
            {
                navItems.map(navItem=><ActiveLink key={navItem.path} {...navItem}/>)
            }
        </nav>
    )
}