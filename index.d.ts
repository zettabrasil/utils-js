declare type Formatter = {
  /**
   * Result example: `10` => `10,00`
   */
  decimal(num: number, decimals: number): string;

  /**
   * Result example: `10` => `R$ 10,00`, or with abs `10` => `R$ 10`
   */
  decimalBRL(num: number, abs: boolean): string;

  /**
   * Result example: `10` => `10,000 KG`
   */
  decimalKG(num: number, decimals: number): string;

  /**
   * Result example: `10` => `0,10`
   */
  decimalBank(num: number): string;

  /**
   * Result example: `10` => `10,00%`, or with abs `10` => `10%`
   */
  decimalPer(num: number, abs: boolean): string;

  /**
   * Result example: `Ação` => `Acao`
   */
  removeAccents(str: string): string;

  /**
   * Result example: `Example & test` => `Exampletest`
   */
  removeSpecialChars(str: string): string;

  /**
   * Result example: `12,30` => `12.3`
   */
  toDecimal(value: string): number;

  /**
   * Result example: `great super title` => `Great Super Title`
   */
  toTitleCase(title: string): string;
};

declare type GenerateGUID = {
  (): string;
};

export type Utils = {
  formatter: Formatter;
  generateGUID: GenerateGUID;
};

export default Utils;
