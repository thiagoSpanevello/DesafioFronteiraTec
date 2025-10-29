
class productRepository {
    #products = [];
    #nextId = 1;

    getAll() {
        return this.#products;
    }

    getById(id) {
        if (!Number.isInteger(id) || id <= 0) return null;
        return this.#products.find(p => p.id === id) || null;
    }

    create({ nome, quantidade, preco, descricao }) {
        if (!nome || quantidade == null || preco == null || !descricao)
            throw new Error("Valores inválidos!");
        if (typeof preco !== "number" || preco <= 0) {
            throw new Error("Preço deve ser um número positivo");
        }
        if (!Number.isInteger(quantidade) || quantidade <= 0) {
            throw new Error("Quantidade deve ser um inteiro positivo");
        }
        const newProduct = {
            id: this.#nextId++,
            nome,
            quantidade,
            preco,
            descricao
        };
        this.#products.push(newProduct);
        return newProduct;
    }

    update(id, data) {
        if (!Number.isInteger(id) || id <= 0) throw new Error("Id inválido");

        const index = this.#products.findIndex(p => p.id === id);
        if (index === -1) return null;

        const oldProduct = this.#products[index];

        const updatedProduct = {
            ...oldProduct,
            nome: data.nome && data.nome.trim() !== "" ? data.nome : oldProduct.nome,
            descricao: data.descricao && data.descricao.trim() !== "" ? data.descricao : oldProduct.descricao,
            preco: (data.preco != null && typeof data.preco === "number" && data.preco > 0)
                ? data.preco
                : oldProduct.preco,
            quantidade: (data.quantidade != null && Number.isInteger(data.quantidade) && data.quantidade > 0)
                ? data.quantidade
                : oldProduct.quantidade
        };

        this.#products[index] = updatedProduct;
        return updatedProduct;
    }


    remove(id) {
        if (!Number.isInteger(id) || id <= 0) throw new Error("Id inválido");
        const index = this.#products.findIndex(p => p.id === id);
        if (index === -1) return null;
        return this.#products.splice(index, 1)[0];
    }

    reset() {
        this.#products = [];
        this.#nextId = 1;
    }
}

export default productRepository;