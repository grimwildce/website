import Page from "@/components/app/Page";
import Challenge from "@/components/Challenge";
import Monster from "@/components/Monster";
import Em from "@/components/ui/Em";
import Grid from "@/components/ui/Grid";
import Heading from "@/components/ui/Heading";
import List from "@/components/ui/List";
import Strong from "@/components/ui/Strong";
import Text from "@/components/ui/Text";

const Chapter05 = () => {
  return (
    <Page bookTitle="Grimwild Community Edition" title="Monsters" pretitle="Chapter 5:">
      <Heading level={2}>Painting Monstrous Scenes</Heading>
      <Text>
        This chapter features nearly 100 monster blocks designed to help you, the GM, create vivid
        and engaging encounters. Each block emphasizes color, sensory details, instincts,
        motivations, and adventure hooks over mechanical difficulty—in fact, there are no mechanics
        at all besides example traits and moves. As with all things in <Em>Grimwild</Em>, monsters
        map back to the core resolution mechanics. Monsters should be more than just something to
        carve through—they should feel integral to the story.
      </Text>
      <Text>
        <Strong>The bestiary offers advice, not rules</Strong>: a collection of tropes and ideas for
        inspiration. It's not meant to be a comprehensive guide to these monsters, but instead a
        tool for quick reference and thinking outside the box with classic fantasy monsters. Some
        familiarity with them is assumed.
      </Text>
      <Text>
        The monsters presented here blend tropes, personal twists, and efforts to make them more
        engaging than just “something that wants to eat you.” However, keep in mind that nothing
        here is canon—every idea is flexible, ready to be replaced, reimagined, or repurposed. These
        are just one interpretation of what these monsters might be. Change whatever you like; it
        won't break a thing.
      </Text>
      <Heading level={3}>NOTES ON MONSTER BLOCKS</Heading>
      <List variant="unordered">
        <List.Item>
          <Strong>Sensories</Strong>: Each entry lists colors, sights, sounds, and smells tied to
          the creature or its surroundings—sometimes describing the creature, other times the area
          or signs of its presence.
        </List.Item>
        <List.Item>
          <Strong>Traits &amp; Moves</Strong>: Suggest what a creature might do, especially in
          conflict, but are flexible and meant to inspire, even outside combat. Not all monsters are
          challenges.
        </List.Item>
        <List.Item>
          <Strong>Wants and Doesn't wants</Strong>: A creature's drives, offering direction and ways
          for PCs to interact. Share them, especially with experienced PCs.
        </List.Item>
        <List.Item>
          <Strong>Tables</Strong>: Inspire variants, introduce quest hooks, or define a purpose,
          adding depth to each.
        </List.Item>
        <List.Item>
          <Strong>Lack of Humanoids</Strong>: Common humanoid monsters like kobolds, orcs, and
          goblins are not listed.
        </List.Item>
        <List.Item>
          <Strong>Categories</Strong>: Blocks for demons, devils, dire animals, elementals, fey,
          hags, giants, and undead are grouped together.
        </List.Item>
        <List.Item>
          <Strong>Expanded Entries</Strong>: Some monsters, like balors and vampires, have
          double-sized entries featuring quests, linked challenges, or extra tables. These provide
          ready-to-use scenarios and examples for building and expanding your own.
        </List.Item>
        <List.Item>
          <Strong>Immunities &amp; Weaknesses</Strong>: Few specific resistances or vulnerabilities
          are listed. Basic logic applies—like undead resisting swords— and you can tweak for
          difficulty by adding your own. These entries are starting points meant to inspire creative
          customization.
        </List.Item>
      </List>
      <Heading level={2}>MONSTER BLOCKS (A-Z)</Heading>
      <Monster
        name="Basilisk"
        type="lurker"
        colors={["scaly green", "mossy brown", "rocky gray"]}
        description="Spiny, eight-legged reptiles that lurk in forgotten, shadowy places. They patiently lie in wait to ambush prey, then feast on the petrified remains."
        traits={["Sluggish stealth", "Spiny hide", "Keen sense of smell"]}
        moves={["Petrifying Gaze", "Bite & Thrash", "Slink Away"]}
        wants="to munch on a delicious statue, later"
        doesntWant="light revealing its hiding places"
        sight="gleam of scales, slithering trails through dust"
        sound="silence, rasping hiss, crunching of chewed stone"
        smell="chalky scent of ground stone, desiccated air"
        tableTitle="Hiding Spots"
        tableRows={[
          ["Beneath a crumbling, but still-used bridge."],
          ["Within the rotting carcass of a fallen dragon."],
          ["On the fifth floor of a derelict watchtower."],
          ["In a field full of half-eaten bear statues."],
          ["Within a maze of rusted, echoing pipes."],
          ["Among the twisted roots of a giant tree."]
        ]}
      />
      <Monster
        name="Behir"
        type="predator"
        colors={["scaly gray", "stormy gray", "azure blue"]}
        description="Massive, solitary serpentine creatures with a dozen legs and brilliant azure scales. They live in dark, decaying places and rarely tolerate intruders."
        traits={["Cling to walls", "Serpentine flexibility", "Speech"]}
        moves={["Electric Breath", "Bite & Constrict", "Swallow Whole"]}
        wants="to expand its hunting grounds, to savor its meal"
        doesntWant="rival predators challenging its territory"
        sight="deep claw marks, static sparks, lightning strike marks"
        sound="sizzling electric snaps, sudden boom, shuffling legs"
        smell="metallic tang, faint acrid smell, scorched hide"
        tableTitle="Unearthed By..."
        tableRows={[
          ["Landslide during a massive thunderstorm."],
          ["Generational flood wiping out whole villages."],
          ["Earthquake toppling castle walls."],
          ["Collapse of a silver mine, forcing it to flee."],
          ["Lich's minions dug too deep."],
          ["Adventurers left an almost empty dungeon."]
        ]}
      />
      <Monster
        name="Carcass Crawler"
        type="brute"
        colors={["rotten brown", "dull olive", "vile green"]}
        description="Massive, slimy worms with dozens of grasping tentacles, lurking underground to feast on dead or paralyzed prey. They're drawn to the scent of death."
        traits={["Paralytic touch", "Cling to walls"]}
        moves={["Tentacle Slaps", "Spew Bile"]}
        wants="more flesh, always more flesh"
        doesntWant="to suffer the sheer panic of hunger"
        sight="pristine bones, writhing tentacles, clouds of flies"
        sound="wet slithering, grotesque squelching, bone snaps"
        smell="rancid stench, sickly-sweet venom, mold and rot"
        tableTitle="Feeding Grounds"
        tableRows={[
          ["The remnants of a horrific battle."],
          ["The result of a successful death cult."],
          ["A recently thawed graveyard."],
          ["A plague that killed herds of farm animals."],
          ["A fleet of invasion ships dashed against rocks."],
          ["Mass sacrifices to it, worshipped as a god."]
        ]}
      />
      <Monster
        name="Chimera"
        type="marauder"
        colors={["dark brown", "burnt umber", "fiery red"]}
        description="Violent, chaotic monstrous hybrids of a lion, goat, and dragon. They rarely stay in one place long, suffering relentless wanderlust."
        traits={["Multi-headed", "Unpredictable", "Understands language"]}
        moves={["Fire Breath", "Flying Pounce", "Claw, Bite, Horns"]}
        wants="to keep wandering"
        doesntWant="to face choices that its heads disagree on"
        sight="streaks of scorched earth, smoke from its nostrils"
        sound="growls, roars, and hisses, sudden whoosh and crackle"
        smell="acrid scent of sulfur and ash, musky wet fur"
        tableTitle="Hybrid Heads"
        tableDescription="Roll 3 Times"
        tableRows={[
          ["wolverine", "rhino", "vampire bat"],
          ["dingo", "baboon", "sloth"],
          ["anteater", "mantis", "jackal"],
          ["condor", "alligator", "gila monster"],
          ["rattlesnake", "ostrich", "pangolin"],
          ["platypus", "mongoose", "cobra"]
        ]}
      />
      <Monster
        name="Chuul"
        type="predator"
        colors={["crustacean brown", "deep yellow", "swamp green"]}
        description="Enormous, lobster-like aberrations with a mouthful of tentacles. They are drawn to magic and hoard the relics they find in their cluttered lairs."
        traits={["Hardened shell", "Sense nearby magic", "Speech"]}
        moves={["Stunning Tentacle", "Claw Lock", "Drag Under"]}
        wants="to hoard sources of magic, instinctually"
        doesntWant="to venture far from the moistness of the swamp"
        sight="roiling water, slick tendrils"
        sound="bubbling groan of water, wet slap of tentacles"
        smell="cloying tang of magic, pungent crustacean odor"
        tableTitle="Eldritch Mutations"
        tableRows={[
          ["acidic", "shell"],
          ["spiked", "eyestalks"],
          ["reflective", "wings"],
          ["extendable", "antennae"],
          ["glowing", "tail"],
          ["magic-sensing", "claws"]
        ]}
      />
      <Monster
        name="Cockatrice"
        type="swarmer"
        colors={["rust orange", "feathered brown", "dusky gold"]}
        description="Small, chicken-like creatures with reptilian features. They roam in flocks and their peck turns flesh to stone, which they use to mark territory."
        traits={["Flocking instinct", "Ferocious swarming"]}
        moves={["Petrifying Pecks", "Winged Retreat"]}
        wants="to mark its territory with petrified victims"
        doesntWant="to have its flock's authority challenged"
        sight="small petrified animals, mass of scattered feathers"
        sound="flurry of wings, chorus of shrill squawks, beak snaps"
        smell="mismatched smell of feathers and scales"
        tableTitle="Crucible Migrations"
        tableRows={[
          ["Onto an island, home to a monastery."],
          ["Into a small hamlet, everyone stuck indoors."],
          ["Into a valley, an important trade crossroad."],
          ["Throughout a city, absolute chaos ensuing."],
          ["Down into mines, trapping miners inside."],
          ["Aboard a large ship anchored in the bay."]
        ]}
      />
      <Monster
        name="Couatl"
        type="protector"
        colors={["bronze gold", "iridescent blue", "emerald green"]}
        description="Celestial serpents with rainbow feathers that act as wise protectors and guardians of sacred places. They seek to preserve balance and impart wisdom."
        traits={["Truthbound", "Shapechanger", "Telepathy"]}
        moves={["Read Minds", "Constrict", "Radiant Magic"]}
        wants="to ensure sacred sites stay hidden"
        doesntWant="its wisdom being ignored"
        sight="iridescent scales, vivid feathers, trail of light"
        sound="otherworldly hum, gentle rustling, whispering winds"
        smell="clean fresh breeze, soothing incense, hopeful magic"
        tableTitle="Sacred Task"
        tableRows={[
          ["Retrieve a sacred artifact—your sword."],
          ["Protect a chosen one—your enemy."],
          ["Find ancient knowledge—your secret."],
          ["Teach you a forgotten language."],
          ["Stop you from destroying the world."],
          ["Tricked by a devil into destroying you."]
        ]}
      />
      <Monster
        name="Cyclops"
        type="brute"
        colors={["weathered beige", "eyeball white", "stone brown"]}
        description="Solitary, towering figures that value their personal territory above all else. They gather boulders and stones, treating them as symbols of power."
        traits={["Singular, intense focus", "Immensely strong", "Understands language"]}
        moves={["Boulder Toss", "Ground Slam", "Fearsome Bellow"]}
        wants="boulder caches, a symbol of territory and power"
        doesntWant="to get distracted or feel like it's being tricked"
        sight="piles of boulders, massive cave entrance"
        sound="guttural rumbling, whoosh of a boulder flying"
        smell="unwashed skin, earthy cave, sharp stone dust"
        tableTitle="Cyclopean Curses"
        tableRows={[
          ["It can only see at night."],
          ["It can only venture outside in the rain."],
          ["Its every footstep causes a tremor."],
          ["It's terrified of small mammals."],
          ["It can never stop walking."],
          ["It's lonely, the last of its kind."]
        ]}
      />
      <Monster
        name="Demon, Balor"
        type="overseer"
        colors={["inferno red", "smoky black", "ember orange"]}
        description="Towering embodiments of pure evil, with massive bat-like wings. They rule with chaos and destruction, and have an insatiable hunger for more power."
        traits={["Pierces deceptions", "Fiery aura", "Speech, telepathy"]}
        moves={["Burning Whip", "Crackling Sword", "Booming Teleport"]}
        wants="to bask in its own greatness"
        doesntWant="its absolute control to waver, even for a second"
        sight="chaotic dancing flames, large smoking footprints"
        sound="whip cracks, crackling lightning, guttural chanting"
        smell="overwhelming brimstone, smothering ash"
        tableTitle="Death Throes"
        tableDescription="Roll 2"
        tableRows={[
          ["Devastating explosion, reducing all to ash."],
          ["Brilliant flash, blinding all that witness it."],
          ["Lava geysers erupt from the ground."],
          ["Hellfire meteors bombard the area."],
          ["Blazing cyclone and molten rain wreak havoc."],
          ["A portal to the Abyss opens, compelling entrance."]
        ]}
      >
        <Text align="center">
          <Strong allCaps>Hell to Pay</Strong>
        </Text>
        <Text size="small">
          <Em>
            The balor emerges from the shattered summoning circle as the cathedral erupts in flames
            around it. Those who disturbed it lie dead and now the capital will feel its fury.
          </Em>
        </Text>
        <Grid columns="large">
          <Challenge
            title="Head"
            poolSize={8}
            traits={["Well-defended"]}
            moves={["Horrific Taunts", "Cruel"]}
            references={[
              { target: "Demonic Magic", type: "linked_to" },
              { target: "Crackling Sword", type: "linked_to" },
              { target: "Burning Whip", type: "linked_to" }
            ]}
          />
          <Challenge
            title="Demonic Magic"
            poolSize={8}
            traits={["Ward the balor"]}
            moves={["Summon Demons", "Create Firestorm"]}
            references={[{ target: "Head", type: "linked_to" }]}
          />
          <Challenge
            title="Burning Whip"
            poolSize={4}
            traits={["Protects the head"]}
            moves={["Whipcrack", "Drag in Close"]}
            references={[
              { target: "Head", type: "linked_to" },
              { target: "Body", type: "linked_to" }
            ]}
          />
          <Challenge
            title="Crackling Sword"
            poolSize={4}
            traits={["Protects the head"]}
            moves={["Behead", "Arcing Strike"]}
            references={[
              { target: "Head", type: "linked_to" },
              { target: "Body", type: "linked_to" }
            ]}
          />
          <Challenge
            title="Body"
            poolSize={8}
            traits={["Impenetrable Hide", "Immensely strong"]}
            references={[
              { target: "Burning Whip", type: "linked_to" },
              { target: "Crackling Sword", type: "linked_to" }
            ]}
          />
        </Grid>
      </Monster>
      <Monster
        name="Demon, Glabrezu"
        type="trickster"
        colors={["blood red", "demonic purple", "deep gray"]}
        description="Hulking fiends with four arms, two of which are claws. They tempt ambitious mortals, granting wishes and delighting as it all backfires."
        traits={["Devious schemer", "Magic resistance", "Speech, telepathy"]}
        moves={["Create Darkness", "Know Desires", "Grant Wish"]}
        wants="to know what would make you happy"
        doesntWant="for its offers to be turned down"
        sight="stone gouged away, hulking silhouette, eerie glow"
        sound="faint whispers of magic, clicking claws, alluring voice"
        smell="bitter burnt incense, unknown sickly-sweet aromas"
        tableTitle="Wishes Granted"
        tableDescription="With Ruin Soon To Follow"
        tableRows={[
          ["Love → the beloved dies."],
          ["Wealth → greed is never sated."],
          ["Wisdom → descent into madness."],
          ["Victory → guilt over how it was won."],
          ["Beauty → horror when it fades."],
          ["Fame → jealousy from those close."]
        ]}
      />
      <Monster
        name="Demon, Vrock"
        type="marauder"
        colors={["feathered gray", "sickly green", "bone white"]}
        description="A vulture-like fiend drawn to the mayhem of battlefields. It spreads poisonous spores with each wingbeat, reveling in the chaos below."
        traits={["Terrifying flight", "Disgusting plumage", "Understands language"]}
        moves={["Deafening Screech", "Spore Cloud", "Summon Flock"]}
        wants="to keep the battle going as long as possible"
        doesntWant="to be drawn directly into the conflict itself"
        sight="cloud of spores, dark shadow, ichor-covered feathers"
        sound="wet slapping of wings, rustle of diseased feathers"
        smell="rancid decay, spores clogging nostrils"
        tableTitle="Spore Effects"
        tableRows={[
          ["Betrayal poisons trust between allies."],
          ["Terror causes reckless desperation."],
          ["Visions twist allies into horrors."],
          ["Rage swells into bloodlust."],
          ["Envy breeds treacherous ambition."],
          ["“Heroism” becomes self-sacrificial madness."]
        ]}
      />
      <Monster
        name="Devil, Barbed"
        type="lurker"
        colors={["iron gray", "steel blue", "crimson"]}
        description="Horrific fiends covered in jagged barbs. They savor fear and torment, stretching out suffering before the final blow."
        traits={["Hooked barbs", "Horrifying presence", "Speech, telepathy"]}
        moves={["Barbed Embrace", "Throw Hellfire", "Slow Taunting"]}
        wants="to slowly savor the agony and pleas of mercy"
        doesntWant="the pain it inflicts to be endured"
        sight="shadows writhing unnaturally, barbs twitching"
        sound="scratching of barbs along walls, tearing sound of flesh"
        smell="coppery fresh blood and agony"
        tableTitle="Summoned Into..."
        tableRows={[
          ["Royal wedding meant to seal a fragile peace."],
          ["Public execution meant to crush rebellion."],
          ["Temple consecration meant to ward off evil."],
          ["Feast marking the end of a great famine."],
          ["Trial of a beloved noble, accused of treason."],
          ["Coronation of a hesitant ruler, full of doubt."]
        ]}
      />
      <Monster
        name="Devil, Chain"
        type="tactician"
        colors={["soot black", "ember red", "dark green"]}
        description="Sadistic fiends that manipulate chains like serpents to ensnare and flay victims. They relish the terror and struggle of the confined."
        traits={["Animated chains aura", "Serrated links", "Speech, telepathy"]}
        moves={["Summon Chains", "Chain Lash", "Reel In"]}
        wants="its victims to resist before breaking"
        doesntWant="to find itself confined by others"
        sight="glinting metal, slow chain shadows, slow laughter"
        sound="clinking and rattling, tightening snaps, clangs"
        smell="rusty, reeking metal, pungent sweat and fear"
        tableTitle="Imprisoned Within..."
        tableRows={[
          ["Labyrinthine halls of the mad queen."],
          ["Cursed portrait in a lavish hall."],
          ["Steamy, opulent bathhouse in the capital."],
          ["Reliquary of a respected temple."],
          ["Trade guild vault, sealed with powerful runes."],
          ["Winding forest pathways surrounding town."]
        ]}
      />
      <Monster
        name="Devil, Horned"
        type="brute"
        colors={["fiery red", "burnt orange", "deep black"]}
        description="Fearsome fiends with towering horns, a spiked tail, and massive wings. They wield a flaming fork and rule with terror and cruelty."
        traits={["Impenetrable hide", "Speech, telepathy"]}
        moves={["Flaming Fork", "Hellfire Bolt"]}
        wants="to be both revered and feared"
        doesntWant="to be forced into any compromise"
        sight="stretching horn shadows, gleaming fork, stab wounds"
        sound="resonant telepathic voice, malevolent chuckles"
        smell="acrid sulfur, suffocating smoke, brimstone"
        tableTitle="Broken Summoning Circles"
        tableRows={[
          ["In a temple by a priest who lost their faith."],
          ["In a farmhouse by a grief-stricken mother."],
          ["In a tower by a wizard consumed with jealousy."],
          ["In the study of a hero haunted by failure."],
          ["In a tavern by a minstrel obsessed with fame."],
          ["In a cobbler's cellar, by a long-held prisoner."]
        ]}
      />
      <Monster
        name="Devil, Imp"
        type="trickster"
        colors={["wicked red", "tarnished gold", "smoky gray"]}
        description="Tiny, winged fiends driven by trickery and chaos. They sow mischief, sting with mind-warping venoms, then vanish."
        traits={["Compulsive mischief", "Invisibility at-will", "Speech, telepathy"]}
        moves={["Venomous Sting", "Vermin Form", "Enchant Item"]}
        wants="to sow subtle seeds of chaos"
        doesntWant="to be confronted directly—ruins the surprise"
        sight="quick flash of movement, clawed footprints"
        sound="buzz of wings, eerie silence, lingering snickering"
        smell="faint whiffs of venom and sulfur"
        tableTitle="Impish Snares"
        tableRows={[
          ["Spoon that makes food taste slightly rotten."],
          ["Quill that weaves insults into messages."],
          ["Candle that goes out at the worst time."],
          ["Map that shifts landmarks and roads."],
          ["Compass that always points toward “fun.”"],
          ["Doll that moves to a new spot each night."]
        ]}
      />
      <Monster
        name="Dire Bear"
        type="brute"
        colors={["deep brown", "furry black", "grizzly brown"]}
        description="Fiercely territorial, colossal animals with thick fur and enormous claws; they respond viciously to any intrusion into their territory."
        traits={["Dense fur", "Surprising speed"]}
        moves={["Testing Charge", "Bellowing Roar"]}
        wants="to foster the next generation of rulers"
        doesntWant="its boundaries to be broken"
        sight="snapped trees, breath steaming in the cold air"
        sound="deafening roar echoing, pounding footsteps"
        smell="crisp pine, overturned earth, wet fur"
        tableTitle="Territory Woes"
        tableRows={[
          ["It has far too many cubs."],
          ["Grand hunt has been called for it."],
          ["Another dire apex predator has arrived."],
          ["Civilization encroaches on its borders."],
          ["Totemic wards restrict its roaming grounds."],
          ["Goblins wage war against orcs on its lands. &#x20;"]
        ]}
      />
      <Monster
        name="Dire Centipede"
        type="skirmisher"
        colors={["burnt sienna", "earthy brown", "chitin black"]}
        description="Gigantic, armored insects with venomous pincers and countless legs, skittering through dark tunnels to make a labyrinth of hunting grounds."
        traits={["Cling to walls", "Terrifying speed"]}
        moves={["Warning Hiss", "Drop Down"]}
        wants="to expand its labyrinth of tunnels"
        doesntWant="bright light or loud noises"
        sight="endlessly writhing legs, shining chitin, twitching pincers"
        sound="rhythmic clicking, sharp hiss, unsettling rustling"
        smell="nutty insect aroma, sour rotting wood"
        tableTitle="Home Tunnels"
        tableRows={[
          ["Tunnels filled with towering mushrooms."],
          ["The ruins of a lavish underground palace."],
          ["Enormous cavern full of bioluminescence."],
          ["Through the bones of a buried giant."],
          ["Flooded sea caves, where it hunts for sharks."],
          ["Through twisting roots of colossal trees. &#x20;"]
        ]}
      />
      <Monster
        name="Dire Crab"
        type="marauder"
        colors={["shell red", "coral pink", "fleshy orange"]}
        description="Towering crustaceans with enormous crushing claws, vulnerable only when they molt; they scuttle along coastal shallows devouring all in their path."
        traits={["Impenetrable shell", "Voracious appetites"]}
        moves={["Click, Clack", "Snip, Snap"]}
        wants="its offspring to overrun the beaches"
        doesntWant="anything to get under it"
        sight="boulders clipped in half, odd holes in the sand"
        sound="creak of its shell grinding, clicking of legs"
        smell="wet sand, seaweed, decaying marine life"
        tableTitle="Dire Hermit Crab Shells"
        tableRows={[
          ["Sunken pirate ship, now haunted."],
          ["Fallen castle turret, filled with explosives."],
          ["Giant's skull, with a gleaming gold tooth."],
          ["Whale ribcage, covered in barnacles."],
          ["Gnomish submarine, still water-tight."],
          ["Iron cauldron once used by a giant. &#x20;"]
        ]}
      />
      <Monster
        name="Dire Crocodile"
        type="lurker"
        colors={["swamp green", "muddy brown", "scaly black"]}
        description="Enormous reptiles with iron-like scales and jagged maws, lurking imperceptibly in murky water until they strike."
        traits={["Swampy camouflage"]}
        moves={["Snapping Lunge"]}
        wants="to eat anything that comes close"
        doesntWant="to move when unnecessary"
        sight="massive eyes above the waterline, still waters"
        sound="scraping of belly on ground, thrashing water"
        smell="mud and algae, stagnant swamp water"
        tableTitle="Worshippers"
        tableDescription="The Croc's Totally Unaware"
        tableRows={[
          ["Local fishers who see it as the god of floods."],
          ["Cultists who offer sacrifices."],
          ["Water elementals believing it guards the river."],
          ["Merfolk who live alongside it."],
          ["Hill giants, envious of its eternal hunger."],
          ["Swamp hags believing it gives them magic. &#x20;"]
        ]}
      />
      <Monster
        name="Dire Eagle"
        type="predator"
        colors={["feathery white", "earthy brown", "stormy gray"]}
        description="Vast raptors with massive wingspans and razor talons; they dive from high cliffs with deadly precision."
        traits={["Keen eyesight", "Extremely swift"]}
        moves={["Plunging Strike", "Swooping Snatch"]}
        wants="other predators to see and fear it"
        doesntWant="anything coming near its nest"
        sight="huge falling feather, talon gouges in the earth"
        sound="whoosh of massive wings, rustling of feathers"
        smell="crisp high-altitude air, faint carrion scent"
        tableTitle="Unique Eyries"
        tableRows={[
          ["Spire of a still-occupied wizard's tower."],
          ["Atop a giant redwood, tallest in the world."],
          ["Rocky outcrop above a foggy elephant graveyard."],
          ["Desolate mesatop, bones surrounding the nest."],
          ["Between stone arches of an ancient bridge."],
          ["In the hand of an enormous carved statue. &#x20;"]
        ]}
      />
      <Monster
        name="Dire Shark"
        type="predator"
        colors={["ocean gray", "bone white", "deep blue"]}
        description="Massive beasts of the ocean depths with rows of serrated teeth and sleek, powerful bodies; they prowl ever in search of sizable prey."
        traits={["Blends into the depths", "Knows no fear"]}
        moves={["From The Depths", "Frenzied Thrash"]}
        wants="to instill deep fear long before it strikes"
        doesntWant="ships operating in its waters"
        sight="patch of red-stained ocean, ominous dorsal fin"
        sound="heavy thud against the hull, eerie silence"
        smell="briny saltwater, upturned seawater"
        tableTitle="Destroyed Ships"
        tableRows={[
          ["Royal flagship, crown jewels still aboard."],
          ["War galleon, with the spoils of war."],
          ["Passenger liner, still barely floating."],
          ["Submarine, survivors in a deep sea cave."],
          ["Ghost ship, cursing the waters for decades."],
          ["Orcish warship, fused to its back by dark magic. &#x20;"]
        ]}
      />
      <Monster
        name="Dire Spider"
        type="tactician"
        colors={["venom green", "midnight black", "dark crimson"]}
        description="Monstrously huge arachnids with legs like tree trunks and venomous fangs; they spin vast webs coating entire areas or drop from great heights."
        traits={["Vibration sense", "Complex webbing"]}
        moves={["Surprise Drop", "Venomous Bite"]}
        wants="always to have enough food for later"
        doesntWant="to be anywhere near fire"
        sight="thick silk strands, barely visible in shadow"
        sound="unsettling skitter, eerie silence, soft thud, slurping"
        smell="sickly-sweet venom, putrid wrapped bodies"
        tableTitle="Dire Spider Varieties"
        tableRows={[
          ["Netcaster—traps from far away."],
          ["Jumping—catches prey with a leap."],
          ["Longlegs—moves quickly through foliage."],
          ["Pitdweller—strikes from hidden holes."],
          ["Waterglider—skims across marshes."],
          ["Divingbell—lives completely underwater. &#x20;"]
        ]}
      />
      <Monster
        name="Dire Wolf"
        type="overseer"
        colors={["ashen gray", "light brown", "frosty gray"]}
        description="Hulking wolves with dagger-like fangs that hunt with a pack of lesser wolves, using fearsome coordination to trap prey."
        traits={["Relentless pursuer", "Pack coordination"]}
        moves={["Call Pack", "Tackle Prey"]}
        wants="to protect its pack"
        doesntWant="anything that prevents it from roaming free"
        sight="silhouette at edge of clearing, tracks in the mud"
        sound="haunting howl, guttural growl, heavy breathing"
        smell="fur mixed with fresh earth, sweat, mountain air"
        tableTitle="Lunar Behaviors"
        tableRows={[
          ["New moon—restless border patrols."],
          ["Crescent—young grow unruly."],
          ["Full moon—deafening howls."],
          ["Gibbous—pack dominance shifts."],
          ["Blood moon—rampage outside borders."],
          ["Blue moon—dire wolf litter is born. &#x20;"]
        ]}
      />
      <Monster
        name="Dislocation Beast"
        type="trickster"
        colors={["shadow black", "midnight blue", "mystic purple"]}
        description="Elusive six-legged panthers with barbed tentacles that warp reality to disorient and confuse, blending into their surroundings."
        traits={["Phantom forms", "Ethereal agility"]}
        moves={["Tentacle Swipes", "Disorienting Blurs"]}
        wants="to swiftly harness the chaos it creates"
        doesntWant="to ever put itself in danger"
        sight="shifting blurs, disrupted reality, phantom images"
        sound="distorted growl, strange echoes, swish of movement"
        smell="spicy musk with caustic undertone"
        tableTitle="Bizarre Phenomena"
        tableRows={[
          ["Mundane sounds, completely out of place."],
          ["Fleeting reflections from alternate worlds."],
          ["Shadows elongate unnaturally and linger."],
          ["Echoes ricochet unpredictably."],
          ["Colors bleed into neighboring hues."],
          ["Invisible ripples that distort vision. &#x20;"]
        ]}
      />
      <Monster
        name="Doppelganger"
        type="trickster"
        colors={["neutral gray", "neutral gray", "neutral gray"]}
        description="Shapeshifters with featureless gray skin who can perfectly mimic any humanoid to infiltrate societies and pursue their own goals."
        traits={["Shapechanger", "Mindreader", "Speech, telepathy"]}
        moves={["Shift Appearance", "Mental Probe", "Psychic Scream"]}
        wants="to experience new lives"
        doesntWant="its true form to be seen"
        sight="shifting facial features, subtle posture changes"
        sound="disconcerting silence, soft self-reprimands"
        smell="a smell unexpectedly “off” for that person"
        tableTitle="Identities You Know"
        tableRows={[
          ["Noble's trusted advisor, met last winter."],
          ["The second-to-last person the PCs met."],
          ["Old flame of a PC, thought long dead."],
          ["Wandering monk, seen only days ago."],
          ["Previous PC from this campaign or another."],
          ["Executed thief, now walking free. &#x20;"]
        ]}
      />
      <Monster
        name="Dragon"
        type="blaster"
        colors={["scale emerald", "crimson flame", "gold accent"]}
        description="Massive, scaled apex predators with wings and elemental breath; they hoard treasures and awaken instinctive fear."
        traits={["Frightful presence", "Ancient memories", "Speech"]}
        moves={["Elemental Breath", "Wing Buffet", "Chomp Down"]}
        wants="to assert supremacy over all"
        doesntWant="to be humbled in any way"
        sight="massive features, self-important posture"
        sound="thunderous roar, wings beating, intake of breath"
        smell="faint scent of gold and ancient relics"
        tableTitle="Hoarding Instincts"
        tableDescription="Besides Gold"
        tableRows={[
          ["Scrolls of lost languages."],
          ["Crown jewels of forgotten kingdoms."],
          ["Gravestones of great heroes."],
          ["Maps of the world."],
          ["Weapons forged in time of need."],
          ["Holy symbols of fallen gods."]
        ]}
      >
        <Text align="center">
          <Strong allCaps>Dragon Breath Weapons</Strong>
        </Text>
        <Text size="small">
          <Em>
            A dragon's elemental breath is a potent weapon, as well as a versatile tool. Give elder
            dragons an extra 2 suspense that they can use on these breath weapon utility moves.
          </Em>
        </Text>
        <Grid columns="large">
          <Challenge
            title="Acid"
            moves={["Caustic Pools", "Corrode Armor", "Eat Away Stone"]}
            noSuspense
          />
          <Challenge
            title="Cold"
            moves={["Ice Wall", "Freeze in Place", "Slow Movement"]}
            noSuspense
          />
          <Challenge
            title="Fire"
            moves={["Burn Barriers", "Melt Weapons", "Smoke Screen"]}
            noSuspense
          />
          <Challenge
            title="Lightning"
            moves={["Chained Stun", "Disable Machine", "Thunder Roar"]}
            noSuspense
          />
          <Challenge
            title="Poison"
            moves={["Confusion", "Force Wretching", "Lingering Cloud"]}
            noSuspense
          />
          <Challenge
            title="Necrosis"
            moves={["Deathly Fear", "Life Drain", "Wither Plants"]}
            noSuspense
          />
        </Grid>
        <Text size="small">
          <Em>Also, reference the dragon linked challenge on pg. 34.</Em>
        </Text>
      </Monster>
      <Monster
        name="Elemental, Air"
        type="trickster"
        colors={["cloud white", "sky blue", "whisper gray"]}
        description="Swirling masses of wind and cloud—mercurial, untouchable, and unpredictable."
        traits={["Cyclonic form", "Untouchable", "Speech"]}
        moves={["Gale Force", "Whirlwind", "Suffocate"]}
        wants="to flow ever free"
        doesntWant="to be ignored"
        sight="leaves and debris swirling, dust kicked up"
        sound="howling wind, rush of air, whistling gusts"
        smell="high-altitude winds, rain and freshly turned earth"
        tableTitle="Form & Personality"
        tableRows={[
          ["Swirling cyclone—erratic and wild."],
          ["Floating cloud—serene and evasive."],
          ["Tornado—furious and unstoppable."],
          ["Dust devil—sneaky and persistent."],
          ["Gusty winds—playful and mischievous."],
          ["Zephyr—kind but undependable."]
        ]}
      />
      <Monster
        name="Elemental, Earth"
        type="brute"
        colors={["mossy green", "rocky brown", "stone gray"]}
        description="Massive, rock-like creatures embodying the raw strength of the earth. They're slow but nearly unstoppable, lumbering through anything in their way."
        traits={["Rock-solid", "Tremor sense", "Speech"]}
        moves={["Earthquake", "Stone Spires", "Boulder Toss"]}
        wants="to pull prey down and bury it forever"
        doesntWant="to be forced to move quickly"
        sight="ground trembling, boulders rolling, jagged spikes"
        sound="rumbling groans, crushing thuds, cracking stone"
        smell="loamy disturbed soil, moss, wet stone, mineral tang"
        tableTitle="Biome & Personality"
        tableRows={[
          ["Forest, rooted and protective."],
          ["Badlands, harsh and unforgiving."],
          ["Mountains, proud and resilient."],
          ["Caves, brooding and watchful."],
          ["Mudflats, slow but determined."],
          ["Grasslands, patient and enduring."]
        ]}
      />
      <Monster
        name="Elemental, Fire"
        type="marauder"
        colors={["blazing red", "burnt gold", "molten orange"]}
        description="Constantly shifting infernos that consume everything in their path. They blaze with insatiable hunger, leaving behind smoldering ash and molten ruin."
        traits={["Blazing aura", "Insatiable hunger", "Speech"]}
        moves={["Flame Lash", "Melt Metals", "Summon Firelings"]}
        wants="to consume and move on"
        doesntWant="to let embers die out"
        sight="roiling mass, flickering edges, glowing embers"
        sound="crackle and pop, roaring, hum of molten metals"
        smell="sulfur, brimstone, smoke, char, tang of metals"
        tableTitle="Ignition & Personality"
        tableRows={[
          ["Lightning strike, violent and ephemeral."],
          ["Ritual flame, sacred and commanding."],
          ["Forge fire, controlled and powerful."],
          ["Coal embers, patient and smoldering."],
          ["Wildfire, ravenous and unrestrained."],
          ["Funeral pyre, solemn and determined."]
        ]}
      />
      <Monster
        name="Elemental, Water"
        type="blaster"
        colors={["ocean blue", "wavecrest white", "seafoam green"]}
        description="Fluid, amorphous entities resembling a wave or torrent. They represent the relentless and ever-changing nature of water, adaptable and hard to contain."
        traits={["Turbulent shape", "Rushing flow", "Speech"]}
        moves={["Undertow", "Surge", "Whirlpool"]}
        wants="to flow along channels towards growth"
        doesntWant="to lose touch with the ground"
        sight="crashing waters, churning currents, glistening tendrils"
        sound="roar of waves, splashing, sloshing, bubbling, gurgling"
        smell="briny ocean, soaked soil, sharp freshwater"
        tableTitle="Water Source & Personality"
        tableRows={[
          ["Tidal pool, playful and fickle."],
          ["Raging rapids, relentless and reckless."],
          ["Murky swamp, deceptive and suffocating."],
          ["Rain, gentle and melancholic."],
          ["Geyser, frustrated and volatile."],
          ["Oasis, welcoming and mysterious."]
        ]}
      />
      <Monster
        name="Ettin"
        type="brute"
        colors={["fleshy gray", "dark leather", "ashen white"]}
        description="Towering, two-headed figure with mismatched weapons. They lumber through the wilderness, both heads bickering endlessly about trivial matters."
        traits={["Constantly bickering", "Clumsy stride", "Speech"]}
        moves={["Swing Weapons", "Headbutts", "Dual Shouting"]}
        wants="simple pleasures both heads can agree on"
        doesntWant="to do anything that requires precision"
        sight="chaotic movements, dragging feet, frustrated glaring"
        sound="constant bickering, clumsy thuds, mismatched words"
        smell="sweaty musk, animal hides, unkempt hair"
        tableTitle="Unlikely Protector Of..."
        tableRows={[
          ["Three old witches, who use it as a bodyguard."],
          ["Ragtag group of orphans that saved it."],
          ["Goblins, because they worship it as a god."],
          ["Hamlet of farmers, who feed it."],
          ["Wandering circus, using it as a bouncer."],
          ["Hermit, friends with both heads."]
        ]}
      />
      <Monster
        name="Ettercap"
        type="tactician"
        colors={["spider gray", "venom purple", "forest green"]}
        description="Hunched, two-legged spider-like creature with web-spinning claws. They lurk within a maze of webbed traps and often control huge spider colonies."
        traits={["Clever silk traps", "Clings to walls", "Speech (rarely)"]}
        moves={["Sling Webbing", "Venomous Bite", "Web Skitter"]}
        wants="to never face danger directly"
        doesntWant="for its hard work webbing to be destroyed"
        sight="webs between trees, struggling victims, shiny fangs"
        sound="faint leg-skitters, the whirr of spinning"
        smell="rotting wood, wet earth, decaying bodies"
        tableTitle="Webbed Domains"
        tableRows={[
          ["Bramble patch, every inch covered in webs."],
          ["Long, narrow, winding canyons."],
          ["Massive, abandoned library in the capital."],
          ["Granaries abandoned during the famine."],
          ["Derelict shipwreck, sails webbed over."],
          ["Sunken pitfall in the middle of the woods."]
        ]}
      />
      <Monster
        name="Fey, Dryad"
        type="protector"
        colors={["mossy green", "bark brown", "forest green"]}
        description="Mystical tree spirits that embody the essence of a specific tree, guarding it and the surrounding grove. They are fiercely protective of their home."
        traits={["Melds with trees", "One with nature", "Speech"]}
        moves={["Entangling Roots", "Charm Person", "Blossoming Burst"]}
        wants="to welcome those with good intentions"
        doesntWant="any form of unnatural change"
        sight="twisting vines, blooming flowers, swirling leaves"
        sound="soft rustling, melodic birdsong, crackle of twigs"
        smell="earthy scent, woody aroma, crisp fresh leaves"
        tableTitle="Arboreal Lineage"
        tableRows={[
          ["Weeping willow, shy but playful."],
          ["Oak, stern and steadfast."],
          ["Maple, sweet and protective."],
          ["Ash, resilient and wise."],
          ["Elm, mournful but warm-hearted."],
          ["Yew, resilient and vengeful."]
        ]}
      />
      <Monster
        name="Fey, Faery"
        type="trickster"
        colors={["petal pink", "soft lavender", "pale blue"]}
        description="Tiny winged pranksters who flit through fields and meadows, spinning lights and illusions for their own amusement.&#x20;"
        traits={["Swarm together", "Invisibility at-will", "Speech"]}
        moves={["Fairy Dust", "Dazzling Lights", "Minor Illusions"]}
        wants="to play mostly harmless tricks on mortals"
        doesntWant="to be anywhere near iron"
        sight="glittering trails, darting figures, fleeting glimpses"
        sound="airy giggling, fluttering of tiny wings, melodic chimes"
        smell="delicate nectar, lavender and jasmine, sugary aroma"
        tableTitle="Fairy Circles"
        tableRows={[
          ["Mushrooms glowing faintly in the dusk."],
          ["Ring of sunflowers in a grassy field."],
          ["Fallen leaves after a rain."],
          ["Precarious pebble towers, defying gravity."],
          ["Dancing fireflies in a glowing spiral."],
          ["Ring of acorns around a sapling."]
        ]}
      />
      <Monster
        name="Fey, Redcap"
        type="marauder"
        colors={["blood red", "aged leather", "thicket green"]}
        description="Malicious, bloodthirsty creatures with a blood-red cap, driven by violence and a love for carnage. They often manifest near murder sites."
        traits={["Bloodlust", "Grim cackling", "Speech"]}
        moves={["Scythe Slash", "Blood Frenzy", "Make Skin Crawl"]}
        wants="its hat to never fully dry"
        doesntWant="to be shown its own weaknesses"
        sight="bloodshot eyes, malevolent grin, shiny scythe"
        sound="sharp shing of a scythe, cackling laughter"
        smell="thick coppery scent of fresh blood like a fog"
        tableTitle="Warband Bosses"
        tableRows={[
          ["Goretooth, feared even by its kin."],
          ["Bloodsoak, who bathes in blood."],
          ["Rotfoot, who would rule the fey."],
          ["Nocap, the hatless one."],
          ["Redeyes, born of a murder most foul."],
          ["Feybane, who is called betrayer."]
        ]}
      />
      <Monster
        name="Fey, Satyr"
        type="brute"
        colors={["earthy brown", "autumn tawny", "grassy green"]}
        description="Merry, goat-legged tricksters with a love for wine, music, and revelry. They invite wanderers into their revelry, at times with a sense of maliciousness."
        traits={["Revelrous spirit", "Enchanting tunes", "Speech"]}
        moves={["Pan Pipes", "Headbutt", "Jeering Calls"]}
        wants="to loosen mortal ties"
        doesntWant="mortals to try to resist its invitations"
        sight="travelers into the woods, playfully malicious grin"
        sound="hypnotic melody of panpipes, dancing and revelry"
        smell="rich scent of wine, wild berries, lingering sweetness"
        tableTitle="Contests & Rewards"
        tableRows={[
          ["singing", "rare liquor"],
          ["dance-off", "gold key to nothing"],
          ["eating pies", "deed to an inn"],
          ["duel of wits", "curse to give someone"],
          ["tug-of-war", "black eye"],
          ["archery", "half a treasure map"]
        ]}
      />
      <Monster
        name="Gargoyle"
        type="protector"
        colors={["stone gray", "ash black", "mossy green"]}
        description="Winged stone-like creatures that masquerade as part of buildings, serving as guardians. They can remain motionless for years until intruders approach."
        traits={["Stone camouflage", "Eternal vigilance", "Speech"]}
        moves={["Jump Scare", "Snatch And Fly", "Stone Talons"]}
        wants="to let intruders go past the point of no return"
        doesntWant="to outlive its duty"
        sight="nothing of interest, wings unfurling, eyes opening"
        sound="slow scrape of stone, soft whoosh of wings, heavy thud"
        smell="dusty earth, ancient stone, tang of rainwater"
        tableTitle="Odd Wards"
        tableRows={[
          ["Door that must remain opened."],
          ["Throne meant for a fallen king."],
          ["Gate that seemingly leads nowhere."],
          ["Altar long without its god."],
          ["Bell tower, never once chimed."],
          ["Empty stepwell, its community now dust."]
        ]}
      />
      <Monster
        name="Gelatinous Cube"
        type="brute"
        colors={["acidic green", "translucent blue", "pale lime"]}
        description="Transparent, jelly-like masses big enough to fill the dungeon halls they slide through. They engulf anything they touch and dissolve it with acidic digestion."
        traits={["Nearly invisible", "Very slow"]}
        moves={["Absorb Prey", "Corrosive Splash"]}
        wants="to keep moving forward"
        doesntWant="tenacious objects lingering inside it"
        sight="faint shimmer, half-dissolved items suspended in air"
        sound="wet sloshing, soft acidic hiss, unsettling gurgling"
        smell="sour odor of acid, stinging scent of corroded metal"
        tableTitle="Aberrations"
        tableRows={[
          ["Hollow center filled with flaming, sloshing gel."],
          ["Charged with crackling electric arcs."],
          ["Constantly shifting in prismatic colors."],
          ["Packed with razor-sharp hunks of metal."],
          ["Swarm of dice-sized cubes."],
          ["Impossibly dense, slow, and indestructible."]
        ]}
      />
      <Monster
        name="Genie"
        type="blaster"
        colors={["burnished gold", "sapphire blue", "mystic purple"]}
        description="Powerful elemental spirits that command the forces of nature. They grant wishes, but often twist them to serve mysterious and unpredictable ends."
        traits={["Elemental mastery", "Regal confidence", "Speech"]}
        moves={["Twisted Wish", "Command Element", "Whirlwind"]}
        wants="its wishes to teach mortals a lesson"
        doesntWant="to be bound or controlled"
        sight="flowing robes, runes and symbols etched in the air"
        sound="ethereal hum, whoosh of wind, crackle of magic"
        smell="crisp air, lingering jasmine and lotus, alluring spice"
        tableTitle="Genie Twists"
        tableRows={[
          ["Tries to destroy itself with the wish."],
          ["Tries too hard to improve the wish."],
          ["Makes the wish somehow achieve the opposite."],
          ["Mishears, changing one letter in the wish."],
          ["Splits the wish around unevenly."],
          ["Can't actually grant wishes, but will not admit it."]
        ]}
      />
      <Monster
        name="Gibbering Mouther"
        type="brute"
        colors={["pale flesh", "meaty red", "fleshy pink"]}
        description="Writhing masses of eyes and mouths, constantly babbling incoherently. They confuse and madden foes with the chaotic sounds and frenzied mayhem."
        traits={["Maddening babble", "Chaotic form"]}
        moves={["Blinding Spittle", "Mind Haze"]}
        wants="to add more eyes and mouths to itself"
        doesntWant="its gibberish to be understood"
        sight="droplets of saliva, bits of meat, bubbling flesh"
        sound="slurping, high-pitched screeches, moans, laughter"
        smell="sour odor of bile and rot, viscera, rancid meat"
        tableTitle="Voices In The Chaos"
        tableRows={[
          ["Familiar voices calling your name."],
          ["Fragments of broken promises."],
          ["Pleas for help and forgiveness."],
          ["Mocking tones from an old enemy."],
          ["Chants from forgotten rituals."],
          ["Your own voice, screaming your thoughts."]
        ]}
      />
      <Monster
        name="Golem"
        type="brute"
        colors={["clay brown", "iron rust", "stone gray"]}
        description="Magically animated constructs forged from various materials. They fulfill their creator's commands withunwavering obedience."
        traits={["Unyielding", "Immune to magic"]}
        moves={["Smashing Fists", "Booming Stomps"]}
        wants="to obey its creator's commands to the exact letter"
        doesntWant="to be uncertain of what to do"
        sight="lumbering form, carved runes, glowing cracks"
        sound="grinding joints, hollow thuds, faint buzz of magic"
        smell="overwhelming scent of the material it was made of"
        tableTitle="Golem Construction"
        tableRows={[
          ["Clay, with a malleable form."],
          ["Iron, with a strong magnetic pull."],
          ["Crystal, refracting light into dazzling shards."],
          ["Jade, with a mind and will of its own."],
          ["Flesh, forming tiny flesh or blood golems if cut."],
          ["Wood, regrowing damaged parts quickly."]
        ]}
      />
      <Monster
        name="Gorgon"
        type="brute"
        colors={["metallic gray", "bronze highlights", "gaseous green"]}
        description="Metal-plated bulls that snort out a cloud of petrifying gas. They charge through it and shatter the stone victim into a thousand pieces."
        traits={["Thick metallic hide"]}
        moves={["Petrifying Breath"]}
        wants="to charge anything that dares confront it"
        doesntWant="flashy distractions"
        sight="serpentine eyes, gas tendrils seeping from nostrils"
        sound="sliding metal plates, mechanical snorts, hiss of steam"
        smell="heavy metallic odor, slight staleness in the air"
        tableTitle="Metallic Variations"
        tableRows={[
          ["Titanium, light and incredibly fast."],
          ["Lead, slow but nearly indestructible."],
          ["Steel, covered in sharp spikes."],
          ["Silver, blindingly reflecting light."],
          ["Brass, emitting an unsettling hum."],
          ["Bronze, resisting all magic."]
        ]}
      />
      <Monster
        name="Grick"
        type="lurker"
        colors={["slate gray", "mauve gray", "dark olive&"]}
        description="Slithering, worm-like creatures with hooked tentacles and a beak. They hide in dark caverns, taking great care to ambush prey with precise strikes."
        traits={["Rocky camouflage", "Extended reach"]}
        moves={["Tentacle Swipe", "Beak Snap"]}
        wants="to leave no trace of its hunt"
        doesntWant="to miss a chance at a meal"
        sight=""
        sound=""
        smell=""
        tableTitle="Side Effects Of Magical Experimentation"
        tableRows={[
          ["Cloaks the whole area in darkness."],
          ["Bursts into blinding light when it strikes."],
          ["Releases a cloud of sleep gas when struck."],
          ["Lets out shrill, echoing whistles."],
          ["Absorbs all sound into utter silence."],
          ["Tentacles stretch three times normal length."]
        ]}
      />
      <Monster
        name="Griffon"
        type="predator"
        colors={["lion gold", "feathery white", "stormy blue"]}
        description="Majestic creatures with the body of a lion and the wings of an eagle. They're fierce predators and highly territorial, often nesting on high mountain peaks."
        traits={["Keen watch", "Wild majesty"]}
        moves={["Warning Woosh", "Beak Snap"]}
        wants="for its screeches to warn intruders away"
        doesntWant="any threat at all to its kin"
        sight=""
        sound=""
        smell=""
        tableTitle="People It Terrorizes"
        tableRows={[
          ["Satyrs, drawn by their celebrations."],
          ["Hags, which it hunts for sport."],
          ["Shepherds, raiding their flocks."],
          ["Merchant caravans, curious about their carts."],
          ["Hunters, in revenge for killing kin."],
          ["Bandits, scaring them out of its lands."]
        ]}
      />
      <Monster
        name="Giant, Fire"
        type="marauder"
        colors={["burnt ember", "fiery red", "coal black"]}
        description="Ironclad tyrants of flame and forge, valuing order and dominance above all. They shape kingdoms through fire, steel, and unyielding will."
        traits={["Magma-blooded", "Blazing aura"]}
        moves={["Flaming Hammer", "Hurl Magma"]}
        wants="to haul plunder back to its volcanic fortress"
        doesntWant="to cross bodies of water"
        sight="huge swathes of scorched earth, trails of magma"
        sound="roaring crackle, whoosh of fire, rumble of lava"
        smell="stifling smoky odor, charred earth, scorched stone"
        tableTitle="Seat Of Power"
        tableRows={[
          ["charred stone bastion", "island in a lava river"],
          ["grand obsidian spire", "sheer volcanic cliffside"],
          ["ash-choked estate", "billowing caldera rim"],
          ["steamy sulfur baths", "center of a vast plain"],
          ["basalt cathedral", "beneath magma-falls"],
          ["clanging forgeworks", "sulfuric cave system"]
        ]}
      />
      <Monster
        name="Giant, Frost"
        type="blaster"
        colors={["icy blue", "frosty gray", "stone gray"]}
        description="Brutal lords of ice and stone, honoring strength and tradition above all. They seek to prove themselves worthy of the harsh, unforgiving frozen wastes."
        traits={["Icy footsteps", "Slowness aura", "Speech"]}
        moves={["Frost Breath", "Summon Blizzard", "Frozen Hammer"]}
        wants="to rule the sweeping vistas of the tundra"
        doesntWant="to feel the cold seep from its bones"
        sight="massive hanging icicles, clouds of snowflakes"
        sound="crack of freezing, howling icy winds, crunch of frost"
        smell="biting cold, frigid air, pine trees, fresh snow"
        tableTitle="Unexpected Locations"
        tableRows={[
          ["Entire tower built around it, keeping it frozen."],
          ["Steps through a portal and onto a sandy beach."],
          ["Riding on a floating iceberg towards a port city."],
          ["In a grand wizard's laboratory."],
          ["Emerging from a bizarre mid-spring blizzard."],
          ["Tied down in the middle of a vast desert."]
        ]}
      />
      <Monster
        name="Giant, Hill"
        type="brute"
        colors={["dusty tan", "earthy brown", "muddy green"]}
        description="Massive, dim-witted gluttons with big bellies and bulging muscles. They crush and consume all in their path, living only for the next feast."
        traits={["Bottomless appetite", "Too dumb to trick", "Speech (limited)"]}
        moves={["Kick Over Wall", "Throw Castle Turret", "Shake Off Climbers"]}
        wants="to force weaker creatures to bring it food"
        doesntWant="to be confronted with logic and reason"
        sight="bulging muscles, bloated belly, ragged clothes"
        sound="guttural burps, dumb chuckles, heavy breathing"
        smell="overpowering stench of sweat, sour rotting food"
        tableTitle="Quirks"
        tableRows={[
          ["Always brewing up a brand new stew."],
          ["Hoards small, shiny objects—like mirrors."],
          ["Roams with a large pack of stray dogs."],
          ["Exceptionally rotund, even for a hill giant."],
          ["Extremely short, for a hill giant."],
          ["Thinks even the slightest odd thing is hilarious."]
        ]}
      />
      <Monster
        name="Giant, Storm"
        type="blaster"
        colors={["electric blue", "cloudy sky", "stormy gray"]}
        description="Regal rulers of sea and sky, embodying wisdom and natural order. They summon storms to enforce balance, driven to maintain the world's harmony."
        traits={["Crackling aura", "Commanding presence", "Speech"]}
        moves={["Thunderbolt", "Thunderclap", "Summon Storm"]}
        wants="to enforce what it sees as the natural order"
        doesntWant="to see established order devolve into chaos"
        sight="crackling arcs of lightning, regal figure on the horizon"
        sound="deafening boom, wind rushing, building static hum"
        smell="electrified air, rain-soaked earth, wet stone"
        tableTitle="Arrives Alongside..."
        tableRows={[
          ["Hurricane, sweeping away defiance."],
          ["Twin tornados, ripping apart the unrepentant."],
          ["Hailstorm, battering the guilty into confession."],
          ["Lightning storm, searing away deceit."],
          ["Torrential downpour, washing away corruption."],
          ["Waterspouts, dragging wrongdoers to judgment."]
        ]}
      />
      <Monster
        name="Hag, Night"
        type="trickster"
        colors={["midnight blue", "shadow black", "bruise purple"]}
        description="Sinister figures that embody nightmares, manipulating dreams to terrorize mortals. They're devious and deal in dark bargains."
        traits={["Was in your dreams", "Shadowy teleport", "Speech"]}
        moves={["Nightmares", "Phantasmal Form", "Eerie Whisper"]}
        wants="to explore the true depths of your fears"
        doesntWant="to have its own fears exposed"
        sight="shrouded in shadows, trail of purple mist"
        sound="eerie whispers, fluttering cloak, creak of unseen steps"
        smell="cool night air, hint of aged leather"
        tableTitle="Night Spell Crucible"
        tableDescription="Make 3 Spells"
        tableRows={[
          ["shrouded", "gloom"],
          ["shivering", "touch"],
          ["whispering", "glimmer"],
          ["muted", "aura"],
          ["bleak", "breath"],
          ["eerie", "moan"]
        ]}
      />
      <Monster
        name="Hag, Sea"
        type="tactician"
        colors={["kelp green", "brine teal", "storm gray"]}
        description="Grotesque sea-dwellers whose gaze inspires terror. They lurk in coastal caves, cursing sailors and reveling in the fearful cries of the drowning."
        traits={["Knows your sins", "Watery teleport", "Speech"]}
        moves={["Hideous Gaze", "Drowning Curse", "Call Creatures"]}
        wants="to collect souls lost to the depths of the seas"
        doesntWant="someone to make their fortune on the seas"
        sight="slimy skin, kelp entangled hair, glassy eyes"
        sound="waves crashing, soft gurgles, echoing calls"
        smell="saltwater, fish rot, briny scent of seaweed"
        tableTitle="Sea Spell Crucible"
        tableDescription="Make 3 Spells"
        tableRows={[
          ["swelling", "shanty"],
          ["rippling", "groan"],
          ["gurgling", "grip"],
          ["foamy", "ebb"],
          ["surging", "wave"],
          ["salty", "current"]
        ]}
      />
      <Monster
        name="Hag, Storm"
        type="blaster"
        colors={["electric blue", "rainy teal", "stormy gray"]}
        description="Fierce figures that roam coastal cliffs, summoning winds and lightning. They unleash their wrath on settlements, making sure none grow too comfortable."
        traits={["Always stormy", "Windrider", "Speech"]}
        moves={["Conjure Tempests", "Lightning Strike", "Thunder Boom"]}
        wants="to wreak havoc where stability prevails"
        doesntWant="the calm center of its own fury revealed"
        sight="dark clouds swirling, crackling electricity"
        sound="howling winds, crackle of lightning, roaring thunder"
        smell="rain-soaked air, faint scent of wet earth"
        tableTitle="Storm Spell Crucible"
        tableDescription="Make 3 Spells"
        tableRows={[
          ["tattered", "torrent"],
          ["crackling", "clap"],
          ["biting", "arc"],
          ["howling", "boom"],
          ["thunderous", "flash"],
          ["surging", "chant"]
        ]}
      />
      <Monster
        name="Hag, Swamp"
        type="trickster"
        colors={["bog green", "dank moss", "peat brown"]}
        description="Wicked figures lurking in fetid bogs, weaving illusions to torment travelers. They spread decay and poison with sadistic glee."
        traits={["Swampy camouflage", "Decaying touch", "Speech"]}
        moves={["Toxic Cloud", "Ensnaring Vines", "Illusions"]}
        wants="to let the creatures of the swamp do all the work"
        doesntWant="its swamp becoming someone's shortcut"
        sight="gnarled branches, hanging moss, buzzing flies"
        sound="creaking of trees, croak of swamp creatures, cackling"
        smell="decaying leaves, putrid water, mud"
        tableTitle="Storm Spell Crucible"
        tableDescription="Make 3 Spells"
        tableRows={[
          ["squelching", "mire"],
          ["oozing", "leech"],
          ["reeking", "smother"],
          ["rotting", "swallow"],
          ["sinking", "pull"],
          ["writhing", "cloud"]
        ]}
      />
      <Monster
        name="Hell Hound"
        type="predator"
        colors={["ember red", "coal black", "charcoal gray"]}
        description="Fiery, vicious hounds with glowing eyes and the reek of brimstone. They hunt in packs and track souls marked for damnation."
        traits={["Pack hunter", "Fiery tracks", "Understands language"]}
        moves={["Flame Breath", "Howling Call", "Warning Growl"]}
        wants="to make the guilty pay"
        doesntWant="to be forced out into the stinging rains"
        sight="smoking nostrils, singed grass, bed of ashes"
        sound="deep growls, crackling flames, claws scraping stone"
        smell="sulfur and brimstone, charred flesh"
        tableTitle="Call To Hunt"
        tableRows={[
          ["Pursuing souls marked by broken oaths."],
          ["Stalking souls escaped from the underworld."],
          ["Hunting traitors who betrayed their own kin."],
          ["Tracking those who spilt innocent blood."],
          ["Hounding those who flee from justice."],
          ["Wrongly on the trail of the completely innocent."]
        ]}
      />
      <Monster
        name="Hippogriff"
        type="protector"
        colors={["chestnut brown", "soft ivory", "golden tawny"]}
        description="Noble creatures with the body of a horse and wings of an eagle. They soar over plains and mountains, loyal to those who earn their trust."
        traits={["Noble presence", "Elegant speed"]}
        moves={["Talon Strike", "Beak Snap"]}
        wants="for its young to grow strong and wild"
        doesntWant="those who confront others with aggression"
        sight="majestic wings, sharp beak, talons gripping the earth"
        sound="rush of wind, shrill cries, gallop of hooves"
        smell="earthy scent of open fields, fresh mountain air"
        tableTitle="Chosen Riders"
        tableRows={[
          ["Legendary thief who helped it escape."],
          ["Outcast noble seeking redemption."],
          ["Ranger who patrols distant borders."],
          ["Wicked hag that it thinks is a hero."],
          ["Normal farmer that it was raised by."],
          ["Gnoll that nursed it back to health."]
        ]}
      />
      <Monster
        name="Hydra"
        type="brute"
        colors={["marsh green", "dusky blue", "rusty red"]}
        description="Massive, reptilian beasts with multiple heads that can regrow when severed, making them almost impossible to kill. They lurk in swamps and dark waters."
        traits={["Incredibly vigilant", "Regenerating heads"]}
        moves={["Pull Arms & Legs", "Frenzied Biting"]}
        wants="to keep threats in front of it"
        doesntWant="anything ever touching its body"
        sight="wide-open jaws, glistening scales"
        sound="hissing, splash of water, snapping of giant jaws"
        smell="rotting vegetation, stagnant muck water"
        tableTitle="Unique Head Regrowths"
        tableRows={[
          ["Sludge head, which spews a poisonous fog."],
          ["Only the skull, filled with necrotic energy."],
          ["Eyeless head, which can read minds."],
          ["Beautiful head with a hypnotic singsong."],
          ["Horned head that can ram with force."],
          ["The cut head rolls away to form a new hydra."]
        ]}
      />
      <Monster
        name="Lamia"
        type="trickster"
        colors={["dark jade", "desert brown", "sandy gold"]}
        description="Decadent, lion-bodied enchantresses that lure victims with charm and illusion, seeking to corrupt and control them. They're driven by hedonistic desires."
        traits={["Graceful agility", "Illusory person form", "Speech"]}
        moves={["Cursed Touch", "Illusions", "Enchantment"]}
        wants="to gather secrets and amusement from its victims"
        doesntWant="to think about the nature of its existence"
        sight="golden adornments, graceful silhouette, soft ripples"
        sound="seductive laughter, sand rustling, chants on the wind"
        smell="desert breeze, faint jasmine, spicy myrrh"
        tableTitle="False Renown"
        tableRows={[
          ["Whispers that prophecies fall from their lips."],
          ["Claimed to show past secrets through dreams."],
          ["Rumored to bind with honeyed promises."],
          ["Fabled to recall lost souls from death's grasp."],
          ["Promised to reveal one's deepest purpose."],
          ["Songs tell of dreams woven into reality."]
        ]}
      />
      <Monster
        name="Manticore"
        type="marksman"
        colors={["burnt brown", "desert ochre", "dusty dawn"]}
        description="Fierce beasts with a feline body and spiked tail. They prowl deserts and plains, driving prey into flight then pelting them with volleys of deadly tail spikes."
        traits={["Barbed hide", "Cautious", "Speech (crude)"]}
        moves={["Cruel Words", "Spike Volley", "Terrifying Roar"]}
        wants="to scare prey into fleeing for an easy kill"
        doesntWant="to let fleeing prey get away"
        sight="spikes in trees, dust clouds, long blood trails"
        sound="guttural roars, sharp cracks of spikes landing"
        smell="dry fur, acrid dust, musky feline scent"
        tableTitle="Symbiotic Pairings"
        tableRows={[
          ["Wyvern, hunts down injured prey."],
          ["Hill giant, makes for a comfortable bed."],
          ["Basilisk, waits to petrify escaping targets."],
          ["Minotaur, lets it lair in the labyrinth."],
          ["Chimera, a tense hunting pact."],
          ["Underscourge, follows along from below."]
        ]}
      />
      <Monster
        name="Medusa"
        type="lurker"
        colors={["viper green", "bronze gold", "ancient stone"]}
        description="Cursed figures with serpentine hair and a gaze that turns onlookers into stone. They hide in ancient ruins, haunted by past sorrow and bitterness."
        traits={["Vigilant serpent hair", "Unnatural beauty", "Speech"]}
        moves={["Petrifying Gaze", "Snake Hair Strike", "Hypnotic Charm"]}
        wants="you to just go away"
        doesntWant="to be reminded of its past"
        sight="writhing serpent hair, statues of victims, angry eyes"
        sound="soft hissing, vengeful muttering, sudden snap of scales"
        smell="ancient rot, moss-covered stone, stagnant air"
        tableTitle="Curse Origins"
        tableRows={[
          ["Vanity, punished by a mirror that never reflects."],
          ["Lies, broke a promise made in desperation"],
          ["Greed, forced to forever protect the relic it stole."],
          ["Paranoia, having been betrayed countless times."],
          ["Jealousy, spawned from unfulfilled longing."],
          ["Hubris, having believed itself above the gods."]
        ]}
      />
      <Monster
        name="Mimic"
        type="trickster"
        colors={["corrupted purple", "iron black", "aged oak"]}
        description="Shapeshifting creature that disguises itself as objects to lure prey. They stretch to devour victims in one gulp, springing to life when a meal is assured."
        traits={["Shapeshifter", "Adhesive touch", "Understands language"]}
        moves={["Raise Curiosity", "Deflect Suspicion", "Swallow Whole"]}
        wants="to be carried to places with tastier meals"
        doesntWant="to turn into the same thing twice"
        sight="shifting surfaces like melting wax, texture rippling"
        sound="sticky slurps, sudden snaps, creaking of pressure"
        smell="sour decay of old adhesive, whiffs of trapped air"
        tableTitle="Object Forms"
        tableRows={[
          ["Simple, like a barrel, rug, or bookshelf."],
          ["Tricky, like a door, book, or cupboard."],
          ["Inviting, like a plush chair, bed, or vanity table."],
          ["Horrific, like a doll, mask, or coffin."],
          ["Nostalgic, like a children's toy, old hat, or lute."],
          ["Necessary, like a toilet, staircase, or well."]
        ]}
      />
      <Monster
        name="Minotaur"
        type="brute"
        colors={["dark leather", "bull brown", "bestial red"]}
        description="Towering, bull-headed figures that guard labyrinths. They relentlessly stalk its passages, charging with savage force at the first sign of intruders."
        traits={["Thick hide", "Labyrinth sense", "Speech"]}
        moves={["Maze Ambush", "Bull Snorts", "Horn Toss"]}
        wants="victims to enter its maze, to satisfy its bloodlust"
        doesntWant="to feel the sting of solitude yet again"
        sight="bulging muscles, hooves kicking up dust"
        sound="angry snorts, thud of cloven hooves on stone"
        smell="earthy musk, old blood and sweat"
        tableTitle="Labyrinth Layouts"
        tableRows={[
          ["Intricate sewer system of the ancient capital."],
          ["Thorn-choked paths hiding mischievous fey."],
          ["Tunnels of a sea cave, half-filled with water."],
          ["Stone paths lined with fragile mirrors."],
          ["Deep stepwell with various paths cut off."],
          ["Enchanted woods with shifting pathways."]
        ]}
      />
      <Monster
        name="Naga"
        type="blaster"
        colors={["scaled green", "reptilian blue", "aged gold"]}
        description="Malevolent serpentine figures, guarding ancient wisdom. They defend sacred groves and lost ruins with potent magic against any who dare trespass."
        traits={["Serpentine grace", "Ancient wisdom", "Speech"]}
        moves={["Venomous Fangs", "Constrict", "Hex Magic"]}
        wants="to keep its secrets for itself, no matter the cost"
        doesntWant="to be insulted with offers, as if it can be bought"
        sight="iridescent scales, gleaming eyes"
        sound="hiss of scales sliding across stone, whispering"
        smell="exotic incense, floral notes mixed with musk"
        tableTitle="Forbidden Knowledge"
        tableDescription="Roll 3 & Interpret"
        tableRows={[
          ["secret", "scrolls of", "immortality"],
          ["twisted", "visions of", "soulbinding"],
          ["false", "rites of", "necromancy"],
          ["true", "pacts of", "teleportation"],
          ["blasphemous", "elixirs of", "polymorphing"],
          ["shattered", "ciphers of", "godhood"]
        ]}
      />
      <Monster
        name="Nightmare"
        type="marauder"
        colors={["hellfire red", "shadow black", "ember gray"]}
        description="Flame-wreathed steeds that emerge from the underworld, galloping through the night. Their hooves leave scorched trails across the land."
        traits={["Flame-wreathed", "Slips between planes", "Understands language"]}
        moves={["Hellfire Breath", "Shadowy Teleport", "Rear Up & Neigh"]}
        wants="to carry those who seek vengeance"
        doesntWant="to witness acts of mercy or kindness"
        sight="charred hoofprints, trail of smoke, glowing red eyes"
        sound="crackle of flames, pounding of hooves, eerie neighs"
        smell="burnt sulfur, smoldering ashes"
        tableTitle="Wrathful Riders"
        tableRows={[
          ["Exiled knight, who did nothing wrong."],
          ["Betrayed queen, who deserved what she got."],
          ["Hanged poet, whose words rang too true."],
          ["Wayward prince, who will never go home."],
          ["Desperate rebel, the last one alive."],
          ["Bitter seer, whose warnings were ignored."]
        ]}
      />
      <Monster
        name="Ochre Jelly"
        type="brute"
        colors={["ochre", "sickly yellow", "murky brown"]}
        description="Pulsing, acidic oozes that dissolve anything they touch as they silently slither through dungeons. They split into smaller versions when struck."
        traits={["Extremely sticky", "Divides when struck"]}
        moves={["Slurp Forward", "Absorb"]}
        wants="to grow into the greatest of all jellies"
        doesntWant="to split into new rivals"
        sight="unsettling motion, remnants of absorbed creatures"
        sound="wet sloshing, faint bubbling, the quiet pull of suction"
        smell="sour decay, moldy dampness"
        tableTitle="Newly Split Jellies"
        tableDescription="It's Not Sticky"
        tableRows={[
          ["Azure jelly, with a freezing touch."],
          ["Crimson jelly, shrieks and bleeds when it's struck."],
          ["Verdant jelly, spreads carnivorous plant life."],
          ["Mercury jelly Mercury jelly, perfectly reflects its surroundings."],
          ["Spectral jelly, shimmers like a mirage."],
          ["Onyx jelly, leaves a trail of thick, bubbling tar."]
        ]}
      />
      <Monster
        name="Ogre"
        type="brute"
        colors={["rustic tan", "dirty brown", "forest green"]}
        description="Towering, brutish creatures with thick skin and crude weapons. They roam forests and caves, smashing anything in its path to keep itself amused."
        traits={["Overwhelming power", "Slow & stubborn", "Speech"]}
        moves={["Grab & Crush", "Raging Roar", "Body Slam"]}
        wants="to wander and destroy—a good life"
        doesntWant="to be outwitted by smaller creatures"
        sight="towering silhouette in the trees, gnarled club"
        sound="heavy footfalls, low growls"
        smell="stale sweat, dirt, lingering scent of raw meat"
        tableTitle="Chosen Leader Of The..."
        tableRows={[
          ["Trolls, after marrying their chieftain."],
          ["Hill goblins, fearing its wrath."],
          ["Swamp spirits, bound to its will."],
          ["Wild fey, attracted by its savagery."],
          ["Hill giants, who think it's a genius."],
          ["Other ogres, a small army of them."]
        ]}
      />
      <Monster
        name="Otyugh"
        type="marauder"
        colors={["putrid brown", "sewer green", "rotten flesh"]}
        description="Grotesque, tentacled scavengers lurking in sewers and refuse heaps. They devour rotting carcasses and overwhelm any disturbance with diseased filth."
        traits={["Diseased touch", "Reeking stench", "Understands, telepathy"]}
        moves={["Spray Filth", "Putrid Gulp", "Sludge Tentacle"]}
        wants="to strike simple truces for territory"
        doesntWant="for its accumulated filth to be washed clean"
        sight="slimy tentacles, rotting heaps, scattered bones"
        sound="squishy movements, wet gurgles, buzzing flies"
        smell="putrid rot, decay, stagnant swamp water"
        tableTitle="Filthy Accomplices"
        tableRows={[
          ["Spewing animated fungus swarms."],
          ["Driven forward by a cult of ruin."],
          ["Controlled by city sanitation workers."],
          ["Followed by a horde of plague-ridden rats."],
          ["Ridden by a foul goblin shaman."],
          ["Possessed by a fallen druid's spirit."]
        ]}
      />
      <Monster
        name="Owlbear"
        type="brute"
        colors={["tawny feather", "furry brown", "talon slate"]}
        description="Fiercely territorial, hulking beasts with the body of a bear and head of an owl. They hunt in forests, using their keen senses and raw power."
        traits={["Nocturnal hunter", "Lumbering speed"]}
        moves={["Territorial Roar", "Crushing Beak"]}
        wants="to protect its territory"
        doesntWant="any threat to its nesting cave"
        sight="clawed tree bark, deep gouges in the ground"
        sound="rasping hoots, heavy thuds, trees shaking"
        smell="rank musk, trampled leaves, tang of blood"
        tableTitle=""
        tableRows={[]}
      />
      <Monster
        name="Pegasus"
        type="protector"
        colors={["silvery gray", "sky blue", "cloud white"]}
        description="Majestic, winged horses with a noble spirit. They soar through the skies, drawn to those with courage and kindess, appearing in moments of dire need."
        traits={["Graceful flier", "Pure-hearted", "Understands language"]}
        moves={["Winged Charge", "Wing Buffet", "Celestial Whinny"]}
        wants="to come to aid in dire moments"
        doesntWant="to be ridden"
        sight="shimmering feathers, graceful gait"
        sound="powerful wing beats, soft neighing, wind rushing"
        smell="fresh air, faint scent of wildflowers"
        tableTitle="Carried Messages"
        tableRows={[
          ["Royal summons, sealed with enchanted wax."],
          ["Love letter filled with terrible poetry."],
          ["Battle plan hastily scrawled."],
          ["Desperate plea from a sworn enemy."],
          ["Ransom note tied with black string."],
          ["Official declaration of invasion."]
        ]}
      />
      <Monster
        name="Phoenix"
        type="blaster"
        colors={["inferno gold", "flaming orange", "ash gray"]}
        description="Mythical birds of fire, emerging to bring both destruction and new beginnings. As they blaze across the sky, their embers spread cleansing infernos."
        traits={["Radiates intense heat", "Reborn upon death", "Speech"]}
        moves={["Flame Burst", "Ember Trail", "Call Firestorm"]}
        wants="to only come when they're needed most"
        doesntWant="to face the pain and horror of its rebirth"
        sight="fiery wings, glowing ember trails, vibrant plumage"
        sound="crackling flames, occasional soft cooing"
        smell="warm ash, hints of sulfur, sweet smokiness"
        tableTitle="Alchemical Powers"
        tableDescription="Roll 2 Per Part Secured"
        tableRows={[
          ["Immunity to fire", "Flaming touch"],
          ["Cure any disease", "Slip between realities"],
          ["Massive, fiery wings", "Fiery rebuke aura"],
          ["Resurrection", "Cinder trail"],
          ["Telepathy", "Flame divination"],
          ["Summon firelings", "Blazing speed"]
        ]}
      />
      <Monster
        name="Rakshasa"
        type="trickster"
        colors={["silken gold", "regal purple", "tiger orange"]}
        description="Cunning, tiger-headed fiends with reversed hands that revel in wealth and opulence. They manipulate mortals with illusions and lies, gaining great power."
        traits={["Illusion magic", "Elegant manipulator", "Speech"]}
        moves={["Enchant Person", "Illusions", "Perfect Lies"]}
        wants="to surround itself in luxury"
        doesntWant="for crude company to sully its refined tastes"
        sight="ornate clothing, well-groomed fur"
        sound="smooth voice, rustle of silk, faintly echoing footsteps"
        smell="incense, hints of expensive perfumes"
        tableTitle="Influence Networks"
        tableRows={[
          ["Thieves guild. Fits in perfectly."],
          ["Merchant coalition. Sold their soul for it."],
          ["Pirate fleet. Won it in a duel."],
          ["Noble house. Happily married into it."],
          ["Mercenary band. Controls it from afar."],
          ["Spy ring. Works for four different sides."]
        ]}
      />
      <Monster
        name="Remorhaz"
        type="predator"
        colors={["serpentine blue", "molten red", "chitin gray"]}
        description="Massive, heat-radiating worms with red-hot spines along their back. They burrow through frozen tundra, devouring all in their path with searing jaws."
        traits={["Radiates intense heat", "Swift burrower", "Powerful mandibles"]}
        moves={["Emerging Strike", "Heat Wave", "Devour"]}
        wants="to find hot springs or lava flows to lay its eggs"
        doesntWant="to feel the cold seep under its carapace"
        sight="glowing red-hot spines, icy blue eyes, sharp ridges"
        sound="hissing steam, grinding mandibles, cracking ice"
        smell="burnt metal, scorched earth, sulfur"
        tableTitle="Worms Of Dark Prophecy"
        tableRows={[
          ["ROUSE THE SLUMBERING GODS ENTOMBED"],
          ["SEVER THE SACRED BONDS OF BLOOD AND ROOT"],
          ["DEVOUR THE HEART OF THE HERO FORETOLD"],
          ["UNSEAL THE CRYPT OF THE NAMELESS KING"],
          ["TORCH THE ROOTS OF THE WORLD TREE"],
          ["SILENCE THE BELLS OF THE ETERNAL CITY"]
        ]}
      />
      <Monster
        name="Roc"
        type="overseer"
        colors={["feathered sand", "dusty brown", "stormy blue"]}
        description="Colossal birds with wings that block out the sun. They appear in times of stagnation to bring change by carrying away that which no longer belongs."
        traits={["Blocks out the sun", "Impervious bulk"]}
        moves={["Gale Force Winds", "Talon Grasp"]}
        wants="to return to its nest"
        doesntWant="to be distracted from what it must do"
        sight="as big as the clouds, vast silhouette on the horizon"
        sound="resonating wingbeats, massive gusts of wind"
        smell="overwhelming earthy musk, dry feathers"
        tableTitle="Potential Egg Buyers"
        tableRows={[
          ["Dying empress, who will feed on it to live."],
          ["Dragon, who will use it to barter for its life."],
          ["Ancient lich, who will create its greatest minion."],
          ["Storm giant, who will raise it as a mount."],
          ["Infamous pirate, who sees it as a future skyship."],
          ["Druidic order, who will unleash it on the world."]
        ]}
      />
      <Monster
        name="Roper"
        type="lurker"
        colors={["cave earth", "rocky gray", "slate brown"]}
        description="Lurking predators in caverns, blending with stalagmites to ambush prey. Their tendrils drag victims in for a deadly bite, leaving escape nearly impossible."
        traits={["Cave camouflage", "Extended tendrils", "Speech"]}
        moves={["Survive Scrutiny", "Reel In", "Cause Paranoia"]}
        wants="to strike lone targets"
        doesntWant="to be scrutinized and revealed"
        sight="tendril shadows, unremarkable stalagmites"
        sound="low rumbling growl, rocky slithering"
        smell="earthy stone, dank moss, faint rotting flesh"
        tableTitle="How It Survives Scrutiny"
        tableRows={[
          ["Mimics dripping water, distant echoes."],
          ["Moves incredibly quickly when not watched."],
          ["Makes you feel like you are being watched."],
          ["Absorbs light, creating longer shadows."],
          ["Stays deathly still, even under attack."],
          ["Leaves no trace of its previous meals."]
        ]}
      />
      <Monster
        name="Rustmaw"
        type="skirmisher"
        colors={["metal decay", "corroded umber", "oxide red"]}
        description="Chitinous creatures that feed on metal, rusting weapons and armor with a touch. Their twitching antannae guide them straight to their next metallic meal."
        traits={["Rusts metal on touch", "Hard carapace"]}
        moves={["Skitter & Hide", "Eat Weapon"]}
        wants="to consume every last trace of metal"
        doesntWant="to accidentally munch on wood or glass"
        sight="twitching antennae, scattered rust crumbs"
        sound="scraping mandibles, rustling movement"
        smell="sharp metallic tang, faint odor of decay"
        tableTitle="Residual Effects Of Eating Arcana"
        tableRows={[
          ["Glows in the dark."],
          ["Leaves a trail of sparks behind it."],
          ["Floats slightly above the ground."],
          ["Speaks in very basic terms."],
          ["Vibrates like a tuning fork when struck."],
          ["Is completely invisible."]
        ]}
      />
      <Monster
        name="Shambling Mound"
        type="brute"
        colors={["vine green", "muck brown", "rotting green"]}
        description="Hulking masses of vines and swamp muck lumbering through marshes. They engulf prey and grow larger with each and every victim."
        traits={["Absorbs and grows", "Swampy camouflage"]}
        moves={["Regrowth", "Vine Lash"]}
        wants="to find and consume prosperity"
        doesntWant="to consume desiccated creatures"
        sight="mass of tangled vines, streaks in the muck"
        sound="wet sloshing, cracking branches, earthy groan"
        smell="rotting vegetation, swamp muck, wet earth"
        tableTitle="Buried Within"
        tableRows={[
          ["Grand druid, sleeping within a cocoon."],
          ["Ancient coffin, sealing away a cursed vampire."],
          ["Nearly endless amount of animated skeletons."],
          ["Mask of twisted vines that whispers riddles."],
          ["Fey gateway, pulsing with otherwordly energy."],
          ["Warbanner of the true queen."]
        ]}
      />
      <Monster
        name="Sphinx"
        type="tactician"
        colors={["ancient gold", "dusky blue", "desert sand"]}
        description="Majestic creatures with the body of a lion and head of a human. They guard secrets and grant wishes, testing people with riddles to prove their worth."
        traits={["Master of riddles", "Unfooled by lies", "Speech"]}
        moves={["Wing Buffet", "Divination", "Teleport"]}
        wants="to allow the truly worthy to pass by"
        doesntWant="to face trickery or deception of any kind"
        sight="golden fur, regal posture, watchful eyes"
        sound="resonant voice, wind sweeping by, distant roars"
        smell="warm sand, ancient incense, faint floral scents"
        tableTitle="Wish Choices"
        tableRows={[
          ["Ask any yes or no question."],
          ["Ask for any one item and it is yours."],
          ["Ask to be any age you would like—forever?"],
          ["Ask for any one being to cease to be."],
          ["Ask for any one being to be brought back."],
          ["Ask for a chance to correct a single regret."]
        ]}
      />
      <Monster
        name="Troll"
        type="marauder"
        colors={["earthy brown", "granite gray", "muddy green"]}
        description="Regenerating creatures that lair in overlooked places, hoarding strange trophies. They make simple demands and usually negotiate before cracking skulls."
        traits={["Regenerates", "Weak vs. fire, acid", "Speech (grunts, gestures)"]}
        moves={["Convincing Offer", "Hurl Enemy", "Topple Trees"]}
        wants="its lair to be filled with bones and trophies"
        doesntWant="to let on that it's more cunning than it looks"
        sight="an oddly shaped mound, glint of sharp claws"
        sound="low grumbling, crunch of bones, wet chewing"
        smell="stale swamp water, wet fur, strong musk of mold"
        tableTitle="Overlooked Lairs"
        tableRows={[
          ["Abandoned mill, half-sunk in the swamp."],
          ["Ruined bathhouse, flooded with muck."],
          ["Crumbling fort lost in dense woods."],
          ["Hollowed-out tree astride a grain field."],
          ["Ruined chapel overtaken by brambles."],
          ["Rocky cave behind a waterfall."]
        ]}
      />
      <Monster
        name="Underscourge"
        type="tactician"
        colors={["chitin bronze", "earthen ochre", "stone ochre"]}
        description="Burrowing creatures with chitin armor and hypnotic eyes. They strike from below, collapsing the ground to trap victims."
        traits={["Burrows effortlessly", "Tough chitin", "Speech"]}
        moves={["Hypnotic Gaze", "Rapid Burrowing", "Collapse Ground"]}
        wants="to feast on surface creatures"
        doesntWant="to venture into the sunlight"
        sight="large burrow holes, cracked earth, glistening chitin"
        sound="distant rumbling, shifting soil, clicking mandibles"
        smell="fresh-turned earth, mineral-rich tang, earthy musk"
        tableTitle="Collapses..."
        tableRows={[
          ["Farmer's pasture, full of cows."],
          ["Town square during a festival."],
          ["Noble's garden, during a feast."],
          ["Bustling mine, just as they struck the motherlode."],
          ["General's tent, after a glorious victory."],
          ["Royal cemetery, as the king is laid to rest."]
        ]}
      />
      <Monster
        name="Undead, Ghast"
        type="brute"
        colors={["weathered flesh", "decayed green", "bloodstain red"]}
        description="Rotting corpses driven by an ancient plague that wishes to spread once more. They're full of hunger and rage, and leave victims messily scattered about."
        traits={["Rotting stench", "Plague carrier", "Speech (archaic)"]}
        moves={["Putrid Exhale", "Festering Claws", "Numbing Grasp"]}
        wants="to feed, inadvertently spreading the plague"
        doesntWant="to give up on a fleshy meal"
        sight="pallid skin, jagged teeth, bloated and yellowed"
        sound="guttural snarls, heavy breathing, slap of bare feet"
        smell="decayed flesh, sour stench, mold"
        tableTitle="Bygone Plagues"
        tableRows={[
          ["The Weeping Rot, turning flesh to black ooze."],
          ["The Crimson Blight, causing veins to burst."],
          ["The Ashen Grip, hardening limbs into stone."],
          ["The Vile Verdancy, growing plants from wounds."],
          ["The Choking Miasma, filling lungs with sludge."],
          ["The Thorned Decay, sprouting barbs from skin."]
        ]}
      />
      <Monster
        name="Undead, Ghost"
        type="blaster"
        colors={["spirit silver", "pale mist", "misty blue"]}
        description="Spectral entities bound to the mortal realm, haunting familiar places and reliving past moments. Their presence terrifies all who witness their sorrow."
        traits={["Ethereal form", "Anchored spirit", "Speech"]}
        moves={["Shared Memories", "Wail Of Sorrow", "Spirit Siphon"]}
        wants="to do something, if only it could remember what"
        doesntWant="for its presence to go unnoticed"
        sight="fading in and out, subtly shifting, drifting figure"
        sound="faint sobs, echoing footsteps, an occasional scream"
        smell="old books, lavender, childhood memories"
        tableTitle="Unfinished Business"
        tableDescription="Roll 3, Interpret"
        tableRows={[
          ["Heirloom", "confession", "vendetta"],
          ["estate", "vow", "guilt"],
          ["portrait", "denial", "betrayal"],
          ["key", "hidden", "murder"],
          ["diary", "whisper", "burden"],
          ["relic", "promise", "obsession"]
        ]}
      />
      <Monster
        name="Undead, Lich"
        type="overseer"
        colors={["ancient purple", "rotten green", "bone white"]}
        description="Immortal magicians driven by a singular, dark purpose. They control hordes of undead from a well-defended lair, executing schemes with cold calculation."
        traits={["8 Wizard spells (pg. 76)", "Two steps ahead", "Speech"]}
        moves={["Cast Spell", "Raise Undead", "Soul Leech"]}
        wants="to obtain the power it needs for its grand scheme"
        doesntWant="anything near its phylactery"
        sight="tattered robes, skeletal hands, piercing eyes"
        sound="hoarse incantations, eerie silence between words"
        smell="ancient dust, burnt incense, sharp cloying decay"
        tableTitle="Overly Grandiose Dark Rituals"
        tableRows={[
          ["Enslave every soul in the realm to its will."],
          ["Steal the life essence of the royal bloodline."],
          ["Summon the Bonegrinder, eater of legends."],
          ["Sing the song that will end the world."],
          ["Raise a necropolis from which to rule."],
          ["Twist the vast forests into a maze of undead trees."]
        ]}
      />
      <Monster
        name="Undead, Vampire"
        type="marauder"
        colors={["deep crimson", "midnight black", "moonlit ivory"]}
        description="Elegant, nocturnal hunters driven by a thirst for blood. They seamlessly integrate into society, all while avoiding daylight at all costs."
        traits={["Unnatural allure", "Supernatural strength", "Speech"]}
        moves={["Blood Drain", "Regeneration", "Reveal Teeth"]}
        wants="to pursue its desires, with no end-goal in mind"
        doesntWant="to be reminded of when it was mortal"
        sight="flickering candlelight, blood-stained velvet"
        sound="soft whispers, rustle of fabric"
        smell="old blood, faint rose perfume"
        tableTitle="Siring Intentions"
        tableRows={[
          ["Punish them for betraying your trust."],
          ["Offer them a twisted redemption."],
          ["Teach them the vanity of mortal life."],
          ["Preserve their forbidden love."],
          ["Trap them in unending regret."],
          ["Use them to control those they once loved."]
        ]}
      />
      <Monster
        name="Undead, Wight"
        type="brute"
        colors={["void black", "ghostly white", "deathly gray"]}
        description="Risen corpses consumed by hatred, wielding cursed weapons to drain life from their foes. They defend their domains with unrelenting malice."
        traits={["Regenerative strikes", "Victims become wights", "Speech (wheezes, gasps)"]}
        moves={["Destroy Bonds", "Raise Undead", "Sense Life"]}
        wants="to forever defend its final resting place"
        doesntWant="to face that which caused its undying hatred"
        sight="glowing red eyes, corroded armor"
        sound="groaning breaths, rusty clinking of ancient weapons"
        smell="damp earth, rot, stale air"
        tableTitle="Cursed Armaments"
        tableRows={[
          ["Heartstealer, a blade that drains courage."],
          ["Mindpiercer, a spear that devours memories."],
          ["Blackhelm, a helm that compels obedience."],
          ["Soulcrusher, a mace that fills with dread."],
          ["Rise, a sword that raises new wights."],
          ["Wailer, a spiked chain that binds spirits to it."]
        ]}
      />
      <Monster
        name="Undead, Wraith"
        type="marauder"
        colors={["shadowy purple", "foggy gray", "ghostly blue"]}
        description="Shadowy, spectral figures formed of pure volatile lament. They glide silently through the darkness, draining warmth from everything they touch."
        traits={["Incorporeal form", "Deathly cold aura", "Speech"]}
        moves={["Draining Touch", "Shadow Meld", "Wail Of Despair"]}
        wants="for others to feel the emotions that formed it"
        doesntWant="for true joy to cut through its malice"
        sight="swirling mist, flickering blue light"
        sound="eerie wails, distant rustle of air, faint whispers"
        smell="frigid air, damp stone, metallic tang of fear"
        tableTitle="Horrific Origins"
        tableRows={[
          ["Untold number of dead from the war."],
          ["Royal court and family massacred during a coup."],
          ["Serial killer's decades long reign of terror."],
          ['Massacre of innocent "monstrous" village.'],
          ["Plague spread by one person jumping ship."],
          ["Community's noble sacrifice going unnoticed."]
        ]}
      />
      <Monster
        name="Unicorn"
        type="protector"
        colors={["dusky lavender", "pale rose", "verdant mint"]}
        description="Graceful, magical horses with a single spiraling horn. They roam ancient forests, bestowing healing, light, and blessings to those with pure hearts."
        traits={["Pure spirit", "Protected by nature", "Understands, telepathy"]}
        moves={["Healing Touch", "Blessing", "Luminous Horn"]}
        wants="to keep the few true purities in the world unspoiled"
        doesntWant="to sense malevolence in a creature's heart"
        sight="calming glow, pristine fur, faint sparkles"
        sound="soft clip-clop, soft whinny, soothing hum of magic"
        smell="whiff of lavender, morning dew, ancient woods"
        tableTitle="Blessings"
        tableRows={[
          ["Five more healthy years of old age."],
          ["Sixth sense for when you're being deceived."],
          ["Immunity to poisons and diseases."],
          ["You can understand any language."],
          ["Cleanse any water you touch of impurities."],
          ["Always know the direction to home."]
        ]}
      />
      <Monster
        name="Will-o'-wisp"
        type="trickster"
        colors={["haunted green", "phantom violet", "spectral blue"]}
        description="Glowing, flickering orbs that haunt swamps and bogs, luring travelers with eerie lights. They guide them to reveal secrets that only they understand."
        traits={["Ethereal form", "Swift & elusive", "Understands language"]}
        moves={["Luring Light", "Flicker Vanish", "Bewilder"]}
        wants="to find out how far your curiosity will take you"
        doesntWant="for followers to actually reach its destination"
        sight="faint flickering, eerie shadows, shifting colors"
        sound="faint whispers, low hum, far off footstep echoes"
        smell="fleeting yet familiar and nostalgic smells"
        tableTitle="Secrets To Reveal"
        tableRows={[
          ["Final resting place of a hero never mourned."],
          ["Wooden mask marked with a lost clan's sigil."],
          ["Secret names of the will-o'-wisps."],
          ["Undying flame hidden in the swamp's heart."],
          ["Waterlogged diary with half-legible confessions."],
          ["Still-beating heart buried within twisted roots."]
        ]}
      />
      <Monster
        name="Wyvern"
        type="predator"
        colors={["dark slate", "bronzed ember", "savage green"]}
        description="Fierce, winged reptiles with a venomous, barbed tail. They swoop from unseen heights, securing their prey with swift, brutal strikes."
        traits={["Relentless pursuer", "Hardened scales"]}
        moves={["Venomous Sting", "Diving Strike"]}
        wants="to teach its young the thrill of the hunt"
        doesntWant="to feel a bond with a creature outside its kin"
        sight="darting between clouds, animals scurrying for cover"
        sound="screech from impossibly high, whoosh of its dive"
        smell="smell of their far off nesting location"
        tableTitle="Wyvern Masters"
        tableRows={[
          ["Gorrak, infamous sky pirate."],
          ["Laraen, rogue mage bent on vengeance."],
          ["Zurak, black-market smuggler of wyvern eggs."],
          ["Tylara, a druid wielding the power of storms."],
          ["Drazul, assassin for the highest bidder."],
          ["Serdrak, mercenary lord of the skies."]
        ]}
      />
      <Monster
        name="Yeti"
        type="brute"
        colors={["frostbite gray", "glacial white", "icy blue"]}
        description="Massive, furry beasts roaming between icy peaks, fiercely guarding the remote passes as if bound to the land by some unseen force."
        traits={["Frigid aura", "Snowy camouflage", "Speech (roars, gestures)"]}
        moves={["Frost Breath", "Howling Roar", "Icicle Throw"]}
        wants="to maintain its lonesome vigil, instinctually"
        doesntWant="for the terrible secrets below to see light"
        sight="the snow moving, steaming breath, pale blue eyes"
        sound="crunch of snow under massive feet, deep roars"
        smell="fresh snow cut by a wild tang"
        tableTitle="Under The Ice"
        tableRows={[
          ["City frozen in time, its bells still ringing."],
          ["Souls wandering, lost beneath the ice."],
          ["Portal to a realm of eternal winter."],
          ["Cursed blade locked in unmelting ice."],
          ["Phoenix stuck in a cycle of death and rebirth."],
          ["Balor shackled in ice-forged chains."]
        ]}
      />
    </Page>
  );
};

export default Chapter05;
