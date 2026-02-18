import React from 'react'

export default function PrivacyPolicyPage() {
    return (
        <div className='w-full min-h-screen pb-16 flex items-center justify-center bg-gray-50'>
            <div className='w-full h-full flex flex-col items-start justify-center '>
                <div className='w-full h-[50vh] flex flex-col items-center justify-center bg-linear-to-b from-primary-100/50 to-secondary-100/50'>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-primary-500 self-center mt-4'>Política de Privacidade</h1>
                </div>
                <div className='w-full max-w-4xl mx-auto px-6 md:px-12 gap-8 mt-8 md:mt-12'>

                    <section className='flex flex-col gap-4 text-gray-700 text-sm md:text-base leading-relaxed'>
                        <h2 className='text-xl font-bold text-primary-700 mt-8'>1. Dados Coletados</h2>
                        <p>O Wishly coleta o mínimo de informações necessárias para o funcionamento da plataforma e a melhoria da experiência do usuário. Os dados coletados são:</p>
                        <p>
                            <span className='font-bold'>Dados de Cadastro:</span> Nome completo, endereço de e-mail e um apelido (username) escolhido por você.
                        </p>
                        <p>
                            <span className='font-bold'>Dados Opcionais:</span> Gênero e data de nascimento (informados apenas se o usuário desejar).
                        </p>
                        <p>
                            <span className='font-bold'>Dados de Uso e Conteúdo:</span> Listas de desejos criadas, links de produtos, fotos de perfil (se houver), histórico de itens reservados em grupos e interações dentro da plataforma.
                        </p>
                        <p>
                            <span className='font-bold'>Dados de Pagamento:</span> Quando você assina um plano, os dados de faturamento (cartão, CPF, etc.) são coletados e processados diretamente pelo Stripe. O Wishly não armazena o número do seu cartão de crédito.
                        </p>
                        <p>
                            <span className='font-bold'>Dados Técnicos:</span> Endereço IP, tipo de navegador, sistema operacional e registros de acesso (logs), coletados automaticamente para segurança e diagnóstico.
                        </p>
                    </section>

                    <section className='flex flex-col gap-4 text-gray-700 text-sm md:text-base leading-relaxed'>
                        <h2 className='text-xl font-bold text-primary-700 mt-8'>2. Finalidade do Tratamento de Dados</h2>
                        <p>Tratamos seus dados com objetivos específicos, em conformidade com a LGPD:</p>
                        <p>
                            <span className='font-bold'>Prestação do Serviço:</span> Usamos seu e-mail e apelido para identificar sua conta, permitir o acesso e possibilitar que amigos te encontrem para formar grupos.
                        </p>
                        <p>
                            <span className='font-bold'>Funcionalidade de Listas (Data de Aniversário):</span> A data de nascimento é utilizada para verificar a idade do usuário e, opcionalmente, para notificar membros do seu grupo sobre a proximidade do seu aniversário, facilitando a organização dos presentes.
                        </p>
                        <p>
                            <span className='font-bold'>Personalização (Gênero):</span> Quando fornecido, o gênero é usado apenas para fins estatísticos e para melhorar a comunicação da plataforma com o usuário.
                        </p>
                        <p>
                            <span className='font-bold'>Comunicação:</span> Enviamos notificações sobre reservas de itens em suas listas, atualizações no serviço ou informações sobre sua assinatura.
                        </p>
                        <p>
                            <span className='font-bold'>Segurança:</span> Utilizamos logs de acesso e dados técnicos para prevenir fraudes, ataques hackers e garantir a integridade dos grupos familiares.
                        </p>
                    </section>

                    <section className='flex flex-col gap-4 text-gray-700 text-sm md:text-base leading-relaxed'>
                        <h2 className='text-xl font-bold text-primary-700 mt-8'>3. Compartilhamento de Dados com Terceiros</h2>
                        <p>O Wishly não vende nem comercializa seus dados pessoais para fins publicitários. O compartilhamento ocorre apenas quando estritamente necessário para o funcionamento da plataforma:</p>
                        <p>
                            <span className='font-bold'>Processamento de Pagamentos (Stripe):</span> Para processar as subscrições e planos premium, os dados de faturamento são transmitidos diretamente à Stripe. O Wishly não tem acesso a dados sensíveis de pagamento, apenas à confirmação de que o pagamento foi realizado com sucesso.
                        </p>
                        <p>
                            <span className='font-bold'>Serviços de Infraestrutura:</span> Seus dados são armazenados em servidores de nuvem de alta segurança (como AWS ou Google Cloud), que seguem padrões internacionais de proteção de dados.
                        </p>
                        <p>
                            <span className='font-bold'>Cumprimento Legal:</span> Poderemos compartilhar dados caso sejamos obrigados por lei, ordem judicial ou para proteger os direitos e a segurança de nossos usuários e da própria plataforma.
                        </p>
                    </section>

                    <section className='flex flex-col gap-4 text-gray-700 text-sm md:text-base leading-relaxed'>
                        <h2 className='text-xl font-bold text-primary-700 mt-8'>4. Segurança e Retenção de Dados</h2>
                        <p>
                            <span className='font-bold'>4.1. Medidas de Segurança:</span> Implementamos medidas técnicas e organizacionais para proteger seus dados contra acessos não autorizados, perda, alteração ou destruição. Isso inclui o uso de protocolos de criptografia (HTTPS/TLS) para o tráfego de informações.
                        </p>
                        <p>
                            <span className='font-bold'>4.2. Retenção de Dados:</span> Mantemos seus dados pessoais enquanto sua conta estiver ativa ou enquanto forem necessários para fornecer os serviços.
                        </p>
                        <p>
                            <span className='font-bold'>4.3. Prazo de Logs:</span> Conforme exigido pelo Marco Civil da Internet (Lei nº 12.965/14), os registros de acesso (logs) são mantidos por um período mínimo de 6 (seis) meses em ambiente controlado e seguro.
                        </p>
                        <p>
                            <span className='font-bold'>4.4. Descarte Seguro:</span> Após o encerramento da conta ou o fim da finalidade do tratamento, os dados são excluídos ou anonimizados, exceto quando a retenção é exigida por obrigação legal ou regulatória.
                        </p>
                    </section>

                    <section className='flex flex-col gap-4 text-gray-700 text-sm md:text-base leading-relaxed'>
                        <h2 className='text-xl font-bold text-primary-700 mt-8'>5. Seus Direitos (Direitos do Titular - LGPD)</h2>
                        <p>Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/18), o Wishly garante que você possa exercer seus direitos sobre seus dados a qualquer momento:</p>
                        <p>
                            <span className='font-bold'>Acesso e Correção:</span> Você pode visualizar e editar seus dados (Nome, E-mail, Apelido, Aniversário e Gênero) diretamente nas configurações do seu perfil.
                        </p>
                        <p>
                            <span className='font-bold'>Portabilidade:</span> Você tem o direito de solicitar uma cópia dos dados que forneceu à plataforma em formato estruturado.
                        </p>
                        <p>
                            <span className='font-bold'>Exclusão Definitiva:</span> Você pode solicitar a exclusão de sua conta e de todos os seus dados pessoais. O Wishly processará essa exclusão, mantendo apenas o que for estritamente exigido por lei (como logs de acesso).
                        </p>
                        <p>
                            <span className='font-bold'>Revogação de Consentimento:</span> Caso não concorde mais com o tratamento de algum dado opcional, você pode retirá-lo de seu perfil ou encerrar o uso da plataforma.
                        </p>
                    </section>

                    <section className='flex flex-col gap-4 text-gray-700 text-sm md:text-base leading-relaxed'>
                        <h2 className='text-xl font-bold text-primary-700 mt-8'>6. Cookies e Tecnologias de Rastreio</h2>
                        <p>O Wishly utiliza cookies e tecnologias similares para melhorar sua experiência de navegação:</p>
                        <p>
                            <span className='font-bold'>Cookies Essenciais:</span> Necessários para que o site funcione. Eles permitem que você permaneça logado enquanto navega entre diferentes páginas e grupos.
                        </p>
                        <p>
                            <span className='font-bold'>Cookies de Preferência:</span> Armazenam escolhas que você faz (como idioma ou configurações de exibição) para que você não precise configurá-las todas as vezes.
                        </p>
                        <p>
                            <span className='font-bold'>Gestão de Cookies:</span> Você pode configurar seu navegador para bloquear ou alertar sobre esses cookies, mas algumas partes da plataforma (como o acesso à conta) podem não funcionar corretamente sem eles.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}
