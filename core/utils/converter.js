class Converter {
    static toCamelCase(str) {
        return str.replace(/([-_][a-z])/gi, ($1) => {
            return $1.toUpperCase().replace("-", "").replace("_", "");
        });
    }
}

export default Converter;
