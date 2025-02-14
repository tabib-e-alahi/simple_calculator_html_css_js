const handleClearDisplay = () => {
    document.getElementById('display_val').value = '0';
}

const handleSubmitValue = val => {
    const currentVal = document.getElementById('display_val').value;
    if (currentVal == '0')
        document.getElementById('display_val').value = val;

    else
        document.getElementById('display_val').value = currentVal + val;
}

const handleOperation = op =>{
    const currentVal = document.getElementById('display_val').value;
}



const addition = (a, b) => {
    const add_1 = parseFloat(a);
    const add_2 = parseFloat(b);
    const res = add_1 + add_2;
}