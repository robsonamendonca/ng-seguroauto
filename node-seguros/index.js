const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const webpush = require("web-push");
//const vapidKeys = webpush.generateVAPIDKeys();
const vapidKeys = {
  publicKey: 'BJE1-j_5ZPyNYNer-BR4RNe7jjFr2Nm0odtjjtshG0IFdpiME2p_mkRF6qyP2O6w8WnTg4u_cO9PjzkfpN_eGAc',
  privateKey: 'O_gbkIlC3YB7GLZefCAsZPGCjljktnVE9MN7V7S5zHc'
}

webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

const {salvarSeguro,listarSeguros} = require('./seguro-service');

const app = express();
app.use(bodyParser.json());
app.use(cors({origin: true, credentials: true}));


app.route('/api/seguros').post(salvarSeguro);
app.route('/api/seguros').get(listarSeguros);

const HOST = 'localhost';
const PORT = 9000;

const httpServer = app.listen(PORT,HOST,()=> {
    console.log('Server rodando... em http://'+HOST+':'+PORT);
});
