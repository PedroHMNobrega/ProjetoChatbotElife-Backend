module.exports = {
    webhook: async (req, res) => {
        var intentName = req.body.queryResult.intent.displayName;
        res.json({"fulfillmentMessages" : [
            {
                "payload": {
                    "facebook": {
                        "attachment": {
                            "payload": {
                                "template_type": "generic",
                                "elements": [
                                    {
                                        "buttons": [
                                            {
                                                "title": "Acessar",
                                                "url": "https://globoesporte.globo.com/futebol/futebol-internacional/liga-dos-campeoes/noticia/mbappe-ainda-manca-mas-viaja-com-psg-para-enfrentar-manchester-city.ghtml",
                                                "type": "web_url"
                                            }
                                        ],
                                        "image_url": "https://i1.wp.com/blogsucessoempresarial.com/wp-content/uploads/2018/07/copa-do-mundo-mbape.jpg?fit=1200%2C641&ssl=1",
                                        "default_action": {
                                            "webview_height_ratio": "tall",
                                            "messenger_extensions": false,
                                            "type": "web_url",
                                            "url": "https://globoesporte.globo.com/futebol/futebol-internacional/liga-dos-campeoes/noticia/mbappe-ainda-manca-mas-viaja-com-psg-para-enfrentar-manchester-city.ghtml"
                                        },
                                        "subtitle": "Descricao Noticia",
                                        "title": "Titulo Noticia Legal"
                                    }
                                ]
                            },
                            "type": "template"
                        }
                    }
                },
                "platform": "FACEBOOK"
            }
        ]});
    },
}
