const outputBox = document.getElementById('output-box')

const appendToDisplay = (value) => {
    if (outputBox.value === '0') {
        if (value === '+') {
            value = '0'
        } else if (value === '-') {
            value = '-'
        }
        outputBox.value = value
    } else if (outputBox.value.includes('=')) {
        const array = outputBox.value.split('=')
        outputBox.value = array[(array.length) - 1] + value
    } else {
        outputBox.value += value
    }
}

document.querySelectorAll('.digit').forEach(button => {
    button.addEventListener('click', () => {
        appendToDisplay(button.textContent)
    })
})

const clearScreen = () => {
    outputBox.value = '0'
}

document.querySelector('.clear').addEventListener('click', () => {
    clearScreen()
})

const calculate = () => {
    const output = outputBox.value
    try {
        const result = eval(output.slice(0, -1))
        outputBox.value += result
    } catch (error) {
        outputBox.value = error
        // console.log(error);
    }
}

document.querySelector('.equal').addEventListener('click', () => {
    calculate()
})

const removeItem = () => {
    if (outputBox.value.length > 1) {
        outputBox.value = outputBox.value.slice(0, -1);
    } else {
        outputBox.value = '0';
    }
}

const backspace = document.querySelector('.backspace')
backspace.addEventListener('click', () => {
    // console.log(outputBox.value.length);
    if (outputBox.value.length > 0) {
        removeItem();
    }
})



