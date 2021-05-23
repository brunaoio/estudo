using System;
using System.Collections.Generic;
using System.Text;
using MongoDB.Bson;
namespace exemplo_mongodb
{
    public class Livro : MongoDoc
    {   
        public string Titulo { get; set; }
        public string Autor { get; set; }
        public int Ano { get; set; }
        public int Paginas { get; set; }
        public List<string> Assunto { get; set; }
     
      
    }
}
