# WebCRUD
Este projeto é um CRUD de produtos implementado utilizando o padrão de arquitetura MVC (Model-View-Controller) e conectado a um banco de dados SQL Server.

Funcionalidades:
<b>Listagem de Produtos: Visualize todos os produtos cadastrados </b>
<b>Adição de Produto: Adicione novos produtos ao sistema. </b>
<b>Adição de Produto: Adicione novos produtos ao sistema. 
<b>Edição de Produto: Atualize as informações de um produto existente. </b>
<b>Exclusão de Produto: Remova produtos do sistema. </b>

<h1> Pré-requisitos </h1>
Certifique-se de ter os seguintes itens instalados antes de executar o projeto:

Visual Studio 2022 para executar o código.

SQL Server Management Studio 19 (SSMS) para gerenciar o banco de dados.

Microsoft.EntityFrameworkCore
Microsoft.EntityFrameworkCore.Sqlite
Microsoft.EntityFrameworkCore.SqlServer
Microsoft.EntityFrameworkCore.Tools

Todos esses acima na versão 7.0.13

.NET SDK 7.0.403

SQL Server 2022


Configuração do Banco de Dados
Comandos do Migration executados para criação do banco

Add-Migration Criacao-Inicial -Context Contexto
Update-database -Context Contexto

Na string de conexão com o banco de dados no Program.CS
Substitua SEUSERVIDOR pelo endereço do seu servidor SQL.



Executando o Projeto
Abra o projeto no Visual Studio.

Certifique-se de que a configuração da conexão com o banco de dados está correta.

Execute o projeto.

Acesse a aplicação no navegador e comece a utilizar o CRUD de produtos.


