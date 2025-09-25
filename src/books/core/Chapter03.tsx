import ChapterTitle from "@/components/ChapterTitle";
import PathCard from "@/components/PathCard";
import StepList from "@/components/StepList";
import Em from "@/components/ui/Em";
import Grid from "@/components/ui/Grid";
import Heading from "@/components/ui/Heading";
import Line from "@/components/ui/Line";
import List from "@/components/ui/List";
import Panel from "@/components/ui/Panel";
import Strong from "@/components/ui/Strong";
import Table from "@/components/ui/Table";
import Text from "@/components/ui/Text";
import BatteredAxe from "@/svgs/game_icons/BatteredAxe";
import Cowled from "@/svgs/game_icons/Cowled";
import DoubleShot from "@/svgs/game_icons/DoubleShot";
import HolyOak from "@/svgs/game_icons/HolyOak";
import Incense from "@/svgs/game_icons/Incense";
import Lyre from "@/svgs/game_icons/Lyre";
import MagicSwirl from "@/svgs/game_icons/MagicSwirl";
import PunchBlast from "@/svgs/game_icons/PunchBlast";
import SpellBook from "@/svgs/game_icons/SpellBook";
import SwordsEmblem from "@/svgs/game_icons/SwordsEmblem";
import TemplarShield from "@/svgs/game_icons/TemplarShield";
import WarlockEye from "@/svgs/game_icons/WarlockEye";

