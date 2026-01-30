import { ItemWithoutReservation } from "@/types/entities";
import { MotionDiv } from "@/components/Motion/Motion";
import { Card } from "@/components/ui/card";
import { prioritiesMap } from "../../wishlists/[slug]/_features/utils";
import { Separator } from "@radix-ui/react-separator";
import { formatPrice, formatPriority } from "@/utils/format";
import { useState } from "react";
import ItemDropdownMenu from "./ItemDropdownMenu";

type OwnerItemCardProps = {
  item: ItemWithoutReservation;
  delay: number;
  onEditItem: (item: ItemWithoutReservation, mode: "edit" | "create") => void;
  onDeleteItem: (item: ItemWithoutReservation) => void;
};

export default function OwnerItemCard({ item, delay, onEditItem, onDeleteItem }: OwnerItemCardProps) {

  const PriorityIcon = prioritiesMap[item.priority].el;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="w-full"
    >
      <div onClick={() => setIsDropdownOpen(true)} className="cursor-pointer">
        <Card className="w-full p-2 flex flex-row items-center justify-between py-3 gap-2 hover:bg-gray-100 dark:hover:bg-gray-900 dark:border-gray-700 duration-200 border-gray-300">
          <div className="flex ps-2 justify-start items-center gap-4 flex-1 min-w-0">
            <div className="min-w-0 flex-1">
              <h2 className="text-lg font-semibold truncate max-w-xs md:max-w-3xl dark:text-white">
                {item.name}
              </h2>
              <div className="flex gap-2 items-center text-gray-500 text-sm md:text-base">
                <span
                  className={`${prioritiesMap[item.priority].color} flex items-center h-full gap-1 -ms-1 py-1`}
                >
                  {<PriorityIcon className="size-3.5" />}
                  <p className="truncate">{formatPriority(item.priority)}</p>
                </span>
                <Separator
                  orientation="vertical"
                  className="h-4 bg-gray-200 w-px"
                />
                <span className=" truncate">R$ {formatPrice(item.price)}</span>
              </div>
            </div>
          </div>
          <div>
            <ItemDropdownMenu
              isOpen={isDropdownOpen}
              setIsOpen={setIsDropdownOpen}
              onEditItem={() => onEditItem(item, "edit")}
              onDeleteItem={() => onDeleteItem(item)}
            />
          </div>
        </Card>
      </div>
    </MotionDiv>
  );
}
