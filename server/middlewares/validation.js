const { body } = require('express-validator/check');

const inputValidation = [
  body('name')
    .not()
    .isEmpty()
    .trim()
    .withMessage('campo nome obrigatório'),
  body('artist')
    .not()
    .isEmpty()
    .trim()
    .withMessage('campo artista obrigatório'),
  body('imageUrl')
    .isURL()
    .trim()
    .withMessage('URL de imagem não é válida'),
  body('musics')
    .custom(musics => {
      console.log('musics ', musics);

      if (musics.some(music => music.name.trim().length === 0)) {
        return Promise.reject();
      }

      return Promise.resolve();
    })
    .withMessage('campo de música não pode ser vazio')
];

module.exports = inputValidation;
