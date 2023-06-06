    // Code for formatting currency value with right-to-left concatenation
    // Author: carmonalarios (https://github.com/CarmonaLarios)

    function formatCurrency(input) {
        let startWithZero = true;
    
        const formatNumberLessThanOne = (array) => {
            let formattedArray = array;
    
            if (formattedArray.length === 0) {
                formattedArray = ["0", "0", "0"].concat(formattedArray);
            } else if (formattedArray.length === 1) {
                formattedArray = ["0", "0"].concat(formattedArray);
            } else if (formattedArray.length === 2) {
                formattedArray = ["0"].concat(formattedArray);
            }

            return formattedArray;
        };
    
        const addComma = (array) => {
            return array.slice(0, -2).concat(",", array.slice(-2));
        };
    
        const removeInvalidZeros = (array) => {
            return array.filter((item) => {
            if (item !== "0" && startWithZero) {
                startWithZero = false;
                return true;
            } else if (!startWithZero) {
                return true;
            }
            return false;
            });
        };
    
        const formatOutput = (array) => {
            return addComma(formatNumberLessThanOne(removeInvalidZeros(array)));
        };
    
        let formattedInput = input.trim() === "" ? "0" : input;
        let inputChars = formattedInput.replace(",", "").match(/\d+/g).join();
        let inputArray = inputChars.split("");
    
        return formatOutput(inputArray).join("");
    }
