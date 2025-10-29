# Desafio Técnico Fronteira Tec - Backend CRUD de Produtos

## Descrição do Sistema

Este projeto é a solução para o Desafio Técnico 1 (Backend) da Fronteira Tec. Consiste em uma **API REST** básica desenvolvida para gerenciar um **Catálogo de Produtos** (CRUD - Create, Read, Update, Delete).

Foi implementado com foco em:
* Clareza e organização de código.
* Uso da arquitetura MVC para separação de responsabilidades.
* Versionamento completo via Git (branching, commits e Pull Request).

---

| **Tecnologias** | JavaScript | Node.js | Express |

| **Arquitetura** | MVC |  Criação da API REST |

| **Persistência** | Dados em Memória | Array JS | Solução minimalista para o requisito de dados (in-memory). |

| **Middleware** | `cors` | - | Habilitado para permitir requisições de frontend/testes. |

---

## Estrutura do Projeto

O projeto segue o padrão **Model-View-Controller (MVC)**, adaptado para uma API.

* **`models/`**: Contém o `ProductModel.js`, que simula o acesso ao banco de dados e a lógica de persistência (CRUD) nos dados em memória.
* **`controllers/`**: Contém o `ProductController.js`, responsável por receber a requisição, validar dados, chamar o Model e formatar a resposta.
* **`routes/`**: Contém o `productRoutes.js`, que mapeia as URLs para as funções corretas do Controller.

---

## Executando o Projeto

### Pré-Requisitos
Certifique-se de ter o **Node.js** (versão LTS) e o gerenciador de pacotes **npm** instalados.

### Passos para Inicialização

1.  **Clone o Repositório**:
    ```bash
    git clone [INSIRA_AQUI_O_LINK_DO_SEU_REPOSITORIO]
    cd Desafio-FronteiraTec
    ```

2.  **Instale as Dependências**:
    ```bash
    npm install
    ```

3.  **Inicie o Servidor**:
    ```bash
    node server.js
    ```

**O projeto está disponível em `http://localhost:3000`**

---

## Endpoints da API (CRUD)

Todos os endpoints utilizam a rota base `/products`.

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| **GET** | `/products` | Lista todos os produtos. |
| **GET** | `/products/:id` | Retorna um produto por ID. |
| **POST** | `/products` | Cria um novo produto. |
| **PUT** | `/products/:id` | Atualiza produto existente, campos não especificados no body continuam com valor antigo. |
| **DELETE** | `/products/:id` | Remove um produto. |
| **RESET** | `/products/reset` | reseta o array persistente e coloca ID = 1 |

### Estrutura de Dados (Body para POST/PUT)

O corpo da requisição deve seguir a estrutura de produto definida:


```json
{
  "nome": "Nome do Produto",
  "descricao": "Descrição detalhada do item.",
  "preco": 199.99,
  "quantidade": 25
}
