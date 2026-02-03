import { getMembersAction } from "@/actions/roomMembers";
import { getRoomBySlugAction } from "../../../../src/actions/rooms"
import RoomDetailsContainer from "./_features/RoomDetailsContainer";
import { redirect } from "next/navigation";
import { getCurrentUserAction } from "@/actions/profiles";

type RoomPageProps = {
  params: Promise<{ slug: string }>
}

export default async function RoomDetailsPage({ params }: RoomPageProps) {

  const { slug } = await params;
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