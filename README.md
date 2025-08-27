# daek_rrr (Russian Revolver/Roller Roulette)

A standalone script for RedM, using a d6 dice in the form of a revolver, with added Russian Roulette functionality.

Command to trigger is: /rrr

Outputs are displayed with NUI on the right, using custom animations, sounds and image assets, but only visible to the player.
Rolls can be weighed differently within the server.lua using the function performChamberRoll();

```Server.lua
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
```

## Installation

Install daek_rrr in the [standalone] folder to keep things simple, if you have the standalone folder ensured!
If you install outside of the [standalone] folder, make sure 'ensure daek_rrr' is in your server startup config.

```txadmin
  ensure daek_rrr
```
    
