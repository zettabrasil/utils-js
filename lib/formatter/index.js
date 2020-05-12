import decimal from './decimal';

export default {
  /**
   * Result example: `10` => `10,00`
   * @param {Number | String} num
   * @param {Number} decimals
   * @returns {String}
   */
  decimal(num, decimals) {
    return decimal(num, decimals);
  },

  /**
   * Result example: `10` => `R$ 10,00`, or with abs `10` => `R$ 10`
   * @param {Number | String} num
   * @param {Boolean} abs
   * @returns {String}
   */
  decimalBRL(num, abs) {
    return `R$ ${decimal(num, abs ? 0 : 2)}`;
  },

  /**
   * Result example: `10` => `10,000 KG`
   * @param {Number | String} num
   * @param {Number} decimals
   * @returns {String}
   */
  decimalKG(num, decimals) {
    return `${decimal(num, decimals)} KG`;
  },

  /**
   * Result example: `10` => `0,10`
   * @param {Number | String} num
   * @returns {String}
   */
  decimalBank(num) {
    num = num / 100;
    return decimal(num, 2);
  },

  /**
   * Result example: `10` => `10,00%`, or with abs `10` => `10%`
   * @param {Number | String} num
   * @param {Boolean} abs
   * @returns {String}
   */
  decimalPer(num, abs) {
    return `${decimal(num, abs ? 0 : 2)}%`;
  },

  /**
   * Result example: `Ação` => `Acao`
   * @param {String} str
   */
  removeAccents(str = '') {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  },

  /**
   * Result example: `Example & test` => `Exampletest`
   * @param {String} str
   */
  removeSpecialChars(str = '') {
    return str.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '');
  },

  /**
   * Result example: `great super title` => `Great Super Title`
   * @param {String} title
   */
  toTitleCase(title = '') {
    return title.replace(
      /\w\S*/g,
      function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  },
};