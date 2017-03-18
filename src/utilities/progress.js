function Progress(progress) {
  var speechContainer = document.getElementsByClassName("js-speechContainer")[0];
  var speechDirection = document.getElementsByClassName("js-direction")[0];
  console.log('this is speech', speechContainer)

  speechContainer.style.left = "calc("+progress+"% - "+ speechContainer.offsetWidth*progress/100+"px)";
  speechDirection.style.left = "calc("+progress+"% - "+ speechDirection.offsetWidth*progress/100+"px - "+10*progress/100+"px +  "+10*(1/(progress+1))+"px)";
}

module.exports = Progress
