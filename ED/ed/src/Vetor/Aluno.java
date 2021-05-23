package Vetor;

public class Aluno {
    private String nome;

    public Aluno(String nome) {
        this.nome = nome;
    }

    public String getNome() {
        return nome;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj == null) {
            return false;
        }
        Aluno Outro = (Aluno) obj;
        return Outro.getNome() == this.getNome();

    }

    @Override
    public String toString() {
        return nome;
    }
}
