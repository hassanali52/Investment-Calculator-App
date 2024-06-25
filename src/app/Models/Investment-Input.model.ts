export interface InvestmentInput
{
    initialInvestment: number;
    annualInvestment: number;
    expectedRetrun: number;
    duration: number; 
}

export interface InvestmentOutput
{
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
}
