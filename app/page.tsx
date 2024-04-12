import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col lg:flex-row items-center bg-[#1E1919] dark:bg-slate-800">
        <div className="p-10 flex flex-col bg-[#2B2929] dark:bg-slate-800 text-white space-y-5">
          <h1 className="text-5xl font-bold">
            Welcome to Caribou. <br /><br />
            Storing everything for your personal and professional needs all at your fingertips.
          </h1>

          <p className="text-lg">
            Sign up for free and start storing your files today & securely
            access them from anywhere.
          </p>

          {/* Corrected Link component */}
          <Link href="/dashboard" className="flex cursor-pointer bg-blue-500 p-5 w-fit">
            Try it for FREE!
            <ArrowRight className="ml-10"/>
          </Link>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />

      {/* <p className="text-center font-bold text-xl pt-5">Disclaimer</p> */}
      <p className="text-center font-light p-2">Made with ❤️ by AHAD.</p>
      <p className="text-center font-light p-2">This project is for educational purposes only. The project is open-source and free to use 🙌 .</p>
    </main>
  );
}
