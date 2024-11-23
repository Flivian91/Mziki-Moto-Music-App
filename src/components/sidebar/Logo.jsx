import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png";
import React from "react";

function Logo() {
  return (
    <div>
      <Link href={"/"} className="flex gap-3 items-center">
        <Image src={logo} alt="Mziki-Moto-Logo" />
        <span className="text-white font-medium text-lg">MzikiMoto</span>
      </Link>
    </div>
  );
}

export default Logo;
