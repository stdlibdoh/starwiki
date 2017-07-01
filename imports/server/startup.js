import { Meteor } from 'meteor/meteor';
import '/imports/api/collections.js';

Meteor.startup(function() {
    loadArticles();
});

function loadArticles() {
    if (Articles.find().count()==0) {
        Articles.batchInsert(
            [
                {
                    title:'Archon',
                    img_src:'/unit_renders/Protoss/Archon.jpg',
                    img_alt:'Protoss Archon Unit',
                    descript:'Very strong late game Protoss Unit. Effective against large cluster of units, due to splash damage. Formed by combining two high/dark templars',
                    category1:'Protoss',
                    category2:'Units'
                },
                {
                    title:'Carrier',
                    img_src:'/unit_renders/Protoss/Carrier.jpg',
                    img_alt:'Protoss Carrier Unit',
                    descript:'Flying late game unit. Attacks by deploying smaller ships. Effective to break sieges',
                    category1:'Protoss',
                    category2:'Units'
                },
                {
                    title:'Colossus',
                    img_src:'/unit_renders/Protoss/Colossus.jpg',
                    img_alt:'Protoss Colossus Unit',
                    descript:'Mid to late game unit. Can climb walls and get to high ground. Attacks via two beams that can be upgraded for extra range. Effective against large clusters of ground units.',
                    category1:'Protoss',
                    category2:'Units'
                },
                {
                    title:'Dark Templar',
                    img_src:'/unit_renders/Protoss/DarkTemplar.jpg',
                    img_alt:'Protoss Dark Templar Unit',
                    descript:'Stealth ground unit. Effective late game to scout possible expansions and disrupt resource gathering. Also effective as early game strat however hard to transition into mid game.',
                    category1:'Protoss',
                    category2:'Units'
                },
                {
                    title:'High Templar',
                    img_src:'/unit_renders/Protoss/HighTemplar.jpg',
                    img_alt:'Protoss High Templar Unit',
                    descript:'Mid game unit. Can use psy storm, an AoE ability with high damage output. Slow speed makes for a high trade off. Can morph into Archon.',
                    category1:'Protoss',
                    category2:'Units'
                },
                {
                    title:'Immortal',
                    img_src:'/unit_renders/Protoss/Immortal.jpg',
                    img_alt:'Protoss Immortal Unit',
                    descript:'Equipped with a shield that absorbs any damage above a certain threshold. Effective to break Terran sieges.',
                    category1:'Protoss',
                    category2:'Units'
                },
                {
                    title:'Nullifier',
                    img_src:'/unit_renders/Protoss/Nullifier.jpg',
                    img_alt:'Protoss Nullifier Unit',
                    descript:'No clue, actually. Introduced in Legacy of the Void and I literally only played the campaign once. Pretty sure this dude is Multiplayer Only doe.',
                    category1:'Protoss',
                    category2:'Units'
                },
                {
                    title:'Phase Prism',
                    img_src:'/unit_renders/Protoss/PhasePrism.jpg',
                    img_alt:'Protoss Phase Prism Unit',
                    descript:'Flying unit. Can hold up to 4 spaces of units. Can also morph into a proxy pylon, allowing it to warp in units. Effective at reinforcing away from main production lines and harassing',
                    category1:'Protoss',
                    category2:'Units'
                },
                {
                    title:'Phoenix',
                    img_src:'/unit_renders/Protoss/Phoenix.jpg',
                    img_alt:'Protoss Phoenix Unit',
                    descript:'Light flying unit. Can attack while moving, making it the optimal counter to Mutalisk.',
                    category1:'Protoss',
                    category2:'Units'
                },
                {
                    title:'Probe',
                    img_src:'/unit_renders/Protoss/Probe.jpg',
                    img_alt:'Protoss Probe Unit',
                    descript:'Gatherer unit. Minerals and Gas. Can warp buildings.',
                    category1:'Protoss',
                    category2:'Units'
                },
                {
                    title:'Stalker',
                    img_src:'/unit_renders/Protoss/Stalker.jpg',
                    img_alt:'Protoss Stalker Unit',
                    descript:'Early game ground unit. Can blink over obstacles and cliffs with forge upgrade. Attacks ground and air',
                    category1:'Protoss',
                    category2:'Units'
                },
                {
                    title:'Void Ray',
                    img_src:'/unit_renders/Protoss/VoidRay.jpg',
                    img_alt:'Protoss Void Ray Unit',
                    descript:'Flying unit. Attacks with a single beam that deals more damage the longer its attacking a target, sort of like charging its lasers. Lethal in high numbers',
                    category1:'Protoss',
                    category2:'Units'
                },
                {
                    title:'Zealot',
                    img_src:'/unit_renders/Protoss/Zealot.jpg',
                    img_alt:'Protoss Zealot Unit',
                    descript:'Basic infantry unit. Can charge forward with forge upgrade.',
                    category1:'Protoss',
                    category2:'Units'
                },
                {
                    title:'Banshee',
                    img_src:'/unit_renders/Terran/Banshee.jpg',
                    img_alt:'Terran Banshee Unit',
                    descript:'Flying unit however can only attack ground units. Stealth upgrade available. Effective at early game harassment',
                    category1:'Terran',
                    category2:'Units'
                },
                {
                    title:'Battlecruiser',
                    img_src:'/unit_renders/Terran/Battlecruiser.jpg',
                    img_alt:'Terran Battlecruiser Unit',
                    descript:'Late game flying unit. Yamato cannon upgrade available that has a charge time followed by a large damage output.',
                    category1:'Terran',
                    category2:'Units'
                },
                {
                    title:'Ghost',
                    img_src:'/unit_renders/Terran/Ghost.jpg',
                    img_alt:'Terran Ghost Unit',
                    descript:'Ground unit with stealth. Can use nuclear launch attack, high damage output with large radius but slow charge time. Can also snipe.',
                    category1:'Terran',
                    category2:'Units'
                },
                {
                    title:'Hellion',
                    img_src:'/unit_renders/Terran/Hellion.jpg',
                    img_alt:'Terran Hellion Unit',
                    descript:'Replacement of the Vulture unit from BW but without the mines. Attacks with a flamethrower that can be upgraded to a blue flamethrower, dealing extra damage. Very fast unit',
                    category1:'Terran',
                    category2:'Units'
                },
                {
                    title:'Marauder',
                    img_src:'/unit_renders/Terran/Marauder.jpg',
                    img_alt:'Terran Marauder Unit',
                    descript:'Infantry unit. Heavy armour and attack can be upgraded to slow units for some time. Also available is the stimpak upgrade.',
                    category1:'Terran',
                    category2:'Units'
                },
                {
                    title:'Marine',
                    img_src:'/unit_renders/Terran/Marine.jpg',
                    img_alt:'Terran Marine Unit',
                    descript:'Basic infantry unit. Stimpark upgrade available. Combat shields give extra HP.',
                    category1:'Terran',
                    category2:'Units'
                },
                {
                    title:'Medivac',
                    img_src:'/unit_renders/Terran/Medivac.jpg',
                    img_alt:'Terran Medivac Unit',
                    descript:'Flying unit that can serve as transport and heals infantry.',
                    category1:'Terran',
                    category2:'Units'
                },
                {
                    title:'Nomad',
                    img_src:'/unit_renders/Terran/Nomad.jpg',
                    img_alt:'Terran Nomad Unit',
                    descript:'Actually a raven. Had no clue it used to be called a nomad. Detects stealth, deploys Point Defense Drone and launches a slow but annoying missile',
                    category1:'Terran',
                    category2:'Units'
                },
                {
                    title:'Reaper',
                    img_src:'/unit_renders/Terran/Reaper.jpg',
                    img_alt:'Terran Reaper Unit',
                    descript:'Infantry unit that can climb over cliffs with jetpacks. Can launch grenades that boop other units',
                    category1:'Terran',
                    category2:'Units'
                },
                {
                    title:'SCV',
                    img_src:'/unit_renders/Terran/SCV.jpg',
                    img_alt:'Terran SCV Unit',
                    descript:'Gatherer Unit. Can build/repair structures and mech units.',
                    category1:'Terran',
                    category2:'Units'
                },
                {
                    title:'Siege Tank',
                    img_src:'/unit_renders/Terran/SiegeTank.jpg',
                    img_alt:'Terran Siege Tank Unit',
                    descript:'Mid game unit. Effective in high numbers. Can turn into siege-mode that makes the unit immobile but with a terrifying damage output. Since Legacy of the Void, can be picked up by medivacs in siege mode.',
                    category1:'Terran',
                    category2:'Units'
                },
                {
                    title:'Viking',
                    img_src:'/unit_renders/Terran/Viking.jpg',
                    img_alt:'Terran Viking Unit',
                    descript:'Flying unit. Can morph into ground mode to attack ground units. Flying mode only allows for air to air attacks.',
                    category1:'Terran',
                    category2:'Units'
                },
                {
                    title:'Baneling',
                    img_src:'/unit_renders/Zerg/Baneling.jpg',
                    img_alt:'Zerg Baneling Unit',
                    descript:'Only available with structure and morphing zergling. Explodes on contact or on demand. Can burrow making top landmines.',
                    category1:'Zerg',
                    category2:'Units'
                },
                {
                    title:'Drone',
                    img_src:'/unit_renders/Zerg/Drone.jpg',
                    img_alt:'Zerg Drone Unit',
                    descript:'Gatherer Unit. Morphs into structures.',
                    category1:'Zerg',
                    category2:'Units'
                },
                {
                    title:'Hydralisk',
                    img_src:'/unit_renders/Zerg/Hydralisk.jpg',
                    img_alt:'Zerg Hydralisk Unit',
                    descript:'Mid game unit. Has ground to ground and ground to air attacks. Can morph into Lurker. Has upgradable range',
                    category1:'Zerg',
                    category2:'Units'
                },
                {
                    title:'Mutalisk',
                    img_src:'/unit_renders/Zerg/Mutalisk.jpg',
                    img_alt:'Zerg Mutalisk Unit',
                    descript:'Flying mid game unit. Can attack both ground and air troops. Low HP pool but very fast. Effective in great numbers to harass and cut off reinforcements. ',
                    category1:'Zerg',
                    category2:'Units'
                },
                {
                    title:'Overlord',
                    img_src:'/unit_renders/Zerg/Overlord.jpg',
                    img_alt:'Zerg Overlord Unit',
                    descript:'Allows storage of troops metaphorically, as it unlocks more troops to be built, and literally due to upgrade that lets it carry troops inside it. Can morph into something that I forgot that\'s basically faster and can detect hidden thingies.',
                    category1:'Zerg',
                    category2:'Units'
                },
                {
                    title:'Ultralisk',
                    img_src:'/unit_renders/Zerg/Ultralisk.jpg',
                    img_alt:'Zerg Ultralisk Unit',
                    descript:'Late game ground unit. Effectie against clusters of infantry. Only really usable with carapace and speed upgrade.',
                    category1:'Zerg',
                    category2:'Units'
                },
                {
                    title:'Zergling',
                    img_src:'/unit_renders/Zerg/Zergling.jpg',
                    img_alt:'Zerg Zergling Unit',
                    descript:'Basic infantry unit. Morphs in pairs. Has upgradable speed, turning it into a speedling and upgradable attack speed, turning it into a crackling. Good all around.',
                    category1:'Zerg',
                    category2:'Units'
                },
                {
                    title:'Assimilator',
                    img_src:'/building_renders/Protoss/Assimilator.jpg',
                    img_alt:'Protoss Assimilator Structure',
                    descript:'Main structure to gather gas, essential to most protoss units',
                    category1:'Protoss',
                    category2:'Structures'
                },
                {
                    title:'Cybernetics Core',
                    img_src:'/building_renders/Protoss/CyberneticsCore.jpg',
                    img_alt:'Protoss Cybernetics Core Structure',
                    descript:'Tier 1 structure, unlocks Stalker, Sentry and Adept Gateway units, and Mothership Core. Also allows research of air weapons and armour, and research of warp gate tech.',
                    category1:'Protoss',
                    category2:'Structures'
                },
                {
                    title:'Dark Obelisk',
                    img_src:'/building_renders/Protoss/DarkObelisk.jpg',
                    img_alt:'Protoss Dark Obelisk Structure',
                    descript:'Actually named Dark Shrine in game. Unlocks production of Dark Templars. No clue why blizz thought they could change the name, it was called dark shrine in BW anyway pff',
                    category1:'Protoss',
                    category2:'Structures'
                },
                {
                    title:'Fleet Beacon',
                    img_src:'/building_renders/Protoss/FleetBeacon.jpg',
                    img_alt:'Protoss Fleet Beacon Structure',
                    descript:'Allows production of Mothership unit, upgraded from a Mothership Core unit, Carrier and Tempest. Also unlocks Tier 3 air upgrades.',
                    category1:'Protoss',
                    category2:'Structures'
                },
                {
                    title:'Forge',
                    img_src:'/building_renders/Protoss/Forge.jpg',
                    img_alt:'Protoss Forge Structure',
                    descript:'Research Structure, ground upgrades only. Also allows production of photon cannons.',
                    category1:'Protoss',
                    category2:'Structures'
                },
                {
                    title:'Gateway',
                    img_src:'/building_renders/Protoss/Gateway.jpg',
                    img_alt:'Protoss Gateway Structure',
                    descript:'Tier 1 army structure. Can be upgraded to a Warp Gate.',
                    category1:'Protoss',
                    category2:'Structures'
                },
                {
                    title:'Nexus',
                    img_src:'/building_renders/Protoss/Nexus.jpg',
                    img_alt:'Protoss Nexus Structure',
                    descript:'Main Protoss Structure. Allows production and Probes and also allows for Chrono Boost, boosting production speed of any structure. Probes will send resources back to Nexus.',
                    category1:'Protoss',
                    category2:'Structures'
                },
                {
                    title:'Photon Cannon',
                    img_src:'/building_renders/Protoss/PhotonCannon.jpg',
                    img_alt:'Protoss Photon Cannon Structure',
                    descript:'Defensive structure. Deploys whenever there/s an enemy unit nearby. Attacks both air and ground troops.',
                    category1:'Protoss',
                    category2:'Structures'
                },
                {
                    title:'Pylon',
                    img_src:'/building_renders/Protoss/Pylon.jpg',
                    img_alt:'Protoss Pylon Structure',
                    descript:'Allows for creation of more troops.',
                    category1:'Protoss',
                    category2:'Structures'
                },
                {
                    title:'Robotics Facility',
                    img_src:'/building_renders/Protoss/RoboticsFacility.jpg',
                    img_alt:'Protoss Robotics Facility Structure',
                    descript:'Tier 2 Structure that allows production of Robotic Units, such as Immortal, Colossus.',
                    category1:'Protoss',
                    category2:'Structures'
                },
                {
                    title:'Robotics Bay',
                    img_src:'/building_renders/Protoss/RoboticsSupportBay.jpg',
                    img_alt:'Protoss Robotics Bay Structure',
                    descript:'Unlocked after Robotics Facility is built, allows for essencial Robotics upgrades such as increased range on Colossus Unit.',
                    category1:'Protoss',
                    category2:'Structures'
                },
                {
                    title:'Stargate',
                    img_src:'/building_renders/Protoss/Stargate.jpg',
                    img_alt:'Protoss Stargate Structure',
                    descript:'Allows for production of air units, such as Phoenix and Void Rays.',
                    category1:'Protoss',
                    category2:'Structures'
                },
                {
                    title:'Templar Archives',
                    img_src:'/building_renders/Protoss/TemplarArchives.jpg',
                    img_alt:'Protoss Templar Archives Structure',
                    descript:'Unlocks the High Templar Gateway unit.',
                    category1:'Protoss',
                    category2:'Structures'
                },
                {
                    title:'Twilight Council',
                    img_src:'/building_renders/Protoss/TwilightCouncil.jpg',
                    img_alt:'Protoss Twilight Council Structure',
                    descript:'Allows for research of Gateway upgrades, such as charge for Zealots and blink for Stalkers.',
                    category1:'Protoss',
                    category2:'Structures'
                },
                {
                    title:'Warp Gate',
                    img_src:'/building_renders/Protoss/WarpGate.jpg',
                    img_alt:'Protoss Warp Gate Structure',
                    descript:'Unlocked after research in Cybernetics Core, it allows for a Gateway structure to be upgraded, and to warp in units, rather than waiting normal time for production. On a cooldown. ',
                    category1:'Protoss',
                    category2:'Structures'
                },
                {
                    title:'Barracks',
                    img_src:'/building_renders/Terran/Barracks.jpg',
                    img_alt:'Terran Barracks Structure',
                    descript:'Allows for production of infantry units, such as Marines and Marauders',
                    category1:'Terran',
                    category2:'Structures'
                },
                {
                    title:'Bunker',
                    img_src:'/building_renders/Terran/Bunker.jpg',
                    img_alt:'Terran Bunker Structure',
                    descript:'Defensive structure that allows storage of 4 slot units',
                    category1:'Terran',
                    category2:'Structures'
                },
                {
                    title:'Command Centre',
                    img_src:'/building_renders/Terran/CommandCenter.jpg',
                    img_alt:'Terran Command Centre Structure',
                    descript:'Main base for Terran. Allows production of SCVs who in turn drop resources to it. Can be upgraded to Planetary Fortress or Orbital Station.',
                    category1:'Terran',
                    category2:'Structures'
                },
                {
                    title:'Factory',
                    img_src:'/building_renders/Terran/Factory.jpg',
                    img_alt:'Terran Factory Structure',
                    descript:'Unlocks production of mech units for Terran, such as Siege Tanks and ',
                    category1:'Terran',
                    category2:'Structures'
                },
                {
                    title:'Planetary Fortress',
                    img_src:'/building_renders/Terran/PlanetaryFortress.jpg',
                    img_alt:'Terran Planetary Fortress Structure',
                    descript:'One of the upgrades available for a Command Centre. Highly defensive, is capable of holding pushes composed of several units.',
                    category1:'Terran',
                    category2:'Structures'
                },
                {
                    title:'Refinery',
                    img_src:'/building_renders/Terran/Refinery.jpg',
                    img_alt:'Terran Refinery Structure',
                    descript:'Allows gathering of gas resource by SCVs.',
                    category1:'Terran',
                    category2:'Structures'
                },
                {
                    title:'Starport',
                    img_src:'/building_renders/Terran/Starport.jpg',
                    img_alt:'Terran Starport Unit',
                    descript:'Allows production of air units, such as Medivacs, Vikings, Banshees and Battlecruisers',
                    category1:'Terran',
                    category2:'Structures'
                },
                {
                    title:'Supply Depot',
                    img_src:'/building_renders/Terran/SupplyDepot.jpg',
                    img_alt:'Terran Supply Depot Structure',
                    descript:'Allows production of more units.',
                    category1:'Terran',
                    category2:'Structures'
                },
                {
                    title:'Orbital Station',
                    img_src:'/building_renders/Terran/OrbitalStation.jpg',
                    img_alt:'Terran Orbital Station Structure',
                    descript:'One of the possible upgrades to a Command Centre. This upgrade focuses on economy, rather than defense, and allows for call of a M.U.L.E. unit, that gathers double the resources but has a despawn time.',
                    category1:'Terran',
                    category2:'Structures'
                },
                {
                    title:'Baneling Nest',
                    img_src:'/building_renders/Zerg/BanelingNest.jpg',
                    img_alt:'Zerg Baneling Nest Structure',
                    descript:'Allows for production of Baneling unit, morphed from a Zergling unit.',
                    category1:'Zerg',
                    category2:'Structures'
                },
                {
                    title:'Evolution Chamber',
                    img_src:'/building_renders/Zerg/EvolutionChamber.jpg',
                    img_alt:'Zerg Evolution Chamber Structure',
                    descript:'Allows research of ground units\'s upgrades, such as attack and carapace.',
                    category1:'Zerg',
                    category2:'Structures'
                },
                {
                    title:'Greater Spire',
                    img_src:'/building_renders/Zerg/GreaterSpire.jpg',
                    img_alt:'Zerg Greater Spire Structure',
                    descript:'Upgraded form of the Spire, unlocked after upgrading to Hive tech. As long as production of Mutalisks, it allows production of Broodlords, morphed from Corruptors.',
                    category1:'Zerg',
                    category2:'Structures'
                },
                {
                    title:'Hydralisk Den',
                    img_src:'/building_renders/Zerg/HydraliskDen.jpg',
                    img_alt:'Zerg Hydralisk Den Structure',
                    descript:'Allows production of Hydralisk units.',
                    category1:'Zerg',
                    category2:'Structures'
                },
                {
                    title:'Infestor Pit',
                    img_src:'/building_renders/Zerg/InfestorPit.jpg',
                    img_alt:'Zerg Infestor Pit Structure',
                    descript:'Allows production of Infestor units, a spell caster unit. Also allows for research of upgrades to the infestor unit, such as more energy.',
                    category1:'Zerg',
                    category2:'Structures'
                },
                {
                    title:'Ultralisk Cavern',
                    img_src:'/building_renders/Zerg/UltraliskCavern.jpg',
                    img_alt:'Zerg Ultralisk Cavern Structure',
                    descript:'Allows production of the Ultralisk, and research upgrades to the same unit.',
                    category1:'Zerg',
                    category2:'Structures'
                },
                {
                    title:'Protoss',
                    img_src:'/logos/Protoss_Icon.jpg',
                    img_alt:'Protoss Logo',
                    category1:'races'
                },
                {
                    title:'Terran',
                    img_src:'/logos/Terran_Icon.jpg',
                    img_alt:'Terran Logo',
                    category1:'races'
                },
                {
                    title:'Zerg',
                    img_src:'/logos/Zerg_Icon.jpg',
                    img_alt:'Zerg Logo',
                    category1:'races'
                }
            ]
        )
    }
}