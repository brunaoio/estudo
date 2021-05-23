using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Threading.Tasks;

namespace exemplo_mongodb
{
    class acessandoMongoDb
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Começou");

            Task T = MainAsync(args);
            Console.WriteLine("Digite para sair");
            Console.ReadLine();
        }

        static async Task MainAsync(string[] args)
        {
            var doc = new BsonDocument
                {
                    {"Título", "Guerra dos Tronos"},
                    {"Autor", "George R R Martin"},
                    {"Ano", "1999"},
                    {"Páginas", "856"},
                };

            var assuntoArray = new BsonArray();
            assuntoArray.Add("Fantasia");
            assuntoArray.Add("Ação");
            doc.Add("Assunto", assuntoArray);

            await Task.Delay(10000);

            Console.WriteLine(doc);
        }
    }
}
