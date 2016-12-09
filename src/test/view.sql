USE Ragnarok;

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
