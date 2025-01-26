import React, { useState } from 'react';

function LoanCalculator() {
  // State variables to track user inputs
  const [deposit, setDeposit] = useState(0);
  const [loanAmount, setLoanAmount] = useState(0);
  const [loanPeriod, setLoanPeriod] = useState(5); // Default to 10 years
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [totalPaid, setTotalPaid] = useState(null);
  const [totalInterest, setTotalInterest] = useState(0); // No interest

  // Function to handle loan breakdown calculation
  const calculateLoanBreakdown = () => {
    const principal = loanAmount - deposit;
    const totalPayments = loanPeriod * 12; // Total number of payments (months)

    // Monthly payment formula without interest
    const payment = principal / totalPayments;

    // Total paid over the loan period
    const totalPaidValue = payment * totalPayments;

    // Update state with calculated values
    setMonthlyPayment(payment.toFixed(2));
    setTotalPaid(totalPaidValue.toFixed(2));
    setTotalInterest(0); // No interest paid
  };

  return (
    <div className="loan-calculator">
      <h2>Loan Calculator</h2>

      <div>
        <label>
          Initial Deposit ($):
          <input
            type="number"
            value={deposit}
            onChange={(e) => setDeposit(Number(e.target.value))}
          />
        </label>
      </div>

      <div>
        <label>
          Loan Amount ($):
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
          />
        </label>
      </div>

      <div>
        <label>
          Loan Period (Years):
          <input
            type="number"
            value={loanPeriod}
            onChange={(e) => setLoanPeriod(Number(e.target.value))}
          />
        </label>
      </div>

      <button onClick={calculateLoanBreakdown}>Calculate</button>

      {monthlyPayment && (
        <div className="loan-results">
          <h3>Loan Breakdown</h3>
          <div className="result-item">
            <span className="result-label">Monthly Payment:</span>
            <span className="result-value">${monthlyPayment}</span>
          </div>
          <div className="result-item">
            <span className="result-label">Total Paid Over Loan Period:</span>
            <span className="result-value">${totalPaid}</span>
          </div>
          <div className="result-item">
            <span className="result-label">Total Interest Paid:</span>
            <span className="result-value">${totalInterest}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoanCalculator;
