'use client'
import React, { useEffect, useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog'
import { Separator } from '../ui/separator'
import { useTranslations } from 'next-intl'
import { Copyright, Dot, Sparkles } from 'lucide-react'

export default function ChangelogDialog() {
    const t = useTranslations('Dashboard.Changelog')
    const tMetadata = useTranslations('Metadata')
    const [isOpen, setIsOpen] = useState(false)
    const currentVersion = process.env.NEXT_PUBLIC_APP_VERSION

    useEffect(() => {
        if (!currentVersion) return;

        const savedVersion = localStorage.getItem('app_version')

        if (savedVersion !== currentVersion) {
            setIsOpen(true)
        }
    }, [currentVersion])

    const handleClose = () => {
        localStorage.setItem('app_version', currentVersion!)
        setIsOpen(false)
    }

    // TODO: Adicionar chaves de tradução para as atualizações futuras
    const updates = [
        { title: 'Mural de atualizações', description: 'Agora você pode acompanhar todas as novidades em um só lugar.' },
        { title: 'Menus inferiores aprimorados', description: 'Agora há uma barra superior para arrastar e fechar, evitando fechamentos acidentais.' },
        { title: 'Bloqueio visual em formulários', description: 'Exibimos um "spinner" enquanto o sistema processa, evitando cliques repetidos.' },
        { title: 'Solicitações de entrada em grupos', description: 'Agora o dono pode aprovar ou recusar novos membros.' },
        { title: 'Visual de gerenciamento redesenhado', description: 'Interface mais clara e agradável na página de gerenciamento de grupos.' },
        { title: 'Correção no idioma japonês', description: 'Ajustes para permitir a visualização correta.' },
    ]

    return (
        <Dialog open={isOpen} onOpenChange={handleClose}>
            <DialogContent className=' bg-white-custom border-0 flex flex-col gap-2 items-center justify-center px-4 dark:bg-gray-800'>
                <DialogHeader className='flex flex-col gap-2 items-center justify-center px-4'>
                    <DialogTitle className='text-center text-lg md:text-2xl dark:text-white'>{t('title')}</DialogTitle>
                    <DialogDescription className='text-center text-sm md:text-base text-primary-500 dark:text-primary-300'>
                        {t('version')} {currentVersion}
                    </DialogDescription>
                    <Separator />
                </DialogHeader>
                <DialogFooter className='w-full'>
                    <div className='w-full flex items-start justify-start flex-col px-4 py-2 max-h-64 overflow-y-auto'>
                        <ul className='flex flex-col gap-3 w-full'>
                            {updates.map((update, index) => (
                                <li className='flex flex-col gap-0' key={index}>
                                    <div className='flex items-center'>
                                        <Dot className='w-8 h-8 text-primary-500 dark:text-primary-300' />
                                        <span className='text-sm md:text-base font-semibold text-gray-800 dark:text-white'>{update.title}</span>
                                    </div>
                                    <span className='text-xs md:text-sm text-gray-600 dark:text-gray-400 ml-3'>{update.description}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </DialogFooter>
                <div className='w-full text-sm mt-4 flex gap-2 items-center text-center text-gray-400 dark:text-gray-300 justify-center'>
                    <Sparkles className='w-4 h-4' />
                    <p className=''>{tMetadata('title')}</p>
                </div>
            </DialogContent>
        </Dialog >
    )
}
