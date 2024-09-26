import React, { useState } from 'react';
import add from './stringCalculator';

const CalculatorUI = () => {
    const [input, setInput] = useState<string>('');
    const [result, setResult] = useState<number | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    };

    const handleCalculation = () => {
        setError(null);
        try {
            const sum = add(input);
            setResult(sum);
        } catch (error: any) {
           alert(error.message);
           setResult(null);
        }
    };

    return (
        <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
            <h1>String Calculator</h1>
            <input 
                type='text'
                value={input}
                onChange={handleInputChange}
                placeholder='Enter numbers'
                style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
            />
            <button 
                onClick={handleCalculation}
                style={{ width: '105%', padding: '10px', left: '50px' }}>
                Calculate
            </button>
            {result !== null && <h2>Result: {result}</h2>}
            {error && <h2 style={{ color: 'red' }}>Error: {error}</h2>}
        </div>
    )
}

export default CalculatorUI;