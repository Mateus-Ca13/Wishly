import { getCurrentUserAction } from '@/actions/profiles';
import { getItemsAction } from '@/actions/items';
import { ItemWithoutReservation } from '@/types/entities';
import { ActionResponse } from '@/types/response';
import OwnerWishlistContainer from './OwnerWishlistContainer';

export default async function WishlistDataLoader() {
    const currentUserResponse = await getCurrentUserAction();
    const initialItemsResponse: ActionResponse<{ items: ItemWithoutReservation[], count: number }> = await getItemsAction('', currentUserResponse.data.id, false);
    const initialItems = initialItemsResponse.success ? initialItemsResponse.data : { items: [], count: 0 };

    return (
        <OwnerWishlistContainer
            userId={currentUserResponse.data.id}
            initialItems={initialItems}
        />
    )
}
