const express = require('express');
const axios = require('axios');
const app = express();

const TARGET = process.env.TARGET || '';
const USER = process.env.USER || '';
const PASS = process.env.PASS || '';

app.get('*', async (req, res) => {
    try {
        const finalUrl = `${TARGET}${req.url}`.replace('username=88778851', `username=${USER}`).replace('password=cspro', `password=${PASS}`);
        const response = await axios.get(finalUrl, { responseType: 'arraybuffer', timeout: 15000 });
        res.set(response.headers);
        res.send(response.data);
    } catch (e) {
        res.status(500).send("Erro de Conexão");
    }
});

app.listen(process.env.PORT || 3000, () => {
    console.log("SERVIDOR_ONLINE");
});
