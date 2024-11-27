'use client'

import Link from "next/link";
import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";

export default function Home() {
  
  const [item, setItem] = useState(0)
  const handleSubtrair = () => {
    if (item > 0) {
      setItem(item - 1)
    }
  }

  return (
    <div>
      <div className="flex justify-around items-center bg-blue-700 h-24">
        <h1 className="bg-black text-white px-10 py-2 rounded-md cursor-pointer">Hello World!</h1>

        <div>
          <Link href="/login">
            <button className="bg-green-600 p-2 px-4 rounded-full -mr-3 cursor-pointer 
            hover:scale-125 duration-300"> Login </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
