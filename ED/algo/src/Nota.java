public class Nota {
    private String nome;
    private double nota;

    public Nota(String nome, double nota) {
        this.nome = nome;
        this.nota = nota;
    }

    @Override
    public String toString() {
        return nome.toString() + ", " + nota;
    }

    public double getNota() {
        return nota;
    }
}
