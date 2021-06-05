using System;
using C4Sharp.Models;
using C4Sharp.Models.Diagrams.Core;
using C4Sharp.Models.Plantuml;
using C4Sharp.Models.Relationships;
using static C4Sharp.Models.Relationships.Position;
using static c4sharp_example.Program.Persons;
using static c4sharp_example.Program.Systems;
using static C4Sharp.Models.Component;

namespace c4sharp_example
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            var diagram = new ContextDiagram
            {
                Title = "System Context diagram for Internet Banking System",
                Structures = new Structure[]{
                    Customer,
                    BankingSystem,
                    Mainframe,
                    MailSystem
                },
                Relationships = new Relationship[]
                {
                    (Customer > BankingSystem),
                    (Customer < MailSystem)["Sends e-mails to"],
                    (BankingSystem > MailSystem)["Sends e-mails", "SMTP"][Neighbor],
                    (BankingSystem > Mainframe),
                }
            };

            PlantumlFile.Save(diagram);
            PlantumlFile.Export(diagram);
        }


        public static class Persons
        {
            public static Person Customer => new(
                alias: "customer",
                label: "Personal Banking Customer",
                description: "A customer of the bank, with personal bank accounts."
            );
        }

        public static class Systems
        {
            public static SoftwareSystem BankingSystem => new(
                alias: "BankingSystem",
                label: "Internet Banking System",
                description: "Allows customers to view information ab..."
            );

            public static SoftwareSystem Mainframe => new(
                alias: "Mainframe",
                label: "Mainframe Banking System",
                description: "Stores all of the core banking informat..."
            //softwareSystemType: SoftwareSystemType.External
            );
            public static SoftwareSystem MailSystem => new(
                alias: "MailSystem",
                label: "E-mail system",
                description: "The internal Microsoft Exchange e-mail..."
            //softwareSystemType: SoftwareSystemType.External
            );
        }


    }


}
