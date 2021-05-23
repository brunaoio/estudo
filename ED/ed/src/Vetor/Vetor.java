package Vetor;

import java.util.Arrays;

public class Vetor {
    private Aluno[] alunos = new Aluno[100];
    private int totalDeAlunos = 0;

    private boolean isPosicaoOcupada(int posicao) {
        return posicao >= 0 && posicao < totalDeAlunos;
    }

    private boolean isPosicaoValida(int posicao) {
        return posicao >= 0 && posicao <= totalDeAlunos;
    }

    private void garanteEspaço() {
        if (totalDeAlunos == alunos.length) {
            Aluno[] novoArray = new Aluno[totalDeAlunos * 2];
            for (int i = 0; i < alunos.length; i++) {
                novoArray[i] = alunos[i];
            }
            this.alunos = novoArray;
        }
    }

    public void adiciona(Aluno aluno) {
        this.garanteEspaço();
        this.alunos[totalDeAlunos] = aluno;
        totalDeAlunos++;
    }

    public void adiciona(int posicao, Aluno aluno) {
        this.garanteEspaço();
        if (!isPosicaoValida(posicao)) {
            throw new IllegalArgumentException("posicao inválida");
        }
        for (int i = totalDeAlunos - 1; i == posicao; i--) {
            alunos[i + 1] = alunos[i];

        }

        alunos[posicao] = aluno;
        totalDeAlunos++;
    }

    public Aluno pega(int posicao) {
        if (!isPosicaoOcupada(posicao)) {
            throw new IllegalArgumentException("posicao inválida");
        }
        return alunos[posicao];
    }

    public void remove(int posicao) {
        for (int i = posicao; i < totalDeAlunos; i++) {
            this.alunos[i] = this.alunos[i + 1];
        }
        totalDeAlunos--;
    }

    public boolean contem(Aluno aluno) {
        for (int i = 0; i < totalDeAlunos; i++) {
            if (aluno.equals(alunos[i]))
                return true;
        }
        return false;
    }

    public int tamanho() {
        return totalDeAlunos;
    }

    public String toString() {
        return Arrays.toString(alunos);
    }

}
