import { MotionDiv } from '@/components/Motion/Motion'
import { Separator } from '@radix-ui/react-separator'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { useTranslations } from 'next-intl'

export default function FAQCard() {
    const t = useTranslations('Dashboard.Help.FAQ')
    return (
        <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, bounce: 0.4, type: 'spring' }}
            className='flex flex-col gap-4 p-4 rounded-xl border shadow border-gray-200 dark:border-gray-800 dark:bg-gray-900'>

            <div className='flex flex-col '>
                <h2 className='text-lg md:text-2xl font-semibold whitespace-nowrap text-ellipsis min-w-0 overflow-hidden dark:text-white'>{t('title')}</h2>
                <p className='text-sm md:text-base text-gray-500 dark:text-gray-300'>{t('description')}</p>
            </div>
            <Separator className='w-full h-px bg-gray-200 dark:bg-gray-800' />
            <div className='flex flex-col w-full '>
                <Accordion type="single" collapsible>
                    <AccordionItem className='border-b-gray-200 dark:border-gray-800' value="item-1">
                        <AccordionTrigger className='text-base md:text-lg text-black dark:text-white hover:no-underline hover:text-primary-700 dark:hover:text-primary-300 cursor-pointer'>{t('questions.question1')}</AccordionTrigger>
                        <AccordionContent className='text-sm md:text-base text-gray-500 dark:text-gray-300'>{t('answers.answer1')}</AccordionContent>
                    </AccordionItem>
                    <AccordionItem className='border-b-gray-200 dark:border-gray-800' value="item-2">
                        <AccordionTrigger className='text-base md:text-lg text-black dark:text-white hover:no-underline hover:text-primary-700 dark:hover:text-primary-300 cursor-pointer'>{t('questions.question2')}</AccordionTrigger>
                        <AccordionContent className='text-sm md:text-base text-gray-500 dark:text-gray-300'>{t('answers.answer2')}</AccordionContent>
                    </AccordionItem>
                    <AccordionItem className='border-b-gray-200 dark:border-gray-800' value="item-3">
                        <AccordionTrigger className='text-base md:text-lg text-black dark:text-white hover:no-underline hover:text-primary-700 dark:hover:text-primary-300 cursor-pointer'>{t('questions.question3')}</AccordionTrigger>
                        <AccordionContent className='text-sm md:text-base text-gray-500 dark:text-gray-300'>{t('answers.answer3')}</AccordionContent>
                    </AccordionItem>
                    <AccordionItem className='border-b-gray-200 dark:border-gray-800' value="item-4">
                        <AccordionTrigger className='text-base md:text-lg text-black dark:text-white hover:no-underline hover:text-primary-700 dark:hover:text-primary-300 cursor-pointer'>{t('questions.question4')}</AccordionTrigger>
                        <AccordionContent className='text-sm md:text-base text-gray-500 dark:text-gray-300'>{t('answers.answer4')}</AccordionContent>
                    </AccordionItem>
                    <AccordionItem className='border-b-gray-200 dark:border-gray-800' value="item-5">
                        <AccordionTrigger className='text-base md:text-lg text-black dark:text-white hover:no-underline hover:text-primary-700 dark:hover:text-primary-300 cursor-pointer'>{t('questions.question5')}</AccordionTrigger>
                        <AccordionContent className='text-sm md:text-base text-gray-500 dark:text-gray-300'>{t('answers.answer5')}</AccordionContent>
                    </AccordionItem>
                    <AccordionItem className='border-b-gray-200 dark:border-gray-800' value="item-6">
                        <AccordionTrigger className='text-base md:text-lg text-black dark:text-white hover:no-underline hover:text-primary-700 dark:hover:text-primary-300 cursor-pointer'>{t('questions.question6')}</AccordionTrigger>
                        <AccordionContent className='text-sm md:text-base text-gray-500 dark:text-gray-300'>{t('answers.answer6')}</AccordionContent>
                    </AccordionItem>
                    <AccordionItem className='border-b-gray-200 dark:border-gray-800' value="item-7">
                        <AccordionTrigger className='text-base md:text-lg text-black dark:text-white hover:no-underline hover:text-primary-700 dark:hover:text-primary-300 cursor-pointer'>{t('questions.question7')}</AccordionTrigger>
                        <AccordionContent className='text-sm md:text-base text-gray-500 dark:text-gray-300'>{t('answers.answer7')}</AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </MotionDiv>
    )
}
