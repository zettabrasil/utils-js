import decimal from './decimal';

export const formatter = {
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
   * Result example: `12,30` => `12.3`
   * @param {String} value
   * @returns {Number} `value` converted to a number type
   */
  toDecimal(value = '') {
    if (typeof value === 'number') {
      return value;
    }

    if (typeof value !== 'string') {
      throw new Error('toDecimal: the value must be to type string');
    }

    const v = value.split(',');

    if (v.length < 2) {
      return Number(v);
    }

    const v0 = this.removeSpecialChars(v[0]);
    const v1 = this.removeSpecialChars(v[1]);
    return Number(`${v0}.${v1}`);
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
