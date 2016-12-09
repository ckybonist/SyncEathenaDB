USE Ragnarok;

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
