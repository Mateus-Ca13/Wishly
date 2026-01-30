'use client'
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import RegisterRoomForm from "./RegisterRoomForm";
import { MotionDiv } from "@/components/Motion/Motion";
import { PlusCircle } from "lucide-react";
import { RegisterOrEditRoomSchema } from "@/schemas/rooms";
import { useTranslations } from "next-intl";

type CreateRoomDrawerProps = {
  isOpen: boolean
  onClose: () => void
  onOpen: () => void
  onCreateConfirm: (roomData: RegisterOrEditRoomSchema) => void
}
export default function CreateRoomDrawer({ isOpen, onClose, onOpen, onCreateConfirm }: CreateRoomDrawerProps) {
  const t = useTranslations('Dashboard.MyRooms');

  return (
    <Drawer open={isOpen} onClose={onClose}>
      <DrawerTrigger>
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, bounce: 0.4, type: 'spring' }}
          className='fixed bottom-20 right-4 md:right-12 md:bottom-30 xl:right-1/2 xl:translate-x-1/2 
      bg-linear-to-bl to-primary-500 from-secondary-500 rounded-full p-2 xl:px-12 shadow-md
      cursor-pointer hover:brightness-110 duration-200'
          onClick={() => onOpen()}
        >
          <div className='flex items-center text-white gap-2 py-2'>
            <PlusCircle className=' size-6' />
            <p className='font-semibold me-1'>{t('createButton')}</p>
          </div>
        </MotionDiv>
      </DrawerTrigger>
      <DrawerContent className="bg-white max-h-[80vh]! dark:bg-gray-900 dark:text-white ">
        <div className="overflow-y-auto overflow-x-hidden">
          <DrawerHeader>
            <DrawerTitle className="text-2xl md:text-3xl font-semibold px-2">{t('Drawer.title')}</DrawerTitle>
            <DrawerDescription className="md:text-xl text-lg px-2">{t('Drawer.description')}</DrawerDescription>
          </DrawerHeader>
          <div className="p-4  pb-10">
            <RegisterRoomForm onCreateConfirm={onCreateConfirm} />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

