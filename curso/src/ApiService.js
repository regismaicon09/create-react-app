
const ApiService = {
    ListaEmpresas: () => {
        return fetch('http://sysdrogariaplustelevendas.empresarial.ws/listaEmpresas.php')
            .then(res => res.json());
    },

    CriaEmpresa: empresa => {

        return fetch('http://sysdrogariaplustelevendas.empresarial.ws/listaEmpresas.php', {
            method: 'POST',
            headers: { 'content-type': 'application/json' }, body: empresa
        })
            .then(res => res.json());

    },
    RemoveEmpresa: id => {

        return fetch('http://sysdrogariaplustelevendas.empresarial.ws/listaEmpresas.php/${id}', {
            method: 'DELETE', headers: { 'content-type': 'application/json', }

        })
            .then(res => res.json());

    },

}

export default ApiService;