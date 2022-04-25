// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
function bookingConform(){
    setInterval(function(){
        if(userBalance<100){
            alert("Insufficient Balance!")
        }
        else{
            alert("Booking successfull!")
        }
    },3000)
   
}
    
