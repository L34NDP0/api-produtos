const express = require("express");
const router = express.Router();

const ProdutoService = require("./controllers/ProdutoController");

router.get("/produtos", ProdutoService.buscarTodos);
router.get("/produtos/:id_produto", ProdutoService.buscarUm);
router.post("/produtos", ProdutoService.inserir);
router.put("/produtos/:id_produto", ProdutoService.alterar);
router.delete("/produtos/:id_produto", ProdutoService.excluir);

module.exports = router;
