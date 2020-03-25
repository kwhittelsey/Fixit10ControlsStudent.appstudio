let goodFoods = ["Pizza","Apples","Cookies","Sushi","Pasta","Steak"]

favFoods.onshow=function(){
    lstFood.clear()   
    for (i = 0; i <= goodFoods.length - 1; i++) 
        lstFood.addItem(goodFoods[i])
}

lstFood.onclick=function(goodFoods){
  if (typeof(goodFoods) == "object") {
    return
  } else {
  let textChoice = NSB.$("lstFood_" + goodFoods).textContent
  lblOutput.value = (`You picked ${textChoice} - that is a great choice!`)
  }
}

lbnShortcut2.onclick=function(){
  ChangeForm(dessertVoting)
}