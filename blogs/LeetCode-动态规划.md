# LeetCode-Unique Paths #
<br>
最近在刷LeetCode的时候遇到了一些动态规划的问题，于是对动态规划进行了一下学习和总结。动态规划的核心就是记录已经计算出来的结果来为后面的计算做简化，这样就减少了很多重复工作，降低了算法复杂度。下面以LeetCode上的一道题为例。<br>
## 问题描述：<br> ##


A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?


Above is a 7 x 3 grid. How many possible unique paths are there?

Note: m and n will be at most 100.

Example 1:

Input: m = 3, n = 2<br>
Output: 3<br>
Explanation:<br>
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Right -> Down<br>
2. Right -> Down -> Right<br>
3. Down -> Right -> Right<br>
Example 2:

Input: m = 7, n = 3<br>
Output: 28

## 解法： ##
## 1.回溯算法 ##
<pre>
class Solution {
    int res=0;
    public int uniquePaths(int m, int n) {
        solve(0,0,m-1,n-1);
        return res;
    }
    void solve(int x,int y,int m,int n){
        if(x==m&&y==n){
            res++;
            return;
        }
        if(x!=m){
            x++;
            solve(x,y,m,n);
            x--;
        }
        if(y!=n){
            y++;
            solve(x,y,m,n);
            y--;
        }
    }
}
</pre>
但是由于复杂度过高，无法通过测试。<br>
## 2.动态规划 ##
使用一个dp[m][n]数组存储从（0，0）到（i，j）有多少条路径，因为只能向下或者向右移动，所以到达（i，j）一点的时候只可能是从上或者从左到达的，所以dp[i][j]=dp[i-1][j]+dp[i][j-1]。为了保证i-1和j-1有效，需要为dp[i][0]和dp[0][j]赋初值，注意初值为1不是0，因为从(0,0)到达和它一行和一列的位置都只有一种路径（即一直向右走和一直向下走）。<br>
代码如下：

    class Solution {
	    public int uniquePaths(int m, int n) {
	        int[][] dp=new int[m][n];
	        for(int i=0;i<m;i++){
	            dp[i][0]=1;
	        }
	        for(int j=0;j<n;j++){
	            dp[0][j]=1;
	        }
	        for(int i=1;i<m;i++){
	            for(int j=1;j<n;j++){
	                dp[i][j]=dp[i-1][j]+dp[i][j-1];
	            }
	        }
	        return dp[m-1][n-1];
	    }
	}
这种解法通过一个dp数组记录了每个位置有多少条路径，相比回溯算法节省了很多重复工作。