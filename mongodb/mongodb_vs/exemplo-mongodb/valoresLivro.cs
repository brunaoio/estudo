using System;
using System.Linq;

namespace exemplo_mongodb
{
    internal class valoresLivro
    {
        internal static Livro incluiValoresLivro(string titulo, string autor, int ano, int paginas, string assunto)
        {
            var livro = new Livro();
            livro.Paginas = paginas;
            livro.Titulo = titulo;
            livro.Autor = autor;
            livro.Ano = ano;
            livro.Assunto = (assunto.Split(",")).ToList();
            return livro;
        }
    }
}