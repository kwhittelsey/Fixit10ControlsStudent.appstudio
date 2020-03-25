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