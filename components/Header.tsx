import Link from "next/link";
import Image from "next/image";
import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs";
import { ThemeToggler } from "./ThemeToggler";

function Header() {
  return (
  <header className="flex items-center justify-between">
    <Link href="/" className="flex items-center space-x-2 " >
      <div >
      <Image 
      src="https://imgs.search.brave.com/eBax4mkNb1HJW-qQYme9tXqKTYRCgxrmX2z6EGXPkOQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzQ1L2M1/LzYzLzQ1YzU2M2Rm/MjM0OWE0MzVlOWJm/ZDlhNDk3ZDIzY2Y3/LmpwZw"
      alt="logo"
      width={55}
      height={55}
      />
      </div>
      <h1 className="font-bold text-xl">CARIBOU</h1>
    </Link>

    <div className="px-5 flex space-x-2 items-center">
        <ThemeToggler />
        
        <UserButton afterSignOutUrl="/" />

        <SignedOut>
          <SignInButton afterSignInUrl="/dashboard" mode="modal" />
        </SignedOut>
    </div>

  </header>
  );
}

export default Header;