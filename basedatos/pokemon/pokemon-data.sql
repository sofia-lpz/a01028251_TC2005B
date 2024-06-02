USE pokemon;

-- Add data to the 'type' table
INSERT INTO type (type_name) VALUES
    ('Fire'),
    ('Water'),
    ('Grass'),
    ('Electric'),
    ('Rock'),
    ('Ground'),
    ('Psychic'),
    ('Fighting'),
    ('Flying'),
    ('Poison'),
    ('Bug'),
    ('Ghost'),
    ('Ice'),
    ('Dragon'),
    ('Normal');

-- Add data to the 'player' table
INSERT INTO player (username, password, coins, gems, credits) VALUES
    ('player1', 'password1', 100, 10, 50),
    ('player2', 'password2', 200, 20, 100),
    ('player3', 'password3', 150, 15, 75),
    ('player4', 'password4', 300, 30, 150),
    ('player5', 'password5', 250, 25, 125),
    ('player6', 'password6', 400, 40, 200),
    ('player7', 'password7', 350, 35, 175),
    ('player8', 'password8', 500, 50, 250),
    ('player9', 'password9', 450, 45, 225),
    ('player10', 'password10', 600, 60, 300),
    ('player11', 'password11', 550, 55, 275),
    ('player12', 'password12', 700, 70, 350),
    ('player13', 'password13', 650, 65, 325),
    ('player14', 'password14', 800, 80, 400),
    ('player15', 'password15', 750, 75, 375);

-- Add data to the 'deck' table
INSERT INTO deck (username) VALUES
    ('player1'),
    ('player2'),
    ('player3'),
    ('player4'),
    ('player5'),
    ('player6'),
    ('player7'),
    ('player8'),
    ('player9'),
    ('player10'),
    ('player11'),
    ('player12'),
    ('player13'),
    ('player14'),
    ('player15');

-- Add data to the 'pokemon_card' table
INSERT INTO pokemon_card (pokemonCardName, ps, is_basic, weakness, type_id, deck_id) VALUES
    ('Charizard', 120, 0, 'Water', 1, 1),
    ('Blastoise', 130, 0, 'Electric', 2, 2),
    ('Venusaur', 140, 0, 'Fire', 3, 3),
    ('Pikachu', 60, 1, 'Ground', 4, 4),
    ('Golem', 110, 0, 'Grass', 5, 5),
    ('Alakazam', 90, 0, 'Ghost', 6, 6),
    ('Machamp', 100, 0, 'Flying', 7, 7),
    ('Pidgeot', 80, 0, 'Electric', 8, 8),
    ('Nidoking', 100, 0, 'Water', 9, 9),
    ('Beedrill', 70, 0, 'Fire', 10, 10),
    ('Gengar', 90, 0, 'Psychic', 11, 11),
    ('Lapras', 120, 0, 'Electric', 12, 12),
    ('Dragonite', 150, 0, 'Ice', 13, 13),
    ('Mewtwo', 130, 0, 'Ghost', 14, 14),
    ('Snorlax', 160, 0, 'Fighting', 15, 15);

-- Add data to the 'trainer_card' table
INSERT INTO trainer_card (trainerCardName, description, category, deck_id) VALUES
    ('Potion', 'Heals 30 HP', 'item', 1),
    ('Great Ball', 'Increases catch rate', 'tool item', 2),
    ('Professor Oak', 'Discard hand and draw 7 cards', 'person', 3),
    ('Viridian Forest', 'Allows player to search for a basic Energy card', 'stadium', 4),
    ('Super Potion', 'Heals 60 HP', 'item', 5),
    ('Ultra Ball', 'Increases catch rate even more', 'tool item', 6),
    ('Lance', 'Discard 2 cards from opponents hand', 'person', 7),
    ('Cerulean Cave', 'Allows player to search for a Stage 2 Pokemon card', 'stadium', 8),
    ('Full Heal', 'Removes all status conditions', 'item', 9),
    ('Master Ball', 'Guaranteed catch', 'tool item', 10),
    ('Giovanni', 'Discard 3 cards from opponents hand', 'person', 11),
    ('Celadon City Gym', 'Allows player to search for an Evolution card', 'stadium', 12),
    ('Full Restore', 'Heals all HP and removes all status conditions', 'item', 13),
    ('Quick Ball', 'Increases catch rate based on number of cards in hand', 'tool item', 14),
    ('Sabrina', 'Discard 4 cards from opponents hand', 'person', 15);

-- Add data to the 'energy_card' table
INSERT INTO energy_card (energyCardName, type_id, deck_id) VALUES
    ('Fire Energy', 1, 1),
    ('Water Energy', 2, 2),
    ('Grass Energy', 3, 3),
    ('Electric Energy', 4, 4),
    ('Rock Energy', 5, 5),
    ('Ground Energy', 6, 6),
    ('Psychic Energy', 7, 7),
    ('Fighting Energy', 8, 8),
    ('Flying Energy', 9, 9),
    ('Poison Energy', 10, 10),
    ('Bug Energy', 11, 11),
    ('Ghost Energy', 12, 12),
    ('Ice Energy', 13, 13),
    ('Dragon Energy', 14, 14),
    ('Normal Energy', 15, 15);

-- Add data to the 'attack' table
INSERT INTO attack (card_id, damage, description) VALUES
    (1, 50, 'Flamethrower'),
    (2, 60, 'Hydro Pump'),
    (3, 70, 'Solar Beam'),
    (4, 30, 'Thunder Shock'),
    (5, 80, 'Rock Throw'),
    (6, 40, 'Psybeam'),
    (7, 50, 'Karate Chop'),
    (8, 40, 'Wing Attack'),
    (9, 60, 'Horn Drill'),
    (10, 30, 'Twineedle'),
    (11, 50, 'Shadow Ball'),
    (12, 70, 'Ice Beam'),
    (13, 90, 'Hyper Beam'),
    (14, 80, 'Psychic'),
    (15, 100, 'Body Slam');

-- Add data to the 'attack_energy_cost' table
INSERT INTO attack_energy_cost (attack_id, type_id, amount) VALUES
    (1, 1, 2),
    (2, 2, 3),
    (3, 3, 4),
    (4, 4, 1),
    (5, 5, 2),
    (6, 6, 3),
    (7, 7, 2),
    (8, 8, 2),
    (9, 9, 3),
    (10, 10, 1),
    (11, 11, 2),
    (12, 12, 3),
    (13, 13, 4),
    (14, 14, 3),
    (15, 15, 4);