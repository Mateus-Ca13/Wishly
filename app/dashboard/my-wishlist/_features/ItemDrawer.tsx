import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import { ItemWithoutReservation } from '@/types/entities'
import { Separator } from '@radix-ui/react-separator'
import EditItemForm from './ItemForm'
import { RegisterOrEditItemSchema } from '@/schemas/items'
import { MotionDiv } from '@/components/Motion/Motion'
import { PlusCircle } from 'lucide-react'

type ItemDrawerProps = {
    item: ItemWithoutReservation | null
    isOpen: boolean
    onClose: () => void
    onConfirm: { edit: (itemId: number | null | undefined, item: RegisterOrEditItemSchema) => void, create: (item: RegisterOrEditItemSchema) => void }
    itemDrawerMode: 'edit' | 'create'
}

export default function ItemDrawer({ item, onClose, isOpen, onConfirm, itemDrawerMode }: ItemDrawerProps) {

    const DrawerTitleText = itemDrawerMode === 'edit' ? 'Edição de item' : 'Criar novo item'
    if (!item) return null

    return (
        <Drawer open={isOpen} onClose={onClose}>
            <DrawerContent className="bg-white max-h-[80vh]! ">
                <div className="overflow-y-auto overflow-x-hidden">
                    <DrawerHeader className='flex flex-col gap-2 items-center justify-center p-0 '>
                        <DrawerTitle className="text-xl md:text-3xl font-semibold px-2 truncate max-w-11/12 md:max-w-2xl">{DrawerTitleText}</DrawerTitle>
                        <Separator orientation="horizontal" className="mb-2 bg-primary-100 w-3/5 md:w-1/5 h-1 rounded-2xl" />
                    </DrawerHeader>
                    <div className="p-4 w-full flex flex-col justify-center items-center gap-4">
                        <div className='max-w-xl w-full flex flex-col gap-2 items-center justify-center text-center'>
                            <EditItemForm item={item} onConfirm={onConfirm} mode={itemDrawerMode} />
                        </div>
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
