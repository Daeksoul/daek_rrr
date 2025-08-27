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
        -- Add blood mist / vignette effect
        TriggerScreenEffect()

        -- Kill player after suspense delay
        Citizen.SetTimeout(4500, function()
            SetEntityHealth(ped, 0)
        end)
    end
end

function TriggerScreenEffect()
    -- Example: Red vignette or blood mist effect
    -- You can swap this with a custom effect or particle later
    StartScreenEffect("DeathFailOut", 4500, false)
end

RegisterCommand("rrr", function()
    SendNUIMessage({ type = "showUI" }) -- ✅ Show the UI
    TriggerServerEvent("daek_rrr:requestRoll")
end)
