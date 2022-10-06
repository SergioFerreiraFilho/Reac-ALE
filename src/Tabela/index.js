export default function Tabela() {
let contatos = [
    {
        nome: 'Chiquim',
        telefone: '85 9 8888-0666',
        cidade: 'caucaia-ce'
    },
    {
        nome: 'Zofia Mansano',
        telefone: '85 9 9000-1234',
        cidade: 'Maracanau-ce'
    },
    {
        nome: 'Zelda a Princesalá',
        telefone: '85 9 9000-1234',
        cidade: 'Hyrule-ce'
    }
]


    return (
        <>
            <hr />

            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Cidade</th>
                    </tr>
                </thead>
                <tbody>
                    {contatos.map((cont) => {
                        return (
                            <tr>
                                <td>{cont.nome}</td>
                                <td>{cont.telefone}</td>
                                <td>{cont.cidade}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </>
    )
}