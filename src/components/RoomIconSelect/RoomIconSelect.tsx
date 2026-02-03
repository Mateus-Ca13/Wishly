import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import Image from "next/image"
import { UseFormSetValue } from "react-hook-form"
import { RegisterOrEditRoomSchema } from "@/schemas/rooms"

export type RoomIconSelectProps = {
  images: {
    src: string
  }[]
  initialValue?: number
  valueSetter: UseFormSetValue<RegisterOrEditRoomSchema>
}

export function RoomIconSelect({ images, valueSetter, initialValue }: RoomIconSelectProps) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [selected, setSelected] = React.useState<number>(initialValue ? initialValue - 1 : 0)

  // Scroll para o item selecionado quando o carousel monta ou quando initialValue muda
  React.useEffect(() => {
    if (!api) return

    // Pequeno delay para garantir que o carousel está montado
    const timeoutId = setTimeout(() => {
      api.scrollTo(selected, true)
    }, 100)

    return () => clearTimeout(timeoutId)
  }, [api, initialValue])

  const handleSelect = (index: number) => {
    setSelected(index)
    valueSetter('icon', index + 1)

    // Scroll suave para o item selecionado
    api?.scrollTo(index, false)
  }

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: 'center',
      }}
      className="mt-1 w-full"
    >
      <CarouselContent>
        {images.map((cardInfo, index) => (
          <CarouselItem onClick={() => { handleSelect(index) }} key={cardInfo.src + index} className="basis-1/3 md:basis-1/4 xl:basis-1/5">
            <div className=" cursor-pointer mx-1">
              <Card className={`${selected == index ? 'border border-primary-500 bg-primary-100 dark:bg-primary-900' : ''} border-gray-300`}>
                <CardContent className="flex aspect-square items-center justify-center p-1">
                  <Image
                    src={cardInfo.src}
                    alt={'Ícone de grupo'}
                    width={500}
                    height={500}
                    className="rounded-lg w-full h-full object-cover"
                  />
                  <span className="text-3xl font-semibold"></span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-14 cursor-pointer" />
      <CarouselNext className="-right-14 cursor-pointer" />
    </Carousel>
  )
}

