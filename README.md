# API de Academia

## Visão Geral

Esta API foi desenvolvida para gerenciar uma academia, oferecendo uma parte administrativa onde é possível cadastrar alunos, instrutores, tipos de pacotes (ex: semestral), modalidades (ex: musculação) e, a partir disso, criar planos de academia. A API calcula automaticamente a data final do plano do aluno ao ser cadastrado com um plano específico. Além disso, professores podem cadastrar grupos musculares e criar exercícios dentro do sistema.

![Video da documentação](./public/videoDoc.gif)

## Tecnologias Utilizadas

- **Backend:** Node.js com Express
- **Banco de Dados:** MySQL2 com Knex.js
- **Autenticação:** JWT com jsonwebtoken e express-bearer-token
- **Criptografia de Senhas:** bcrypt
- **Documentação:** Swagger estilizado com Redoc-try

## Funcionalidades

### Administradores

- **Cadastro de Alunos:** Permite cadastrar novos alunos e associá-los a planos de academia, calculando automaticamente a data de término do plano.
- **Cadastro de Instrutores:** Adiciona novos instrutores ao sistema.
- **Tipos de Pacotes:** Criação e gerenciamento de pacotes de academia (ex: semestral, anual).
- **Modalidades:** Cadastro de diferentes modalidades de exercício (ex: musculação, natação).
- **Planos de Academia:** Criação de planos unindo tipos de pacotes e modalidades.

### Professores

- **Grupos Musculares:** Cadastro de grupos musculares para a criação de exercícios.
- **Exercícios:** Adição de exercícios dentro do sistema, associando-os a grupos musculares.

## Autenticação e Autorização

- **Login de Administrador:** Gera um token JWT que dá acesso a áreas administrativas do sistema.
- **Login de Professor:** Gera um token JWT que dá acesso a funcionalidades específicas para professores.

As senhas são armazenadas de forma segura usando bcrypt, e os tokens de autenticação são gerados com jsonwebtoken e capturados via express-bearer-token.

## Documentação da API

A documentação completa da API está disponível na rota [http://localhost:8080](http://localhost:8080). A documentação foi criada com Swagger e estilizada usando Redoc-try para uma melhor experiência de navegação e entendimento.

## Como Executar o Projeto

## Como Clonar, Rodar e Contribuir com o Projeto

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/Cassio-Ares/api_gym.git

2. **Instale as dependências:**

   ```bash
   npm install ou yarn install

3. **Configuração de Variáveis de Ambiente**  
   Renomeie o arquivo `exemplo.env` para `.env` na raiz do projeto. Em seguida, preencha as variáveis de ambiente com os dados correspondentes conforme descrito no arquivo. As variáveis de ambiente são carregadas automaticamente pelo pacote `dotenv`.

4. **Execute as migrações para criar as tabelas no banco de dados**
     ````
     yarn knex migrate:latest
