/**
 * Class OFF Node API Wrappper of OFF API
 */
declare class OFF {
    constructor(options: any, options.country: string);

    /**
     * It is used to set option in OFF instance
     * @return {object} An OFF Instance with option set
     */
    setOption(): any;

    /**
     * It is used to set country option in the OFF Instance
     * @param {string} country - Country value to set to the OFF Instance
     * @return {object} An OFF Instance with the country option set
     * @example
     * const worldOFF = new OFF()
     * const indiaOFF = worldOFF.country('in')
     */
    country(country: string): any;

    /**
     * It is used to get all brands.
     * @return {object} It returns a JSON containing all brands
     * @example
     * const worldOFF = new OFF()
     * const indiaOFF = worldOFF.country('in')
     * indiaOFF.getBrands().then(brands => {
     *   // use brands
     * })
     */
    getBrands(): any;

    /**
     * It is used to get a specific product using barcode
     * @param {number} barcode - Barcode of the product you want to fetch details
     * @return {object} It returns a JSON of the product
     * @example
     * const worldOFF = new OFF()
     * worldOFF.getProduct(7622210288257).then(product => {
     *   // use product
     * })
     */
    getProduct(barcode: number): any;

    /**
     * It is used to get all details of a specific brand
     * @param {string} brandName - Brand name of the brand you want to fetch details
     * @return {object} It returns a JSON with all details of the brand
     * @example
     * const worldOFF = new OFF()
     * worldOFF.getBrand('monoprix').then(brand => {
     *   // use brand
     * })
     */
    getBrand(brandName: string): any;

    /**
     * It is used to get all languages on the labels
     * @return {object} It returns a JSON with list of all languages
     * @example
     * const worldOFF = new OFF()
     * worldOFF.getLanguages().then(languages => {
     *   // use languages
     * })
     */
    getLanguages(): any;

    /**
     * It is used to get all Labels from the API
     * @return {object} It returns a JSON with all labels present on the API
     * @example
     * const worldOFF = new OFF()
     * worldOFF.getLabels().then(labels => {
     *   // use labels
     * })
     */
    getLabels(): any;

    /**
     * It is used to get all products beginning with the given barcode string
     * @param {string} beginning - Barcode string from which if the barcode begins, then product is to be fetched
     * @return {object} It returns a JSON of all products that begin with the given barcode string
     * @example
     * const worldOFF = new OFF()
     * worldOFF.getProductsByBarcodeBeginning('3596710').then(products => {
     *   // use products
     * })
     */
    getProductsByBarcodeBeginning(beginning: string): any;

}

