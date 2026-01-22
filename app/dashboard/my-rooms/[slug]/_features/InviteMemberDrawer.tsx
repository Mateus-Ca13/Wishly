'use client'
import Button from "@/components/Button/Button"
import Input from "@/components/Input/Input"
import { MotionDiv } from "@/components/Motion/Motion"
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { getCurrentUrl } from "@/utils/url"
import { Check, Copy, LucideShare2 } from "lucide-react"
import React from "react"

type InviteMemberDrawerProps = {
  slug: string
}


export default function InviteMemberDrawer({ slug }: InviteMemberDrawerProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [copyButtonPressed, setCopyButtonPressed] = React.useState(false)

  const inviteUrl = `${getCurrentUrl('origin')}/invite/${slug}`


  const handleCopyButton = () => {
    navigator.clipboard.writeText(inviteUrl)
    setCopyButtonPressed(true)
    setTimeout(() => {
      setCopyButtonPressed(false)
    }, 2000)
    
  }


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
          <LucideShare2 className='size-6'/>
          <p className='font-semibold me-1'>Convidar para grupo</p>
          </div>
        </MotionDiv>
        </DrawerTrigger>
      <DrawerContent className="bg-white max-h-[80vh]! ">
        <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-center items-center">
          <DrawerHeader>
          <DrawerTitle className="text-2xl md:text-3xl font-semibold px-2">Convide seus amigos</DrawerTitle>
          <DrawerDescription className="md:text-xl text-lg px-2">Compartilhe o link de convite com seus amigos para que eles possam entrar no grupo!</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-10 w-full max-w-xl flex justify-center items-center gap-4">
            <Input value={inviteUrl} className="py-6" onChange={(e)=>e.preventDefault()}/>
            <Button variant="outlined" className="flex items-center justify-center gap-1 min-w-2/5 lg:min-w-1/4" onClick={handleCopyButton}>
              { copyButtonPressed ? (
                <>
                <Check className="size-6"/>
                <p>Copiado</p>
                </>)
              : (<>
                <Copy className="size-6"/>
                <p>Copiar</p>
                </>
              )}
            </Button>
          </div>
          </div>
      </DrawerContent>
    </Drawer>
  )
}