const Chapter03 = () => {
  return (
    <>
      <ChapterTitle description="Chapter 3">Adventurers</ChapterTitle>
      <Heading level={2}>Starting a Campaign</Heading>
      <Text>
        Start each campaign with a <Strong>session zero</Strong>, a campaign brainstorming and
        character creation session where you get everyone on the same page about themes, setting,
        and the kind of game you want to play. Remember, think about it like a TV series!
      </Text>
      <StepList>
        <StepList.Item>
          <Strong smallCaps>Choose a Theme &amp; Setting</Strong>: <Em>The GM</Em> leads the
          discussion on what campaign themes and settings sound fun. Choose a setting or build one
          together.
        </StepList.Item>
        <StepList.Item>
          <Strong smallCaps>Form the Party</Strong>: <Em>The players</Em> form their adventuring
          party, following the prompts below. The party is made before the characters to ensure they
          fit well.
        </StepList.Item>
        <StepList.Item>
          <Strong smallCaps>Set Group Arc</Strong>: <Em>The players</Em> choose a{" "}
          <Strong>
            <Em>group arc</Em>
          </Strong>
          , a goal or theme they're interested in playing out as a group. You'll figure out what it
          means in play. (<Em>pg. 15</Em>)
        </StepList.Item>
        <StepList.Item>
          <Strong smallCaps>Make Characters</Strong>: Follow the character creation flow and make
          PCs together. Prioritize fitting in with the theme, setting, party, and group arc. (
          <Em>pg. 49</Em>)
        </StepList.Item>
      </StepList>
      <Text>
        <Strong allCaps>Adventuring Party</Strong>
      </Text>
      <Text>
        Your group of adventurers already know each other and have adventured together, at least for
        some time. Answer the prompts below together to get a sense of your party's concept to
        ensure that you{" "}
        <Strong>
          <Em>build characters that fit well</Em>
        </Strong>{" "}
        within that type of party.
      </Text>
      <Panel border>
        <Text>
          <Strong smallCaps>Concept</Strong>: Choose 2 that you see your party as and 1 that you
          definitely aren't.
        </Text>
        <Table variant="blank" fullWidth>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Adventurers</Table.Cell>
              <Table.Cell>Explorers</Table.Cell>
              <Table.Cell>Mystics</Table.Cell>
              <Table.Cell>Scoundrels</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Conquerors</Table.Cell>
              <Table.Cell>Heroes</Table.Cell>
              <Table.Cell>Outsiders</Table.Cell>
              <Table.Cell>Vassals</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Disciples</Table.Cell>
              <Table.Cell>Mercenaries</Table.Cell>
              <Table.Cell>Renegades</Table.Cell>
              <Table.Cell>Wardens</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Panel>
      <Text>
        To help whittle down choices, each player and the GM can individually write down one group
        concept they <Strong>want</Strong> to play as and one they <Strong>won't</Strong> play as,
        then reveal them.
      </Text>
      <Heading level={2}>Adventurer Paths</Heading>
      <Text>
        <Strong>Paths</Strong> are collections of talents grouped by common adventuring themes. Each
        has a <Strong>core talent</Strong> and <Strong>core growth</Strong>—your core talent gets
        stronger as you gain levels.{" "}
        <Em>Remember, paths cannot be used to establish story details</Em>—
        <Em>backgrounds and talents can</Em>. Talents are meant to be re-skinned to fit your
        concept! Each path is covered in detail later in this chapter.
      </Text>
      <Grid gap="large" margin="large">
        <PathCard
          name="Bard"
          description="Stirring the soul by song or deed."
          icon={<Lyre />}
          margin="none"
        />
        <PathCard
          name="Berserker"
          description="Blood, mettle, and the sounds of battle."
          icon={<BatteredAxe />}
          margin="none"
        />
        <PathCard
          name="Cleric"
          description="Faith is strong than any blade."
          icon={<Incense />}
          margin="none"
        />
        <PathCard
          name="Druid"
          description="The fury of nature, untamed, relentless."
          icon={<HolyOak />}
          margin="none"
        />
        <PathCard
          name="Fighter"
          description="Resolve honed with every strike."
          icon={<SwordsEmblem />}
          margin="none"
        />
        <PathCard
          name="Monk"
          description="Perfection is a journey, not a destination."
          icon={<PunchBlast />}
          margin="none"
        />
        <PathCard
          name="Paladin"
          description="An oath taken, a burden willingly carried."
          icon={<TemplarShield />}
          margin="none"
        />
        <PathCard
          name="Ranger"
          description="No escape, no mercy, only the chase."
          icon={<DoubleShot />}
          margin="none"
        />
        <PathCard
          name="Rogue"
          description="A whisper in the dark, then a quiet end."
          icon={<Cowled />}
          margin="none"
        />
        <PathCard
          name="Sorcerer"
          description="Magic flows like blood, powerful and wild."
          icon={<MagicSwirl />}
          margin="none"
        />
        <PathCard
          name="Warlock"
          description="Power always demands a hefty price."
          icon={<WarlockEye />}
          margin="none"
        />
        <PathCard
          name="Wizard"
          description="Arcane knowledge, wield with precision."
          icon={<SpellBook />}
          margin="none"
        />
      </Grid>
      <Heading level={2}>Character Creation</Heading>
      <Text>
        Follow the steps below to create your character. This order is often the simplest, but you
        should begin where your imagination takes you. Character sheets for each path and a blank
        sheet are available at{" "}
        <Strong>
          <Em>DrivethruRPG</Em>
        </Strong>{" "}
        or{" "}
        <Strong>
          <Em>odditypress.com</Em>
        </Strong>{" "}
        and you can check the website for digital character sheets and other online play tools.
      </Text>
      <StepList>
        <StepList.Item>
          <Strong smallCaps>Backgrounds</Strong>: Choose{" "}
          <Strong>
            <Em>two backgrounds</Em>
          </Strong>
          , each with{" "}
          <Strong>
            <Em>three wises</Em>
          </Strong>
          , that detail your heritage or professions, covering your tools of the trade and story
          details. (<Em>pg. 14</Em>)
        </StepList.Item>
        <StepList.Item>
          <Strong smallCaps>Traits</Strong>: Choose <Strong>2</Strong> you very much are and{" "}
          <Strong>1</Strong> you definitely aren't:{" "}
          <Em>
            brave, caring, confident, curious, gentle, honest, honorable, persistent, protective,
            quiet, rash, stubborn
          </Em>
          .
        </StepList.Item>
        <StepList.Item>
          <Strong smallCaps>Desires</Strong>: Choose <Strong>2</Strong> you truly desire and{" "}
          <Strong>1</Strong> you definitely don't:{" "}
          <Em>
            belonging, glory, harmony, honor, justice, knowledge, love, power, renown, thrills,
            wealth, wisdom
          </Em>
          .
        </StepList.Item>
        <StepList.Item>
          <Strong smallCaps>Features</Strong>: Write down{" "}
          <Strong>
            <Em>three distinctive features</Em>
          </Strong>
          , words or short phrases that others soon notice about you, like <Em>strong hands</Em>,{" "}
          <Em>kind eyes</Em>, or a <Em>gravelly voice</Em>.
        </StepList.Item>
        <StepList.Item>
          <Strong smallCaps>Path</Strong>: Choose a{" "}
          <Strong>
            <Em>path</Em>
          </Strong>
          , gain its{" "}
          <Strong>
            <Em>core talent</Em>
          </Strong>
          , and pick either another talent from your path's list or a non-core talent from another
          path. (<Em>pg. 54 ~ 76</Em>)
        </StepList.Item>
        <StepList.Item>
          <Strong smallCaps>Stats</Strong>: Begin with <Strong>1</Strong> in each stat, then assign
          <Strong>
            <Em>4 more points</Em>
          </Strong>{" "}
          amongst them as you like, to a max of 3 in any single stat. (<Em>pg. 14</Em>)
        </StepList.Item>
        <StepList.Item>
          <Strong smallCaps>Arcs</Strong>: Choose{" "}
          <Strong>
            <Em>one or two character arcs</Em>
          </Strong>{" "}
          to explore. Don't get too detailed—these will get fleshed out during play and can be
          changed anytime. (<Em>pg. 15</Em>)
        </StepList.Item>
        <StepList.Item>
          <Strong smallCaps>Bonds</Strong>: Describe your characters in detail. As you listen,
          choose{" "}
          <Strong>
            <Em>one bond</Em>
          </Strong>{" "}
          you have towards each PC, matching together an intensity and a nature of the bond. (
          <Em>pg. 14</Em>)
        </StepList.Item>
        <StepList.Item>
          <Strong smallCaps>Review</Strong>: Revisit the campaign theme, setting, party identity,
          and group arcs you set. Make sure everything matches up well and make any adjustments.
        </StepList.Item>
        <StepList.Item>
          <Text margin={{ top: "none" }}>
            <Strong smallCaps>Montage</Strong>: Finish off with a montage of the last adventure you
            went on together. The GM gives a basic overview of the scenario, then you roll a{" "}
            <Strong>
              <Em>group montage</Em>
            </Strong>{" "}
            (2d each) to see how the whole adventure went. (<Em>pg. 13</Em>)
          </Text>
          <Text margin={{ bottom: "none" }}>
            Collaborate to narrate your outcomes, working in bonds and other details. (
            <Em>pg. 14</Em>)
          </Text>
        </StepList.Item>
      </StepList>
      <Heading level={3}>Backgrounds</Heading>
      <Text>
        Backgrounds are the pillars of your backstory, revealing key aspects of who you are. They
        determine what counts as set dressing—tools of the trade and the story details you can add.
        Start with a simple word or phrase, leaving room for growth as your backstory is revealed
        during play. They're just dots to connect later.
      </Text>
      <Text>
        Backgrounds include your heritage (next page), social class, or profession. Each background
        comes with three wises—evocative phrases that highlight areas of knowledge, experience, or
        awareness from that background. They're especially useful for declaring story details,
        providing prompts and ideas to bring into play.
      </Text>
      <Text>
        You have two backgrounds. You can choose from the list (below), use the Heritage crucible
        (next page), or use either of those as guidelines to create your own. Backgrounds and their
        wises should fit the campaign world and be approved by the GM. A heritage background isn't
        required if you prefer it as just set dressing.
      </Text>
      <Text>Your backgrounds serve as a clear sign of the important aspects of who you are.</Text>
      <List variant="ordered">
        <List.Item>
          You might have grown up poor on the streets, but if you have the Ragamuffin background,
          you learned a lot from that experience and it's a core part of who you are.
        </List.Item>
        <List.Item>
          You might be a dwarf, but having the Dwarf of the Iron Hills background lets you set the
          scope of what it means to be a person from that heritage.
        </List.Item>
        <List.Item>
          A fighter with the Warrior and Noble backgrounds feels substantially different than one
          with the Scoun drel and Eccentric backgrounds.
        </List.Item>
      </List>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>BACKGROUNDS &amp; WISES</Table.HeaderCell>
            <Table.HeaderCell>Also known as…</Table.HeaderCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              CHARLATAN, wise in social graces, spotting marks, and timely misdirects.
            </Table.Cell>
            <Table.Cell>spy, swindler</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              CLERGY, wise in allegories, signs of sin, and faiths of the world.
            </Table.Cell>
            <Table.Cell>cultist, priest</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              COMMONER, wise in local customs, practical wisdom, and superstitions.
            </Table.Cell>
            <Table.Cell>farmer, villager</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              CRAFTER, wise in crafting quality, trade contacts, and wear and tear.
            </Table.Cell>
            <Table.Cell>artisan, smith</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              DRIFTER, wise in chance meetings, faraway tales, and lay of the land.
            </Table.Cell>
            <Table.Cell>explorer, vagabond</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              ENTERTAINER, wise in legends and tales, crowd behaviors, and stage presence.
            </Table.Cell>
            <Table.Cell>storyteller, minstrel</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              ECCENTRIC, wise in hard truths, random facts, and strange snacks.
            </Table.Cell>
            <Table.Cell>hermit, recluse</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              HEALER, wise in comfort foods, signs of ailment, and herbal properties.
            </Table.Cell>
            <Table.Cell>chirurgeon, herbalist</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>HUNTER, wise in survival, tracks, and wildlife behavior.</Table.Cell>
            <Table.Cell>pathfinder, trapper</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              MARINER, wise in nautical lore, seafaring, and weather patterns.
            </Table.Cell>
            <Table.Cell>pirate, sailor</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>MYSTIC, wise in ancient prophecies, leylines, and symbology.</Table.Cell>
            <Table.Cell>occultist, seer</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>NOBLE, wise in diplomacy, influential contacts, and luxuries.</Table.Cell>
            <Table.Cell>aristocrat, diplomat</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>RAGAMUFFIN, wise in hidden paths, rumors, and street smarts.</Table.Cell>
            <Table.Cell>cutpurse, urchin</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              SAGE, wise in ancient histories, peoples of the world, and philosophy.
            </Table.Cell>
            <Table.Cell>lorekeeper, scholar</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              SCOUNDREL, wise in escape routes, signs of weakness, and shady connections.
            </Table.Cell>
            <Table.Cell>brigand, thief</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              TRADER, wise in cultural tastes, people's desires, and rare goods.
            </Table.Cell>
            <Table.Cell>merchant, peddler</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              WARRIOR, wise in battle plans, military contacts, and war stories.
            </Table.Cell>
            <Table.Cell>sellsword, soldier</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Text>HERITAGE</Text>
      <Text>
        Heritage reflects your culture, ancestry, and homeland. Use the Heritage Crucible below for
        inspiration: roll three words, pick two, and combine them. You can interpret these words
        literally or figuratively, or use them as they are.
      </Text>
      <Text>
        Once you set your heritage, give it three wises. The backgrounds (previous page) can serve
        as inspiration. These wises reflect traits commonly shared by most people from your
        heritage. This continues throughout the game as you figure out more about your people
        through play. In short, you know what the Orcs of the Verdant Boglands are like because you
        are one!
      </Text>
      <Text>
        HERITAGE TALENT: Some heritages have innate capabilities beyond their wises. You can link
        the second talent at character creation to your heritage, or work with the GM to create one.
        This makes it a common trait amongst your people.
      </Text>
      <List variant="ordered">
        <List.Item>
          The Turtlefolk have a thick shell, represented with the Bulwark talent.
        </List.Item>
        <List.Item>The Birdfolk can fly, so you create a talent to represent it.</List.Item>
        <List.Item>
          The Halflings of the Great Caverns can see in total darkness, so you create a talent.
        </List.Item>
      </List>
      <Text>
        If something isn't strong enough to warrant a talent, work with the GM to add it in as set
        dressing—a bit of flavor, but can't be relied upon to impact scenes.
      </Text>
      <Text>HERITAGE CRUCIBLE</Text>
      <Text>Roll 1 of each, choose 2 or 3, then interpret the results.</Text>
      <Text>FOLK</Text>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>d66</Table.HeaderCell>
            <Table.HeaderCell>1</Table.HeaderCell>
            <Table.HeaderCell>2</Table.HeaderCell>
            <Table.HeaderCell>3</Table.HeaderCell>
            <Table.HeaderCell>4</Table.HeaderCell>
            <Table.HeaderCell>5</Table.HeaderCell>
            <Table.HeaderCell>6</Table.HeaderCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>Vagrants</Table.Cell>
            <Table.Cell>Riders</Table.Cell>
            <Table.Cell>Gnomes</Table.Cell>
            <Table.Cell>Dwarves</Table.Cell>
            <Table.Cell>Nomads</Table.Cell>
            <Table.Cell>Elves</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>Birdfolk</Table.Cell>
            <Table.Cell>Clans</Table.Cell>
            <Table.Cell>Pilgrims</Table.Cell>
            <Table.Cell>Tieflings</Table.Cell>
            <Table.Cell>Cityfolk</Table.Cell>
            <Table.Cell>Orcs</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>3</Table.Cell>
            <Table.Cell>Wayfarers</Table.Cell>
            <Table.Cell>Seafarers</Table.Cell>
            <Table.Cell>Turtlefolk</Table.Cell>
            <Table.Cell>Goliaths</Table.Cell>
            <Table.Cell>Humans</Table.Cell>
            <Table.Cell>Forestfolk</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>4</Table.Cell>
            <Table.Cell>Goblins</Table.Cell>
            <Table.Cell>Tribes</Table.Cell>
            <Table.Cell>Citizens</Table.Cell>
            <Table.Cell>Dragonborn</Table.Cell>
            <Table.Cell>Halflings</Table.Cell>
            <Table.Cell>Cavefolk</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>5</Table.Cell>
            <Table.Cell>Islanders</Table.Cell>
            <Table.Cell>Keepers</Table.Cell>
            <Table.Cell>Marauders</Table.Cell>
            <Table.Cell>Tradesfolk</Table.Cell>
            <Table.Cell>Merchants</Table.Cell>
            <Table.Cell>Raiders</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>6</Table.Cell>
            <Table.Cell>Fisherfolk</Table.Cell>
            <Table.Cell>Settlers</Table.Cell>
            <Table.Cell>Carvers</Table.Cell>
            <Table.Cell>Valleyfolk</Table.Cell>
            <Table.Cell>Skywatchers</Table.Cell>
            <Table.Cell>Outcasts</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Line />
      <Text>MOOD</Text>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>d66</Table.HeaderCell>
            <Table.HeaderCell>1</Table.HeaderCell>
            <Table.HeaderCell>2</Table.HeaderCell>
            <Table.HeaderCell>3</Table.HeaderCell>
            <Table.HeaderCell>4</Table.HeaderCell>
            <Table.HeaderCell>5</Table.HeaderCell>
            <Table.HeaderCell>6</Table.HeaderCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>Twisted</Table.Cell>
            <Table.Cell>Lush</Table.Cell>
            <Table.Cell>Scorched</Table.Cell>
            <Table.Cell>Rolling</Table.Cell>
            <Table.Cell>Abyssal</Table.Cell>
            <Table.Cell>Feral</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>Steel</Table.Cell>
            <Table.Cell>Floating</Table.Cell>
            <Table.Cell>Echoing</Table.Cell>
            <Table.Cell>Bountiful</Table.Cell>
            <Table.Cell>Desolate</Table.Cell>
            <Table.Cell>Serene</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>3</Table.Cell>
            <Table.Cell>Verdant</Table.Cell>
            <Table.Cell>Crimson</Table.Cell>
            <Table.Cell>Misty</Table.Cell>
            <Table.Cell>Great</Table.Cell>
            <Table.Cell>Rocky</Table.Cell>
            <Table.Cell>Whispering</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>4</Table.Cell>
            <Table.Cell>Golden</Table.Cell>
            <Table.Cell>Shattered</Table.Cell>
            <Table.Cell>Glimmering</Table.Cell>
            <Table.Cell>Sunken</Table.Cell>
            <Table.Cell>Windswept</Table.Cell>
            <Table.Cell>Grim</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>5</Table.Cell>
            <Table.Cell>Emerald</Table.Cell>
            <Table.Cell>Haunted</Table.Cell>
            <Table.Cell>Distant</Table.Cell>
            <Table.Cell>Coastal</Table.Cell>
            <Table.Cell>Howling</Table.Cell>
            <Table.Cell>Prosperous</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>6</Table.Cell>
            <Table.Cell>Burning</Table.Cell>
            <Table.Cell>Enchanted</Table.Cell>
            <Table.Cell>Silent</Table.Cell>
            <Table.Cell>Gloomy</Table.Cell>
            <Table.Cell>Eternal</Table.Cell>
            <Table.Cell>Restless</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Line />
      <Text>LAND</Text>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>d66</Table.HeaderCell>
            <Table.HeaderCell>1</Table.HeaderCell>
            <Table.HeaderCell>2</Table.HeaderCell>
            <Table.HeaderCell>3</Table.HeaderCell>
            <Table.HeaderCell>4</Table.HeaderCell>
            <Table.HeaderCell>5</Table.HeaderCell>
            <Table.HeaderCell>6</Table.HeaderCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>Peaks</Table.Cell>
            <Table.Cell>Kingdom</Table.Cell>
            <Table.Cell>Desert</Table.Cell>
            <Table.Cell>Plains</Table.Cell>
            <Table.Cell>Sea</Table.Cell>
            <Table.Cell>Glaciers</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>Confederacy</Table.Cell>
            <Table.Cell>Wilds</Table.Cell>
            <Table.Cell>Canyons</Table.Cell>
            <Table.Cell>North</Table.Cell>
            <Table.Cell>Meadows</Table.Cell>
            <Table.Cell>Sands</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>3</Table.Cell>
            <Table.Cell>Fjords</Table.Cell>
            <Table.Cell>Marsh</Table.Cell>
            <Table.Cell>Highlands</Table.Cell>
            <Table.Cell>Moors</Table.Cell>
            <Table.Cell>Outposts</Table.Cell>
            <Table.Cell>Wastelands</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>4</Table.Cell>
            <Table.Cell>Coast</Table.Cell>
            <Table.Cell>Isles</Table.Cell>
            <Table.Cell>Caverns</Table.Cell>
            <Table.Cell>Ruins</Table.Cell>
            <Table.Cell>Cliffs</Table.Cell>
            <Table.Cell>Coalition</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>5</Table.Cell>
            <Table.Cell>Badlands</Table.Cell>
            <Table.Cell>Thickets</Table.Cell>
            <Table.Cell>Fenlands</Table.Cell>
            <Table.Cell>Hollows</Table.Cell>
            <Table.Cell>Boomtown</Table.Cell>
            <Table.Cell>Blightlands</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>6</Table.Cell>
            <Table.Cell>Boglands</Table.Cell>
            <Table.Cell>Jungletown</Table.Cell>
            <Table.Cell>Borderlands</Table.Cell>
            <Table.Cell>Underworld</Table.Cell>
            <Table.Cell>Riverlands</Table.Cell>
            <Table.Cell>Groves</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <List variant="ordered">
        <List.Item>
          ELVES OF BOOMTOWN, wise in alchemicals, trade contacts, and tales of far lands.
        </List.Item>
        <List.Item>
          CITYFOLK OF THE SERENE KINGDOM, wise in cultural tastes, signs of sin, and rare goods.
        </List.Item>
        <List.Item>
          VAGRANTS OF THE BURNING BARRENS, wise in comfort foods, survival, and war stories.
        </List.Item>
      </List>
      <Text>
        EVOLVING BACKGROUNDS: Backgrounds can evolve as the story unfolds. Start with a simple name
        and leave room for growth as your backstory is revealed. Don't corner your character growth
        before starting. You might start as a Mariner, refine it to Pirate, then expand on it to
        Blackthorn Reaver or First Mate under Captain Stormclaw as it comes up in the story. Or you
        can just keep it simple!
      </Text>
      <Heading level={2}>Paths &amp; Talents</Heading>
      <Text>
        The remainder of this chapter details the 12 adventurer paths available in the game. Below,
        you'll find explanations of common options and terms used throughout the paths. These
        clarifications help you better understand how to customize your character and make use of
        talents.
      </Text>
      <List variant="ordered">
        <List.Item>
          Core Growth: Your core talent powers up as you level. For “every 2 levels,” gain bonuses
          at levels 2, 4, 6. For “every 3 levels,” it's 3, 6. Remember that 7 is the maximum level.
        </List.Item>
        <List.Item>
          Cross-Path Talents: You're free to choose talents from other paths if they fit your char
          acter's story. Just explain how your character picked up these skills—it's a great way to
          add depth to your character.
        </List.Item>
        <List.Item>
          Re-Skin Talents: To avoid redundancy, similar talents across paths have been avoided.
          Instead, you're encouraged to “re-skin” talents to fit your character's theme. For
          example, the Bulwark (armor) talent could be reinterpreted as a magical mage shield for a
          wizard.
        </List.Item>
        <List.Item>
          Push Yourself: Some talents require you to push yourself to activate. These talents can be
          activated once per session for free. After the first use, you must push yourself as normal
          to activate it again, marking a relevant stat. Choose your moments wisely.
        </List.Item>
        <List.Item>
          “When Given Time”: This phrase included in several talents means you need time to do what
          the talent lets you, but how long that is leaves room for interpretation. Go with what
          makes sense, but at the very least it's a narrative beat, a PC action, or some time
          unhindered by disruptive forces. Use story rolls or group consensus to decide what counts.
        </List.Item>
        <List.Item>
          “Always”: When a talent includes this specific wording, it means you have narrative
          permission to almost always do what's indicated. However, this can be stopped by a GM
          COunter move. It's best to think that “always” means 95% of the time.
        </List.Item>
        <List.Item>
          Choices: Italicized words separated by em dashes represent lists of choices, like: one—
          two—three. These represent a limited amount of options you must choose from. If instead a
          talent suggests a type of choice, saying “you can do things like A and B”, then you can
          extrapolate that out into other similar actions.
        </List.Item>
        <List.Item>
          On a Perfect: Any talent that allows you to do something on a perfect, it also triggers on
          a critical.
        </List.Item>
        <List.Item>
          Optional Character Building: Some paths include additional character-building fea tures,
          marked with an [Optional] tag. If they're not relevant to your character, you can pass
          them up.
        </List.Item>
        <List.Item>
          Roleplaying Advice: Some paths include advice on roleplaying that character path,
          especially on parts that might be somewhat unfamiliar. It's entirely optional, but if they
          resonate with you, lean into them to make those aspects important in the game.
        </List.Item>
      </List>
      <Text>
        In Chapter 7: Extras, you can also find a large list of distinctive features to choose from
        to help flesh out your characters, as well as party-building questions that help link
        together characters' backstories and add depth to their relationships.
      </Text>
      <Heading level={2}>Bard</Heading>
      <Text>ALSO: Minstrel, Orator, Warlord</Text>
      <Text>
        You spin tales and songs that stir emotions, inspire bravery, and turn simple deeds into
        legends.
      </Text>
      <blockquote>
        <Text>BARDSONG (CORE TALENT)</Text>
        <Text>
          Each session, you can sing 3 bardsongs, rolling Presence. Sing one to pull off a potent
          feat of emotional influence, like eliciting a vex response in an NPC, buffing a group of
          allies, or inflicting hindrances on enemies. You can also sing one to interrupt an impact
          move. A bardsong's effect flows from its composition. Choose a style, tune, and impact
          (below) that matches the effect.
        </Text>
        <Text>
          Each session, you can also sing 3 melodies, spur of the moment tunes without specific
          composition. Spend them to: assist without risk—calm or intensify a vex response—clear a
          mark. These don't require a roll. You cannot affect yourself.
        </Text>
        <Line />
        <Text>GROWTH: Every 3 levels, gain +1 bardsong and +1 melody per session.</Text>
      </blockquote>
      <Text>SONG COMPOSITION</Text>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>STYLE</Table.HeaderCell>
            <Table.HeaderCell>(+) TUNE</Table.HeaderCell>
            <Table.HeaderCell>(of) IMPACT</Table.HeaderCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>chaotic</Table.Cell>
            <Table.Cell>anthem</Table.Cell>
            <Table.Cell>affection</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>dire</Table.Cell>
            <Table.Cell>aria</Table.Cell>
            <Table.Cell>awe</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>fiery</Table.Cell>
            <Table.Cell>ballad</Table.Cell>
            <Table.Cell>calm</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>gentle</Table.Cell>
            <Table.Cell>chant</Table.Cell>
            <Table.Cell>despair</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>haunting</Table.Cell>
            <Table.Cell>ditty</Table.Cell>
            <Table.Cell>fear</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>playful</Table.Cell>
            <Table.Cell>hymn</Table.Cell>
            <Table.Cell>fury</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>nostalgic</Table.Cell>
            <Table.Cell>ode</Table.Cell>
            <Table.Cell>hope</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>rousing</Table.Cell>
            <Table.Cell>requiem</Table.Cell>
            <Table.Cell>joy</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>vicious</Table.Cell>
            <Table.Cell>rhapsody</Table.Cell>
            <Table.Cell>mockery</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>whimsical</Table.Cell>
            <Table.Cell>serenade</Table.Cell>
            <Table.Cell>wonder</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <blockquote>
        <Text>STYLE</Text>
        <Text>How you feel when you're singing the song.</Text>
      </blockquote>
      <blockquote>
        <Text>TUNE</Text>
        <Text>A familiar form that anyone can recognize.</Text>
      </blockquote>
      <blockquote>
        <Text>IMPACT</Text>
        <Text>How you want the song to make them feel.</Text>
      </blockquote>
      <Text>
        Below are some example compositions and how potent feats of emotional influence can be
        brought into play:
      </Text>
      <List variant="ordered">
        <List.Item>
          Haunting Requiem of Fear: The villagers abandon their homes, terrified of shadows that
          aren't there.
        </List.Item>
        <List.Item>
          Playful Ballad of Joy: A tense negotiation dissolves into laughter, everyone suddenly
          sharing joyful stories.
        </List.Item>
        <List.Item>
          Whimsical Serenade of Wonder: The towering golem halts, transfixed by the sudden beauty of
          a flower.
        </List.Item>
        <List.Item>
          Dire Chant of Despair: The dragon, mid-flight, veers away in terror, retreating to its
          lair in panic.
        </List.Item>
        <List.Item>
          Fiery Anthem of Fury: A normally docile treant uproots itself, thrashing wildly, lashing
          out at all nearby.
        </List.Item>
        <List.Item>
          Nostalgic Ode of Hope: War-weary soldiers rally, tears flowing, as they march against
          impossible odds.
        </List.Item>
        <List.Item>
          Chaotic Hymn of Mockery: The proud king stumbles, embarrassed, as the crowd laughs
          uncontrollably.
        </List.Item>
        <List.Item>
          Rousing Rhapsody of Affection: The rampaging dire wolf stops and nuzzles someone nearby,
          tail wagging.
        </List.Item>
        <List.Item>
          Gentle Anthem of Calm: The hydra lowers its heads, each one slowly settling into peaceful
          slumber.
        </List.Item>
        <List.Item>
          Vicious Ditty of Fury: A tavern erupts in wanton destruction, patrons consumed by primal
          rage.
        </List.Item>
      </List>
      <Text>BARD TALENTS</Text>
      <Text>BARDIC LORE</Text>
      <Text>
        You gain any 3 wises and 1 extra story per session. You take +1d on any story rolls
        pertaining to what you know or story details you add.
      </Text>
      <Text>DYNAMIC ENTRANCE</Text>
      <Text>
        You can always appear in a scene anywhere and anytime, limited only by your physical
        capabilities. Make a 3d story roll to Set the Scene for your entrance.
      </Text>
      <Text>FORKED TONGUE</Text>
      <Text>
        When given time, you can tell potent lies like telling the king you're their bastard or a
        prophecy foretelling the fall of the capital. You can push yourself to do it on the spot.
      </Text>
      <Text>FRIENDLY FACE</Text>
      <Text>
        In any new town or district of a city you go to, you can always: get recognized by a
        fan—know someone useful—quickly make a friend. They'll gladly do you a reasonable favor.
        Take spark if you promise to pay them back.
      </Text>
      <Text>INFLUENCE</Text>
      <Text>
        Twice per session, you can invoke an ally's bond with you to increase their die roll result
        by 1 (3→4). You don't have to be in the same scene—they might recall a memory.
      </Text>
      <Text>JACK OF ALL TRADES</Text>
      <Text>Increase one of your stats that's a 1 to a 2. You also take +1d on montage rolls.</Text>
      <blockquote>
        <Text>WORDPLAY</Text>
        <Text>
          On a perfect defense roll when the situation allows for verbal quips, you make them:
          embarrass themself—let a secret slip—focus on or lose track of you. Once per session, you
          can goad the GM into spending suspense on conversation.
        </Text>
        <Text>
          BARDIC INSTRUMENTS(S) [ADVICE]: Your instrument or instruments are an important part of
          what makes you a bard. Weave them into scenes when you can. Try to find an instrument that
          both matches your PC's personality and can work in many scenes.
        </Text>
        <Table>
          <Table.Head>
            <Table.Row>
              <Table.HeaderCell>String</Table.HeaderCell>
              <Table.HeaderCell>Wind</Table.HeaderCell>
              <Table.HeaderCell>Percussion</Table.HeaderCell>
              <Table.HeaderCell>Brass</Table.HeaderCell>
              <Table.HeaderCell>Other</Table.HeaderCell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell>lute</Table.Cell>
              <Table.Cell>harp</Table.Cell>
              <Table.Cell>lyre</Table.Cell>
              <Table.Cell>mandolin</Table.Cell>
              <Table.Cell>fiddle</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>flute</Table.Cell>
              <Table.Cell>bagpipes</Table.Cell>
              <Table.Cell>recorder</Table.Cell>
              <Table.Cell>oboe</Table.Cell>
              <Table.Cell>pan flute</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>trumpet</Table.Cell>
              <Table.Cell>trombone</Table.Cell>
              <Table.Cell>french horn</Table.Cell>
              <Table.Cell>cornett</Table.Cell>
              <Table.Cell>bugle</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>singing</Table.Cell>
              <Table.Cell>chanting</Table.Cell>
              <Table.Cell>whistling</Table.Cell>
              <Table.Cell>storytelling</Table.Cell>
              <Table.Cell>dancing</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>tambourine</Table.Cell>
              <Table.Cell>hand drum</Table.Cell>
              <Table.Cell>tabor</Table.Cell>
              <Table.Cell>cymbals</Table.Cell>
              <Table.Cell>bongos</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </blockquote>
      <Heading level={2}>Berserker</Heading>
      <Text>ALSO: Juggernaut, Reaver, Warbringer</Text>
      <Text>
        You don't just fight—you crush anything and everything in your path until nothing stands
        before you.
      </Text>
      <blockquote>
        <Text>FRENZY (CORE TALENT)</Text>
        <Text>
          Once per session, or when you get bloodied or take vex, you can enter a frenzy for a
          scene. During the frenzy, you can only take aggressive actions. You also:
        </Text>
        <List variant="ordered">
          <List.Item>
            Take +1d for each mark you have and ignore all thorns from harm and marks.
          </List.Item>
          <List.Item>
            Inflict collateral damage on each action roll, regardless of the outcome. You must
            choose one: send something flying—smash mooks—throw insults—wreck something.
          </List.Item>
          <List.Item>
            Always get a final action when dropped. On a critical, ignore getting dropped.
          </List.Item>
        </List>
        <Text>
          You can only exit a frenzy when no challenger stands before you, you get dropped, or you
          push yourself to calm down.
        </Text>
        <Line />
        <Text>GROWTH: Every 3 levels, gain 1 free activation of this per session.</Text>
      </blockquote>
      <Text>FRENZY SOURCE [OPTIONAL]</Text>
      <Text>
        Where does your wild power and ability to withstand pain come from? Choose 2 and smash them
        together to form the source and 1 that you have disdain for.
      </Text>
      <List variant="ordered">
        <List.Item>Ritualistic preparation</List.Item>
        <List.Item>Trained tolerance to pain</List.Item>
        <List.Item>Long consumption of strange substances</List.Item>
        <List.Item>Drawing power from ancestral spirits</List.Item>
        <List.Item>Drawing primal power from the wild</List.Item>
        <List.Item>Channeling memories you'll never forget</List.Item>
        <List.Item>Visions of horrific or heroic scenes</List.Item>
        <List.Item>Deep meditative focus</List.Item>
        <List.Item>Blood pact with a kindred force</List.Item>
        <List.Item>Countless battles, countless injuries</List.Item>
        <List.Item>Binding your spirit to a physical totem</List.Item>
        <List.Item>You really don't know why you're like this</List.Item>
      </List>
      <Text>SCARS [OPTIONAL]</Text>
      <Text>
        Your ability to ignore pain has led you to take far more damage than most warriors. What
        scars do you bear that show your reckless nature? Choose 3 that you can show off.
      </Text>
      <List variant="ordered">
        <List.Item>Crookedly broken nose</List.Item>
        <List.Item>Web of deep cut scars</List.Item>
        <List.Item>Permanently split knuckles</List.Item>
        <List.Item>Empty eye socket</List.Item>
        <List.Item>Smashed teeth</List.Item>
        <List.Item>Cauliflower ears</List.Item>
        <List.Item>Wild, ripped hair</List.Item>
        <List.Item>Muscles knotted like iron</List.Item>
        <List.Item>Several missing fingers</List.Item>
        <List.Item>Jagged burn lines</List.Item>
        <List.Item>Gouged claw marks</List.Item>
        <List.Item>Runic scarring from magic</List.Item>
        <List.Item>Torn earlobe or eartips</List.Item>
        <List.Item>Deep, cauterized wound</List.Item>
        <List.Item>Cracked jawline</List.Item>
        <List.Item>Crushed foot</List.Item>
        <List.Item>Busted in skull</List.Item>
        <List.Item>Not a scratch on you</List.Item>
      </List>
      <Text>BERSERKER TALENTS</Text>
      <Text>FEARSOME</Text>
      <Text>
        Your presence instills fear in others. The GM judges an NPC's response, or you can spend
        story to set it: hostile—nervous—respectful—scared. You can push yourself to pull off a
        potent feat of intimidation, like staring down a dragon or demanding to see the king.
      </Text>
      <Text>FLESH WOUNDS</Text>
      <Text>
        When you take physical damage, only a disaster can drop you. You can get bloodied multiple
        times. Each extra time inflicts +1t on rolls. These extra thorns can never be ignored (e.g.,
        Frenzy and Oathsworn talents) and they also apply thorns to any attempt to heal you.
      </Text>
      <Text>INTO THE FRAY</Text>
      <Text>
        When you're the first into an intense situation, 5s count as 6s, but 4s count as 1s on your
        first roll. You also setup the first person following you regardless of your roll outcome.
      </Text>
      <Text>JOYFUL WARRIOR</Text>
      <Text>
        On a critical or when bloodied in battle, you take spark and can: clear one mark from each
        ally—bring a dropped (not dead) ally back into the scene.
      </Text>
      <Text>MIGHTY</Text>
      <Text>
        When given time, you can pull off potent feats of raw strength, like uprooting a tree or
        breaking through a castle gate. You can push yourself to do it on the spot.
      </Text>
      <Text>OVERKILL</Text>
      <Text>
        On a critical when bringing violence, threats, or destruction to bear, you can: cause an
        extra secondary effect—roll a task pool twice.
      </Text>
      <Text>Warsongs [PROHIBITED: BARD]</Text>
      <Text>
        Each session, you can sing 2 bardsongs (pg. 54). Write down the composition of the only 3
        songs you know.
      </Text>
      <Heading level={2}>Cleric</Heading>
      <Text>ALSO: Priest, Zealot, Chosen One</Text>
      <Text>
        You serve as a conduit for the divine, channeling holy power to safeguard the faithful and
        do your god's bidding.
      </Text>
      <blockquote>
        <Text>CHANNEL DIVINITY (CORE TALENT)</Text>
        <Text>
          Your god grants you spellcasting ability. You roll a domain pool to cast and that domain
          pool and your god's epithet serve as touchstones.
        </Text>
        <Text>
          Create your god (below). You have 1 major domain, a 6d power pool, and 2 minor domains,
          each a 4d power pool. These pools replenish each session. You can drop 1d and roll the
          domain to cast a potent spell.
        </Text>
        <Line />
        <Text>GROWTH: Every 2 levels, increase one domain pool by 1d (max 8d).</Text>
      </blockquote>
      <Text>CREATE YOUR GOD</Text>
      <Text>
        Create your god by naming them and giving them a thematic epithet (e.g., Zerenda, Goddess of
        Storms). You are expected to follow its tenets, though not a strict requirement. Choose 1
        major domain and 2 minor domains from below, or make your own:
      </Text>
      <List variant="ordered">
        <List.Item>
          <Text>BLESSING • Enhance with buffs, provide utility, and bring good fortune.</Text>
          <List variant="ordered">
            <List.Item>
              Tenets: Pick up the weak and vulnerable. Create happiness when none exists.
            </List.Item>
            <List.Item>
              Magic: Bless a battlehammer. Walk on water. Fill the forlorn duke's heart with hope.
            </List.Item>
          </List>
        </List.Item>
        <List.Item>
          <Text>DIVINATION • Unveil secrets, provide foresight, and commune with spirits.</Text>
          <List variant="ordered">
            <List.Item>
              Tenets: Uncover and share hidden truths. Respect and act on divine signs.
            </List.Item>
            <List.Item>
              Magic: Find a safe path. Reveal where the thief is hiding. Know tomorrow's weather.
            </List.Item>
          </List>
        </List.Item>
        <List.Item>
          <Text>DOMINION • Influence, command, and control sentient creatures.</Text>
          <List variant="ordered">
            <List.Item>
              Tenets: Enforce peace and stability. Inspire others through your actions.
            </List.Item>
            <List.Item>
              Magic: Convince someone to help you. Make someone forget something. Calm an angry mob.
            </List.Item>
          </List>
        </List.Item>
        <List.Item>
          <Text>HEALING • Heal wounds, cure diseases, and wash away mental anguish.</Text>
          <List variant="ordered">
            <List.Item>
              Tenets: Bring healing to those truly in need. Comfort the distressed.
            </List.Item>
            <List.Item>
              Magic: Heal a broken bone. Relieve someone of stress. Stop the bleeding.
            </List.Item>
          </List>
        </List.Item>
        <List.Item>
          <Text>RADIANCE • Dispel darkness with light and purge evil with holy fire.</Text>
          <List variant="ordered">
            <List.Item>
              Tenets: Burn out corruption at its source. Point out the error in someone's ways.
            </List.Item>
            <List.Item>
              Magic: Cauterize a wound. Destroy a skeleton. Reveal an invisible enemy.
            </List.Item>
          </List>
        </List.Item>
        <List.Item>
          <Text>WARDING • Provide protection and defense for those in need.</Text>
          <List variant="ordered">
            <List.Item>
              Tenets: Protect those who cannot defend themselves &amp; strengthen communities.
            </List.Item>
            <List.Item>
              Magic: Shield an ally from harm. Block a doorway. Create sentries.
            </List.Item>
          </List>
        </List.Item>
        <List.Item>
          <Text>WRATH • Inflict damage and curses upon those deserving.</Text>
          <List variant="ordered">
            <List.Item>
              Tenets: Deliver punishment to those deserving it, keeping your mercy for the rare few
              worth saving.
            </List.Item>
            <List.Item>
              Magic: Shatter the killer's weapon. Blind a traitor. Curse a thief with misfortune.
            </List.Item>
          </List>
        </List.Item>
      </List>
      <Text>CLERIC TALENTS</Text>
      <Text>BLESSED</Text>
      <Text>
        Once per session, you can re-roll a roll you just made as your god attempts to intervene.
        The re-roll is made without any thorns on it. On a perfect, take spark.
      </Text>
      <Text>DEVOUT</Text>
      <Text>
        Intelligent creatures recognize you as a person of deep honesty and only your most hated
        enemies would treat you with a lack of respect or doubt your word. You are never seriously
        injured or killed by an enemy, unless they have no choice. Any creature with speech will
        always hear you out. This aura is upheld by your unwavering commitment—you must push
        yourself to act in bad faith (no free activation).
      </Text>
      <Text>HEALER</Text>
      <Text>
        You take +1d when you heal someone, with magic or treatment. On a critical, both of you take
        spark.
      </Text>
      <Text>IRON WILL</Text>
      <Text>
        Each session, you have a 3d Iron Will resource pool. When you get rattled or take vex, roll
        the pool. If dice remain, ignore the damage. If the situation allows for it, you can also
        lash out at the cause or a bystander and: instill dread in their heart—sow doubt in their
        mind.
      </Text>
      <Text>RINGS FALSE</Text>
      <Text>
        You always know when someone is lying, though not necessarily the truth. You take +1d on a
        follow-up if you reveal you know they're lying.
      </Text>
      <Text>SERMONS</Text>
      <Text>
        When given time, you can pull off potent feats of persuasion in the name of your beliefs,
        like commanding a crowd to bring the duke for judgment or showing the goblins the glory of
        your god. You can also push yourself to do it on the spot. One time only, you can make this
        a ritual-level effect.
      </Text>
      <Text>SHEPHERD</Text>
      <Text>
        When you assist an ally on a defense roll that would leave them rattled or with vex, you can
        invoke your bond to take +1d on the roll. On a perfect, you both take spark.
      </Text>
      <blockquote>
        <Text>
          HOLY SYMBOL [ADVICE]: Deities and the religions that grow around them will almost
          universally express their following with a recognizable symbol. Draw your own on your
          sheet using those below as inspiration, or choose one of these!
        </Text>
      </blockquote>
      <Heading level={2}>Druid</Heading>
      <Text>ALSO: Shapeshifter, Grovekeeper, Wildling</Text>
      <Text>
        You embrace and embody the untamed power of the natural world, transforming into beasts and
        channeling the spirit of the wild.
      </Text>
      <blockquote>
        <Text>WILD SHAPE (CORE TALENT)</Text>
        <Text>
          You can shift into the form of any beast you're familiar with. You have a 4d Wild Shape
          resource pool, rolled when you shift—at 0d, you fail to turn into that form. The pool
          replenishes after each scene.
        </Text>
        <Text>
          You take on the form's physical qualities and feral instincts. Move your stat points
          around to represent this, with a min. of 1 and max. of 3 in a stat. You lose access to any
          talent related to your own physical form.
        </Text>
        <Text>
          Some forms are more difficult to shift into. For each wild talent (max 2) a form has, drop
          1d from the pool before rolling it. These are things like aquatic, smaller than a cat,
          bigger than a bear, venomous, and flight. It can also be a specific talent from a path, or
          anything that would require a heritage talent. The GM judges the gray zone.
        </Text>
        <Line />
        <Text>GROWTH: Every 2 levels, increase your Wild Shape pool by 1d.</Text>
      </blockquote>
      <Text>DRUIDIC TELLS [OPTIONAL]</Text>
      <Text>
        Druids often exhibit tells—sometimes several—that reflect their deep connection with nature,
        such as animalistic traits or plant-like appearances. Even in a fantasy world, someone so
        attuned to nature is bound to attract attention, offering potential new vantage, outside
        assistance, or even opportunities for tangles. Below are some ideas for features:
      </Text>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>d66</Table.HeaderCell>
            <Table.HeaderCell>1</Table.HeaderCell>
            <Table.HeaderCell>2</Table.HeaderCell>
            <Table.HeaderCell>3</Table.HeaderCell>
            <Table.HeaderCell>4</Table.HeaderCell>
            <Table.HeaderCell>5</Table.HeaderCell>
            <Table.HeaderCell>6</Table.HeaderCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>thorns</Table.Cell>
            <Table.Cell>blossoming</Table.Cell>
            <Table.Cell>feathered</Table.Cell>
            <Table.Cell>bristled</Table.Cell>
            <Table.Cell>roots</Table.Cell>
            <Table.Cell>fluffy</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>moss</Table.Cell>
            <Table.Cell>bark</Table.Cell>
            <Table.Cell>earthen</Table.Cell>
            <Table.Cell>hoofed</Table.Cell>
            <Table.Cell>vibrant</Table.Cell>
            <Table.Cell>silken</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>3</Table.Cell>
            <Table.Cell>vines</Table.Cell>
            <Table.Cell>glowing</Table.Cell>
            <Table.Cell>translucent</Table.Cell>
            <Table.Cell>tangled</Table.Cell>
            <Table.Cell>crystalline</Table.Cell>
            <Table.Cell>smoky</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>4</Table.Cell>
            <Table.Cell>tusked</Table.Cell>
            <Table.Cell>velvet</Table.Cell>
            <Table.Cell>murky</Table.Cell>
            <Table.Cell>speckled</Table.Cell>
            <Table.Cell>verdant</Table.Cell>
            <Table.Cell>willowy</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>5</Table.Cell>
            <Table.Cell>shimmering</Table.Cell>
            <Table.Cell>antlered</Table.Cell>
            <Table.Cell>ashen</Table.Cell>
            <Table.Cell>spiny</Table.Cell>
            <Table.Cell>gnarled</Table.Cell>
            <Table.Cell>fragrant</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>6</Table.Cell>
            <Table.Cell>scaly</Table.Cell>
            <Table.Cell>longtoothed</Table.Cell>
            <Table.Cell>dewy</Table.Cell>
            <Table.Cell>breezy</Table.Cell>
            <Table.Cell>misty</Table.Cell>
            <Table.Cell>petals</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Text>WILD TALENTS [EXAMPLES]</Text>
      <Text>
        Below are some examples of beasts that have wild talents. Already existing talents are
        listed with a page number reference. Others are made for that beast.
      </Text>
      <List variant="ordered">
        <List.Item>Chimpanzee: Relentless (pg. 69)</List.Item>
        <List.Item>Wolf: Keen Senses (pg. 69)</List.Item>
        <List.Item>Rhino: Bulwark (pg. 63)</List.Item>
        <List.Item>Octopus: Shape &amp; color mimicking</List.Item>
        <List.Item>Cheetah: Incredibly fast sprinting.</List.Item>
        <List.Item>Bear: Mighty (pg. 57)</List.Item>
        <List.Item>Eagle: Flight</List.Item>
        <List.Item>Snake: Poisoner (pg. 71)</List.Item>
        <List.Item>Lion: Fearsome (pg. 57)</List.Item>
        <List.Item>Dolphin: Fast swimmer</List.Item>
        <List.Item>Crocodile: Swamp camouflage</List.Item>
        <List.Item>Honey Badger: Iron Will (pg. 59)</List.Item>
      </List>
      <Text>DRUID TALENTS</Text>
      <Text>AWAKEN</Text>
      <Text>
        Once per scene, you may awaken a living natural feature—plants, animals, insects, fungi, or
        the like—within or nearby the scene. It gains awareness and purpose, forming a 3d power pool
        you can direct, guided by its nature. One time only, you can make this a ritual-level
        effect.
      </Text>
      <Text>HERBALISM</Text>
      <Text>
        Before each session, use the Herbalism Crucible to make two herb names (snakeberry,
        blastbane). You have 1 minor potion of one and 1 major potion of the other. The name is the
        touchstone. They lose effect after the session. One time only, you can have 1 mythic potion
        (choose after rolling).
      </Text>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>d66</Table.HeaderCell>
            <Table.HeaderCell>1</Table.HeaderCell>
            <Table.HeaderCell>2</Table.HeaderCell>
            <Table.HeaderCell>3</Table.HeaderCell>
            <Table.HeaderCell>4</Table.HeaderCell>
            <Table.HeaderCell>5</Table.HeaderCell>
            <Table.HeaderCell>6</Table.HeaderCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>choke</Table.Cell>
            <Table.Cell>star</Table.Cell>
            <Table.Cell>sun</Table.Cell>
            <Table.Cell>dream</Table.Cell>
            <Table.Cell>mist</Table.Cell>
            <Table.Cell>zap</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>sticky</Table.Cell>
            <Table.Cell>stone</Table.Cell>
            <Table.Cell>moon</Table.Cell>
            <Table.Cell>feather</Table.Cell>
            <Table.Cell>soot</Table.Cell>
            <Table.Cell>blast</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>3</Table.Cell>
            <Table.Cell>wool</Table.Cell>
            <Table.Cell>dust</Table.Cell>
            <Table.Cell>devil</Table.Cell>
            <Table.Cell>wild</Table.Cell>
            <Table.Cell>freeze</Table.Cell>
            <Table.Cell>blood</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>4</Table.Cell>
            <Table.Cell>smoke</Table.Cell>
            <Table.Cell>snake</Table.Cell>
            <Table.Cell>honey</Table.Cell>
            <Table.Cell>mirror</Table.Cell>
            <Table.Cell>sting</Table.Cell>
            <Table.Cell>ink</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>5</Table.Cell>
            <Table.Cell>shriek</Table.Cell>
            <Table.Cell>mimic</Table.Cell>
            <Table.Cell>goat</Table.Cell>
            <Table.Cell>worm</Table.Cell>
            <Table.Cell>steel</Table.Cell>
            <Table.Cell>skunk</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>6</Table.Cell>
            <Table.Cell>giggle</Table.Cell>
            <Table.Cell>needle</Table.Cell>
            <Table.Cell>night</Table.Cell>
            <Table.Cell>swell</Table.Cell>
            <Table.Cell>faerie</Table.Cell>
            <Table.Cell>dragon</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>d66</Table.HeaderCell>
            <Table.HeaderCell>1</Table.HeaderCell>
            <Table.HeaderCell>2</Table.HeaderCell>
            <Table.HeaderCell>3</Table.HeaderCell>
            <Table.HeaderCell>4</Table.HeaderCell>
            <Table.HeaderCell>5</Table.HeaderCell>
            <Table.HeaderCell>6</Table.HeaderCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>cap</Table.Cell>
            <Table.Cell>lily</Table.Cell>
            <Table.Cell>thistle</Table.Cell>
            <Table.Cell>pod</Table.Cell>
            <Table.Cell>stem</Table.Cell>
            <Table.Cell>petal</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>wort</Table.Cell>
            <Table.Cell>reed</Table.Cell>
            <Table.Cell>bell</Table.Cell>
            <Table.Cell>bud</Table.Cell>
            <Table.Cell>shoot</Table.Cell>
            <Table.Cell>bean</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>3</Table.Cell>
            <Table.Cell>rose</Table.Cell>
            <Table.Cell>flower</Table.Cell>
            <Table.Cell>leaf</Table.Cell>
            <Table.Cell>tongue</Table.Cell>
            <Table.Cell>bark</Table.Cell>
            <Table.Cell>tuber</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>4</Table.Cell>
            <Table.Cell>bush</Table.Cell>
            <Table.Cell>root</Table.Cell>
            <Table.Cell>wood</Table.Cell>
            <Table.Cell>berry</Table.Cell>
            <Table.Cell>funnel</Table.Cell>
            <Table.Cell>vine</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>5</Table.Cell>
            <Table.Cell>shroom</Table.Cell>
            <Table.Cell>spine</Table.Cell>
            <Table.Cell>grass</Table.Cell>
            <Table.Cell>lace</Table.Cell>
            <Table.Cell>moss</Table.Cell>
            <Table.Cell>seed</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>6</Table.Cell>
            <Table.Cell>sprout</Table.Cell>
            <Table.Cell>shade</Table.Cell>
            <Table.Cell>thorn</Table.Cell>
            <Table.Cell>bane</Table.Cell>
            <Table.Cell>branch</Table.Cell>
            <Table.Cell>weed</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Text>
        Note: The Herbalism Crucible was created by June Bloom and used with permission. Thanks!
      </Text>
      <Text>KINDRED SPIRITS</Text>
      <Text>
        You can speak with animals and spirits of the wild, their personalities shaped by their
        instincts. You are known to them—when you meet, roll their bond with you (pg. 14) or spend
        story to establish it. When you call, those nearby will answer.
      </Text>
      <Text>PRIMORDIAL BONDS</Text>
      <Text>
        You have a bond with each of the primordial elements, Air, Earth, Fire, and Water. Roll the
        bonds (pg. 14), then change one to deep. You have spellcasting, rolling Presence to call on
        an element, which serves as the touchstone. You can call on each element once per session,
        or twice if your bond is deep. You can mark two usages of a single element to cast a potent
        spell. You can combine usages of two elements to take +1d and use both as a touchstone.
        Bonds change, for better or worse—pursue great deeds and rituals to deepen them.
      </Text>
      <Text>TRUE SHAPE</Text>
      <Text>
        Choose 1 beast form. If it has no wild talents, you can shift into it without rolling wild
        shape, even at 0d. If it has wild talents, you drop 1d less than normal when you shift.
      </Text>
      <Text>VERDANT WHISPERS</Text>
      <Text>
        You can commune with plants, their personalities as odd and unique as their forms. Roll Wits
        to decipher their messages, as they remember all but speak in ways truly hard to understand.
        You always get a hint or reveal on vigilance in places teeming with plant life.
      </Text>
      <Text>WINDCALLER</Text>
      <Text>
        Your voice carries on the winds over great distances. You can push yourself to summon or
        dismiss, but not control: dense fog—diving temperatures—heavy rain—snowfall—strong winds—
        thunder. You can perform weather rituals without ritual anchors.
      </Text>
      <Heading level={2}>Fighter</Heading>
      <Text>ALSO: Blademaster, Duelist, Sergeant</Text>
      <Text>
        You become one with your weapon, and through it, you find your real purpose in this life.
      </Text>
      <blockquote>
        <Text>WEAPON MASTERY (CORE TALENT)</Text>
        <Text>
          Choose a fighting style that you have mastered: brawling—dual-wielding—one-handed
          weapons—ranged weapons—thrown weapons—two-handed weapons. You have a mastery die, a
          special d6. When you fight in your style, take +1d (the mastery die) on the roll. If the
          mastery die is a 6, it counts as a critical. If it's already a critical, take spark.
        </Text>
        <Line />
        <Text>GROWTH: Every 3 levels, your mastery die increases by +1d.</Text>
      </blockquote>
      <Text>WEAPON ORIGIN [OPTIONAL]</Text>
      <Text>
        For many fighters, their weapon is an important part of their past. Give your weapon some
        character and it will become a character itself in the story. Roll d66 twice on the table
        below to give your weapon, or each of your weapons, its own small story. You can also
        choose, or make up your own.
      </Text>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>d66</Table.HeaderCell>
            <Table.HeaderCell>1</Table.HeaderCell>
            <Table.HeaderCell>2</Table.HeaderCell>
            <Table.HeaderCell>3</Table.HeaderCell>
            <Table.HeaderCell>4</Table.HeaderCell>
            <Table.HeaderCell>5</Table.HeaderCell>
            <Table.HeaderCell>6</Table.HeaderCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>etched with words of loss</Table.Cell>
            <Table.Cell>with an odd word etched into it</Table.Cell>
            <Table.Cell>marked by secret society</Table.Cell>
            <Table.Cell>found in your first dungeon</Table.Cell>
            <Table.Cell>carved with lover's initials</Table.Cell>
            <Table.Cell>stolen from your first job</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>gift from a childhood mentor</Table.Cell>
            <Table.Cell>stitched with parent's pattern</Table.Cell>
            <Table.Cell>marked for each village visited</Table.Cell>
            <Table.Cell>marred with blade nicks</Table.Cell>
            <Table.Cell>stained with coal from a mine</Table.Cell>
            <Table.Cell>embedded with an arrow</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>3</Table.Cell>
            <Table.Cell>telling why you can't return</Table.Cell>
            <Table.Cell>covered in burn marks</Table.Cell>
            <Table.Cell>with hidden compartment</Table.Cell>
            <Table.Cell>made from rare material</Table.Cell>
            <Table.Cell>with a faded family crest</Table.Cell>
            <Table.Cell>peace offering gift</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>4</Table.Cell>
            <Table.Cell>given by your father</Table.Cell>
            <Table.Cell>torn by an animal attack</Table.Cell>
            <Table.Cell>notched each time it saved you</Table.Cell>
            <Table.Cell>with a scratched out insignia</Table.Cell>
            <Table.Cell>taken as spoils of war</Table.Cell>
            <Table.Cell>belonged to a gambler</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>5</Table.Cell>
            <Table.Cell>stolen from a family member</Table.Cell>
            <Table.Cell>stamped with employer's logo</Table.Cell>
            <Table.Cell>worn from long usage</Table.Cell>
            <Table.Cell>picked up during a storm</Table.Cell>
            <Table.Cell>with a best friend's initials</Table.Cell>
            <Table.Cell>patched many times</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>6</Table.Cell>
            <Table.Cell>taken off a dead body</Table.Cell>
            <Table.Cell>etched with a battle prayer</Table.Cell>
            <Table.Cell>inscribed with book quote</Table.Cell>
            <Table.Cell>marked from a lucky escape</Table.Cell>
            <Table.Cell>scratched from fierce battle</Table.Cell>
            <Table.Cell>with directions to a special place</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Text>WEAPON KNOWLEDGE [ADVICE]</Text>
      <Text>
        As a fighter, bring your mastery of battle into play. You've likely trained in various
        weapons and understand their matchups. Weapons don't have specific rules differentiating
        them, but they do carry fictional weight which can impact vantage. Highlight favorable
        matchups or embrace bad ones for interesting tangles. Take spark by accepting the risks or
        retreating from a likely loss.
      </Text>
      <Text>
        You don't need to be a weapon expert—lean into the cinematic. Basic details (spears in a
        narrow hall, flails wrapping around shields) can add a lot to the scene. Use your wises
        creatively, and remember, combat is freeform, so stretch your imagination.
      </Text>
      <Text>FIGHTER TALENTS</Text>
      <Text>ARCANE TRAINING [PROHIBITED: WIZARD]</Text>
      <Text>
        You have spellcasting as the Spellcraft talent (pg. 76). You roll Wits and can cast 3 spells
        and 1 potent spell per session. You know 3 spell theorems, created with the Spell Crucible,
        and can learn new spells from scrolls.
      </Text>
      <Text>BULWARK</Text>
      <Text>
        Each session, you have a 3d Bulwark resource pool from armor or other defenses. When you get
        bloodied or dropped from physical damage, roll the pool. If dice remain, ignore the damage.
      </Text>
      <Text>CONTROL</Text>
      <Text>
        You can push yourself to declare a zone that enemies cannot cross without dealing with you.
        If they attempt to move past you, you can interrupt them. On a perfect, take spark.
      </Text>
      <Text>GOT YOUR BACK</Text>
      <Text>
        You can push yourself to assist an ally after they roll a grim. The ally can also roll 1d.
        On a perfect, you both take spark.
      </Text>
      <Text>MEASURED TONES</Text>
      <Text>
        When you speak in measured tones, people always stop and listen—you can declare tame stakes
        if desired. Unless completely surprised, you can push yourself to interrupt an impact move
        initiating aggression. If you change their mind, take spark.
      </Text>
      <Text>SWIFT RECOVERY</Text>
      <Text>On a perfect roll with an unmarked stat, clear a mark on another stat.</Text>
      <Text>TACTICIAN</Text>
      <Text>
        During an intense action sequence, you can push yourself to tag 3 scene elements right away
        and 1 later in the sequence. When an ally interacts with a tagged element, you assist
        without risk on the roll. If no roll is needed, they take spark.
      </Text>
      <Text>COMBAT MANEUVERS [ADVICE]</Text>
      <Text>
        Action rolls let you flavor combat however you like—don't just swing a sword or jab a spear.
        Lean into the dramatic flowing nature of combat. On a critical, use setups and secondary
        effects to remove thorns or shift the fight. Don't tunnel vision on the kill—change the
        battle to end it faster! Of course, anyone can try these, but as a fighter, you should
        master them.
      </Text>
      <List variant="ordered">
        <List.Item>Disarm: Take their weapon to leave them vulnerable.</List.Item>
        <List.Item>Knockdown: Put them on the ground to gain the upper hand.</List.Item>
        <List.Item>
          Pin Down: Trap them in a position to keep them from acting or escaping.
        </List.Item>
        <List.Item>Pull: Drag them into danger or out of position.</List.Item>
        <List.Item>Push: Shove them away to protect allies or disrupt their own lines.</List.Item>
        <List.Item>
          Sunder: Break their gear to limit their options or get around their defenses.
        </List.Item>
      </List>
      <Heading level={2}>Monk</Heading>
      <Text>ALSO: Martial Artist, Mystic, Wanderer</Text>
      <Text>
        Your body is a vessel through which you channel your discipline into grace, precision, and
        the never-ending journey towards perfection.
      </Text>
      <blockquote>
        <Text>DISCIPLINE (CORE TALENT)</Text>
        <Text>
          Your body itself is a weapon, and anything in your hands is merely an extension of it. You
          never suffer thorns due to weapon matchups. Once per session, you can interrupt with a:
          philosophical point—quick reaction—stunning strike. Each scene, you have 4 flow. You can
          spend it to:
        </Text>
        <List variant="ordered">
          <List.Item>
            Ignore difficulty thorns from: being outnumbered—a single powerful opponent.
          </List.Item>
          <List.Item>
            Attempt a fluid maneuver. Before rolling, declare you want to also: disarm them—
            redirect momentum—reposition you, them, or both. On a perfect or messy, it happens.
          </List.Item>
          <List.Item>
            Pull off a potent feat of mystical grace, like running across water or falling
            harmlessly from a great height. For 1 more flow, extend this to those you're touching.
          </List.Item>
        </List>
        <Line />
        <Text>
          GROWTH: Every 3 levels, increase flow by 1 per scene and interrupts by 1 per session.
        </Text>
      </blockquote>
      <Text>MARTIAL ARTS STYLE [OPTIONAL]</Text>
      <Text>Is based on the concept of… [choose 1 or 2]</Text>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>d66</Table.HeaderCell>
            <Table.HeaderCell>1 (Primal)</Table.HeaderCell>
            <Table.HeaderCell>2 (Elemental)</Table.HeaderCell>
            <Table.HeaderCell>3 (Powerful)</Table.HeaderCell>
            <Table.HeaderCell>4 (Idealistic)</Table.HeaderCell>
            <Table.HeaderCell>5 (Philosophical)</Table.HeaderCell>
            <Table.HeaderCell>6 (Stylistic)</Table.HeaderCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>tiger</Table.Cell>
            <Table.Cell>fire</Table.Cell>
            <Table.Cell>thunderstorm</Table.Cell>
            <Table.Cell>harmony</Table.Cell>
            <Table.Cell>foundation</Table.Cell>
            <Table.Cell>ferocity</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>crane</Table.Cell>
            <Table.Cell>water</Table.Cell>
            <Table.Cell>avalanche</Table.Cell>
            <Table.Cell>destruction</Table.Cell>
            <Table.Cell>flourishing</Table.Cell>
            <Table.Cell>deception</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>3</Table.Cell>
            <Table.Cell>snake</Table.Cell>
            <Table.Cell>air</Table.Cell>
            <Table.Cell>tsunami</Table.Cell>
            <Table.Cell>tranquility</Table.Cell>
            <Table.Cell>refinement</Table.Cell>
            <Table.Cell>grace</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>4</Table.Cell>
            <Table.Cell>wolf</Table.Cell>
            <Table.Cell>earth</Table.Cell>
            <Table.Cell>whirlwind</Table.Cell>
            <Table.Cell>justice</Table.Cell>
            <Table.Cell>adaptation</Table.Cell>
            <Table.Cell>brutality</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>5</Table.Cell>
            <Table.Cell>mantis</Table.Cell>
            <Table.Cell>lightning</Table.Cell>
            <Table.Cell>earthquake</Table.Cell>
            <Table.Cell>chaos</Table.Cell>
            <Table.Cell>endurance</Table.Cell>
            <Table.Cell>precision</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>6</Table.Cell>
            <Table.Cell>raven</Table.Cell>
            <Table.Cell>heart</Table.Cell>
            <Table.Cell>volcano</Table.Cell>
            <Table.Cell>freedom</Table.Cell>
            <Table.Cell>transformation</Table.Cell>
            <Table.Cell>patience</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Text>It features stances and moves like… [choose 3]</Text>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>d66</Table.HeaderCell>
            <Table.HeaderCell>1</Table.HeaderCell>
            <Table.HeaderCell>2</Table.HeaderCell>
            <Table.HeaderCell>3</Table.HeaderCell>
            <Table.HeaderCell>4</Table.HeaderCell>
            <Table.HeaderCell>5</Table.HeaderCell>
            <Table.HeaderCell>6</Table.HeaderCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>open palm</Table.Cell>
            <Table.Cell>elbow strike</Table.Cell>
            <Table.Cell>circular step</Table.Cell>
            <Table.Cell>high kick</Table.Cell>
            <Table.Cell>crane stance</Table.Cell>
            <Table.Cell>mantis grab</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>spinning kick</Table.Cell>
            <Table.Cell>aerial leaps</Table.Cell>
            <Table.Cell>knee strike</Table.Cell>
            <Table.Cell>tiger claw</Table.Cell>
            <Table.Cell>side kick</Table.Cell>
            <Table.Cell>close punch</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>3</Table.Cell>
            <Table.Cell>low stance</Table.Cell>
            <Table.Cell>breath control</Table.Cell>
            <Table.Cell>joint lock</Table.Cell>
            <Table.Cell>heavy strike</Table.Cell>
            <Table.Cell>swift parry</Table.Cell>
            <Table.Cell>leaping elbow</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>4</Table.Cell>
            <Table.Cell>finger jabs</Table.Cell>
            <Table.Cell>redirecting grab</Table.Cell>
            <Table.Cell>pressure point</Table.Cell>
            <Table.Cell>dual strikes</Table.Cell>
            <Table.Cell>rooted stance</Table.Cell>
            <Table.Cell>snap kick</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>5</Table.Cell>
            <Table.Cell>iron forearm</Table.Cell>
            <Table.Cell>chop strike</Table.Cell>
            <Table.Cell>whipping attack</Table.Cell>
            <Table.Cell>jumps &amp; rolls</Table.Cell>
            <Table.Cell>soft redirect</Table.Cell>
            <Table.Cell>wide sweep</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>6</Table.Cell>
            <Table.Cell>flowing step</Table.Cell>
            <Table.Cell>iron grip</Table.Cell>
            <Table.Cell>steady gaze</Table.Cell>
            <Table.Cell>palm heel</Table.Cell>
            <Table.Cell>backfist strike</Table.Cell>
            <Table.Cell>crescent kick</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Text>It often or occasionally makes use of weapons like… [choose 2]</Text>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>d66</Table.HeaderCell>
            <Table.HeaderCell>1 (Blunt)</Table.HeaderCell>
            <Table.HeaderCell>2 (Flexible)</Table.HeaderCell>
            <Table.HeaderCell>3 (Edged)</Table.HeaderCell>
            <Table.HeaderCell>4 (Reach)</Table.HeaderCell>
            <Table.HeaderCell>5 (Thrown)</Table.HeaderCell>
            <Table.HeaderCell>6 (Specialized)</Table.HeaderCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>bo staff</Table.Cell>
            <Table.Cell>chain whip</Table.Cell>
            <Table.Cell>sai</Table.Cell>
            <Table.Cell>monk spade</Table.Cell>
            <Table.Cell>shuriken</Table.Cell>
            <Table.Cell>tiger claws</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>three-part staff</Table.Cell>
            <Table.Cell>rope dart</Table.Cell>
            <Table.Cell>kama</Table.Cell>
            <Table.Cell>spear</Table.Cell>
            <Table.Cell>throwing spikes</Table.Cell>
            <Table.Cell>spiked boots</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>3</Table.Cell>
            <Table.Cell>half-staff</Table.Cell>
            <Table.Cell>sickle &amp; chain</Table.Cell>
            <Table.Cell>butterfly sword</Table.Cell>
            <Table.Cell>naginata</Table.Cell>
            <Table.Cell>chakram</Table.Cell>
            <Table.Cell>war fan</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>4</Table.Cell>
            <Table.Cell>nunchaku</Table.Cell>
            <Table.Cell>weight &amp; chain</Table.Cell>
            <Table.Cell>hook sword</Table.Cell>
            <Table.Cell>longhandle blade</Table.Cell>
            <Table.Cell>boomerang</Table.Cell>
            <Table.Cell>iron knuckles</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>5</Table.Cell>
            <Table.Cell>short sticks</Table.Cell>
            <Table.Cell>whip blade</Table.Cell>
            <Table.Cell>straight sword</Table.Cell>
            <Table.Cell>trident</Table.Cell>
            <Table.Cell>darts</Table.Cell>
            <Table.Cell>crescent knives</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>6</Table.Cell>
            <Table.Cell>batons</Table.Cell>
            <Table.Cell>scarf</Table.Cell>
            <Table.Cell>curved sword</Table.Cell>
            <Table.Cell>scythe</Table.Cell>
            <Table.Cell>throwing axes</Table.Cell>
            <Table.Cell>backfist rings</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Text>MONK TALENTS</Text>
      <Text>FLOW STATE</Text>
      <Text>
        After an action or defense roll, you can always keep the spotlight to prevent the GM from
        spending suspense. This continues as long as you keep taking action and don't roll a grim.
      </Text>
      <Text>HEALING HANDS</Text>
      <Text>
        You can heal an ally that is bloodied. This automatically works, but you must make a
        Presence defense roll against being bloodied—you take their pain onto yourself and must fend
        it off.
      </Text>
      <Text>LIGHTNING REFLEXES</Text>
      <Text>
        You can always act first, unless completely surprised. You also ignore difficulty thorns on
        Agility defense rolls.
      </Text>
      <Text>MIND OVER MATTER</Text>
      <Text>
        When you take a physical mark, you can instead choose to take a mental mark. When you clear
        any mark by rolling it, take spark.
      </Text>
      <Text>PRIMORDIAL FORCES</Text>
      <Text>
        Choose an element: Air—Earth—Fire—Water. You can cast cantrips with that element, useful as
        set dressing and cantrip utility. On a critical using your element, charge it (mark its
        box). Spend it to pull off a potent feat of force or movement empowered by the element.
      </Text>
      <Text>
        Special: You can take this again, gaining all elements. On a critical, charge two elements.
      </Text>
      <Text>TETHER</Text>
      <Text>
        Once per session, you can touch someone to link your spirits. You can sense their feelings
        and always know where they are. You can push yourself to: assist them—speak into their
        mind—take mental damage for them—teleport to them. If they get dropped, so do you. You must
        touch again or rest for the link to end. When it does, change (or create) your bond with
        them.
      </Text>
      <Text>THERE IS NO TRY</Text>
      <Text>
        When putting your life or something you hold equally dear on the line, 5s count as 6s, but
        4s count as 1s. This generally occurs with dire stakes or after being bloodied in battle.
      </Text>
      <Heading level={2}>Paladin</Heading>
      <Text>ALSO: Crusader, Champion, Justiciar</Text>
      <Text>
        You have sworn an oath and your unwavering dedication gives you powerful conviction, which
        you can wield to better this world.
      </Text>
      <blockquote>
        <Text>OATHSWORN (CORE TALENT)</Text>
        <Text>
          You draw power from an oath you swear to uphold until you die. Your oath is comprised of
          three core tenets (below) which dictate your behavior. You don't take thorns from bloodied
          or rattled, instead taking +1d on rolls with the related physical or mental stats. Each
          session, you also have 3 smite. When attacking someone in combat or argument, you can
          spend it 1-for-1 to drop dice from a task pool after rolling it.
        </Text>
        <Text>
          Affirmation: Each session, you can give spark to one player who joined a scene involving
          your tenets, whether they followed them or tried leading you astray. When a tenet is in
          violation, discuss the toll that has had on you and think on a chance for atonement. Take
          1 less smite for each tenet in violation. When you atone, take spark.
        </Text>
        <Line />
        <Text>GROWTH: Every 2 levels, increase smite by 1.</Text>
      </blockquote>
      <Text>SWEAR YOUR OATH</Text>
      <Text>
        At character creation, or over the first few sessions, detail the THREE TENETS that form the
        core of your oath. Write your own specific tenets (below), or use the table (next page) to
        create flexible ones that you can refine and explore through play. To write your own tenets:
      </Text>
      <List variant="ordered">
        <List.Item>
          Choose a character detail or two, such as a trait, bond, or background.
        </List.Item>
        <List.Item>
          Link it to a short, actionable phrase. It should naturally arise from the fiction
          occasionally and present you with dilemmas. Work with the GM to ensure this as you write
          it.
        </List.Item>
      </List>
      <Text>
        Rank the tenets in order of importance. If they ever conflict, following a higher one avoids
        violating a lower one.
      </Text>
      <Text>
        You must uphold your tenets, or risk violation. They are absolutes, but they can evolve as
        it makes sense or best serves the fiction (and game at the table). When you violate a tenet,
        slash its box. For a second or severe violation, fill in the box—it is in heavy violation.
      </Text>
      <Text>
        You break a tenet when you violate it again while in heavy violation (filled box). You can
        no longer atone for that tenet. Breaking two tenets makes you an Oathbreaker (below).
      </Text>
      <Text>
        Atonement for tenets in violation require great deeds. The deed must outweigh the severity
        of the violation itself—ask the other players if unsure. Once completed, clear the box.
      </Text>
      <blockquote>
        <Text>
          OATHBREAKER: You lose your Oathsworn core talent, but gain hidden potential. You may
          choose a new non-core talent or the Warlock's Pact core talent in its place.
        </Text>
        <Text>
          Redemption requires an appropriately epic Ritual of Atonement at a sacred place or a
          mythic deed to atone for your transgressions. Success restores your core talent while
          allowing you to keep the talent gained from breaking your oath. Redemption is possible
          only once.
        </Text>
      </blockquote>
      <Text>PALADIN TALENTS</Text>
      <Text>AEGIS</Text>
      <Text>
        You take +1d when defending with a shield and can use it to make a defense roll in a nearby
        ally's place. You can push yourself to defend multiple allies from a single attack, like
        blocking dragonfire. On a perfect, everyone you protected takes spark.
      </Text>
      <Text>AUTHORITY</Text>
      <Text>
        Your presence fills the air with authority. The GM judges an NPC's response, or you can
        spend story to set it: admiration—obedience—respect—defiance. You can push yourself to pull
        off a potent feat of righteous command, like ordering a demon to kneel or silencing a riot
        with a word.
      </Text>
      <Text>CHALLENGE</Text>
      <Text>
        You can push yourself to challenge a foe. You take +1d on all rolls against them, but give
        them 1 suspense. If they do anything besides confront you, you can interrupt it. On a
        perfect, the challenge continues. If an ally engages your foe, the challenge ends.
      </Text>
      <Text>DAUNTLESS</Text>
      <Text>
        Take spark when one of your rolls is cut. You also take +1d on the story roll when dropped.
        On a perfect, ignore getting dropped.
      </Text>
      <Text>DIVINE BLESSING [PROHIBITED: CLERIC]</Text>
      <Text>
        You have spellcasting as the Channel Divinity talent (pg. 58). Detail your god and choose
        one minor domain, a 4d power pool. You can drop 1 and roll the pool to cast a potent spell.
        It replenishes each session.
      </Text>
      <Text>GUARDIAN</Text>
      <Text>
        You take +1d when you assist on a defense roll. If your own roll comes up as a 6, you both
        take spark.
      </Text>
      <Text>REBUKE</Text>
      <Text>
        When the GM spends suspense to prompt an impact move, you take +1d on any follow-up action
        against the source. On a critical, take spark.
      </Text>
      <Text>TENET BUILDER [ROLL, THEN CHOOSE AN OPTION. REWRITE FOR CLARITY.]</Text>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>I SWEAR TO BRING</Table.HeaderCell>
            <Table.HeaderCell>TO—FOR THE</Table.HeaderCell>
            <Table.HeaderCell>DESPITE—BECAUSE OF</Table.HeaderCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>honor—valor</Table.Cell>
            <Table.Cell>forgotten—powerless</Table.Cell>
            <Table.Cell>my desire for ~</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>justice—revenge</Table.Cell>
            <Table.Cell>redeemable—irredeemable</Table.Cell>
            <Table.Cell>my trait, ~</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>faith—doubt</Table.Cell>
            <Table.Cell>reformers—traditionalists</Table.Cell>
            <Table.Cell>my arc to ~</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>mercy—judgement</Table.Cell>
            <Table.Cell>devout—faithless</Table.Cell>
            <Table.Cell>my background of ~</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>strength—compassion</Table.Cell>
            <Table.Cell>evil—defiled</Table.Cell>
            <Table.Cell>my bond with ~</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>truth—wisdom</Table.Cell>
            <Table.Cell>leaders—people</Table.Cell>
            <Table.Cell>my lack of ~</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Heading level={2}>Ranger</Heading>
      <Text>ALSO: Beastmaster, Pathfinder, Trapper</Text>
      <Text>
        You stalk relentlessly, moving unseen through the wilderness, tracking your prey with deadly
        precision, and striking them at their weakest point.
      </Text>
      <blockquote>
        <Text>HUNTER'S MARK (CORE TALENT)</Text>
        <Text>
          Twice per session, you can declare a weakness in a non-humanoid creature. Describe what
          you know or see, tagging it with a 2d Weakness pool. When anyone targets the weakness
          specifically, you roll the pool as bonus dice on their roll. As it depletes, the creature
          learns to hide its weakness, causing it to shift its behavior. Take spark when a Weakness
          die rolls a perfect (not the overall result).
        </Text>
        <Text>Prowess: Take +1d at stealth, traversal, setting traps, and tracking.</Text>
        <Line />
        <Text>GROWTH: Every 2 levels, you can use Hunter's Mark one more time per session.</Text>
      </blockquote>
      <Text>FAVORITE TRAPS [OPTIONAL]</Text>
      <Text>
        Combine and interpret an effect, trigger, and the word “trap” (poisonous bait trap) to make
        three traps you commonly use while hunting or scouting. These aren't limitations, just
        options ready to use when you need to lay a trap.
      </Text>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>effect</Table.HeaderCell>
            <Table.HeaderCell>trigger</Table.HeaderCell>
            <Table.HeaderCell>“TRAP”</Table.HeaderCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>stunning</Table.Cell>
            <Table.Cell>tripwire</Table.Cell>
            <Table.Cell></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>falling</Table.Cell>
            <Table.Cell>pressure plate</Table.Cell>
            <Table.Cell></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>noisy</Table.Cell>
            <Table.Cell>snare loop</Table.Cell>
            <Table.Cell></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>poisonous</Table.Cell>
            <Table.Cell>bait</Table.Cell>
            <Table.Cell></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>entangling</Table.Cell>
            <Table.Cell>hidden</Table.Cell>
            <Table.Cell></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>injuring</Table.Cell>
            <Table.Cell>proximity</Table.Cell>
            <Table.Cell></Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Text>TELL-TALE SIGNS OF WEAKNESS [ADVICE]</Text>
      <Text>
        When you use your hunter's mark, detail a weakness, how you notice it, and how you can
        exploit it. This increases your ranger's competency and adds a level of detail to the hunt.
      </Text>
      <List variant="ordered">
        <List.Item>
          Fire Sensitivity: Flinches near flames, avoids heat, dry or cracked skin.
        </List.Item>
        <List.Item>
          Bright Light Weakness: Cloudy eyes, avoids light, panics near flashes.
        </List.Item>
        <List.Item>
          Vulnerable Anatomy: Exposed weak points, awkward movement, protects soft areas.
        </List.Item>
        <List.Item>
          Poison Susceptibility: Sluggish breathing, avoids carrion, soft or delicate skin.
        </List.Item>
        <List.Item>
          Tunnel Vision: Fixates on a single target, oblivious to surroundings, struggles to adapt.
        </List.Item>
        <List.Item>
          Poor Mobility: Heavy tracks, slow movement, struggles on uneven terrain.
        </List.Item>
        <List.Item>
          Sound Sensitivity: Wince at noises, large twitching ears, avoids loud terrain.
        </List.Item>
        <List.Item>
          Slow-minded: Delayed reactions, struggles to recognize threats, easily tricked by decoys.
        </List.Item>
        <List.Item>
          Predictable Instincts: Easily baited or lured, reacts predictably to threats, overcommits.
        </List.Item>
      </List>
      <Text>RANGER TALENTS</Text>
      <Text>ANIMAL COMPANION</Text>
      <Text>
        You're accompanied by a fiercely loyal animal. Each PC adds a reciprocal bond with it.
        Choose 3 tricks that it knows and 2 flaws that it has:
      </Text>
      <Text>Tricks: distract—fight—guard—perform—rescue—retrieve—scout—search—track—warn.</Text>
      <Text>
        Flaws: aggressive—clumsy—grumpy—insatiable—jumpy—noisy—overprotective—scary—unruly.
      </Text>
      <Text>
        You roll 3d for anything it knows a trick for and 1d on everything else. It has only two
        damage boxes, marked (for any mark) and hurt (for bloodied or rattled). You can always have
        it exit a scene when hurt. If lost, you can bond with a new animal or select a new talent.
      </Text>
      <Text>
        Special: You can take this talent again to grant it 3 more tricks and another marked box.
      </Text>
      <Text>KEEN SENSES</Text>
      <Text>
        Your senses are twice as sharp as normal. You can pull off potent feats of tracking and can
        always get a hint or reveal on vigilance against living creatures.
      </Text>
      <Text>RELENTLESS</Text>
      <Text>
        You can pull off potent feats of traversal and can always move at full speed, unhindered by
        what's in your way.
      </Text>
      <Text>SCOUT AHEAD</Text>
      <Text>
        You gain 1 story per session and can spend story to flashback to scouting ahead and:
        sabotage something—set a trap—set up an interrupt—survey the area (ask 2 questions)—take out
        a danger. Make a montage roll, taking +1d for prowess. The GM always takes suspense in place
        of an impact move.
      </Text>
      <Text>SEASONED HUNTER</Text>
      <Text>
        You always know where a monster's lair will be. Once per session, you can tell all to Look
        Out! and declare how a monstrous challenge spends 1 of its suspense on a move to attack your
        party. Anyone involved takes +1d on a defense roll and follow-up action rolls.
      </Text>
      <Text>SHARPSHOOTER</Text>
      <Text>
        When given time, you can pull off potent feats of ranged precision, like shooting just
        beyond maximum range or into near complete cover. You can also push yourself to do it on the
        spot.
      </Text>
      <Text>TROPHIES</Text>
      <Text>
        When you play a key part in slaying a powerful monster, you can harvest a trophy from it.
        This acts as a wand (pg. 23) that only you can use. Minor trophies require no roll to
        harvest. Major trophies require a Wits action roll. The monster's name, ability, and body
        part are the touchstone. You also gain one major trophy when you take this—detail it. Some
        examples:
      </Text>
      <List variant="ordered">
        <List.Item>
          Eye of the Basilisk: 4d Stoneflesh wand. A minor wand slows someone. A major wand turns
          them to a statue.
        </List.Item>
        <List.Item>
          Horns of a Minotaur: 4d Powerful Charge wand. A minor wand is a speed boost. A major wand
          gives potency.
        </List.Item>
        <List.Item>
          Heart of a Troll: 4d Regeneration wand. A minor wand removes small ailments. A major wand
          removes marks.
        </List.Item>
      </List>
      <Heading level={2}>Rogue</Heading>
      <Text>ALSO: Assassin, Cutpurse, Infiltrator</Text>
      <Text>
        You live and operate in the margins, striking unseen and disappearing before anyone knows
        you were there.
      </Text>
      <blockquote>
        <Text>EXPERTISE (CORE TALENT)</Text>
        <Text>Choose a skillset below as your expertise:</Text>
        <Text>Skullduggery: Take +1d at stealth, picking locks, lying, and sleight of hand.</Text>
        <Text>
          Assassination: Take +1d at stealth, tracking people, opening strikes, and disguises.
        </Text>
        <Text>
          Each session, you have a 3d Contingency resource pool, always planning ahead. You can roll
          the pool as bonus dice after any roll that falls within your expertise.
        </Text>
        <Line />
        <Text>GROWTH: Every 2 levels, increase Contingency by 1d.</Text>
      </blockquote>
      <Text>THIEVES GUILD [OPTIONAL]</Text>
      <Text>
        Many rogues learned their trade from a thieves' guild, criminal ring, or underground
        network. These are all one form of a guild or another, whether formal or not.
      </Text>
      <blockquote>
        <Text>Thieves guild: Choose 2 that describes your guild and 1 that really doesn't.</Text>
        <List variant="ordered">
          <List.Item>
            <input type="checkbox" /> Like family
          </List.Item>
          <List.Item>
            <input type="checkbox" /> Elite training
          </List.Item>
          <List.Item>
            <input type="checkbox" /> Cultish
          </List.Item>
          <List.Item>
            <input type="checkbox" /> Turf-obsessed
          </List.Item>
          <List.Item>
            <input type="checkbox" /> Heroes
          </List.Item>
          <List.Item>
            <input type="checkbox" /> Mercenaries
          </List.Item>
          <List.Item>
            <input type="checkbox" /> Mystics
          </List.Item>
          <List.Item>
            <input type="checkbox" /> Outsiders
          </List.Item>
          <List.Item>
            <input type="checkbox" /> Renegades
          </List.Item>
          <List.Item>
            <input type="checkbox" /> Scoundrels
          </List.Item>
          <List.Item>
            <input type="checkbox" /> In the open
          </List.Item>
          <List.Item>
            <input type="checkbox" /> Wardens
          </List.Item>
        </List>
      </blockquote>
      <Text>CRIMINAL HISTORY [OPTIONAL]</Text>
      <Text>
        Given their skillset, a rogue either learned their trade by way of crime or possess the
        skills to make an excellent criminal, for which there's no lack of opportunities. As you
        start your adventuring career, it's likely you have some lingering criminal history, a past
        that can come back to haunt you in quite fun, dramatic ways.
      </Text>
      <Text>
        Create one or more past crimes by setting the crime (severity &amp; nature), your reputation
        from it, and your own reaction about the crime.
      </Text>
      <Text>THE CRIME</Text>
      <Text>Severity</Text>
      <List variant="ordered">
        <List.Item>petty</List.Item>
        <List.Item>low-level</List.Item>
        <List.Item>moderate</List.Item>
        <List.Item>serious</List.Item>
        <List.Item>severe</List.Item>
        <List.Item>legendary</List.Item>
      </List>
      <Text>Nature</Text>
      <List variant="ordered">
        <List.Item>theft</List.Item>
        <List.Item>fraud</List.Item>
        <List.Item>spying</List.Item>
        <List.Item>smuggling</List.Item>
        <List.Item>banditry</List.Item>
        <List.Item>kidnapping</List.Item>
        <List.Item>vandalism</List.Item>
        <List.Item>gambling</List.Item>
        <List.Item>bribery</List.Item>
        <List.Item>extortion</List.Item>
        <List.Item>arms dealing</List.Item>
        <List.Item>arson</List.Item>
        <List.Item>treason</List.Item>
        <List.Item>robbery</List.Item>
        <List.Item>assassination</List.Item>
        <List.Item>heist</List.Item>
        <List.Item>impersonation</List.Item>
        <List.Item>necromancy</List.Item>
      </List>
      <Text>REPUTATION</Text>
      <List variant="ordered">
        <List.Item>barely remembered</List.Item>
        <List.Item>small bounty</List.Item>
        <List.Item>known name</List.Item>
        <List.Item>hunted</List.Item>
        <List.Item>infamous</List.Item>
        <List.Item>most wanted</List.Item>
      </List>
      <Text>
        REACTION: I did what I had to do—I was set up—It was a misunderstanding—I'd do it again in a
        heartbeat—I completely forgot I did that—I've made peace with it—Never again. Or write one!
      </Text>
      <Heading level={2}>Rogue Talents</Heading>
      <Text>ACCORDING TO PLAN</Text>
      <Text>
        You gain 1 story per session and can spend story to flashback to utilizing subterfuge in a
        way that's immediately relevant, like swiping some keys, paying off a guard, or preparing an
        escape route. Make a montage roll, taking +1d for Expertise. The GM always takes suspense in
        place of an impact move.
      </Text>
      <Text>ELDRITCH AFFINITY [PROHIBITED: SORCERER]</Text>
      <Text>
        You have spellcasting, as the Sorcery talent (pg. 72). You roll Presence to cast and choose
        3 from magic paths and techniques that serve as touchstones. You can't cast potent spells,
        nor do you risk a wild surge.
      </Text>
      <Text>LURKER</Text>
      <Text>
        On a perfect sneaking past or secretly observing sentient creatures, they: let a secret
        slip—give you a golden opportunity. If caught sneaking, you can push yourself to stay
        completely still and avoid detection, but must leave the area immediately after.
      </Text>
      <Text>OPPORTUNIST</Text>
      <Text>
        When someone nearby rolls defense, you take +1d on an immediate follow-up. On a critical by
        a nearby ally, you can push yourself to add another critical bonus.
      </Text>
      <Text>POISONER</Text>
      <Text>
        Each session, you have a 4d Poisons resource pool. You have access to the following poisons:
        hallucinations—knockout—memory loss—nausea—paralysis—truth serum. They each take a bit of
        time to work and are most effective if ingested.
      </Text>
      <Text>TRAP SENSE</Text>
      <Text>
        You always get a hint or reveal on vigilance against traps. When you avoid or disable a
        trap, take spark.
      </Text>
      <Text>WEASEL</Text>
      <Text>
        If caught in a lie or red-handed, you can push yourself to weasel your way out of the
        situation—for now. You get an exit, but they definitely realize what happened soon after.
      </Text>
      <Text>
        THIEVES' CANT [advice]: Every rogue worth their salt knows Thieves' Cant—a secret language
        of symbols used to share plans, warnings, and secrets right under everyone else's nose. Here
        are 25, and there's a full list of 42 with symbols on pg. 144!
      </Text>
      <List variant="ordered">
        <List.Item>valuables inside</List.Item>
        <List.Item>wealthy</List.Item>
        <List.Item>no guard patrol</List.Item>
        <List.Item>worth robbing</List.Item>
        <List.Item>can be bribed</List.Item>
        <List.Item>fence</List.Item>
        <List.Item>heist planned</List.Item>
        <List.Item>guild territory</List.Item>
        <List.Item>guild protected</List.Item>
        <List.Item>safe house</List.Item>
        <List.Item>trust person inside</List.Item>
        <List.Item>safe for guild</List.Item>
        <List.Item>do not trust inside</List.Item>
        <List.Item>danger inside</List.Item>
        <List.Item>guards patrol here</List.Item>
        <List.Item>well guarded</List.Item>
        <List.Item>get out fast</List.Item>
        <List.Item>magic caster here</List.Item>
        <List.Item>protected by magic</List.Item>
        <List.Item>monsters inside</List.Item>
        <List.Item>entry underground</List.Item>
        <List.Item>meeting place</List.Item>
        <List.Item>hidden door</List.Item>
        <List.Item>escape route</List.Item>
        <List.Item>safe this way</List.Item>
      </List>
      <Heading level={2}>Sorcerer</Heading>
      <Text>ALSO: Channeler, Elementalist, Stormcaller</Text>
      <Text>
        You are a conduit for ancient and unpredictable forces, shaping spells out of the raw magic
        that flows through you.
      </Text>
      <blockquote>
        <Text>SORCERY (CORE TALENT)</Text>
        <Text>
          You have spellcasting ability. You roll Presence to cast and your magic paths and
          techniques serve as touchstones. Choose any 4 below (or make a magic path up with the GM),
          with at least 1 magic path and 1 technique:
        </Text>
        <Text>Magic paths: blood—decay—flame—frost—lux—shadow—stone—tempest.</Text>
        <Text>Techniques: attack—create—defend—enhance—hinder—influence—transform—traverse.</Text>
        <Text>
          You can cast spells at-will, though they always carry risk and require a roll. When you
          cast, each spell must combine at least one magic path and one technique as touchstones.
          You can push yourself to cast a potent spell, but gain no free activation of it.
        </Text>
        <Text>
          When casting, rolling two or more 1s (including thorns) triggers a secondary wild
          surge—raw magic spirals out of your control. Make a 2d story roll to see what happens. The
          effect might stem from your touchstones, raw magical essence, or something chaotically
          random. Use the GM crucible or ask around your group for ideas.
        </Text>
        <Line />
        <Text>GROWTH: Every 2 levels, gain a new technique or magic path.</Text>
      </blockquote>
      <Text>RANDOM WILD SURGES [OPTIONAL]</Text>
      <Text>
        For truly wild surges, you can let it be completely random instead of deciding as a group.
        Roll these all at once: 2d (story roll), 2d (wild surge crucible below), and 2d8. The d8
        determine a sorcery path and sorcery technique.
      </Text>
      <Text>
        To randomly select a target, roll an additional 2d. Assign numbers to each PC and use
        remaining numbers for NPCs or the environment. On doubles, it targets that thing as if a
        critical or disaster. On an actual critical, it targets everything.
      </Text>
      <Text>WILD SURGE CRUCIBLE</Text>
      <Text>Roll 1 on each table, smash them together, and interpret.</Text>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>d66</Table.HeaderCell>
            <Table.HeaderCell>1</Table.HeaderCell>
            <Table.HeaderCell>2</Table.HeaderCell>
            <Table.HeaderCell>3</Table.HeaderCell>
            <Table.HeaderCell>4</Table.HeaderCell>
            <Table.HeaderCell>5</Table.HeaderCell>
            <Table.HeaderCell>6</Table.HeaderCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>skin</Table.Cell>
            <Table.Cell>temperature</Table.Cell>
            <Table.Cell>icy</Table.Cell>
            <Table.Cell>smoke</Table.Cell>
            <Table.Cell>rain</Table.Cell>
            <Table.Cell>lightning</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>gust</Table.Cell>
            <Table.Cell>sparks</Table.Cell>
            <Table.Cell>rattle</Table.Cell>
            <Table.Cell>tremor</Table.Cell>
            <Table.Cell>color</Table.Cell>
            <Table.Cell>scent</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>3</Table.Cell>
            <Table.Cell>ground</Table.Cell>
            <Table.Cell>fire</Table.Cell>
            <Table.Cell>water</Table.Cell>
            <Table.Cell>light</Table.Cell>
            <Table.Cell>debris</Table.Cell>
            <Table.Cell>flicker</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>4</Table.Cell>
            <Table.Cell>creatures</Table.Cell>
            <Table.Cell>growth</Table.Cell>
            <Table.Cell>boom</Table.Cell>
            <Table.Cell>effect</Table.Cell>
            <Table.Cell>steps</Table.Cell>
            <Table.Cell>levitation</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>5</Table.Cell>
            <Table.Cell>cloud</Table.Cell>
            <Table.Cell>invisibility</Table.Cell>
            <Table.Cell>gloom</Table.Cell>
            <Table.Cell>distortion</Table.Cell>
            <Table.Cell>metal</Table.Cell>
            <Table.Cell>eye</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>6</Table.Cell>
            <Table.Cell>shadow</Table.Cell>
            <Table.Cell>clock</Table.Cell>
            <Table.Cell>twist</Table.Cell>
            <Table.Cell>laughter</Table.Cell>
            <Table.Cell>breath</Table.Cell>
            <Table.Cell>hum</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>d66</Table.HeaderCell>
            <Table.HeaderCell>1</Table.HeaderCell>
            <Table.HeaderCell>2</Table.HeaderCell>
            <Table.HeaderCell>3</Table.HeaderCell>
            <Table.HeaderCell>4</Table.HeaderCell>
            <Table.HeaderCell>5</Table.HeaderCell>
            <Table.HeaderCell>6</Table.HeaderCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>birds</Table.Cell>
            <Table.Cell>whispers</Table.Cell>
            <Table.Cell>glowing</Table.Cell>
            <Table.Cell>illusion</Table.Cell>
            <Table.Cell>rapid</Table.Cell>
            <Table.Cell>whirlwind</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>smell</Table.Cell>
            <Table.Cell>static</Table.Cell>
            <Table.Cell>hunger</Table.Cell>
            <Table.Cell>image</Table.Cell>
            <Table.Cell>emotion</Table.Cell>
            <Table.Cell>glimmer</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>3</Table.Cell>
            <Table.Cell>lifted</Table.Cell>
            <Table.Cell>change</Table.Cell>
            <Table.Cell>phrase</Table.Cell>
            <Table.Cell>shock</Table.Cell>
            <Table.Cell>sound</Table.Cell>
            <Table.Cell>echo</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>4</Table.Cell>
            <Table.Cell>shattering</Table.Cell>
            <Table.Cell>scatter</Table.Cell>
            <Table.Cell>feeling</Table.Cell>
            <Table.Cell>pop</Table.Cell>
            <Table.Cell>brief</Table.Cell>
            <Table.Cell>shimmer</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>5</Table.Cell>
            <Table.Cell>shift</Table.Cell>
            <Table.Cell>size</Table.Cell>
            <Table.Cell>surface</Table.Cell>
            <Table.Cell>agitation</Table.Cell>
            <Table.Cell>apparition</Table.Cell>
            <Table.Cell>sparkle</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>6</Table.Cell>
            <Table.Cell>notes</Table.Cell>
            <Table.Cell>vision</Table.Cell>
            <Table.Cell>voice</Table.Cell>
            <Table.Cell>mark</Table.Cell>
            <Table.Cell>glow</Table.Cell>
            <Table.Cell>dazzle</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Text>SORCERER TALENTS</Text>
      <Text>ELDRITCH GROWTH</Text>
      <Text>
        The maelstrom of magic has twisted your body. You gain a permanent physical feature like
        metal-rending claws, venomous fangs, leathery wings, or thrashing tentacles. In addition to
        its obvious benefits, it now serves as a touchstone.
      </Text>
      <Text>MAELSTROM</Text>
      <Text>
        You open yourself fully to the maelstrom of raw magic. When you cast a potent spell, 5s
        count as 6s, but 4s count as 1s. These 4s also count as 1s towards wild surge.
      </Text>
      <Text>MAGIC SENSE</Text>
      <Text>
        You always get a hint or reveal on vigilance involving magic. When you avoid or disrupt it,
        take spark.
      </Text>
      <Text>SPELLEATER</Text>
      <Text>
        Each session, you have a 3d Spelleater resource pool. When you suffer from magic, roll the
        pool. If dice remain, ignore the effect and bank essence (max 2). You can spend essence to
        increase a spellcasting die result by 1, but it triggers wild surge.
      </Text>
      <Text>SUBTLE CASTING</Text>
      <Text>
        You can always cast spells subtly, able to conceal that you were the one that cast it. This
        doesn't defeat common sense, of course.
      </Text>
      <Text>WISPS</Text>
      <Text>
        Two small spheres of your magic path float around you. Give them 2 traits:
        annoying—capricious—malevolent—mesmerizing—whimsical. They serve as touchstones. You can
        sacrifice one to: assist without risk—distract someone—send a brief message far away—suffer
        vex in your stead. Make story rolls to determine effects if sacrificed. They return each
        session.
      </Text>
      <Text>WRATH</Text>
      <Text>
        When you or a nearby ally gets bloodied, rattled, or dropped, you take +1d and potency on
        your next spell if you immediately lash out.
      </Text>
      <Heading level={2}>Warlock</Heading>
      <Text>ALSO: Blessed One, Cursed One, Occultist</Text>
      <Text>
        You have made a pact with a greater being—power in exchange for service, a pact that may
        prove to be a double-edged sword.
      </Text>
      <blockquote>
        <Text>PACT (CORE TALENT)</Text>
        <Text>
          Create your patron (below), a powerful otherworldly being you've made a pact with to gain
          gifts in exchange for obligations.
        </Text>
        <Text>
          Gifts: Your patron actively or passively meddles in your affairs. Before each session,
          roll 2d and write these results down as Gifts. During the session, you can replace any
          rolled d6 (by anyone) with one of your gift results, then erase the Gift.
        </Text>
        <Text>
          You can also cast cantrips with your patron's trappings as touchstones, useful as set
          dressing and cantrip utility (pg. 18). You gain a bonus talent, and each of your talents
          is infused with their trappings.
        </Text>
        <Text>
          Obligations: Each patron has different demands. You have an extra story arc to represent
          their demands. Some patrons expect meaningful progress, while others ask only for the
          lightest of service. You define what this means. Before each session, discuss this story
          arc. Your patron has an 8d Patience pool. Roll it if your patron was not satisfied with
          your progress last session. At 0d, your patron will give you a visit in some form to clear
          up the issue, replenishing the pool.
        </Text>
        <Line />
        <Text>GROWTH: Every 3 levels, gain a bonus talent, but decrease max Patience by 2d.</Text>
      </blockquote>
      <Text>
        PATRON CREATION: Roll or choose 2 natures and 2 desires below, then assign a distinct color
        or visual signature to your patron's influence. Decide how they communicate (visions,
        messenger, mind-speak) and how many followers they have (many, few, just you). These are
        their trappings. Give this powerful, otherworldly being a name and describe what you know of
        them. Establish your patron's bond with you and your bond with them. Work with the GM to
        create a faction for them and run it together.
      </Text>
      <Text>PATRON CRUCIBLE Roll 2 on each table, smash them together, and interpret.</Text>
      <Text>NATURE</Text>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>d66</Table.HeaderCell>
            <Table.HeaderCell>1</Table.HeaderCell>
            <Table.HeaderCell>2</Table.HeaderCell>
            <Table.HeaderCell>3</Table.HeaderCell>
            <Table.HeaderCell>4</Table.HeaderCell>
            <Table.HeaderCell>5</Table.HeaderCell>
            <Table.HeaderCell>6</Table.HeaderCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>Cogs</Table.Cell>
            <Table.Cell>Abyss</Table.Cell>
            <Table.Cell>Scourge</Table.Cell>
            <Table.Cell>Shadow</Table.Cell>
            <Table.Cell>Veil</Table.Cell>
            <Table.Cell>Hollow</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>Chimera</Table.Cell>
            <Table.Cell>Serpent</Table.Cell>
            <Table.Cell>Flame</Table.Cell>
            <Table.Cell>Green</Table.Cell>
            <Table.Cell>Outsider</Table.Cell>
            <Table.Cell>Balance</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>3</Table.Cell>
            <Table.Cell>Void</Table.Cell>
            <Table.Cell>Forge</Table.Cell>
            <Table.Cell>Phoenix</Table.Cell>
            <Table.Cell>Whisper</Table.Cell>
            <Table.Cell>Trickster</Table.Cell>
            <Table.Cell>Fiend</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>4</Table.Cell>
            <Table.Cell>Dead god</Table.Cell>
            <Table.Cell>Thorn</Table.Cell>
            <Table.Cell>Depths</Table.Cell>
            <Table.Cell>Reaper</Table.Cell>
            <Table.Cell>Tempest</Table.Cell>
            <Table.Cell>Storm</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>5</Table.Cell>
            <Table.Cell>Eternal</Table.Cell>
            <Table.Cell>Harbinger</Table.Cell>
            <Table.Cell>Tide</Table.Cell>
            <Table.Cell>Prism</Table.Cell>
            <Table.Cell>Leviathan</Table.Cell>
            <Table.Cell>Dragon</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>6</Table.Cell>
            <Table.Cell>Shroud</Table.Cell>
            <Table.Cell>Echo</Table.Cell>
            <Table.Cell>Starborn</Table.Cell>
            <Table.Cell>Dreamer</Table.Cell>
            <Table.Cell>Light</Table.Cell>
            <Table.Cell>Shadow</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Text>DESIRES</Text>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>d66</Table.HeaderCell>
            <Table.HeaderCell>1</Table.HeaderCell>
            <Table.HeaderCell>2</Table.HeaderCell>
            <Table.HeaderCell>3</Table.HeaderCell>
            <Table.HeaderCell>4</Table.HeaderCell>
            <Table.HeaderCell>5</Table.HeaderCell>
            <Table.HeaderCell>6</Table.HeaderCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>Chaos</Table.Cell>
            <Table.Cell>Beauty</Table.Cell>
            <Table.Cell>Minds</Table.Cell>
            <Table.Cell>Wealth</Table.Cell>
            <Table.Cell>Rarities</Table.Cell>
            <Table.Cell>Destruction</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>Secrets</Table.Cell>
            <Table.Cell>Fun</Table.Cell>
            <Table.Cell>Control</Table.Cell>
            <Table.Cell>Magic</Table.Cell>
            <Table.Cell>Everything</Table.Cell>
            <Table.Cell>Monuments</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>3</Table.Cell>
            <Table.Cell>Power</Table.Cell>
            <Table.Cell>Victory</Table.Cell>
            <Table.Cell>Judgment</Table.Cell>
            <Table.Cell>Unity</Table.Cell>
            <Table.Cell>Souls</Table.Cell>
            <Table.Cell>Biomass</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>4</Table.Cell>
            <Table.Cell>Worshippers</Table.Cell>
            <Table.Cell>Adoration</Table.Cell>
            <Table.Cell>Fear</Table.Cell>
            <Table.Cell>Fame</Table.Cell>
            <Table.Cell>Revenge</Table.Cell>
            <Table.Cell>Knowledge</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>5</Table.Cell>
            <Table.Cell>Promises</Table.Cell>
            <Table.Cell>Purity</Table.Cell>
            <Table.Cell>Progress</Table.Cell>
            <Table.Cell>Oddities</Table.Cell>
            <Table.Cell>Truth</Table.Cell>
            <Table.Cell>Treasure</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>6</Table.Cell>
            <Table.Cell>Influence</Table.Cell>
            <Table.Cell>Life</Table.Cell>
            <Table.Cell>Territory</Table.Cell>
            <Table.Cell>Perfection</Table.Cell>
            <Table.Cell>Order</Table.Cell>
            <Table.Cell>Entropy</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Text>WARLOCK TALENTS</Text>
      <Text>ELDRITCH WEAPONRY</Text>
      <Text>
        On a perfect when using cantrip utility as a weapon, you can push yourself to also inflict a
        spell-level effect with your patron's trappings as the touchstone. This effect can't deal
        more damage—the cantrip already covers that.
      </Text>
      <Text>HEX</Text>
      <Text>
        You can roll Presence to hex someone with: dread—clumsiness—confusion—forgetfulness—
        misfortune—sleepiness. Decide when it takes effect: now—soon—much later—specific trigger.
        This is a cosmic effect. It's magic, but not fully under your control.
      </Text>
      <Text>KNOWING GAZE</Text>
      <Text>
        When given time, you can stare into someone's eyes and learn: their greatest desire—what
        they're hiding—what they want to protect—who they serve. This is highly disconcerting and
        only works on someone once. You can push yourself to do this on the spot.
      </Text>
      <Text>OTHERWORLDLY FORM</Text>
      <Text>
        You can turn into a floating, dispersed form, flavored after your patron's trappings (swarm
        of bats, blowing leaves). Choose three things you can do in this form: appear barely
        visible—fly high in the sky—interact with objects—move swiftly—slip through small
        gaps—speak.
      </Text>
      <Text>RITUALIST</Text>
      <Text>
        You take +1d when working towards overcoming a ritual's challenge and can replace any one of
        a ritual's anchors with yourself.
      </Text>
      <Text>VISIONS</Text>
      <Text>
        You can roll Presence to ask your patron for forbidden knowledge, like tightly held secrets
        or that which should not be known. Ask the GM a specific question. The answer may be cryptic
        or twisted to suit your patron's desires, but it will never be an outright lie. On a messy
        or grim, roll the Patience pool.
      </Text>
      <Text>WAYFARER</Text>
      <Text>
        You can push yourself to teleport. The further or less familiar the destination, the less
        precise the teleport is. The maximum range is two days' ride away. Anything within clear
        eyesight with no obstruction requires no roll, otherwise make a story roll. You can bring
        others, taking +1t per person.
      </Text>
      <Heading level={2}>Wizard</Heading>
      <Text>ALSO: Diviner, Summoner, Witch</Text>
      <Text>
        You wield arcane power through precise knowledge, casting spells from an ever-expanding
        repertoire, your studies endless.
      </Text>
      <blockquote>
        <Text>SPELLCRAFT (CORE TALENT)</Text>
        <Text>
          You have spellcasting ability. You roll Wits to cast and the spell theorem you are casting
          serves as its touchstone. You know 4 spell theorems inscribed in your spellbook, created
          using the Spell Crucible (below). Each session, you can cast 4 spells and 2 potent spells.
          You choose which spell theorem to use when you cast.
        </Text>
        <Text>
          You can learn new spell theorems from studying and experimenting with scrolls, which you
          might find as treasure or obtain from other wizards. This consumes the scroll.
        </Text>
        <Line />
        <Text>
          GROWTH: Every 2 levels, increase the castings of spells and potent spells per session by 1
          and create 1 new spell theorem with the Spell Crucible.
        </Text>
      </blockquote>
      <Text>SPELL CRUCIBLE</Text>
      <Text>Roll style, essence, and form. Choose 2, then assign a school.</Text>
      <Text>STYLE</Text>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>d66</Table.HeaderCell>
            <Table.HeaderCell>1</Table.HeaderCell>
            <Table.HeaderCell>2</Table.HeaderCell>
            <Table.HeaderCell>3</Table.HeaderCell>
            <Table.HeaderCell>4</Table.HeaderCell>
            <Table.HeaderCell>5</Table.HeaderCell>
            <Table.HeaderCell>6</Table.HeaderCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>Binding</Table.Cell>
            <Table.Cell>Oozing</Table.Cell>
            <Table.Cell>Shimmering</Table.Cell>
            <Table.Cell>Shielding</Table.Cell>
            <Table.Cell>Curious</Table.Cell>
            <Table.Cell>Shadowy</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>Flaming</Table.Cell>
            <Table.Cell>Slow</Table.Cell>
            <Table.Cell>Wrathful</Table.Cell>
            <Table.Cell>Petrifying</Table.Cell>
            <Table.Cell>Hungry</Table.Cell>
            <Table.Cell>Majestic</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>3</Table.Cell>
            <Table.Cell>Charming</Table.Cell>
            <Table.Cell>Silent</Table.Cell>
            <Table.Cell>Dazzling</Table.Cell>
            <Table.Cell>Piercing</Table.Cell>
            <Table.Cell>Jovial</Table.Cell>
            <Table.Cell>Frenzied</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>4</Table.Cell>
            <Table.Cell>Cryptic</Table.Cell>
            <Table.Cell>Withering</Table.Cell>
            <Table.Cell>Primal</Table.Cell>
            <Table.Cell>Screaming</Table.Cell>
            <Table.Cell>Thunderous</Table.Cell>
            <Table.Cell>Prismatic</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>5</Table.Cell>
            <Table.Cell>Freezing</Table.Cell>
            <Table.Cell>Seeping</Table.Cell>
            <Table.Cell>Ferocious</Table.Cell>
            <Table.Cell>Grasping</Table.Cell>
            <Table.Cell>Venomous</Table.Cell>
            <Table.Cell>Sickening</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>6</Table.Cell>
            <Table.Cell>Mesmerising</Table.Cell>
            <Table.Cell>Unseen</Table.Cell>
            <Table.Cell>Expanding</Table.Cell>
            <Table.Cell>Swift</Table.Cell>
            <Table.Cell>Phantom</Table.Cell>
            <Table.Cell>Terrible</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Text>ESSENCE</Text>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>d66</Table.HeaderCell>
            <Table.HeaderCell>1</Table.HeaderCell>
            <Table.HeaderCell>2</Table.HeaderCell>
            <Table.HeaderCell>3</Table.HeaderCell>
            <Table.HeaderCell>4</Table.HeaderCell>
            <Table.HeaderCell>5</Table.HeaderCell>
            <Table.HeaderCell>6</Table.HeaderCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>Oil</Table.Cell>
            <Table.Cell>Earth</Table.Cell>
            <Table.Cell>Lore</Table.Cell>
            <Table.Cell>Lightning</Table.Cell>
            <Table.Cell>Ash</Table.Cell>
            <Table.Cell>Thorn</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>Crystal</Table.Cell>
            <Table.Cell>Air</Table.Cell>
            <Table.Cell>Fire</Table.Cell>
            <Table.Cell>Spirit</Table.Cell>
            <Table.Cell>Acid</Table.Cell>
            <Table.Cell>Vine</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>3</Table.Cell>
            <Table.Cell>Slime</Table.Cell>
            <Table.Cell>Fungus</Table.Cell>
            <Table.Cell>Death</Table.Cell>
            <Table.Cell>Stasis</Table.Cell>
            <Table.Cell>Sound</Table.Cell>
            <Table.Cell>Water</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>4</Table.Cell>
            <Table.Cell>Light</Table.Cell>
            <Table.Cell>Hex</Table.Cell>
            <Table.Cell>Blight</Table.Cell>
            <Table.Cell>Terror</Table.Cell>
            <Table.Cell>Mind</Table.Cell>
            <Table.Cell>Draught</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>5</Table.Cell>
            <Table.Cell>Doom</Table.Cell>
            <Table.Cell>Smoke</Table.Cell>
            <Table.Cell>Sight</Table.Cell>
            <Table.Cell>Mist</Table.Cell>
            <Table.Cell>Vermin</Table.Cell>
            <Table.Cell>Wood</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>6</Table.Cell>
            <Table.Cell>Pain</Table.Cell>
            <Table.Cell>Energy</Table.Cell>
            <Table.Cell>Feeling</Table.Cell>
            <Table.Cell>Bone</Table.Cell>
            <Table.Cell>Flesh</Table.Cell>
            <Table.Cell>Worm</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Text>FORM</Text>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>d66</Table.HeaderCell>
            <Table.HeaderCell>1</Table.HeaderCell>
            <Table.HeaderCell>2</Table.HeaderCell>
            <Table.HeaderCell>3</Table.HeaderCell>
            <Table.HeaderCell>4</Table.HeaderCell>
            <Table.HeaderCell>5</Table.HeaderCell>
            <Table.HeaderCell>6</Table.HeaderCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>Beacon</Table.Cell>
            <Table.Cell>Servant</Table.Cell>
            <Table.Cell>Vision</Table.Cell>
            <Table.Cell>Sentinel</Table.Cell>
            <Table.Cell>Ray</Table.Cell>
            <Table.Cell>Poison</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>Ring</Table.Cell>
            <Table.Cell>Crown</Table.Cell>
            <Table.Cell>Disk</Table.Cell>
            <Table.Cell>Web</Table.Cell>
            <Table.Cell>Guide</Table.Cell>
            <Table.Cell>Embers</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>3</Table.Cell>
            <Table.Cell>Chains</Table.Cell>
            <Table.Cell>Word</Table.Cell>
            <Table.Cell>Fang</Table.Cell>
            <Table.Cell>Gate</Table.Cell>
            <Table.Cell>Wall</Table.Cell>
            <Table.Cell>Dark</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>4</Table.Cell>
            <Table.Cell>Eye</Table.Cell>
            <Table.Cell>Aura</Table.Cell>
            <Table.Cell>Gust</Table.Cell>
            <Table.Cell>Whispers</Table.Cell>
            <Table.Cell>Wings</Table.Cell>
            <Table.Cell>Wave</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>5</Table.Cell>
            <Table.Cell>Cascade</Table.Cell>
            <Table.Cell>Shield</Table.Cell>
            <Table.Cell>Swarm</Table.Cell>
            <Table.Cell>Pillar</Table.Cell>
            <Table.Cell>Claw</Table.Cell>
            <Table.Cell>Dream</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>6</Table.Cell>
            <Table.Cell>Bubble</Table.Cell>
            <Table.Cell>Hand</Table.Cell>
            <Table.Cell>Dance</Table.Cell>
            <Table.Cell>Explosion</Table.Cell>
            <Table.Cell>Mask</Table.Cell>
            <Table.Cell>Rot</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Text>MAGIC SCHOOLS</Text>
      <List variant="ordered">
        <List.Item>ABJURATION: Protects, blocks, dispels, or banishes.</List.Item>
        <List.Item>CONJURATION: Summons creatures, objects, and teleports.</List.Item>
        <List.Item>
          DIVINATION: Reveals information, predicts the future, and reads minds.
        </List.Item>
        <List.Item>ENCHANTMENT: Charms, influences, and curses sentient creatures.</List.Item>
        <List.Item>EVOCATION: Creates and controls elemental and magical forces.</List.Item>
        <List.Item>ILLUSION: Generates false images and sensory deceptions.</List.Item>
        <List.Item>NECROMANCY: Manipulates life, death, and the undead.</List.Item>
        <List.Item>TRANSMUTATION: Transforms matter and alters physical properties.</List.Item>
      </List>
      <Text>WIZARD TALENTS</Text>
      <Text>ALCHEMIST</Text>
      <Text>
        Each session, you have a 4d Potions resource pool. You can have a minor potion and roll the
        pool, or drop 1 and roll for a major potion. You know recipes for your spell theorems, plus
        two more rolled on the Spell Crucible. Learn new recipes by sacrificing potions.
      </Text>
      <Text>ARCANE SPECIALTY</Text>
      <Text>
        Choose your specialty school. All of your spell theorems now have it plus another school.
        When casting, choose which school to use. On a critical with your specialty school, take
        spark.
      </Text>
      <Text>ARCANIST</Text>
      <Text>
        You take +1d when rolling an arcana's pool and ignore the first die that would be dropped.
        You also gain 3 minor arcana and 1 major arcana that you've either created or found.
      </Text>
      <Text>COLLEAGUES</Text>
      <Text>
        In every city, some towns, and the occasional dungeon, you can find a powerful, eccentric
        wizardly colleague who owes you a favor—or maybe you owe them one. If you go out of your way
        to meet and catch up, take spark.
      </Text>
      <Text>FAMILIAR</Text>
      <Text>
        You manifest a small magical creature, an extension of yourself. You can communicate
        telepathically and send it on simple tasks, making a story roll to see how it goes. By
        entering a trance, you can use its senses. You can also push yourself to cast a spell
        through it. If your familiar takes damage, it vanishes and reappears at the start of the
        next session.
      </Text>
      <Text>MASTERED THEOREM</Text>
      <Text>
        Choose one of your spell theorems. You take +1d when casting it and gain 1 extra potent
        spell casting of it per session. Your name becomes linked to it and it begins to spread in
        popularity throughout wizardry—track its spread with campaign pools.
      </Text>
      <Text>PREPARED SPELL</Text>
      <Text>
        You gain 1 story per session and can spend story to flashback to casting a spell with
        specific triggers. If you need to roll a montage to get access to a place, the GM always
        takes suspense in place of an impact move. Roll for the spell's effectiveness now.
      </Text>
      <blockquote>
        <Text>
          CREATING SPELL THEOREMS: Roll for style, essence, and form, then choose two of the words
          to form a phrase. Next, assign it a school of magic. You interpret these as the spell's
          touchstones when you cast. Here are some examples:
        </Text>
        <List variant="ordered">
          <List.Item>
            Roll: Terrible, Spirit, Gate → Spirit Gate sounds fun! You could assign it to Divina
            tion to speak to the dead or Conjuration to summon spirit warriors.
          </List.Item>
          <List.Item>
            Roll: Flaming, Thorn, Aura → Thorn Aura sounds fun! You could assign it Evoca tion to
            create a stabby shield or Enchantment to make someone a pariah.
          </List.Item>
        </List>
      </blockquote>
    </>
  );
};

export default Chapter03;
