La base de datos está en la Tercera Forma Normal (3NF).

Primera Forma Normal (1NF)

    Cada atributo debe contener valores atómicos:
        Todos los atributos contienen valores atómicos (por ejemplo, username, password, type_name, etc.). No hay listas de valores.


Segunda Forma Normal (2NF)

    Todos los datos no clave deben depender completamente de la clave primaria:
        En la tabla player, los atributos (password, coins, gems, credits) dependen únicamente del username.
        En la tabla deck, el atributo username depende de la clave primaria deck_id.
        En la tabla pokemon_card, los atributos (pokemonCardName, ps, is_basic, weakness, type_id, deck_id) dependen de la clave primaria card_id.
        En la tabla trainer_card, los atributos (trainerCardName, description, category, deck_id) dependen de la clave primaria card_id.
        En la tabla energy_card, los atributos (energyCardName, type_id, deck_id) dependen de la clave primaria energy_id.
        En la tabla attack, los atributos (card_id, damage, description) dependen de la clave primaria attack_id.
        En la tabla attack_energy_cost, los atributos (type_id, amount) dependen de la clave primaria compuesta (attack_id, type_id).

Tercera Forma Normal (3NF)

    No debe haber dependencias transitivas entre los datos no clave y la clave primaria:
        En las tablas, no hay dependencias transitivas. Cada atributo no clave depende directamente de la clave primaria.
        Por ejemplo, en la tabla pokemon_card, todos los atributos (pokemonCardName, ps, is_basic, weakness, type_id, deck_id) dependen directamente de card_id, sin ninguna dependencia transitoria a través de otros datos.
