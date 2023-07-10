export const facets = JSON.parse(`[ {
    "@graph" : [ {
      "@id" : "dfc-f:AOC_FR",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
        "@id" : "gs1:PackagingMarkedLabelAccreditationCode-APPELLATION_ORIGINE_CONTROLEE"
      } ],
      "http://www.w3.org/2004/02/skos/core#altLabel" : [ {
        "@language" : "fr",
        "@value" : "AOC"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:LocalLabel"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Appellation d’origine contrôlée"
      }, {
        "@language" : "fr",
        "@value" : "Appellation d’origine contrôlée"
      } ]
    }, {
      "@id" : "dfc-f:AOP_EU",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
        "@id" : "gs1:PackagingMarkedLabelAccreditationCode-PROTECTED_DESIGNATION_OF_ORIGIN"
      } ],
      "http://www.w3.org/2004/02/skos/core#altLabel" : [ {
        "@language" : "en",
        "@value" : "AOP"
      }, {
        "@language" : "fr",
        "@value" : "AOP"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:LocalLabel"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Appellation d’origine protégée"
      }, {
        "@language" : "fr",
        "@value" : "Appellation d’origine protégée"
      } ]
    }, {
      "@id" : "dfc-f:Africa",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
        "@id" : "https://www.wikidata.org/wiki/Q15"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:TerritorialOrigin"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Africa"
      }, {
        "@language" : "fr",
        "@value" : "Afrique"
      } ]
    }, {
      "@id" : "dfc-f:Algae",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:NatureOrigin"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Algae"
      }, {
        "@language" : "fr",
        "@value" : "Algue"
      } ]
    }, {
      "@id" : "dfc-f:AnimalOrigin",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:NatureOrigin"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Animal"
      }, {
        "@language" : "fr",
        "@value" : "Animal"
      } ]
    }, {
      "@id" : "dfc-f:AnimalPartOrigin",
      "@type" : [ "skos:Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:PartOrigin"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#narrower" : [ {
        "@id" : "dfc-f:Bee"
      }, {
        "@id" : "dfc-f:Bull"
      }, {
        "@id" : "dfc-f:Cow"
      }, {
        "@id" : "dfc-f:Ewe"
      }, {
        "@id" : "dfc-f:Goat"
      }, {
        "@id" : "dfc-f:Hen"
      }, {
        "@id" : "dfc-f:Pig"
      }, {
        "@id" : "dfc-f:Quail"
      }, {
        "@id" : "dfc-f:Roster"
      }, {
        "@id" : "dfc-f:Sheep"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Part or product of animal"
      }, {
        "@language" : "fr",
        "@value" : "Partie ou produit d'un animal"
      } ]
    }, {
      "@id" : "dfc-f:Asia",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
        "@id" : "https://www.wikidata.org/wiki/Q48"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:TerritorialOrigin"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Asia"
      }, {
        "@language" : "fr",
        "@value" : "Asie"
      } ]
    }, {
      "@id" : "dfc-f:Australia",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
        "@id" : "https://www.wikidata.org/wiki/Q3960"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:Oceania"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Australia"
      }, {
        "@language" : "fr",
        "@value" : "Australie"
      } ]
    }, {
      "@id" : "dfc-f:AuvergneRhoneAlpes",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
        "@id" : "https://www.wikidata.org/wiki/Q18338206"
      } ],
      "http://www.w3.org/2004/02/skos/core#altLabel" : [ {
        "@language" : "fr",
        "@value" : "ARA"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:France"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Auvergne-Rhône-Alpes"
      }, {
        "@language" : "fr",
        "@value" : "Auvergne-Rhône-Alpes"
      } ]
    }, {
      "@id" : "dfc-f:Bacteria",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:NatureOrigin"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Bacteria"
      }, {
        "@language" : "fr",
        "@value" : "Bactérie"
      } ]
    }, {
      "@id" : "dfc-f:Bee",
      "@type" : [ "skos:Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:AnimalPartOrigin"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#narrower" : [ {
        "@id" : "dfc-f:BeeHoney"
      }, {
        "@id" : "dfc-f:BeePollen"
      }, {
        "@id" : "dfc-f:BeePropolis"
      }, {
        "@id" : "dfc-f:BeeVenom"
      }, {
        "@id" : "dfc-f:BeeWax"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "fr",
        "@value" : "Abeille"
      }, {
        "@language" : "en",
        "@value" : "Bee"
      } ]
    }, {
      "@id" : "dfc-f:BeeHoney",
      "@type" : [ "skos:Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:Bee"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Honey"
      }, {
        "@language" : "fr",
        "@value" : "Miel"
      } ]
    }, {
      "@id" : "dfc-f:BeePollen",
      "@type" : [ "skos:Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:Bee"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Pollen"
      }, {
        "@language" : "fr",
        "@value" : "Pollen"
      } ]
    }, {
      "@id" : "dfc-f:BeePropolis",
      "@type" : [ "skos:Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:Bee"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Propolis"
      }, {
        "@language" : "fr",
        "@value" : "Propolis"
      } ]
    }, {
      "@id" : "dfc-f:BeeVenom",
      "@type" : [ "skos:Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:Bee"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "fr",
        "@value" : "Venim d'abeille"
      }, {
        "@language" : "en",
        "@value" : "Venom"
      } ]
    }, {
      "@id" : "dfc-f:BeeWax",
      "@type" : [ "skos:Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:Bee"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "fr",
        "@value" : "Cire d'abeille"
      }, {
        "@language" : "en",
        "@value" : "Wax"
      } ]
    }, {
      "@id" : "dfc-f:Belgium",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
        "@id" : "https://www.wikidata.org/wiki/Q31"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:Europe"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Belgium"
      }, {
        "@language" : "fr",
        "@value" : "Belgique"
      } ]
    }, {
      "@id" : "dfc-f:BiodynamicLabel",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:Certification"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#narrower" : [ {
        "@id" : "dfc-f:Demeter"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Biodynamic label"
      }, {
        "@language" : "fr",
        "@value" : "Label biodynamie"
      } ]
    }, {
      "@id" : "dfc-f:BleuBlancCoeur_FR",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
        "@id" : "gs1:PackagingMarkedLabelAccreditationCode-BLEU_BLANC_COEUR"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:EthicalLabel"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Bleu-Blanc-Coeur"
      }, {
        "@language" : "fr",
        "@value" : "Bleu-Blanc-Coeur"
      } ]
    }, {
      "@id" : "dfc-f:BourgogneFrancheComte",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
        "@id" : "https://www.wikidata.org/wiki/Q18578267"
      } ],
      "http://www.w3.org/2004/02/skos/core#altLabel" : [ {
        "@language" : "en",
        "@value" : "Burgundy-Franche-Comté"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:France"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Bourgogne-Franche-Comté"
      }, {
        "@language" : "fr",
        "@value" : "Bourgogne-Franche-Comté"
      } ]
    }, {
      "@id" : "dfc-f:Brittany",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
        "@id" : "https://www.wikidata.org/wiki/Q12130"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:France"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Brittany"
      }, {
        "@language" : "fr",
        "@value" : "Bretagne"
      } ]
    }, {
      "@id" : "dfc-f:Bulb",
      "@type" : [ "skos:Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:PlantPartOrigin"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Bulb"
      }, {
        "@language" : "fr",
        "@value" : "Bulbe"
      } ]
    }, {
      "@id" : "dfc-f:Bull",
      "@type" : [ "skos:Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:AnimalPartOrigin"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#narrower" : [ {
        "@id" : "dfc-f:BullBody"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Bull"
      }, {
        "@language" : "fr",
        "@value" : "Bœuf"
      } ]
    }, {
      "@id" : "dfc-f:BullBody",
      "@type" : [ "skos:Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:Bull"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Bull's body"
      }, {
        "@language" : "fr",
        "@value" : "Partie du boeuf"
      } ]
    }, {
      "@id" : "dfc-f:CentreValLoire",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
        "@id" : "https://www.wikidata.org/wiki/Q13947"
      } ],
      "http://www.w3.org/2004/02/skos/core#altLabel" : [ {
        "@language" : "en",
        "@value" : "Centre Loire Valley"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:France"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Centre-Val de Loire"
      }, {
        "@language" : "fr",
        "@value" : "Centre-Val de Loire"
      } ]
    }, {
      "@id" : "dfc-f:Certification",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://purl.org/dc/terms/description" : [ {
        "@language" : "en",
        "@value" : "The certifications or labels obtained by the products. Example : AB, EU bio, DEMETER, Label Rouge..."
      }, {
        "@language" : "fr",
        "@value" : "Les certifications ou labels obtenus par les produits. Exemple : AB, EU bio, DEMETER, Label Rouge..."
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#narrower" : [ {
        "@id" : "dfc-f:OrganicLabel"
      }, {
        "@id" : "dfc-f:LocalLabel"
      }, {
        "@id" : "dfc-f:BiodynamicLabel"
      }, {
        "@id" : "dfc-f:EthicalLabel"
      }, {
        "@id" : "dfc-f:MarketingLabel"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Certification"
      }, {
        "@language" : "fr",
        "@value" : "Certification"
      } ],
      "http://www.w3.org/2004/02/skos/core#topConceptOf" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ]
    }, {
      "@id" : "dfc-f:Claim",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://purl.org/dc/terms/description" : [ {
        "@language" : "en",
        "@value" : "“A nutrition claim states or suggests that a food has beneficial nutritional properties, such as “low fat”, “no added sugar” and “high in fibre”. A health claim is any statement on labels, advertising or other marketing products that health benefits can result from consuming a given food, for instance that a food can help reinforce the body’s natural defences or enhance learning ability.“ (source : European Food Safety Authority, https://www.efsa.europa.eu/fr/topics/topic/health-claims)"
      }, {
        "@language" : "fr",
        "@value" : "“Les allégations nutritionnelles et de santé sont des mentions, images ou symboles valorisant les denrées alimentaires sur le plan nutritionnel ou de la santé. Ce sont par exemple les phrases du type « jus de fruit riche en vitamine C », « riche en calcium », « allégé en sucres », « bon pour le cœur », « le calcium est nécessaire à une ossature normale », etc.“ (source: Direction générale de la concurrence, de la consommation et de la répression des fraudes, https://www.economie.gouv.fr/dgccrf/Consommation/Etiquetage-des-produits/Allegations-nutrionnelles-et-de-sante)"
      } ],
      "http://www.w3.org/2004/02/skos/core#narrower" : [ {
        "@id" : "dfc-f:NutritionalClaim"
      }, {
        "@id" : "dfc-f:HealthClaim"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Nutrition and health claims"
      }, {
        "@language" : "fr",
        "@value" : "Allégations nutritionnelles et de santé"
      } ],
      "http://www.w3.org/2004/02/skos/core#topConceptOf" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ]
    }, {
      "@id" : "dfc-f:ContainsNutrientOrSubstance",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://purl.org/dc/terms/description" : [ {
        "@language" : "en",
        "@value" : "“A claim that a food contains a nutrient or another substance, for which specific conditions are not laid down in this Regulation, or any claim likely to have the same meaning for the consumer, may only be made where the product complies with all the applicable provisions of this Regulation, and in particular Article 5. For vitamins and minerals the conditions of the claim 'source of' shall apply.“ (source: Annex of Regulation (EC) No 1924/2006)"
      }, {
        "@language" : "fr",
        "@value" : "“Une allégation selon laquelle une denrée alimentaire contient un nutriment ou une autre substance pour lequel ou laquelle le présent règlement ne fixe pas de conditions particulières, ou toute autre allégation susceptible d'avoir le même sens pour le consommateur, ne peut être faite que si le produit respecte toutes les dispositions applicables du présent règlement, et notamment l'article 5. Pour les vitamines et les minéraux, les conditions prévues pour l'allégation «source de» s'appliquent.“ (source: Annex of Regulation (EC) No 1924/2006)"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:NutritionalClaim"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Contains nutrient or other substance"
      }, {
        "@language" : "fr",
        "@value" : "Contient nutriment ou autre substance"
      } ]
    }, {
      "@id" : "dfc-f:Corsica",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
        "@id" : "https://www.wikidata.org/wiki/Q14112"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:France"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Corsica"
      }, {
        "@language" : "fr",
        "@value" : "Corse"
      } ]
    }, {
      "@id" : "dfc-f:Cow",
      "@type" : [ "skos:Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:AnimalPartOrigin"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#narrower" : [ {
        "@id" : "dfc-f:CowBody"
      }, {
        "@id" : "dfc-f:CowMilk"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Cow"
      }, {
        "@language" : "fr",
        "@value" : "Vache"
      } ]
    }, {
      "@id" : "dfc-f:CowBody",
      "@type" : [ "skos:Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:Cow"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Cow's body"
      }, {
        "@language" : "fr",
        "@value" : "Partie de vache"
      } ]
    }, {
      "@id" : "dfc-f:CowMilk",
      "@type" : [ "skos:Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:Cow"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Cow milk"
      }, {
        "@language" : "fr",
        "@value" : "Lait de vache"
      } ]
    }, {
      "@id" : "dfc-f:DFC_ProductGlossary_Facet",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#ConceptScheme" ],
      "http://www.w3.org/2004/02/skos/core#hasTopConcept" : [ {
        "@id" : "dfc-f:Certification"
      }, {
        "@id" : "dfc-f:Claim"
      }, {
        "@id" : "dfc-f:TerritorialOrigin"
      }, {
        "@id" : "dfc-f:NatureOrigin"
      }, {
        "@id" : "dfc-f:PartOrigin"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "fr",
        "@value" : "Glossaire des facettes de produit"
      }, {
        "@language" : "en",
        "@value" : "Product glossary facets"
      } ]
    }, {
      "@id" : "dfc-f:Demeter",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
        "@id" : "gs1:PackagingMarkedLabelAccreditationCode-DEMETER_LABEL"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:BiodynamicLabel"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Demeter"
      }, {
        "@language" : "fr",
        "@value" : "Demeter"
      } ]
    }, {
      "@id" : "dfc-f:EnergyFree",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://purl.org/dc/terms/description" : [ {
        "@language" : "en",
        "@value" : "“A claim that a food is energy-free, and any claim likely to have the same meaning for the consumer, may only be made where the product does not contain more than 4 kcal (17 kJ)/100 ml. For table-top sweeteners the limit of 0,4 kcal (1,7 kJ)/portion, with equivalent sweetening properties to 6 g of sucrose (approximately 1 teaspoon of sucrose), applies.“ (source: Annex of Regulation (EC) No 1924/2006)"
      }, {
        "@language" : "fr",
        "@value" : "“Une allégation selon laquelle une denrée alimentaire n'a pas d'apport énergétique, ou toute autre allégation susceptible d'avoir le même sens pour le consommateur, ne peut être faite que si le produit contient au maximum 4 kcal (17 kJ)/100 ml. Dans le cas des édulcorants de table, la limite de 0,4 kcal (1,7 kJ)/portion, ayant des propriétés édulcorantes équivalentes à 6 g de saccharose (approximativement 1 petite cuillérée de saccharose), s'applique.“ (source: Annex of Regulation (EC) No 1924/2006)"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:NutritionalClaim"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Energy free"
      }, {
        "@language" : "fr",
        "@value" : "Sans apport énergétique"
      } ]
    }, {
      "@id" : "dfc-f:EnergyReduced",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://purl.org/dc/terms/description" : [ {
        "@language" : "en",
        "@value" : "“A claim that a food is energy-reduced, and any claim likely to have the same meaning for the consumer, may only be made where the energy value is reduced by at least 30%, with an indication of the characteristic(s) which make(s) the food reduced in its total energy value.“ (source: Annex of Regulation (EC) No 1924/2006)"
      }, {
        "@language" : "fr",
        "@value" : "“Une allégation selon laquelle une denrée alimentaire a une valeur énergétique réduite, ou toute autre allégation susceptible d'avoir le même sens pour le consommateur, ne peut être faite que si la valeur énergétique est réduite d'au moins 30 %, en indiquant la ou les caractéristiques entraînant la réduction de la valeur énergétique totale de la denrée alimentaire.“ (source: Annex of Regulation (EC) No 1924/2006)"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:NutritionalClaim"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Energy reduced"
      }, {
        "@language" : "fr",
        "@value" : "Valeur énergétique réduite"
      } ]
    }, {
      "@id" : "dfc-f:England",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
        "@id" : "https://www.wikidata.org/wiki/Q21"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:UnitedKingdom"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "England"
      }, {
        "@language" : "fr",
        "@value" : "Angleterre"
      } ]
    }, {
      "@id" : "dfc-f:EthicalLabel",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:Certification"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#narrower" : [ {
        "@id" : "dfc-f:Milk-fed"
      }, {
        "@id" : "dfc-f:RedLabel_FR"
      }, {
        "@id" : "dfc-f:FSC"
      }, {
        "@id" : "dfc-f:MSC"
      }, {
        "@id" : "dfc-f:HEV"
      }, {
        "@id" : "dfc-f:BleuBlancCoeur_FR"
      }, {
        "@id" : "dfc-f:FairTradeMaxHaavelar"
      }, {
        "@id" : "dfc-f:RainforestAlliance"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Ethical label"
      }, {
        "@language" : "fr",
        "@value" : "Label éthique"
      } ]
    }, {
      "@id" : "dfc-f:Europe",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
        "@id" : "https://www.wikidata.org/wiki/Q46"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:TerritorialOrigin"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#narrower" : [ {
        "@id" : "dfc-f:France"
      }, {
        "@id" : "dfc-f:UnitedKingdom"
      }, {
        "@id" : "dfc-f:Ireland"
      }, {
        "@id" : "dfc-f:Belgium"
      }, {
        "@id" : "dfc-f:Germany"
      }, {
        "@id" : "dfc-f:Spain"
      }, {
        "@id" : "dfc-f:Portugal"
      }, {
        "@id" : "dfc-f:Italy"
      }, {
        "@id" : "dfc-f:Switzerland"
      }, {
        "@id" : "dfc-f:Netherlands"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Europe"
      }, {
        "@language" : "fr",
        "@value" : "Europe"
      } ]
    }, {
      "@id" : "dfc-f:Ewe",
      "@type" : [ "skos:Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:AnimalPartOrigin"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#narrower" : [ {
        "@id" : "dfc-f:EweBody"
      }, {
        "@id" : "dfc-f:EweMilk"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "fr",
        "@value" : "Brebis"
      }, {
        "@language" : "en",
        "@value" : "Ewe"
      } ]
    }, {
      "@id" : "dfc-f:EweBody",
      "@type" : [ "skos:Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:Ewe"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Ewe's body"
      }, {
        "@language" : "fr",
        "@value" : "Partie de brebis"
      } ]
    }, {
      "@id" : "dfc-f:EweMilk",
      "@type" : [ "skos:Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:Ewe"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "fr",
        "@value" : "Lait de brebis"
      }, {
        "@language" : "en",
        "@value" : "Sheep milk"
      } ]
    }, {
      "@id" : "dfc-f:FSC",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
        "@id" : "gs1:PackagingMarkedLabelAccreditationCode-FOREST_STEWARDSHIP_COUNCIL_LABEL"
      } ],
      "http://www.w3.org/2004/02/skos/core#altLabel" : [ {
        "@language" : "en",
        "@value" : "FSC"
      }, {
        "@language" : "fr",
        "@value" : "FSC"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:EthicalLabel"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Forest Stewardship Council"
      }, {
        "@language" : "fr",
        "@value" : "Forêt durable FSC"
      } ]
    }, {
      "@id" : "dfc-f:FairTradeMaxHaavelar",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
        "@id" : "gs1:PackagingMarkedLabelAccreditationCode-MAX_HAVELAAR"
      } ],
      "http://www.w3.org/2004/02/skos/core#altLabel" : [ {
        "@language" : "en",
        "@value" : "Max Haavelar"
      }, {
        "@language" : "fr",
        "@value" : "Max Haavelar"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:EthicalLabel"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Fairtrade Max Haavelar"
      }, {
        "@language" : "fr",
        "@value" : "Fairtrade Max Haavelar"
      } ]
    }, {
      "@id" : "dfc-f:FatFree",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://purl.org/dc/terms/description" : [ {
        "@language" : "en",
        "@value" : "“A claim that a food is fat-free, and any claim likely to have the same meaning for the consumer, may only be made where the product contains no more than 0,5 g of fat per 100 g or 100 ml. However, claims expressed as 'X % fat-free' shall be prohibited.“ (source: Annex of Regulation (EC) No 1924/2006)"
      }, {
        "@language" : "fr",
        "@value" : "“Une allégation selon laquelle une denrée alimentaire ne contient pas de matières grasses, ou toute autre allégation susceptible d'avoir le même sens pour le consommateur, ne peut être faite que si le produit ne contient pas plus de 0,5 g de matières grasses par 100 g ou par 100 ml. Cependant, les allégations du type «à X % sans matières grasses» sont interdites.“ (source: Annex of Regulation (EC) No 1924/2006)"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:NutritionalClaim"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Fat-free"
      }, {
        "@language" : "fr",
        "@value" : "Sans matières grasses"
      } ]
    }, {
      "@id" : "dfc-f:Flower",
      "@type" : [ "skos:Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:PlantPartOrigin"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "fr",
        "@value" : "Fleur"
      }, {
        "@language" : "en",
        "@value" : "Flower"
      } ]
    }, {
      "@id" : "dfc-f:France",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2004/02/skos/core#altLabel" : [ {
        "@language" : "en",
        "@value" : "FR"
      }, {
        "@language" : "fr",
        "@value" : "FR"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:Europe"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#isDefinedBy" : [ {
        "@id" : "https://www.wikidata.org/wiki/Q142"
      } ],
      "http://www.w3.org/2004/02/skos/core#narrower" : [ {
        "@id" : "dfc-f:AuvergneRhoneAlpes"
      }, {
        "@id" : "dfc-f:BourgogneFrancheComte"
      }, {
        "@id" : "dfc-f:Brittany"
      }, {
        "@id" : "dfc-f:CentreValLoire"
      }, {
        "@id" : "dfc-f:Corsica"
      }, {
        "@id" : "dfc-f:GrandEst"
      }, {
        "@id" : "dfc-f:HautsDeFrance"
      }, {
        "@id" : "dfc-f:IleDeFrance"
      }, {
        "@id" : "dfc-f:Normandy"
      }, {
        "@id" : "dfc-f:NouvelleAquitaine"
      }, {
        "@id" : "dfc-f:Occitania"
      }, {
        "@id" : "dfc-f:PaysDeLoire"
      }, {
        "@id" : "dfc-f:ProvenceAlpesCotesAzur"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "France"
      }, {
        "@language" : "fr",
        "@value" : "France"
      } ]
    }, {
      "@id" : "dfc-f:Fruit",
      "@type" : [ "skos:Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:PlantPartOrigin"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Fruit"
      }, {
        "@language" : "fr",
        "@value" : "Fruit"
      } ]
    }, {
      "@id" : "dfc-f:Funghi",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:NatureOrigin"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Funghi"
      }, {
        "@language" : "fr",
        "@value" : "Champignon"
      } ]
    }, {
      "@id" : "dfc-f:Germany",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
        "@id" : "https://www.wikidata.org/wiki/Q183"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:Europe"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Germany"
      }, {
        "@language" : "fr",
        "@value" : "Allemagne"
      } ]
    }, {
      "@id" : "dfc-f:GlutenFree",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:OtherClaim"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Gluten free"
      }, {
        "@language" : "fr",
        "@value" : "Sans gluten"
      } ]
    }, {
      "@id" : "dfc-f:Goat",
      "@type" : [ "skos:Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:AnimalPartOrigin"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#narrower" : [ {
        "@id" : "dfc-f:GoatBody"
      }, {
        "@id" : "dfc-f:GoatMilk"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "fr",
        "@value" : "Chèvre"
      }, {
        "@language" : "en",
        "@value" : "Goat"
      } ]
    }, {
      "@id" : "dfc-f:GoatBody",
      "@type" : [ "skos:Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:Goat"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Goat's body"
      }, {
        "@language" : "fr",
        "@value" : "Partie de chèvre"
      } ]
    }, {
      "@id" : "dfc-f:GoatMilk",
      "@type" : [ "skos:Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:Goat"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "fr",
        "@value" : "Lait de brebis"
      }, {
        "@language" : "en",
        "@value" : "Goat milk"
      } ]
    }, {
      "@id" : "dfc-f:GrandEst",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
        "@id" : "https://www.wikidata.org/wiki/Q18677983"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:France"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Grand Est"
      }, {
        "@language" : "fr",
        "@value" : "Grand Est"
      } ]
    }, {
      "@id" : "dfc-f:HEV",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
        "@id" : "gs1:PackagingMarkedLabelAccreditationCode-HAUTE_VALEUR_ENVIRONNEMENTALE"
      } ],
      "http://www.w3.org/2004/02/skos/core#altLabel" : [ {
        "@language" : "en",
        "@value" : "HEV"
      }, {
        "@language" : "fr",
        "@value" : "HVE"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:EthicalLabel"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "High Environnemental Value"
      }, {
        "@language" : "fr",
        "@value" : "Haute Valeur Environnementale"
      } ]
    }, {
      "@id" : "dfc-f:HautsDeFrance",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
        "@id" : "https://www.wikidata.org/wiki/Q18677767"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:France"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Hauts-de-France"
      }, {
        "@language" : "fr",
        "@value" : "Hauts-de-France"
      } ]
    }, {
      "@id" : "dfc-f:HealthClaim",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://purl.org/dc/terms/description" : [ {
        "@language" : "en",
        "@value" : "A health claim is any statement about a relationship between food and health."
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:Claim"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Health claim"
      }, {
        "@language" : "fr",
        "@value" : "Allégation santé"
      } ]
    }, {
      "@id" : "dfc-f:Hen",
      "@type" : [ "skos:Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:AnimalPartOrigin"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#narrower" : [ {
        "@id" : "dfc-f:HenBody"
      }, {
        "@id" : "dfc-f:HenEgg"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Hen"
      }, {
        "@language" : "fr",
        "@value" : "Poule"
      } ]
    }, {
      "@id" : "dfc-f:HenBody",
      "@type" : [ "skos:Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:Hen"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Hen's body"
      }, {
        "@language" : "fr",
        "@value" : "Partie de poule"
      } ]
    }, {
      "@id" : "dfc-f:HenEgg",
      "@type" : [ "skos:Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:Hen"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Hen's egg"
      }, {
        "@language" : "fr",
        "@value" : "Œuf de poule"
      } ]
    }, {
      "@id" : "dfc-f:HighFibre",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://purl.org/dc/terms/description" : [ {
        "@language" : "en",
        "@value" : "“A claim that a food is high in fibre, and any claim likely to have the same meaning for the consumer, may only be made where the product contains at least 6 g of fibre per 100 g or at least 3 g of fibre per 100 kcal.“ (source: Annex of Regulation (EC) No 1924/2006)"
      }, {
        "@language" : "fr",
        "@value" : "“Une allégation selon laquelle une denrée alimentaire est riche en fibres, ou toute autre allégation susceptible d'avoir le même sens pour le consommateur, ne peut être faite que si le produit contient au moins 6 g de fibres par 100 g ou au moins 3 g de fibres par 100 kcal.“ (source: Annex of Regulation (EC) No 1924/2006)"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:NutritionalClaim"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "High fibre"
      }, {
        "@language" : "fr",
        "@value" : "Riche en fibres"
      } ]
    }, {
      "@id" : "dfc-f:HighMonounsaturatedFat",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://purl.org/dc/terms/description" : [ {
        "@language" : "en",
        "@value" : "“A claim that a food is high in monounsaturated fat, and any claim likely to have the same meaning for the consumer, may only be made where at least 45% of the fatty acids present in the product derive from monounsaturated fat under the condition that monounsaturated fat provides more than 20% of energy of the product.“ (source: Annex of Regulation (EC) No 1924/2006)"
      }, {
        "@language" : "fr",
        "@value" : "“Une allégation selon laquelle une denrée alimentaire est riche en graisses monoinsaturées, ou toute allégation susceptible d’avoir le même sens pour le consommateur, ne peut être faite que si le produit contient au moins 45 % d’acides gras dérivés de graisses monoinsaturées et si l’énergie fournie par les graisses monoinsaturées représente plus de 20 % de l’apport énergétique du produit.“ (source: Annex of Regulation (EC) No 1924/2006)"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:NutritionalClaim"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "High monounsaturated fat"
      }, {
        "@language" : "fr",
        "@value" : "Riche en graisses monoinsaturées"
      } ]
    }, {
      "@id" : "dfc-f:HighOmega3FattyAcids",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://purl.org/dc/terms/description" : [ {
        "@language" : "en",
        "@value" : "“A claim that a food is high in omega-3 fatty acids, and any claim likely to have the same meaning for the consumer, may only be made where the product contains at least 0,6 g alpha-linolenic acid per 100 g and per 100 kcal, or at least 80 mg of the sum of eicosapentaenoic acid and docosahexaenoic acid per 100 g and per 100 kcal.“ (source: Annex of Regulation (EC) No 1924/2006)"
      }, {
        "@language" : "fr",
        "@value" : "“Une allégation selon laquelle une denrée alimentaire est riche en acide gras oméga-3, ou toute allégation susceptible d’avoir le même sens pour le consommateur, ne peut être faite que si le produit contient au moins 0,6 g d’acide alphalinolénique pour 100 g et 100 kcal, ou au moins 80 mg d’acide eicosapentaénoïque et d’acide docosahexénoïque combinés pour 100 g et 100 kcal.“ (source: Annex of Regulation (EC) No 1924/2006)"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:NutritionalClaim"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "High omega-3 fatty acids"
      }, {
        "@language" : "fr",
        "@value" : "Riche en acide gras Oméga-3"
      } ]
    }, {
      "@id" : "dfc-f:HighPolyunsaturatedFat",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://purl.org/dc/terms/description" : [ {
        "@language" : "en",
        "@value" : "“A claim that a food is high in polyunsaturated fat, and any claim likely to have the same meaning for the consumer, may only be made where at least 45% of the fatty acids present in the product derive from polyunsaturated fat under the condition that polyunsaturated fat provides more than 20% of energy of the product.“ (source: Annex of Regulation (EC) No 1924/2006)"
      }, {
        "@language" : "fr",
        "@value" : "“Une allégation selon laquelle une denrée alimentaire est riche en graisses polyinsaturées, ou toute allégation susceptible d’avoir le même sens pour le consommateur, ne peut être faite que si le produit contient au moins 45 % d’acides gras dérivés de graisses polyinsaturées et si l’énergie fournie par les graisses polyinsaturées représente plus de 20 % de l’apport énergétique du produit.“ (source: Annex of Regulation (EC) No 1924/2006)"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:NutritionalClaim"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "High polyunsaturated fat"
      }, {
        "@language" : "fr",
        "@value" : "Riche en graisses polyinsaturées"
      } ]
    }, {
      "@id" : "dfc-f:HighProtein",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://purl.org/dc/terms/description" : [ {
        "@language" : "en",
        "@value" : "“A claim that a food is high in protein, and any claim likely to have the same meaning for the consumer, may only be made where at least 20% of the energy value of the food is provided by protein.“ (source: Annex of Regulation (EC) No 1924/2006)"
      }, {
        "@language" : "fr",
        "@value" : "“Une allégation selon laquelle une denrée alimentaire est riche en protéines, ou toute autre allégation susceptible d'avoir le même sens pour le consommateur, ne peut être faite que si 20 % au moins de la valeur énergétique de la denrée alimentaire sont produits par des protéines.“ (source: Annex of Regulation (EC) No 1924/2006)"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:NutritionalClaim"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "High protein"
      }, {
        "@language" : "fr",
        "@value" : "Riche en protéines"
      } ]
    }, {
      "@id" : "dfc-f:HighUnsaturatedFat",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://purl.org/dc/terms/description" : [ {
        "@language" : "en",
        "@value" : "“A claim that a food is high in unsaturated fat, and any claim likely to have the same meaning for the consumer may only be made where at least 70% of the fatty acids present in the product derive from unsaturated fat under the condition that unsaturated fat provides more than 20% of energy of the product.“ (source: Annex of Regulation (EC) No 1924/2006)"
      }, {
        "@language" : "fr",
        "@value" : "“Une allégation selon laquelle une denrée alimentaire est riche en graisses insaturées, ou toute allégation susceptible d’avoir le même sens pour le consommateur, ne peut être faite que si le produit contient au moins 70 % d’acides gras dérivés de graisses insaturées et si l’énergie fournie par les graisses insaturées représente plus de 20 % de l’apport énergétique du produit.“ (source: Annex of Regulation (EC) No 1924/2006)"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:NutritionalClaim"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "High unsaturated fat"
      }, {
        "@language" : "fr",
        "@value" : "Riche en graisses insaturées"
      } ]
    }, {
      "@id" : "dfc-f:HighVitaminsMinerals",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://purl.org/dc/terms/description" : [ {
        "@language" : "en",
        "@value" : "“A claim that a food is high in vitamins and/or minerals, and any claim likely to have the same meaning for the consumer, may only be made where the product contains at least twice the value of ‘source of [NAME OF VITAMIN/S] and/or [NAME OF MINERAL/S]’.“ (source: Annex of Regulation (EC) No 1924/2006)"
      }, {
        "@language" : "fr",
        "@value" : "“Une allégation selon laquelle une denrée alimentaire est riche en vitamines et/ou en minéraux, ou toute autre allégation susceptible d'avoir le même sens pour le consommateur, ne peut être faite que si le produit contient au moins deux fois la teneur requise pour l'allégation «source de [NOM DES VITAMINES] et/ou [NOM DES MINÉRAUX]».“ (source: Annex of Regulation (EC) No 1924/2006)"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:NutritionalClaim"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "High vitamins and/or minerals"
      }, {
        "@language" : "fr",
        "@value" : "Riche en vitamines et/ou de minéraux"
      } ]
    }, {
      "@id" : "dfc-f:IGP_EU",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
        "@id" : "gs1:PackagingMarkedLabelAccreditationCode-IGP"
      } ],
      "http://www.w3.org/2004/02/skos/core#altLabel" : [ {
        "@language" : "en",
        "@value" : "IGP"
      }, {
        "@language" : "fr",
        "@value" : "IGP"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:LocalLabel"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Indication géographique de provenance"
      }, {
        "@language" : "fr",
        "@value" : "Indication géographique de provenance"
      } ]
    }, {
      "@id" : "dfc-f:IleDeFrance",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
        "@id" : "https://www.wikidata.org/wiki/Q13917"
      } ],
      "http://www.w3.org/2004/02/skos/core#altLabel" : [ {
        "@language" : "en",
        "@value" : "Parisian region"
      }, {
        "@language" : "fr",
        "@value" : "IDF"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:France"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Ile-de-France"
      }, {
        "@language" : "fr",
        "@value" : "Île-de-France"
      } ]
    }, {
      "@id" : "dfc-f:IncreasedNutrient",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://purl.org/dc/terms/description" : [ {
        "@language" : "en",
        "@value" : "“A claim stating that the content in one or more nutrients, other than vitamins and minerals, has been increased, and any claim likely to have the same meaning for the consumer, may only be made where the product meets the conditions for the claim ‘source of’ and the increase in content is at least 30% compared to a similar product.“ (source: Annex of Regulation (EC) No 1924/2006)"
      }, {
        "@language" : "fr",
        "@value" : "“Une allégation affirmant que la teneur en un ou plusieurs nutriments, autres que des vitamines ou des minéraux, a été augmentée, ou toute autre allégation susceptible d'avoir le même sens pour le consommateur, ne peut être faite que si le produit remplit les conditions applicables à l'allégation «source de» et si l'augmentation de cette teneur est d'au moins 30 % par rapport à un produit similaire.“ (source: Annex of Regulation (EC) No 1924/2006)"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:NutritionalClaim"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Increased nutrient"
      }, {
        "@language" : "fr",
        "@value" : "Enrichi en nutriment"
      } ]
    }, {
      "@id" : "dfc-f:Ireland",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
        "@id" : "https://www.wikidata.org/wiki/Q27"
      } ],
      "http://www.w3.org/2004/02/skos/core#altLabel" : [ {
        "@language" : "en",
        "@value" : "Ireland"
      }, {
        "@language" : "fr",
        "@value" : "Irlande"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:Europe"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Republic of Ireland"
      }, {
        "@language" : "fr",
        "@value" : "République d'Irlande"
      } ]
    }, {
      "@id" : "dfc-f:Italy",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
        "@id" : "https://www.wikidata.org/wiki/Q38"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:Europe"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Italy"
      }, {
        "@language" : "fr",
        "@value" : "Italie"
      } ]
    }, {
      "@id" : "dfc-f:Leaf",
      "@type" : [ "skos:Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:PlantPartOrigin"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "fr",
        "@value" : "Feuille"
      }, {
        "@language" : "en",
        "@value" : "Leaf"
      } ]
    }, {
      "@id" : "dfc-f:Light",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://purl.org/dc/terms/description" : [ {
        "@language" : "en",
        "@value" : "“A claim stating that a product is ‘light’ or ‘lite’, and any claim likely to have the same meaning for the consumer, shall follow the same conditions as those set for the term ‘reduced’; the claim shall also be accompanied by an indication of the characteristic(s) which make(s) the food 'light' or 'lite'.“ (source: Annex of Regulation (EC) No 1924/2006)"
      }, {
        "@language" : "fr",
        "@value" : "“Une allégation selon laquelle un produit est «allégé» ou «light», ou toute autre allégation susceptible d'avoir le même sens pour le consommateur, doit remplir les mêmes conditions que celles applicables aux termes «réduit en»; elle doit aussi être accompagnée d'une indication de la ou les caractéristiques entraînant l'allégement de la denrée alimentaire.“ (source: Annex of Regulation (EC) No 1924/2006)"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:NutritionalClaim"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "fr",
        "@value" : "Allégé/Light"
      }, {
        "@language" : "en",
        "@value" : "Light/Lite"
      } ]
    }, {
      "@id" : "dfc-f:LightLite",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://purl.org/dc/terms/description" : [ {
        "@language" : "en",
        "@value" : "“A claim stating that a product is ‘light’ or ‘lite’, and any claim likely to have the same meaning for the consumer, shall follow the same conditions as those set for the term ‘reduced’; the claim shall also be accompanied by an indication of the characteristic(s) which make(s) the food 'light' or 'lite'.“ (source: Annex of Regulation (EC) No 1924/2006)"
      }, {
        "@language" : "fr",
        "@value" : "“Une allégation selon laquelle un produit est «allégé» ou «light», ou toute autre allégation susceptible d'avoir le même sens pour le consommateur, doit remplir les mêmes conditions que celles applicables aux termes «réduit en»; elle doit aussi être accompagnée d'une indication de la ou les caractéristiques entraînant l'allégement de la denrée alimentaire.“ (source: Annex of Regulation (EC) No 1924/2006)"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:NutritionalClaim"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Low/Light"
      }, {
        "@language" : "fr",
        "@value" : "Allégé/Light"
      } ]
    }, {
      "@id" : "dfc-f:LocalLabel",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:Certification"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#narrower" : [ {
        "@id" : "dfc-f:PaysansDeNature_FR"
      }, {
        "@id" : "dfc-f:AOC_FR"
      }, {
        "@id" : "dfc-f:PGS"
      }, {
        "@id" : "dfc-f:AOP_EU"
      }, {
        "@id" : "dfc-f:IGP_EU"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Local label"
      }, {
        "@language" : "fr",
        "@value" : "Label local"
      } ]
    }, {
      "@id" : "dfc-f:LowEnergy",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://purl.org/dc/terms/description" : [ {
        "@language" : "en",
        "@value" : "“A claim that a food is low in energy, and any claim likely to have the same meaning for the consumer, may only be made where the product does not contain more than 40 kcal (170 kJ)/100 g for solids or more than 20 kcal (80 kJ)/100 ml for liquids. For table-top sweeteners the limit of 4 kcal (17 kJ)/portion, with equivalent sweetening properties to 6 g of sucrose (approximately 1 teaspoon of sucrose), applies.“ (source: Annex of Regulation (EC) No 1924/2006)"
      }, {
        "@language" : "fr",
        "@value" : "“Une allégation selon laquelle une denrée alimentaire a une faible valeur énergétique, ou toute autre allégation susceptible d'avoir le même sens pour le consommateur, ne peut être faite que pour un produit contenant au maximum 40 kcal (170 kJ)/100 g dans le cas des solides ou au maximum 20 kcal (80 kJ)/100 ml dans le cas des liquides. Dans le cas des édulcorants de table, la limite de 4 kcal (17 kJ)/portion, avec des propriétés édulcorantes équivalentes à 6 g de saccharose (approximativement 1 petite cuillérée de saccharose), s'applique.“ (source: Annex of Regulation (EC) No 1924/2006)"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:NutritionalClaim"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Low energy"
      }, {
        "@language" : "fr",
        "@value" : "Faible valeur énergétique"
      } ]
    }, {
      "@id" : "dfc-f:LowFat",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://purl.org/dc/terms/description" : [ {
        "@language" : "en",
        "@value" : "“A claim that a food is low in fat, and any claim likely to have the same meaning for the consumer, may only be made where the product contains no more than 3 g of fat per 100 g for solids or 1,5 g of fat per 100 ml for liquids (1,8 g of fat per 100 ml for semi-skimmed milk).“ (source: Annex of Regulation (EC) No 1924/2006)"
      }, {
        "@language" : "fr",
        "@value" : "“Une allégation selon laquelle une denrée alimentaire a une faible teneur en matières grasses, ou toute autre allégation susceptible d'avoir le même sens pour le consommateur, ne peut être faite que si le produit ne contient pas plus de 3 g de matières grasses par 100 g dans le cas des solides ou 1,5 g de matières grasses par 100 ml dans le cas des liquides (1,8 g de matières grasses par 100 ml pour le lait demi-écrémé).“ (source: Annex of Regulation (EC) No 1924/2006)"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:NutritionalClaim"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Low fat"
      }, {
        "@language" : "fr",
        "@value" : "Faible teneur en matière grasse"
      } ]
    }, {
      "@id" : "dfc-f:LowSaturatedFat",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://purl.org/dc/terms/description" : [ {
        "@language" : "en",
        "@value" : "“A claim that a food is low in saturated fat, and any claim likely to have the same meaning for the consumer, may only be made if the sum of saturated fatty acids and trans-fatty acids in the product does not exceed 1,5 g per 100 g for solids or 0,75 g/100 ml for liquids and in either case the sum of saturated fatty acids and trans-fatty acids must not provide more than 10% of energy.“ (source: Annex of Regulation (EC) No 1924/2006)"
      }, {
        "@language" : "fr",
        "@value" : "“Une allégation selon laquelle une denrée alimentaire a une faible teneur en graisses saturées, ou toute autre allégation susceptible d'avoir le même sens pour le consommateur, ne peut être faite que si la somme des acides gras saturés et des acides gras trans contenus dans le produit n'est pas supérieure à 1,5 g par 100 g de solide ou à 0,75 g par 100 ml de liquide, la somme des acides gras saturés et des acides gras trans ne pouvant pas produire, dans les deux cas, plus de 10 % de l'énergie.“ (source: Annex of Regulation (EC) No 1924/2006)"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:NutritionalClaim"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Low saturated fat"
      }, {
        "@language" : "fr",
        "@value" : "Faible teneur en graisses saturées"
      } ]
    }, {
      "@id" : "dfc-f:LowSodiumSalt",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://purl.org/dc/terms/description" : [ {
        "@language" : "en",
        "@value" : "“A claim that a food is low in sodium/salt, and any claim likely to have the same meaning for the consumer, may only be made where the product contains no more than 0,12 g of sodium, or the equivalent value for salt, per 100 g or per 100 ml. For waters, other than natural mineral waters falling within the scope of Directive 80/777/EEC, this value should not exceed 2 mg of sodium per 100 ml.“ (source: Annex of Regulation (EC) No 1924/2006)"
      }, {
        "@language" : "fr",
        "@value" : "“Une allégation selon laquelle une denrée alimentaire est pauvre en sodium ou en sel, ou toute autre allégation susceptible d'avoir le même sens pour le consommateur, ne peut être faite que si le produit ne contient pas plus de 0,12 g de sodium ou de l'équivalent en sel par 100 g ou par 100 ml. En ce qui concerne les eaux, autres que les eaux minérales naturelles relevant du champ d'application de la directive 80/777/CEE, cette valeur ne devrait pas être supérieure à 2 mg de sodium par 100 ml.“ (source: Annex of Regulation (EC) No 1924/2006)"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:NutritionalClaim"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Low sodium/salt"
      }, {
        "@language" : "fr",
        "@value" : "Pauvre en sodium/sel"
      } ]
    }, {
      "@id" : "dfc-f:LowSugars",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://purl.org/dc/terms/description" : [ {
        "@language" : "en",
        "@value" : "“A claim that a food is low in sugars, and any claim likely to have the same meaning for the consumer, may only be made where the product contains no more than 5 g of sugars per 100 g for solids or 2,5 g of sugars per 100 ml for liquids.“ (source: Annex of Regulation (EC) No 1924/2006)"
      }, {
        "@language" : "fr",
        "@value" : "“Une allégation selon laquelle une denrée alimentaire a une faible teneur en sucres, ou toute autre allégation susceptible d'avoir le même sens pour le consommateur, ne peut être faite que si le produit ne contient pas plus de 5 g de sucres par 100 g dans le cas des solides ou 2,5 g de sucres par 100 ml dans le cas des liquides.“ (source: Annex of Regulation (EC) No 1924/2006)"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:NutritionalClaim"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Low sugars"
      }, {
        "@language" : "fr",
        "@value" : "Faible teneur en sucres"
      } ]
    }, {
      "@id" : "dfc-f:MSC",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
        "@id" : "gs1:PackagingMarkedLabelAccreditationCode-MARINE_STEWARDSHIP_COUNCIL_LABEL"
      } ],
      "http://www.w3.org/2004/02/skos/core#altLabel" : [ {
        "@language" : "en",
        "@value" : "MSC"
      }, {
        "@language" : "fr",
        "@value" : "MSC"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:EthicalLabel"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Marine Stewardship Council"
      }, {
        "@language" : "fr",
        "@value" : "Pêche durable MSC"
      } ]
    }, {
      "@id" : "dfc-f:MarketingLabel",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:Certification"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#narrower" : [ {
        "@id" : "dfc-f:ProductOfTheYear"
      }, {
        "@id" : "dfc-f:TasteOfTheYear"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Marketing label"
      }, {
        "@language" : "fr",
        "@value" : "Label marketing"
      } ]
    }, {
      "@id" : "dfc-f:Milk-fed",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:EthicalLabel"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Milk-fed"
      }, {
        "@language" : "fr",
        "@value" : "Nourri au lait"
      } ]
    }, {
      "@id" : "dfc-f:Mineral",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:NatureOrigin"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Mineral"
      }, {
        "@language" : "fr",
        "@value" : "Minéral"
      } ]
    }, {
      "@id" : "dfc-f:MultiGeoOrigin",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:TerritorialOrigin"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Multi-territorial origin"
      }, {
        "@language" : "fr",
        "@value" : "Origine territorial multiple"
      } ]
    }, {
      "@id" : "dfc-f:MultiNatureOrigin",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:NatureOrigin"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Multiorigin"
      }, {
        "@language" : "fr",
        "@value" : "Origine multiple"
      } ]
    }, {
      "@id" : "dfc-f:MultiOrigin",
      "@type" : [ "skos:Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:PartOrigin"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Multiorigin"
      }, {
        "@language" : "fr",
        "@value" : "Origine multiple"
      } ]
    }, {
      "@id" : "dfc-f:Natural",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://purl.org/dc/terms/description" : [ {
        "@language" : "en",
        "@value" : "“Where a food naturally meets the condition(s) laid down in this Annex for the use of a nutritional claim, the term 'naturally/natural' may be used as a prefix to the claim.“ (source: Annex of Regulation (EC) No 1924/2006)"
      }, {
        "@language" : "fr",
        "@value" : "“Lorsqu'une denrée alimentaire remplit naturellement la ou les conditions fixées dans la présente annexe pour l'utilisation d'une allégation nutritionnelle, le terme «naturellement/naturel» peut accompagner cette allégation.“ (source: Annex of Regulation (EC) No 1924/2006)"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:NutritionalClaim"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "fr",
        "@value" : "Allégé/Light"
      }, {
        "@language" : "en",
        "@value" : "Naturally/Natural"
      } ]
    }, {
      "@id" : "dfc-f:NatureEtProgres",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
        "@id" : "gs1:PackagingMarkedLabelAccreditationCode-NATURE_ET_PROGRES"
      } ],
      "http://www.w3.org/2004/02/skos/core#altLabel" : [ {
        "@language" : "en",
        "@value" : "Nature and Progress"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:OrganicLabel"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Nature et progrès"
      }, {
        "@language" : "fr",
        "@value" : "Nature et progrès"
      } ]
    }, {
      "@id" : "dfc-f:NatureOrigin",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://purl.org/dc/terms/description" : [ {
        "@language" : "en",
        "@value" : "Natural “living“ origin concerned"
      }, {
        "@language" : "fr",
        "@value" : "Source “vivante“ d'origine concernée"
      } ],
      "http://www.w3.org/2000/01/rdf-schema#comment" : [ {
        "@language" : "en",
        "@value" : "We made the list for the prototype with open nomenclature to start with for plants and animals but might be better to connected directly from relevant source ontologies for variaties, races, etc. (http://open-nomenclature.org/fra/nomenclatures/varieties/tree)."
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#narrower" : [ {
        "@id" : "dfc-f:UnknownNatureOrigin"
      }, {
        "@id" : "dfc-f:MultiNatureOrigin"
      }, {
        "@id" : "dfc-f:PlantOrigin"
      }, {
        "@id" : "dfc-f:AnimalOrigin"
      }, {
        "@id" : "dfc-f:Mineral"
      }, {
        "@id" : "dfc-f:Funghi"
      }, {
        "@id" : "dfc-f:Algae"
      }, {
        "@id" : "dfc-f:Bacteria"
      }, {
        "@id" : "dfc-f:Water"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Natural origin"
      }, {
        "@language" : "fr",
        "@value" : "Source naturelle d'origine"
      } ],
      "http://www.w3.org/2004/02/skos/core#topConceptOf" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ]
    }, {
      "@id" : "dfc-f:Netherlands",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
        "@id" : "https://www.wikidata.org/wiki/Q55"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:Europe"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Netherlands"
      }, {
        "@language" : "fr",
        "@value" : "Pays bas"
      } ]
    }, {
      "@id" : "dfc-f:NewZealand",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
        "@id" : "https://www.wikidata.org/wiki/Q664"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:Oceania"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "New Zealand"
      }, {
        "@language" : "fr",
        "@value" : "Nouvelle Zélande"
      } ]
    }, {
      "@id" : "dfc-f:NoAddedSodiumSalt",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://purl.org/dc/terms/description" : [ {
        "@language" : "en",
        "@value" : "“A claim stating that sodium/salt has not been added to a food and any claim likely to have the same meaning for the consumer may only be made where the product does not contain any added sodium/salt or any other ingredient containing added sodium/salt and the product contains no more than 0,12 g sodium, or the equivalent value for salt, per 100 g or 100 ml.“ (source: Annex of Regulation (EC) No 1924/2006)"
      }, {
        "@language" : "fr",
        "@value" : "“Une allégation selon laquelle il n’a pas été ajouté de sodium ou de sel à une denrée alimentaire, ou toute autre allégation susceptible d’avoir le même sens pour le consommateur, ne peut être faite que si le produit ne contient pas de sodium ou de sel ajouté ou tout autre ingrédient contenant du sodium ou du sel ajouté et si le produit ne contient pas plus de 0,12 g de sodium ou de l’équivalent en sel par 100 g ou par 100 ml.“ (source: Annex of Regulation (EC) No 1924/2006)"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:NutritionalClaim"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "No added sodium/salt"
      }, {
        "@language" : "fr",
        "@value" : "Sans sodium/sel ajouté"
      } ]
    }, {
      "@id" : "dfc-f:NoAddedSugars",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://purl.org/dc/terms/description" : [ {
        "@language" : "en",
        "@value" : "“A claim stating that sugars have not been added to a food, and any claim likely to have the same meaning for the consumer, may only be made where the product does not contain any added mono- or disaccharides or any other food used for its sweetening properties. If sugars are naturally present in the food, the following indication should also appear on the label: 'CONTAINS NATURALLY OCCURRING SUGARS'.“ (source: Annex of Regulation (EC) No 1924/2006)"
      }, {
        "@language" : "fr",
        "@value" : "“Une allégation selon laquelle il n'a pas été ajouté de sucres à une denrée alimentaire, ou toute autre allégation susceptible d'avoir le même sens pour le consommateur, ne peut être faite que si le produit ne contient pas de monosaccharides ou disaccharides ajoutés ou toute autre denrée alimentaire utilisée pour ses propriétés édulcorantes. Si les sucres sont naturellement présents dans la denrée alimentaire, l'indication suivante devrait également figurer sur l'étiquette: «CONTIENT DES SUCRES NATURELLEMENT PRÉSENTS».“ (source: Annex of Regulation (EC) No 1924/2006)"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:NutritionalClaim"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "With no added sugars"
      }, {
        "@language" : "fr",
        "@value" : "Sans sucres ajoutés"
      } ]
    }, {
      "@id" : "dfc-f:Normandy",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
        "@id" : "https://www.wikidata.org/wiki/Q18677875"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:France"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Normandy"
      }, {
        "@language" : "fr",
        "@value" : "Normandie"
      } ]
    }, {
      "@id" : "dfc-f:NorthAmerica",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
        "@id" : "https://www.wikidata.org/wiki/Q49"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:TerritorialOrigin"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "North America"
      }, {
        "@language" : "fr",
        "@value" : "Amérique du Nord"
      } ]
    }, {
      "@id" : "dfc-f:NorthernIreland",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
        "@id" : "https://www.wikidata.org/wiki/Q26"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:UnitedKingdom"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Northern Ireland"
      }, {
        "@language" : "fr",
        "@value" : "Irlande du Nord"
      } ]
    }, {
      "@id" : "dfc-f:NouvelleAquitaine",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
        "@id" : "https://www.wikidata.org/wiki/Q18678082"
      } ],
      "http://www.w3.org/2004/02/skos/core#altLabel" : [ {
        "@language" : "fr",
        "@value" : "NA"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:France"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Nouvelle-Aquitaine"
      }, {
        "@language" : "fr",
        "@value" : "Nouvelle-Aquitaine"
      } ]
    }, {
      "@id" : "dfc-f:NutritionalClaim",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:Claim"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#narrower" : [ {
        "@id" : "dfc-f:LowEnergy"
      }, {
        "@id" : "dfc-f:EnergyReduced"
      }, {
        "@id" : "dfc-f:EnergyFree"
      }, {
        "@id" : "dfc-f:LowFat"
      }, {
        "@id" : "dfc-f:FatFree"
      }, {
        "@id" : "dfc-f:LowSaturatedFat"
      }, {
        "@id" : "dfc-f:SaturatedFatFree"
      }, {
        "@id" : "dfc-f:LowSugars"
      }, {
        "@id" : "dfc-f:SugarsFree"
      }, {
        "@id" : "dfc-f:NoAddedSugars"
      }, {
        "@id" : "dfc-f:LowSodiumSalt"
      }, {
        "@id" : "dfc-f:VeryLowSodiumSalt"
      }, {
        "@id" : "dfc-f:SodiumOrSaltFree"
      }, {
        "@id" : "dfc-f:NoAddedSodiumSalt"
      }, {
        "@id" : "dfc-f:SourceOfFibre"
      }, {
        "@id" : "dfc-f:HighFibre"
      }, {
        "@id" : "dfc-f:SourceOfProtein"
      }, {
        "@id" : "dfc-f:HighProtein"
      }, {
        "@id" : "dfc-f:SourceOfVitaminsMinerals"
      }, {
        "@id" : "dfc-f:HighVitaminsMinerals"
      }, {
        "@id" : "dfc-f:ContainsNutrientOrSubstance"
      }, {
        "@id" : "dfc-f:IncreasedNutrient"
      }, {
        "@id" : "dfc-f:ReducedNutrient"
      }, {
        "@id" : "dfc-f:Light"
      }, {
        "@id" : "dfc-f:Natural"
      }, {
        "@id" : "dfc-f:SourceOfOmega3FattyAcids"
      }, {
        "@id" : "dfc-f:HighOmega3FattyAcids"
      }, {
        "@id" : "dfc-f:HighMonounsaturatedFat"
      }, {
        "@id" : "dfc-f:HighPolyunsaturatedFat"
      }, {
        "@id" : "dfc-f:HighUnsaturatedFat"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Nutritional claim"
      }, {
        "@language" : "fr",
        "@value" : "Allégation nutritionnelle"
      } ]
    }, {
      "@id" : "dfc-f:Occitania",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
        "@id" : "https://www.wikidata.org/wiki/Q18678265"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:France"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Occitania"
      }, {
        "@language" : "fr",
        "@value" : "Occitanie"
      } ]
    }, {
      "@id" : "dfc-f:Oceania",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
        "@id" : "https://www.wikidata.org/wiki/Q55643"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:TerritorialOrigin"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#narrower" : [ {
        "@id" : "dfc-f:Australia"
      }, {
        "@id" : "dfc-f:NewZealand"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Oceania"
      }, {
        "@language" : "fr",
        "@value" : "Océanie"
      } ]
    }, {
      "@id" : "dfc-f:Organic-AB",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
        "@id" : "gs1:PackagingMarkedLabelAccreditationCode-AGRICULTURE_BIOLOGIQUE"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:OrganicLabel"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Agriculture Biologique"
      }, {
        "@language" : "fr",
        "@value" : "Agriculture Biologique"
      } ]
    }, {
      "@id" : "dfc-f:Organic-BioCoherence",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:OrganicLabel"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Bio Coherence"
      }, {
        "@language" : "fr",
        "@value" : "Bio Coherence"
      } ]
    }, {
      "@id" : "dfc-f:Organic-EU",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
        "@id" : "gs1:PackagingMarkedLabelAccreditationCode-EU_ORGANIC_FARMING"
      } ],
      "http://www.w3.org/2004/02/skos/core#altLabel" : [ {
        "@language" : "fr",
        "@value" : "Eurofeuille"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:OrganicLabel"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "EU Organic Farming"
      }, {
        "@language" : "fr",
        "@value" : "Agriculture Biologique EU"
      } ]
    }, {
      "@id" : "dfc-f:OrganicLabel",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:Certification"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#narrower" : [ {
        "@id" : "dfc-f:Organic-AB"
      }, {
        "@id" : "dfc-f:Organic-EU"
      }, {
        "@id" : "dfc-f:Organic-BioCoherence"
      }, {
        "@id" : "dfc-f:NatureEtProgres"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Organic label"
      }, {
        "@language" : "fr",
        "@value" : "Label biologique"
      } ]
    }, {
      "@id" : "dfc-f:OtherClaim",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://purl.org/dc/terms/description" : [ {
        "@language" : "en",
        "@value" : "Any other claim which states, suggests or implies that a food has particular properties."
      }, {
        "@language" : "fr",
        "@value" : "Toute autre allégation qui déclare, suggère ou implique qu'un aliment a des propriétés particulières."
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:Claim"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#narrower" : [ {
        "@id" : "dfc-f:Vegan"
      }, {
        "@id" : "dfc-f:Vegetarian"
      }, {
        "@id" : "dfc-f:GlutenFree"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Other claim"
      }, {
        "@language" : "fr",
        "@value" : "Autre allégation"
      } ]
    }, {
      "@id" : "dfc-f:PGS",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
        "@id" : "gs1:PackagingMarkedLabelAccreditationCode-PROTECTED_GEOGRAPHICAL_INDICATION"
      } ],
      "http://www.w3.org/2004/02/skos/core#altLabel" : [ {
        "@language" : "en",
        "@value" : "PGS"
      }, {
        "@language" : "fr",
        "@value" : "PGS"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:LocalLabel"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Protected Geographical Status"
      }, {
        "@language" : "fr",
        "@value" : "Statut géographique protégé"
      } ]
    }, {
      "@id" : "dfc-f:PartOrigin",
      "@type" : [ "skos:Concept" ],
      "http://purl.org/dc/elements/1.1/description" : [ {
        "@language" : "en",
        "@value" : "Part of natural “living“ origin concerned"
      }, {
        "@language" : "fr",
        "@value" : "Partie de la source “vivante“ d'origine concernée"
      } ],
      "http://www.w3.org/2000/01/rdf-schema#comment" : [ {
        "@language" : "en",
        "@value" : "If I sell carrots, I can sell only the roots, the whole pants with the leaves, or only the leaves. Examples : root, leaves, seeds..."
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#narrower" : [ {
        "@id" : "dfc-f:AnimalPartOrigin"
      }, {
        "@id" : "dfc-f:MultiOrigin"
      }, {
        "@id" : "dfc-f:PlantPartOrigin"
      }, {
        "@id" : "dfc-f:UnknownPartOrigin"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Part of origin"
      }, {
        "@language" : "fr",
        "@value" : "Partie d'origine"
      } ],
      "http://www.w3.org/2004/02/skos/core#topConceptOf" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ]
    }, {
      "@id" : "dfc-f:PaysDeLoire",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
        "@id" : "https://www.wikidata.org/wiki/Q16994"
      } ],
      "http://www.w3.org/2004/02/skos/core#altLabel" : [ {
        "@language" : "en",
        "@value" : "Loire lands"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:France"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Pays de la Loire"
      }, {
        "@language" : "fr",
        "@value" : "Pays de la Loire"
      } ]
    }, {
      "@id" : "dfc-f:PaysansDeNature_FR",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2004/02/skos/core#altLabel" : [ {
        "@language" : "en",
        "@value" : "Farmers of Nature"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:LocalLabel"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Paysans de Nature"
      }, {
        "@language" : "fr",
        "@value" : "Paysans de Nature"
      } ]
    }, {
      "@id" : "dfc-f:Pig",
      "@type" : [ "skos:Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:AnimalPartOrigin"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#narrower" : [ {
        "@id" : "dfc-f:PigBody"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "fr",
        "@value" : "Cochon"
      }, {
        "@language" : "en",
        "@value" : "Pig"
      } ]
    }, {
      "@id" : "dfc-f:PigBody",
      "@type" : [ "skos:Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:Pig"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "fr",
        "@value" : "Partie du cochon"
      }, {
        "@language" : "en",
        "@value" : "Pig's body"
      } ]
    }, {
      "@id" : "dfc-f:PlantOrigin",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:NatureOrigin"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Plant"
      }, {
        "@language" : "fr",
        "@value" : "Plante"
      } ]
    }, {
      "@id" : "dfc-f:PlantPartOrigin",
      "@type" : [ "skos:Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:PartOrigin"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#narrower" : [ {
        "@id" : "dfc-f:Bulb"
      }, {
        "@id" : "dfc-f:Flower"
      }, {
        "@id" : "dfc-f:Fruit"
      }, {
        "@id" : "dfc-f:Leaf"
      }, {
        "@id" : "dfc-f:Root"
      }, {
        "@id" : "dfc-f:Seed"
      }, {
        "@id" : "dfc-f:Stem"
      }, {
        "@id" : "dfc-f:Tuber"
      }, {
        "@id" : "dfc-f:WholePlant"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Part or product of plant"
      }, {
        "@language" : "fr",
        "@value" : "Partie ou produit d'une plante"
      } ]
    }, {
      "@id" : "dfc-f:Portugal",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
        "@id" : "https://www.wikidata.org/wiki/Q45"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:Europe"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Portugal"
      }, {
        "@language" : "fr",
        "@value" : "Portugal"
      } ]
    }, {
      "@id" : "dfc-f:ProductOfTheYear",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
        "@id" : "gs1:PackagingMarkedLabelAccreditationCode-PRODUCT_OF_THE_YEAR_CONSUMER_SURVEY"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:MarketingLabel"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Product of the year"
      }, {
        "@language" : "fr",
        "@value" : "Elu produit de l'année"
      } ]
    }, {
      "@id" : "dfc-f:ProvenceAlpesCotesAzur",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
        "@id" : "https://www.wikidata.org/wiki/Q15104"
      } ],
      "http://www.w3.org/2004/02/skos/core#altLabel" : [ {
        "@language" : "en",
        "@value" : "Provence-Alps-French Riviera"
      }, {
        "@language" : "fr",
        "@value" : "PACA"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:France"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Provence-Alpes-Côte d’Azur"
      }, {
        "@language" : "fr",
        "@value" : "Provence-Alpes-Côte d’Azur"
      } ]
    }, {
      "@id" : "dfc-f:Quail",
      "@type" : [ "skos:Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:AnimalPartOrigin"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#narrower" : [ {
        "@id" : "dfc-f:QuailEgg"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "fr",
        "@value" : "Caille"
      }, {
        "@language" : "en",
        "@value" : "Quail"
      } ]
    }, {
      "@id" : "dfc-f:QuailEgg",
      "@type" : [ "skos:Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:Quail"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Quail's egg"
      }, {
        "@language" : "fr",
        "@value" : "Œuf de caille"
      } ]
    }, {
      "@id" : "dfc-f:RainforestAlliance",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
        "@id" : "gs1:PackagingMarkedLabelAccreditationCode-RAINFOREST_ALLIANCE"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:EthicalLabel"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Rainforest Alliance"
      }, {
        "@language" : "fr",
        "@value" : "Rainforest Alliance"
      } ]
    }, {
      "@id" : "dfc-f:RedLabel_FR",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
        "@id" : "gs1:PackagingMarkedLabelAccreditationCode-LABEL_ROUGE"
      } ],
      "http://www.w3.org/2004/02/skos/core#altLabel" : [ {
        "@language" : "en",
        "@value" : "Red Label"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:EthicalLabel"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Label Rouge"
      }, {
        "@language" : "fr",
        "@value" : "Label Rouge"
      } ]
    }, {
      "@id" : "dfc-f:ReducedNutrient",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://purl.org/dc/terms/description" : [ {
        "@language" : "en",
        "@value" : "“A claim stating that the content in one or more nutrients has been reduced, and any claim likely to have the same meaning for the consumer, may only be made where the reduction in content is at least 30% compared to a similar product, except for micronutrients, where a 10 % difference in the reference values as set in Directive 90/496/EEC shall be acceptable, and for sodium, or the equivalent value for salt, where a 25% difference shall be acceptable. The claim “reduced saturated fat“, and any claim likely to have the same meaning for the consumer, may only be made: (a) if the sum of saturated fatty acids and of trans-fatty acids in the product bearing the claim is at least 30% less than the sum of saturated fatty acids and of trans-fatty acids in a similar product; and (b) if the content in trans-fatty acids in the product bearing the claim is equal to or less than in a similar product. The claim “reduced sugars“, and any claim likely to have the same meaning for the consumer, may only be made if the amount of energy of the product bearing the claim is equal to or less than the amount of energy in a similar product.“ (source: Annex of Regulation (EC) No 1924/2006)"
      }, {
        "@language" : "fr",
        "@value" : "“Une allégation affirmant que la teneur en un ou plusieurs nutriments a été réduite, ou toute autre allégation susceptible d'avoir le même sens pour le consommateur, ne peut être faite que si la réduction de cette teneur est d'au moins 30 % par rapport à un produit similaire, sauf s'il s'agit de micronutriments, pour lesquels une différence de 10 % par rapport aux valeurs de référence fixées par la directive 90/496/CEE est admissible, ou s'il s'agit de sodium ou d'équivalent en sel, pour lesquels une différence de 25 % est admissible. L’allégation «réduit en graisses saturées», ou toute autre allégation susceptible d’avoir le même sens pour le consommateur, ne peut être faite que: a) si la somme des acides gras saturés et des acides gras trans contenus dans le produit auquel s’applique l’allégation est au moins de 30 % inférieure à la somme des acides gras saturés et des acides gras trans contenus dans un produit similaire; et b) si la teneur en acides gras trans dans le produit auquel s’applique l’allégation est inférieure ou égale à celle d’un produit similaire. L’allégation «réduit en sucres», ou toute autre allégation susceptible d’avoir le même sens pour le consommateur, ne peut être faite que si la valeur énergétique du produit auquel s’applique l’allégation est inférieure ou égale à celle d’un produit similaire.“ (source: Annex of Regulation (EC) No 1924/2006)"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:NutritionalClaim"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Reduced nutrient"
      }, {
        "@language" : "fr",
        "@value" : "Réduit en nutriment"
      } ]
    }, {
      "@id" : "dfc-f:Root",
      "@type" : [ "skos:Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:PlantPartOrigin"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "fr",
        "@value" : "Racine"
      }, {
        "@language" : "en",
        "@value" : "Root"
      } ]
    }, {
      "@id" : "dfc-f:Roster",
      "@type" : [ "skos:Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:AnimalPartOrigin"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#narrower" : [ {
        "@id" : "dfc-f:RosterBody"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "fr",
        "@value" : "Coq"
      }, {
        "@language" : "en",
        "@value" : "Rooster"
      } ]
    }, {
      "@id" : "dfc-f:RosterBody",
      "@type" : [ "skos:Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:Roster"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "fr",
        "@value" : "Partie de coq"
      }, {
        "@language" : "en",
        "@value" : "Rooster's body"
      } ]
    }, {
      "@id" : "dfc-f:SaturatedFatFree",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://purl.org/dc/terms/description" : [ {
        "@language" : "en",
        "@value" : "“A claim that a food does not contain saturated fat, and any claim likely to have the same meaning for the consumer, may only be made where the sum of saturated fat and trans-fatty acids does not exceed 0,1 g of saturated fat per 100 g or 100 ml.“ (source: Annex of Regulation (EC) No 1924/2006)"
      }, {
        "@language" : "fr",
        "@value" : "“Une allégation selon laquelle une denrée alimentaire ne contient pas de graisses saturées, ou toute autre allégation susceptible d'avoir le même sens pour le consommateur, ne peut être faite que si la somme des acides gras saturés et des acides gras trans n'excède pas 0,1 g de graisses saturées par 100 g ou par 100 ml.“ (source: Annex of Regulation (EC) No 1924/2006)"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:NutritionalClaim"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Saturated fat-free"
      }, {
        "@language" : "fr",
        "@value" : "Sans graisses saturées"
      } ]
    }, {
      "@id" : "dfc-f:Scotland",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
        "@id" : "https://www.wikidata.org/wiki/Q22"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:UnitedKingdom"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Scotland"
      }, {
        "@language" : "fr",
        "@value" : "Ecosse"
      } ]
    }, {
      "@id" : "dfc-f:Seed",
      "@type" : [ "skos:Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:PlantPartOrigin"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "fr",
        "@value" : "Graine"
      }, {
        "@language" : "en",
        "@value" : "Seed"
      } ]
    }, {
      "@id" : "dfc-f:Sheep",
      "@type" : [ "skos:Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:AnimalPartOrigin"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#narrower" : [ {
        "@id" : "dfc-f:SheepBody"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "fr",
        "@value" : "Mouton"
      }, {
        "@language" : "en",
        "@value" : "Sheep"
      } ]
    }, {
      "@id" : "dfc-f:SheepBody",
      "@type" : [ "skos:Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:Sheep"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "fr",
        "@value" : "Partie de mouton"
      }, {
        "@language" : "en",
        "@value" : "Sheep's body"
      } ]
    }, {
      "@id" : "dfc-f:SodiumOrSaltFree",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://purl.org/dc/terms/description" : [ {
        "@language" : "en",
        "@value" : "“A claim that a food is sodium-free or salt-free, and any claim likely to have the same meaning for the consumer, may only be made where the product contains no more than 0,005 g of sodium, or the equivalent value for salt, per 100 g.“ (source: Annex of Regulation (EC) No 1924/2006)"
      }, {
        "@language" : "fr",
        "@value" : "“Une allégation selon laquelle une denrée alimentaire ne contient pas de sodium ou de sel, ou toute autre allégation susceptible d'avoir le même sens pour le consommateur, ne peut être faite que si le produit ne contient pas plus de 0,005 g de sodium ou de l'équivalent en sel par 100 g.“ (source: Annex of Regulation (EC) No 1924/2006)"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:NutritionalClaim"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Sodium-free or salt-free"
      }, {
        "@language" : "fr",
        "@value" : "Sans sodium ou sans sel"
      } ]
    }, {
      "@id" : "dfc-f:SourceOfFibre",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://purl.org/dc/terms/description" : [ {
        "@language" : "en",
        "@value" : "“A claim that a food is a source of fibre, and any claim likely to have the same meaning for the consumer, may only be made where the product contains at least 3 g of fibre per 100 g or at least 1,5 g of fibre per 100 kcal.“ (source: Annex of Regulation (EC) No 1924/2006)"
      }, {
        "@language" : "fr",
        "@value" : "“Une allégation selon laquelle une denrée alimentaire est une source de fibres, ou toute autre allégation susceptible d'avoir le même sens pour le consommateur, ne peut être faite que si le produit contient au moins 3 g de fibres par 100 g ou au moins 1,5 g de fibres par 100 kcal.“ (source: Annex of Regulation (EC) No 1924/2006)"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:NutritionalClaim"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Source of fibre"
      }, {
        "@language" : "fr",
        "@value" : "Source de fibres"
      } ]
    }, {
      "@id" : "dfc-f:SourceOfOmega3FattyAcids",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://purl.org/dc/terms/description" : [ {
        "@language" : "en",
        "@value" : "“Where a food naturally meets the condition(s) laid down in this Annex for the use of a nutritional claim, the term 'naturally/natural' may be used as a prefix to the claim.“ (source: Annex of Regulation (EC) No 1924/2006)"
      }, {
        "@language" : "fr",
        "@value" : "“Une allégation selon laquelle une denrée alimentaire est une source d’acide gras oméga-3, ou toute allégation susceptible d’avoir le même sens pour le consommateur, ne peut être faite que si le produit contient au moins 0,3 g d’acide alphalinolénique pour 100 g et 100 kcal, ou au moins 40 mg d’acide eicosapentaénoïque et d’acide docosahexénoïque combinés pour 100 g et 100 kcal.“ (source: Annex of Regulation (EC) No 1924/2006)"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:NutritionalClaim"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Source of omega-3 fatty acids"
      }, {
        "@language" : "fr",
        "@value" : "Source d'acide gras Oméga-3"
      } ]
    }, {
      "@id" : "dfc-f:SourceOfProtein",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://purl.org/dc/terms/description" : [ {
        "@language" : "en",
        "@value" : "“A claim that a food is a source of protein, and any claim likely to have the same meaning for the consumer, may only be made where at least 12% of the energy value of the food is provided by protein.“ (source: Annex of Regulation (EC) No 1924/2006)"
      }, {
        "@language" : "fr",
        "@value" : "“Une allégation selon laquelle une denrée alimentaire est une source de protéines, ou toute autre allégation susceptible d'avoir le même sens pour le consommateur, ne peut être faite que si 12 % au moins de la valeur énergétique de la denrée alimentaire sont produits par des protéines.“ (source: Annex of Regulation (EC) No 1924/2006)"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:NutritionalClaim"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Source of protein"
      }, {
        "@language" : "fr",
        "@value" : "Source de protéine"
      } ]
    }, {
      "@id" : "dfc-f:SourceOfVitaminsMinerals",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://purl.org/dc/terms/description" : [ {
        "@language" : "en",
        "@value" : "“A claim that a food is a source of vitamins and/or minerals, and any claim likely to have the same meaning for the consumer, may only be made where the product contains at least a significant amount as defined in the Annex to Directive 90/496/EEC or an amount provided for by derogations granted according to Article 6 of Regulation (EC) No 1925/2006 of the European Parliament and of the Council of 20 December 2006 on the addition of vitamins and minerals and of certain other substances to foods[1].“ (source: Annex of Regulation (EC) No 1924/2006)"
      }, {
        "@language" : "fr",
        "@value" : "“Une allégation selon laquelle une denrée alimentaire est une source de vitamines et/ou de minéraux, ou toute autre allégation susceptible d'avoir le même sens pour le consommateur, ne peut être faite que si le produit contient au moins la quantité significative définie à l'annexe de la directive 90/496/CEE ou une quantité prévue au titre de dérogations accordées conformément à l'article 6 du règlement (CE) no 1925/2006 du Parlement européen et du Conseil du 20 décembre 2006 concernant l'adjonction de vitamines, de minéraux et de certaines autres substances aux denrées alimentaires.“ (source: Annex of Regulation (EC) No 1924/2006)"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:NutritionalClaim"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Source of vitamins and/or minerals"
      }, {
        "@language" : "fr",
        "@value" : "Source de vitamines et/ou de minéraux"
      } ]
    }, {
      "@id" : "dfc-f:SouthAmerica",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
        "@id" : "https://www.wikidata.org/wiki/Q18"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:TerritorialOrigin"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "South America"
      }, {
        "@language" : "fr",
        "@value" : "Amérique du Sud"
      } ]
    }, {
      "@id" : "dfc-f:Spain",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
        "@id" : "https://www.wikidata.org/wiki/Q29"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:Europe"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Spain"
      }, {
        "@language" : "fr",
        "@value" : "Espagne"
      } ]
    }, {
      "@id" : "dfc-f:Stem",
      "@type" : [ "skos:Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:PlantPartOrigin"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Stem"
      }, {
        "@language" : "fr",
        "@value" : "Tige"
      } ]
    }, {
      "@id" : "dfc-f:SugarsFree",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://purl.org/dc/terms/description" : [ {
        "@language" : "en",
        "@value" : "“A claim that a food is sugars-free, and any claim likely to have the same meaning for the consumer, may only be made where the product contains no more than 0,5 g of sugars per 100 g or 100 ml.“ (source: Annex of Regulation (EC) No 1924/2006)"
      }, {
        "@language" : "fr",
        "@value" : "“Une allégation selon laquelle une denrée alimentaire ne contient pas de sucres, ou toute autre allégation susceptible d'avoir le même sens pour le consommateur, ne peut être faite que si le produit ne contient pas plus de 0,5 g de sucres par 100 g ou par 100 ml.“ (source: Annex of Regulation (EC) No 1924/2006)"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:NutritionalClaim"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "fr",
        "@value" : "Faible teneur en sucres"
      }, {
        "@language" : "en",
        "@value" : "Sugars-free"
      } ]
    }, {
      "@id" : "dfc-f:Switzerland",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
        "@id" : "https://www.wikidata.org/wiki/Q39"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:Europe"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Switzerland"
      }, {
        "@language" : "fr",
        "@value" : "Suisse"
      } ]
    }, {
      "@id" : "dfc-f:TasteOfTheYear",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:MarketingLabel"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Taste of the year"
      }, {
        "@language" : "fr",
        "@value" : "Reconnu Saveur de l’année"
      } ]
    }, {
      "@id" : "dfc-f:TerritorialOrigin",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://purl.org/dc/terms/description" : [ {
        "@language" : "en",
        "@value" : "Territorial origin of the concerned product"
      }, {
        "@language" : "fr",
        "@value" : "Origine géographique du produit concerné"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#narrower" : [ {
        "@id" : "dfc-f:UnknownGeoOrigin"
      }, {
        "@id" : "dfc-f:MultiGeoOrigin"
      }, {
        "@id" : "dfc-f:Europe"
      }, {
        "@id" : "dfc-f:Africa"
      }, {
        "@id" : "dfc-f:Asia"
      }, {
        "@id" : "dfc-f:Oceania"
      }, {
        "@id" : "dfc-f:NorthAmerica"
      }, {
        "@id" : "dfc-f:SouthAmerica"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Territorial origin"
      }, {
        "@language" : "fr",
        "@value" : "Origine géographique"
      } ],
      "http://www.w3.org/2004/02/skos/core#topConceptOf" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ]
    }, {
      "@id" : "dfc-f:Tuber",
      "@type" : [ "skos:Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:PlantPartOrigin"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Tuber"
      }, {
        "@language" : "fr",
        "@value" : "Tubercule"
      } ]
    }, {
      "@id" : "dfc-f:UnitedKingdom",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
        "@id" : "https://www.wikidata.org/wiki/Q145"
      } ],
      "http://www.w3.org/2004/02/skos/core#altLabel" : [ {
        "@language" : "en",
        "@value" : "UK"
      }, {
        "@language" : "fr",
        "@value" : "UK"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:Europe"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#narrower" : [ {
        "@id" : "dfc-f:England"
      }, {
        "@id" : "dfc-f:Wales"
      }, {
        "@id" : "dfc-f:Scotland"
      }, {
        "@id" : "dfc-f:NorthernIreland"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "United Kingdom"
      }, {
        "@language" : "fr",
        "@value" : "Royaume Uni"
      } ]
    }, {
      "@id" : "dfc-f:UnknownGeoOrigin",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:TerritorialOrigin"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Unknown territorial origin"
      }, {
        "@language" : "fr",
        "@value" : "Origine territoriale inconnue"
      } ]
    }, {
      "@id" : "dfc-f:UnknownLabel",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:Certification"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Unknown label"
      }, {
        "@language" : "fr",
        "@value" : "Label inconnu"
      } ]
    }, {
      "@id" : "dfc-f:UnknownNatureOrigin",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:NatureOrigin"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Unknown nature origin"
      }, {
        "@language" : "fr",
        "@value" : "Source d'origine inconnue"
      } ]
    }, {
      "@id" : "dfc-f:UnknownPartOrigin",
      "@type" : [ "skos:Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:PartOrigin"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "fr",
        "@value" : "Partie d'origine inconnue"
      }, {
        "@language" : "en",
        "@value" : "Unknown part origin"
      } ]
    }, {
      "@id" : "dfc-f:Vegan",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:OtherClaim"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Vegan"
      }, {
        "@language" : "fr",
        "@value" : "Vegan"
      } ]
    }, {
      "@id" : "dfc-f:Vegetarian",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:OtherClaim"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Vegetarian"
      }, {
        "@language" : "fr",
        "@value" : "Végétarien"
      } ]
    }, {
      "@id" : "dfc-f:VeryLowSodiumSalt",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://purl.org/dc/terms/description" : [ {
        "@language" : "en",
        "@value" : "“A claim that a food is very low in sodium/salt, and any claim likely to have the same meaning for the consumer, may only be made where the product contains no more than 0,04 g of sodium, or the equivalent value for salt, per 100 g or per 100 ml. This claim shall not be used for natural mineral waters and other waters.“ (source: Annex of Regulation (EC) No 1924/2006)"
      }, {
        "@language" : "fr",
        "@value" : "“Une allégation selon laquelle une denrée alimentaire est très pauvre en sodium ou en sel, ou toute autre allégation susceptible d'avoir le même sens pour le consommateur, ne peut être faite que si le produit ne contient pas plus de 0,04 g de sodium ou de l'équivalent en sel par 100 g ou 100 ml. Il est interdit d'utiliser cette allégation pour les eaux minérales naturelles et les autres eaux.“ (source: Annex of Regulation (EC) No 1924/2006)"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:NutritionalClaim"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Very low sodium/salt"
      }, {
        "@language" : "fr",
        "@value" : "Très pauvre en sodium/sel"
      } ]
    }, {
      "@id" : "dfc-f:Wales",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
        "@id" : "https://www.wikidata.org/wiki/Q25"
      } ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:UnitedKingdom"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Wales"
      }, {
        "@language" : "fr",
        "@value" : "Pays de Galles"
      } ]
    }, {
      "@id" : "dfc-f:Water",
      "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:NatureOrigin"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "en",
        "@value" : "Water"
      }, {
        "@language" : "fr",
        "@value" : "Eau"
      } ]
    }, {
      "@id" : "dfc-f:WholePlant",
      "@type" : [ "skos:Concept" ],
      "http://www.w3.org/2004/02/skos/core#broader" : [ {
        "@id" : "dfc-f:PlantPartOrigin"
      } ],
      "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
        "@id" : "dfc-f:DFC_ProductGlossary_Facet"
      } ],
      "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
        "@language" : "fr",
        "@value" : "Plante entière"
      }, {
        "@language" : "en",
        "@value" : "Whole plant"
      } ]
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productGlossary_Facet.rdf",
      "@type" : [ "http://www.w3.org/2002/07/owl#Ontology" ]
    } ],
    "@id" : "http://static.datafoodconsortium.org/data/productGlossary_Facet.rdf"
  } ]`);
