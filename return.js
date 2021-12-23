function rectangleArea(width, height) {
    let area = width * height;
  }
  console.log(rectangleArea(5, 7)) // Prints undefined

  // Did we write our function wrong? No! 
  // In fact, the function worked fine, and the computer did calculate the area as 35, but we didn’t capture it. 
  // So how can we do that? With the keyword return!

  function monitorCount(rows, columns){
    monitors = rows * columns;
    return monitors
  };
  
  const numOfMonitors = monitorCount(5, 4);
  console.log(numOfMonitors);

  20

  