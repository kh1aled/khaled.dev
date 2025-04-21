import React from "react";
import Image from "next/image";
import github from "../assets/icons/github.svg";
import linkedin from "../assets/icons/linkedin.svg";
import contact from "../assets/icons/whatsapp.svg";
import facebook from "../assets/icons/facebook.svg";

const Fotter = () => {
  return (
    <section>
      <div className="bg-gray-800 text-white py-2 text-center flex flex-col sm:flex-row items-center justify-between px-4 ">
        <p>© 2023 Your Company. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a
            href="http://wa.me/+201159107545"
            className="text-blue-400 hover:text-blue-600"
          >
            <Image src={contact} alt="Logo" width={25} height={25} />
          </a>
          <a
            href="http://github.com/kh1aled"
            className="text-blue-400 hover:text-blue-600"
          >
            <Image src={github} alt="Logo" width={25} height={25} />
          </a>
          <a
            href="https://www.linkedin.com/in/khaled-hamdy-0595752a1/"
            className="text-blue-400 hover:text-blue-600"
          >
            <Image src={linkedin} alt="Logo" width={25} height={25} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61554110842664&sk=photos"
            className="text-blue-400 hover:text-blue-600"
          >
            <Image src={facebook} alt="Logo" width={25} height={25} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Fotter;
