USE Ragnarok;

-- List buy and sell price of potions
SELECT id, Name, BuyPrice, SellPrice
    FROM items
    WHERE items.Name LIKE '% Potion';

-- Find columns with name like `Dropxxxid` from mobs table
SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS
    WHERE table_name='mobs'
    AND table_schema = 'Ragnarok'
    AND column_name RLIKE 'Drop[0-9]+id';
