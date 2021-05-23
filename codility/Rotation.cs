using System;
// you can also use other imports, for example:
// using System.Collections.Generic;

// you can write to stdout for debugging purposes, e.g.
// Console.WriteLine("this is a debug message");

class Solution {
    public int[] solution(int[] A, int K) {
        if(A.Length==0){
            return A;
        }
        for (int i=0; i < K; i++){
            int ultimoItem = A[A.Length - 1];
            for(int a = A.Length -1; a>=1; a--){
                A[a]=A[a-1];
            }
            A[0]=ultimoItem;
        }
        return A;
        
        
    }
}
