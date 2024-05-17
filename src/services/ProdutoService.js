const db = require("../database/mysql");

module.exports = {
  buscarTodos: () => {
    return new Promise((resolve, reject) => {
      const query = `
                    SELECT
                      id_produto,
                      nome_produto,
                      marca_produto,
                      valor_produto,
                      validade_produto
                    FROM db_produtos.tbl_produtos`;
      db.query(query, (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results);
      });
    });
  },
  buscarUm: (id_produto) => {
    return new Promise((resolve, reject) => {
      const query = `
                    SELECT 
                      id_produto,
                      nome_produto,
                      marca_produto,
                      valor_produto,
                      validade_produto
                    FROM db_produtos.tbl_produtos 
                    WHERE id_produto = ?`;
      db.query(query, [id_produto], (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        if (results.length > 0) {
          resolve(results[0]);
        } else {
          resolve(false);
        }
      });
    });
  },

  inserir: (nome_produto, marca_produto, valor_produto, validade_produto) => {
    return new Promise((resolve, reject) => {
      const query = `
                    INSERT INTO db_produtos.tbl_produtos 
                      (nome_produto, marca_produto, valor_produto, validade_produto)
                    VALUES 
                      (?, ?, ?, ?)`;
      db.query(
        query,
        [nome_produto, marca_produto, valor_produto, validade_produto],
        (error, results) => {
          if (error) {
            reject(error);
            return;
          }
          resolve(results.insertId);
        }
      );
    });
  },

  alterar: (
    id_produto,
    nome_produto,
    marca_produto,
    valor_produto,
    validade_produto
  ) => {
    return new Promise((resolve, reject) => {
      const query = `
                    UPDATE db_produtos.tbl_produtos 
                    SET 
                      nome_produto = ?, 
                      marca_produto = ?, 
                      valor_produto = ?, 
                      validade_produto = ? 
                    WHERE id_produto = ?`;
      db.query(
        query,
        [
          nome_produto,
          marca_produto,
          valor_produto,
          validade_produto,
          id_produto,
        ],
        (error, results) => {
          if (error) {
            reject(error);
            return;
          }
          resolve(results);
        }
      );
    });
  },
  excluir: (id_produto) => {
    return new Promise((resolve, reject) => {
      const query = `
                    DELETE FROM 
                      db_produtos.tbl_produtos 
                    WHERE id_produto = ?`;
      db.query(query, [id_produto], (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        if (results.length > 0) {
          resolve(results[0]);
        } else {
          resolve(false);
        }
      });
    });
  },
};
