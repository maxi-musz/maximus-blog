import { useState } from "react"
import Image from "./Image";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
    const[open, setOpen] = useState(false)

    return (
        <div className="w-full h-16 md:h-20 flex items-center justify-between">
            {/* LOGO */}
            <Link to="/" className=" flex items-center gap-4 text-2xl font-bold">
                <Image src="logo.png" alt="maxi-logo" w={32} h={32}/>
                <span>Maxiblog</span>
            </Link>

            {/* MOBILE MENU */}
            <div className="md:hidden">
                <div className="cursor-pointer text-5xl"
                onClick={() => setOpen((prev) => !prev)}
                >
                {open ? "X" : "≡"}
                </div>

                {/* MOBILE LINK LIST */}
                <div className={`w-full h-screen flex flex-col gap-8  items-center justify-center absolute top-16 bg-gray-800 transition-all ease-in-out ${
                        open 
                        ? "right-0"
                        : "-right-[100%]"
                    }`}
                >
                    <Link to="/">Home</Link>
                    <Link to="/">Trending</Link>
                    <Link to="/">Most Popular</Link>
                    <Link to="/">About</Link>
                    <Link to="/">Contact</Link>
                    <Link to="/">
                        <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">Login 👋</button>
                    </Link>
                </div>
            </div>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-8 font-medium">
                <Link to="/">Home</Link>
                <Link to="/">Trending</Link>
                <Link to="/">Most Popular</Link>
                <Link to="/">About</Link>
                <Link to="/">Contact</Link>
                
                <SignedOut>
                    <Link to="/login">
                        <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
                            Login 👋
                        </button>
                    </Link>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </div>
    )
}

export default Navbar