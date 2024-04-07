// Darsda Bajarmaganlarim ustoz.
function raqamliIldiz(son) {
    let raqamlar = son.toString().split('').map(Number);
    let ildiz = raqamlar.reduce((total, current) => total + current, 0);
       if (ildiz > 9) {
        return raqamliIldiz(ildiz);
    }
    return ildiz;
}
let kiruvchiMalumotlar = [2000, 1924];
let chiquvchiMalumotlar = kiruvchiMalumotlar.map(son => raqamliIldiz(son));
console.log(chiquvchiMalumotlar); 
