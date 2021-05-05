import decimal from "./decimal";

export default {
  /**
   * Result example: `10` => `10,00`
   */
  decimal(num: number, decimals: number) {
    return decimal(num, decimals);
  },

  /**
   * Result example: `10` => `R$ 10,00`, or with abs `10` => `R$ 10`
   */
  decimalBRL(num: number, abs: boolean) {
    return `R$ ${decimal(num, abs ? 0 : 2)}`;
  },

  /**
   * Result example: `10` => `10,000 KG`
   */
  decimalKG(num: number, decimals: number) {
    return `${decimal(num, decimals)} KG`;
  },

  /**
   * Result example: `10` => `0,10`
   */
  decimalBank(num: number) {
    num = num / 100;
    return decimal(num, 2);
  },

  /**
   * Result example: `10` => `10,00%`, or with abs `10` => `10%`
   */
  decimalPer(num: number, abs: boolean) {
    return `${decimal(num, abs ? 0 : 2)}%`;
  },

  /**
   * Result example: `Ação` => `Acao`
   */
  removeAccents(str: string = "") {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  },

  /**
   * Result example: `Example & test` => `Exampletest`
   */
  removeSpecialChars(str: string = "") {
    return str.normalize("NFD").replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, "");
  },

  /**
   * Result example: `12,30` => `12.3`
   */
  toDecimal(value: string = "") {
    if (typeof value === "number") {
      return value;
    }

    if (typeof value !== "string") {
      throw new Error("toDecimal: the value must be to type string");
    }

    const v = value.split(",");

    if (v.length < 2) {
      return Number(v);
    }

    const v0 = this.removeSpecialChars(v[0]);
    const v1 = this.removeSpecialChars(v[1]);
    return Number(`${v0}.${v1}`);
  },

  /**
   * Result example: `great super title` => `Great Super Title`
   */
  toTitleCase(title: string = "") {
    return title.replace(
      /\w\S*/g,
      function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      },
    );
  },
};
