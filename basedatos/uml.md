
# Tablas para Pokemon TCG


## Este diagrama de UML no considera que se guarde un juego a la mitad

- player

El jugador tiene un usuario

- trainer_card

Las cartas de entrenaador tiene su respectivo ID, la descripcion que aparece en la carta y una categoria, que puede ser objeto, objeto herramienta, una persona o un estadio.

- attack

Los ataques tienen puntos de daño, requerimientos de energia, id unicos y descripcion para aparecer en la carta

- energy_card

las cartas de energia unicamente tienen id y tipo (agua, tierra, etc)

- type

Son tipos que aparecen en el juego y son aplicables a diferentes cosas (pokemones y cartas de energia) por ejemplo, electrico, fuego, etc.

- pokemon_card

Esta tabla tiene mas atributos. Tiene una habilidad por default que necesita ir en la carta, puntos de salud, la fase de evolucion (es decir en que nivel de evolucion esta el pokemon), su antecesor evolutivos si es que tiene, su siguiente evolucion si es que tiene, un booleano que diga si es "basico", su debilidad y por su puesto un id.