import Link from "next/link";
import Image from "next/image";
import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs";
import { ThemeToggler } from "./ThemeToggler";
import icon from "./icon.png";

function Header() {
  return (
  <header className="flex items-center justify-between" style={{padding: '1vh'}}>
    <Link href="/" className="flex items-center  " >
      <div >
      <Image 
      src={icon}
      alt="logo"
      width={40}
      height={40}
      style={{marginLeft: '2vh'}}
      />
      </div>
      <h1 className="font-bold text-xl">CARIBOU</h1>
    </Link>

    <div className="px-5 flex space-x-3 items-center" style={{ marginRight: '2vh'}}>
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