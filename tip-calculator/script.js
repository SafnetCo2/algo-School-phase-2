const tipcalcy = () => {
    let amount = document.getElementById('bill_amount').value;
    let  percent = document.getElementById('tip_perc').value;
    let tip = amount * (percent / 100);
    
    let total = tip + Number(amount);
    

    document.getElementById('tip_total').value = tip;
    document.getElementById('total_billed').value = total;
}


