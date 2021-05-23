package ListaLigada;

public class ListaLigada {
    private Celula primeira = null;
    private int totalDeElementos = 0;
    private Celula ultima = null;

    public void adicionaNoComeco(Object elemento) {
        Celula nova = new Celula(elemento, primeira);
        if (totalDeElementos == 0) {
            this.primeira = nova;
            this.ultima = nova;

        } else {
            this.primeira.setAnterior(nova);
            this.primeira = nova;

        }

        this.totalDeElementos++;
    }

    public void adiciona(Object elemento) {
        if (this.totalDeElementos == 0) {
            adicionaNoComeco(elemento);
        } else {
            Celula nova = new Celula(elemento, null);
            this.ultima.setProximo(nova);
            nova.setAnterior(ultima);
            this.ultima = nova;
            this.totalDeElementos++;
        }
    }

    public void adiciona(int posicao, Object elemento) {
        if (posicao == 0) {
            adicionaNoComeco(elemento);
        } else if (posicao == totalDeElementos) {
            adiciona(elemento);
        } else {

            Celula ant = pegaCelula(posicao - 1);
            Celula prox = ant.getProximo();
            Celula nova = new Celula(elemento, prox);
            prox.setAnterior(nova);
            nova.setAnterior(ant);
            ant.setProximo(nova);
            totalDeElementos++;
        }

    }

    private boolean isPosicaoOcupada(int posicao) {
        return posicao >= 0 && posicao < totalDeElementos;
    }

    private Celula pegaCelula(int posicao) {
        if (!isPosicaoOcupada(posicao)) {
            throw new IllegalArgumentException("posicao inexistente");
        }

        Celula atual = primeira;
        for (int i = 0; i < posicao; i++) {
            atual = atual.getProximo();
        }
        return atual;

    }

    public Object pega(int posicao) {
        return pegaCelula(posicao).getElemento();
    }

    public void remove(int posicao) {
        if (posicao == 0) {
            removeDoComeco();
        }

        else if (posicao == totalDeElementos - 1) {

        } else {
            Celula atual = pegaCelula(posicao);
            var ant = atual.getAnterior();
            ant.setProximo(atual.getProximo());
        }
        totalDeElementos--;
    }

    public void removeDoFim() {
        if (totalDeElementos == 1) {
            removeDoComeco();
        } else {
            Celula penultima = this.ultima.getAnterior();
            penultima.setProximo(null);
            totalDeElementos--;
        }
    }

    public void removeDoComeco() {
        if (this.totalDeElementos == 0) {
            throw new IllegalArgumentException("lista vazia");
        }

        this.primeira = this.primeira.getProximo();
        this.totalDeElementos--;

        if (this.totalDeElementos == 1) {
            this.ultima = null;
        }
    }

    public int tamanho() {
        return totalDeElementos;
    }

    public boolean Contem(Object elemento) {
        Celula atual = this.primeira;
        while (atual != null) {
            if (atual.getElemento().equals(elemento))
                return true;
            atual = atual.getProximo();
        }
        return false;
    }

    @Override
    public String toString() {
        if (this.totalDeElementos == 0) {
            return "[]";
        }

        Celula atual = primeira;

        StringBuilder builder = new StringBuilder("[");

        for (int i = 0; i < totalDeElementos; i++) {
            builder.append(atual.getElemento());
            builder.append(",");

            atual = atual.getProximo();
        }
        builder.append("]");
        return builder.toString();
    }
}
