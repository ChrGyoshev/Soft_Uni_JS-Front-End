function monthPrinter(number) {
  if (number < 1 || number > 12) {
    console.log("Error!");
    return
  }

  months = ["January",'February','March','April','May','June','July','August','September','October','November','December']

  console.log(months[number-1]);

  
}


