parasails.registerPage('categories-home', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
    categories: [],
    maxLength: 30,
    drawer: false,
    formLabelAlign: {
      name: '',
      region: '',
      type: ''
    },
    ruleForm: {
      name: '',
      url: '',
      date1: '',
      date2: '',
      delivery: false,
      type: [],
      resource: '',
      desc: ''
    },
    rules: {
      name: [
        {required: true, message: 'Please input Activity name', trigger: 'blur'},
        {min: 3, max: this.maxLength, message: ' Длина должна быть от 3 до 30', trigger: 'blur'}
      ],
      region: [
        {required: true, message: 'Please select Activity zone', trigger: 'change'}
      ],
      date1: [
        {type: 'date', required: true, message: 'Please pick a date', trigger: 'change'}
      ],
      date2: [
        {type: 'date', required: true, message: 'Please pick a time', trigger: 'change'}
      ],
      type: [
        {type: 'array', required: true, message: 'Please select at least one activity type', trigger: 'change'}
      ],
      resource: [
        {required: true, message: 'Please select activity resource', trigger: 'change'}
      ],
      desc: [
        {required: true, message: 'Please input activity form', trigger: 'blur'}
      ]
    }
  },

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function () {
    _.extend(this, SAILS_LOCALS);

    // Подключаемся к комнате kennel
    io.socket.get(`/api/v1/categories/list`, function gotResponse(body, response) {
    });
    // Принимаем данные по событию list-*
    io.socket.on('list-category', (data) => {
      this.dogs = this.dogsEditList = this.filterDogs = _.isNull(data) ? [] : data;
    });

    // Принимаем данные по событию list-*
    io.socket.on('settings-update', data => {
      this.me.settings = data;
    });

  },
  mounted: async function () {
    //…
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    async formPosition() {
      if(_.isEmpty(this.me.settings)) return;
      let data={};
      data =  Object.assign({},this.me);
      await io.socket.put('/api/v1/settings/update-settings', data, (data, jwr) => {
        console.log('jwr.statusCode:: ', jwr.statusCode);
      });
    },
  }
});
