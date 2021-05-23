using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Text;

namespace exemplo_mongodb
{
    public class conectandoMongoDb
    {
        public const string CONN = "mongodb://127.0.0.1:27017";
        public const string DATABASE = "biblioteca";
        public const string COLECAO = "livros";


        static conectandoMongoDb()
        {
            Cliente = new MongoClient(CONN);
            Db = Cliente.GetDatabase(DATABASE);
        }

        private static IMongoClient Cliente { get; }

        private static IMongoDatabase Db { get; }

        public IMongoCollection<Livro> Livros
        {
            get { return Db.GetCollection<Livro>(COLECAO); }
        }
    }
}
