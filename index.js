function scuberGreetingForFeet(num){
  let response="";
  if (num <= 400) {
    response = "This one is on me!"
  } else if (num > 400 && num <= 2000) {
    response = "That will be twenty bucks."
  } else if (num > 2000 && num <= 2500) {
    response = "I will gladly take your thirty bucks."
  } else if (num > 2500) {
    response = "No can do."
  }
  return response
}

function ternaryCheckCity(city){
  // Write your code here!
  let response2;
  city === "NYC" ? (response2="Ok, sounds good.") : (response2="No go.")
  return response2
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let response3;
  switch(tip) {
    case 'generous':
      response3="Thank you so much.";
      break;
    case 'not as generous':
      response3="Thank you.";
      break;
    default:
      response3="Bye."
  }
  return response3
}