let btn = document.getElementById('btn');

btn.addEventListener('click',function(){


    //Input by Users
    let Bill_amount = document.getElementById('bill_amt').value;
    
    //Check bill amount can't be zero or negative
    if(Bill_amount<=0)
    {
        alert("Amount only in postive number");
    }
    let tip_percent = document.getElementById('tip').value;

    //Check tip percentage can't be zero or negative
    if(tip_percent<0)
    {
        alert("Tip% not in negative number");
    }

    //Check people can't be zero or negative
    let no_of_people = document.getElementById('no_pep').value;
    
    if(no_of_people<0)
    {
        alert("People only in positive number");
    } 

    // Output based on user input

    let tip_per_person = document.getElementById('tip_person').value = (tip_percent / 100 * Bill_amount) / no_of_people; //Calculate Tip Per Person

    let total_per_person= document.getElementById('total').value = parseFloat((Bill_amount / no_of_people)) + parseFloat(tip_per_person); //Calculate Total per person


    


})