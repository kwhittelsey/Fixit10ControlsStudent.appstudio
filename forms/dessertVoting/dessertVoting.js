var dessertList = ['Chocolate Cake','Cream Brulee','Cheesecake', 'Keylime Pie','Cherry Cobbler','Chocolate Chip Cookies']

dessertVoting.onshow=function(){
    drpDesserts.clear()   
    for (i = 0; i <= dessertList.length - 1; i++) 
        drpDesserts.addItem(dessertList[i])
}


drpDesserts.onclick=function(s){
    if (typeof(s) == "object") { 
      return                    
    } else {
      drpDesserts.value = s
      lblOutput2.value = (`You picked ${s} - that is a great choice!`)
    }
}


lbnShortcut3.onclick=function(){
  ChangeForm(describeYou)
}