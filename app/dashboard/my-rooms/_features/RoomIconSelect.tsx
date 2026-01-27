import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { UseFormSetValue } from "react-hook-form"
import { RegisterOrEditRoomSchema } from "@/schemas/rooms"

export type RoomIconSelectProps = {
  images: {
    src: string
  }[]
  valueSetter: UseFormSetValue<RegisterOrEditRoomSchema>
}

export function RoomIconSelect({ images, valueSetter }: RoomIconSelectProps) {


  const [selected, setSelected] = React.useState<number>(0)

  const handleSelect = (index: number) => {
    setSelected(index)
    valueSetter('icon', index + 1)

  }

  return (
    <Carousel
      opts={{
        align: 'center',
      }}
      className="mt-1"
    >
      <CarouselContent>
        {images.map((cardInfo, index) => (
          <CarouselItem onClick={() => { handleSelect(index) }} key={cardInfo.src + index} className="basis-1/3 md:basis-1/4 xl:basis-1/5">
            <div className=" cursor-pointer">
              <Card className={`${selected == index ? 'border border-primary-500 bg-primary-100' : ''} border-gray-300`}>
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
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
