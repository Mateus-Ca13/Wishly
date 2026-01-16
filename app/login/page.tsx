
import Image from "next/image";
import SignFormWrapper from "./_features/SignFormWrapper";
import { MotionDiv } from "@/components/Motion/Motion";

export default function LoginPage() {
  return (
    <section className="w-full h-screen flex">
      <div className="w-2/3 h-full bg-[url('/login_bg.png')] bg-cover bg-center hidden md:flex items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center h-full bg-linear-to-tr from-primary-500/90 to-secondary-500/90">
          <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center"
            >
            <Image
              src="/icon_faded.png"
              alt="Wishly Logo"
              width={300}
              height={100}
              />
            <p className="text-white text-lg mt-4 font-leckerli">Presentear bem nunca foi tão simples!</p>
          </MotionDiv>
        </div>
      </div>
      <div className="w-1/3 shadow-lg flex flex-col items-center justify-center px-8 md:px-16 bg-gray-50">
        <SignFormWrapper />
      </div>
    </section>
  )
}
