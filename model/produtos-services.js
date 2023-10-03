const todosProdutos = async () => {
    try {
        const res = await fetch("http://localhost:3000/produtos");
        return await res.json();
    } catch (error) {
        return console.log(error);
    }
}

const getProdutoPorId = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/produtos/${id}`);
        return await res.json();
    } catch (error) {
        console.error(error);
        return null;
    }
};

const criaProduto = async (url, categoria, titulo, preco, descricao) => {
    try {
        const res = await fetch("http://localhost:3000/produtos", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                url: url,
                categoria: categoria,
                titulo: titulo,
                preco: preco,
                descricao: descricao,
            })
        });
        return await res.json();
    } catch (error) {
        console.error(error);
    }
}

const atualizaProduto = async (id, url, categoria, titulo, preco, descricao) => {
    try {
        const res = await fetch(`http://localhost:3000/produtos/${id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                url: url,
                categoria: categoria,
                titulo: titulo,
                preco: preco,
                descricao: descricao,
            })
        });
        return await res.json();
    } catch (error) {
        console.error(error);
    }
}

const deletarProduto = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/produtos/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            },
        });
        return await res.json();
    } catch (error) {
        console.error(error);
    }
}

const buscarProduto = async (termoDeBusca) => {
    try {
        const res = await fetch(`http://localhost:3000/produtos?q=${termoDeBusca}`);
        return await res.json();
    } catch (error) {
        console.error(error);
    }
}

export const produtosServicos = {
    todosProdutos,
    getProdutoPorId,
    criaProduto,
    atualizaProduto,
    deletarProduto,
    buscarProduto
}