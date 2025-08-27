math.randomseed(os.time())

RegisterNetEvent("daek_rrr:requestRoll")
AddEventHandler("daek_rrr:requestRoll", function()
    local src = source
    local roll = math.random(1, 6)
    TriggerClientEvent("daek_rrr:showRollUI", src, roll)
end)
