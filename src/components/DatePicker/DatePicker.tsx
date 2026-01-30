import * as React from "react"
import { CnButton as Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { format } from "date-fns"
// 1. Importe o locale do português
import { ptBR } from "date-fns/locale"
import { ChevronDownIcon } from "lucide-react"
import { Label } from "@radix-ui/react-label"

interface DatePickerProps {
    initialDate?: Date
    onDateChange?: (date: Date) => void
    variant?: 'default' | 'secondary'
    label?: React.ReactNode
    error?: string
}

export function DatePicker({ initialDate, onDateChange, variant = 'default', label, error }: DatePickerProps) {
    const [date, setDate] = React.useState<Date | undefined>(initialDate)

    // Função auxiliar para garantir que o onDateChange seja chamado
    const handleSelect = (newDate: Date | undefined) => {
        setDate(newDate)
        if (newDate && onDateChange) {
            onDateChange(newDate)
        }
    }

    const variantClasses = {
        default: 'bg-white border border-gray-300 focus:border-primary-100 focus:ring-primary-100 dark:bg-gray-800 dark:border-gray-700 dark:text-white',
        secondary: 'bg-gray-100 border border-gray-200 focus:border-primary-100 focus:ring-primary-100 dark:bg-gray-800 dark:border-gray-700 dark:text-white',
    }

    return (
        <Popover>
            <PopoverTrigger asChild>
                <div className="w-full items-center grid gap-2 relative">
                    {label && <Label className='text-lg md:text-xl text-primary-700 font-semibold' htmlFor="select">{label}</Label>}
                    <Button
                        type="button"
                        variant="outline"
                        data-empty={!date}
                        className={`data-[empty=true]:text-muted-foreground justify-between text-left font-normal text-lg md:text-xl ${variantClasses[variant]}`}
                    >
                        {date ? (
                            format(date, "PPP", { locale: ptBR })
                        ) : (
                            <span className="text-gray-500">Selecione uma data</span>
                        )}
                        <ChevronDownIcon />
                    </Button>
                    {error && <span className="text-sm md:text-base text-red-500 text-start mb-1">{error}</span>}
                </div>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                    className="text-lg md:text-xl bg-white! rounded-xl"
                    mode="single"
                    locale={ptBR}
                    required
                    selected={date}
                    onSelect={handleSelect}
                    defaultMonth={date}
                />
            </PopoverContent>
        </Popover>
    )
}