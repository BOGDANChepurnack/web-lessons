function convert() {
    let km = prompt(`Введіть  кілометри:`);
    let kilometers = Number(km);
    console.log(typeof(kilometers));

    let miles = km / 0.5399568034557236;
    let vuzles = km / 0.00081699346405229;
    let mahas = km / 1224;
    

    alert(`${kilometers} кілометрів = ${miles.toFixed(2)} милях`);
    alert(`${kilometers} кілометрів = ${vuzles.toFixed(2)} вузлах`);
    alert(`${kilometers} кілометрів = ${mahas.toFixed(2)} махах`);
}

