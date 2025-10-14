# Locadora de Filmes Online

Este é um projeto acadêmico de **Engenharia de Software**, cujo objetivo é desenvolver um **MVP (Minimum Viable Product)** de uma locadora de filmes online.  

O sistema permite que usuários possam:  
- Criar conta e realizar login  
- Navegar pelo catálogo de filmes  
- Adicionar/remover filmes do carrinho  
- Finalizar a compra com pagamento simulado  


##  Tecnologias Utilizadas

### Frontend
- **React.js** → criação das interfaces (HTML, CSS e JS).  

### Backend
- **Django (Python)** → responsável pela lógica do sistema e API.  
- **Django REST Framework (DRF)** → criação dos endpoints (CRUD de usuários, filmes e carrinho).  

### Banco de Dados 


##  Estrutura do Projeto

```bash
locadora-filmes/
│
├── locadora/                # Pasta principal do projeto Django
│   ├── settings.py          # Configurações do projeto
│   ├── urls.py              # Rotas principais
│   ├── wsgi.py              # Configuração para deploy
│   └── asgi.py              # Configuração para servidores async
│
├── filmes/                  # Aplicação principal (módulo de filmes)
│   ├── models.py            # Modelos de dados (Filme, Gênero, etc.)
│   ├── views.py             # Lógica de controle (listagem, detalhes, etc.)
│   ├── urls.py              # Rotas da aplicação de filmes
│   ├── templates/           # Páginas HTML
│   └── static/              # Arquivos estáticos (CSS, JS, imagens)
│
├── users/                   # Aplicação para usuários e autenticação
│   ├── models.py
│   ├── views.py
│   └── templates/
│
├── manage.py                # Comando para executar o projeto Django
└── README.md                # Documentação do projeto
