document.getElementById("loan-form").addEventListener("submit", calculateResults);

function calculateResults(e){

    const UIamount = document.querySelector('#amount');
    const UIinterest = document.querySelector('#interest');
    const UIyears = document.querySelector('#years');
    const UImonthlyPayment = document.querySelector("#monthly-payment");
    const UItotalPayment = document.querySelector('#total-payment');
    const UItotalInterest = document.querySelector('#total-interest');

    const principal = parseFloat(UIamount.value);
    const calculatedInterest = parseFloat(UIinterest.value) / 100 / 12;
    const calculatedPayment = parseFloat(UIyears.value) * 12;

        // compute monthly payments
    const x = Math.pow(1 + calculatedPayment, calculatedInterest);
    const monthly = (principal*x*calculatedInterest)/(x-1);

    if(isFinite(monthly)){
        UImonthlyPayment.value = monthly.toFixed(2);
        UItotalPayment.value = (monthly*calculatedPayment).toFixed(2);
        UItotalInterest.value = ((monthly*calculatedPayment)-principal).toFixed(2);
    } else {
        showError('fill out the correct information');
    }

    function showError(error){
        const errorDiv = document.createElement('div');
        const heading = document.querySelector('.heading');
        const container = document.querySelector('.container');
        

        errorDiv.appendChild(document.createTextNode(error));

        container.insertBefore(errorDiv, heading);



    }

    e.preventDefault();
}


