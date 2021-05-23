using System;
// you can also use other imports, for example:
// using System.Collections.Generic;

// you can write to stdout for debugging purposes, e.g.
// Console.WriteLine("this is a debug message");

class Solution {
    public int solution(int N) {
        // write your code in C# 6.0 with .NET 4.5 (Mono)
        string binario = Convert.ToString(N,2);
        int quantidade = 0;
        int maiorResultado = 0;
        int ultimaPos1 = -1;
        for(int i=0;i<binario.Length;i++){ 
            if(binario[i]=='1'){
                ultimaPos1=i;
                
            }
            else if(ultimaPos1 != -1){
                quantidade++;
            }
            if (ultimaPos1==i){
                if(quantidade > maiorResultado){
                maiorResultado=quantidade;
                }
                quantidade = 0;
            }
        }
        return maiorResultado;
    }
}
