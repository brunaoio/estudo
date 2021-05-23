using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace exemplo_mongodb
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Começou");
            var t = ListarLivrosAsync(args);
            Console.WriteLine("Digite para sair");
            Console.ReadLine();

        }

        static async Task InserirLivrosAsync(string[] args)
        {
            var livros = new List<Livro>();
            livros.Add(valoresLivro.incluiValoresLivro("A Dança com os Dragões", "George R R Martin", 2011, 934, "Fantasia, Ação"));
            livros.Add(valoresLivro.incluiValoresLivro("A Tormenta das Espadas", "George R R Martin", 2006, 1276, "Fantasia, Ação"));
            livros.Add(valoresLivro.incluiValoresLivro("Memórias Póstumas de Brás Cubas", "Machado de Assis", 1915, 267, "Literatura Brasileira"));
            livros.Add(valoresLivro.incluiValoresLivro("Star Trek Portal do Tempo", "Crispin A C", 2002, 321, "Fantasia, Ação"));
            livros.Add(valoresLivro.incluiValoresLivro("Star Trek Enigmas", "Dedopolus Tim", 2006, 195, "Ficção Científica, Ação"));
            livros.Add(valoresLivro.incluiValoresLivro("Emília no Pais da Gramática", "Monteiro Lobato", 1936, 230, "Infantil, Literatura Brasileira, Didático"));
            livros.Add(valoresLivro.incluiValoresLivro("Chapelzinho Amarelo", "Chico Buarque", 2008, 123, "Infantil, Literatura Brasileira"));
            livros.Add(valoresLivro.incluiValoresLivro("20000 Léguas Submarinas", "Julio Verne", 1894, 256, "Ficção Científica, Ação"));
            livros.Add(valoresLivro.incluiValoresLivro("Primeiros Passos na Matemática", "Mantin Ibanez", 2014, 190, "Didático, Infantil"));
            livros.Add(valoresLivro.incluiValoresLivro("Saúde e Sabor", "Yeomans Matthew", 2012, 245, "Culinária, Didático"));
            livros.Add(valoresLivro.incluiValoresLivro("Goldfinger", "Iam Fleming", 1956, 267, "Espionagem, Ação"));
            livros.Add(valoresLivro.incluiValoresLivro("Da Rússia com Amor", "Iam Fleming", 1966, 245, "Espionagem, Ação"));
            livros.Add(valoresLivro.incluiValoresLivro("O Senhor dos Aneis", "J R R Token", 1948, 1956, "Fantasia, Ação"));


            var conn = new conectandoMongoDb();
            await conn.Livros.InsertManyAsync(livros);
            Console.WriteLine("Documento Incluso");
        }

        static async Task ListarLivrosAsync(string[] args)
        {
            try
            {
                var conn = new conectandoMongoDb();
               
                var construtor = Builders<Livro>.Filter;
                var filtro =  construtor.Eq(x => x.Autor, "M. de Assis");

               
                var lLivros = await conn.Livros.Find(filtro).ToListAsync();
                lLivros.ForEach(x => Console.WriteLine(x.ToJson<Livro>()));

                await conn.Livros.DeleteManyAsync(filtro);

                Console.WriteLine("----------------------------------");
                lLivros = await conn.Livros.Find(filtro).ToListAsync();
                lLivros.ForEach(x => Console.WriteLine(x.ToJson<Livro>()));
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

        }


    }
}
