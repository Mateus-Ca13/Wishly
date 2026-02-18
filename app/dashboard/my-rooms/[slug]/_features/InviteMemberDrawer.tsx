'use client'
import Button from "@/components/Button/Button"
import Input from "@/components/Input/Input"
import { MotionDiv } from "@/components/Motion/Motion"
import { Drawer, DrawerContent, DrawerDescription, DrawerHandle, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { handleShare } from "@/utils/share"
import { getCurrentUrl } from "@/utils/url"
import { Check, Copy, LucideShare2, Share2 } from "lucide-react"
import { useTranslations } from "next-intl"
import React from "react"

type InviteMemberDrawerProps = {
  slug: string
}


export default function InviteMemberDrawer({ slug }: InviteMemberDrawerProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const t = useTranslations('Dashboard.RoomsDetails');

  const inviteUrl = `${getCurrentUrl('origin')}/invite/${slug}`


  const handleCopyButton = async () => {
    await handleShare(inviteUrl, "Wishly", "Convite para grupo!")

  }


  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen} handleOnly>
      <DrawerTrigger>
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, bounce: 0.4, type: 'spring' }}
          className='fixed bottom-20 right-4 md:right-12 md:bottom-30 xl:right-1/2 xl:translate-x-1/2 
        bg-linear-to-bl to-primary-500 from-secondary-500 rounded-full p-2 xl:px-12 shadow-md
        cursor-pointer hover:brightness-110 duration-200'
          onClick={() => setIsOpen(true)}
        >
          <div className='flex items-center text-white gap-2 py-2'>
            <LucideShare2 className='size-6' />
            <p className='font-semibold me-1'>{t('inviteButton')}</p>
          </div>
        </MotionDiv>
      </DrawerTrigger>
      <DrawerContent className="bg-white max-h-[80vh]! dark:bg-gray-900 dark:text-white ">
        <DrawerHandle className="cursor-grab w-[100px]! mb-4" />
        <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-center items-center">
          <DrawerHeader>
            <DrawerTitle className="text-2xl md:text-3xl font-semibold px-2">{t('InviteDrawer.title')}</DrawerTitle>
            <DrawerDescription className="md:text-xl text-lg px-2">{t('InviteDrawer.description')}</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-10 w-full max-w-xl flex justify-center items-center gap-4">
            <Input value={inviteUrl} className="py-6" onChange={(e) => e.preventDefault()} />
            <Button variant="outlined" className="flex items-center justify-center gap-1" onClick={handleCopyButton}>
              <Share2 className="size-6" />
              <p>{t('InviteDrawer.copyButton')}</p>
            </Button>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

