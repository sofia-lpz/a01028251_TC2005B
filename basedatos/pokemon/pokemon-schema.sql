DROP DATABASE IF EXISTS pokemon;
CREATE SCHEMA pokemon;
USE pokemon;

CREATE TABLE type (
    type_id INT AUTO_INCREMENT,
    type_name VARCHAR(50) NOT NULL,
    PRIMARY KEY (type_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE player (
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    coins SMALLINT NOT NULL DEFAULT 0,
    gems SMALLINT NOT NULL DEFAULT 0,
    credits SMALLINT NOT NULL DEFAULT 0,
    PRIMARY KEY (username)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE deck (
    deck_id INT AUTO_INCREMENT,
    deck_name VARCHAR(50) NOT NULL,
    username VARCHAR(50) NOT NULL,
    PRIMARY KEY (deck_id),
    CONSTRAINT fk_deck_player FOREIGN KEY (username) REFERENCES player(username)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE pokemon_card (
    pokemon_id INT AUTO_INCREMENT,
    pokemonCardName VARCHAR(50) NOT NULL,
    ps SMALLINT NOT NULL,
    evolution_stage VARCHAR(50),
    is_basic BOOLEAN NOT NULL,
    weakness VARCHAR(50),
    type_id INT,
    PRIMARY KEY (pokemon_id),
    CONSTRAINT fk_pokemon_type FOREIGN KEY (type_id) REFERENCES type(type_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE cardsInDeck (
    deck_id INT,
    pokemon_id INT,
    PRIMARY KEY (deck_id, pokemon_id),
    CONSTRAINT fk_card_deck FOREIGN KEY (deck_id) REFERENCES deck(deck_id),
    CONSTRAINT fk_pokemon_deck FOREIGN KEY (pokemon_id) REFERENCES pokemon_card(pokemon_id)
) ENGINE=InnoDB;

CREATE TABLE trainer_card (
    trainer_id INT AUTO_INCREMENT,
    description VARCHAR(50) NOT NULL,
    category ENUM('item', 'tool item', 'person', 'stadium') NOT NULL,
    PRIMARY KEY (trainer_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE energy_card (
    energy_id INT AUTO_INCREMENT,
    type_id INT,
    PRIMARY KEY (energy_id),
    CONSTRAINT fk_energycard_type FOREIGN KEY (type_id) REFERENCES type(type_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE attack (
    attack_id INT AUTO_INCREMENT,
    pokemon_id INT,
    damage INT NOT NULL,
    description VARCHAR(50) NOT NULL,
    PRIMARY KEY (attack_id),
    CONSTRAINT fk_attack_pokemon FOREIGN KEY (pokemon_id) REFERENCES pokemon_card(pokemon_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE attack_energy_req (
    attack_id INT,
    type_id INT,
    amount SMALLINT NOT NULL,
    PRIMARY KEY (attack_id, type_id),
    CONSTRAINT fk_attack_energy_attack FOREIGN KEY (attack_id) REFERENCES attack(attack_id),
    CONSTRAINT fk_attack_energy_type FOREIGN KEY (type_id) REFERENCES type(type_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
