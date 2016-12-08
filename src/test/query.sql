USE Ragnarok;

-- Find which monster have `Orange Potion` by INNER JOIN
SELECT mobs.kROName, items.Name FROM items
    INNER JOIN mobs
    ON ItemId = mobs.Drop1Id
        OR ItemId = mobs.Drop2Id
        OR ItemId = mobs.Drop3Id
        OR ItemId = mobs.Drop4Id
        OR ItemId = mobs.Drop5Id
        OR ItemId = mobs.Drop6Id
        OR ItemId = mobs.Drop7Id
        OR ItemId = mobs.Drop8Id
    WHERE items.Name='Orange Potion';

-- Create View with item data and mob data
CREATE OR REPLACE VIEW MobItemsView AS
    SELECT
        mobs.kROName AS MonsterName,
        GROUP_CONCAT(items.Name SEPARATOR ',  ') AS DroppedItems
    FROM items
    INNER JOIN mobs
        ON ItemId IN (
            mobs.Drop1id,
            mobs.Drop2id,
            mobs.Drop3id,
            mobs.Drop4id,
            mobs.Drop5id,
            mobs.Drop6id,
            mobs.Drop7id,
            mobs.Drop8id,
            mobs.Drop9id,
            mobs.DropCardId
        )
    GROUP BY mobs.kROName
    ORDER BY mobs.kROName;

-- Find all monsters that will drop `Orange potion`
SELECT MonsterName FROM MobItemsView
    WHERE DroppedItems LIKE '%Orange Potion%';


-- Find which monster have `Orange Potion` by INNER JOIN
-- However with a little bit tweaking.
SELECT
GROUP_CONCAT(mobs.kROName SEPARATOR ',  ') AS MonsterName,
items.Name AS DroppedItem
FROM items
    INNER JOIN mobs
    ON ItemId IN (
        mobs.Drop1id,
        mobs.Drop2id,
        mobs.Drop3id,
        mobs.Drop4id,
        mobs.Drop5id,
        mobs.Drop6id,
        mobs.Drop7id,
        mobs.Drop8id,
        mobs.Drop9id,
        mobs.DropCardId
    )
    WHERE items.Name='Orange Potion'
    GROUP BY mobs.kROName;


-- Find columns with name like `Dropxxxid` from mobs table
-- SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS
--     WHERE table_name='mobs'
--     AND table_schema = 'Ragnarok'
--     AND column_name LIKE 'Drop%id';


-- List buy and sell price of potions
SELECT id, Name, BuyPrice, SellPrice
    FROM items
    WHERE Name LIKE '% Potion';
