DROP TABLE IF EXISTS candidates;
DROP TABLE IF EXISTS parties;
-- must be deleted in this order because candidates references parties

CREATE TABLE parties(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description TEXT
);

CREATE TABLE candidates (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    party_id INTEGER,
    industry_connected BOOLEAN NOT NULL,
    CONSTRAINT fk_party FOREIGN KEY (party_id) REFERENCES parties(id) ON DELETE SET NULL
    -- because ^ references the parties table, it MUST exist before that line, i.e. why parties is created first
    -- because it references parties(id), says that u cannot be member of party that doesnt exist (has no ID for that)
    -- also says if a party is deleted, then changes party for candidate table to NULL
);