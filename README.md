## Plataforma RH Cadastro de Vagas e Curriculos com Acesso Autenticado

Identificação do Projeto

Nome do Projeto: Plataforma RH: Cadastro de Vagas e Currículos com Acesso Autenticado
Cliente: RH Connect (empresa fictícia)
Equipe de Desenvolvimento: Equipe de Desenvolvimento Angular
Responsável pelo Projeto: Equipe de Desenvolvimento Angular
Data de Início: A definir
Prazo Estimado: 2 semanas

Introdução e Contexto
Este projeto tem como objetivo criar uma aplicação web para a empresa  RH Connect, para ajudar na organização do processo de recrutamento e seleção de funcionários por meio de uma plataforma digital. A empresa necessita de um sistema que permita cadastrar vagas e currículos,  com controle de acesso via autenticação e autorização, diferenciando perfis de usuários administradores e comuns.
A aplicação será uma SPA (Single Page Application) desenvolvida com Angular, utilizando um back-end simulado via json-server para validação dos requisitos, ou seja, para facilitar o desenvolvimento e testes. O projeto será elaborado em etapas, que incluem levantamento de requisitos, criação de protótipos, diagramação, desenvolvimento e testes.
A plataforma vai garantir segurança no acesso e responsividade no layout, funcionando corretamente tanto em computadores quanto em dispositivos móveis.

Objetivos Geral


Este projeto tem como principal objetivo desenvolver uma aplicação Angular com back-end simulado que possibilite a gestão de vagas e currículos, com autenticação e autorização por tipo de usuário (Administrador e Usuário Comum), aplicando boas práticas de desenvolvimento web e garantindo uma interface responsiva e funcional.
Ou seja, proporcionar uma plataforma simples, mas funcional, para gerenciar o processo de recrutamento.
Objetivos SMART
Específico: Desenvolver uma aplicação web em Angular que permita a gestão de vagas e currículos com autenticação e autorização por perfil de usuário (Admin e Usuário Comum).


Mensurável: Implementar as funcionalidades de login, registro, controle de acesso e gerenciamento de dados, garantindo o funcionamento completo das operações até a entrega do projeto.


Atingível: Utilizar json-server para simular o back-end, facilitando o desenvolvimento e testes em um ambiente controlado.


Relevante: Atender à necessidade de uma plataforma de RH que possibilite o gerenciamento seguro e eficiente de vagas e currículos, melhorando o processo de recrutamento.


Temporal: Finalizar o desenvolvimento da aplicação, incluindo levantamento de requisitos, prototipagem, diagramação e codificação, dentro do prazo de 2 semanas estipulado para o projeto.


Descrição Técnica
Escopo Funcional
A aplicação web desenvolvida simula um sistema interno de recrutamento para a empresa fictícia RH Connect. As funcionalidades principais, organizadas por perfil de usuário, são:
Cadastro e autenticação de usuários:
Registro e login de candidatos.
Login de administradores.
Área do candidato (usuário comum):
Envio de currículo com formulário reativo.
Visualização de vagas publicadas.
Área administrativa (admin):
Cadastro, edição e exclusão de vagas.
Visualização de currículos enviados.
Funcionalidades complementares:


Navbar com navegação dinâmica conforme perfil logado.
Proteção de rotas com autenticação e autorização.
Sessão salva em LocalStorage.
Escopo Não Funcional
Tempo de resposta: máximo de 2 segundos por requisição (usando json-server, simulado localmente).
Compatibilidade: design 100% responsivo para desktop, tablets e smartphones.
Disponibilidade: como sistema simulado, é projetado com foco em confiabilidade local e boa organização para futura publicação (meta: 99,9% de uptime em produção real).
 Usabilidade: interfaces simples, intuitivas e com feedback visual.
 Segurança (nível básico): controle de sessão e autorização de acesso via guarda de rotas.

Tecnologias e Ferramentas Utilizadas
Linguagem:
TypeScript (Angular)
JSON
Framework Front-end:
Angular 16+
Estilização:
SCSS customizado, com uso de :root, variáveis e mixins
Banco de Dados (simulado):
json-server (arquivo db.json)
Serviços HTTP:
HttpClient (módulo nativo do Angular)


Formulários:
ReactiveFormsModule para criação de formulários reativos com validações
Gerenciamento de Sessão:
localStorage para persistência de dados do usuário logado
Versionamento de Código:
Git (controle de versão)
GitHub (armazenamento e colaboração)
Protótipos e Design:
Figma (para criação das telas e UX/UI)
Criação de Diagramas:
Draw.io (diagrams.net)
Lucidchart

Arquitetura do Sistema
A arquitetura segue o modelo modular em Angular, com separação clara entre:
Componentes (UI): login, registro, vagas, currículos, admin-vagas, navbar.
Serviços (services/): lógica de autenticação, CRUD de vagas e currículos.
Modelos (modelos/): definição das interfaces (Usuario, Vaga, Curriculo).
Guardas de Rota (guardas/): controle de acesso (AuthGuard, AdminGuard).
Simulação de Back-end: json-server, utilizando REST fake com persistência em db.json.

Requisitos
Funcionais  

