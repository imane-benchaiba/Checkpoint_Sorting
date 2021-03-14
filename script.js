function sort(array){
    let temp, j;
    for (let i = 0; i < array.length; i++) {
        temp = array[i];
        j = i;
        while(j>0 && array[j-1]>temp){
            array[j] = array[j-1];
            j--;
        }
        array[j] = temp;
    }
    return array;
}

sort([5,8,1,3,9,4,0]);