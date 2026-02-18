import React from 'react'

export default function CookiesPolicyPage() {
    return (
        <div className='w-full min-h-screen pb-16 flex items-center justify-center bg-gray-50'>
            <div className='w-full h-full flex flex-col items-start justify-center '>
                <div className='w-full h-[50vh] flex flex-col items-center justify-center bg-linear-to-b from-primary-100/50 to-secondary-100/50'>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-primary-500 self-center mt-4'>Política de Cookies</h1>
                </div>
                <div className='w-full max-w-4xl mx-auto px-6 md:px-12 gap-8 mt-8 md:mt-12'>

                    <section className='flex flex-col gap-4 text-gray-700 text-sm md:text-base leading-relaxed'>
                        <h2 className='text-xl font-bold text-primary-700 mt-8'>1. O que são Cookies?</h2>
                        <p>
                            Cookies são pequenos arquivos de texto salvos no seu dispositivo (computador, tablet ou celular) quando você visita um site. Eles servem para "lembrar" de você e de suas preferências, garantindo que a plataforma funcione corretamente e ofereça uma experiência personalizada.
                        </p>
                        <p>
                            O Wishly utiliza cookies para manter você conectado, garantir a segurança da sua conta e processar assinaturas de forma eficiente.
                        </p>
                    </section>

                    <section className='flex flex-col gap-4 text-gray-700 text-sm md:text-base leading-relaxed'>
                        <h2 className='text-xl font-bold text-primary-700 mt-8'>2. Por que usamos Cookies?</h2>
                        <p>Utilizamos cookies por três motivos principais:</p>
                        <ul className='list-disc pl-5 space-y-2'>
                            <li><span className='font-bold'>Autenticação e Segurança:</span> Para reconhecer quando você faz login e proteger sua sessão contra acessos não autorizados.</li>
                            <li><span className='font-bold'>Funcionalidade:</span> Para lembrar suas preferências, como idioma e configurações de exibição.</li>
                            <li><span className='font-bold'>Pagamentos:</span> Para processar transações de forma segura através de nossos parceiros (Stripe).</li>
                        </ul>
                    </section>

                    <section className='flex flex-col gap-4 text-gray-700 text-sm md:text-base leading-relaxed'>
                        <h2 className='text-xl font-bold text-primary-700 mt-8'>3. Tipos de Cookies que Utilizamos</h2>

                        <p>
                            <span className='font-bold'>3.1. Cookies Essenciais (Obrigatórios):</span> Estes são fundamentais para o funcionamento do Wishly. Sem eles, você não conseguiria fazer login, criar grupos ou acessar suas listas privadas. Eles não podem ser desativados em nossos sistemas.
                        </p>

                        <p>
                            <span className='font-bold'>3.2. Cookies de Preferência:</span> Permitem que o site lembre de escolhas que você fez no passado, como o idioma de navegação ou se você prefere o "modo escuro" ou "claro".
                        </p>

                        <p>
                            <span className='font-bold'>3.3. Cookies de Terceiros:</span> Algumas funcionalidades do Wishly dependem de serviços externos confiáveis.
                        </p>
                        <ul className='list-disc pl-5 space-y-2'>
                            <li>
                                <span className='font-bold'>Stripe:</span> Utilizamos a Stripe para processar pagamentos. Eles podem usar cookies para prevenção de fraudes e para lembrar seus dados de pagamento de forma segura (conforme sua Política de Cookies própria).
                            </li>
                            <li>
                                <span className='font-bold'>Supabase:</span> Nossa infraestrutura de login utiliza cookies para gerenciar sua sessão de forma segura e criptografada.
                            </li>
                        </ul>
                    </section>

                    <section className='flex flex-col gap-4 text-gray-700 text-sm md:text-base leading-relaxed'>
                        <h2 className='text-xl font-bold text-primary-700 mt-8'>4. Gerenciamento de Cookies</h2>
                        <p>
                            Você tem o direito de decidir se aceita ou rejeita cookies. A maioria dos navegadores aceita cookies automaticamente, mas você pode modificar as configurações do seu navegador para recusá-los, se preferir.
                        </p>
                        <p>
                            <span className='font-bold'>Atenção:</span> Bloquear cookies essenciais pode impedir que você faça login ou utilize recursos vitais do Wishly.
                        </p>
                        <p>
                            Para gerenciar suas preferências, consulte a ajuda do seu navegador (Chrome, Firefox, Safari, Edge) sobre como limpar ou bloquear cookies.
                        </p>
                    </section>

                    <section className='flex flex-col gap-4 text-gray-700 text-sm md:text-base leading-relaxed'>
                        <h2 className='text-xl font-bold text-primary-700 mt-8'>5. Atualizações desta Política</h2>
                        <p>
                            Podemos atualizar esta Política de Cookies periodicamente para refletir mudanças em nossas práticas ou por razões operacionais, legais ou regulatórias. Recomendamos que você visite esta página regularmente para se manter informado.
                        </p>
                        <p className='mt-4 text-sm text-gray-500'>
                            Última atualização: {new Date().toLocaleDateString('pt-BR')}
                        </p>
                    </section>

                </div>
            </div>
        </div>
    )
}