RF-01 – O sistema deve permitir o cadastro de usuários comuns com dados obrigatórios: nome completo, e-mail, senha e confirmação de senha. 
RF-02 – O sistema deve permitir o login de usuários (comuns e administradores) a partir de credenciais válidas (e-mail e senha). 
RF-03 – O sistema deve validar credenciais no ato do login e bloquear acesso em caso de autenticação inválida. 
RF-04 – O sistema deve diferenciar perfis de usuário: “admin” e “comum” no momento do login, direcionando-os para a área correspondente. 
RF-05 – Usuários comuns devem poder preencher e enviar um currículo via formulário reativo, salvando no back-end (json-server). 
RF-06 – Usuários comuns devem poder visualizar a listagem de vagas disponível publicamente. 
 RF-07 – Administradores devem poder criar novas vagas com os campos: título, descrição, requisitos, local e data de publicação. 
 RF-08 – Administradores devem poder editar vagas existentes e excluir vagas cadastradas. 
RF--09 – Administradores devem poder visualizar currículos enviados pelos usuários comuns. 
 RF10 – O sistema deve restringir acesso a rotas de acordo com o tipo de usuário utilizando guardas de rota (AuthGuard e AdminGuard). 
RF-11 – O sistema deve armazenar informações de sessão no localStorage para manter o estado do usuário logado. 
RF-12 – A aplicação deve permitir logout do usuário, limpando os dados de sessão. 
RF-13 – As rotas protegidas devem exibir mensagem de acesso negado ao usuário não autorizado. 

 
Não Funcionais 

RNF-01 – A aplicação deve ser desenvolvida em Angular 16+ utilizando TypeScript. 
RNF-02 – O back-end deve ser implementado com json-server. 
RNF-03 – O sistema deve utilizar Reactive Forms com validação de campos obrigatórios, formatos e regras mínimas/máximas. 
RNF-04 – O layout deve ser responsivo, adaptando-se a dispositivos móveis e desktops. 
RNF-05 – O estilo visual deve utilizar SCSS customizado, com variáveis de cor e boas práticas de organização. 
RNF-06 – O controle de acesso deve ser implementado via CanActivate. 
RNF-07 – A arquitetura do código deve seguir boas práticas de organização por módulos, serviços, componentes e modelos. 
RNF-08 – As mensagens de erro e feedback devem ser claras e objetivas para o usuário. 
RNF-09 – O sistema deve ser compatível com os navegadores: Google Chrome, Brave e Microsoft Edge. 

 

Requisitos Legais e normativos 

RLN-01 – O sistema deve seguir os princípios da Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018), garantindo: 

Consentimento explícito do usuário para coleta e tratamento de dados. 

Armazenamento seguro de informações pessoais (mesmo em ambiente simulado). 

Possibilidade de exclusão dos dados mediante solicitação do usuário. 

RLN-02 – O sistema deve assegurar que dados de autenticação (senhas) sejam armazenados de forma segura. 
RLN-03 – O sistema deve utilizar boas práticas de segurança recomendadas pelo OWASP Top 10 para aplicações web. 
RLN-04 – Todas as comunicações e termos apresentados ao usuário devem estar em língua portuguesa e de forma clara, seguindo diretrizes de acessibilidade digital.

Entregas Finais 

Documentação:

-Escopo técnico completo (objetivos, requisitos, cronograma). 

-Manual do usuário e manual técnico resumido (instalação, uso e manutenção). 

Protótipos e Diagramas:

-Telas principais no Figma (login, registro, área admin, área candidato, vagas públicas). 

-Diagramas: fluxo de autenticação, casos de uso e classes. 

Código-Fonte: 

-Projeto Angular 16+ com SCSS customizado e estrutura modular. 

-Guardas de rota implementadas (AuthGuard, AdminGuard). 

-JSON Server configurado com db.json inicial. 

Sistema Funcional:

-SPA responsiva com autenticação e autorização por perfil. 

-CRUD de vagas (admin) e envio de currículos (usuário comum). 

-Sessão mantida via localStorage com opção de logout. 

Apresentação Final:

-Vídeo curto demonstrando as principais funcionalidades e restrições de acesso.


Cronograma Geral Plataforma RH (15/08/2025)

Semana
Atividade
Descrição



1


Reunião de planejamento 01
Organização do projeto, desenvolvimento do cronograma geral e definição das responsabilidades individuais de cada integrante da equipe.

1

Documentação
Levantamento de requisitos, definição do escopo, elaboração dos diagramas (fluxo, classes, uso).

1

Protótipo
criação do protótipo UI/UX através do Figma - todas as telas da plataforma





2




Reunião de Planejamento 02
Revisão dos requisitos, ajustes na documentação, planejamento detalhado da codificação e definição das responsabilidades individuais de cada integrante da equipe nesse processo de desenvolvimento dos códigos.





2

Desenvolvimento
/Codificação
Implementação da aplicação Angular: componentes, serviços, guardas de rota, formulários reativos e integração com json-server.


2

Testes e Ajustes
Testes das funcionalidades implementadas, correção dos erros e refinamento da interface.


2

Preparação da Apresentação Final
Preparação da gravação de demonstração, organização do código-fonte e documentação final para entrega.




Responsabilidades Individuais

Legenda: 
Etiqueta Rosa = Adrielly
Etiqueta Roxa  = Júlia
Etiqueta Azul  =  Endrew
Etiqueta Cinza = Eduardo


