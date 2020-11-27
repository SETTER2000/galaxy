module.exports = {


  friendlyName: 'Update settings',


  description: '',


  inputs: {
    settings: {
      type: 'ref',
      description: 'The new, unencrypted password.',
      example: '{form:{position:"left"}}',
      required: true
    }
  },


  exits: {
    success: {
      outputDescription: 'Information about the newly created record.',
      // Устанавливаем выходной тип данных. Хорошая практика для документирования кода.
      outputType: {
        id: 'number',
        imageSrc: 'string'
      },
    },
    badRequest: {
      description: 'No image upload was provided.',
      responseType: 'badRequest'
    },
  },

  fn: async function (inputs, exits) {
    console.log('inputs:: ' , inputs);
    const req = this.req;
    // Убедитесь, что это запрос сокета (не традиционный HTTP)
    if (!req.isSocket) {
      throw 'badRequest';
    }
    // Подключить сокет, который сделал запрос, к комнате «kennel».
    await sails.sockets.join(req, 'user');

    let update = await User.updateOne({id: req.me.id}).set({settings:inputs.settings});

    // Если не создан возвращаем ошибку.
    if (!update) {
      throw 'badRequest';
    }

   let user = await User.findOne(req.me.id);
    await sails.sockets.broadcast('user', 'settings-update', user.settings);
    return exits.success();
  }


};
