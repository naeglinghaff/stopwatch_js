function Stopwatch() {

//not using this means these variables can't be fiddled with on the outside
    let duration = 0;
    let startTime = 0;
    let endTime = 0;
    let ongoing = 0;


  this.reset = function() {
    startTime = null;
    endTime = null;
    ongoing = false;
    duration = 0;
  }

  this.start = function() {
    if (ongoing) {
      throw new Error('Stopwatch is already running');
    } else {
      ongoing = true;
      startTime = new Date();
    }
  }

  this.stop = function() {
    if (!ongoing) {
      throw new Error('Stopwatch has not started yet');
    } else {
      ongoing = false;
      endTime = new Date();
      //returns miliseconds
      const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
      duration += seconds;
    }
    console.log(duration);
  }

  Object.defineProperty(this, 'duration', {
    get: function() {return duration;}
  })

}
