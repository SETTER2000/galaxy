module.exports = {


  friendlyName: 'View welcome page',


  description: 'Display the dashboard "Welcome" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/dashboard/welcome',
      locals: {
        layout: 'layouts/footer-a'
      },
      description: 'Display the welcome page for authenticated users.'
    },

  },


  fn: async function () {
    return {
      currentSection: 'root',
      help: {
        cmsName:sails.config.custom.cmsName,
        title: '— ситема управления контентом, сокращённо CMS от английского Content Manager System.',
        create: 'Система управления контентом (CMS) — это программное обеспечение, которое работает в вашем браузере. Она позволяет создавать, управлять и изменять веб-сайт и его содержимое, не имея никаких знаний в области программирования. Система управления контентом предоставляет вам графический интерфейс пользователя. В нём вы можете управлять всеми аспектами вашего сайта. Вы можете создавать и редактировать контент, добавлять изображения и видео, а также настраивать общий дизайн сайта.'
      },
      seo: {}
    };

  }


};
