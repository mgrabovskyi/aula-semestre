CREATE TABLE attempts (
  owner TEXT NOT NULL,
  id TEXT NOT NULL,
  topic TEXT NOT NULL,
  mode TEXT NOT NULL CHECK(mode IN ('practice', 'retry')),
  correct INTEGER,
  total INTEGER,
  percent INTEGER NOT NULL CHECK(percent BETWEEN 0 AND 100),
  date INTEGER NOT NULL,
  PRIMARY KEY(owner, id)
);
CREATE INDEX attempts_owner_date ON attempts(owner, date);
