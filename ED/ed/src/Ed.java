import Conjunto.Conjunto;
import ListaLigada.ListaLigada;
import Pilha.Pilha;
import Vetor.Aluno;
import Vetor.Vetor;

public class Ed {
    public static void main(String[] args) throws Exception {

        Conjunto();
    }

    public static void Conjunto() {
        Conjunto conjunto = new Conjunto();
        conjunto.adiciona("Mauricio");
        System.out.println(conjunto.toString());
        conjunto.adiciona("Guilherme");
        System.out.println(conjunto.toString());
        conjunto.adiciona("Marcos");
        System.out.println(conjunto.toString());
        conjunto.adiciona("João");
        System.out.println(conjunto.toString());
        conjunto.adiciona("Jorge");
        System.out.println(conjunto.toString());

        conjunto.remove("Mauricio");
        System.out.println(conjunto.toString());
    }

    public static void Pilha() {
        Pilha pilha = new Pilha();
        pilha.push("Mauricio");
        System.out.println(pilha);
        pilha.push("Claudio");
        System.out.println(pilha);

        String r1 = pilha.pop();
        System.out.println(r1);

        System.out.println(pilha.isEmpty());
        String r2 = pilha.pop();
        System.out.println(r2);
        System.out.println(pilha.isEmpty());

        System.out.println(pilha);

    }

    public static void ListaLigada() {
        ListaLigada lista = new ListaLigada();
        lista.adicionaNoComeco("Paulo");
        lista.adicionaNoComeco("Mauricio");
        lista.adicionaNoComeco("Guilherme");
        System.out.println(lista);

        lista.adiciona("Marcelo");
        System.out.println(lista);

        lista.adiciona(2, "Gabriel");
        System.out.println(lista);

        lista.removeDoComeco();
        System.out.println(lista);

        lista.remove(1);
        System.out.println(lista.Contem("Jonas"));
        System.out.println(lista.Contem("Mauricio"));
        System.out.println(lista);
    }

    public static void Vetor() {
        Aluno a1 = new Aluno("João");
        Aluno a2 = new Aluno("José");

        Vetor lista = new Vetor();
        lista.adiciona(a1);
        lista.adiciona(a2);

        System.out.println(lista);

        Aluno a3 = new Aluno("Danilo");
        System.out.println(lista.contem(a3));

        lista.adiciona(1, a3);

        Aluno a4 = lista.pega(1);
        System.out.println(a4);
        System.out.println(lista);

        lista.remove(1);
        System.out.println(lista);

        for (int i = 0; i < 300; i++) {
            lista.adiciona(new Aluno("Brunao" + i));
        }
        System.out.println(lista);
    }
}
