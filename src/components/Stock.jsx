export default function Stock({ stock }) {

  const { stockName, currentPrice, prevClosingPrice, logo } = stock;


  const current = parseFloat(currentPrice);
  const prevClosing = parseFloat(prevClosingPrice);


  const numericalChange = (current - prevClosing).toFixed(2);
  const rateChange = ((numericalChange / prevClosing) * 100).toFixed(2);

  const colorClass = numericalChange > 0 ? 'green' : numericalChange < 0 ? 'red' : undefined;
  const arrow = numericalChange > 0 ? '⬆' : numericalChange < 0 ? '⬇' : '▬';

  return (
    <div className="stock-container">
      <div className={colorClass}>
        <p>
          {arrow} {numericalChange}
        </p>
        <p>{rateChange}%</p>
      </div>
      <div>
        <img className="logo" src={logo} alt={stockName} />
      </div>
      <div>
        <p>{stockName}</p>
      </div>
      <div>
        <p>${current.toFixed(2)}</p>
        <p>Güncel Fiyat</p>
      </div>
      <div>
        <p>Önceki Kapanış: ${prevClosing.toFixed(2)}</p>
      </div>
    </div>
  );
}
