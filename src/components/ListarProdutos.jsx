export default function ListaProduto({ listaProduto }) {
    return (
        <div className="lista-produtos-container">
            <h2>Lista de Produtos</h2>
            <ul className="lista-produtos">
                {listaProduto.map((produto) => (
                    <li key={produto.id} className="produto-item">
                        <p>{produto.nome}</p>
                        <img className="Produtoimg" src={produto.imagem} alt={produto.nome} />
                        <p>{produto.preco}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}