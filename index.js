const daysElement = document.querySelector(".days");
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");
const heading = document.querySelector("h1");
const counterTimer = document.querySelector(".counterTimer");

/* Converting second, minute, hour, day in milliseconds */
const second = 1000,
  minute = 60 * second,
  hour = 60 * minute,
  day = 24 * hour;

const timerFunction = () => {

  // Generating Current Date in mm/dd/yyyy format
    let now = new Date(),
        dd = String(now.getDate()).padStart(2, "0"),
        mm = String(now.getMonth() + 1).padStart(2, "0"),
        yyyy = now.getFullYear();

        now = `${mm}/${dd}/${yyyy}`;

        // console.log(now);
    

    // Taking Target Date from user    
    const enteredDay = prompt("Enter Day").padStart(2, "0");
    const enteredMonth = prompt("Enter Month").padStart(2, "0");

    // console.log(`${enteredMonth}/${enteredDay}/${yyyy}`);


    let targetDate = `${enteredMonth}/${enteredDay}/${yyyy}`;

  
    // Checking if target date is for next year
    if(now > targetDate){

      // console.log(`${enteredMonth}/${enteredDay}/${yyyy+1}`);
      targetDate =  `${enteredMonth}/${enteredDay}/${yyyy+1}`;
    }

   const intervalId = setInterval(() => {

    // converting target Date in Milliseconds
        const timer = new Date(targetDate).getTime();

    // Taking current Date in Milliseconds    
        const today = new Date().getTime();

         /* 1 = 70 
          ? = 700
    
          700/70
    
          remainder => 750 % 70  =>  remaider/hours -> no. of hours left 
    
          difference = (timerSetTime - todayCurrentTime) in milliseconds
    
          difference/day will gives the no. of days left
          
          (difference % day )/hour will give the no. of hours left
    
          (difference % hour)/minute will give the no. of minutes left
    
          (difference % minute) / second will give the no. of seconds left
     
        */
    
      // finding difference between target Date and today's Date
      const difference = timer - today;

      // finding left day, hours, minutes, seconds
      const leftDay = Math.floor(difference / day);
      const leftHour = Math.floor((difference % day) / hour);
      const leftMinute = Math.floor((difference % hour) / minute);
      const leftSecond = Math.floor((difference % minute) / second);  

      // showing timer in DOM
      daysElement.innerText = leftDay;
      hoursElement.innerText = leftHour;
      minutesElement.innerText = leftMinute;
      secondsElement.innerText = leftSecond;

      // console.log(`${leftDay}:${leftHour}:${leftMinute}:${leftSecond}`);

      // Stop Set Interval after reaching the target time
      if(difference < 0){
        counterTimer.style.display = "none";
        heading.innerText = "Time's Up";
        clearInterval(intervalId);
        
      }


    }, 0); 

};

timerFunction();
