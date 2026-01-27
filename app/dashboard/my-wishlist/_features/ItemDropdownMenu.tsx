import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical, Pencil, Trash } from "lucide-react";

export default function ItemDropdownMenu({
  isOpen,
  setIsOpen,
  onEditItem,
  onDeleteItem,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onEditItem: () => void;
  onDeleteItem: () => void;
}) {
  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <EllipsisVertical className="size-5" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white border-gray-300 w-48" align="end">
        <DropdownMenuItem onClick={onEditItem} className="text-base hover:bg-gray-100 cursor-pointer">
          <Pencil />
          Editar
        </DropdownMenuItem>
        <DropdownMenuItem onClick={onDeleteItem} className="text-red-500 text-base hover:bg-red-50 cursor-pointer">
          <Trash />
          Excluir
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
