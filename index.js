const textarea = document.getElementById('Content') ;
const characterscount = document.getElementById('cCount') ;
const wordscount = document.getElementById('wCount') ;
textarea.oninput = () => {
    
    let characters = textarea.value ;
    characterscount.textContent = characters.replace(/\s/g,'').length ;

    let words = textarea.value.split(' ').filter((item)=>{
        return item != '' ;
    }) ;
    wordscount.textContent = words.length ;
    

    
} ;