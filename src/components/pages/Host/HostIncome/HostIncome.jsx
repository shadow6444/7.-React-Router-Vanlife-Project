import "./HostIncome.css";
const Income = () => {
  const transactionsData = [
    { amount: 720, date: "1/12/22", id: "1" },
    { amount: 560, date: "10/11/22", id: "2" },
    { amount: 980, date: "23/11/22", id: "3" },
  ];

  const incomeTransactions = (
    <ul className="host-vans-list">
      {transactionsData.map((data) => {
        return (
          <li key={data.id} className="income-transaction-list">
            <h1>${data.amount}</h1>
            <h2>{data.date}</h2>
          </li>
        );
      })}
    </ul>
  );

  return (
    <section className="host-vans-income-container">
      <div className="host-van-income">
        <div className="income">
          <h2>Income</h2>
          <p>
            Income last <span>30 days</span>
          </p>
          <h1>$2,260</h1>
        </div>
      </div>
      <div className="income-graph">
        <img src="/income-graph.png" alt="income graph" />
      </div>
      <div className="income-transactions">
        <div className="income-transactions-header">
          <h2>Your transactions (3)</h2>
          <h3>
            Last <span>30 days</span>
          </h3>
        </div>
        {incomeTransactions}
      </div>
    </section>
  );
};

export default Income;
