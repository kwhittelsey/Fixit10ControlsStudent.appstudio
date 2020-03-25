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

