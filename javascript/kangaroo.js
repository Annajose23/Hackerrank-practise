function kangaroo(x1, v1, x2, v2) {
    if(x1 > x2 && v1 > v2) return "NO";
    else if((x2 > x1 && v2 > v1)) return "NO";
    else {
for(i =1;i < 10; i++){
    if(x1 + i* v1 === x2 + i * v2)
        return "YES";
    
    return "NO";
}
}

}

kangaroo(0, 3, 4, 2);