import './App.css';
import Schedule from './schedule';

const detectDate = () => {
  let inputVal = document.querySelector("#inputd");
  console.log(inputVal.value)
  let input_time = document.querySelector("#input-time");
  console.log(input_time.value)
}
const detectTime = () => {
  let input_time = document.querySelector("#input-time");
  console.log(input_time.value)
}
let count = 0;
const updateStatus = () => {
  count++;
  console.log(count);
  let status_count = document.getElementById("status_count");
  console.log(status_count);
  status_count.innerHTML = `${count}`;

  var fra = document.getElementById("first");
  console.log(fra.value)
  // var el = document.querySelector(".el");
  // el.innerHTML = `${fra.value}`

  const tasks = document.querySelector(".tasks");
  let newDocs = document.createElement("div");
  tasks.appendChild(newDocs);
  console.log(newDocs);

  notifyMe();
  function notifyMe() {
    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    }
  
    // Let's check whether notification permissions have already been granted
    else if (Notification.permission === "granted") {
      // If it's okay let's create a notification
      var notification = new Notification(`${fra.value}`);
    }
  
    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
          var notification = new Notification("Hi there!");
        }
      });
    }
  
    // At last, if the user has denied notifications, and you
    // want to be respectful there is no need to bother them any more.
  }


  newDocs.innerHTML = `<div className="tasks">
  <div className="taskEl">
    <div className="el">${fra.value}</div>
  </div>
</div>`

}
function App() {
  return (
    <div className="App">
      <Schedule />
      <div className="wrapper">
        <div className="content">
          <div className="change">
            {/* <input type="datetime-local" name="" id="inputd" onChange={detect}/> */}
            <input type="date" name="" id="inputd" onChange={detectDate}/>
            <input type="time" name="" id="input-time" onChange={detectTime}/>
          </div>
          <div className="input">
            <input type="text" id='first' placeholder='Enter your Task' />
          </div>
          <div className="tasks">
            <div className="taskEl">
              <div className="el">Buy Milk</div>
            </div>
          </div>
          <div className="add_button">
            <button id="add_task" onClick={updateStatus}>Schedule</button>
          </div>
          <div className="status">You have <span id='status_count'>{count}</span> notification</div>
        </div>
      </div>
    </div>
  );
}

export default App;
