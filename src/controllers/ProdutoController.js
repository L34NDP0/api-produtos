const ProdutoService = require("../services/ProdutoService");

module.exports = {
  buscarTodos: async (req, res) => {
    const produtos = await ProdutoService.buscarTodos();
    return res.json({
      success: true,
      data: produtos,
    });
  },
  buscarUm: async (req, res) => {
    const { id_produto } = req.params;
    const produto = await ProdutoService.buscarUm(id_produto);
    if (produto) {
      return res.json({
        success: true,
        data: produto,
      });
    } else {
      return res.json({
        success: false,
        error: "Não foi possível localizar o produto.",
      });
    }
  },

  inserir: async (req, res) => {
    const { nome_produto, marca_produto, valor_produto, validade_produto } =
      req.body;
    if (nome_produto && marca_produto && valor_produto && validade_produto) {
      const id_produto = await ProdutoService.inserir(
        nome_produto,
        marca_produto,
        valor_produto,
        validade_produto
      );
      const result = {
        id_produto,
        nome_produto,
        marca_produto,
        valor_produto,
        validade_produto,
      };
      res.json({ success: true, data: result });
    } else {
      return res.json({
        success: false,
        error: "Não foi possível incluir um novo produto.",
      });
    }
  },

  alterar: async (req, res) => {
    const { id_produto } = req.params;
    const { nome_produto, marca_produto, valor_produto, validade_produto } =
      req.body;

    if (
      id_produto &&
      nome_produto &&
      marca_produto &&
      valor_produto &&
      validade_produto
    ) {
      await ProdutoService.alterar(
        id_produto,
        nome_produto,
        marca_produto,
        valor_produto,
        validade_produto
      );
      return res.json({
        success: true,
        message: "Alterado com sucesso.",
      });
    } else {
      return res.json({
        success: false,
        error: "Não foi possível atualizar o produto.",
      });
    }
  },
  excluir: async (req, res) => {
    const { id_produto } = req.params;

    const produto = await ProdutoService.buscarUm(id_produto);
    if (produto) {
      await ProdutoService.excluir(id_produto);
      return res.json({
        success: true,
        message: "Excluído com sucesso.",
      });
    } else {
      return res.json({
        success: false,
        error: "Não foi possível localizar o produto a ser excluído.",
      });
    }
  },
};
