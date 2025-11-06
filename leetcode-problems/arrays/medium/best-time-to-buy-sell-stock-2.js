/**
 * @problem 122. Best Time to Buy and Sell Stock II
 *
 * You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
 * On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time.
 * However, you can sell and buy the stock multiple times on the same day, ensuring you never hold more than one share of the stock.
 * Find and return the maximum profit you can achieve.
 *
 * @example
 * Input: prices = [7,1,5,3,6,4]
 * Output: 7
 * Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
 * Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
 * Total profit is 4 + 3 = 7.
 */

/**
 * @param {number[]} prices - Array of stock prices
 * @return {number} - Maximum profit that can be achieved
 */
var maxProfit = function (prices) {
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    let dayProfit = prices[i] - prices[i - 1];
    if (dayProfit > 0) {
      maxProfit += dayProfit;
    }
  }
  return maxProfit;
};
