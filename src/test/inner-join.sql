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
