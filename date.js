
function latestDate(){
const today = new Date();
const options = {
  weekday: 'long', 
  month: 'long', 
  day: 'numeric'
};
return today.toLocaleDateString("en-US", options);

};

function workHeading(){
  return "Work List";
}
export {latestDate, workHeading};




