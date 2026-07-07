const characters = {

/*
  SECTION_NAME: [
    { id: "CHARACTER", name: "CHARACTER_NAME", imageUrl: "https://via.placeholder.com/150?text=Character", cheatsheet: "BASIC_IDEAS", counters: ["COUNTERS"], weaknesses: ["WEAKNESSES"], tips: ["TIPS"] },
    { id: "CHARACTER_2", name: "CHARACTER_NAME_2", imageUrl: "https://via.placeholder.com/150?text=Character_2", cheatsheet: "BASIC_IDEAS", counters: ["COUNTERS"], weaknesses: ["WEAKNESSES"], tips: ["TIPS"]
  ],  
Syntax is different for the last id
*/

  mario: [
    { id: "mario", name: "Mario", imageUrl: "https://via.placeholder.com/150?text=Mario", cheatsheet: "Stay mobile to avoid his combos. Use platforms to escape his grab range. Watch for F-smash setups near the edge.", counters: ["Luigi", "Pikachu", "Fox"], weaknesses: ["Poor range", "Struggles at high percents"], tips: ["Punish his landing with aerials", "Camp platforms"] },
    { id: "yoshi", name: "Yoshi", imageUrl: "https://via.placeholder.com/150?text=Yoshi", cheatsheet: "Respect his combo game. Avoid being grabbed near ledge. Use grab combos on him.", counters: ["Ryu", "Ken", "Pikachu"], weaknesses: ["Light", "Linear recovery"], tips: ["Edge-guard aggressively", "Grab him often"] },
    { id: "luigi", name: "Luigi", imageUrl: "https://via.placeholder.com/150?text=Luigi", cheatsheet: "Avoid his down-B spike near ledge. Use platforms. Respect his up-B kill potential out of shield.", counters: ["Fox", "Falco", "Pikachu"], weaknesses: ["Floaty", "Poor recovery mixup"], tips: ["Stay in neutral", "Don't land near ledge"] },
    { id: "peach", name: "Peach", imageUrl: "https://via.placeholder.com/150?text=Peach", cheatsheet: "Approach from below. Her float makes her susceptible to juggling. Punish her recovery.", counters: ["Sheik", "Fox", "Sonic"], weaknesses: ["Light weight", "Recovery exploitable"], tips: ["Juggle with aerials", "Edge-guard aggressively"] },
    { id: "daisy", name: "Daisy", imageUrl: "https://via.placeholder.com/150?text=Daisy", cheatsheet: "Similar to Peach but slightly different spacing. Same juggling weakness. Punish float recovery.", counters: ["Sheik", "Fox", "Sonic"], weaknesses: ["Light weight", "Float recovery"], tips: ["Juggle aggressively", "Ledge-trap"] },
    { id: "bowser", name: "Bowser", imageUrl: "https://via.placeholder.com/150?text=Bowser", cheatsheet: "Keep him out with projectiles. Avoid his grab at all costs. Use mobility to outspace him.", counters: ["Samus", "Peach", "Pikachu"], weaknesses: ["Slow", "Poor range despite size"], tips: ["Zone him out", "Grab combo him back"] },
    { id: "dr.mario", name: "Dr. Mario", imageUrl: "https://via.placeholder.com/150?text=Dr.Mario", cheatsheet: "Stay mobile. Exploit his light weight. Use grab combos. Watch for tail attacks.", counters: ["Fox", "Pikachu", "Greninja"], weaknesses: ["Light", "Recovery exploitable"], tips: ["Juggle him", "Ledge-trap"] },
    { id: "rosalina&luma", name: "Rosalina & Luma", imageUrl: "https://via.placeholder.com/150?text=Rosalina%26Luma", cheatsheet: "Stay mobile. Exploit her light weight. Use grab combos. Watch for tail attacks.", counters: ["Fox", "Pikachu", "Greninja"], weaknesses: ["Light", "Recovery exploitable"], tips: ["Juggle her", "Ledge-trap"] },
    { id: "bowser_jr", name: "Bowser Jr", imageUrl: "https://via.placeholder.com/150?text=BowserJr", cheatsheet: "Stay away from his projectile. Camp platforms. Don't get grabbed near ledge.", counters: ["Fox", "Sheik", "Sonic"], weaknesses: ["Light", "Linear recovery"], tips: ["Use mobility", "Ledge-trap"] },
    { id: "wario", name: "Wario", imageUrl: "https://via.placeholder.com/150?text=Wario", cheatsheet: "Stay away from his projectile. Camp platforms. Don't get grabbed near ledge.", counters: ["Fox", "Sheik", "Sonic"], weaknesses: ["Light", "Linear recovery"], tips: ["Use mobility", "Ledge-trap"] },
    { id: "piranha_plant", name: "Piranha Plant", imageUrl: "https://via.placeholder.com/150?text=PiranhaPlant", cheatsheet: "Avoid his side-B range. Use aerials to combo him. Get above him to avoid his projectile.", counters: ["Sheik", "Pikachu", "Sonic"], weaknesses: ["Floaty", "Recovery struggles"], tips: ["Attack from above", "Punish his startup"] }
  ],
  
  kirby: [
    { id: "kirby", name: "Kirby", imageUrl: "https://via.placeholder.com/150?text=Kirby", cheatsheet: "His copy ability is dangerous. Use projectiles to keep him away. Juggle him.", counters: ["Fox", "Sonic", "Pikachu"], weaknesses: ["Light", "Short recovery"], tips: ["Edge-guard heavily", "Don't let him copy neutral-B"] },
    { id: "meta_knight", name: "Meta Knight", imageUrl: "https://via.placeholder.com/150?text=MetaKnight", cheatsheet: "Stay out of his grab range. Don't approach carelessly. Use platforms.", counters: ["Samus", "Pikachu"], weaknesses: ["Light weight", "Recovery startup"], tips: ["Juggle aggressively", "Edge-guard"] },
    { id: "king_dedede", name: "King Dedede", imageUrl: "https://via.placeholder.com/150?text=KingDedede", cheatsheet: "Respect his grab range and throw combos. Stay mobile. Use projectiles.", counters: ["Samus", "Fox"], weaknesses: ["Slow", "Big target"], tips: ["Space your attacks", "Juggle him"] }
  ],

  pokemon: [
    { id: "pikachu", name: "Pikachu", imageUrl: "https://via.placeholder.com/150?text=Pikachu", cheatsheet: "Stay away from combos. Use range to keep him out. Juggle him at mid percents.", counters: ["Samus", "Greninja", "Lucario"], weaknesses: ["Light", "Poor range"], tips: ["Camp platforms", "Punish whiff"] },
    { id: "pichu", name: "Pichu", imageUrl: "https://via.placeholder.com/150?text=Pichu", cheatsheet: "Even lighter than Pikachu. Abuse his light weight. He damages himself with his moves.", counters: ["Heavy characters", "Samus"], weaknesses: ["Self-damage", "Very light"], tips: ["Let him hurt himself", "Survive longer"] },
    { id: "jigglypuff", name: "Jigglypuff", imageUrl: "https://via.placeholder.com/150?text=Jigglypuff", cheatsheet: "Rush her down quickly. Don't give her time to setup. Her recovery is poor, edge-guard heavily.", counters: ["Fox", "Sonic", "Sheik"], weaknesses: ["Light", "Floaty", "Poor recovery"], tips: ["Stay aggressive", "Edge-guard relentlessly"] },
    { id: "mewtwo", name: "Mewtwo", imageUrl: "https://via.placeholder.com/150?text=Mewtwo", cheatsheet: "Stay mobile. Exploit his light weight. Use grab combos. Watch for tail attacks.", counters: ["Fox", "Pikachu", "Greninja"], weaknesses: ["Light", "Recovery exploitable"], tips: ["Juggle him", "Ledge-trap"] },
    { id: "pokemon_trainer", name: "Pokemon Trainer", imageUrl: "https://via.placeholder.com/150?text=PokemonTrainer", cheatsheet: "Stay out of his grab range. Use projectiles to zone. Avoid his ledge-guarding.", counters: ["Water types", "Pikachu"], weaknesses: ["Heavy but floaty", "Landing lag"], tips: ["Punish landing", "Stay spaced"] },
    {id: "lucario", name: "Lucario", imageUrl: "https://via.placeholder.com/150?text=Lucario", cheatsheet: "Keep up with his mobility. Respect his combo game. Exploit down-B recovery startup.", counters: ["Samus", "Pikachu"], weaknesses: ["Recovery vulnerable", "Light"], tips: ["Stay active", "Edge-guard on recovery"] },
    {id: "incineroar", name: "Incineroar", imageUrl: "https://via.placeholder.com/150?text=Incineroar", cheatsheet: "Keep up with his mobility. Respect his combo game. Exploit down-B recovery startup.", counters: ["Samus", "Lucario"], weaknesses: ["Recovery vulnerable", "Light"], tips: ["Stay active", "Edge-guard on recovery"] },
    { id: "greninja", name: "Greninja", imageUrl: "https://via.placeholder.com/150?text=Greninja", cheatsheet: "Keep up with his mobility. Respect his combo game. Exploit down-B recovery startup.", counters: ["Samus", "Lucario"], weaknesses: ["Recovery vulnerable", "Light"], tips: ["Stay active", "Edge-guard on recovery"] }
  ],

  zelda: [
    { id: "link", name: "Link", imageUrl: "https://via.placeholder.com/150?text=Link", cheatsheet: "Avoid his projectile spam. Approach from above or through the air. Use shields wisely against his arrows.", counters: ["Sheik", "Fox", "Pikachu"], weaknesses: ["Slow endlag on attacks", "Heavy"], tips: ["Punish shield with grab", "Stay aggressive"] },
    { id: "young_link", name: "Young Link", imageUrl: "https://via.placeholder.com/150?text=YoungLink", cheatsheet: "Similar to Link but faster. His projectiles are still scary. Approach from air.", counters: ["Sheik", "Fox", "Sonic"], weaknesses: ["Light", "Short range"], tips: ["Rush him down", "Use mobility"] },
    { id: "toon_link", name: "Toon Link", imageUrl: "https://via.placeholder.com/150?text=ToonLink", cheatsheet: "Faster and lighter than Link. His recovery is better but still punishable. Zone him out.", counters: ["Fox", "Sonic", "Sheik"], weaknesses: ["Light weight", "Projectile lag"], tips: ["Use speed advantage", "Edge-guard"] },
    { id: "zelda", name: "Zelda", imageUrl: "https://via.placeholder.com/150?text=Zelda", cheatsheet: "Rush her down before she teleports away. Don't let her get space for projectiles.", counters: ["Fox", "Sheik", "Sonic"], weaknesses: ["Slow", "Poor mobility"], tips: ["Stay aggressive", "Limit teleport spacing"] },
    { id: "sheik", name: "Sheik", imageUrl: "https://via.placeholder.com/150?text=Sheik", cheatsheet: "Watch for her grab combos. Use range to keep her out when possible. Respect her speed.", counters: ["Samus", "Pikachu"], weaknesses: ["Light weight", "Recovery needs setup"], tips: ["Don't get grabbed", "Juggle her"] },
    { id: "ganondorf", name: "Ganondorf", imageUrl: "https://via.placeholder.com/150?text=Ganondorf", cheatsheet: "His reach is scary. Stay mobile. Don't approach predictably. Camp projectiles.", counters: ["Samus", "Sonic", "Pikachu"], weaknesses: ["Slow", "Poor recovery"], tips: ["Zone him out", "Exploit lag"] }
  ],

  starfox: [
    { id: "fox", name: "Fox", imageUrl: "https://via.placeholder.com/150?text=Fox", cheatsheet: "He wants close combos. Use range to outspace. Punish his landing with aerials.", counters: ["Samus", "Pikachu"], weaknesses: ["Poor range", "Light weight"], tips: ["Stay spaced", "Juggle aggressively"] },
    { id: "falco", name: "Falco", imageUrl: "https://via.placeholder.com/150?text=Falco", cheatsheet: "Similar to Fox but floatier. Juggle him more. Respect his down-B spike.", counters: ["Samus", "Pikachu"], weaknesses: ["Floaty", "Slow fall speed"], tips: ["Juggle heavily", "Ledge-trap"] },
    { id: "wolf", name: "Wolf", imageUrl: "https://via.placeholder.com/150?text=Wolf", cheatsheet: "More grounded than Fox/Falco. His grab combos are strong. Don't get grabbed.", counters: ["Samus", "Pikachu"], weaknesses: ["Recovery exploitable"], tips: ["Respect grab range", "Edge-guard recovery"] }
  ],

  metroid: [
    { id: "samus", name: "Samus", imageUrl: "https://via.placeholder.com/150?text=Samus", cheatsheet: "Close the distance quickly. Use dash-dancing to bait missiles. Once in, stay on her.", counters: ["Sheik", "Fox", "Sonic"], weaknesses: ["Poor close-range game", "Floaty"], tips: ["Approach low to avoid missiles", "Don't give her space"] },
    { id: "dark_samus", name: "Dark Samus", imageUrl: "https://via.placeholder.com/150?text=DarkSamus", cheatsheet: "Same as Samus with slightly different properties. Rush her down.", counters: ["Sheik", "Fox", "Sonic"], weaknesses: ["Poor close-game", "Floaty"], tips: ["Close distance fast", "Stay aggressive"] },
    { id: "zero_suit_samus", name: "Zero Suit Samus", imageUrl: "https://via.placeholder.com/150?text=ZSSamus", cheatsheet: "She's mobile and fast. Don't let her grab you. Use projectiles to zone.", counters: ["Samus", "Pikachu"], weaknesses: ["Light", "Recovery vulnerability"], tips: ["Don't get grabbed", "Edge-guard"] },
    {id: "ridley", name: "Ridley", imageUrl: "https://via.placeholder.com/150?text=Ridley", cheatsheet: "His size is intimidating. Use platforms to avoid his grabs. Punish his landing.", counters: ["Samus", "Pikachu"], weaknesses: ["Large target", "Poor recovery"], tips: ["Stay mobile", "Edge-guard"] }
  ],

  sonic: [
    { id: "sonic", name: "Sonic", imageUrl: "https://via.placeholder.com/150?text=Sonic", cheatsheet: "His speed is dangerous. Don't approach recklessly. Ledge-trap him if possible.", counters: ["Samus", "Pikachu"], weaknesses: ["Light", "Recovery needs setup"], tips: ["Use platform control", "Edge-guard relentlessly"] }
  ],

  streetfighter: [
    { id: "ryu", name: "Ryu", imageUrl: "https://via.placeholder.com/150?text=Ryu", cheatsheet: "Respect his input combos and hadoken. Don't approach predictably. Use grab combos.", counters: ["Samus", "Pikachu"], weaknesses: ["Light", "Recovery linear"], tips: ["Juggle him", "Avoid his combos"] },
    { id: "ken", name: "Ken", imageUrl: "https://via.placeholder.com/150?text=Ken", cheatsheet: "Similar to Ryu but floatier and faster. Juggle him more. Watch his inputs.", counters: ["Samus", "Pikachu"], weaknesses: ["Floaty", "Light"], tips: ["Don't get combo'd", "Edge-guard"] }
  ],

  finalfantasy: [
    { id: "cloud", name: "Cloud", imageUrl: "https://via.placeholder.com/150?text=Cloud", cheatsheet: "His Limit Break is dangerous. Keep him grounded. Use projectiles to interrupt his charge.", counters: ["Pikachu", "Sheik"], weaknesses: ["Recovery when off-stage", "Light"], tips: ["Interrupt Limit", "Edge-guard heavily"] },
    { id: "sephiroth", name: "Sephiroth", imageUrl: "https://via.placeholder.com/150?text=Sephiroth", cheatsheet: "His range is absurd. Stay mobile. Don't get grabbed. Use projectiles to zone.", counters: ["Pikachu", "Sheik"], weaknesses: ["Light weight", "Poor recovery"], tips: ["Stay spaced", "Edge-guard"] }
  ],

  castlevania: [
    { id: "simon", name: "Simon", imageUrl: "https://via.placeholder.com/150?text=Simon", cheatsheet: "He zones with whip. Approach from air or platforms. Don't let him space freely.", counters: ["Fox", "Sonic", "Sheik"], weaknesses: ["Heavy but slow", "Poor mobility"], tips: ["Rush him down", "Use platforms"] },
    { id: "richter", name: "Richter", imageUrl: "https://via.placeholder.com/150?text=Richter", cheatsheet: "Same as Simon with different sourspots. Similar spacing issues.", counters: ["Fox", "Sonic", "Sheik"], weaknesses: ["Slow", "Recovery punishable"], tips: ["Approach from air", "Stay aggressive"] }
  ],

  xenoblade: [
    { id: "shulk", name: "Shulk", imageUrl: "https://via.placeholder.com/150?text=Shulk", cheatsheet: "His Monado Arts change the matchup. Adapt to Speed/Buster/Smash. Respect his range.", counters: ["Pikachu", "Sheik"], weaknesses: ["Stance dependent", "Long startup moves"], tips: ["Punish stance changes", "Juggle him"] },
    { id: "pyra_mythra", name: "Pyra/Mythra", imageUrl: "https://via.placeholder.com/150?text=PyraMythra", cheatsheet: "Switches between Pyra and Mythra. Adapt to their different speeds and ranges. Punish their recovery.", counters: ["Pikachu", "Sheik"], weaknesses: ["Switching can be exploited", "Light weight"], tips: ["Punish switch lag", "Edge-guard"] }
  ],

  kidicarus: [
    { id: "pit", name: "Pit", imageUrl: "https://via.placeholder.com/150?text=Pit", cheatsheet: "His projectile is multi-directional. Stay mobile. Use grab combos on him.", counters: ["Samus", "Pikachu"], weaknesses: ["Light", "Projectile lag"], tips: ["Approach from above", "Juggle him"] },
    { id: "dark_pit", name: "Dark Pit", imageUrl: "https://via.placeholder.com/150?text=DarkPit", cheatsheet: "Same as Pit with different effects. Slightly heavier. Similar approach.", counters: ["Samus", "Pikachu"], weaknesses: ["Recovery differs slightly"], tips: ["Same as Pit", "Mind his down-B"] },
    { id: "palutena", name: "Palutena", imageUrl: "https://via.placeholder.com/150?text=Palutena", cheatsheet: "She has many projectile options. Keep her from spacing. Use grab combos.", counters: ["Pikachu", "Sheik"], weaknesses: ["Recovery floaty", "Light"], tips: ["Rush her", "Juggle aggressively"] }
  ],

  fireemblem: [
    { id: "marth", name: "Marth", imageUrl: "https://via.placeholder.com/150?text=Marth", cheatsheet: "Stay inside his tipper range. Avoid short-hop aerials into his sword. Use grab combos.", counters: ["Sheik", "Pikachu", "Fox"], weaknesses: ["Poor grab range", "Light weight"], tips: ["Stay in close", "Avoid his f-smash"] },
    { id: "lucina", name: "Lucina", imageUrl: "https://via.placeholder.com/150?text=Lucina", cheatsheet: "Same as Marth but no tipper mechanic. More consistent damage. Stay close.", counters: ["Sheik", "Pikachu", "Fox"], weaknesses: ["Linear combo game", "Light"], tips: ["Jab lock her", "Juggle with aerials"] },
    { id: "roy", name: "Roy", imageUrl: "https://via.placeholder.com/150?text=Roy", cheatsheet: "He wants to get in close. Keep him out with projectiles. Punish his aggressive moves.", counters: ["Samus", "Mega Man", "Pikachu"], weaknesses: ["Poor range", "Vulnerable to camping"], tips: ["Zone him out", "Punish with grab"] },
    {id:  "ike", name: "Ike", imageUrl: "https://via.placeholder.com/150?text=Ike", cheatsheet: "He has strong kill potential. Avoid his grab combos. Use projectiles to zone.", counters: ["Samus", "Pikachu"], weaknesses: ["Slow", "Poor recovery"], tips: ["Stay mobile", "Edge-guard"] },
    { id: "chrom", name: "Chrom", imageUrl: "https://via.placeholder.com/150?text=Chrom", cheatsheet: "More aggressive version of Roy. His recovery is worse. Exploit recovery.", counters: ["Samus", "Pikachu"], weaknesses: ["Recovery vulnerable"], tips: ["Edge-guard heavily", "Interrupt Up-B"] },
    { id: "corrin", name: "Corrin", imageUrl: "https://via.placeholder.com/150?text=Corrin", cheatsheet: "Her range is deceptive. Avoid her tippers. Use grab combos. Juggle her.", counters: ["Pikachu", "Fox"], weaknesses: ["Light", "Recovery linear"], tips: ["Stay inside", "Edge-guard"] },
    { id: "robin", name: "Robin", imageUrl: "https://via.placeholder.com/150?text=Robin", cheatsheet: "He has limited projectiles. Break his weapon durability. Stay aggressive.", counters: ["Pikachu", "Sheik"], weaknesses: ["Weapon durability", "Recovery needs setup"], tips: ["Break his weapons", "Juggle him"] },
    { id: "byleth", name: "Byleth", imageUrl: "https://via.placeholder.com/150?text=Byleth", cheatsheet: "His grab range is absurd. Stay mobile. Exploit his startup frames on specials.", counters: ["Sheik", "Pikachu", "Fox"], weaknesses: ["Slow startup", "Unsafe recovery"], tips: ["Avoid his grab zone", "Punish lag"] }
  ],

  donkeykong: [
    { id: "donkey_kong", name: "Donkey Kong", imageUrl: "https://via.placeholder.com/150?text=DonkeyKong", cheatsheet: "Stay out of grab range. Use projectiles to keep him at bay. Escape upward to avoid his ground combos.", counters: ["Samus", "Pikachu", "Peach"], weaknesses: ["Slow", "Exploitable recovery"], tips: ["Tech his throws early", "Juggle him with aerials"] },
    { id: "diddy_kong", name: "Diddy Kong", imageUrl: "https://via.placeholder.com/150?text=DiddyKong", cheatsheet: "His mobility is high. Don't let him get into kill setups. Respect his grab combos early on.", counters: ["Samus", "Pikachu"], weaknesses: ["Light weight", "Recovery needs momentum"], tips: ["Juggle him", "Edge-guard aggressively"] },
    { id: "king_k_rool", name: "King K. Rool", imageUrl: "https://via.placeholder.com/150?text=KingKRool", cheatsheet: "His armor moves are strong but punishable. Stay mobile. Use grab combos on him.", counters: ["Pikachu", "Sheik"], weaknesses: ["Heavy but slow", "Recovery exploitable"], tips: ["Punish armor", "Edge-guard"] }
  ],

  animalcrossing: [
    { id: "villager", name: "Villager", imageUrl: "https://via.placeholder.com/150?text=Villager", cheatsheet: "His projectiles are unpredictable. Stay mobile and shield smartly. Use grab combos.", counters: ["Fox", "Sonic"], weaknesses: ["Light", "Recovery vulnerable"], tips: ["Approach from unexpected angles", "Edge-guard heavily"] },
    { id: "isabelle", name: "Isabelle", imageUrl: "https://via.placeholder.com/150?text=Isabelle", cheatsheet: "Similar to Villager with different properties. Keep up with her positioning. Don't get caught by bells.", counters: ["Fox", "Sonic"], weaknesses: ["Light", "Recovery needs setup"], tips: ["Stay aggressive", "Edge-guard"] }
  ],

  other: [
    { id: "mega_man", name: "Mega Man", imageUrl: "https://via.placeholder.com/150?text=MegaMan", cheatsheet: "His projectiles are scary. Rush him down. Use grab combos once in.", counters: ["Fox", "Sonic", "Sheik"], weaknesses: ["Light", "Poor mobility"], tips: ["Approach aggressively", "Use aerials"] },
    { id: "pac_man", name: "Pac-Man", imageUrl: "https://via.placeholder.com/150?text=PacMan", cheatsheet: "His fruit is annoying. Learn the patterns. Don't get juggled.", counters: ["Fox", "Pikachu"], weaknesses: ["Light", "Floaty"], tips: ["Stay grounded", "Ledge-trap"] },
    { id: "wii_fit_trainer", name: "Wii Fit Trainer", imageUrl: "https://via.placeholder.com/150?text=WiiFit", cheatsheet: "Her up-B has recovery potential. Her hitboxes are disjointed. Use grab combos.", counters: ["Fox", "Sonic"], weaknesses: ["Light", "Recovery vulnerable"], tips: ["Juggle her", "Don't get spaced"] },
    { id: "game_watch", name: "Mr. Game & Watch", imageUrl: "https://via.placeholder.com/150?text=GameWatch", cheatsheet: "His shield can reflect. Don't spam projectiles. Use grab combos.", counters: ["Pikachu", "Sheik"], weaknesses: ["Light", "Flat design"], tips: ["Bait his shield", "Juggle heavily"] },
    { id: "rob", name: "R.O.B.", imageUrl: "https://via.placeholder.com/150?text=ROB", cheatsheet: "He zones with projectiles. Rush him down. Don't let him charge spins.", counters: ["Fox", "Sonic"], weaknesses: ["Light", "Limited mobility"], tips: ["Interrupt charging", "Edge-guard"] },
    { id: "duck_hunt", name: "Duck Hunt", imageUrl: "https://via.placeholder.com/150?text=DuckHunt", cheatsheet: "His projectile is annoying. Approach from platforms. Don't land predictably.", counters: ["Fox", "Sonic"], weaknesses: ["Light", "Recovery exploitable"], tips: ["Use platforms", "Punish gun"] },
    { id: "ice_climbers", name: "Ice Climbers", imageUrl: "https://via.placeholder.com/150?text=IceClimbers", cheatsheet: "Separate the climbers if possible. Their grab combos are deadly. Be careful.", counters: ["Pikachu", "Sheik"], weaknesses: ["Tether recovery", "Nana AI"], tips: ["Separate them", "Disrupt combos"] },
    { id: "olimar", name: "Olimar", imageUrl: "https://via.placeholder.com/150?text=Olimar", cheatsheet: "His Pikmin change his playstyle. Learn the color matchups. Juggle him.", counters: ["Pikachu", "Fox"], weaknesses: ["Light", "Pikmin dependent"], tips: ["Break his Pikmin", "Juggle aggressively"] },
    { id: "bayonetta", name: "Bayonetta", imageUrl: "https://via.placeholder.com/150?text=Bayonetta", cheatsheet: "Her combo game is insane. Keep her grounded. Use platforms to escape.", counters: ["Fox", "Sonic"], weaknesses: ["Recovery vulnerable", "Floaty"], tips: ["Limit landing options", "Edge-guard"] },
    {id: "captain_falcon", name: "Captain Falcon", imageUrl: "https://via.placeholder.com/150?text=CaptainFalcon", cheatsheet: "He wants to get in close. Use projectiles to zone. Punish his landing.", counters: ["Sheik", "Pikachu"], weaknesses: ["Poor range", "Recovery exploitable"], tips: ["Stay spaced", "Juggle heavily"] },
    {id: "inkling", name: "Inkling", imageUrl: "https://via.placeholder.com/150?text=Inkling", cheatsheet: "Her ink mechanic is unique. Avoid getting inked. Use grab combos.", counters: ["Fox", "Sonic"], weaknesses: ["Light", "Recovery exploitable"], tips: ["Avoid inked areas", "Juggle aggressively"] },
    { id: "little_mac", name: "Little Mac", imageUrl: "https://via.placeholder.com/150?text=LittleMac", cheatsheet: "He's a grounded fighter. Use aerials to juggle him heavily. His recovery is exploitable.", counters: ["Pikachu", "Sheik"], weaknesses: ["Light", "Poor aerial game"], tips: ["Juggle aggressively", "Edge-guard relentlessly"] },
    { id: "snake", name: "Snake", imageUrl: "https://via.placeholder.com/150?text=Snake", cheatsheet: "His explosives are dangerous. Avoid his grenades. Use grab combos once in.", counters: ["Fox", "Sonic"], weaknesses: ["Light", "Recovery exploitable"], tips: ["Stay mobile", "Edge-guard heavily"] },
    { id: "mii_fighter", name: "Mii Fighter (All Forms)", imageUrl: "https://via.placeholder.com/150?text=MiiFighter", cheatsheet: "Highly customizable. Varies by moveset. Adapt to their specific setup.", counters: ["Varies"], weaknesses: ["Varies by config"], tips: ["Learn opponent's moveset", "Adapt accordingly"] }
  ],

  earthbound: [
    { id: "ness", name: "Ness", imageUrl: "https://via.placeholder.com/150?text=Ness", cheatsheet: "His PK Thunder recovery is weird. His grab combos are strong. Don't get grabbed.", counters: ["Samus", "Pikachu"], weaknesses: ["Light", "Floaty"], tips: ["Avoid his grabs", "Juggle him"] },
    { id: "lucas", name: "Lucas", imageUrl: "https://via.placeholder.com/150?text=Lucas", cheatsheet: "Similar to Ness but different specials. His recovery is more linear. Punish it.", counters: ["Samus", "Pikachu"], weaknesses: ["Light", "Recovery exploitable"], tips: ["Edge-guard on recovery", "Juggle him"] }
  ],

  dlc: [
    { id: "piranha_plant", name: "Piranha Plant", imageUrl: "https://via.placeholder.com/150?text=PiranhaPlant", cheatsheet: "Avoid his side-B range. Use aerials to combo him. Get above him to avoid his projectile.", counters: ["Sheik", "Pikachu", "Sonic"], weaknesses: ["Floaty", "Recovery struggles"], tips: ["Attack from above", "Punish his startup"] },
    { id: "joker", name: "Joker", imageUrl: "https://via.placeholder.com/150?text=Joker", cheatsheet: "Keep him in disadvantage. Once he has Arsene, respect his damage output. Camp if needed.", counters: ["Samus", "Sheik", "Pikachu"], weaknesses: ["Light without Arsene", "Bad range"], tips: ["Juggle him early", "Ledge-trap"] },
    { id: "hero", name: "Hero", imageUrl: "https://via.placeholder.com/150?text=Hero", cheatsheet: "Avoid his random crits. Stay aggressive to limit spell casting. Abuse grab combos.", counters: ["Fox", "Sheik", "Sonic"], weaknesses: ["Heavy, but floaty", "Risky recovery"], tips: ["Don't give him spacing", "Punish spells"] },
    { id: "banjo_kazooie", name: "Banjo & Kazooie", imageUrl: "https://via.placeholder.com/150?text=BanjoKazooie", cheatsheet: "Their projectiles are annoying. Rush them down. Use grab combos. Avoid their edge-guarding.", counters: ["Sheik", "Fox", "Sonic"], weaknesses: ["Light weight", "Poor air game"], tips: ["Get under them", "Punish block startup"] },
    { id: "terry", name: "Terry", imageUrl: "https://via.placeholder.com/150?text=Terry", cheatsheet: "His combo game is strong. Avoid his command grabs. Use projectiles to zone.", counters: ["Sheik", "Fox", "Sonic"], weaknesses: ["Light weight", "Poor air game"], tips: ["Rush him down", "Punish command grabs"] },
    { id: "byleth_dlc", name: "Byleth", imageUrl: "https://via.placeholder.com/150?text=Byleth", cheatsheet: "His grab range is absurd. Stay mobile. Exploit his startup frames on specials.", counters: ["Sheik", "Pikachu", "Fox"], weaknesses: ["Slow startup", "Unsafe recovery"], tips: ["Avoid his grab zone", "Punish lag"] },
    { id: "min_min", name: "Min Min", imageUrl: "https://via.placeholder.com/150?text=MinMin", cheatsheet: "Her arm reach is huge. Stay mobile. Use grab combos. Avoid her edge-guarding.", counters: ["Sheik", "Fox", "Sonic"], weaknesses: ["Light weight", "Poor air game"], tips: ["Get under her", "Punish arm startup"] },
    { id: "steve", name: "Steve", imageUrl: "https://via.placeholder.com/150?text=Steve", cheatsheet: "Stay on the ground to avoid his camping. Rush him down. Exploit his lag on block building.", counters: ["Sheik", "Fox", "Sonic"], weaknesses: ["Depends on mining", "Poor air game"], tips: ["Get under him", "Punish block startup"] },
    { id: "sephiroth_dlc", name: "Sephiroth", imageUrl: "https://via.placeholder.com/150?text=Sephiroth", cheatsheet: "His reach is huge. Stay mobile. Use grab combos. Avoid his edge-guarding.", counters: ["Sheik", "Pikachu", "Sonic"], weaknesses: ["Light weight", "Floaty"], tips: ["Juggle aggressively", "Ledge-trap"] },
    { id: "pyra_mythra_dlc", name: "Pyra/Mythra", imageUrl: "https://via.placeholder.com/150?text=PyraMythra", cheatsheet: "Her combo game is strong. Avoid her edge-guarding. Use projectiles to zone.", counters: ["Sheik", "Fox", "Sonic"], weaknesses: ["Light weight", "Poor air game"], tips: ["Rush her down", "Punish edge-guards"] },
    { id: "kazuya", name: "Kazuya", imageUrl: "https://via.placeholder.com/150?text=Kazuya", cheatsheet: "His combo game is strong. Avoid his command grabs. Use projectiles to zone.", counters: ["Sheik", "Fox", "Sonic"], weaknesses: ["Light weight", "Poor air game"], tips: ["Rush him down", "Punish command grabs"] },
    { id: "sora", name: "Sora", imageUrl: "https://via.placeholder.com/150?text=Sora", cheatsheet: "His projectiles control space. Approach from air or platforms. Don't let him zone freely.", counters: ["Fox", "Sonic"], weaknesses: ["Heavy but slow", "Recovery exploitable"], tips: ["Rush him down", "Use mobility"] }
  ]

};
