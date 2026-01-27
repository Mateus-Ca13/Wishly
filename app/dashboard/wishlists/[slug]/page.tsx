import { getCurrentUserAction, getUserBySlugAction } from "@/actions/profiles";
import { getItemsAction } from "../../../../src/actions/items"; // Importe a action
import GuestWishlistContainer from "./_features/GuestWishlistContainer";

type GuestWishlistPageProps = {
  params: Promise<{ slug: string }>
}

export default async function GuestWishlistPage({ params }: GuestWishlistPageProps) {
  const { slug } = await params;

  const userResponse = await getUserBySlugAction(slug);
  if (!userResponse.data) return <div>Usuário não encontrado</div>;
  const userId = userResponse.data.id;

  const currentUserResponse = await getCurrentUserAction();
  const currentUser = currentUserResponse.data;

  const initialItemsResponse = await getItemsAction('', userId);
  const initialItems = initialItemsResponse.success ? initialItemsResponse.data : { items: [], count: 0 };

  return (
    <div className='flex flex-col items-center justify-center gap-4 w-full mx-auto'>
      <GuestWishlistContainer
        userId={userId}
        currentUser={currentUser}
        initialItems={initialItems}
      />
    </div>
  )
}