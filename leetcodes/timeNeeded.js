// 1376. Time Needed to Inform All Employees
// https://leetcode.com/problems/time-needed-to-inform-all-employees/

// A company has n employees with a unique ID for each employee from 0 to n - 1. The head of the company is the one with headID.
// Each employee has one direct manager given in the manager array where manager[i] is the direct manager of the i-th employee, manager[headID] = -1. Also, it is guaranteed that the subordination relationships have a tree structure.
// The head of the company wants to inform all the company employees of an urgent piece of news. He will inform his direct subordinates, and they will inform their subordinates, and so on until all employees know about the urgent news.
// The i-th employee needs informTime[i] minutes to inform all of his direct subordinates (i.e., After informTime[i] minutes, all his direct subordinates can start spreading the news).
// Return the number of minutes needed to inform all the employees about the urgent news.

function numOfMinutes(n, headID, manager, informTime) {
  // Create an adjacency list to represent the employee hierarchy
  const graph = new Array(n).fill().map(() => []);

  // Build the adjacency list
  for (let i = 0; i < n; i++) {
    const mgr = manager[i];
    if (mgr !== -1) {
      graph[mgr].push(i);
    }
  }

  // Helper function to perform DFS
  function dfs(employee) {
    let maxTime = 0;
    for (const subordinate of graph[employee]) {
      maxTime = Math.max(maxTime, dfs(subordinate));
    }
    return informTime[employee] + maxTime;
  }

  // Start DFS from the head of the company
  return dfs(headID);
}
