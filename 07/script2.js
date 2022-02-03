function convert2() {
    let tov = prompt(`Введіть  вартість першого товару:`);
    let tov2 = prompt(`Введіть  вартість другого товару:`);
    let tov3 = prompt(`Введіть  вартість третього товару:`);
    let tovars = Number(tov);
    let tovars = Number(tov);
    let tovars = Number(tov2);
    let tovars = Number(tov3);
    let sum = tov + tov2 + tov3;
    console.log(sum);
    if (sum < 100){
        alert (`достатньо грошей`)
    }
    else{
        alert (`не достатьно`)
    }
}