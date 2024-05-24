import {calculateInvestmentResults, formatter} from  '../util/investment.js'
export default function Results({ userInput }) {
    const resultData = calculateInvestmentResults(userInput)
    const initialInvestment =
        resultData[0].valueEndOfYear -
        resultData[0].interest -
        resultData[0].annualInvestment;

    return(
        <table id="result">
            <thead>
                <tr>
                    <th>ปี</th>
                    <th>มูลค่าเงินการลงทุน</th>
                    <th>ดอกเบี้ยต่อปี</th>
                    <th>ดอกเบี้ยรวม</th>
                    <th>เงินลงทุน</th>
                </tr>
            </thead>
            <tbody>
                { resultData.map(yearData => 
                    {
                        const totalInterest =
                            yearData.valueEndOfYear - 
                            yearData.annualInvestment * yearData.year -
                            initialInvestment;

                        const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

                        return <tr key={yearData.year}>
                            <td>{yearData.year}</td>
                            <td>{formatter.format(yearData.valueEndOfYear)}</td>
                            <td>{formatter.format(yearData.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                    }
                ) }
            </tbody>
        </table>
    );
}