import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col bg-gray-100 dark:bg-gray-900" >
      <header className="flex justify-center items-center" style={{paddingTop: '25vh', paddingBottom: '20vh'}}>
        <div className="text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold text-white leading-tight">
            Welcome to Caribou
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 dark:text-white leading-tight mt-4">
            Seamlessly store your files
          </p>
          <p className="mt-8 text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300">
            From personal memories to professional documents, access your files anytime, anywhere with Caribou.
          </p>
          <Link href="/dashboard">
            <div className="mt-10 inline-flex bg-blue-500 hover:bg-blue-700 text-white font-semibold py-4 px-8 lg:px-10 rounded-full flex items-center space-x-2 transition duration-300 ease-in-out cursor-pointer">
              <span className="text-lg">Try it for FREE!</span>
              <ArrowRight className="text-xl" />
            </div>
          </Link>
        </div>
      </header>
      <footer className="bg-gray-900 text-gray-300 text-center py-8">
        <div>
          <p className="text-sm">
            Made with &hearts; by AHAD.
          </p>
          <p className="text-sm">
            This project is for educational purposes only. It is open-source and free to use 🙌.
          </p>
        </div>
      </footer>
    </div>
  );
}