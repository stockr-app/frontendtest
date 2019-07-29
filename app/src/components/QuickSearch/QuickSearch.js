import React, { Component } from 'react';
import axios from 'axios';
import './QuickSearch.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
export default class QuickSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
          stocks: [],
          symbol: "",
          earnings: [],
          balanceSheet: [],
          cashflow: [],
          estimates: [],
          income: []
        };
      }

      fetchStocks = () => {
        axios
          .get(`https://sandbox.iexapis.com/stable/stock/${this.state.symbol}/quote?token=Tpk_521edcea4a3542dca944cb368cc0ec7b`)
          .then(response => {
            this.setState({ stocks: response.data});
            document.getElementById('Results').style.backgroundColor = "seagreen";
          })
          .catch(err => {
            this.setState({ error: "Unrecognized Symbol" });
          });
          axios
          .get(`https://sandbox.iexapis.com/stable/stock/${this.state.symbol}/earnings/quote?token=Tpk_521edcea4a3542dca944cb368cc0ec7b`)
          .then(response => {
            this.setState({ earnings: response.data.earnings});
          })
          .catch(err => {
            this.setState({ error: "Unrecognized Symbol" });
          });
          axios
          .get(`https://sandbox.iexapis.com/stable/stock/${this.state.symbol}/balance-sheet/quote?token=Tpk_521edcea4a3542dca944cb368cc0ec7b`)
          .then(response => {
            this.setState({ balanceSheet: response.data.balancesheet});
          })
          .catch(err => {
            this.setState({ error: "Unrecognized Symbol" });
          });
          axios
          .get(`https://sandbox.iexapis.com/stable/stock/${this.state.symbol}/cash-flow/quote?token=Tpk_521edcea4a3542dca944cb368cc0ec7b`)
          .then(response => {
            this.setState({ cashflow: response.data.cashflow});
          })
          .catch(err => {
            this.setState({ error: "Unrecognized Symbol" });
          });
          axios
          .get(`https://sandbox.iexapis.com/stable/stock/${this.state.symbol}/estimates/quote?token=Tpk_521edcea4a3542dca944cb368cc0ec7b`)
          .then(response => {
            this.setState({ estimates: response.data.estimates});
          })
          .catch(err => {
            this.setState({ error: "Unrecognized Symbol" });
          });
          axios
          .get(`https://sandbox.iexapis.com/stable/stock/${this.state.symbol}/income/quote?token=Tpk_521edcea4a3542dca944cb368cc0ec7b`)
          .then(response => {
            this.setState({ income: response.data.income});
          })
          .catch(err => {
            this.setState({ error: "Unrecognized Symbol" });
          });
      };

      inputChange = e => {
        this.setState({ symbol: e.target.value });
      };



    render() {

        return (
            <div>
                <a href="#/" onClick={this.fetchStocks}>Search a symbol</a>    
                    <input
                    className="stockSearch"
                    type="text"
                    name="symbol"
                    onChange={this.inputChange}
                    value={this.state.symbol}
                    />
                    <div id="Results">
                   <h1 className="companyName">{this.state.stocks.companyName}</h1>
                    <div className="searchResults">
                    <div>
                        <p>Symbol: {this.state.stocks.symbol}</p>
                        <p>Latest Price: {this.state.stocks.latestPrice}</p>
                    </div>
                    <div className="vl"></div>
                    <div>
                        <p>Exchange: {this.state.stocks.primaryExchange}</p>
                        <p>Calculation Price: {this.state.stocks.calculationPrice}</p>
                    </div>
                    <div className="v2"></div>
                    <div>
                        <p>Previous Close: {this.state.stocks.previousClose}</p>
                        <p>Change: {this.state.stocks.change}</p>
                    </div>
                    <div className="v3"></div>
                    <div>
                        <p>52 Week High: {this.state.stocks.week52High}</p>
                        <p>52 Week Low: {this.state.stocks.week52Low}</p>
                    </div>
                    <div className="v4"></div>
                    <div>
                        <p>YTD Change: {this.state.stocks.ytdChange}</p>
                        <p>peRatio: {this.state.stocks.peRatio}</p>
                    </div>
                    </div>
                </div>
                <Tabs>
    <TabList>
      <Tab>{this.state.stocks.symbol}</Tab>
      <Tab>Balance Sheet</Tab>
      <Tab>Cash Flow</Tab>
      <Tab>Earnings</Tab>
      <Tab>Estimates</Tab>
      <Tab>Income Statement</Tab>
    </TabList>
 
    <TabPanel>
    </TabPanel>
    <TabPanel>
      {this.state.balanceSheet.map((balanceSheet, index) => (
      <div key={index}>
        <div>
        <p>Report Date: {balanceSheet.reportDate}</p>
        <p>Current Cash: ${balanceSheet.currentCash}</p>
        <p>Short Term Investments: {balanceSheet.shortTermInvestments}</p>
        <p>Receivables: {balanceSheet.receivables}</p>
        <p>Inventory: {balanceSheet.inventory}</p>
        <p>Other Current Assets: {balanceSheet.otherCurrentAssets}</p>
        <p>Current Assets: {balanceSheet.currentAssets}</p>
        <p>Long Term Investments: {balanceSheet.longTermInvestments}</p>
        <p>Property Plant Equipment: {balanceSheet.propertyPlantEquipment}</p>
        <p>Goodwill: {balanceSheet.goodwill}</p>
        <p>Intangible Assets: {balanceSheet.intangibleAssets}</p>
        <p>Other Assets: {balanceSheet.otherAssets}</p>
        <p>Total Assets: {balanceSheet.totalAssets}</p>
        <p>Accounts Payable: {balanceSheet.accountsPayable}</p>
        <p>Current Long Term Debt: {balanceSheet.currentLongTermDebt}</p>
        <p>Other Current Liabilities: {balanceSheet.otherCurrentLiabilities}</p>
        <p>Total Current Liabilities: {balanceSheet.totalCurrentLiabilities}</p>
        <p>Longterm Debt: {balanceSheet.longTermDebt}</p>
        <p>Other Liabilities: {balanceSheet.otherLiabilities}</p>
        <p>Minority Interest: {balanceSheet.minorityInterest}</p>
        <p>Total Liabilities: {balanceSheet.totalLiabilities}</p>
        <p>Common Stock: {balanceSheet.commonStock}</p>
        <p>Retained Earnings: {balanceSheet.retainedEarnings}</p>
        <p>Treasury Stock: {balanceSheet.treasuryStock}</p>
        <p>Capital Surplus: {balanceSheet.capitalSurplus}</p>
        <p>Shareholder Equity: {balanceSheet.shareholderEquity}</p>
        <p>Net Tangible Assets: {balanceSheet.netTangibleAssets}</p>
        </div>
      </div>))}
    </TabPanel>
    <TabPanel>
      {this.state.cashflow.map((cashflow, index) => (
      <div key={index}>
        <div>
        <p>Report Date: {cashflow.reportDate}</p>
        <p>Net Income: {cashflow.netIncome}</p>
        <p>Depreciation: {cashflow.depreciation}</p>
        <p>Changes In Receivables: {cashflow.changesInReceivables}</p>
        <p>Cash Change: {cashflow.cashChange}</p>
        <p>Cash Flow: {cashflow.cashFlow}</p>
        <p>Capital Expenditures: {cashflow.capitalExpenditures}</p>
        <p>Investments: {cashflow.investments}</p>
        <p>Other Investment Activity: {cashflow.investingActivityOther}</p>
        <p>Total Investment CashFlow: {cashflow.totalInvestingCashFlows}</p>
        <p>Dividends Paid: {cashflow.dividendsPaid}</p>
        <p>Net Borrowings: {cashflow.netBorrowings}</p>
        <p>Other Financing Cash Flows: {cashflow.otherFinancingCashFlows}</p>
        <p>Cash Flow Financing: {cashflow.cashFlowFinancing}</p>
        <p>Exchange Rate Effect: {cashflow.exchangeRateEffect}</p>
        </div>
        </div>))}
    </TabPanel>
    <TabPanel>
      {this.state.earnings.map((earningsData, index) => (
      <div key={index}>
      <div>
      <p>Actual EPS: {earningsData.actualEPS}</p>
      <p>Consensus EPS: {earningsData.consensusEPS}</p>
      <p>Announce Time: {earningsData.announceTime}</p>
      <p>Number of Estimates: {earningsData.numberOfEstimates}</p>
      <p>EPS Surprise Dollar: {earningsData.EPSSurpriseDollar}</p>
      <p>EPS Report Date: {earningsData.EPSReportDate}</p>
      <p>Fiscal Period: {earningsData.fiscalPeriod}</p>
      <p>Fiscal End Date: {earningsData.fiscalEndDate}</p>
      <p>Year ago: {earningsData.yearAgo}</p>
      <p>Year Ago Change Percent: {earningsData.yearAgoChangePercent}</p>
      </div>
      </div>))}
    </TabPanel>
    <TabPanel>
      {this.state.estimates.map((estimates, index) => (
      <div key={index}>
        <div>
        <p>Consensus EPS: {estimates.consensusEPS}</p>
        <p>Announce Time: {estimates.announceTime}</p>
        <p>Number of Estimates: {estimates.numberOfEstimates}</p>
        <p>Report Date: {estimates.reportDate}</p>
        <p>Fiscal Period: {estimates.fiscalPeriod}</p>
        <p>Fiscal End Date: {estimates.fiscalEndDate}</p>
        </div>
      </div>))}
    </TabPanel>
    <TabPanel>
      {this.state.income.map((income, index) => (
      <div key={index}>
        <div>
        <p>Report Date: {income.reportDate}</p>
        <p>Total Revenue: {income.totalRevenue}</p>
        <p>Cost of Revenue: {income.costOfRevenue}</p>
        <p>Gross Profit: {income.grossProfit}</p>
        <p>Research and Development: {income.researchAndDevelopment}</p>
        <p>Selling General and Admin: {income.sellingGeneralAndAdmin}</p>
        <p>Operating Expense: {income.operatingExpense}</p>
        <p>Operating Income: {income.operatingIncome}</p>
        <p>Other Income Expense Net: {income.otherIncomeExpenseNet}</p>
        <p>Ebit: {income.ebit}</p>
        <p>Interest Income: {income.interestIncome}</p>
        <p>Pre-tax Income: {income.pretaxIncome}</p>
        <p>Income Tax: {income.incomeTax}</p>
        <p>Minority Interest: {income.minorityInterest}</p>
        <p>Net Income Basic: {income.netIncomeBasic}</p>
        </div>
      </div>))}
    </TabPanel>
  </Tabs>
        </div>
        )
        
    }
    
}
