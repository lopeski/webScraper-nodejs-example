const posts = require('../models/postBlogs.js');
var request = require('request');
const cheerio = require('cheerio');

module.exports = function () {
  request({
    method: 'GET',
    url: 'https://jovemnerd.com.br/bunker/categoria/games/'
  }, async (err, res, body) => {
    var list = [];
    console.log('estamo raspando da internet, aguarde...');
    cheerio(body).find('div > article > div').each(async function (index, element) {
      var cheirado = cheerio(element).text();
        try {
          const postada = await posts.create({ title:'Jovem Nerd', description: cheirado });
        } catch (e) {
          console.log('foi nao',e);
        }
      })
    });
}
