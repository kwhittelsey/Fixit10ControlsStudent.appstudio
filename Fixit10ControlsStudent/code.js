let req1 = []

btnLogin.onclick=function(){
  req1 = Ajax("http://radlab.creighton.edu/appStudio/authLDAP.php", "POST", "j_username=" + inptNetID.value + "&j_password=" + inptPassword.value)
if (req1.status == 200) { //everthing worked
     lblResponse.hidden = false
     lblResponse.value = (`Your LDAP return code was ` + req1.responseText) //1 good, 0 bad
     NSB.MsgBox(lblResponse.value)
} else {
     // had problem with AJAX request
     lblResponse.hidden = false
     lblResponse.value = (`Error: ` + req1.status)
     NSB.MsgBox(lblResponse.value)
     }
}


btnShortcut.onclick=function(){
  ChangeForm(favFoods)
}
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
rdoDescribe.onclick=function(){
  lblOutput3.value = (`I would agree that you are a ${$("input[name=rdoDescribe]:checked").prop("value")} person too! `)
}

lbnShortcut4.onclick=function(){
  ChangeForm(ABfavExercises)
}
var exercises = ["pullups","pushups", "situps","jogging","plank","curls"]
var coreExercises = ["situps","plank"]
let response = ' '
let favExercises = ' '

ABfavExercises.onshow=function(){
  selExercises.clear()
  for (i = 0; i <= exercises.length - 1; i++) {
       selExercises.addItem(exercises[i])
       }
}

selExercises.onfocusout=function() {
     let exercisesChoice = (selExercises)
     let stringChoice = exercisesChoice.toString()
     let splitString = stringChoice.split(" , ")
     let joinString = splitString.join(" and ")
     favExercises = joinString
}

btnSubmit.onclick=function(){
     console.log(favExercises)
     if (favExercises == "situps and plank") {
          modOutput.toggle()
          modOutput.value = "You chose " + favExercises
     } else {
          modOutput.toggle()
          modOutput.value = "You did not choose the correct exercises."
          }
     }

lbnShortcut5.onclick=function(){
  ChangeForm(mobileNav)
}
hmbMenu.onclick=function(s){
  if (typeof(s) == "object") {
    return
  } else {
        switch(s) {
        case "Log In":
            ChangeForm(loginCU)
            break
        case "Favorite Foods":
            ChangeForm(favFoods)
            break
        case "Dessert Voting":
            ChangeForm(dessertVoting)
            break
        case "Describe Me":
            ChangeForm(describeYou)
            break
        case "Favorite Exercises":
            ChangeForm(ABfavExercises)
            break
          }
     }
}