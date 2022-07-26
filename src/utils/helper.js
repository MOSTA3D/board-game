export function genArr(size){
    const arr = [];
    
    for(let i = 0 ; i < size ; i++){
        arr.push(i);
    }

    return arr;
}

export function shflArr(array){

    for(let i = array.length-1 ; i >= 0 ; i--){
        const j = Math.floor(Math.random() * i);
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    
    return array;
}
