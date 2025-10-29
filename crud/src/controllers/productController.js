import productRepository from "../models/productModel.js";

export default class ProductController {
    constructor() {
        this.repo = new productRepository();
    }

    getAll = (req, res) => {
        res.json(this.repo.getAll());
    };

    getById = (req, res) => {
        const id = Number(req.params.id);
        const product = this.repo.getById(id);
        if (!product) return res.status(404).json({ message: 'Produto não encontrado' });
        res.json(product);
    };

    create = (req, res) => {
        try {
            const product = this.repo.create(req.body);
            res.status(201).json(product);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    };

    update = (req, res) => {
        try {
            const id = Number(req.params.id);
            const updated = this.repo.update(id, req.body);
            if (!updated) return res.status(404).json({ message: 'Produto não encontrado' });
            res.json(updated);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    };

    remove = (req, res) => {
        const id = Number(req.params.id);
        const removed = this.repo.remove(id);
        if (!removed) return res.status(404).json({ message: 'Produto não encontrado' });
        res.json(removed);
    };

    reset = (req, res) => {
        this.repo.reset();
        res.json({ message: 'Repositório resetado' });
    };
}
