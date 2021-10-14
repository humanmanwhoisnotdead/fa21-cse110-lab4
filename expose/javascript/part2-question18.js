function tellTime() {
  let d = new Date()
  let time = d.toLocaleTimeString();
  console.log(time)
}

var intervalID = setInterval(tellTime , 1000);