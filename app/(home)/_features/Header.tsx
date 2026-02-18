'use client'
import Image from "next/image";
import { useScrollTop } from "@/hooks/useScrollTop";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Header() {

    const scrolled = useScrollTop(20)

    return (
        <header className={`fixed backdrop-blur-2xl flex items-center justify-between p-4 top-0 z-50 w-full duration-300 shadow-lg ${scrolled ? 'bg-white-custom dark:bg-gray-800 shadow-lg ' : 'bg-transparent dark:bg-transparent'}`}>
            <Link href={"/"}>
                <Image src={scrolled ? '/icon_black.png' : '/icon_faded.png'} className="duration-300 ease-in-out" alt="Logo" width={100} height={100} />
            </Link>
            <div className="flex items-center gap-4">
                {scrolled && (
                    <div className="items-center gap-4 mr-4 hidden md:flex">
                        <Link href={"/#aboutapp"} className="text-black hover:text-primary-700 duration-200">Como funciona</Link>
                        <Separator orientation="vertical" className="h-4! w-0.5! bg-primary-300/50 rounded-full" />
                        <Link href={"/#whyuse"} className="text-black hover:text-primary-700 duration-200">Recursos</Link>
                        <Separator orientation="vertical" className="h-4! w-0.5! bg-primary-300/50 rounded-full" />
                        <Link href={"/#plans"} className="text-black hover:text-primary-700 duration-200">PLanos</Link>
                        <Separator orientation="vertical" className="h-4! w-0.5! bg-primary-300/50 rounded-full" />
                        <Link href={"/#faq"} className="text-black hover:text-primary-700 duration-200">FAQ</Link>
                    </div>
                )}
                <Link href="/login" className="text-white font-semibold hover:brightness-110 duration-200 bg-linear-to-bl to-primary-500 from-secondary-500 rounded-full px-4 py-2">Cadastrar</Link>
            </div>
        </header >
    )
}
