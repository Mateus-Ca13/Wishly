import { getMembersAction } from "@/actions/roomMembers";
import { getRoomBySlugAction } from "../../../../src/actions/rooms"
import RoomDetailsContainer from "./_features/RoomDetailsContainer";

type RoomPageProps = {
  params: Promise<{ slug: string }>
}

export default async function RoomDetailsPage({ params }: RoomPageProps) {

  const { slug } = await params;
  const room = await getRoomBySlugAction(slug).then(res => res.data)
  const members = await getMembersAction('', room.id).then(res => res.data)

  return (
    <div>
      <RoomDetailsContainer slug={slug} initialMembers={members} />
    </div>
  )
}