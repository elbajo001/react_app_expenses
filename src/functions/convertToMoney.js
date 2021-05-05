const formatAmount = (amount) => {
    // Intl es una función para acceder a métodos internacionales como monedas
    return new Intl.NumberFormat(
        'en-US',
        {style: 'currency', currency: 'USD', minimumFractionDigits: 2}
    ).format(amount);
}
 
export default formatAmount;