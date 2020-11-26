module.exports = {


  friendlyName: 'View categories home',


  description: 'Display "Categories home" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/categories/categories-home'
    }

  },


  fn: async function () {

    // Respond with view.
    return {
      currentSection: 'categories',
      help: {
        title: 'Всё просто! На этой странице вы можете создать новый раздел вашего сайта. Заполните форму, все обязательные поля (они помечены звёздочкой) и отправьте форму. Система управления контентом проверит данные на предмет ошибок. Если всё ОК! Ваш новый контент появится на сайте. Если есть ошибки, то они будут подсвечены красным цветом. Просто исправьте ошибки и отправьте повторно форму системе.',
        create: 'Создайте новый раздел вашего сайта. Например: "О нас", "Контакты" и т.п.'
      },
      seo: {}
    };

  }


};
