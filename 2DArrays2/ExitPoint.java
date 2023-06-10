//{ Driver Code Starts
//Initial Template for Java

import java.util.*;
import java.lang.*;
import java.io.*;
class GFG
{
    public static void main(String[] args) throws IOException
    {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine().trim());
        while(T-->0)
        {
            String[] s = br.readLine().trim().split(" ");
            int n = Integer.parseInt(s[0]);
            int m = Integer.parseInt(s[1]);
            int[][] matrix = new int[n][m];
            for(int i = 0; i < n; i++){
                String[] S = br.readLine().split(" ");
                for(int j = 0; j < m; j++){
                    matrix[i][j] = Integer.parseInt(S[j]);
                }
            }
            Solution ob = new Solution();
            int[] ans = ob.FindExitPoint(matrix);
            for(int i = 0; i < ans.length; i++)
                System.out.print(ans[i] + " ");
            System.out.println();
        }
    }
}

// } Driver Code Ends
//User function Template for Java
class Solution
{
    // https://practice.geeksforgeeks.org/problems/exit-point-in-a-matrix0905/1
    public int[] FindExitPoint(int[][] arr){
        // code here
        int i = 0;
        int j = 0;
        String dir="R";
        //run this loop until i and j are in bounds
        while(i>=0 && i<arr.length && j>=0 && j<arr[0].length){
            if(arr[i][j] == 1){
                arr[i][j] = 0;
                
                if(dir=="R") dir = "D";
                else if(dir == "D") dir = "L";
                else if(dir == "L") dir = "U";
                else if(dir =="U") dir = "R";
            }
            
            //move in curr direction
            if(dir=="R") j++;
            else if(dir=="D") i++;
            else if(dir=="L") j--;
            else if(dir=="U") i--;
        }
        //mouse now out of matrix
        //i have to bring back the mouse in the matrix
        //for that im taking a step in the opposite direction of the final direction
        if(dir=="R") j--;
        else if(dir=="D") i--;
        else if(dir=="L")j++;
        else if(dir=="U") i++;
        
        int[] res = new int[2];
        res[0] = i;
        res[1] = j;
        return res;
    }
}