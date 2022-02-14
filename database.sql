CREATE TABLE Main(
    id INTEGER NOT NULL PRIMARY KEY,
    ref INTEGER NOT NULL,
    year INTEGER NOT NULL,
    color TEXT NOT NULL,
    person_name TEXT,
    place TEXT,
    price REAL NOT NULL
);

CREATE TABLE Characteristics(
    id INTEGER NOT NULL PRIMARY KEY,
    name TEXT NOT NULL
);
CREATE TABLE Tags(
    id INTEGER NOT NULL,
    ref INTEGER NOT NULL,
    FOREIGN KEY (id) REFERENCES Characteristics(id)
);