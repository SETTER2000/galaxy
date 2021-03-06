/**
 * Module dependencies
 */

const util = require('util');
const path = require('path');
const _ = require('@sailshq/lodash');


/**
 * sails-generate-component
 *
 * Usage:
 * `sails generate component`
 *
 * @description Generates a component.
 * @docs https://sailsjs.com/docs/concepts/extending-sails/generators/custom-generators
 */

module.exports = {

  /**
   * `before()` is run before executing any of the `targets`
   * defined below.
   *
   * This is where we can validate user input, configure default
   * scope variables, get extra dependencies, and so on.
   *
   * @param  {Dictionary} scope
   * @param  {Function} done
   */

  before: function (scope, done) {

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // // scope.args are the raw command line arguments.
    // scope.args - это необработанные аргументы командной строки.
    // //
    // // e.g. if someone runs:
    // // например если кто-то запускает:
    // // $ sails generate component user find create update
    // // то scope.args - содержит `['user', 'find', 'create', 'update']`
    // // then `scope.args` would be `['user', 'find', 'create', 'update']`
    if (_.isUndefined(scope.args[0])) {
      return done(new Error('Пожалуйста, укажите имя для этого компонента (Please provide a name for this component).'));
    }
    if (!_.isString(scope.args[0])) {
      return done(new Error('Expected a string for `scope.args[0]`, but instead got: ' + util.inspect(scope.args[0], {depth: null})));
    }
    //
    // // Provide defaults for the scope.
    // Укажите значения по умолчанию для области.
    _.defaults(scope, {
      createdAt: new Date()
    });
    //
    // // Decide the output filename for use in targets below:
    // Определите имя выходного файла для использования в целях ниже
    scope.filename = scope.args[0];
    //
    // // Add other stuff to the scope for use in our templates:
    // Добавьте другие вещи в область для использования в ваших шаблонах
    scope.whatIsThis = 'an example file created at '+scope.createdAt;
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    // When finished, trigger the `done` callback to begin generating
    // files/folders as specified by the `targets` below.
    // Когда закончим, запускаем обратный вызов `done` для начала генерации
    // файлы / папки, как указано в `target` ниже.
    // > Or call `done()` with an Error for first argument to signify a fatal error
    // > and halt generation of all targets.
    return done();
  },


  /**
   * The files/folders to generate.
   * @type {Dictionary}
   */
  targets: {

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // • e.g. create a folder:
    // ```
    // './hey_look_a_folder': { folder: {} }
    // ```
    //
    // • e.g. create a dynamically-named file relative to `scope.rootPath`
    // (defined by the `filename` scope variable).
    // Например, создать файл с динамическим именем относительно `scope.rootPath`
    // (определяется переменной области имени файла).
    //
    // The `template` helper reads the specified template, making the
    // entire scope available to it (uses underscore/JST/ejs syntax).
    // Then the file is copied into the specified destination (on the left).
    // Помощник `template` читает указанный шаблон, делая
    // вся доступная ему область (использует синтаксис подчеркивания / JST / ejs).
    // Затем файл копируется в указанное место назначения (слева).
    // ```
    // './:filename': { template: 'example.template.js' },
    './assets/js/components/:filename.component.js' : {template: {templatePath: 'component.template', force: false } },
    // ```
    //
    // • See https://sailsjs.com/docs/concepts/extending-sails/generators for more documentation.
    // (Or visit https://sailsjs.com/support and talk to a maintainer of a core or community generator.)
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  },


  /**
   * The absolute path to the `templates` for this generator
   * (for use with the `template` and `copy` builtins)
   *
   * @type {String}
   */
  templatesDirectory: path.resolve(__dirname, './templates')

};
