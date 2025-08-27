math.randomseed(os.time())

RegisterNetEvent("daek_rrr:requestRoll")
AddEventHandler("daek_rrr:requestRoll", function()
    local src = source
    local roll = performChamberRoll()

    -- Optional: print to server console for debugging
    print(("[RRR] Player %s rolled a %d"):format(src, roll))

    TriggerClientEvent("daek_rrr:showRollUI", src, roll)
end)

function performChamberRoll()
    return math.random(1, 6)
end
