import { Suspense } from "react";
import GuestWishlistDataLoader from "./_features/GuestWishlistDataLoader";
import CardsListSkeleton from "@/components/CardsListSkeleton/CardsListSkeleton";

type GuestWishlistPageProps = {
  params: Promise<{ slug: string }>
}

export default async function GuestWishlistPage({ params }: GuestWishlistPageProps) {
  const { slug } = await params;

  return (
    <Suspense fallback={<CardsListSkeleton />}>
      <GuestWishlistDataLoader slug={slug} />
    </Suspense>
  )
}
