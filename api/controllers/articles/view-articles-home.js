module.exports = {


  friendlyName: 'View articles home',


  description: 'Display "Articles home" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/articles/articles-home'
    }

  },


  fn: async function () {

    // Respond with view.
    return {
      currentSection: 'articles',
      help: {
        title: `Всё просто! Раздел для добавления статьи в любой раздел сайта. Заполните форму, все обязательные поля (они помечены звёздочкой) и отправьте форму. Система управления контентом проверит данные на предмет ошибок. Если всё ОК! Ваш новый контент появится на сайте. Если есть ошибки, то они будут подсвечены красным цветом. Просто исправьте ошибки и отправьте повторно форму системе.`,
        create: 'Создайте новую статью (пост) и определитесь в каком разделе её разместить.'
      }, seo: {}
    };

  }


};
