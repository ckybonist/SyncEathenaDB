USE Ragnarok;

-- Find which monster have `Orange Potion` by INNER JOIN
SELECT mobs.kROName, items.Name FROM items
    INNER JOIN mobs
    ON ItemId = mobs.Drop1Id
        OR ItemId = mobs.Drop2id
        OR ItemId = mobs.Drop3id
        OR ItemId = mobs.Drop4id
        OR ItemId = mobs.Drop5id
        OR ItemId = mobs.Drop6id
        OR ItemId = mobs.Drop7id
        OR ItemId = mobs.Drop8id
        OR ItemId = mobs.Drop9id
        OR ItemId = mobs.DropCarodId
    WHERE items.Name='Orange Potion';
