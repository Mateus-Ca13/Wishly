import React from 'react'

export default function UseTermsPage() {
    return (
        <div className='w-full min-h-screen pb-16 flex items-center justify-center bg-gray-50'>
            <div className='w-full h-full flex flex-col items-start justify-center '>
                <div className='w-full h-[50vh] flex flex-col items-center justify-center bg-linear-to-b from-primary-100/50 to-secondary-100/50'>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-primary-500 self-center mt-4'>Termos de Uso</h1>
                </div>
                <div className='w-full max-w-4xl mx-auto px-6 md:px-12 gap-8 mt-8 md:mt-12'>
                    <section className='flex flex-col gap-4 text-gray-700 text-sm md:text-base leading-relaxed'>
                        <h2 className='text-xl font-bold text-primary-700 mt-8'>1. Definições e Objeto</h2>
                        <p>
                            <span className='font-bold'>1.1. O Serviço:</span> O Wishly é uma plataforma de software como serviço (SaaS) que permite a organização, criação e compartilhamento de listas de desejos (wishlists) em grupos privados ou públicos.
                        </p>
                        <p>
                            <span className='font-bold'>1.2. Grupos e Visibilidade:</span> A plataforma facilita a interação entre usuários conhecidos, permitindo que membros de um mesmo grupo visualizem os itens desejados uns dos outros e utilizem o sistema de "Reserva de Itens" para coordenar a aquisição de presentes, evitando duplicidades.
                        </p>
                        <p>
                            <span className='font-bold'>1.3. Natureza do Serviço:</span> O Wishly atua estritamente como um facilitador de organização e hospedagem de conteúdo. A plataforma não comercializa produtos, não é parte em transações de compra e venda e não se responsabiliza pela entrega ou qualidade dos itens listados pelos usuários.
                        </p>
                    </section>

                    <section className='flex flex-col gap-4 text-gray-700 text-sm md:text-base leading-relaxed'>
                        <h2 className='text-xl font-bold text-primary-700 mt-8'>2. Elegibilidade e Cadastro</h2>
                        <p>
                            <span className='font-bold'>2.1. Criação de Conta:</span> Para utilizar as funcionalidades do Wishly, o usuário deve realizar um cadastro fornecendo dados verídicos, incluindo Nome, E-mail, Data de Nascimento, Gênero e um Apelido de sua escolha.
                        </p>
                        <p>
                            <span className='font-bold'>2.2. Segurança da Conta:</span> O usuário é o único responsável pela confidencialidade de suas credenciais de acesso. Qualquer atividade realizada sob sua conta será de sua integral responsabilidade.
                        </p>
                        <p>
                            <span className='font-bold'>2.3. Atualização de Dados:</span> O usuário compromete-se a manter seus dados atualizados, podendo editá-los a qualquer momento através das configurações de perfil na plataforma.
                        </p>
                    </section>

                    <section className='flex flex-col gap-4 text-gray-700 text-sm md:text-base leading-relaxed'>
                        <h2 className='text-xl font-bold text-primary-700 mt-8'>3. Uso por Menores e Consentimento Parental</h2>
                        <p>
                            <span className='font-bold'>3.1. Classificação Etária:</span> O Wishly possui natureza familiar e não veicula deliberadamente conteúdo restrito. Dessa forma, a plataforma é aberta a usuários de diversas faixas etárias, incluindo crianças e adolescentes.
                        </p>
                        <p>
                            <span className='font-bold'>3.2. Presunção de Consentimento:</span> Ao permitir que um menor de idade acesse e utilize a plataforma, o Wishly subentende e presume que houve o consentimento prévio e a supervisão direta de seus pais ou responsáveis legais.
                        </p>
                        <p>
                            <span className='font-bold'>3.3. Isenção de Responsabilidade:</span> A plataforma não solicita, controla ou armazena comprovantes de autorização parental no ato do cadastro. É de responsabilidade exclusiva dos pais ou tutores legais monitorar o uso da ferramenta por menores, bem como os grupos em que estes ingressam, isentando o Wishly de qualquer responsabilidade por uso não autorizado ou inadequado por parte de incapazes.
                        </p>
                    </section>

                    <section className='flex flex-col gap-4 text-gray-700 text-sm md:text-base leading-relaxed'>
                        <h2 className='text-xl font-bold text-primary-700 mt-8'>4. Assinaturas e Pagamentos (SaaS)</h2>
                        <p>
                            <span className='font-bold'>4.1. Planos e Assinaturas:</span> O Wishly oferece diferentes modalidades de planos, incluindo versões gratuitas e subscrições pagas ("Premium"). As funcionalidades específicas, limites de criação de grupos, quantidade de itens por lista e ferramentas exclusivas de usabilidade variam de acordo com o plano escolhido pelo usuário no ato da contratação.
                        </p>
                        <p>
                            <span className='font-bold'>4.2. Processamento por Terceiros (Stripe):</span> Todos os pagamentos e transações financeiras são processados através da plataforma Stripe. O Wishly não armazena dados sensíveis de cartões de crédito em seus próprios servidores. Ao realizar uma assinatura, o usuário concorda com os Termos de Serviço e Política de Privacidade da Stripe.
                        </p>
                        <p>
                            <span className='font-bold'>4.3. Renovação e Cancelamento:</span> As assinaturas são renovadas automaticamente ao final de cada período (mensal ou anual), a menos que o usuário solicite o cancelamento através do painel de configurações. O cancelamento interrompe a cobrança do próximo ciclo, mantendo o acesso premium até o fim do período já pago.
                        </p>
                        <p>
                            <span className='font-bold'>4.4. Alteração de Planos (Upgrade/Downgrade):</span> O usuário pode alterar seu plano a qualquer momento. Em casos de upgrade, a cobrança proporcional será aplicada imediatamente. Em casos de downgrade, as novas limitações de uso serão aplicadas no próximo ciclo de faturamento.
                        </p>
                    </section>

                    <section className='flex flex-col gap-4 text-gray-700 text-sm md:text-base leading-relaxed'>
                        <h2 className='text-xl font-bold text-primary-700 mt-8'>5. Conteúdo do Usuário e Isenção de Responsabilidade</h2>
                        <p>
                            <span className='font-bold'>5.1. Responsabilidade pelo Conteúdo:</span> O Wishly é uma plataforma de hospedagem técnica. Todo e qualquer conteúdo inserido (textos, links de produtos ou descrições de desejos) é de responsabilidade exclusiva e integral do usuário que o publicou.
                        </p>
                        <p>
                            <span className='font-bold'>5.2. Natureza da Plataforma:</span> Como o Wishly é um app de uso familiar e restrito a grupos (geralmente compostos por conhecidos), a plataforma não realiza moderação prévia de conteúdos. No entanto, o usuário compromete-se a não postar conteúdos ilícitos, ofensivos, pornográficos ou que violem direitos autorais de terceiros.
                        </p>
                        <p>
                            <span className='font-bold'>5.3. Ausência de Endosso:</span> A inclusão de um link ou produto em uma wishlist não implica em endosso, verificação de segurança ou garantia por parte do Wishly. A plataforma não se responsabiliza por danos decorrentes de links externos ou transações comerciais realizadas fora de seu ambiente.
                        </p>
                        <p>
                            <span className='font-bold'>5.4. Reserva de Itens:</span> O sistema de "Reserva de Itens" é uma ferramenta de coordenação logística entre usuários. O Wishly não garante que um item reservado será efetivamente comprado, nem se responsabiliza por falhas de comunicação entre os membros do grupo.
                        </p>
                    </section>

                    <section className='flex flex-col gap-4 text-gray-700 text-sm md:text-base leading-relaxed'>
                        <h2 className='text-xl font-bold text-primary-700 mt-8'>6. Regras de Conduta e Moderação</h2>
                        <p>
                            <span className='font-bold'>6.1. Uso Aceitável:</span> O usuário compromete-se a utilizar o Wishly de forma ética e legal. É terminantemente proibido utilizar a plataforma para:
                        </p>
                        <ul className='list-disc pl-5 space-y-2'>
                            <li>Assediar, intimidar ou expor outros membros do grupo;</li>
                            <li>Publicar conteúdos que promovam discurso de ódio, violência ou atividades ilegais;</li>
                            <li>Tentar burlar sistemas de segurança ou acessar dados de terceiros sem autorização.</li>
                        </ul>
                        <p>
                            <span className='font-bold'>6.2. Denúncia de Conteúdo:</span> Caso um usuário identifique um comportamento inadequado ou conteúdo proibido dentro de um grupo, deverá reportar o incidente através dos canais oficiais de suporte do Wishly.
                        </p>
                        <p>
                            <span className='font-bold'>6.3. Poder de Moderação:</span> O Wishly reserva-se o direito de suspender ou banir contas que violem estes termos, bem como remover conteúdos sinalizados como impróprios, sem aviso prévio.
                        </p>
                    </section>

                    <section className='flex flex-col gap-4 text-gray-700 text-sm md:text-base leading-relaxed'>
                        <h2 className='text-xl font-bold text-primary-700 mt-8'>7. Encerramento e Exclusão de Conta</h2>
                        <p>
                            <span className='font-bold'>7.1. Direito de Exclusão:</span> O usuário possui total autonomia para encerrar sua conta no Wishly a qualquer momento, diretamente através das configurações do perfil.
                        </p>
                        <p>
                            <span className='font-bold'>7.2. Efeito da Exclusão:</span> Ao excluir a conta, todos os dados pessoais associados serão removidos de nossas bases de dados ativas, respeitando os prazos legais de guarda de logs. Informações compartilhadas em grupos (como reservas de itens feitas no passado) podem permanecer visíveis para os outros membros para manter o histórico do grupo, porém de forma anonimizada ou desvinculada do perfil excluído.
                        </p>
                        <p>
                            <span className='font-bold'>7.3. Suspensão por Inatividade:</span> O Wishly reserva-se o direito de desativar contas que permaneçam inativas por um período superior a 12 (doze) meses, mediante aviso prévio por e-mail.
                        </p>
                    </section>

                    <section className='flex flex-col gap-4 text-gray-700 text-sm md:text-base leading-relaxed'>
                        <h2 className='text-xl font-bold text-primary-700 mt-8'>8. Limitação de Responsabilidade e Foro</h2>
                        <p>
                            <span className='font-bold'>8.1. Disponibilidade do Serviço:</span> O Wishly é fornecido "como está". Embora busquemos a máxima estabilidade, não garantimos que o serviço será ininterrupto ou livre de erros técnicos pontuais.
                        </p>
                        <p>
                            <span className='font-bold'>8.2. Danos Indiretos:</span> Em nenhuma circunstância o Wishly será responsável por lucros cessantes ou danos indiretos resultantes do uso ou da incapacidade de usar a plataforma.
                        </p>
                        <p>
                            <span className='font-bold'>8.3. Legislação e Foro:</span> Estes Termos são regidos pelas leis da República Federativa do Brasil. Para dirimir quaisquer controvérsias oriundas deste documento, as partes elegem o foro da comarca de São José/SC, com renúncia expressa a qualquer outro, por mais privilegiado que seja.
                        </p>
                    </section>

                    <section className='flex flex-col gap-4 text-gray-700 text-sm md:text-base leading-relaxed'>
                        <h2 className='text-xl font-bold text-primary-700 mt-8'>9. Natureza Experimental (Versão Beta) e Isenção de Garantias</h2>
                        <p>
                            <span className='font-bold'>9.1. Versão Beta:</span> O Usuário compreende e aceita que o Wishly encontra-se em estágio "Beta". Isso significa que a plataforma é uma versão experimental, em fase de testes e aprimoramento constante, podendo conter erros, instabilidades técnicas ou falhas de segurança ainda não identificadas.
                        </p>
                        <p>
                            <span className='font-bold'>9.2. Isenção Total de Garantias:</span> O serviço é fornecido "COMO ESTÁ" e "CONFORME DISPONÍVEL", sem qualquer garantia de desempenho, disponibilidade ininterrupta ou adequação a um propósito específico. O Wishly não garante que o serviço funcionará sem erros ou que os dados armazenados estarão permanentemente seguros contra perdas técnicas.
                        </p>
                        <div className='flex flex-col gap-2'>
                            <span className='font-bold'>9.3. Direito de Encerramento e Descontinuidade:</span>
                            <p>O Wishly reserva-se o direito de, a qualquer momento e a seu exclusivo critério, sem aviso prévio e sem qualquer ônus ou penalidade:</p>
                            <ul className='list-disc pl-5 space-y-2'>
                                <li>Modificar, suspender ou encerrar permanentemente qualquer funcionalidade;</li>
                                <li>Encerrar a operação completa da plataforma por inviabilidade econômica, técnica ou mudança de estratégia de negócio;</li>
                                <li>Deletar bases de dados inteiras em caso de atualizações críticas de infraestrutura.</li>
                            </ul>
                        </div>
                        <p>
                            <span className='font-bold'>9.4. Limitação de Danos:</span> Em nenhuma hipótese o desenvolvedor ou o Wishly serão responsáveis por quaisquer danos diretos, indiretos, incidentais ou consequentes (incluindo, mas não se limitando a, perda de dados, frustração de expectativas de presentes ou interrupção de uso) decorrentes da utilização ou da impossibilidade de utilização da plataforma, mesmo que tenhamos sido avisados da possibilidade de tais danos.
                        </p>
                        <p>
                            <span className='font-bold'>9.5. Backup por conta do Usuário:</span> É de responsabilidade exclusiva do usuário manter cópias externas ou backups de qualquer informação importante inserida na plataforma, ciente de que o Wishly pode sofrer "resets" de banco de dados durante esta fase de testes.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}