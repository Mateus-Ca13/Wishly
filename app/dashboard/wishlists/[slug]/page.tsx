import { getCurrentUserAction, getUserBySlugAction } from "@/actions/profiles";
import { getItemsAction } from "../../../../src/actions/itemsActions"; // Importe a action
import WishlistItemContainer from "./_features/WishlistItemsContainer";

type MemberWishlistPageProps = {
  params: Promise<{ slug: string }>
}

export default async function UserWishlistPage({ params }: MemberWishlistPageProps) {
  const { slug } = await params;

  const userResponse = await getUserBySlugAction(slug);
  if (!userResponse.data) return <div>Usuário não encontrado</div>;
  const userId = userResponse.data.id;

  const currentUserResponse = await getCurrentUserAction();
  const currentUser = currentUserResponse.data;

  const initialItemsResponse = await getItemsAction('', userId);
  const initialItems = initialItemsResponse.success ? initialItemsResponse.data : [];

  return (
    <div className='flex flex-col items-center justify-center gap-4 w-full mx-auto'>
      <WishlistItemContainer 
         userId={userId} 
         currentUser={currentUser}
         initialItems={initialItems} 
      />
    </div>
  )
}