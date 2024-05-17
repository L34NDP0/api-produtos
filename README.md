# api-produtos

PASSOS PARA A EXECUÇÃO DA API:

1) Rodar o comando 'npm install' para instalar as dependências do projeto;
2) Copiar as variáveis do arquivo '.env-sample' e colar no arquivo '.env';
3) Preencher o seu '.env' com os dados do seu banco de dados;
3) Rodar o seguinte script para inclusão da tabela 'tbl_produtos':

CREATE TABLE tbl_produtos (
  id_produto int(11) NOT NULL AUTO_INCREMENT,
  nome_produto varchar(255) DEFAULT NULL,
  marca_produto varchar(255) DEFAULT NULL,
  valor_produto decimal(10,2) DEFAULT NULL,
  validade_produto year(4) DEFAULT NULL,
  PRIMARY KEY (id_produto)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

4) Rodar o comando 'npm run start' para rodar a api