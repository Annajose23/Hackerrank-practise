checkMagazine = (magazine, note) => {
    magazine_array = magazine.split(" ")
    note_array = note.split(" ")
    magazine_obj = {}

    magazine_array.forEach(item => {
        if(!magazine_obj[item]) magazine_obj[item] = 0
        magazine_obj[item] += 1
    });

    let isPossible = true;

    note_array.forEach(item => {
        if(magazine_obj[item]){
            magazine_obj[item] -= 1
            if(magazine_obj[item] < 0) {
                isPossible = false
            }
        }else{
            isPossible = false
        }
    })

    console.log(isPossible)

}



checkMagazine("two times two is not four four Four","two times two is four")
