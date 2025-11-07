export const bootstrap = () => {
    const zipCodeMask = (value) => {
        //type guard
        if (typeof value === 'number') {
            value = value.toString();
        }
        value = value.replace(/\D/g, '');
        value = value.replace(/(\d{5})(\d)/, '$1-$2');
        return value; // replace retorna somente uma string e não um number
    };
    const zipCode = zipCodeMask('10000000'); // 10000-000
    console.log(zipCode);
    const zipCode2 = zipCodeMask(20000000); // 20000-000
    console.log(zipCode2);
};
