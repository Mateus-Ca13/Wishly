'use client'
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import RegisterRoomForm from "./RegisterRoomForm";
import { MotionDiv } from "@/components/Motion/Motion";
import { PlusCircle } from "lucide-react";
import React from "react";


export default function CreateRoomDrawer() {

  
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger>
        <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5, bounce: 0.4, type: 'spring' }}
      className='fixed bottom-20 right-4 md:right-12 md:bottom-30 xl:right-1/2 xl:translate-x-1/2 
      bg-linear-to-bl to-primary-500 from-secondary-500 rounded-full p-2 xl:px-12 shadow-md
      cursor-pointer hover:brightness-110 duration-200'
      onClick={()=>setIsOpen(true)}
      >
        <div className='flex items-center text-white gap-2 py-2'>
        <PlusCircle className=' size-6'/>
        <p className='font-semibold me-1'>Criar Grupo</p>
        </div>
      </MotionDiv>
      </DrawerTrigger>
    <DrawerContent className="bg-white max-h-[80vh]! ">
      <div className="overflow-y-auto overflow-x-hidden">
        <DrawerHeader>
        <DrawerTitle className="text-2xl md:text-3xl font-semibold px-2">Criar novo grupo</DrawerTitle>
        <DrawerDescription className="md:text-xl text-lg px-2">Junte seus amigos e crie um novo grupo de desejos!</DrawerDescription>
        </DrawerHeader>
        <div className="p-4  pb-10">
          <RegisterRoomForm/>
        </div>
        </div>
    </DrawerContent>
    </Drawer>
  )
}
