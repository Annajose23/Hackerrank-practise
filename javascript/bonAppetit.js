function bonAppetit(bill, k, b) {
var sum = 0;
for(var i = 0; i < bill.length; i ++){
    sum += bill[i];
    if(b === (sum-bill[k])/2){
        return "Bon Appetit";
    }else
    return b - (sum-bill[k])/2;
}
}

bonAppetit([3, 10, 2, 9], 1, 12);