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
        {
            title: 'Alterar senha',
            description: 'Agora é possível alterar a senha de sua conta na página de privacidade e segurança, em configurações de conta.'
        },
        {
            title: 'Excluir conta',
            description: 'Usuários agora podem excluir a conta na página de privacidade e segurança, em configurações de conta.'
        },
        {
            title: 'Visualização rápida de itens',
            description: 'Ao selecionar um item da lista de desejos, agora é possível visualizar os detalhes do item, além de editá-lo ou excluí-lo.'
        },
        {
            title: 'Landing Page',
            description: 'Agora o Wishly possui uma página de apresentação super interessante e informativa!'
        },
        {
            title: 'Termos de Uso e Política de Privacidade',
            description: 'Agora o Wishly possui termos de uso e política de privacidade.'
        }
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
                                        <span className='text-base md:text-lg font-semibold text-gray-800 dark:text-white'>{update.title}</span>
                                    </div>
                                    <span className='text-sm md:text-base text-gray-600 dark:text-gray-400 ml-3'>{update.description}</span>
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
