import { getRoomBySlugAction } from "../../../../src/actions/rooms"
import InviteMemberDrawer from "./_features/InviteMemberDrawer";
import MembersList from "./_features/MembersList";

type RoomPageProps = {
  params: Promise<{ slug: string }>
}

export default async function RoomDetailsPage({ params }: RoomPageProps) {
    
    const { slug } = await params;
    const room = await getRoomBySlugAction(slug).then(res => res.data)
    
  return (
    <div>
      <MembersList roomId={room.id}/>
      <InviteMemberDrawer slug={slug}/>
    </div>
  )
}