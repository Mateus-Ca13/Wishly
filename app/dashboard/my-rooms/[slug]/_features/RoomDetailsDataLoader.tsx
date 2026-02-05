import { getMembersAction } from "@/actions/roomMembers";
import { getRoomBySlugAction } from "@/actions/rooms";
import { getCurrentUserAction } from "@/actions/profiles";
import { redirect } from "next/navigation";
import RoomDetailsContainer from "./RoomDetailsContainer";

type RoomDetailsDataLoaderProps = {
    slug: string
}

export default async function RoomDetailsDataLoader({ slug }: RoomDetailsDataLoaderProps) {
    const room = await getRoomBySlugAction(slug).then(res => res.data)

    if (!room) {
        return redirect('/dashboard/my-rooms')
    }

    const members = await getMembersAction('', room.id).then(res => res.data)
    const currentUser = await getCurrentUserAction().then(res => res.data)

    return (
        <div>
            <RoomDetailsContainer room={room} initialMembers={members} currentUser={currentUser} />
        </div>
    )
}
