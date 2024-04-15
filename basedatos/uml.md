
# Tablas para Pokemon TCG


## Este diagrama de UML no considera que se guarde un juego a la mitad

- player

El jugador tiene un usuario, ademas de creditos en diferentes formas como monedas, gemas etc. Un jugador puede tener de 0 a multiples decks

- deck
Cada deck tiene un nombre y puede tener diferentes combinaciones de cartas. Hay multiples decks

- cardsInDeck
ya que la relacion de cartas a decks es de muchos a muchos (decks no son conjuntos propios de cartas), se creo esta tabla intermedia. Tiene una primary key compuesta del id del deck y del nombre de una carta.

- attack

Los ataques tienen puntos de daño, requerimientos de energia, id unicos y descripcion para aparecer en la carta. Tienen una relacion uno a muchos con los requerimientos de energia ya que tienen diferentes requisitos

- attack_energy_req

Tienen una primary key compuesta del ataque y un tipo, dan la cantidad de puntos de energia requeridos para el ataque y el tipo requerido

- trainer_card

Las cartas de entrenaador tiene su respectivo ID, la descripcion que aparece en la carta y una categoria, que puede ser objeto, objeto herramienta, una persona o un estadio.

- energy_card

las cartas de energia unicamente tienen id y tipo (agua, tierra, etc)

- type

Son tipos que aparecen en el juego y son aplicables a diferentes cosas (pokemones y cartas de energia) por ejemplo, electrico, fuego, etc.

- pokemon_card

Esta tabla tiene mas atributos. Describe puntos de salud, la fase de evolucion (es decir en que nivel de evolucion esta el pokemon), un booleano que diga si es "basico", su debilidad, los ataques como llave foranea, el tipo como llave foranea y por un id.