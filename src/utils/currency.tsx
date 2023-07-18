export function formatPrice(value: number, locale: string, currency: string) {
    const formatter = new Intl.NumberFormat(locale, {
        currencyDisplay: 'symbol',
        style: 'currency',
        currency,
        minimumFractionDigits: 2
    })
    return `${formatter.format(value)} ${currency}`
}
