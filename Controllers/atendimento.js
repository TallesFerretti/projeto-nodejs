module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Servidor esta fazendo um get'))

    app.post('/atendimentos', (req, res) => {
        console.log(req.body)
        res.send('Servidor esta fazendo um post')})
}
