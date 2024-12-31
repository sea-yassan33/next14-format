import Image from "next/image";
import Link from 'next/link';
import { tv } from 'tailwind-variants';


export default function Header(){
  const twStayles = tv({
    variants: {
      style:{
        st01:'max-w-6xl mx-auto flex justify-between items-center',
        nav01:'hidden md:flex items-center gap-8',
        nav02:'hover:text-muted-foreground transition-colors',
      },
    },
  });

  return(
    <header className="w-full px-6 py-4 bg-slate-300">
      <div className={twStayles({style:'st01'})}>
        <div className="flex flex-col">
          <h1 className="text-xl font-light">Create Web App</h1>
          <p className="text-sm text-muted-foreground">Sub Title</p>
        </div>
        <nav className={twStayles({style:'nav01'})}>
          <Link href="/" className={twStayles({style:'nav02'})}>
            HOME
          </Link>
          <Link href="/works" className={twStayles({style:'nav02'})}>
            WORKS
          </Link>
          <Link href="/about" className={twStayles({style:'nav02'})}>
            ABOUT
          </Link>
          <Link href="/contact" className={twStayles({style:'nav02'})}>
            CONTACT
          </Link>
        </nav>
      </div>
    </header>
  );
}