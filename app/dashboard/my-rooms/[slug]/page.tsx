import { Suspense } from "react";
import RoomDetailsDataLoader from "./_features/RoomDetailsDataLoader";
import CardsListSkeleton from "@/components/CardsListSkeleton/CardsListSkeleton";

type RoomPageProps = {
  params: Promise<{ slug: string }>
}

export default async function RoomDetailsPage({ params }: RoomPageProps) {
  const { slug } = await params;

  return (
    <Suspense fallback={<CardsListSkeleton />}>
      <RoomDetailsDataLoader slug={slug} />
    </Suspense>
  )
}
