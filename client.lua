RegisterNetEvent("daek_rrr:showRollUI")
AddEventHandler("daek_rrr:showRollUI", function(result)
    local ped = PlayerPedId()

    SendNUIMessage({
        type = "showRoll",
        value = result
    })
    SetNuiFocus(false, false)

    if result == 1 then
        Citizen.SetTimeout(4500, function()
            SetEntityHealth(ped, 0)
        end)
    end

    Citizen.SetTimeout(6000, function()
        SendNUIMessage({ type = "hideRoll" })
        SetNuiFocus(false, false)
    end)
end)

RegisterCommand("rrr", function()
    TriggerServerEvent("daek_rrr:requestRoll")
end, false)
