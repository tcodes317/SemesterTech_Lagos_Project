import React, { useState, useRef } from 'react';

const CodeEntry = () => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  const handleInputChange = (index, value) => {
    if (value.length > 1) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="flex flex-col items-center w-[315px] mx-auto p-4 justify-center h-[100vh]">
      <h1 className="text-2xl font-bold mb-4 text-black">Logo</h1>
      <h1 className="text-lg font-bold mb-4">OTP Verification</h1>
      <div className="text-center mb-4">
        <h1 className="">We have sent a verification code to</h1>
        <span className='font-bold'>email@example.com</span>
      </div>
      <div className="flex space-x-2">
        {code.map((digit, index) => (
          <input
            key={index}
            type="text"
            value={digit}
            onChange={(e) => handleInputChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            ref={(el) => (inputRefs.current[index] = el)}
            maxLength={1}
            className="w-10 h-10 text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ))}
      </div>
        <button className='text-center mt-4 bg-black rounded-lg text-white p-2 w-full'>
            <span>Verify button</span>
        </button>
        <div className='flex space-y-2 items-centers flex-col mt-4 w-full'>
            <p className="text-left">Don't get a code? <b>Resend Code</b></p>
            <button className="flex ani w-full justify-center p-2 mt-4 items-center space-x-2">
                <i className='fa fa-arrow-left'></i>
                <span>Back</span>
            </button>
        </div>
    </div>
  );
};

export default CodeEntry;