function insertion(tab){
    for( let i =0 ; i< tab.length;i++){
        let current = tab[i]
        let j = i-1 
        while (j >= 0 && tab[j]>current){
            tab[j+1]= tab[j] 
            j -=1
        }
        arr[j+1] = current
    }
    console.log(tab)
}

insertion(arr)