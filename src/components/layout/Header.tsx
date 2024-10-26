
import Image from "next/image";
import logo1 from '/public/logo1.jpg'
import Link from "next/link";
import Wrapper from "../shared/wrapper";


import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


const Header = () => {
  return (
    <Wrapper>
      <header className="flex justify-between bg-red-400 py-4 sticky top-0 items-center">
        {/* logo */}
        <div>
          {/* <h2 className="text-xl font-bold font-serif">THE BAKERS</h2> */}
          <Image src={logo1} alt="logo" width={80} height={200} className="rounded-full" />
        </div>
        {/* input section */}
        {/* navigation-bar */}
        <ul className='hidden md:block space-x-6 items-center text-red-800 text-[23px] font-semibold'>
                <Link href={"/"}>Home</Link>
                <Link href={"/about"}>About</Link>
                <Link href={"/contact"}>Contact</Link>
            </ul>
      
        <Sheet>
                <SheetTrigger className='md:hidden'>
                    <Menu className='text-red-800 text-2xl' />
                </SheetTrigger>
                <SheetContent className='bg-yellow-100'>
                    <SheetTitle className='text-2xi text-teal-800 font-sans font-semibold'>Menu</SheetTitle> {/* Add SheetTitle for accessibility */}
                    <ul className='space-y-4 text-teal-800 py-10  font-sans font-semibold'>
                        <li><Link href={"/"}>Home</Link></li>
                        <li><Link href={"/about"}>About</Link></li>
                        <li><Link href={"/contact"}>Contact</Link></li>
                    </ul>
                </SheetContent>
            </Sheet>



      </header>
    </Wrapper>
  )
}

export default Header;
