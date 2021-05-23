public class Algo {
    public static void main(String[] args) throws Exception {
        ordenandoNotas_QuickSort();
    }

    public static void ordenandoNotas_QuickSort() {
        Nota[] notas = new Nota[9];
        notas[0] = new Nota("Marcos", 4);
        notas[1] = new Nota("Claudio", 6);
        notas[2] = new Nota("João", 7.9);
        notas[3] = new Nota("Roberto", 9);
        notas[4] = new Nota("Maria", 1.5);
        notas[5] = new Nota("Paulo", 2);
        notas[6] = new Nota("Marta", 7);
        notas[7] = new Nota("Clara", 9);
        notas[8] = new Nota("Joana", 7.5);

        // System.out.println("Lista Desordenada");
        // for (int i = 0; i < notas.length; i++)
        // System.out.println(notas[i].toString());

        ordenaNota_quickSort(notas, 0, notas.length);

        System.out.println("Lista Ordenada");
        for (int i = 0; i < notas.length; i++)
            System.out.println(notas[i].toString());

    }

    private static void ordenaNota_quickSort(Nota[] notas, int inicio, int termino) {
        int qtdeElementos = termino - inicio;
        if (qtdeElementos > 1) {
            int pivot = pivotMenoresNotas(notas, inicio, termino);
            ordenaMenorNota_mergeSort(notas, inicio, pivot);
            ordenaMenorNota_mergeSort(notas, pivot + 1, termino);
        }

    }

    public static void ordenandoNotas_MergeSort() {
        Nota[] notas = new Nota[9];
        notas[0] = new Nota("Marcos", 4);
        notas[1] = new Nota("Claudio", 6);
        notas[2] = new Nota("João", 7.9);
        notas[3] = new Nota("Roberto", 9);
        notas[4] = new Nota("Maria", 1.5);
        notas[5] = new Nota("Paulo", 2);
        notas[6] = new Nota("Marta", 7);
        notas[7] = new Nota("Clara", 9);
        notas[8] = new Nota("Joana", 9.9);

        System.out.println("Lista Desordenada");
        for (int i = 0; i < notas.length; i++)
            System.out.println(notas[i].toString());

        ordenaMenorNota_mergeSort(notas, 0, notas.length);

        System.out.println("Lista Ordenada");
        for (int i = 0; i < notas.length; i++)
            System.out.println(notas[i].toString());
    }

    public static void ordenandoProdutos_insertionSort_selectionSort() {
        Produto[] produtos = new Produto[5];
        produtos[0] = new Produto("Lamborghini", 1000000);
        produtos[1] = new Produto("Monza", 46000);
        produtos[2] = new Produto("Brasilia", 16000);
        produtos[3] = new Produto("Fiat 147", 16000);
        produtos[4] = new Produto("Chevette", 17000);

        ordenaMenorPreco_InsertionSort(produtos);
        // ordenaMenorPreco_SelectionSort(produtos);
        for (int i = 0; i < produtos.length; i++)
            System.out.println(produtos[i].toString());
    }

    public static void ordenaMenorNota_mergeSort(Nota[] notas, int inicio, int termino) {
        int quantidade = termino - inicio;
        if (quantidade > 1) {
            int miolo = (inicio + termino) / 2;

            ordenaMenorNota_mergeSort(notas, inicio, miolo);
            ordenaMenorNota_mergeSort(notas, miolo, termino);
            intercala(notas, inicio, miolo, termino);
        }
    }

    public static void intercala(Nota[] notas, int inicio, int miolo, int termino) {
        var posTempNota = inicio;
        var posPrimeiraLista = inicio;
        var posSegundaLista = miolo;
        var tempNota = new Nota[termino];

        while (posPrimeiraLista < miolo && posSegundaLista < termino) {
            if (notas[posPrimeiraLista].getNota() > notas[posSegundaLista].getNota()) {
                tempNota[posTempNota] = notas[posSegundaLista];
                posSegundaLista++;
            } else {
                tempNota[posTempNota] = notas[posPrimeiraLista];
                posPrimeiraLista++;
            }
            posTempNota++;
        }

        while (posPrimeiraLista < miolo) {
            tempNota[posTempNota] = notas[posPrimeiraLista];
            posPrimeiraLista++;
            posTempNota++;
        }

        while (posSegundaLista < termino) {
            tempNota[posTempNota] = notas[posSegundaLista];
            posSegundaLista++;
            posTempNota++;
        }

        for (int i = inicio; i < termino; i++)
            notas[i] = tempNota[i];

    }

    public static void ordenaMenorPreco_SelectionSort(Produto[] produtos) {

        for (int atual = 0; atual < produtos.length; atual++) {
            int menorPreco = buscaProdutoMenorPreco(produtos, atual, produtos.length - 1);
            trocaProdutos(produtos, atual, menorPreco);
        }
    }

    public static void ordenaMenorPreco_InsertionSort(Produto[] produtos) {
        for (int atual = 0; atual < produtos.length - 1; atual++) {
            for (int analise = atual + 1; analise < produtos.length; analise++) {
                if (produtos[analise].getPreco() < produtos[atual].getPreco()) {
                    trocaProdutos(produtos, atual, analise);
                }
            }
        }
    }

    private static void trocaProdutos(Produto[] produtos, int primeiro, int segundo) {

        Produto primeiroProduto = produtos[primeiro];
        Produto segundoProduto = produtos[segundo];
        produtos[primeiro] = segundoProduto;
        produtos[segundo] = primeiroProduto;
    }

    private static int buscaProdutoMenorPreco(Produto[] produtos, int inicio, int tamanho) {
        if (inicio < 0 && tamanho >= produtos.length)
            throw new IllegalArgumentException("valores fora do limite da lista");

        int menorPreco = inicio;
        for (int i = inicio + 1; i <= tamanho; i++) {
            if (produtos[i].getPreco() < produtos[menorPreco].getPreco()) {
                menorPreco = i;
            }
        }

        return menorPreco;
    }

    private static int pivotMenoresNotas(Nota[] notas, int inicio, int quantidade) {
        int qtdeMenoresQueOPivot = 0;
        int posPivot = quantidade - 1;
        Nota pivot = notas[posPivot];
        for (int i = 0; i < posPivot; i++) {
            if (notas[i].getNota() < pivot.getNota()) {
                troca(notas, i, qtdeMenoresQueOPivot);
                qtdeMenoresQueOPivot++;
            }
        }
        troca(notas, qtdeMenoresQueOPivot, posPivot);
        return qtdeMenoresQueOPivot;
    }

    private static void troca(Object[] arr, int de, int para) {
        Object objPos1 = arr[de];
        Object objPos2 = arr[para];
        arr[de] = objPos2;
        arr[para] = objPos1;

    }
}
