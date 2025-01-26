import { Link } from "react-router-dom";



function Subcatwedding() {
  const styles = {
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 20px',
        backgroundColor: '#f9fafb',
    },
    headingSection: {
        textAlign: 'center',
        color: '#1a2b3c',
        marginBottom: '40px',
        fontSize: '2.8rem',
        fontWeight: '700',
        letterSpacing: '-1px',
    },
    loanContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: '25px',
    },
    loanBlurb: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: '15px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
        padding: '30px',
        textAlign: 'center',
        transition: 'all 0.3s ease',
        border: '1px solid #e9ecef',
    },
    loanBlurbHover: {
        transform: 'translateY(-10px)',
        boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
    },
    loanIcon: {
        fontSize: '4rem',
        marginBottom: '20px',
        opacity: 0.8,
    },
    loanHeading: {
        color: '#2c3e50',
        marginBottom: '15px',
        fontSize: '1.6rem',
        fontWeight: '600',
    },
    loanPara: {
        color: '#576574',
        margin: '10px 0',
        fontSize: '1.1rem',
        lineHeight: 1.6,
    },
    loanButton: {
        marginTop: '15px',
        padding: '12px 25px',
        backgroundColor: '#39ad48',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        fontSize: '1rem',
        fontWeight: '500',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
    },
    loanButtonHover: {
        backgroundColor: '#39ad48',
        transform: 'scale(1.05)',
    },
    responsiveContainer: {
        '@media (maxWidth: 768px)': {
            flexDirection: 'column',
        },
    },
};

return (
    <div style={styles.container}>
        <h1 style={styles.headingSection}>Business Startup Loans</h1>
        <div style={styles.loanContainer}>
            {[
                {
                        
                  title: '  Valima Loan',
                  maxLoan: 'PKR 5 Lakh',
                  period: '5 years'
              },
              {
                 
                  title: '  Furniture Loan',
                  maxLoan: 'PKR 5 Lakh',
                  period: '5 years'
              },
              {
                  
                  title: 'Jahez  Loan',
                  maxLoan: 'PKR 5 Lakh',
                  period: '5 years'
              },{
                  
                  title: 'Valima  Food Loan',
                  maxLoan: 'PKR 5 Lakh',
                  period: '5 years'
              }
            ].map((loan, index) => (
                <div 
                    key={index} 
                    style={styles.loanBlurb}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = styles.loanBlurbHover.transform;
                        e.currentTarget.style.boxShadow = styles.loanBlurbHover.boxShadow;
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'none';
                        e.currentTarget.style.boxShadow = styles.loanBlurb.boxShadow;
                    }}
                >
                    <div style={styles.loanIcon}>{loan.icon}</div>
                    <h2 style={styles.loanHeading}>{loan.title}</h2>
                    <p style={styles.loanPara}>Maximum loan: {loan.maxLoan}</p>
                    <p style={styles.loanPara}>Loan period: {loan.period}</p>
                    <Link to="/Form">
                    <button 
                        style={styles.loanButton}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = styles.loanButtonHover.backgroundColor;
                            e.currentTarget.style.transform = styles.loanButtonHover.transform;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = styles.loanButton.backgroundColor;
                            e.currentTarget.style.transform = 'none';
                        }}
                    >
                        Apply Now
                    </button> </Link>
                </div>
            ))}
        </div>
    </div>
);
}
export default Subcatwedding;