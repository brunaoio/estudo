using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace exemplo_mongodb
{
    public abstract class MongoDoc
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
    }
}