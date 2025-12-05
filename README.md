# API de Autenticação de Usuários

Uma API robusta de autenticação desenvolvida com **Node.js**, **Express**, **TypeScript** e **MongoDB**, implementando criptografia de senhas e boas práticas de segurança.

---

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Arquitetura](#arquitetura)
- [Requisitos](#requisitos)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Uso](#uso)
- [Endpoints da API](#endpoints-da-api)
- [Modelo de Dados](#modelo-de-dados)
- [Segurança](#segurança)

---

## 🎯 Sobre o Projeto

Esta API fornece um sistema completo de **autenticação e cadastro de usuários**, utilizando a stack **MEN (MongoDB, Express, Node.js)** com **TypeScript**. O projeto implementa:

- ✅ Cadastro de novos usuários com validação
- ✅ Autenticação de usuários
- ✅ Criptografia de senhas com bcrypt
- ✅ Proteção contra duplicação de e-mails
- ✅ Tratamento de erros robusto
- ✅ Headers de segurança com Helmet
- ✅ CORS configurado

---

## 🚀 Tecnologias Utilizadas

### **Backend**
- **Node.js** (>= 14.0.0) - Runtime JavaScript
- **Express** (v5.1.0) - Framework web
- **TypeScript** (v5.9.3) - Superset tipado do JavaScript

### **Banco de Dados**
- **MongoDB** - Banco de dados NoSQL
- **Mongoose** (v9.0.0) - ODM para MongoDB

### **Segurança**
- **bcrypt** (v6.0.0) - Criptografia de senhas
- **Helmet** (v8.1.0) - Proteção de headers HTTP
- **CORS** (v2.8.5) - Controle de acesso cross-origin

### **Ferramentas**
- **dotenv** (v17.2.3) - Gerenciamento de variáveis de ambiente
- **PM2** (v6.0.14) - Process manager para produção
- **express-validator** (v7.3.1) - Validação de dados

---

## 🏗️ Arquitetura

O projeto segue o padrão **MVC (Model-View-Controller)** adaptado para APIs:

```
src/
├── config/
│   └── connectDb.ts       # Configuração e conexão com MongoDB
├── model/
│   └── userModel.ts       # Schema e modelo de usuário
├── controller/
│   └── userController.ts  # Lógica de negócio (criação e autenticação)
├── router/
│   ├── mainRouter.ts      # Roteador principal
│   └── userRoute.ts       # Rotas de usuário
└── server.ts              # Configuração e inicialização do servidor
```

---

## 📦 Requisitos

- **Node.js** >= 14.0.0
- **npm** >= 6.0.0
- **MongoDB** instalado localmente ou acesso a um cluster MongoDB Atlas

---

## ⚙️ Instalação

1. **Clone o repositório:**
```bash
git clone <url-do-repositorio>
cd apilogin
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Compile o TypeScript:**
```bash
npm run build
```

---

## 🔧 Configuração

1. **Crie um arquivo `.env` na raiz do projeto:**
```env
PORT=3333
MONGO_URI=mongodb://localhost:27017/nome_do_banco
```

2. **Configure sua string de conexão do MongoDB:**
   - Para MongoDB local: `mongodb://localhost:27017/apilogin`
   - Para MongoDB Atlas: `mongodb+srv://<usuario>:<senha>@cluster.mongodb.net/apilogin`

---

## 🎮 Uso

### **Modo Desenvolvimento**
```bash
npm run dev
```
O servidor será iniciado com **hot-reload** na porta configurada (padrão: 3333).

### **Modo Produção**
```bash
npm run build
npm start
```

---

## 📡 Endpoints da API

Base URL: `http://localhost:3333`

### **1. Criar Usuário**

**POST** `/v1/users`

Cria um novo usuário no sistema com senha criptografada.

**Request Body:**
```json
{
  "firstName": "João",
  "lastName": "Silva",
  "email": "joao@exemplo.com",
  "password": "senha123"
}
```

**Response - Sucesso (201):**
```json
{
  "message": "User created successfully",
  "userData": {
    "firstName": "João",
    "lastName": "Silva",
    "email": "joao@exemplo.com"
  }
}
```

**Response - Usuário já existe (409):**
```json
{
  "error": "User already exists"
}
```

---

### **2. Autenticar Usuário**

**GET** `/v1/users`

Autentica um usuário verificando e-mail e senha.

**Request Body:**
```json
{
  "email": "joao@exemplo.com",
  "password": "senha123"
}
```

**Response - Sucesso (200):**
```json
{
  "message": "User logged in successfully",
  "userData": {
    "firstName": "João",
    "lastName": "Silva",
    "email": "joao@exemplo.com"
  }
}
```

**Response - Credenciais inválidas (401):**
```json
{
  "error": "Invalid email or password"
}
```

**Response - Usuário não encontrado (404):**
```json
{
  "error": "User not found"
}
```

**Response - Dados faltando (400):**
```json
{
  "error": "Missing email or password"
}
```

---

## 🗄️ Modelo de Dados

### **User Schema**

```typescript
interface IUser {
  firstName: string;
  lastName: string;
  email: string;      // único no banco
  password: string;   // armazenado criptografado (bcrypt)
}
```

**Validações:**
- Todos os campos são obrigatórios
- O e-mail deve ser único no banco de dados
- A senha é automaticamente criptografada antes de ser salva

---

## 🔒 Segurança

### **Implementações de Segurança:**

1. **Criptografia de Senhas**
   - Utiliza bcrypt com salt rounds = 10
   - Senhas nunca são armazenadas em texto plano

2. **Headers HTTP Seguros**
   - Helmet configurado para proteção contra vulnerabilidades comuns

3. **CORS**
   - Cross-Origin Resource Sharing habilitado

4. **Validação de Entrada**
   - Validação de campos obrigatórios
   - Prevenção contra duplicação de e-mails

5. **Tratamento de Erros**
   - Respostas de erro padronizadas
   - Não expõe detalhes internos do sistema

---

## 👨‍💻 Autor

**Lucas Vida**
- Email: contato@lucasvida.com
- Website: https://lucasvida.com

---

## 📄 Licença

Este projeto está sob a licença **AGPL-3.0**.

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

---

**Desenvolvido com ❤️ usando Node.js, Express, TypeScript e MongoDB**