import Image from "next/image";
import React from "react";

function Header() {
  return (
    <header>
      {/* Top nav */}
      <div>
        I am a header
        <div>
          <Image alt="logo" width={150} height={40} />
        </div>
      </div>

      {/* Bottom nav */}
      <div></div>
    </header>
  );
}

export default Header;
