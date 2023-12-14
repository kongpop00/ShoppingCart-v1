
const CurrncyFomat = new Intl.NumberFormat('th-TH',{currency:"THB", style: "currency"})
export function FormatCurrency(number : number){
    return CurrncyFomat.format(number)
} 