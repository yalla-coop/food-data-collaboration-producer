export const measures = JSON.parse(`
[ {
  "@graph" : [ {
    "@id" : "dfc-m:AllergenDimension",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Collection" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:Dimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#narrower" : [ {
      "@id" : "dfc-m:CerealsWithGluten"
    }, {
      "@id" : "dfc-m:Crustaceans"
    }, {
      "@id" : "dfc-m:Eggs"
    }, {
      "@id" : "dfc-m:Fishs"
    }, {
      "@id" : "dfc-m:Peanuts"
    }, {
      "@id" : "dfc-m:Soy"
    }, {
      "@id" : "dfc-m:LactoseMilks"
    }, {
      "@id" : "dfc-m:Nuts"
    }, {
      "@id" : "dfc-m:Celeriac"
    }, {
      "@id" : "dfc-m:Mustard"
    }, {
      "@id" : "dfc-m:SesameSeeds"
    }, {
      "@id" : "dfc-m:Sulphites"
    }, {
      "@id" : "dfc-m:Lupine"
    }, {
      "@id" : "dfc-m:Molluscs"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "Allergen dimension"
    }, {
      "@language" : "fr",
      "@value" : "Dimension allergène"
    } ]
  }, {
    "@id" : "dfc-m:AustralianDollar",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
      "@id" : "unit:AUD"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:CurrencyUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#notation" : [ {
      "@value" : "$AU"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "australian dollar"
    }, {
      "@language" : "fr",
      "@value" : "dollar australien"
    } ]
  }, {
    "@id" : "dfc-m:Calcium",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:NutrientDimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "Calcium"
    }, {
      "@language" : "fr",
      "@value" : "Calcium"
    } ]
  }, {
    "@id" : "dfc-m:CanadianDollar",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
      "@id" : "unit:CAD"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:CurrencyUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#notation" : [ {
      "@value" : "$CA"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "canadian dollar"
    }, {
      "@language" : "fr",
      "@value" : "dollar canadien"
    } ]
  }, {
    "@id" : "dfc-m:Carbohydrates",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:NutrientDimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "Carbohydrates"
    }, {
      "@language" : "fr",
      "@value" : "Carbohydrates"
    } ]
  }, {
    "@id" : "dfc-m:Celeriac",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:AllergenDimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "Celeriac"
    }, {
      "@language" : "fr",
      "@value" : "Celeriac"
    } ]
  }, {
    "@id" : "dfc-m:Centilitre",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
      "@id" : "unit:CentiL"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:QuantityUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#notation" : [ {
      "@value" : "cl"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "centilitre"
    }, {
      "@language" : "fr",
      "@value" : "centilitre"
    } ]
  }, {
    "@id" : "dfc-m:Centimetre",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
      "@id" : "unit:CentiM"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:QuantityUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#notation" : [ {
      "@value" : "cm"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "centimetre"
    }, {
      "@language" : "fr",
      "@value" : "centimètre"
    } ]
  }, {
    "@id" : "dfc-m:CerealsWithGluten",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:AllergenDimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "Cereals containing gluten"
    }, {
      "@language" : "fr",
      "@value" : "Céréales contenant du gluten"
    } ]
  }, {
    "@id" : "dfc-m:Chloride",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:NutrientDimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "Chloride"
    }, {
      "@language" : "fr",
      "@value" : "Chloride"
    } ]
  }, {
    "@id" : "dfc-m:Cholesterol",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:NutrientDimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "Cholesterol"
    }, {
      "@language" : "fr",
      "@value" : "Cholestérol"
    } ]
  }, {
    "@id" : "dfc-m:Chromium",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:NutrientDimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "Chrome"
    }, {
      "@language" : "en",
      "@value" : "Chromium"
    } ]
  }, {
    "@id" : "dfc-m:Copper",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:NutrientDimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "Copper"
    }, {
      "@language" : "fr",
      "@value" : "Copper"
    } ]
  }, {
    "@id" : "dfc-m:Crate",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#altLabel" : [ {
      "@language" : "fr",
      "@value" : "caisse"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:QuantityUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#notation" : [ {
      "@value" : "cr"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "cagette"
    }, {
      "@language" : "en",
      "@value" : "crate"
    } ]
  }, {
    "@id" : "dfc-m:Crustaceans",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:AllergenDimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "Crustaceans"
    }, {
      "@language" : "fr",
      "@value" : "Crustacés"
    } ]
  }, {
    "@id" : "dfc-m:CurrencyUnit",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:Unit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#narrower" : [ {
      "@id" : "dfc-m:AustralianDollar"
    }, {
      "@id" : "dfc-m:CanadianDollar"
    }, {
      "@id" : "dfc-m:Euro"
    }, {
      "@id" : "dfc-m:PoundSterling"
    }, {
      "@id" : "dfc-m:USDollar"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "Currency unit"
    }, {
      "@language" : "fr",
      "@value" : "Unité de devise monétaire"
    } ]
  }, {
    "@id" : "dfc-m:DFC_ProductGlossary_Measure",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#ConceptScheme" ],
    "http://purl.org/dc/elements/1.1/description" : [ {
      "@language" : "en",
      "@value" : "glossary measuring dimensions and units for measuring product"
    }, {
      "@language" : "fr",
      "@value" : "Glossaire des dimensions et unités de mesures de produit"
    } ],
    "http://www.w3.org/2004/02/skos/core#hasTopConcept" : [ {
      "@id" : "dfc-m:Dimension"
    }, {
      "@id" : "dfc-m:Unit"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "Product measure glossary "
    }, {
      "@language" : "fr",
      "@value" : "Glossaire mesure produit"
    } ]
  }, {
    "@id" : "dfc-m:Decilitre",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
      "@id" : "unit:DeciL"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:QuantityUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#notation" : [ {
      "@value" : "dl"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "decilitre"
    }, {
      "@language" : "fr",
      "@value" : "decilitre"
    } ]
  }, {
    "@id" : "dfc-m:Decimetre",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
      "@id" : "unit:DeciM"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:QuantityUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#notation" : [ {
      "@value" : "dm"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "decimetre"
    }, {
      "@language" : "fr",
      "@value" : "decimètre"
    } ]
  }, {
    "@id" : "dfc-m:Depth",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:PhysicalDimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "Depth"
    }, {
      "@language" : "fr",
      "@value" : "Profondeur"
    } ]
  }, {
    "@id" : "dfc-m:Dimension",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://purl.org/dc/elements/1.1/description" : [ {
      "@language" : "en",
      "@value" : "Dimensions used to describe DFC's product characteristics"
    }, {
      "@language" : "fr",
      "@value" : "Dimensions utilisées pour décrire les charactéristiques produit dans DFC"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#narrower" : [ {
      "@id" : "dfc-m:AllergenDimension"
    }, {
      "@id" : "dfc-m:NutrientDimension"
    }, {
      "@id" : "dfc-m:LabellingDimension"
    }, {
      "@id" : "dfc-m:PhysicalDimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "Dimension"
    }, {
      "@language" : "fr",
      "@value" : "Dimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#topConceptOf" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ]
  }, {
    "@id" : "dfc-m:EcoScore",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:LabellingDimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "Eco-score"
    }, {
      "@language" : "fr",
      "@value" : "Eco-score"
    } ]
  }, {
    "@id" : "dfc-m:Eggs",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:AllergenDimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "Eggs"
    }, {
      "@language" : "fr",
      "@value" : "Oeufs"
    } ]
  }, {
    "@id" : "dfc-m:Euro",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
      "@id" : "unit:Euro"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:CurrencyUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#notation" : [ {
      "@value" : "€"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "euro"
    }, {
      "@language" : "fr",
      "@value" : "euro"
    } ]
  }, {
    "@id" : "dfc-m:Fat",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:NutrientDimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "Fat"
    }, {
      "@language" : "fr",
      "@value" : "Graisse"
    } ]
  }, {
    "@id" : "dfc-m:Fibre",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:NutrientDimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "Fibre"
    }, {
      "@language" : "fr",
      "@value" : "Fibre"
    } ]
  }, {
    "@id" : "dfc-m:Fishs",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:AllergenDimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "fishs"
    }, {
      "@language" : "fr",
      "@value" : "Poissons"
    } ]
  }, {
    "@id" : "dfc-m:Fluoride",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:NutrientDimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "Fluoride"
    }, {
      "@language" : "fr",
      "@value" : "Fluoride"
    } ]
  }, {
    "@id" : "dfc-m:FolicAcid",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:NutrientDimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "Acide folique"
    }, {
      "@language" : "en",
      "@value" : "Folic acid"
    } ]
  }, {
    "@id" : "dfc-m:Gallon",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
      "@id" : "unit:GAL_UK"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:QuantityUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#notation" : [ {
      "@value" : "gal"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "gallon (GB)"
    }, {
      "@language" : "en",
      "@value" : "gallon (UK)"
    } ]
  }, {
    "@id" : "dfc-m:Gram",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
      "@id" : "unit:GM"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:QuantityUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#notation" : [ {
      "@value" : "g"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "gram"
    }, {
      "@language" : "fr",
      "@value" : "gramme"
    } ]
  }, {
    "@id" : "dfc-m:Height",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:PhysicalDimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "Hauteur"
    }, {
      "@language" : "en",
      "@value" : "Height"
    } ]
  }, {
    "@id" : "dfc-m:Inch",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
      "@id" : "unit:IN"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:QuantityUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#notation" : [ {
      "@value" : "in"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "inch"
    }, {
      "@language" : "fr",
      "@value" : "pouce"
    } ]
  }, {
    "@id" : "dfc-m:Iodine",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:NutrientDimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "Iodine"
    }, {
      "@language" : "fr",
      "@value" : "Iodine"
    } ]
  }, {
    "@id" : "dfc-m:Iron",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:NutrientDimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "Fer"
    }, {
      "@language" : "en",
      "@value" : "Iron"
    } ]
  }, {
    "@id" : "dfc-m:Kilogram",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
      "@id" : "unit:KiloGM"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:QuantityUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#notation" : [ {
      "@value" : "kg"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "kilogram"
    }, {
      "@language" : "fr",
      "@value" : "kilogramme"
    } ]
  }, {
    "@id" : "dfc-m:Kilometre",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
      "@id" : "unit:KiloM"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:QuantityUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#notation" : [ {
      "@value" : "km"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "kilometre"
    }, {
      "@language" : "fr",
      "@value" : "kilomètre"
    } ]
  }, {
    "@id" : "dfc-m:LabellingDimension",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:Dimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#narrower" : [ {
      "@id" : "dfc-m:NutriScore"
    }, {
      "@id" : "dfc-m:EcoScore"
    }, {
      "@id" : "dfc-m:PlanetScore"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "Labelling dimension"
    }, {
      "@language" : "fr",
      "@value" : "Dimension score de labellisation"
    } ]
  }, {
    "@id" : "dfc-m:LactoseMilks",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:AllergenDimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "Milk and lactose-based products"
    }, {
      "@language" : "fr",
      "@value" : "Lait et produits à base de lactose"
    } ]
  }, {
    "@id" : "dfc-m:Litre",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
      "@id" : "unit:L"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:QuantityUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#notation" : [ {
      "@value" : "l"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "litre"
    }, {
      "@language" : "fr",
      "@value" : "litre"
    } ]
  }, {
    "@id" : "dfc-m:Lupine",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:AllergenDimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "Lupine"
    }, {
      "@language" : "fr",
      "@value" : "Lupin"
    } ]
  }, {
    "@id" : "dfc-m:Magnesium",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:NutrientDimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "Magnesium"
    }, {
      "@language" : "fr",
      "@value" : "Magnésium"
    } ]
  }, {
    "@id" : "dfc-m:Manganese",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:NutrientDimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "Manganese"
    }, {
      "@language" : "fr",
      "@value" : "Manganèse"
    } ]
  }, {
    "@id" : "dfc-m:Metre",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
      "@id" : "unit:M"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:QuantityUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#notation" : [ {
      "@value" : "m"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "metre"
    }, {
      "@language" : "fr",
      "@value" : "mètre"
    } ]
  }, {
    "@id" : "dfc-m:Milligram",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
      "@id" : "unit:MilliGM"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:QuantityUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#notation" : [ {
      "@value" : "g"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "milligram"
    }, {
      "@language" : "fr",
      "@value" : "milligramme"
    } ]
  }, {
    "@id" : "dfc-m:Millilitre",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
      "@id" : "unit:MilliL"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:QuantityUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#notation" : [ {
      "@value" : "ml"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "milliliter"
    }, {
      "@language" : "fr",
      "@value" : "millilitre"
    } ]
  }, {
    "@id" : "dfc-m:Molluscs",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:AllergenDimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "Molluscs"
    }, {
      "@language" : "fr",
      "@value" : "Mollusques"
    } ]
  }, {
    "@id" : "dfc-m:MonosaturatedFat",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:NutrientDimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "Graisse monosaturée"
    }, {
      "@language" : "en",
      "@value" : "Monosaturated fat"
    } ]
  }, {
    "@id" : "dfc-m:Mustard",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:AllergenDimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "Mustard"
    }, {
      "@language" : "fr",
      "@value" : "Moutarde"
    } ]
  }, {
    "@id" : "dfc-m:NutriScore",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:LabellingDimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "Nutri-score"
    }, {
      "@language" : "fr",
      "@value" : "Nutri-score"
    } ]
  }, {
    "@id" : "dfc-m:NutrientDimension",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:Dimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#narrower" : [ {
      "@id" : "dfc-m:Calcium"
    }, {
      "@id" : "dfc-m:Carbohydrates"
    }, {
      "@id" : "dfc-m:Chloride"
    }, {
      "@id" : "dfc-m:Cholesterol"
    }, {
      "@id" : "dfc-m:Chromium"
    }, {
      "@id" : "dfc-m:Copper"
    }, {
      "@id" : "dfc-m:Fat"
    }, {
      "@id" : "dfc-m:Fibre"
    }, {
      "@id" : "dfc-m:Fluoride"
    }, {
      "@id" : "dfc-m:FolicAcid"
    }, {
      "@id" : "dfc-m:Iodine"
    }, {
      "@id" : "dfc-m:Iron"
    }, {
      "@id" : "dfc-m:Magnesium"
    }, {
      "@id" : "dfc-m:Manganese"
    }, {
      "@id" : "dfc-m:MonosaturatedFat"
    }, {
      "@id" : "dfc-m:Phosphorus"
    }, {
      "@id" : "dfc-m:PolyunsaturatedFat"
    }, {
      "@id" : "dfc-m:Potassium"
    }, {
      "@id" : "dfc-m:Protein"
    }, {
      "@id" : "dfc-m:Salt"
    }, {
      "@id" : "dfc-m:SaturatedFat"
    }, {
      "@id" : "dfc-m:Selenium"
    }, {
      "@id" : "dfc-m:Sodium"
    }, {
      "@id" : "dfc-m:Starch"
    }, {
      "@id" : "dfc-m:Sugars"
    }, {
      "@id" : "dfc-m:Transfat"
    }, {
      "@id" : "dfc-m:VitaminA"
    }, {
      "@id" : "dfc-m:VitaminB12"
    }, {
      "@id" : "dfc-m:VitaminB6"
    }, {
      "@id" : "dfc-m:VitaminC"
    }, {
      "@id" : "dfc-m:VitaminD"
    }, {
      "@id" : "dfc-m:VitaminE"
    }, {
      "@id" : "dfc-m:VitaminK"
    }, {
      "@id" : "dfc-m:Zinc"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "Nutrient dimension"
    }, {
      "@language" : "fr",
      "@value" : "Dimension nutritionnelle"
    } ]
  }, {
    "@id" : "dfc-m:Nuts",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:AllergenDimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "Nuts"
    }, {
      "@language" : "fr",
      "@value" : "Fruits à coque"
    } ]
  }, {
    "@id" : "dfc-m:Package",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:QuantityUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#notation" : [ {
      "@value" : "pack"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "colis"
    }, {
      "@language" : "en",
      "@value" : "package"
    } ]
  }, {
    "@id" : "dfc-m:Peanuts",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:AllergenDimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "Peanuts"
    }, {
      "@language" : "fr",
      "@value" : "Arachides"
    } ]
  }, {
    "@id" : "dfc-m:Percent",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:QuantityUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#notation" : [ {
      "@value" : "%"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "percent"
    }, {
      "@language" : "fr",
      "@value" : "pourcent"
    } ]
  }, {
    "@id" : "dfc-m:Phosphorus",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:NutrientDimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "Phosphore"
    }, {
      "@language" : "en",
      "@value" : "Phosphorus"
    } ]
  }, {
    "@id" : "dfc-m:PhysicalDimension",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:Dimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#narrower" : [ {
      "@id" : "dfc-m:Depth"
    }, {
      "@id" : "dfc-m:Height"
    }, {
      "@id" : "dfc-m:Volume"
    }, {
      "@id" : "dfc-m:Weight"
    }, {
      "@id" : "dfc-m:Width"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "Physical dimension"
    }, {
      "@language" : "fr",
      "@value" : "Dimension physique"
    } ]
  }, {
    "@id" : "dfc-m:Piece",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:QuantityUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#notation" : [ {
      "@value" : "u"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "piece"
    }, {
      "@language" : "fr",
      "@value" : "pièce"
    } ]
  }, {
    "@id" : "dfc-m:PlanetScore",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:LabellingDimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "Planet-score"
    }, {
      "@language" : "fr",
      "@value" : "Planet-score"
    } ]
  }, {
    "@id" : "dfc-m:PolyunsaturatedFat",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:NutrientDimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "Graisse poly-insaturée"
    }, {
      "@language" : "en",
      "@value" : "Poly-unsaturated fat"
    } ]
  }, {
    "@id" : "dfc-m:Potassium",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:NutrientDimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "Potassium"
    }, {
      "@language" : "fr",
      "@value" : "Potassium"
    } ]
  }, {
    "@id" : "dfc-m:PoundMass",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
      "@id" : "unit:LB"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:QuantityUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#notation" : [ {
      "@value" : "lb"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "pound"
    }, {
      "@language" : "fr",
      "@value" : "pound"
    } ]
  }, {
    "@id" : "dfc-m:PoundSterling",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
      "@id" : "unit:PoundSterling"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:CurrencyUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#notation" : [ {
      "@value" : "£"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "livre sterling"
    }, {
      "@language" : "en",
      "@value" : "pound sterling"
    } ]
  }, {
    "@id" : "dfc-m:Protein",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:NutrientDimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "Protein"
    }, {
      "@language" : "fr",
      "@value" : "Protéine"
    } ]
  }, {
    "@id" : "dfc-m:QuantityUnit",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:Unit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#narrower" : [ {
      "@id" : "dfc-m:Centilitre"
    }, {
      "@id" : "dfc-m:Centimetre"
    }, {
      "@id" : "dfc-m:Crate"
    }, {
      "@id" : "dfc-m:Decilitre"
    }, {
      "@id" : "dfc-m:Decimetre"
    }, {
      "@id" : "dfc-m:Gallon"
    }, {
      "@id" : "dfc-m:Gram"
    }, {
      "@id" : "dfc-m:Inch"
    }, {
      "@id" : "dfc-m:Kilogram"
    }, {
      "@id" : "dfc-m:Kilometre"
    }, {
      "@id" : "dfc-m:Litre"
    }, {
      "@id" : "dfc-m:Metre"
    }, {
      "@id" : "dfc-m:Milligram"
    }, {
      "@id" : "dfc-m:Millilitre"
    }, {
      "@id" : "dfc-m:Package"
    }, {
      "@id" : "dfc-m:Percent"
    }, {
      "@id" : "dfc-m:Piece"
    }, {
      "@id" : "dfc-m:PoundMass"
    }, {
      "@id" : "dfc-m:Tonne"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#4Pack"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#6Pack"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#Bundle"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#Bag"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#Bunch"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#Bucket"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#Basket"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#Bottle"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#Box"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#BeerCrate"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#Cask"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#Carton"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#Cup"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#Can"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#Drum"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#Dozen"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#HalfDozen"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#Jar"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#Keg"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#Kit"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#Net"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#Packet"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#Punnet"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#Pouch"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#Pair"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#Pot"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#Tray"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#Pallet"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#Roll"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#Tablet"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#Tub"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#Tube"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#Tin"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#LiquidBulk"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#NoduleBulk"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#GrainBulk"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#PowderBulk"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "Quantity unit"
    }, {
      "@language" : "fr",
      "@value" : "Unité de quantité"
    } ]
  }, {
    "@id" : "dfc-m:Salt",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:NutrientDimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "Salt"
    }, {
      "@language" : "fr",
      "@value" : "Sel"
    } ]
  }, {
    "@id" : "dfc-m:SaturatedFat",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:NutrientDimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "Graisse saturée"
    }, {
      "@language" : "en",
      "@value" : "Saturated fat"
    } ]
  }, {
    "@id" : "dfc-m:Selenium",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:NutrientDimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "Selenium"
    }, {
      "@language" : "fr",
      "@value" : "Sélénium"
    } ]
  }, {
    "@id" : "dfc-m:SesameSeeds",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:AllergenDimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "Sesame seeds"
    }, {
      "@language" : "fr",
      "@value" : "Graines de sésame"
    } ]
  }, {
    "@id" : "dfc-m:Sodium",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:NutrientDimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "Sodium"
    }, {
      "@language" : "fr",
      "@value" : "Sodium"
    } ]
  }, {
    "@id" : "dfc-m:Soy",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:AllergenDimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "Soy"
    }, {
      "@language" : "fr",
      "@value" : "Soja"
    } ]
  }, {
    "@id" : "dfc-m:Starch",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:NutrientDimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "Amidon"
    }, {
      "@language" : "en",
      "@value" : "Starch"
    } ]
  }, {
    "@id" : "dfc-m:Sugars",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:NutrientDimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "Sucres"
    }, {
      "@language" : "en",
      "@value" : "Sugars"
    } ]
  }, {
    "@id" : "dfc-m:Sulphites",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:AllergenDimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "Sulfur dioxide and sulphites in a concentration of more than 10mg/kg or 10mg/l (expressed as SO2)"
    }, {
      "@language" : "fr",
      "@value" : "Anhydride sulfureux et sulfites en concentration de plus de 10mg/kg ou 10 mg/l (exprimés en SO2)"
    } ]
  }, {
    "@id" : "dfc-m:Tonne",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
      "@id" : "unit:TONNE"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:QuantityUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#notation" : [ {
      "@value" : "T"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "tonne"
    }, {
      "@language" : "fr",
      "@value" : "tonne"
    } ]
  }, {
    "@id" : "dfc-m:Transfat",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:NutrientDimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "Graisse trans"
    }, {
      "@language" : "en",
      "@value" : "Transfat"
    } ]
  }, {
    "@id" : "dfc-m:USDollar",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {
      "@id" : "unit:USDollar"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:CurrencyUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#notation" : [ {
      "@value" : "$US"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "Dollar US"
    }, {
      "@language" : "en",
      "@value" : "US Dollar"
    } ]
  }, {
    "@id" : "dfc-m:Unit",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://purl.org/dc/elements/1.1/description" : [ {
      "@language" : "en",
      "@value" : "Units used to measure DFC's quantitative values"
    }, {
      "@language" : "fr",
      "@value" : "Unités utilisées pour mesurer les valeurs quantitatives dans DFC"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#narrower" : [ {
      "@id" : "dfc-m:CurrencyUnit"
    }, {
      "@id" : "dfc-m:QuantityUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "Unit"
    }, {
      "@language" : "fr",
      "@value" : "Unités"
    } ],
    "http://www.w3.org/2004/02/skos/core#topConceptOf" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ]
  }, {
    "@id" : "dfc-m:VitaminA",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:NutrientDimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "Vitamin A"
    }, {
      "@language" : "fr",
      "@value" : "Vitamine A"
    } ]
  }, {
    "@id" : "dfc-m:VitaminB12",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:NutrientDimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "Vitamin B12"
    }, {
      "@language" : "fr",
      "@value" : "Vitamine B12"
    } ]
  }, {
    "@id" : "dfc-m:VitaminB6",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:NutrientDimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "Vitamin B6"
    }, {
      "@language" : "fr",
      "@value" : "Vitamine B6"
    } ]
  }, {
    "@id" : "dfc-m:VitaminC",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:NutrientDimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "Vitamin C"
    }, {
      "@language" : "fr",
      "@value" : "Vitamine C"
    } ]
  }, {
    "@id" : "dfc-m:VitaminD",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:NutrientDimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "Vitamin D"
    }, {
      "@language" : "fr",
      "@value" : "Vitamine D"
    } ]
  }, {
    "@id" : "dfc-m:VitaminE",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:NutrientDimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "Vitamin E"
    }, {
      "@language" : "fr",
      "@value" : "Vitamine E"
    } ]
  }, {
    "@id" : "dfc-m:VitaminK",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:NutrientDimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "Vitamin K"
    }, {
      "@language" : "fr",
      "@value" : "Vitamine K"
    } ]
  }, {
    "@id" : "dfc-m:Volume",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:PhysicalDimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "Volume"
    }, {
      "@language" : "fr",
      "@value" : "Volume"
    } ]
  }, {
    "@id" : "dfc-m:Weight",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:PhysicalDimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "Poids"
    }, {
      "@language" : "en",
      "@value" : "Weight"
    } ]
  }, {
    "@id" : "dfc-m:Width",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:PhysicalDimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "Largeur"
    }, {
      "@language" : "en",
      "@value" : "Width"
    } ]
  }, {
    "@id" : "dfc-m:Zinc",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:NutrientDimension"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "Zinc"
    }, {
      "@language" : "fr",
      "@value" : "Zinc"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf",
    "@type" : [ "http://www.w3.org/2002/07/owl#Ontology" ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#4Pack",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:QuantityUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#notation" : [ {
      "@value" : "4p"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "4 pack"
    }, {
      "@language" : "fr",
      "@value" : "pack de 4"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#6Pack",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:QuantityUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#notation" : [ {
      "@value" : "6p"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "6 pack"
    }, {
      "@language" : "fr",
      "@value" : "pack de 6"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#Bag",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:QuantityUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#example" : [ {
      "@language" : "fr",
      "@value" : "sac d'avoine"
    }, {
      "@language" : "en",
      "@value" : "bag of oat"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#notation" : [ {
      "@value" : "bg"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "bag"
    }, {
      "@language" : "fr",
      "@value" : "sac"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#Basket",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:QuantityUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#notation" : [ {
      "@value" : "bk"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "basket"
    }, {
      "@language" : "fr",
      "@value" : "panier"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#BeerCrate",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:QuantityUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#notation" : [ {
      "@value" : "cb"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "beer crate"
    }, {
      "@language" : "fr",
      "@value" : "casier à bière"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#Bottle",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:QuantityUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#notation" : [ {
      "@value" : "bo"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "bottle"
    }, {
      "@language" : "fr",
      "@value" : "bouteille"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#Box",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:QuantityUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#notation" : [ {
      "@value" : "bx"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "box"
    }, {
      "@language" : "fr",
      "@value" : "boîte"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#Bucket",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:QuantityUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#notation" : [ {
      "@value" : "bj"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "bucket"
    }, {
      "@language" : "fr",
      "@value" : "seau"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#Bunch",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:QuantityUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#example" : [ {
      "@language" : "en",
      "@value" : "bunch of parsley, bunch of carrots...."
    }, {
      "@language" : "fr",
      "@value" : "botte de persil, botte de carottes..."
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#notation" : [ {
      "@value" : "bh"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "bunch"
    }, {
      "@language" : "fr",
      "@value" : "botte"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#Bundle",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:QuantityUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "bundle"
    }, {
      "@language" : "fr",
      "@value" : "lot"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#Can",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:QuantityUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#notation" : [ {
      "@value" : "cx"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "can"
    }, {
      "@language" : "fr",
      "@value" : "canette"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#Carton",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:QuantityUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#notation" : [ {
      "@value" : "ct"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "carton"
    }, {
      "@language" : "fr",
      "@value" : "carton"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#Cask",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:QuantityUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#notation" : [ {
      "@value" : "ck"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "cask"
    }, {
      "@language" : "fr",
      "@value" : "tonneau"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#Cup",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:QuantityUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#example" : [ {
      "@language" : "en",
      "@value" : "1 handful = 0.5 cup"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#notation" : [ {
      "@value" : "cu"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "cup"
    }, {
      "@language" : "fr",
      "@value" : "tasse"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#Dozen",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:QuantityUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#example" : [ {
      "@language" : "en",
      "@value" : "2 dozens of eggs"
    }, {
      "@language" : "fr",
      "@value" : "deux douzaines d'oeufs"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#notation" : [ {
      "@value" : "dzn"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "dozen"
    }, {
      "@language" : "fr",
      "@value" : "douzaine"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#Drum",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:QuantityUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#notation" : [ {
      "@value" : "dr"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "drum"
    }, {
      "@language" : "fr",
      "@value" : "baril"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#GrainBulk",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:QuantityUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#notation" : [ {
      "@value" : "vr"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "grain bulk"
    }, {
      "@language" : "fr",
      "@value" : "grain en vrac"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#HalfDozen",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:QuantityUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#notation" : [ {
      "@value" : "hd"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "half dozen"
    }, {
      "@language" : "fr",
      "@value" : "demi-douzaine"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#Jar",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:QuantityUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#example" : [ {
      "@language" : "en",
      "@value" : "jar of jam"
    }, {
      "@language" : "fr",
      "@value" : "bocal de confiture"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#notation" : [ {
      "@value" : "jr"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "jar"
    }, {
      "@language" : "fr",
      "@value" : "bocal"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#Keg",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:QuantityUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#notation" : [ {
      "@value" : "kg"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "keg"
    }, {
      "@language" : "fr",
      "@value" : "fût"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#Kit",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:QuantityUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#notation" : [ {
      "@value" : "ki"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "kit"
    }, {
      "@language" : "fr",
      "@value" : "kit"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#LiquidBulk",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:QuantityUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#notation" : [ {
      "@value" : "vl"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "liquid bulk"
    }, {
      "@language" : "fr",
      "@value" : "liquide en vrac"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#Net",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:QuantityUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#notation" : [ {
      "@value" : "nt"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "net"
    }, {
      "@language" : "fr",
      "@value" : "filet"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#NoduleBulk",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:QuantityUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#notation" : [ {
      "@value" : "vo"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "nodule bulk"
    }, {
      "@language" : "fr",
      "@value" : "nodule en vrac"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#Packet",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:QuantityUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#notation" : [ {
      "@value" : "pa"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "packet"
    }, {
      "@language" : "fr",
      "@value" : "sachet"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#Pair",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:QuantityUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#notation" : [ {
      "@value" : "pr"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "pair"
    }, {
      "@language" : "fr",
      "@value" : "paire"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#Pallet",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:QuantityUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#notation" : [ {
      "@value" : "px"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "pallet"
    }, {
      "@language" : "fr",
      "@value" : "palette"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#Pot",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:QuantityUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#example" : [ {
      "@language" : "en",
      "@value" : "a flower pot"
    }, {
      "@language" : "fr",
      "@value" : "un pot de fleur"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#notation" : [ {
      "@value" : "pt"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "pot"
    }, {
      "@language" : "en",
      "@value" : "pot"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#Pouch",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:QuantityUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#notation" : [ {
      "@value" : "po"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "pouch"
    }, {
      "@language" : "fr",
      "@value" : "poche"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#PowderBulk",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:QuantityUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#notation" : [ {
      "@value" : "vy"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "powder bulk"
    }, {
      "@language" : "fr",
      "@value" : "poudre en vrac"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#Punnet",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:QuantityUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#notation" : [ {
      "@value" : "pj"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "punnet"
    }, {
      "@language" : "fr",
      "@value" : "barquette"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#Roll",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:QuantityUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#notation" : [ {
      "@value" : "ro"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "roll"
    }, {
      "@language" : "fr",
      "@value" : "rouleau"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#Tablet",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:QuantityUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#notation" : [ {
      "@value" : "t1"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "tablet"
    }, {
      "@language" : "fr",
      "@value" : "tablette"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#Tin",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:QuantityUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#notation" : [ {
      "@value" : "tn"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "tin"
    }, {
      "@language" : "fr",
      "@value" : "boîte de conserve"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#Tray",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:QuantityUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#notation" : [ {
      "@value" : "pu"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "tray"
    }, {
      "@language" : "fr",
      "@value" : "plateau"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#Tub",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:QuantityUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#example" : [ {
      "@language" : "en",
      "@value" : "tub of ice cream"
    }, {
      "@language" : "fr",
      "@value" : "bac de crème glacée"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#notation" : [ {
      "@value" : "tb"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "tub"
    }, {
      "@language" : "fr",
      "@value" : "bac"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf#Tube",
    "@type" : [ "http://www.w3.org/2004/02/skos/core#Concept" ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "dfc-m:QuantityUnit"
    } ],
    "http://www.w3.org/2004/02/skos/core#example" : [ {
      "@language" : "en",
      "@value" : "tube of toothpaste"
    }, {
      "@language" : "fr",
      "@value" : "un tube de dentifrice"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "dfc-m:DFC_ProductGlossary_Measure"
    } ],
    "http://www.w3.org/2004/02/skos/core#notation" : [ {
      "@value" : "td"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "tube"
    }, {
      "@language" : "fr",
      "@value" : "tube"
    } ]
  } ],
  "@id" : "http://static.datafoodconsortium.org/data/ProductGlossary_Measure.rdf"
} ]
`)