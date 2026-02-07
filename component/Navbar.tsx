import Link from "next/link"
import Image from "next/image"
const Navbar = () => {
  return (
   <header className="header">
       <nav className="nav">
        <Link href='/' className="logo">
        <Image src="/icons/logo.png" alt="Enventy Logo" width={34} height={24} /> 
        <p>Enventy</p>
        </Link> 
         <ul className="md:space-x-20">
            <Link href="/">Home</Link>
            <Link href="/">Events</Link>
            <Link href="/">Create Events</Link>

         </ul>
       </nav>
    </header>
  )
}

export default Navbar