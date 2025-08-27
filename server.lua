math.randomseed(os.time())

RegisterNetEvent("daek_rrr:requestRoll")
AddEventHandler("daek_rrr:requestRoll", function()
    local src = source
    local roll = performChamberRoll()

    TriggerClientEvent("daek_rrr:showRollUI", src, roll)
end)

function performChamberRoll()
    local rand = math.random()
    local roll

    if rand < 0.1 then -- ~10% chance
        roll = 1 
    elseif rand < 0.28 then
        roll = 2
    elseif rand < 0.46 then
        roll = 3
    elseif rand < 0.64 then
        roll = 4
    elseif rand < 0.82 then
        roll = 5
    else
        roll = 6
    end

    return roll
end
