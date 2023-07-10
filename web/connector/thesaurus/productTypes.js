export const productTypes = JSON.parse(`
[ {
  "@graph" : [ {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf",
    "@type" : [ "http://www.w3.org/2002/07/owl#Ontology" ],
    "http://purl.org/dc/terms/description" : [ {
      "@language" : "fr",
      "@value" : "Les différentes catégories de produit, classifiées en arborescence"
    }, {
      "@language" : "en",
      "@value" : "The categories of the products, ordered as a tree"
    } ],
    "http://purl.org/dc/terms/title" : [ {
      "@language" : "en",
      "@value" : "Product Types"
    }, {
      "@language" : "fr",
      "@value" : "Types de produits"
    } ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#ConceptScheme"
    } ],
    "http://www.w3.org/2004/02/skos/core#hasTopConcept" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#bakery"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#dairy-product"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#drink"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#frozen"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#fruit"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#inedible"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#local-grocery-store"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#meat-product"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#vegetable"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#alcoholic-beverage",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#drink"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#narrower" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#aperitif"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#beer"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#cider"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#digestive"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#wine"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "alcoholic beverage"
    }, {
      "@language" : "fr",
      "@value" : "boisson alcoolisée"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#almond",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#nut"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "almond"
    }, {
      "@language" : "fr",
      "@value" : "amande"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#aperitif",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#alcoholic-beverage"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "aperitif"
    }, {
      "@language" : "fr",
      "@value" : "apéritif"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#apples",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#fruit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "apples"
    }, {
      "@language" : "fr",
      "@value" : "pomme"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#apricot",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#fruit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "abricot"
    }, {
      "@language" : "en",
      "@value" : "apricot"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#artichoke",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#vegetable"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "artichaut"
    }, {
      "@language" : "en",
      "@value" : "artichoke"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#asparagus",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#vegetable"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "asparagus"
    }, {
      "@language" : "fr",
      "@value" : "asperges"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#bakery",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#narrower" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#bread"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#viennoiserie-"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "bakery"
    }, {
      "@language" : "fr",
      "@value" : "boulangerie"
    } ],
    "http://www.w3.org/2004/02/skos/core#topConceptOf" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#basil",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#aromatic"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "basil"
    }, {
      "@language" : "fr",
      "@value" : "basilic"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#bean",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#vegetable"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "bean"
    }, {
      "@language" : "fr",
      "@value" : "haricot"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#beans",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#dried-vegetable"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "beans"
    }, {
      "@language" : "fr",
      "@value" : "haricots"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#beef",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#meat-product"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#narrower" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#grilling-meat"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#simmering-meat"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "beef"
    }, {
      "@language" : "fr",
      "@value" : "viande bovine"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#beer",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#alcoholic-beverage"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "beer"
    }, {
      "@language" : "fr",
      "@value" : "bière"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#beetroot",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#vegetable"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "beetroot"
    }, {
      "@language" : "fr",
      "@value" : "betterave rouge"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#berry",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#fruit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#narrower" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#blackberry"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#blackcurrant"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#blueberry"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#currant"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#gooseberry"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#raspberry"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "berry"
    }, {
      "@language" : "fr",
      "@value" : "petit fruit"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#biscuit",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#sweet-groceries"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "biscuit"
    }, {
      "@language" : "fr",
      "@value" : "biscuit"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#blackberry",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#berry"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "blackberry"
    }, {
      "@language" : "fr",
      "@value" : "mûre"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#blackcurrant",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#berry"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "blackcurrant"
    }, {
      "@language" : "fr",
      "@value" : "cassis"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#blueberry",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#berry"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "blueberry"
    }, {
      "@language" : "fr",
      "@value" : "myrtille"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#bluefoot-mushroom",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#mushroom"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "Pied-bleu"
    }, {
      "@language" : "en",
      "@value" : "bluefoot mushroom"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#bottled-fruit",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#processed-fruit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "bottled fruit"
    }, {
      "@language" : "fr",
      "@value" : "fruit en bocal"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#bottled-vegetable",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#processed-vegetable"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "bottled vegetable"
    }, {
      "@language" : "fr",
      "@value" : "légume en bocal"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#bread",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#bakery"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "bread"
    }, {
      "@language" : "fr",
      "@value" : "pain"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#broccoli-cabbage",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#cabbage"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "broccoli cabbage"
    }, {
      "@language" : "fr",
      "@value" : "chou brocoli"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#brussels-sprouts",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#cabbage"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "brussels sprouts"
    }, {
      "@language" : "fr",
      "@value" : "choux de bruxelles"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#butter",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#cow-dairy-product"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "beurre"
    }, {
      "@language" : "en",
      "@value" : "butter"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#butternut",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#squash"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "butternut"
    }, {
      "@language" : "fr",
      "@value" : "butternut"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#cabbage",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#vegetable"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#narrower" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#broccoli-cabbage"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#brussels-sprouts"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#cauliflower"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#chinese-cabbage"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#kale"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#kale-cabbage"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#kohlrabi"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#red-cabbage"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#romanesco"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#savoy-cabbage"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#smooth-cabbage"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "cabbage"
    }, {
      "@language" : "fr",
      "@value" : "chou"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#canned-fruit",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#processed-fruit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "canned fruit"
    }, {
      "@language" : "fr",
      "@value" : "fruit en conserve"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#canned-vegetable",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#processed-vegetable"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "canned vegetable"
    }, {
      "@language" : "fr",
      "@value" : "légume en conserve"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#carrot",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#vegetable"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "carotte"
    }, {
      "@language" : "en",
      "@value" : "carrot"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#cauliflower",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#cabbage"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "cauliflower"
    }, {
      "@language" : "fr",
      "@value" : "chou-fleur"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#celeriac",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#vegetable"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "celeriac"
    }, {
      "@language" : "fr",
      "@value" : "céleri-rave"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#celery-branch",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#vegetable"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "celery branch"
    }, {
      "@language" : "fr",
      "@value" : "céleri branche"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#cereal",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#savory-groceries"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "cereal"
    }, {
      "@language" : "fr",
      "@value" : "céréale"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#chanterelle-mushroom",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#mushroom"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "chanterelle"
    }, {
      "@language" : "en",
      "@value" : "chanterelle mushroom"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#chard",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#vegetable"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "blettes"
    }, {
      "@language" : "en",
      "@value" : "chard"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#cherry",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#fruit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "cerise"
    }, {
      "@language" : "en",
      "@value" : "cherry"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#cherry-tomato",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#tomato"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "cherry tomato"
    }, {
      "@language" : "fr",
      "@value" : "tomate cerise"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#chervil",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#aromatic"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "cerfeuil"
    }, {
      "@language" : "en",
      "@value" : "chervil"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#chestnut",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#nut"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "chestnut"
    }, {
      "@language" : "fr",
      "@value" : "marron"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#chicken",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#poultry"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "chicken"
    }, {
      "@language" : "fr",
      "@value" : "poulet"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#chicory",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#salad"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "chicory"
    }, {
      "@language" : "fr",
      "@value" : "chicorée"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#chilli-pepper",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#aromatic"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "chilli pepper"
    }, {
      "@language" : "fr",
      "@value" : "piment"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#chinese-cabbage",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#cabbage"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "chinese cabbage"
    }, {
      "@language" : "fr",
      "@value" : "chou chinois"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#chive",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#aromatic"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "chive"
    }, {
      "@language" : "fr",
      "@value" : "ciboulette"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#cider",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#alcoholic-beverage"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "cider"
    }, {
      "@language" : "fr",
      "@value" : "cidre"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#clementine",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#fruit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "clementine"
    }, {
      "@language" : "fr",
      "@value" : "clémentine"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#cluster-tomato",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#tomato"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "cluster tomato"
    }, {
      "@language" : "fr",
      "@value" : "tomate en grappe"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#confectionery",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#sweet-groceries"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "confectionery"
    }, {
      "@language" : "fr",
      "@value" : "confiserie"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#cooked-meat",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#pork"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "cooked meat"
    }, {
      "@language" : "fr",
      "@value" : "viande cuite"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#coriander",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#aromatic"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "coriander"
    }, {
      "@language" : "fr",
      "@value" : "coriandre"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#corn-salad",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#salad"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "corn salad/lambs lettuce"
    }, {
      "@language" : "fr",
      "@value" : "mâche"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#cosmetic",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#inedible"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "cosmetic"
    }, {
      "@language" : "fr",
      "@value" : "cosmétique"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#coulemelle-mushroom",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#mushroom"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "coulemelle"
    }, {
      "@language" : "en",
      "@value" : "parasol mushroom"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#courgette",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#vegetable"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "courgette"
    }, {
      "@language" : "fr",
      "@value" : "courgette"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#cow-dairy-product",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#dairy-product"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#narrower" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#butter"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#cream-cheese"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#dairy-dessert"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#flavored-yogurt"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#fresh-cheese"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#fresh-cream"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#mature-cheese"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#milk"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#natural-yogurt"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#sweet-yogurt"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#yogurt-on-a-bed-of-fruit"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#yogurt-with-fruits"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "cow dairy product"
    }, {
      "@language" : "fr",
      "@value" : "produit laitier de vache"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#cream-cheese",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#cow-dairy-product"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "cream cheese"
    }, {
      "@language" : "fr",
      "@value" : "fromage blanc"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#crepe-and-galette",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#savory-groceries"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "crepe and galette"
    }, {
      "@language" : "fr",
      "@value" : "crêpe et galette"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#cress",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#salad"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "cress"
    }, {
      "@language" : "fr",
      "@value" : "cresson"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#cucumber",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#vegetable"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "concombre"
    }, {
      "@language" : "en",
      "@value" : "cucumber"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#currant",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#berry"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "currant"
    }, {
      "@language" : "fr",
      "@value" : "groseille"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#dairy-dessert",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#cow-dairy-product"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "dairy dessert"
    }, {
      "@language" : "fr",
      "@value" : "dessert lacté"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#dairy-product",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#narrower" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#cow-dairy-product"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#goat-dairy-product"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#other-dairy-product"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#sheep-dairy-product"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "dairy product"
    }, {
      "@language" : "fr",
      "@value" : "produit laitier"
    } ],
    "http://www.w3.org/2004/02/skos/core#topConceptOf" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#dandelion",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#salad"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "dandelion"
    }, {
      "@language" : "fr",
      "@value" : "pissenlit"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#deaths-trumpet",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#mushroom"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "deaths trumpet"
    }, {
      "@language" : "fr",
      "@value" : "trompette de la mort"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#delicatessen",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#pork"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "charcuterie"
    }, {
      "@language" : "en",
      "@value" : "delicatessen"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#digestive",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#alcoholic-beverage"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "digestif"
    }, {
      "@language" : "en",
      "@value" : "digestive"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#dill",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#aromatic"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "aneth"
    }, {
      "@language" : "en",
      "@value" : "dill"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#dried-fruit",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#processed-fruit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "dried fruit"
    }, {
      "@language" : "fr",
      "@value" : "fruit sec"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#dried-vegetable",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#vegetable"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#narrower" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#beans"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#lentils"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#peas"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#quinoa"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "dried vegetable"
    }, {
      "@language" : "fr",
      "@value" : "légume sec"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#drink",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#narrower" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#alcoholic-beverage"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#soft-drink"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "boisson"
    }, {
      "@language" : "en",
      "@value" : "drink"
    } ],
    "http://www.w3.org/2004/02/skos/core#topConceptOf" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#duck",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#poultry"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "canard"
    }, {
      "@language" : "en",
      "@value" : "duck"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#egg",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#meat-product"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "egg"
    }, {
      "@language" : "fr",
      "@value" : "œuf"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#eggplant",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#vegetable"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "aubergine"
    }, {
      "@language" : "en",
      "@value" : "eggplant"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#endive",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#salad"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "endive"
    }, {
      "@language" : "fr",
      "@value" : "endive"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#fennel",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#vegetable"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "fennel"
    }, {
      "@language" : "fr",
      "@value" : "fenouil"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#festive-poultry",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#poultry"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "festive poultry"
    }, {
      "@language" : "fr",
      "@value" : "volaille festive"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#fifth-range-vegetable",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#vegetable"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "fifth range vegetable"
    }, {
      "@language" : "fr",
      "@value" : "légume de cinquième gamme"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#fig",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#fruit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "fig"
    }, {
      "@language" : "fr",
      "@value" : "figue"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#fish",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#fishery-product"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "fish"
    }, {
      "@language" : "fr",
      "@value" : "poisson"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#fishery-product",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#meat-product"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#narrower" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#fish"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#seashell"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#shellfish"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "fishery product"
    }, {
      "@language" : "fr",
      "@value" : "produit de la pêche"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#flavored-yogurt",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#cow-dairy-product"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "flavored yogurt"
    }, {
      "@language" : "fr",
      "@value" : "yaourt aromatisé"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#flour",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#savory-groceries"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "farine"
    }, {
      "@language" : "en",
      "@value" : "flour"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#flower",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#inedible"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "fleur"
    }, {
      "@language" : "en",
      "@value" : "flower"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#fourth-range-vegetable",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#vegetable"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "fourth range vegetable"
    }, {
      "@language" : "fr",
      "@value" : "légume de quatrième gamme"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#fresh-cheese",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#cow-dairy-product"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "fresh cheese"
    }, {
      "@language" : "fr",
      "@value" : "fromage frais"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#fresh-cream",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#cow-dairy-product"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "crème fraîche"
    }, {
      "@language" : "en",
      "@value" : "fresh cream"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#fresh-meat",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#pork"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "fresh meat"
    }, {
      "@language" : "fr",
      "@value" : "viande fraîche"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#frozen",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#narrower" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#frozen-fruit"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#frozen-meal"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#frozen-meat"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#frozen-vegetable"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "frozen"
    }, {
      "@language" : "fr",
      "@value" : "surgelé"
    } ],
    "http://www.w3.org/2004/02/skos/core#topConceptOf" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#frozen-fruit",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#frozen"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "frozen fruit"
    }, {
      "@language" : "fr",
      "@value" : "fruit surgelé"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#frozen-meal",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#frozen"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "frozen meal"
    }, {
      "@language" : "fr",
      "@value" : "plat surgelé"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#frozen-meat",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#frozen"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "frozen meat"
    }, {
      "@language" : "fr",
      "@value" : "viande surgelée"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#frozen-vegetable",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#frozen"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "frozen vegetable"
    }, {
      "@language" : "fr",
      "@value" : "légume surgelé"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#fruit",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#narrower" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#apples"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#apricot"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#berry"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#cherry"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#clementine"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#fig"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#grape"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#kiwi"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#lemon"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#mandarin"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#nectarine"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#non-local-fruit"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#nut"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#orange"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#peach"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#pear"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#plum"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#prune"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#quince"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#strawberry"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "fruit"
    }, {
      "@language" : "fr",
      "@value" : "fruits"
    } ],
    "http://www.w3.org/2004/02/skos/core#topConceptOf" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#fruit-in-compote",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#processed-fruit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "fruit en compote"
    }, {
      "@language" : "en",
      "@value" : "fruit in compote"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#fruit-juice",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#soft-drink"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "fruit juice"
    }, {
      "@language" : "fr",
      "@value" : "jus de fruits"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#garlic",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#vegetable"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "ail"
    }, {
      "@language" : "en",
      "@value" : "garlic"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#girolle-mushroom",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#mushroom"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "girolle"
    }, {
      "@language" : "en",
      "@value" : "girolle mushroom"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#goat-dairy-dessert",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#goat-dairy-product"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "dessert lacté de chèvre"
    }, {
      "@language" : "en",
      "@value" : "goat dairy dessert"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#goat-dairy-product",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#dairy-product"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#narrower" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#goat-dairy-dessert"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#goat-flavored-yogurt"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#goat-fresh-cheese"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#goat-mature-cheese"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#goat-milk"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#goat-natural-yogurt"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#goat-sweet-yogurt"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#goat-yogurt-on-a-bed-of-fruit"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#goat-yogurt-with-fruits"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "goat dairy product"
    }, {
      "@language" : "fr",
      "@value" : "produit laitier de chèvre"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#goat-flavored-yogurt",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#goat-dairy-product"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "goat flavored yogurt"
    }, {
      "@language" : "fr",
      "@value" : "yaourt de chèvre aromatisé"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#goat-fresh-cheese",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#goat-dairy-product"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "fromage frais de chèvre"
    }, {
      "@language" : "en",
      "@value" : "goat fresh cheese"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#goat-mature-cheese",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#goat-dairy-product"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "fromage de chèvre affiné"
    }, {
      "@language" : "en",
      "@value" : "goat mature cheese"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#goat-milk",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#goat-dairy-product"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "goat milk"
    }, {
      "@language" : "fr",
      "@value" : "lait de chèvre"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#goat-natural-yogurt",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#goat-dairy-product"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "goat natural yogurt"
    }, {
      "@language" : "fr",
      "@value" : "yaourt nature de chèvre"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#goat-sweet-yogurt",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#goat-dairy-product"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "goat sweet yogurt"
    }, {
      "@language" : "fr",
      "@value" : "yaourt sucré de chèvre"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#goat-yogurt-on-a-bed-of-fruit",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#goat-dairy-product"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "goat yogurt on a bed of fruit"
    }, {
      "@language" : "fr",
      "@value" : "yaourt de chèvre sur lit de fruits"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#goat-yogurt-with-fruits",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#goat-dairy-product"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "goat yogurt with fruits"
    }, {
      "@language" : "fr",
      "@value" : "yaourt de chèvre aux fruits"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#goose",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#poultry"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "goose"
    }, {
      "@language" : "fr",
      "@value" : "oie"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#gooseberry",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#berry"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "gooseberry"
    }, {
      "@language" : "fr",
      "@value" : "groseille à maquereau"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#grape",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#fruit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "grape"
    }, {
      "@language" : "fr",
      "@value" : "raisin"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#green-garlic",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#vegetable"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "aillet"
    }, {
      "@language" : "en",
      "@value" : "green garlic"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#grilling-meat",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#beef"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "grilling meat"
    }, {
      "@language" : "fr",
      "@value" : "viande à griller"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#guinea-fowl",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#poultry"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "guinea fowl"
    }, {
      "@language" : "fr",
      "@value" : "pintade"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#hazelnut",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#nut"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "hazelnut"
    }, {
      "@language" : "fr",
      "@value" : "noisette"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#herb",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#vegetable"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#narrower" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#basil"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#chervil"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#chilli-pepper"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#chive"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#coriander"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#dill"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#laurel"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#mint"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#parsley"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#rosemary"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#sage"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#tarragon"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#thyme"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "aromate"
    }, {
      "@language" : "en",
      "@value" : "herb"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#hierloom-squash",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#squash"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "hierloom squash"
    }, {
      "@language" : "fr",
      "@value" : "variété ancienne de courge"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#hierloom-tomato",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#tomato"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "hierloom tomato"
    }, {
      "@language" : "fr",
      "@value" : "tomate ancienne"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#honey",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#sweet-groceries"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "honey"
    }, {
      "@language" : "fr",
      "@value" : "miel"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#inedible",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#narrower" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#cosmetic"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#flower"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#plant"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "inedible"
    }, {
      "@language" : "fr",
      "@value" : "non alimentaire"
    } ],
    "http://www.w3.org/2004/02/skos/core#topConceptOf" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#jam",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#sweet-groceries"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "confiture"
    }, {
      "@language" : "en",
      "@value" : "jam"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#jerusalem-artichoke",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#vegetable"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "jerusalem artichoke"
    }, {
      "@language" : "fr",
      "@value" : "topinambour"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#kale",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#cabbage"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "chou frisé"
    }, {
      "@language" : "en",
      "@value" : "curly kale"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#kale-cabbage",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#cabbage"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "chou kale"
    }, {
      "@language" : "en",
      "@value" : "kale"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#kiwi",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#fruit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "kiwi"
    }, {
      "@language" : "fr",
      "@value" : "kiwi"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#kohlrabi",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#cabbage"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "chou-rave"
    }, {
      "@language" : "en",
      "@value" : "kohlrabi"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#lamb",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#meat-product"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "agneau"
    }, {
      "@language" : "en",
      "@value" : "lamb"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#laurel",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#aromatic"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "bay laurel"
    }, {
      "@language" : "fr",
      "@value" : "laurier"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#leek",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#vegetable"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "leek"
    }, {
      "@language" : "fr",
      "@value" : "poireau"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#lemon",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#fruit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "citron"
    }, {
      "@language" : "en",
      "@value" : "lemon"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#lemonade",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#soft-drink"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "lemonade"
    }, {
      "@language" : "fr",
      "@value" : "limonade"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#lentils",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#dried-vegetable"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "lentilles"
    }, {
      "@language" : "en",
      "@value" : "lentils"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#lettuce",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#salad"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "laitue"
    }, {
      "@language" : "en",
      "@value" : "lettuce"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#local-grocery-store",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#narrower" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#processed-fruit"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#processed-vegetable"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#ready-meal"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#savory-groceries"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#sweet-groceries"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "local grocery store"
    }, {
      "@language" : "fr",
      "@value" : "épicerie locale"
    } ],
    "http://www.w3.org/2004/02/skos/core#topConceptOf" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#mandarin",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#fruit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "mandarin"
    }, {
      "@language" : "fr",
      "@value" : "mandarine"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#mature-cheese",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#cow-dairy-product"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "fromage affiné"
    }, {
      "@language" : "en",
      "@value" : "mature cheese"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#meat-product",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#narrower" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#beef"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#egg"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#fishery-product"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#lamb"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#pork"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#poultry"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#rabbit"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#snails"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#veal"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "meat product"
    }, {
      "@language" : "fr",
      "@value" : "produit carné"
    } ],
    "http://www.w3.org/2004/02/skos/core#topConceptOf" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#medlar",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#fruit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "medlar"
    }, {
      "@language" : "fr",
      "@value" : "nèfle"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#melon",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#vegetable"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "melon"
    }, {
      "@language" : "fr",
      "@value" : "melon"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#mesclun",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#salad"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "mesclun"
    }, {
      "@language" : "fr",
      "@value" : "mesclun"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#milk",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#cow-dairy-product"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "lait"
    }, {
      "@language" : "en",
      "@value" : "milk"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#milky-mushroom",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#mushroom"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "lactaire"
    }, {
      "@language" : "en",
      "@value" : "milky mushroom"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#mint",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#aromatic"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "menthe"
    }, {
      "@language" : "en",
      "@value" : "mint"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#morel",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#mushroom"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "morel"
    }, {
      "@language" : "fr",
      "@value" : "morille"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#mousseron",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#mushroom"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "mousseron"
    }, {
      "@language" : "fr",
      "@value" : "mousseron"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#mushroom",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#vegetable"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#narrower" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#bluefoot-mushroom"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#chanterelle-mushroom"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#coulemelle-mushroom"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#deaths-trumpet"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#girolle-mushroom"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#milky-mushroom"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#morel"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#mousseron"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#oyster-mushroom"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#paris-mushroom"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#porcini"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#sheepfoot-mushroom"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#truffle"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "champignon"
    }, {
      "@language" : "en",
      "@value" : "mushroom"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#natural-yogurt",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#cow-dairy-product"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "natural yogurt"
    }, {
      "@language" : "fr",
      "@value" : "yaourt nature"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#nectarine",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#fruit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "nectarine"
    }, {
      "@language" : "fr",
      "@value" : "nectarine"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#non-local-fruit",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#fruit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "fruit non local"
    }, {
      "@language" : "en",
      "@value" : "non local fruit"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#non-local-vegetable",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#vegetable"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "légume non local"
    }, {
      "@language" : "en",
      "@value" : "non local vegetable"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#nut",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#fruit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#narrower" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#almond"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#chestnut"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#hazelnut"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#medlar"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#walnut"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "fruit à coque"
    }, {
      "@language" : "en",
      "@value" : "nut"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#oil",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#savory-groceries"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "huile"
    }, {
      "@language" : "en",
      "@value" : "oil"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#onion",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#vegetable"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "oignon"
    }, {
      "@language" : "en",
      "@value" : "onion"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#orange",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#fruit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "orange"
    }, {
      "@language" : "fr",
      "@value" : "orange"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#other-cheese",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#other-dairy-product"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "autre fromage"
    }, {
      "@language" : "en",
      "@value" : "other cheese"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#other-dairy-product",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#dairy-product"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#narrower" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#other-cheese"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#other-milk"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "autre produit laitier"
    }, {
      "@language" : "en",
      "@value" : "other dairy product"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#other-milk",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#other-dairy-product"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "autre lait"
    }, {
      "@language" : "en",
      "@value" : "other milk"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#oyster-mushroom",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#mushroom"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "oyster mushroom"
    }, {
      "@language" : "fr",
      "@value" : "pleurote"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#paris-mushroom",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#mushroom"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "button mushroom"
    }, {
      "@language" : "fr",
      "@value" : "champignon de Paris"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#parsley",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#aromatic"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "parsley"
    }, {
      "@language" : "fr",
      "@value" : "persil"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#parsnip",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#vegetable"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "panais"
    }, {
      "@language" : "en",
      "@value" : "parsnip"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#pasta",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#savory-groceries"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "pasta"
    }, {
      "@language" : "fr",
      "@value" : "pâtes"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#pastry",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#sweet-groceries"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "pastry"
    }, {
      "@language" : "fr",
      "@value" : "pâtisserie"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#pattypan-squash",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#squash"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "pattypan squash"
    }, {
      "@language" : "fr",
      "@value" : "pâtisson"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#peach",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#fruit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "peach"
    }, {
      "@language" : "fr",
      "@value" : "pêche"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#pear",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#fruit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "pear"
    }, {
      "@language" : "fr",
      "@value" : "poire"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#peas",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#dried-vegetable"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "peas"
    }, {
      "@language" : "fr",
      "@value" : "pois"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#pepper",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#vegetable"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "pepper"
    }, {
      "@language" : "fr",
      "@value" : "poivron"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#pie-pastry",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#savory-groceries"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "pie pastry"
    }, {
      "@language" : "fr",
      "@value" : "pâte à tarte"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#pigeon",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#poultry"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "pigeon"
    }, {
      "@language" : "fr",
      "@value" : "pigeon"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#plant",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#inedible"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "plant"
    }, {
      "@language" : "fr",
      "@value" : "plante"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#plum",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#fruit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "plum"
    }, {
      "@language" : "fr",
      "@value" : "prune"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#porcini",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#mushroom"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "cèpes"
    }, {
      "@language" : "en",
      "@value" : "porcini"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#pork",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#meat-product"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#narrower" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#cooked-meat"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#delicatessen"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#fresh-meat"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#salting"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "porc"
    }, {
      "@language" : "en",
      "@value" : "pork"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#potato",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#vegetable"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "pomme de terre"
    }, {
      "@language" : "en",
      "@value" : "potato"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#poultry",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#meat-product"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#narrower" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#chicken"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#duck"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#festive-poultry"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#goose"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#guinea-fowl"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#pigeon"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#quail"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#turkey"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "poultry"
    }, {
      "@language" : "fr",
      "@value" : "volaille"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#processed-fruit",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#local-grocery-store"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#narrower" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#bottled-fruit"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#canned-fruit"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#dried-fruit"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#fruit-in-compote"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "fruit transformé"
    }, {
      "@language" : "en",
      "@value" : "processed fruit"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#processed-vegetable",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#local-grocery-store"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#narrower" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#bottled-vegetable"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#canned-vegetable"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#soup"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "légume transformé"
    }, {
      "@language" : "en",
      "@value" : "processed vegetable"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#prune",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#fruit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "prune"
    }, {
      "@language" : "fr",
      "@value" : "pruneau"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#pumpkin",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#squash"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "potiron"
    }, {
      "@language" : "en",
      "@value" : "pumpkin"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#quail",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#poultry"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "caille"
    }, {
      "@language" : "en",
      "@value" : "quail"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#quince",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#fruit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "coing"
    }, {
      "@language" : "en",
      "@value" : "quince"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#quinoa",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#dried-vegetable"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "quinoa"
    }, {
      "@language" : "fr",
      "@value" : "quinoa"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#rabbit",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#meat-product"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "lapin"
    }, {
      "@language" : "en",
      "@value" : "rabbit"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#radish",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#vegetable"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "radis"
    }, {
      "@language" : "en",
      "@value" : "radish"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#raspberry",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#berry"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "framboise"
    }, {
      "@language" : "en",
      "@value" : "raspberry"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#ready-meal",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#local-grocery-store"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "plat cuisiné"
    }, {
      "@language" : "en",
      "@value" : "ready meal"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#red-cabbage",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#cabbage"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "chou rouge"
    }, {
      "@language" : "en",
      "@value" : "red cabbage"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#rhubarb",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#vegetable"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "rhubarb"
    }, {
      "@language" : "fr",
      "@value" : "rhubarbe"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#rice",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#savory-groceries"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "rice"
    }, {
      "@language" : "fr",
      "@value" : "riz"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#rocket",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#salad"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "rocket"
    }, {
      "@language" : "fr",
      "@value" : "roquette"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#romanesco",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#cabbage"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "chou romanesco"
    }, {
      "@language" : "en",
      "@value" : "romanesco cauliflower"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#rosemary",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#aromatic"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "romarin"
    }, {
      "@language" : "en",
      "@value" : "rosemary"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#round-tomato",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#tomato"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "round tomato"
    }, {
      "@language" : "fr",
      "@value" : "tomate ronde"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#rutabaga",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#vegetable"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "rutabaga"
    }, {
      "@language" : "fr",
      "@value" : "rutabaga"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#sage",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#aromatic"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "sage"
    }, {
      "@language" : "fr",
      "@value" : "sauge"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#salad",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#vegetable"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#narrower" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#chicory"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#chewed-up"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#cress"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#dandelion"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#endive"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#lettuce"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#mesclun"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#rocket"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#salad-mix"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#spinach"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "salad"
    }, {
      "@language" : "fr",
      "@value" : "salade"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#salad-mix",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#salad"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "mélange de salades"
    }, {
      "@language" : "en",
      "@value" : "salad mix"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#salsify",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#vegetable"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "salsifis"
    }, {
      "@language" : "en",
      "@value" : "salsify"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#salt",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#savory-groceries"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "salt"
    }, {
      "@language" : "fr",
      "@value" : "sel"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#salting",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#pork"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "salaison"
    }, {
      "@language" : "en",
      "@value" : "salting"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#savory-groceries",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#local-grocery-store"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#narrower" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#cereal"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#crepe-and-galette"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#flour"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#oil"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#pasta"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#pie-pastry"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#rice"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#salt"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#semolina"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "savory groceries"
    }, {
      "@language" : "fr",
      "@value" : "épicerie salée"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#savoy-cabbage",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#cabbage"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "chou pommé"
    }, {
      "@language" : "en",
      "@value" : "savoy cabbage"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#seashell",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#fishery-product"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "coquillage"
    }, {
      "@language" : "en",
      "@value" : "seashell"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#semolina",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#savory-groceries"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "semolina"
    }, {
      "@language" : "fr",
      "@value" : "semoule"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#shallot",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#vegetable"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "shallot"
    }, {
      "@language" : "fr",
      "@value" : "échalote"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#sheep-dairy-dessert",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#sheep-dairy-product"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "dessert lacté de brebis"
    }, {
      "@language" : "en",
      "@value" : "sheep dairy dessert"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#sheep-dairy-product",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#dairy-product"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#narrower" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#sheep-dairy-dessert"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#sheep-flavored-yogurt"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#sheep-fresh-cheese"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#sheep-mature-cheese"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#sheep-milk"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#sheep-natural-yogurt"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#sheep-sweet-yogurt"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#sheep-yogurt-on-a-bed-of-fruit"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#sheep-yogurt-with-fruits"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "produit laitier de brebis"
    }, {
      "@language" : "en",
      "@value" : "sheep dairy product"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#sheep-flavored-yogurt",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#sheep-dairy-product"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "sheep flavored yogurt"
    }, {
      "@language" : "fr",
      "@value" : "yaourt de brebis aromatisé"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#sheep-fresh-cheese",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#sheep-dairy-product"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "Fromage frais de brebis"
    }, {
      "@language" : "en",
      "@value" : "sheep fresh cheese"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#sheep-mature-cheese",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#sheep-dairy-product"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "fromage affiné de brebis"
    }, {
      "@language" : "en",
      "@value" : "sheep mature cheese"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#sheep-milk",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#sheep-dairy-product"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "lait de brebis"
    }, {
      "@language" : "en",
      "@value" : "sheep milk"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#sheep-natural-yogurt",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#sheep-dairy-product"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "sheep natural yogurt"
    }, {
      "@language" : "fr",
      "@value" : "yaourt de brebis nature"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#sheep-sweet-yogurt",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#sheep-dairy-product"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "sheep sweet yogurt"
    }, {
      "@language" : "fr",
      "@value" : "yaourt sucré de brebis"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#sheep-yogurt-on-a-bed-of-fruit",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#sheep-dairy-product"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "sheep yogurt on a bed of fruit"
    }, {
      "@language" : "fr",
      "@value" : "yaourt de brebis sur lit de fruits"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#sheep-yogurt-with-fruits",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#sheep-dairy-product"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "sheep yogurt with fruits"
    }, {
      "@language" : "fr",
      "@value" : "yaourt de brebis aux fruits"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#sheepfoot-mushroom",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#mushroom"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "Pied-de-mouton"
    }, {
      "@language" : "en",
      "@value" : "sheepfoot mushroom"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#shellfish",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#fishery-product"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "crustacés"
    }, {
      "@language" : "en",
      "@value" : "shellfish"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#simmering-meat",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#beef"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "simmering meat"
    }, {
      "@language" : "fr",
      "@value" : "viande à mijoter"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#smooth-cabbage",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#cabbage"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "chou lisse"
    }, {
      "@language" : "en",
      "@value" : "smooth cabbage"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#smoothie",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#soft-drink"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "smoothie"
    }, {
      "@language" : "fr",
      "@value" : "smoothie"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#snails",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#meat-product"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "escargots"
    }, {
      "@language" : "en",
      "@value" : "snails"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#soft-drink",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#drink"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#narrower" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#fruit-juice"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#lemonade"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#smoothie"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "boisson non alcoolisée"
    }, {
      "@language" : "en",
      "@value" : "soft drink"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#soup",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#processed-vegetable"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "soup"
    }, {
      "@language" : "fr",
      "@value" : "soupe"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#spinach",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#salad"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "spinach"
    }, {
      "@language" : "fr",
      "@value" : "épinards"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#squash",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#vegetable"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#narrower" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#butternut"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#hierloom-squash"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#pattypan-squash"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#pumpkin"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#uchiki-kuri-squash"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "courge"
    }, {
      "@language" : "en",
      "@value" : "squash"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#strawberry",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#fruit"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "fraise"
    }, {
      "@language" : "en",
      "@value" : "strawberry"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#sweet-groceries",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#local-grocery-store"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#narrower" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#biscuit"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#confectionery"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#honey"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#jam"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#pastry"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "sweet groceries"
    }, {
      "@language" : "fr",
      "@value" : "épicerie sucrée"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#sweet-yogurt",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#cow-dairy-product"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "sweet yogurt"
    }, {
      "@language" : "fr",
      "@value" : "yaourt sucré"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#tarragon",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#aromatic"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "estragon"
    }, {
      "@language" : "en",
      "@value" : "tarragon"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#thyme",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#aromatic"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "thym"
    }, {
      "@language" : "en",
      "@value" : "thyme"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#tomato",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#vegetable"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#narrower" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#cherry-tomato"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#cluster-tomato"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#old-variety-tomato"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#round-tomato"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "tomate"
    }, {
      "@language" : "en",
      "@value" : "tomato"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#truffle",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#mushroom"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "truffe"
    }, {
      "@language" : "en",
      "@value" : "truffle"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#turkey",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#poultry"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "dinde"
    }, {
      "@language" : "en",
      "@value" : "turkey"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#turnip",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#vegetable"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "navet"
    }, {
      "@language" : "en",
      "@value" : "turnip"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#uchiki-kuri-squash",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#squash"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "potimarron"
    }, {
      "@language" : "en",
      "@value" : "uchiki kuri squash"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#veal",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#meat-product"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "veal"
    }, {
      "@language" : "fr",
      "@value" : "veau"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#vegetable",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#narrower" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#artichoke"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#asparagus"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#bean"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#beetroot"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#cabbage"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#carrot"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#celeriac"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#celery-branch"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#chard"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#courgette"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#cucumber"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#dried-vegetable"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#eggplant"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#fennel"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#fifth-range-vegetable"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#fourth-range-vegetable"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#garlic"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#green-garlic"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#herb"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#jerusalem-artichoke"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#leek"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#melon"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#mushroom"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#non-local-vegetable"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#onion"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#parsnip"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#pepper"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#potato"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#radish"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#rhubarb"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#rutabaga"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#salad"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#salsify"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#shallot"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#squash"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#tomato"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#turnip"
    }, {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#yam"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "légume"
    }, {
      "@language" : "en",
      "@value" : "vegetable"
    } ],
    "http://www.w3.org/2004/02/skos/core#topConceptOf" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#viennoiserie-",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#bakery"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "en",
      "@value" : "viennoiserie"
    }, {
      "@language" : "fr",
      "@value" : "viennoiserie"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#walnut",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#nut"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "noix"
    }, {
      "@language" : "en",
      "@value" : "walnut"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#wine",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#alcoholic-beverage"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "vin"
    }, {
      "@language" : "en",
      "@value" : "wine"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#yam",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#vegetable"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "Patate douce"
    }, {
      "@language" : "en",
      "@value" : "yam"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#yogurt-on-a-bed-of-fruit",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#cow-dairy-product"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "yaourt sur lit de fruits"
    }, {
      "@language" : "en",
      "@value" : "yogurt on a bed of fruit"
    } ]
  }, {
    "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#yogurt-with-fruits",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [ {
      "@id" : "http://www.w3.org/2004/02/skos/core#Concept"
    } ],
    "http://www.w3.org/2004/02/skos/core#broader" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf#cow-dairy-product"
    } ],
    "http://www.w3.org/2004/02/skos/core#inScheme" : [ {
      "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
    } ],
    "http://www.w3.org/2004/02/skos/core#prefLabel" : [ {
      "@language" : "fr",
      "@value" : "yaourt aux fruits"
    }, {
      "@language" : "en",
      "@value" : "yogurt with fruits"
    } ]
  }, {
    "@id" : "http://www.w3.org/2004/02/skos/core#Concept",
    "@type" : [ "http://www.w3.org/2002/07/owl#Class" ]
  }, {
    "@id" : "http://www.w3.org/2004/02/skos/core#ConceptScheme",
    "@type" : [ "http://www.w3.org/2002/07/owl#Class" ]
  } ],
  "@id" : "http://static.datafoodconsortium.org/data/productTypes.rdf"
} ]
`)