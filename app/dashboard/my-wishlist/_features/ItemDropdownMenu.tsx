'use client'
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical, Pencil, Trash } from "lucide-react";
import { useTranslations } from "next-intl";

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
  const t = useTranslations('Dashboard.MyWishlist.ActionsMenu')

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <EllipsisVertical className="size-5 dark:text-white" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white border-gray-300 w-48 dark:bg-gray-800 dark:border-gray-800" align="end">
        <DropdownMenuItem onClick={onEditItem} className="text-base hover:bg-gray-100 cursor-pointer dark:text-white dark:hover:bg-gray-700">
          <Pencil />
          {t('editButton')}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={onDeleteItem} className="text-red-500 dark:text-red-400 text-base hover:bg-red-50 dark:hover:bg-red-800/50 cursor-pointer">
          <Trash />
          {t('deleteButton')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

