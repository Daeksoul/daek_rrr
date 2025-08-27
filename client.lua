RegisterNetEvent("daek_rrr:showRollUI")
AddEventHandler("daek_rrr:showRollUI", function(result)
    local ped = PlayerPedId()

    -- Trigger chamber rotation animation
    SendNUIMessage({
        type = "animateChamber",
        value = result
    })

    -- Show roll result UI
    SendNUIMessage({
        type = "showRoll",
        value = result
    })
    SetNuiFocus(false, false)

    -- Modularized outcome logic
    handleRollOutcome(result, ped)

    -- Hide UI after suspense delay
    Citizen.SetTimeout(6000, function()
        SendNUIMessage({ type = "hideRoll" })
        SetNuiFocus(false, false)
    end)
end)

function handleRollOutcome(result, ped)
    if result == 1 then
        -- Kill player after suspense delay
        Citizen.SetTimeout(5000, function()
            SetEntityHealth(ped, 0)
        end)
    end
end

RegisterCommand("rrr", function()
    SendNUIMessage({ type = "showUI" }) -- ✅ Show the UI
    TriggerServerEvent("daek_rrr:requestRoll")
end)
