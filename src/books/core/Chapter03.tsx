import Page, { type PageNavigationItem } from "@/components/app/Page";
import CoreTalent from "@/components/CoreTalent";
import Path from "@/components/Path";
import PathCard from "@/components/PathCard";
import StepList from "@/components/StepList";
import Talent from "@/components/Talent";
import Em from "@/components/ui/Em";
import Grid from "@/components/ui/Grid";
import Heading from "@/components/ui/Heading";
import List from "@/components/ui/List";
import Move from "@/components/ui/Move";
import Muted from "@/components/ui/Muted";
import Panel from "@/components/ui/Panel";
import Section from "@/components/ui/Section";
import Stack from "@/components/ui/Stack";
import Strong from "@/components/ui/Strong";
import StrongEm from "@/components/ui/StrongEm";
import Table from "@/components/ui/Table";
import Tag from "@/components/ui/Tag";
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
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const navigation: PageNavigationItem[] = [
  { name: "Starting a Campaign", anchor: "#starting-a-campaign" },
  { name: "Adventurer Paths", anchor: "#adventurer-paths" },
  {
    name: "Character Creation",
    anchor: "#character-creation",
    children: [{ name: "Backgrounds", anchor: "#backgrounds" }]
  },
  { name: "Paths & Talents", anchor: "#paths-and-talents" },
  { name: "Bard", anchor: "#bard" },
  {
    name: "Berserker",
    anchor: "#berserker"
  },
  {
    name: "Cleric",
    anchor: "#cleric"
  },
  {
    name: "Druid",
    anchor: "#druid"
  },
  {
    name: "Fighter",
    anchor: "#fighter"
  },
  { name: "Monk", anchor: "#monk" },
  {
    name: "Paladin",
    anchor: "#paladin"
  },
  {
    name: "Ranger",
    anchor: "#ranger"
  },
  {
    name: "Rogue",
    anchor: "#rogue"
  },
  {
    name: "Sorcerer",
    anchor: "#sorcerer"
  },
  {
    name: "Warlock",
    anchor: "#warlock"
  },
  {
    name: "Wizard",
    anchor: "#wizard"
  }
];

const Chapter03 = () => {
  return (
    <Page
      bookTitle="Grimwild Community Edition"
      title="Adventurers"
      pretitle="Chapter 3:"
      navigation={navigation}
    >
      <Heading level={2} id="starting-a-campaign">
        Starting a Campaign
      </Heading>
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
          <StrongEm>group arc</StrongEm>, a goal or theme they're interested in playing out as a
          group. You'll figure out what it means in play. (<Em>pg. 15</Em>)
        </StepList.Item>
        <StepList.Item>
          <Strong smallCaps>Make Characters</Strong>: Follow the character creation flow and make
          PCs together. Prioritize fitting in with the theme, setting, party, and group arc. (
          <Em>pg. 49</Em>)
        </StepList.Item>
      </StepList>
      <Section title="Adventuring Party">
        <Text>
          Your group of adventurers already know each other and have adventured together, at least
          for some time. Answer the prompts below together to get a sense of your party's concept to
          ensure that you <StrongEm>build characters that fit well</StrongEm> within that type of
          party.
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
      </Section>
      <Heading level={2} id="adventurer-paths">
        Adventurer Paths
      </Heading>
      <Text>
        <Strong>Paths</Strong> are collections of talents grouped by common adventuring themes. Each
        has a <Strong>core talent</Strong> and <Strong>core growth</Strong>—your core talent gets
        stronger as you gain levels.{" "}
        <Em>
          Remember, paths cannot be used to establish story details—backgrounds and talents can
        </Em>
        . Talents are meant to be re-skinned to fit your concept! Each path is covered in detail
        later in this chapter.
      </Text>
      <Grid gap="large">
        <PathCard name="Bard" description="Stirring the soul by song or deed." icon={<Lyre />} />
        <PathCard
          name="Berserker"
          description="Blood, mettle, and the sounds of battle."
          icon={<BatteredAxe />}
        />
        <PathCard name="Cleric" description="Faith is strong than any blade." icon={<Incense />} />
        <PathCard
          name="Druid"
          description="The fury of nature, untamed, relentless."
          icon={<HolyOak />}
        />
        <PathCard
          name="Fighter"
          description="Resolve honed with every strike."
          icon={<SwordsEmblem />}
        />
        <PathCard
          name="Monk"
          description="Perfection is a journey, not a destination."
          icon={<PunchBlast />}
        />
        <PathCard
          name="Paladin"
          description="An oath taken, a burden willingly carried."
          icon={<TemplarShield />}
        />
        <PathCard
          name="Ranger"
          description="No escape, no mercy, only the chase."
          icon={<DoubleShot />}
        />
        <PathCard
          name="Rogue"
          description="A whisper in the dark, then a quiet end."
          icon={<Cowled />}
        />
        <PathCard
          name="Sorcerer"
          description="Magic flows like blood, powerful and wild."
          icon={<MagicSwirl />}
        />
        <PathCard
          name="Warlock"
          description="Power always demands a hefty price."
          icon={<WarlockEye />}
        />
        <PathCard
          name="Wizard"
          description="Arcane knowledge, wield with precision."
          icon={<SpellBook />}
        />
      </Grid>
      <Heading level={2} id="character-creation">
        Character Creation
      </Heading>
      <Text>
        Follow the steps below to create your character. This order is often the simplest, but you
        should begin where your imagination takes you. Character sheets for each path and a blank
        sheet are available at <StrongEm>DrivethruRPG</StrongEm> or{" "}
        <StrongEm>odditypress.com</StrongEm> and you can check the website for digital character
        sheets and other online play tools.
      </Text>
      <StepList>
        <StepList.Item>
          <Strong smallCaps>Backgrounds</Strong>: Choose <StrongEm>two backgrounds</StrongEm>, each
          with <StrongEm>three wises</StrongEm>, that detail your heritage or professions, covering
          your tools of the trade and story details. (<Em>pg. 14</Em>)
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
          <StrongEm>three distinctive features</StrongEm>, words or short phrases that others soon
          notice about you, like <Em>strong hands</Em>, <Em>kind eyes</Em>, or a{" "}
          <Em>gravelly voice</Em>.
        </StepList.Item>
        <StepList.Item>
          <Strong smallCaps>Path</Strong>: Choose a <StrongEm>path</StrongEm>, gain its{" "}
          <StrongEm>core talent</StrongEm>, and pick either another talent from your path's list or
          a non-core talent from another path. (<Em>pg. 54 ~ 76</Em>)
        </StepList.Item>
        <StepList.Item>
          <Strong smallCaps>Stats</Strong>: Begin with <Strong>1</Strong> in each stat, then assign
          <StrongEm>4 more points</StrongEm> amongst them as you like, to a max of 3 in any single
          stat. (<Em>pg. 14</Em>)
        </StepList.Item>
        <StepList.Item>
          <Strong smallCaps>Arcs</Strong>: Choose <StrongEm>one or two character arcs</StrongEm> to
          explore. Don't get too detailed—these will get fleshed out during play and can be changed
          anytime. (<Em>pg. 15</Em>)
        </StepList.Item>
        <StepList.Item>
          <Strong smallCaps>Bonds</Strong>: Describe your characters in detail. As you listen,
          choose <StrongEm>one bond</StrongEm> you have towards each PC, matching together an
          intensity and a nature of the bond. (<Em>pg. 14</Em>)
        </StepList.Item>
        <StepList.Item>
          <Strong smallCaps>Review</Strong>: Revisit the campaign theme, setting, party identity,
          and group arcs you set. Make sure everything matches up well and make any adjustments.
        </StepList.Item>
        <StepList.Item>
          <Text>
            <Strong smallCaps>Montage</Strong>: Finish off with a montage of the last adventure you
            went on together. The GM gives a basic overview of the scenario, then you roll a{" "}
            <StrongEm>group montage</StrongEm> (2d each) to see how the whole adventure went. (
            <Em>pg. 13</Em>)
          </Text>
          <Text>
            Collaborate to narrate your outcomes, working in bonds and other details. (
            <Em>pg. 14</Em>)
          </Text>
        </StepList.Item>
      </StepList>
      <Heading level={3} id="backgrounds">
        Backgrounds
      </Heading>
      <Text>
        <Strong>Backgrounds</Strong> are the pillars of your backstory, revealing key aspects of who
        you are. They determine what counts as set dressing—tools of the trade and the story details
        you can add. Start with a simple word or phrase, leaving room for growth as your backstory
        is revealed during play. <StrongEm>They're just dots to connect later</StrongEm>.
      </Text>
      <Text>
        Backgrounds include your <StrongEm>heritage</StrongEm> (<Em>next page</Em>),{" "}
        <StrongEm>social class</StrongEm>, or <StrongEm>profession</StrongEm>. Each background comes
        with three <Strong>wises</Strong>—evocative phrases that highlight areas of knowledge,
        experience, or awareness from that background. They're especially useful for declaring story
        details, providing prompts and ideas to bring into play.
      </Text>
      <Text>
        <StrongEm>You have two backgrounds</StrongEm>. You can choose from the list (<Em>below</Em>
        ), use the Heritage crucible (<Em>next page</Em>), or use either of those as guidelines to
        create your own. Backgrounds and their wises should fit the campaign world and be approved
        by the GM. A heritage background isn't required if you prefer it as just set dressing.
      </Text>
      <Text>
        <Strong>
          Your backgrounds serve as a clear sign of the important aspects of who you are.
        </Strong>
      </Text>
      <List variant="unordered">
        <List.Item muted>
          You might have grown up poor on the streets, but if you have the Ragamuffin background,
          you learned a lot from that experience and it's a core part of who you are.
        </List.Item>
        <List.Item muted>
          You might be a dwarf, but having the Dwarf of the Iron Hills background lets you set the
          scope of what it means to be a person from that heritage.
        </List.Item>
        <List.Item muted>
          A fighter with the Warrior and Noble backgrounds feels substantially different than one
          with the Scoun drel and Eccentric backgrounds.
        </List.Item>
      </List>
      <Table textSize="small" variant="striped">
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>BACKGROUNDS &amp; WISES</Table.HeaderCell>
            <Table.HeaderCell>
              <Em>Also known as…</Em>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Strong smallCaps>Charlatan</Strong>, wise in <StrongEm>social graces</StrongEm>,{" "}
              <StrongEm>spotting marks</StrongEm>, and <StrongEm>timely misdirects</StrongEm>.
            </Table.Cell>
            <Table.Cell>
              <Muted allCaps>spy, swindler</Muted>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Strong smallCaps>Clergy</Strong>, wise in <StrongEm>allegories</StrongEm>,{" "}
              <StrongEm>signs of sin</StrongEm>, and <StrongEm>faiths of the world</StrongEm>.
            </Table.Cell>
            <Table.Cell>
              <Muted allCaps>cultist, priest</Muted>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Strong smallCaps>Commoner</Strong>, wise in <StrongEm>local customs</StrongEm>,{" "}
              <StrongEm>practical wisdom</StrongEm>, and <StrongEm>superstitions</StrongEm>.
            </Table.Cell>
            <Table.Cell>
              <Muted allCaps>farmer, villager</Muted>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Strong smallCaps>Crafter</Strong>, wise in <StrongEm>crafting quality</StrongEm>,{" "}
              <StrongEm>trade contacts</StrongEm>, and <StrongEm>wear and tear</StrongEm>.
            </Table.Cell>
            <Table.Cell>
              <Muted allCaps>artisan, smith</Muted>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Strong smallCaps>Drifter</Strong>, wise in <StrongEm>chance meetings</StrongEm>,{" "}
              <StrongEm>faraway tales</StrongEm>, and <StrongEm>lay of the land</StrongEm>.
            </Table.Cell>
            <Table.Cell>
              <Muted allCaps>explorer, vagabond</Muted>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Strong smallCaps>Entertainer</Strong>, wise in <StrongEm>legends and tales</StrongEm>
              , crowd behaviors, and <StrongEm>stage presence</StrongEm>.
            </Table.Cell>
            <Table.Cell>
              <Muted allCaps>storyteller, minstrel</Muted>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Strong smallCaps>Eccentric</Strong>, wise in random facts
              <StrongEm>hard truths</StrongEm>, <StrongEm>random facts</StrongEm>, and{" "}
              <StrongEm>strange snacks</StrongEm>.
            </Table.Cell>
            <Table.Cell>
              <Muted allCaps>hermit, recluse</Muted>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Strong smallCaps>Healer</Strong>, wise in signs of ailment
              <StrongEm>comfort foods</StrongEm>, <StrongEm>signs of ailment</StrongEm>, and{" "}
              <StrongEm>herbal properties</StrongEm>.
            </Table.Cell>
            <Table.Cell>
              <Muted allCaps>chirurgeon, herbalist</Muted>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Strong smallCaps>Hunter</Strong>, wise in <StrongEm>survival</StrongEm>,{" "}
              <StrongEm>tracks</StrongEm>, and <StrongEm>wildlife behavior</StrongEm>.
            </Table.Cell>
            <Table.Cell>
              <Muted allCaps>pathfinder, trapper</Muted>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Strong smallCaps>Mariner</Strong>, wise in <StrongEm>nautical lore</StrongEm>,{" "}
              <StrongEm>seafaring</StrongEm>, and <StrongEm>weather patterns</StrongEm>.
            </Table.Cell>
            <Table.Cell>
              <Muted allCaps>pirate, sailor</Muted>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Strong smallCaps>Mystic</Strong>, wise in <StrongEm>ancient prophecies</StrongEm>,{" "}
              <StrongEm>leylines</StrongEm>, and <StrongEm>symbology</StrongEm>.
            </Table.Cell>
            <Table.Cell>
              <Muted allCaps>occultist, seer</Muted>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Strong smallCaps>Noble</Strong>, wise in <StrongEm>diplomacy</StrongEm>,{" "}
              <StrongEm>influential contacts</StrongEm>, and luxuries.
            </Table.Cell>
            <Table.Cell>
              <Muted allCaps>aristocrat, diplomat</Muted>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Strong smallCaps>Ragamuffin</Strong>, wise in <StrongEm>hidden paths</StrongEm>,{" "}
              <StrongEm>rumors</StrongEm>, and <StrongEm>street smarts</StrongEm>.
            </Table.Cell>
            <Table.Cell>
              <Muted allCaps>cutpurse, urchin</Muted>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Strong smallCaps>Sage</Strong>, wise in <StrongEm>ancient histories</StrongEm>,{" "}
              <StrongEm>peoples of the world</StrongEm>, and <StrongEm>philosophy</StrongEm>.
            </Table.Cell>
            <Table.Cell>
              <Muted allCaps>lorekeeper, scholar</Muted>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Strong smallCaps>Scoundrel</Strong>, wise <StrongEm>in escape routes</StrongEm>,{" "}
              <StrongEm>signs of weakness</StrongEm>, and
              <StrongEm>shady connections</StrongEm>.
            </Table.Cell>
            <Table.Cell>
              <Muted allCaps>brigand, thief</Muted>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Strong smallCaps>Trader</Strong>, wise in <StrongEm>cultural tastes</StrongEm>,{" "}
              <StrongEm>people's desires</StrongEm>, and <StrongEm>rare goods</StrongEm>.
            </Table.Cell>
            <Table.Cell>
              <Muted allCaps>merchant, peddler</Muted>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Strong smallCaps>Warrior</Strong>, wise in <StrongEm>battle plans</StrongEm>,{" "}
              <StrongEm>military contacts</StrongEm>, and{" "}
              <Strong>
                ``
                <Em>war stories</Em>
              </Strong>
              .
            </Table.Cell>
            <Table.Cell>
              <Muted allCaps>sellsword, soldier</Muted>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Section title="Heritage">
        <Text>
          <Strong>Heritage</Strong> reflects your culture, ancestry, and homeland. Use the Heritage
          Crucible below for inspiration: roll three words, pick two, and combine them. You can
          interpret these words literally or figuratively, or use them as they are.
        </Text>
        <Text>
          <Strong>Once you set your heritage, give it three wises</Strong>. The backgrounds (
          <Em>previous page</Em>) can serve as inspiration. These wises reflect traits commonly
          shared by most people from your heritage. This continues throughout the game as you figure
          out more about your people through play. In short,{" "}
          <StrongEm>
            you know what the Orcs of the Verdant Boglands are like because you are one!
          </StrongEm>
        </Text>
        <Text>
          <Strong smallCaps>Heritage Talent</Strong>: Some heritages have innate capabilities beyond
          their wises. You can link the second talent at character creation to your heritage, or
          work with the GM to create one. This makes it a common trait amongst your people.
        </Text>
        <List variant="unordered">
          <List.Item muted>
            The Turtlefolk have a thick shell, represented with the Bulwark talent.
          </List.Item>
          <List.Item muted>The Birdfolk can fly, so you create a talent to represent it.</List.Item>
          <List.Item muted>
            The Halflings of the Great Caverns can see in total darkness, so you create a talent.
          </List.Item>
        </List>
        <Text>
          If something isn't strong enough to warrant a talent, work with the GM to add it in as set
          dressing—a bit of flavor, but can't be relied upon to impact scenes.
        </Text>
        <Panel
          title="Heritage Crucible"
          description="Roll 1 of each, choose 2 or 3, then interpret the results."
          border
          rowBorders
        >
          <Panel.Row>
            <Table cellPadding="tight" textSize="small" fullWidth>
              <Table.Head>
                <Table.Row>
                  <Table.HeaderCell colSpan={6} align="center" allCaps>
                    Folk
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Head>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>Vagrants</Table.Cell>
                  <Table.Cell>Riders</Table.Cell>
                  <Table.Cell>Gnomes</Table.Cell>
                  <Table.Cell>Dwarves</Table.Cell>
                  <Table.Cell>Nomads</Table.Cell>
                  <Table.Cell>Elves</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Birdfolk</Table.Cell>
                  <Table.Cell>Clans</Table.Cell>
                  <Table.Cell>Pilgrims</Table.Cell>
                  <Table.Cell>Tieflings</Table.Cell>
                  <Table.Cell>Cityfolk</Table.Cell>
                  <Table.Cell>Orcs</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Wayfarers</Table.Cell>
                  <Table.Cell>Seafarers</Table.Cell>
                  <Table.Cell>Turtlefolk</Table.Cell>
                  <Table.Cell>Goliaths</Table.Cell>
                  <Table.Cell>Humans</Table.Cell>
                  <Table.Cell>Forestfolk</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Goblins</Table.Cell>
                  <Table.Cell>Tribes</Table.Cell>
                  <Table.Cell>Citizens</Table.Cell>
                  <Table.Cell>Dragonborn</Table.Cell>
                  <Table.Cell>Halflings</Table.Cell>
                  <Table.Cell>Cavefolk</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Islanders</Table.Cell>
                  <Table.Cell>Keepers</Table.Cell>
                  <Table.Cell>Marauders</Table.Cell>
                  <Table.Cell>Tradesfolk</Table.Cell>
                  <Table.Cell>Merchants</Table.Cell>
                  <Table.Cell>Raiders</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Fisherfolk</Table.Cell>
                  <Table.Cell>Settlers</Table.Cell>
                  <Table.Cell>Carvers</Table.Cell>
                  <Table.Cell>Valleyfolk</Table.Cell>
                  <Table.Cell>Skywatchers</Table.Cell>
                  <Table.Cell>Outcasts</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Panel.Row>
          <Panel.Row>
            <Table cellPadding="tight" textSize="small" fullWidth>
              <Table.Head>
                <Table.Row>
                  <Table.HeaderCell colSpan={6} align="center" allCaps>
                    Mood
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Head>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>Twisted</Table.Cell>
                  <Table.Cell>Lush</Table.Cell>
                  <Table.Cell>Scorched</Table.Cell>
                  <Table.Cell>Rolling</Table.Cell>
                  <Table.Cell>Abyssal</Table.Cell>
                  <Table.Cell>Feral</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Steel</Table.Cell>
                  <Table.Cell>Floating</Table.Cell>
                  <Table.Cell>Echoing</Table.Cell>
                  <Table.Cell>Bountiful</Table.Cell>
                  <Table.Cell>Desolate</Table.Cell>
                  <Table.Cell>Serene</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Verdant</Table.Cell>
                  <Table.Cell>Crimson</Table.Cell>
                  <Table.Cell>Misty</Table.Cell>
                  <Table.Cell>Great</Table.Cell>
                  <Table.Cell>Rocky</Table.Cell>
                  <Table.Cell>Whispering</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Golden</Table.Cell>
                  <Table.Cell>Shattered</Table.Cell>
                  <Table.Cell>Glimmering</Table.Cell>
                  <Table.Cell>Sunken</Table.Cell>
                  <Table.Cell>Windswept</Table.Cell>
                  <Table.Cell>Grim</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Emerald</Table.Cell>
                  <Table.Cell>Haunted</Table.Cell>
                  <Table.Cell>Distant</Table.Cell>
                  <Table.Cell>Coastal</Table.Cell>
                  <Table.Cell>Howling</Table.Cell>
                  <Table.Cell>Prosperous</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Burning</Table.Cell>
                  <Table.Cell>Enchanted</Table.Cell>
                  <Table.Cell>Silent</Table.Cell>
                  <Table.Cell>Gloomy</Table.Cell>
                  <Table.Cell>Eternal</Table.Cell>
                  <Table.Cell>Restless</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Panel.Row>
          <Panel.Row>
            <Table cellPadding="tight" textSize="small" fullWidth>
              <Table.Head>
                <Table.Row>
                  <Table.HeaderCell colSpan={6} align="center" allCaps>
                    Land
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Head>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>Peaks</Table.Cell>
                  <Table.Cell>Kingdom</Table.Cell>
                  <Table.Cell>Desert</Table.Cell>
                  <Table.Cell>Plains</Table.Cell>
                  <Table.Cell>Sea</Table.Cell>
                  <Table.Cell>Glaciers</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Confederacy</Table.Cell>
                  <Table.Cell>Wilds</Table.Cell>
                  <Table.Cell>Canyons</Table.Cell>
                  <Table.Cell>North</Table.Cell>
                  <Table.Cell>Meadows</Table.Cell>
                  <Table.Cell>Sands</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Fjords</Table.Cell>
                  <Table.Cell>Marsh</Table.Cell>
                  <Table.Cell>Highlands</Table.Cell>
                  <Table.Cell>Moors</Table.Cell>
                  <Table.Cell>Outposts</Table.Cell>
                  <Table.Cell>Wastelands</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Coast</Table.Cell>
                  <Table.Cell>Isles</Table.Cell>
                  <Table.Cell>Caverns</Table.Cell>
                  <Table.Cell>Ruins</Table.Cell>
                  <Table.Cell>Cliffs</Table.Cell>
                  <Table.Cell>Coalition</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Badlands</Table.Cell>
                  <Table.Cell>Thickets</Table.Cell>
                  <Table.Cell>Fenlands</Table.Cell>
                  <Table.Cell>Hollows</Table.Cell>
                  <Table.Cell>Boomtown</Table.Cell>
                  <Table.Cell>Blightlands</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Boglands</Table.Cell>
                  <Table.Cell>Jungletown</Table.Cell>
                  <Table.Cell>Borderlands</Table.Cell>
                  <Table.Cell>Underworld</Table.Cell>
                  <Table.Cell>Riverlands</Table.Cell>
                  <Table.Cell>Groves</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Panel.Row>
        </Panel>
        <List variant="unordered">
          <List.Item muted>
            <Strong smallCaps>Elves of Boomtown</Strong>, wise in <Strong>alchemicals</Strong>,{" "}
            <Strong>trade contacts</Strong>, and <Strong>tales of far lands</Strong>.
          </List.Item>
          <List.Item muted>
            <Strong smallCaps>Cityfolk of the Serene Kingdom</Strong>, wise in{" "}
            <Strong>cultural tastes</Strong>, <Strong>signs of sin</Strong>, and{" "}
            <Strong>rare goods</Strong>.
          </List.Item>
          <List.Item muted>
            <Strong smallCaps>Vagrants of the Burning Barrens</Strong>, wise in{" "}
            <Strong>comfort foods</Strong>,<Strong>survival</Strong>, and{" "}
            <Strong>war stories</Strong>.
          </List.Item>
        </List>
        <Text>
          <Strong smallCaps>Evolving Backgrounds</Strong>: Backgrounds can evolve as the story
          unfolds. Start with a simple name and leave room for growth as your backstory is revealed.
          Don't corner your character growth before starting. You might start as a <Em>Mariner</Em>,
          refine it to <Em>Pirate</Em>, then expand on it to <Em>Blackthorn Reaver</Em> or{" "}
          <Em>First Mate under Captain Stormclaw</Em> as it comes up in the story. Or you can just
          keep it simple!
        </Text>
      </Section>
      <Heading level={2} id="paths-and-talents">
        Paths &amp; Talents
      </Heading>
      <Text>
        The remainder of this chapter details the 12 adventurer paths available in the game. Below,
        you'll find explanations of common options and terms used throughout the paths. These
        clarifications help you better understand how to customize your character and make use of
        talents.
      </Text>
      <List variant="ordered">
        <List.Item>
          <Strong>Core Growth</Strong>: Your core talent powers up as you level. For “every 2
          levels,” gain bonuses at levels 2, 4, 6. For “every 3 levels,” it's 3, 6. Remember that 7
          is the maximum level.
        </List.Item>
        <List.Item>
          <Strong>Cross-Path Talents</Strong>: You're free to choose talents from other paths if
          they fit your char acter's story. Just explain how your character picked up these
          skills—it's a great way to add depth to your character.
        </List.Item>
        <List.Item>
          <Strong>Re-Skin Talents</Strong>: To avoid redundancy, similar talents across paths have
          been avoided. Instead, you're encouraged to “re-skin” talents to fit your character's
          theme. For example, the Bulwark (armor) talent could be reinterpreted as a magical mage
          shield for a wizard.
        </List.Item>
        <List.Item>
          <Strong>Push Yourself</Strong>: Some talents require you to push yourself to activate.
          <StrongEm>These talents can be activated once per session for free</StrongEm>. After the
          first use, you must push yourself as normal to activate it again, marking a relevant stat.
          Choose your moments wisely.
        </List.Item>
        <List.Item>
          <Strong>“When Given Time”</Strong>: This phrase included in several talents means you need
          time to do what the talent lets you, but how long that is leaves room for interpretation.
          Go with what makes sense, but at the very least it's a narrative beat, a PC action, or
          some time unhindered by disruptive forces. Use story rolls or group consensus to decide
          what counts.
        </List.Item>
        <List.Item>
          <Strong>“Always”</Strong>: When a talent includes this specific wording, it means you have
          narrative permission to almost always do what's indicated. However, this can be stopped by
          a <Move>GM Counter</Move> move. It's best to think that “always” means 95% of the time.
        </List.Item>
        <List.Item>
          <Strong>Choices</Strong>: Italicized words separated by em dashes represent lists of
          choices, like: <Em>one—two—three</Em>. These represent a limited amount of options you
          must choose from. If instead a talent suggests a type of choice, saying{" "}
          <Em>“you can do things like A and B”</Em>, then you can extrapolate that out into other
          similar actions.
        </List.Item>
        <List.Item>
          <Strong>On a Perfect</Strong>: Any talent that allows you to do something on a perfect, it
          also triggers on a critical.
        </List.Item>
        <List.Item>
          Optional Character Building: Some paths include additional character-building fea tures,
          marked with an [Optional] tag. If they're not relevant to your character, you can pass
          them up.
        </List.Item>
        <List.Item>
          <Strong>Roleplaying Advice</Strong>: Some paths include advice on roleplaying that
          character path, especially on parts that might be somewhat unfamiliar. It's entirely
          optional, but if they resonate with you, lean into them to make those aspects important in
          the game.
        </List.Item>
      </List>
      <Text>
        In Chapter 7: Extras, you can also find a large list of distinctive features to choose from
        to help flesh out your characters, as well as party-building questions that help link
        together characters' backstories and add depth to their relationships.
      </Text>
      <Path id="bard" name="Bard" also={["Minstrel", "Orator", "Warlord"]}>
        <Text>
          <Em>
            You spin tales and songs that stir emotions, inspire bravery, and turn simple deeds into
            legends.
          </Em>
        </Text>
      </Path>
      <CoreTalent
        name="Bardsong"
        growth="Every 3 levels, gain +1 bardsong and +1 melody per session."
      >
        <Text>
          Each session, you can sing <Strong>3 bardsongs</Strong>, rolling Presence. Sing one to
          pull off a <StrongEm>potent feat of emotional influence</StrongEm>, like{" "}
          <Em>eliciting a vex response in an NPC</Em>, <Em>buffing a group of allies</Em>, or{" "}
          <Em>inflicting hindrances on enemies</Em>. You can also sing one to{" "}
          <StrongEm>interrupt</StrongEm> an impact move. A bardsong's effect flows from its
          composition. Choose a <StrongEm>style</StrongEm>,{" "}
          <Strong>
            <em>tune</em>
          </Strong>
          , and <StrongEm>impact</StrongEm> (<Em>below</Em>) that matches the effect.
        </Text>
        <Text>
          Each session, you can also sing <Strong>3 melodies</Strong>, spur of the moment tunes
          without specific composition. Spend them to: assist{" "}
          <Em>without risk—calm or intensify a vex response—clear a mark</Em>. These don't require a
          roll. You cannot affect yourself.
        </Text>
      </CoreTalent>
      <Panel title="Song Composition" description="[Style] + [Tune] of [Impact]" border>
        <Stack direction="row" spacing="md" wrap>
          <Stack.Item flex={1} flexShrink="none">
            <Table align="center" textSize="small" variant="simple" fullWidth>
              <Table.Head>
                <Table.Row>
                  <Table.HeaderCell>STYLE</Table.HeaderCell>
                  <Table.HeaderCell>TUNE</Table.HeaderCell>
                  <Table.HeaderCell>IMPACT</Table.HeaderCell>
                </Table.Row>
              </Table.Head>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <Em>chaotic</Em>
                  </Table.Cell>
                  <Table.Cell>
                    <Em>anthem</Em>
                  </Table.Cell>
                  <Table.Cell>
                    <Em>affection</Em>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Em>dire</Em>
                  </Table.Cell>
                  <Table.Cell>
                    <Em>aria</Em>
                  </Table.Cell>
                  <Table.Cell>
                    <Em>awe</Em>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Em>fiery</Em>
                  </Table.Cell>
                  <Table.Cell>
                    <Em>ballad</Em>
                  </Table.Cell>
                  <Table.Cell>
                    <Em>calm</Em>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Em>gentle</Em>
                  </Table.Cell>
                  <Table.Cell>
                    <Em>chant</Em>
                  </Table.Cell>
                  <Table.Cell>
                    <Em>despair</Em>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Em>haunting</Em>
                  </Table.Cell>
                  <Table.Cell>
                    <Em>ditty</Em>
                  </Table.Cell>
                  <Table.Cell>
                    <Em>fear</Em>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Em>playful</Em>
                  </Table.Cell>
                  <Table.Cell>
                    <Em>hymn</Em>
                  </Table.Cell>
                  <Table.Cell>
                    <Em>fury</Em>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Em>nostalgic</Em>
                  </Table.Cell>
                  <Table.Cell>
                    <Em>ode</Em>
                  </Table.Cell>
                  <Table.Cell>
                    <Em>hope</Em>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Em>rousing</Em>
                  </Table.Cell>
                  <Table.Cell>
                    <Em>requiem</Em>
                  </Table.Cell>
                  <Table.Cell>
                    <Em>joy</Em>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Em>vicious</Em>
                  </Table.Cell>
                  <Table.Cell>
                    <Em>rhapsody</Em>
                  </Table.Cell>
                  <Table.Cell>
                    <Em>mockery</Em>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Em>whimsical</Em>
                  </Table.Cell>
                  <Table.Cell>
                    <Em>serenade</Em>
                  </Table.Cell>
                  <Table.Cell>
                    <Em>wonder</Em>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Stack.Item>
          <Stack flex={2} minWidth="medium" spaceBetween>
            <Stack.Item>
              <Text align="center">
                <Strong allCaps>Style</Strong>
              </Text>
              <Text align="center">How you feel when you're singing the song.</Text>
            </Stack.Item>
            <Stack.Item>
              <Text align="center">
                <Strong allCaps>Tune</Strong>
              </Text>
              <Text align="center">A familiar form that anyone can recognize.</Text>
            </Stack.Item>
            <Stack.Item>
              <Text align="center">
                <Strong allCaps>Impact</Strong>
              </Text>
              <Text align="center">How you want the song to make them feel.</Text>
            </Stack.Item>
          </Stack>
        </Stack>
      </Panel>
      <Text>
        Below are some example compositions and how potent feats of emotional influence can be
        brought into play:
      </Text>
      <List variant="unordered">
        <List.Item textSize="small" muted>
          <Strong>Haunting Requiem of Fear</Strong>: The villagers abandon their homes, terrified of
          shadows that aren't there.
        </List.Item>
        <List.Item textSize="small" muted>
          <Strong>Playful Ballad of Joy</Strong>: A tense negotiation dissolves into laughter,
          everyone suddenly sharing joyful stories.
        </List.Item>
        <List.Item textSize="small" muted>
          <Strong>Whimsical Serenade of Wonder</Strong>: The towering golem halts, transfixed by the
          sudden beauty of a flower.
        </List.Item>
        <List.Item textSize="small" muted>
          <Strong>Dire Chant of Despair</Strong>: The dragon, mid-flight, veers away in terror,
          retreating to its lair in panic.
        </List.Item>
        <List.Item textSize="small" muted>
          <Strong>Fiery Anthem of Fury</Strong>: A normally docile treant uproots itself, thrashing
          wildly, lashing out at all nearby.
        </List.Item>
        <List.Item textSize="small" muted>
          <Strong>Nostalgic Ode of Hope</Strong>: War-weary soldiers rally, tears flowing, as they
          march against impossible odds.
        </List.Item>
        <List.Item textSize="small" muted>
          <Strong>Chaotic Hymn of Mockery</Strong>: The proud king stumbles, embarrassed, as the
          crowd laughs uncontrollably.
        </List.Item>
        <List.Item textSize="small" muted>
          <Strong>Rousing Rhapsody of Affection</Strong>: The rampaging dire wolf stops and nuzzles
          someone nearby, tail wagging.
        </List.Item>
        <List.Item textSize="small" muted>
          <Strong>Gentle Anthem of Calm</Strong>: The hydra lowers its heads, each one slowly
          settling into peaceful slumber.
        </List.Item>
        <List.Item textSize="small" muted>
          <Strong>Vicious Ditty of Fury</Strong>: A tavern erupts in wanton destruction, patrons
          consumed by primal rage.
        </List.Item>
      </List>
      <Heading level={3}>Bard Talents</Heading>
      <Talent name="Bardic Lore">
        <Text>
          You gain any 3 wises and 1 extra story per session. You take +1d on any story rolls
          pertaining to what you know or story details you add.
        </Text>
      </Talent>
      <Talent name="Dynamic Entrance">
        <Text>
          You can always appear in a scene anywhere and anytime, limited only by your physical
          capabilities. Make a 3d story roll to <Move>Set the Scene</Move> for your entrance.
        </Text>
      </Talent>
      <Talent name="Forked Tongue">
        <Text>
          When given time, you can tell <StrongEm>potent lies</StrongEm> like{" "}
          <Em>telling the king you're their bastard</Em> or{" "}
          <Em>a prophecy foretelling the fall of the capital</Em>. You can{" "}
          <Strong>push yourself</Strong> to do it on the spot.
        </Text>
      </Talent>
      <Talent name="Friendly Face">
        <Text>
          In any new town or district of a city you go to, you can always:{" "}
          <Em>get recognized by a fan—know someone useful—quickly make a friend</Em>. They'll gladly
          do you a reasonable favor. <Strong>Take spark</Strong> if you promise to pay them back.
        </Text>
      </Talent>
      <Talent name="Influence">
        <Text>
          Twice per session, you can <StrongEm>invoke an ally's bond with you</StrongEm> to increase
          their die roll result by 1 <Muted>(3→4)</Muted>. You don't have to be in the same
          scene—they might recall a memory.
        </Text>
      </Talent>
      <Talent name="Jack of All Trades">
        <Text>
          Increase one of your stats that's a 1 to a 2. You also take +1d on montage rolls.
        </Text>
      </Talent>
      <Talent name="Wordplay">
        <Text>
          On a perfect defense roll when the situation allows for verbal quips, you make them:
          <Em>embarrass themself—let a secret slip—focus on or lose track of you</Em>. Once per
          session, you can goad the GM into spending suspense on conversation.
        </Text>
      </Talent>
      <Panel>
        <Text>
          <Strong smallCaps>Bardic Instrument(s)</Strong> <Tag>Advice</Tag>: Your instrument or
          instruments are an important part of what makes you a bard. Weave them into scenes when
          you can. Try to find an instrument that both matches your PC's personality and can work in
          many scenes.
        </Text>
        <Table variant="simple" textSize="small" fullWidth>
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
      </Panel>
      <Path id="berserker" name="Berserker" also={["Juggernaut", "Reaver", "Warbringer"]}>
        <Text>
          <Em>
            You don't just fight—you crush anything and everything in your path until nothing stands
            before you.
          </Em>
        </Text>
      </Path>
      <CoreTalent
        name="Frenzy"
        growth="Every 3 levels, gain 1 free activation of this per session."
      >
        <Text>
          Once per session, or when you get bloodied or take vex, you can enter a{" "}
          <Strong>frenzy</Strong> for a scene. During the frenzy, you can only take aggressive
          actions. You also:
        </Text>
        <List variant="unordered">
          <List.Item>
            Take +1d for each mark you have and ignore all thorns from harm and marks.
          </List.Item>
          <List.Item>
            Inflict <StrongEm>collateral damage</StrongEm> on each action roll, regardless of the
            outcome. You must choose one:{" "}
            <Em>send something flying—smash mooks—throw insults—wreck something</Em>.
          </List.Item>
          <List.Item>
            Always get a final action when dropped. On a critical, ignore getting dropped.
          </List.Item>
        </List>
        <Text>
          You can only exit a frenzy when <Em>no challenger stands before you</Em>, you get dropped,
          or you <Strong>push yourself</Strong> to calm down.
        </Text>
      </CoreTalent>
      <Text>
        <Strong allCaps>Frenzy Source</Strong> <Tag>Optional</Tag>
      </Text>
      <Text>
        Where does your wild power and ability to withstand pain come from? Choose 2 and smash them
        together to form the source and 1 that you have disdain for.
      </Text>
      <List variant="unordered" columns={2} italic>
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
      <Text>
        <Strong allCaps>Scars</Strong> <Tag>Optional</Tag>
      </Text>
      <Text>
        Your ability to ignore pain has led you to take far more damage than most warriors. What
        scars do you bear that show your reckless nature? Choose 3 that you can show off.
      </Text>
      <List variant="unordered" columns={3} italic>
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
      <Heading level={3}>Berserker Talents</Heading>
      <Talent name="Fearsome">
        <Text>
          Your presence instills fear in others. The GM judges an NPC's response, or you can spend
          story to set it: <Em>hostile—nervous—respectful—scared</Em>. You can{" "}
          <Strong>push yourself</Strong> to pull off a{" "}
          <StrongEm>potent feat of intimidation</StrongEm>, like <Em>staring down a dragon</Em> or{" "}
          <Em>demanding to see the king</Em>.
        </Text>
      </Talent>
      <Talent name="Flesh Wounds">
        <Text>
          When you take physical damage, only a disaster can drop you. You can get bloodied multiple
          times. Each extra time inflicts +1t on rolls. These extra thorns can never be ignored
          <Muted>(e.g., Frenzy and Oathsworn talents)</Muted> and they also apply thorns to any
          attempt to heal you.
        </Text>
      </Talent>
      <Talent name="Into the Fray">
        <Text>
          When you're the first into an intense situation,{" "}
          <StrongEm>5s count as 6s, but 4s count as 1s</StrongEm> on your first roll. You also{" "}
          <Strong>setup</Strong> the first person following you regardless of your roll outcome.
        </Text>
      </Talent>
      <Talent name="Joyful Warrior">
        <Text>
          On a critical or when bloodied in battle, you <Strong>take spark</Strong> and can:{" "}
          <Em>clear one mark from each ally—bring a dropped (not dead) ally back into the scene</Em>
          .
        </Text>
      </Talent>
      <Talent name="Mighty">
        <Text>
          When given time, you can pull off <StrongEm>potent feats of raw strength</StrongEm>, like{" "}
          <Em>uprooting a tree</Em> or <Em>breaking through a castle gate</Em>. You can{" "}
          <Strong>push yourself</Strong> to do it on the spot.
        </Text>
      </Talent>
      <Talent name="Overkill">
        <Text>
          On a critical when bringing violence, threats, or destruction to bear, you can:{" "}
          <Em>cause an extra secondary effect—roll a task pool twice</Em>.
        </Text>
      </Talent>
      <Talent name="Warsongs" prohibited="Bard">
        <Text>
          Each session, you can sing 2 bardsongs (<Em>pg. 54</Em>). Write down the composition of
          the only 3 songs you know.
        </Text>
      </Talent>
      <Path id="cleric" name="Cleric" also={["Priest", "Zealot", "Chosen One"]}>
        <Text>
          <Em>
            You serve as a conduit for the divine, channeling holy power to safeguard the faithful
            and do your god's bidding.
          </Em>
        </Text>
      </Path>
      <CoreTalent
        name="Channel Divinity"
        growth="Every 2 levels, increase one domain pool by 1d (max 8d)"
      >
        <Text>
          Your god grants you spellcasting ability. You roll a domain pool to cast and that domain
          pool and your god's epithet serve as touchstones.
        </Text>
        <Text>
          Create your god (<Em>below</Em>). You have <Strong>1 major domain</Strong>, a 6d power
          pool, and <Strong>2 minor domains</Strong>, each a 4d power pool. These pools replenish
          each session. You can drop 1d and roll the domain to cast a{" "}
          <StrongEm>potent spell</StrongEm>.
        </Text>
      </CoreTalent>
      <Section title="Create Your God">
        <Text>
          Create your god by naming them and giving them a thematic epithet (
          <Em>e.g., Zerenda, Goddess of Storms</Em>). You are expected to follow its tenets, though
          not a strict requirement. Choose 1 major domain and 2 minor domains from below, or make
          your own:
        </Text>
        <Panel border rowBorders>
          <Panel.Row>
            <Text>
              <Strong allCaps>Blessing</Strong> • Enhance with buffs, provide utility, and bring
              good fortune.
            </Text>
            <Text size="small" muted>
              <Strong>Tenets</Strong>: Pick up the weak and vulnerable. Create happiness when none
              exists.
            </Text>
            <Text size="small" muted>
              <Strong>Magic</Strong>: Bless a battlehammer. Walk on water. Fill the forlorn duke's
              heart with hope.
            </Text>
          </Panel.Row>
          <Panel.Row>
            <Text>
              <Strong allCaps>Divination</Strong> • Unveil secrets, provide foresight, and commune
              with spirits.
            </Text>
            <Text size="small" muted>
              <Strong>Tenets</Strong>: Uncover and share hidden truths. Respect and act on divine
              signs.
            </Text>
            <Text size="small" muted>
              <Strong>Magic</Strong>: Find a safe path. Reveal where the thief is hiding. Know
              tomorrow's weather.
            </Text>
          </Panel.Row>
          <Panel.Row>
            <Text>
              <Strong allCaps>Dominion</Strong> • Influence, command, and control sentient
              creatures.
            </Text>
            <Text size="small" muted>
              <Strong>Tenets</Strong>: Enforce peace and stability. Inspire others through your
              actions.
            </Text>
            <Text size="small" muted>
              <Strong>Magic</Strong>: Convince someone to help you. Make someone forget something.
              Calm an angry mob.
            </Text>
          </Panel.Row>
          <Panel.Row>
            <Text>
              <Strong allCaps>Healing</Strong> • Heal wounds, cure diseases, and wash away mental
              anguish.
            </Text>
            <Text size="small" muted>
              <Strong>Tenets</Strong>: Bring healing to those truly in need. Comfort the distressed.
            </Text>
            <Text size="small" muted>
              <Strong>Magic</Strong>: Heal a broken bone. Relieve someone of stress. Stop the
              bleeding.
            </Text>
          </Panel.Row>
          <Panel.Row>
            <Text>
              <Strong allCaps>Radiance</Strong> • Dispel darkness with light and purge evil with
              holy fire.
            </Text>
            <Text size="small" muted>
              <Strong>Tenets</Strong>: Burn out corruption at its source. Point out the error in
              someone's ways.
            </Text>
            <Text size="small" muted>
              <Strong>Magic</Strong>: Cauterize a wound. Destroy a skeleton. Reveal an invisible
              enemy.
            </Text>
          </Panel.Row>
          <Panel.Row>
            <Text>
              <Strong allCaps>Warding</Strong> • Provide protection and defense for those in need.
            </Text>
            <Text size="small" muted>
              <Strong>Tenets</Strong>: Protect those who cannot defend themselves &amp; strengthen
              communities.
            </Text>
            <Text size="small" muted>
              <Strong>Magic</Strong>: Shield an ally from harm. Block a doorway. Create sentries.
            </Text>
          </Panel.Row>
          <Panel.Row>
            <Text>
              <Strong allCaps>Wrath</Strong> • Inflict damage and curses upon those deserving.
            </Text>
            <Text size="small" muted>
              <Strong>Tenets</Strong>: Deliver punishment to those deserving it, keeping your mercy
              for the rare few worth saving.
            </Text>
            <Text size="small" muted>
              <Strong>Magic</Strong>: Shatter the killer's weapon. Blind a traitor. Curse a thief
              with misfortune.
            </Text>
          </Panel.Row>
        </Panel>
      </Section>
      <Heading level={3}>Cleric Talents</Heading>
      <Talent name="Blessed">
        <Text>
          Once per session, you can re-roll a roll you just made as your god attempts to intervene.
          The re-roll is made without any thorns on it. On a perfect, <Strong>take spark</Strong>.
        </Text>
      </Talent>
      <Talent name="Devout">
        <Text>
          Intelligent creatures recognize you as a person of deep honesty and only your most hated
          enemies would treat you with a lack of respect or doubt your word. You are never seriously
          injured or killed by an enemy, unless they have no choice. Any creature with speech will
          always hear you out. This aura is upheld by your unwavering commitment—you must{" "}
          <Strong>push yourself</Strong> to act in bad faith (<Em>no free activation</Em>).
        </Text>
      </Talent>
      <Talent name="Healer">
        <Text>
          You take +1d when you heal someone, with magic or treatment. On a critical, both of you
          <Strong>take spark</Strong>.
        </Text>
      </Talent>
      <Talent name="Iron Will">
        <Text>
          Each session, you have a <Strong>3d Iron Will</Strong> resource pool. When you get rattled
          or take vex, roll the pool. If dice remain, ignore the damage. If the situation allows for
          it, you can also lash out at the cause or a bystander and:{" "}
          <Em>instill dread in their heart—sow doubt in their mind</Em>.
        </Text>
      </Talent>
      <Talent name="Rings False">
        <Text>
          You always know when someone is lying, though not necessarily the truth. You take +1d on a
          follow-up if you reveal you know they're lying.
        </Text>
      </Talent>
      <Talent name="Sermons">
        <Text>
          When given time, you can pull off{" "}
          <StrongEm>potent feats of persuasion in the name of your beliefs</StrongEm>, like{" "}
          <Em>commanding a crowd to bring the duke for judgment</Em> or{" "}
          <Em>showing the goblins the glory of your god</Em>. You can also{" "}
          <Strong>push yourself</Strong> to do it on the spot. One time only, you can make this a
          ritual-level effect.
        </Text>
      </Talent>
      <Talent name="Shepherd">
        <Text>
          When you assist an ally on a defense roll that would leave them rattled or with vex, you
          can <StrongEm>invoke your bond</StrongEm> to take +1d on the roll. On a perfect, you both{" "}
          <Strong>take spark</Strong>.
        </Text>
      </Talent>
      <Panel>
        <Text>
          <Strong smallCaps>Holy Symbol</Strong> <Tag>Advice</Tag>: Deities and the religions that
          grow around them will almost universally express their following with a recognizable
          symbol. Draw your own on your sheet using those below as inspiration, or choose one of
          these!
        </Text>
      </Panel>
      <Path id="druid" name="Druid" also={["Shapeshifter", "Grovekeeper", "Wildling"]}>
        <Text>
          <Em>
            You embrace and embody the untamed power of the natural world, transforming into beasts
            and channeling the spirit of the wild.
          </Em>
        </Text>
      </Path>
      <CoreTalent name="Wild Shape" growth="Every 2 levels, increase your Wild Shape pool by 1d.">
        <Text>
          You can shift into the form of any beast you're familiar with. You have a{" "}
          <StrongEm>4d Wild Shape</StrongEm>
          resource pool, rolled when you shift—at 0d, you fail to turn into that form. The pool
          replenishes after each scene.
        </Text>
        <Text>
          You take on the form's physical qualities and feral instincts. Move your stat points
          around to represent this, with a min. of 1 and max. of 3 in a stat. You lose access to any
          talent related to your own physical form.
        </Text>
        <Text>
          Some forms are more difficult to shift into. For each <StrongEm>wild talent</StrongEm>{" "}
          (max 2) a form has, drop 1d from the pool before rolling it. These are things like
          <Em>aquatic</Em>, <Em>smaller than a cat</Em>, <Em>bigger than a bear</Em>,{" "}
          <Em>venomous</Em>, and <Em>flight</Em>. It can also be a specific talent from a path, or
          anything that would require a heritage talent. The GM judges the{" "}
          <StrongEm>gray zone</StrongEm>.
        </Text>
      </CoreTalent>
      <Section title="Druidic Tells" description="Optional">
        <Text>
          Druids often exhibit tells—sometimes several—that reflect their deep connection with
          nature, such as animalistic traits or plant-like appearances. Even in a fantasy world,
          someone so attuned to nature is bound to attract attention, offering potential new
          vantage, outside assistance, or even opportunities for tangles. Below are some ideas for{" "}
          <StrongEm>features</StrongEm>:
        </Text>
        <Panel border>
          <Table cellPadding="tight" textSize="small" fullWidth italic>
            <Table.Body>
              <Table.Row>
                <Table.Cell>thorns</Table.Cell>
                <Table.Cell>blossoming</Table.Cell>
                <Table.Cell>feathered</Table.Cell>
                <Table.Cell>bristled</Table.Cell>
                <Table.Cell>roots</Table.Cell>
                <Table.Cell>fluffy</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>moss</Table.Cell>
                <Table.Cell>bark</Table.Cell>
                <Table.Cell>earthen</Table.Cell>
                <Table.Cell>hoofed</Table.Cell>
                <Table.Cell>vibrant</Table.Cell>
                <Table.Cell>silken</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>vines</Table.Cell>
                <Table.Cell>glowing</Table.Cell>
                <Table.Cell>translucent</Table.Cell>
                <Table.Cell>tangled</Table.Cell>
                <Table.Cell>crystalline</Table.Cell>
                <Table.Cell>smoky</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>tusked</Table.Cell>
                <Table.Cell>velvet</Table.Cell>
                <Table.Cell>murky</Table.Cell>
                <Table.Cell>speckled</Table.Cell>
                <Table.Cell>verdant</Table.Cell>
                <Table.Cell>willowy</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>shimmering</Table.Cell>
                <Table.Cell>antlered</Table.Cell>
                <Table.Cell>ashen</Table.Cell>
                <Table.Cell>spiny</Table.Cell>
                <Table.Cell>gnarled</Table.Cell>
                <Table.Cell>fragrant</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>scaly</Table.Cell>
                <Table.Cell>longtoothed</Table.Cell>
                <Table.Cell>dewy</Table.Cell>
                <Table.Cell>breezy</Table.Cell>
                <Table.Cell>misty</Table.Cell>
                <Table.Cell>petals</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Panel>
      </Section>
      <Section title="Wild Talents" description="Examples">
        <Text>
          Below are some examples of beasts that have wild talents. Already existing talents are
          listed with a page number reference. Others are made for that beast.
        </Text>
        <List columns={2} variant="unordered">
          <List.Item>
            <Strong>Chimpanzee</Strong>: Relentless (<Em>pg. 69</Em>)
          </List.Item>
          <List.Item>
            <Strong>Wolf</Strong>: Keen Senses (<Em>pg. 69</Em>)
          </List.Item>
          <List.Item>
            <Strong>Rhino</Strong>: Bulwark (<Em>pg. 63</Em>)
          </List.Item>
          <List.Item>
            <Strong>Octopus</Strong>: Shape &amp; color mimicking
          </List.Item>
          <List.Item>
            <Strong>Cheetah</Strong>: Incredibly fast sprinting.
          </List.Item>
          <List.Item>
            <Strong>Bear</Strong>: Mighty (<Em>pg. 57</Em>)
          </List.Item>
          <List.Item>
            <Strong>Eagle</Strong>: Flight
          </List.Item>
          <List.Item>
            <Strong>Snake</Strong>: Poisoner (<Em>pg. 71</Em>)
          </List.Item>
          <List.Item>
            <Strong>Lion</Strong>: Fearsome (<Em>pg. 57</Em>)
          </List.Item>
          <List.Item>
            <Strong>Dolphin</Strong>: Fast swimmer
          </List.Item>
          <List.Item>
            <Strong>Crocodile</Strong>: Swamp camouflage
          </List.Item>
          <List.Item>
            <Strong>Honey Badger</Strong>: Iron Will (<Em>pg. 59</Em>)
          </List.Item>
        </List>
      </Section>
      <Heading level={3}>Druid Talents</Heading>
      <Talent name="Awaken">
        <Text>
          Once per scene, you may awaken a living natural feature—plants, animals, insects, fungi,
          or the like—within or nearby the scene. It gains awareness and purpose, forming a{" "}
          <StrongEm>3d power pool</StrongEm> you can direct, guided by its nature. One time only,
          you can make this a ritual-level effect.
        </Text>
      </Talent>
      <Talent name="Herbalism">
        <Text>
          Before each session, use the Herbalism Crucible to make two herb names (snakeberry,
          blastbane). You have{" "}
          <StrongEm>1 minor potion of one and 1 major potion of the other</StrongEm>. The name is
          the touchstone. They lose effect after the session. One time only, you can have 1 mythic
          potion (<Em>choose after rolling</Em>).
        </Text>

        <Stack spacing="xs">
          <Panel border>
            <Panel.Row>
              <Table cellPadding="tight" textSize="small" fullWidth italic>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>choke</Table.Cell>
                    <Table.Cell>star</Table.Cell>
                    <Table.Cell>sun</Table.Cell>
                    <Table.Cell>dream</Table.Cell>
                    <Table.Cell>mist</Table.Cell>
                    <Table.Cell>zap</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>sticky</Table.Cell>
                    <Table.Cell>stone</Table.Cell>
                    <Table.Cell>moon</Table.Cell>
                    <Table.Cell>feather</Table.Cell>
                    <Table.Cell>soot</Table.Cell>
                    <Table.Cell>blast</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>wool</Table.Cell>
                    <Table.Cell>dust</Table.Cell>
                    <Table.Cell>devil</Table.Cell>
                    <Table.Cell>wild</Table.Cell>
                    <Table.Cell>freeze</Table.Cell>
                    <Table.Cell>blood</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>smoke</Table.Cell>
                    <Table.Cell>snake</Table.Cell>
                    <Table.Cell>honey</Table.Cell>
                    <Table.Cell>mirror</Table.Cell>
                    <Table.Cell>sting</Table.Cell>
                    <Table.Cell>ink</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>shriek</Table.Cell>
                    <Table.Cell>mimic</Table.Cell>
                    <Table.Cell>goat</Table.Cell>
                    <Table.Cell>worm</Table.Cell>
                    <Table.Cell>steel</Table.Cell>
                    <Table.Cell>skunk</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>giggle</Table.Cell>
                    <Table.Cell>needle</Table.Cell>
                    <Table.Cell>night</Table.Cell>
                    <Table.Cell>swell</Table.Cell>
                    <Table.Cell>faerie</Table.Cell>
                    <Table.Cell>dragon</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Panel.Row>
            <Panel.Row>
              <Table cellPadding="tight" textSize="small" fullWidth italic>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>cap</Table.Cell>
                    <Table.Cell>lily</Table.Cell>
                    <Table.Cell>thistle</Table.Cell>
                    <Table.Cell>pod</Table.Cell>
                    <Table.Cell>stem</Table.Cell>
                    <Table.Cell>petal</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>wort</Table.Cell>
                    <Table.Cell>reed</Table.Cell>
                    <Table.Cell>bell</Table.Cell>
                    <Table.Cell>bud</Table.Cell>
                    <Table.Cell>shoot</Table.Cell>
                    <Table.Cell>bean</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>rose</Table.Cell>
                    <Table.Cell>flower</Table.Cell>
                    <Table.Cell>leaf</Table.Cell>
                    <Table.Cell>tongue</Table.Cell>
                    <Table.Cell>bark</Table.Cell>
                    <Table.Cell>tuber</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>bush</Table.Cell>
                    <Table.Cell>root</Table.Cell>
                    <Table.Cell>wood</Table.Cell>
                    <Table.Cell>berry</Table.Cell>
                    <Table.Cell>funnel</Table.Cell>
                    <Table.Cell>vine</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>shroom</Table.Cell>
                    <Table.Cell>spine</Table.Cell>
                    <Table.Cell>grass</Table.Cell>
                    <Table.Cell>lace</Table.Cell>
                    <Table.Cell>moss</Table.Cell>
                    <Table.Cell>seed</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>sprout</Table.Cell>
                    <Table.Cell>shade</Table.Cell>
                    <Table.Cell>thorn</Table.Cell>
                    <Table.Cell>bane</Table.Cell>
                    <Table.Cell>branch</Table.Cell>
                    <Table.Cell>weed</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Panel.Row>
          </Panel>
          <Text align="right" size="x-small" muted>
            <Strong>Note</Strong>: The Herbalism Crucible was created by <Strong>June Bloom</Strong>{" "}
            and used with permission. Thanks!
          </Text>
        </Stack>
      </Talent>
      <Talent name="Kindred Spirits">
        <Text>
          You can speak with animals and spirits of the wild, their personalities shaped by their
          instincts. <StrongEm>You are known to them</StrongEm>
          —when you meet, roll their bond with you (<Em>pg. 14</Em>) or spend story to establish it.
          When you call, those nearby will answer.
        </Text>
      </Talent>
      <Talent name="Primordial Bonds">
        <Text>
          You have a bond with each of the primordial elements, <StrongEm>Air</StrongEm>,{" "}
          <StrongEm>Earth</StrongEm>, <StrongEm>Fire</StrongEm>, and <StrongEm>Water</StrongEm>.
          Roll the bonds (<Em>pg. 14</Em>), then change one to <StrongEm>deep</StrongEm>. You have
          spellcasting, rolling Presence to call on an element, which serves as the touchstone. You
          can call on each element once per session, or twice if your bond is{" "}
          <StrongEm>deep</StrongEm>. You can mark two usages of a single element to cast a potent
          spell. You can combine usages of two elements to take +1d and use both as a touchstone.
          Bonds change, <Em>for better or worse</Em>—pursue great deeds and rituals to{" "}
          <StrongEm>deepen</StrongEm> them.
        </Text>
      </Talent>
      <Talent name="True Shape">
        <Text>
          Choose 1 beast form. If it has no wild talents, you can shift into it without rolling wild
          shape, even at 0d. If it has wild talents, you drop 1d less than normal when you shift.
        </Text>
      </Talent>
      <Talent name="Verdant Whispers">
        <Text>
          You can commune with plants, their personalities as odd and unique as their forms.{" "}
          <StrongEm>Roll Wits to decipher their messages</StrongEm>, as they remember all but speak
          in ways truly hard to understand. You always get a <Strong>hint</Strong> or{" "}
          <Strong>reveal</Strong> on vigilance in places teeming with plant life.
        </Text>
      </Talent>
      <Talent name="Windcaller">
        <Text>
          Your voice carries on the winds over great distances. You can{" "}
          <Strong>push yourself</Strong> to summon or dismiss, but not control:{" "}
          <Em>dense fog—diving temperatures—heavy rain—snowfall—strong winds—thunder</Em>. You can
          perform weather rituals without ritual anchors.
        </Text>
      </Talent>
      <Path id="fighter" name="Fighter" also={["Blademaster", "Duelist", "Sergeant"]}>
        <Text>
          <Em>
            You become one with your weapon, and through it, you find your real purpose in this
            life.
          </Em>
        </Text>
      </Path>
      <CoreTalent name="Weapon Mastery" growth="Every 3 levels, your mastery die increases by +1d.">
        <Text>
          Choose a fighting style that you have mastered:{" "}
          <Em>
            brawling—dual-wielding—one-handed weapons—ranged weapons—thrown weapons—two-handed
            weapons
          </Em>
          . You have a <Strong>mastery die</Strong>, a special d6. When you fight in your style,
          take +1d (<Em>the mastery die</Em>) on the roll. If the mastery die is a 6, it counts as a
          critical. If it's already a critical, <Strong>take spark</Strong>.
        </Text>
      </CoreTalent>
      <Section title="Weapon Origin" description="Optional">
        <Text>
          For many fighters, their weapon is an important part of their past. Give your weapon some
          character and it will become a character itself in the story. Roll d66 twice on the table
          below to give your weapon, or each of your weapons, its own small story. You can also
          choose, or make up your own.
        </Text>
        <Panel border>
          <Panel.Row>
            <Table textSize="small" cellPadding="tight" fullWidth italic>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>etched with words of loss</Table.Cell>
                  <Table.Cell>with an odd word etched into it</Table.Cell>
                  <Table.Cell>marked by secret society</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>gift from a childhood mentor</Table.Cell>
                  <Table.Cell>stitched with parent's pattern</Table.Cell>
                  <Table.Cell>marked for each village visited</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>telling why you can't return</Table.Cell>
                  <Table.Cell>covered in burn marks</Table.Cell>
                  <Table.Cell>with hidden compartment</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>given by your father</Table.Cell>
                  <Table.Cell>torn by an animal attack</Table.Cell>
                  <Table.Cell>notched each time it saved you</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>stolen from a family member</Table.Cell>
                  <Table.Cell>stamped with employer's logo</Table.Cell>
                  <Table.Cell>worn from long usage</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>taken off a dead body</Table.Cell>
                  <Table.Cell>etched with a battle prayer</Table.Cell>
                  <Table.Cell>inscribed with book quote</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Panel.Row>
          <Panel.Row>
            <Table textSize="small" cellPadding="tight" fullWidth italic>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>found in your first dungeon</Table.Cell>
                  <Table.Cell>carved with lover's initials</Table.Cell>
                  <Table.Cell>stolen from your first job</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>marred with blade nicks</Table.Cell>
                  <Table.Cell>stained with coal from a mine</Table.Cell>
                  <Table.Cell>embedded with an arrow</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>made from rare material</Table.Cell>
                  <Table.Cell>with a faded family crest</Table.Cell>
                  <Table.Cell>peace offering gift</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>with a scratched out insignia</Table.Cell>
                  <Table.Cell>taken as spoils of war</Table.Cell>
                  <Table.Cell>belonged to a gambler</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>picked up during a storm</Table.Cell>
                  <Table.Cell>with a best friend's initials</Table.Cell>
                  <Table.Cell>patched many times</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>marked from a lucky escape</Table.Cell>
                  <Table.Cell>scratched from fierce battle</Table.Cell>
                  <Table.Cell>with directions to a special place</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Panel.Row>
        </Panel>
      </Section>
      <Section title="Weapon Knowledge" description="Advice">
        <Text>
          As a fighter, bring your mastery of battle into play. You've likely trained in various
          weapons and understand their matchups. Weapons don't have specific rules differentiating
          them, but they do carry fictional weight which can impact vantage. Highlight favorable
          matchups or embrace bad ones for interesting tangles. Take spark by accepting the risks or
          retreating from a likely loss.
        </Text>
        <Text>
          You don't need to be a weapon expert—lean into the cinematic. Basic details{" "}
          <Muted>(spears in a narrow hall, flails wrapping around shields)</Muted> can add a lot to
          the scene. Use your wises creatively, and remember, combat is freeform, so stretch your
          imagination.
        </Text>
      </Section>
      <Heading level={3}>Fighter Talents</Heading>
      <Talent name="Arcane Training" prohibited="Wizard">
        <Text>
          You have spellcasting as the Spellcraft talent (<Em>pg. 76</Em>). You roll Wits and can
          cast 3 spells and 1 potent spell per session. You know 3 spell theorems, created with the
          Spell Crucible, and can learn new spells from scrolls.
        </Text>
      </Talent>
      <Talent name="Bulwark">
        <Text>
          Each session, you have a <StrongEm>3d Bulwark</StrongEm> resource pool from armor or other
          defenses. When you get bloodied or dropped from physical damage, roll the pool. If dice
          remain, ignore the damage.
        </Text>
      </Talent>
      <Talent name="Control">
        <Text>
          You can <Strong>push yourself</Strong> to declare a zone that enemies cannot cross without
          dealing with you. If they attempt to move past you, you can <StrongEm>interrupt</StrongEm>{" "}
          them. On a perfect, take spark.
        </Text>
      </Talent>
      <Talent name="Got Your Back">
        <Text>
          You can <Strong>push yourself</Strong> to assist an ally after they roll a grim. The ally
          can also roll 1d. On a perfect, you both <Strong>take spark</Strong>.
        </Text>
      </Talent>
      <Talent name="Measured Tones">
        <Text>
          When you speak in measured tones, people always stop and listen—you can declare{" "}
          <StrongEm>tame stakes</StrongEm> if desired. Unless completely surprised, you can{" "}
          <Strong>push yourself</Strong> to <StrongEm>interrupt</StrongEm> an impact move initiating
          aggression. If you change their mind, take spark.
        </Text>
      </Talent>
      <Talent name="Swift Recovery">
        <Text>On a perfect roll with an unmarked stat, clear a mark on another stat.</Text>
      </Talent>
      <Talent name="Tactician">
        <Text>
          During an intense action sequence, you can <Strong>push yourself</Strong> to tag 3 scene
          elements right away and 1 later in the sequence. When an ally interacts with a tagged
          element, you assist without risk on the roll. If no roll is needed, they{" "}
          <Strong>take spark</Strong>.
        </Text>
      </Talent>
      <Section title="Combat Maneuvers" description="Advice">
        <Text>
          Action rolls let you flavor combat however you like—don't just swing a sword or jab a
          spear. Lean into the dramatic flowing nature of combat. On a critical, use setups and
          secondary effects to remove thorns or shift the fight. Don't tunnel vision on the
          kill—change the battle to end it faster! Of course, anyone can try these, but as a
          fighter, you should master them.
        </Text>
        <List variant="unordered">
          <List.Item>
            <Strong>Disarm</Strong>: Take their weapon to leave them vulnerable.
          </List.Item>
          <List.Item>
            <Strong>Knockdown</Strong>: Put them on the ground to gain the upper hand.
          </List.Item>
          <List.Item>
            <Strong>Pin Down</Strong>: Trap them in a position to keep them from acting or escaping.
          </List.Item>
          <List.Item>
            <Strong>Pull</Strong>: Drag them into danger or out of position.
          </List.Item>
          <List.Item>
            <Strong>Push</Strong>: Shove them away to protect allies or disrupt their own lines.
          </List.Item>
          <List.Item>
            <Strong>Sunder</Strong>: Break their gear to limit their options or get around their
            defenses.
          </List.Item>
        </List>
      </Section>
      <Path id="monk" name="Monk" also={["Martial Artist", "Mystic", "Wanderer"]}>
        <Text>
          <Em>
            Your body is a vessel through which you channel your discipline into grace, precision,
            and the never-ending journey towards perfection.
          </Em>
        </Text>
      </Path>
      <CoreTalent
        name="Discipline"
        growth="Every 3 levels, increase flow by 1 per scene and interrupts by 1 per session."
      >
        <Text>
          Your body itself is a weapon, and anything in your hands is merely an extension of it. You
          never suffer thorns due to weapon matchups. Once per session, you can{" "}
          <StrongEm>interrupt</StrongEm> with a:{" "}
          <Em>philosophical point—quick reaction—stunning strike</Em>. Each scene, you have{" "}
          <Strong>4 flow</Strong>. You can spend it to:
        </Text>
        <List variant="ordered">
          <List.Item>
            Ignore difficulty thorns from: <Em>being outnumbered—a single powerful opponent</Em>.
          </List.Item>
          <List.Item>
            Attempt a <Strong>fluid maneuver</Strong>. Before rolling, declare you want to also:
            <Em>disarm them—redirect momentum—reposition you, them, or both</Em>. On a perfect or
            messy, it happens.
          </List.Item>
          <List.Item>
            Pull off a <StrongEm>potent feat of mystical grace</StrongEm>, like{" "}
            <Em>running across water</Em>
            or <Em>falling harmlessly from a great height</Em>. <Em>For 1 more flow</Em>, extend
            this to those you're touching.
          </List.Item>
        </List>
      </CoreTalent>
      <Section title="Martial Arts Style" description="Optional">
        <Panel
          title="Is based on the ____ concept of..."
          description="Choose 1 or 2"
          border
          titleNormalCaps
        >
          <Table textSize="small" cellPadding="tight" variant="simple" fullWidth italic>
            <Table.Head>
              <Table.Row>
                <Table.HeaderCell>Primal</Table.HeaderCell>
                <Table.HeaderCell>Elemental</Table.HeaderCell>
                <Table.HeaderCell>Powerful</Table.HeaderCell>
                <Table.HeaderCell>Idealistic</Table.HeaderCell>
                <Table.HeaderCell>Philosophical</Table.HeaderCell>
                <Table.HeaderCell>Stylistic</Table.HeaderCell>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              <Table.Row>
                <Table.Cell>tiger</Table.Cell>
                <Table.Cell>fire</Table.Cell>
                <Table.Cell>thunderstorm</Table.Cell>
                <Table.Cell>harmony</Table.Cell>
                <Table.Cell>foundation</Table.Cell>
                <Table.Cell>ferocity</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>crane</Table.Cell>
                <Table.Cell>water</Table.Cell>
                <Table.Cell>avalanche</Table.Cell>
                <Table.Cell>destruction</Table.Cell>
                <Table.Cell>flourishing</Table.Cell>
                <Table.Cell>deception</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>snake</Table.Cell>
                <Table.Cell>air</Table.Cell>
                <Table.Cell>tsunami</Table.Cell>
                <Table.Cell>tranquility</Table.Cell>
                <Table.Cell>refinement</Table.Cell>
                <Table.Cell>grace</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>wolf</Table.Cell>
                <Table.Cell>earth</Table.Cell>
                <Table.Cell>whirlwind</Table.Cell>
                <Table.Cell>justice</Table.Cell>
                <Table.Cell>adaptation</Table.Cell>
                <Table.Cell>brutality</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>mantis</Table.Cell>
                <Table.Cell>lightning</Table.Cell>
                <Table.Cell>earthquake</Table.Cell>
                <Table.Cell>chaos</Table.Cell>
                <Table.Cell>endurance</Table.Cell>
                <Table.Cell>precision</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>raven</Table.Cell>
                <Table.Cell>heart</Table.Cell>
                <Table.Cell>volcano</Table.Cell>
                <Table.Cell>freedom</Table.Cell>
                <Table.Cell>transformation</Table.Cell>
                <Table.Cell>patience</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Panel>
        <Panel
          title="It features stances and moves like..."
          description="Choose 3"
          border
          titleNormalCaps
        >
          <Table textSize="small" cellPadding="tight" variant="simple" fullWidth italic>
            <Table.Body>
              <Table.Row>
                <Table.Cell>open palm</Table.Cell>
                <Table.Cell>elbow strike</Table.Cell>
                <Table.Cell>circular step</Table.Cell>
                <Table.Cell>high kick</Table.Cell>
                <Table.Cell>crane stance</Table.Cell>
                <Table.Cell>mantis grab</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>spinning kick</Table.Cell>
                <Table.Cell>aerial leaps</Table.Cell>
                <Table.Cell>knee strike</Table.Cell>
                <Table.Cell>tiger claw</Table.Cell>
                <Table.Cell>side kick</Table.Cell>
                <Table.Cell>close punch</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>low stance</Table.Cell>
                <Table.Cell>breath control</Table.Cell>
                <Table.Cell>joint lock</Table.Cell>
                <Table.Cell>heavy strike</Table.Cell>
                <Table.Cell>swift parry</Table.Cell>
                <Table.Cell>leaping elbow</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>finger jabs</Table.Cell>
                <Table.Cell>redirecting grab</Table.Cell>
                <Table.Cell>pressure point</Table.Cell>
                <Table.Cell>dual strikes</Table.Cell>
                <Table.Cell>rooted stance</Table.Cell>
                <Table.Cell>snap kick</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>iron forearm</Table.Cell>
                <Table.Cell>chop strike</Table.Cell>
                <Table.Cell>whipping attack</Table.Cell>
                <Table.Cell>jumps &amp; rolls</Table.Cell>
                <Table.Cell>soft redirect</Table.Cell>
                <Table.Cell>wide sweep</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>flowing step</Table.Cell>
                <Table.Cell>iron grip</Table.Cell>
                <Table.Cell>steady gaze</Table.Cell>
                <Table.Cell>palm heel</Table.Cell>
                <Table.Cell>backfist strike</Table.Cell>
                <Table.Cell>crescent kick</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Panel>
        <Panel
          title="It makes use of ____ weapons like..."
          description="Choose 2"
          border
          titleNormalCaps
        >
          <Table textSize="small" cellPadding="tight" variant="simple" fullWidth italic>
            <Table.Head>
              <Table.Row>
                <Table.HeaderCell>Blunt</Table.HeaderCell>
                <Table.HeaderCell>Flexible</Table.HeaderCell>
                <Table.HeaderCell>Edged</Table.HeaderCell>
                <Table.HeaderCell>Reach</Table.HeaderCell>
                <Table.HeaderCell>Thrown</Table.HeaderCell>
                <Table.HeaderCell>Specialized</Table.HeaderCell>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              <Table.Row>
                <Table.Cell>bo staff</Table.Cell>
                <Table.Cell>chain whip</Table.Cell>
                <Table.Cell>sai</Table.Cell>
                <Table.Cell>monk spade</Table.Cell>
                <Table.Cell>shuriken</Table.Cell>
                <Table.Cell>tiger claws</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>three-part staff</Table.Cell>
                <Table.Cell>rope dart</Table.Cell>
                <Table.Cell>kama</Table.Cell>
                <Table.Cell>spear</Table.Cell>
                <Table.Cell>throwing spikes</Table.Cell>
                <Table.Cell>spiked boots</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>half-staff</Table.Cell>
                <Table.Cell>sickle &amp; chain</Table.Cell>
                <Table.Cell>butterfly sword</Table.Cell>
                <Table.Cell>naginata</Table.Cell>
                <Table.Cell>chakram</Table.Cell>
                <Table.Cell>war fan</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>nunchaku</Table.Cell>
                <Table.Cell>weight &amp; chain</Table.Cell>
                <Table.Cell>hook sword</Table.Cell>
                <Table.Cell>longhandle blade</Table.Cell>
                <Table.Cell>boomerang</Table.Cell>
                <Table.Cell>iron knuckles</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>short sticks</Table.Cell>
                <Table.Cell>whip blade</Table.Cell>
                <Table.Cell>straight sword</Table.Cell>
                <Table.Cell>trident</Table.Cell>
                <Table.Cell>darts</Table.Cell>
                <Table.Cell>crescent knives</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>batons</Table.Cell>
                <Table.Cell>scarf</Table.Cell>
                <Table.Cell>curved sword</Table.Cell>
                <Table.Cell>scythe</Table.Cell>
                <Table.Cell>throwing axes</Table.Cell>
                <Table.Cell>backfist rings</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Panel>
      </Section>
      <Heading level={3}>Monk Talents</Heading>
      <Talent name="Flow State">
        <Text>
          After an action or defense roll, you can always keep the spotlight to prevent the GM from
          spending suspense. This continues as long as you keep taking action and don't roll a grim.
        </Text>
      </Talent>
      <Talent name="Healing Hands">
        <Text>
          You can heal an ally that is bloodied. This automatically works, but you must make a
          Presence defense roll against being bloodied—you take their pain onto yourself and must
          fend it off.
        </Text>
      </Talent>
      <Talent name="Lightning Reflexes">
        <Text>
          You can always act first, unless completely surprised. You also ignore difficulty thorns
          on Agility defense rolls.
        </Text>
      </Talent>
      <Talent name="Mind Over Matter">
        <Text>
          When you take a physical mark, you can instead choose to take a mental mark. When you
          clear any mark by rolling it, <Strong>take spark</Strong>.
        </Text>
      </Talent>
      <Talent name="Primordial Forces">
        <Text>
          Choose an element: <Em>Air—Earth—Fire—Water</Em>. You can cast cantrips with that element,
          useful as <Em>set dressing</Em> and <Em>cantrip utility</Em>. On a critical using your
          element, charge it (mark its box). Spend it to pull off a{" "}
          <StrongEm>potent feat of force or movement</StrongEm>
          empowered by the element.
        </Text>
        <Text>
          <Em>
            Special: You can take this again, gaining all elements. On a critical, charge two
            elements.
          </Em>
        </Text>
      </Talent>
      <Talent name="Tether">
        <Text>
          Once per session, you can touch someone to link your spirits. You can sense their feelings
          and always know where they are. You can <Strong>push yourself</Strong> to:{" "}
          <Em>assist them—speak into their mind—take mental damage for them—teleport to them</Em>.
          If they get dropped, so do you. You must touch again or rest for the link to end. When it
          does, change (<Em>or create</Em>) your bond with them.
        </Text>
      </Talent>
      <Talent name="There is No Try">
        <Text>
          When putting your life or something you hold equally dear on the line,{" "}
          <StrongEm>5s count as 6s, but 4s count as 1s</StrongEm>. This generally occurs with dire
          stakes or after being bloodied in battle.
        </Text>
      </Talent>
      <Path id="paladin" name="Paladin" also={["Crusader", "Champion", "Justiciar"]}>
        <Text>
          <Em>
            You have sworn an oath and your unwavering dedication gives you powerful conviction,
            which you can wield to better this world.
          </Em>
        </Text>
      </Path>
      <CoreTalent name="Oathsworn" growth="Every 2 levels, increase smite by 1.">
        <Text>
          You draw power from an oath you swear to uphold until you die. Your oath is comprised of
          <Strong>three core tenets</Strong> (<Em>below</Em>) which dictate your behavior. You don't
          take thorns from bloodied or rattled, instead taking +1d on rolls with the related
          physical or mental stats. Each session, you also have <Strong>3 smite</Strong>. When
          attacking someone in combat or argument, you can spend it 1-for-1 to drop dice from a task
          pool <StrongEm>after</StrongEm>
          rolling it.
        </Text>
        <Text>
          <Strong>Affirmation</Strong>: Each session, you can{" "}
          <StrongEm>give spark to one player</StrongEm> who joined a scene involving your tenets,
          whether they followed them or tried leading you astray. When a tenet is in violation,
          discuss the toll that has had on you and think on a chance for atonement.{" "}
          <Strong>Take 1 less smite</Strong> for each tenet in violation. When you atone,{" "}
          <Strong>take spark</Strong>.
        </Text>
      </CoreTalent>
      <Section title="Swear Your Oath">
        <Text>
          At character creation, or over the first few sessions, detail the{" "}
          <Strong smallCaps>Three Tenets</Strong> that form the core of your oath. Write your own
          specific tenets (<Em>below</Em>), or use the table (<Em>next page</Em>) to create flexible
          ones that you can refine and explore through play. To write your own tenets:
        </Text>
        <List variant="unordered">
          <List.Item>
            <StrongEm>Choose a character detail or two</StrongEm>, such as a trait, bond, or
            background.
          </List.Item>
          <List.Item>
            <StrongEm>Link it to a short, actionable phrase</StrongEm>. It should naturally arise
            from the fiction occasionally and present you with dilemmas. Work with the GM to ensure
            this as you write it.
          </List.Item>
        </List>
        <Text>
          <StrongEm>Rank the tenets in order of importance</StrongEm>. If they ever conflict,
          following a higher one avoids violating a lower one.
        </Text>
        <Text>
          <StrongEm>You must uphold your tenets, or risk violation</StrongEm>. They are absolutes,
          but they can evolve as it makes sense or best serves the fiction (and game at the table).
          When you <StrongEm>violate</StrongEm> a tenet, slash its box. For a second or severe
          violation, fill in the box—it is in <StrongEm>heavy violation</StrongEm>.
        </Text>
        <Text>
          <StrongEm>You break a tenet</StrongEm> when you violate it again while in heavy violation
          (<Em>filled box</Em>). You can no longer atone for that tenet. Breaking two tenets makes
          you an <StrongEm>Oathbreaker</StrongEm> (<Em>below</Em>).
        </Text>
        <Text>
          <StrongEm>Atonement for tenets in violation require great deeds</StrongEm>. The deed must
          outweigh the severity of the violation itself—ask the other players if unsure. Once
          completed, clear the box.
        </Text>
        <Panel>
          <Text>
            <Strong smallCaps>Oathbreaker</Strong>: You lose your Oathsworn core talent, but gain
            hidden potential. You may choose a new non-core talent or the Warlock's Pact core talent
            in its place.
          </Text>
          <Text>
            <Strong>Redemption</Strong> requires an appropriately epic Ritual of Atonement at a
            sacred place or a mythic deed to atone for your transgressions. Success restores your
            core talent while allowing you to keep the talent gained from breaking your oath.
            Redemption is possible only once.
          </Text>
        </Panel>
      </Section>
      <Heading level={3}>Paladin Talents</Heading>
      <Talent name="Aegis">
        <Text>
          You take +1d when defending with a shield and can use it to make a defense roll in a
          nearby ally's place. You can push yourself to defend multiple allies from a single attack,
          like blocking dragonfire. On a perfect, everyone you protected takes spark.
        </Text>
      </Talent>
      <Talent name="Authority">
        <Text>
          Your presence fills the air with authority. The GM judges an NPC's response, or you can
          spend story to set it: <Em>admiration—obedience—respect—defiance</Em>. You can{" "}
          <Strong>push yourself</Strong> to pull off a{" "}
          <StrongEm>potent feat of righteous command</StrongEm>, like{" "}
          <Em>ordering a demon to kneel</Em> or
          <Em>silencing a riot with a word</Em>.
        </Text>
      </Talent>
      <Talent name="Challenge">
        <Text>
          You can <Strong>push yourself</Strong> to challenge a foe. You take +1d on all rolls
          against them, but give them 1 suspense. If they do anything besides confront you, you can
          <StrongEm>interrupt</StrongEm> it. On a perfect, the challenge continues. If an ally
          engages your foe, the challenge ends.
        </Text>
      </Talent>
      <Talent name="Dauntless">
        <Text>
          <Strong>Take spark</Strong> when one of your rolls is cut. You also take +1d on the story
          roll when dropped. On a perfect, ignore getting dropped.
        </Text>
      </Talent>
      <Talent name="Divine Blessing" prohibited="Cleric">
        <Text>
          You have spellcasting as the Channel Divinity talent (<Em>pg. 58</Em>). Detail your god
          and choose one minor domain, a <StrongEm>4d power pool</StrongEm>. You can drop 1 and roll
          the pool to cast a potent spell. It replenishes each session.
        </Text>
      </Talent>
      <Talent name="Guardian">
        <Text>
          You take +1d when you assist on a defense roll. If your own roll comes up as a 6, you both
          <Strong>take spark</Strong>.
        </Text>
      </Talent>
      <Talent name="Rebuke">
        <Text>
          When the GM spends suspense to prompt an impact move, you take +1d on any follow-up action
          against the source. On a critical, <Strong>take spark</Strong>.
        </Text>
      </Talent>
      <Section
        title="Tenent Builder"
        description="Roll, then  choose an option. Rewrite for clarity."
      >
        <Panel border>
          <Table textSize="small" variant="simple" italic fullWidth>
            <Table.Head>
              <Table.Row>
                <Table.HeaderCell italic={false}>I SWEAR TO BRING</Table.HeaderCell>
                <Table.HeaderCell italic={false}>TO—FOR THE</Table.HeaderCell>
                <Table.HeaderCell italic={false}>DESPITE—BECAUSE OF</Table.HeaderCell>
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
        </Panel>
      </Section>

      <Path id="ranger" name="Ranger" also={["Beastmaster", "Pathfinder", "Trapper"]}>
        <Text>
          <Em>
            You stalk relentlessly, moving unseen through the wilderness, tracking your prey with
            deadly precision, and striking them at their weakest point.
          </Em>
        </Text>
      </Path>
      <CoreTalent
        name="Hunter's Mark"
        growth="Every 2 levels, you can use Hunter's Mark one more time per session."
      >
        <Text>
          Twice per session, you can declare a weakness in a non-humanoid creature. Describe what
          you know or see, tagging it with a <StrongEm>2d Weakness</StrongEm> pool. When anyone
          targets the weakness specifically, you roll the pool as bonus dice on their roll. As it
          depletes, the creature learns to hide its weakness, causing it to shift its behavior.{" "}
          <Strong>Take spark</Strong> when a Weakness die rolls a perfect (not the overall result).
        </Text>
        <Text>
          <StrongEm>Prowess</StrongEm>: Take +1d at stealth, traversal, setting traps, and tracking.
        </Text>
      </CoreTalent>
      <Section title="Ranger Traps" description="Optional">
        <Text>
          Combine and interpret an effect, trigger, and the word “trap”{" "}
          <Muted>(poisonous bait trap)</Muted> to make three traps you commonly use while hunting or
          scouting. These aren't limitations, just options ready to use when you need to lay a trap.
        </Text>
        <Panel border>
          <Table cellPadding="tight" textSize="small" align="center" fullWidth italic>
            <Table.Body>
              <Table.Row>
                <Table.Cell>stunning</Table.Cell>
                <Table.Cell rowSpan={6} cellPadding="none">
                  <FontAwesomeIcon icon={faPlus} />
                </Table.Cell>
                <Table.Cell>tripwire</Table.Cell>
                <Table.Cell rowSpan={6} cellPadding="none">
                  <FontAwesomeIcon icon={faPlus} />
                </Table.Cell>
                <Table.Cell rowSpan={6}>
                  <Strong allCaps>"trap"</Strong>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>falling</Table.Cell>
                <Table.Cell>pressure plate</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>noisy</Table.Cell>
                <Table.Cell>snare loop</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>poisonous</Table.Cell>
                <Table.Cell>bait</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>entangling</Table.Cell>
                <Table.Cell>hidden</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>injuring</Table.Cell>
                <Table.Cell>proximity</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Panel>
      </Section>
      <Section title="Tell-tale Signs of Weakness" description="Advice">
        <Text>
          When you use your hunter's mark, detail a weakness, how you notice it, and how you can
          exploit it. This increases your ranger's competency and adds a level of detail to the
          hunt.
        </Text>
        <List variant="unordered">
          <List.Item>
            <Strong>Fire Sensitivity</Strong>: Flinches near flames, avoids heat, dry or cracked
            skin.
          </List.Item>
          <List.Item>
            <Strong>Bright Light Weakness</Strong>: Cloudy eyes, avoids light, panics near flashes.
          </List.Item>
          <List.Item>
            <Strong>Vulnerable Anatomy</Strong>: Exposed weak points, awkward movement, protects
            soft areas.
          </List.Item>
          <List.Item>
            <Strong>Poison Susceptibility</Strong>: Sluggish breathing, avoids carrion, soft or
            delicate skin.
          </List.Item>
          <List.Item>
            <Strong>Tunnel Vision</Strong>: Fixates on a single target, oblivious to surroundings,
            struggles to adapt.
          </List.Item>
          <List.Item>
            <Strong>Poor Mobility</Strong>: Heavy tracks, slow movement, struggles on uneven
            terrain.
          </List.Item>
          <List.Item>
            <Strong>Sound Sensitivity</Strong>: Wince at noises, large twitching ears, avoids loud
            terrain.
          </List.Item>
          <List.Item>
            <Strong>Slow-minded</Strong>: Delayed reactions, struggles to recognize threats, easily
            tricked by decoys.
          </List.Item>
          <List.Item>
            <Strong>Predictable Instincts</Strong>: Easily baited or lured, reacts predictably to
            threats, overcommits.
          </List.Item>
        </List>
      </Section>
      <Heading level={3}>Ranger Talents</Heading>
      <Talent name="Animal Companion">
        <Text>
          You're accompanied by a fiercely loyal animal. Each PC adds a reciprocal bond with it.
          Choose <StrongEm>3 tricks</StrongEm> that it knows and <StrongEm>2 flaws</StrongEm> that
          it has:
        </Text>
        <Text>
          <Strong>Tricks</Strong>:
          <Em>distract—fight—guard—perform—rescue—retrieve—scout—search—track—warn</Em>.
        </Text>
        <Text>
          <Strong>Flaws</Strong>:
          <Em>aggressive—clumsy—grumpy—insatiable—jumpy—noisy—overprotective—scary—unruly</Em>.
        </Text>
        <Text>
          You roll 3d for anything it knows a trick for and 1d on everything else. It has only two
          damage boxes, <StrongEm>marked</StrongEm> (for any mark) and <StrongEm>hurt</StrongEm>{" "}
          (for bloodied or rattled). You can always have it exit a scene when hurt. If lost, you can
          bond with a new animal or select a new talent.
        </Text>
        <Text>
          <StrongEm>Special</StrongEm>:{" "}
          <Em>You can take this talent again to grant it 3 more tricks and another marked box</Em>.
        </Text>
      </Talent>
      <Talent name="Keen Senses">
        <Text>
          Your senses are twice as sharp as normal. You can pull off{" "}
          <StrongEm>potent feats of tracking</StrongEm> and can always get a <Strong>hint</Strong>{" "}
          or <Strong>reveal</Strong> on vigilance against living creatures.
        </Text>
      </Talent>
      <Talent name="Relentless">
        <Text>
          You can pull off <StrongEm>potent feats of traversal</StrongEm> and can always move at
          full speed, unhindered by what's in your way.
        </Text>
      </Talent>
      <Talent name="Scout Ahead">
        <Text>
          You gain 1 story per session and can spend story to flashback to scouting ahead and:
          <Em>
            sabotage something—set a trap—set up an <Strong>interrupt</Strong>—survey the area (ask
            2 questions)—take out a danger
          </Em>
          . Make a montage roll, taking +1d for prowess. The GM always takes suspense in place of an
          impact move.
        </Text>
      </Talent>
      <Talent name="Seasoned Hunter">
        <Text>
          You always know where a monster's lair will be. Once per session, you can tell all to Look
          Out! and declare how a monstrous challenge spends 1 of its suspense on a move to attack
          your party. Anyone involved takes +1d on a defense roll and follow-up action rolls.
        </Text>
      </Talent>
      <Talent name="Sharpshooter">
        <Text>
          When given time, you can pull off <StrongEm>potent feats of ranged precision</StrongEm>,
          like <Em>shooting just beyond maximum range</Em> or <Em>into near complete cover</Em>. You
          can also <Strong>push yourself</Strong> to do it on the spot.
        </Text>
      </Talent>
      <Talent name="Trophies">
        <Text>
          When you play a key part in slaying a <Em>powerful monster</Em>, you can harvest a{" "}
          <StrongEm>trophy</StrongEm>
          from it. This acts as a wand (<Em>pg. 23</Em>) that only you can use.{" "}
          <Em>Minor trophies</Em>
          require no roll to harvest. <Em>Major trophies</Em> require a Wits action roll. The
          monster's name, ability, and body part are the touchstone. You also gain one{" "}
          <Em>major trophy</Em>
          when you take this—detail it. Some examples:
        </Text>
        <List variant="unordered" muted>
          <List.Item>
            <Strong>Eye of the Basilisk</Strong>: 4d Stoneflesh wand. A minor wand slows someone. A
            major wand turns them to a statue.
          </List.Item>
          <List.Item>
            <Strong>Horns of a Minotaur</Strong>: 4d Powerful Charge wand. A minor wand is a speed
            boost. A major wand gives potency.
          </List.Item>
          <List.Item>
            <Strong>Heart of a Troll</Strong>: 4d Regeneration wand. A minor wand removes small
            ailments. A major wand removes marks.
          </List.Item>
        </List>
      </Talent>
      <Path id="rogue" name="Rogue" also={["Assassin", "Cutpurse", "Infiltrator"]}>
        <Text>
          <Em>
            You live and operate in the margins, striking unseen and disappearing before anyone
            knows you were there.
          </Em>
        </Text>
      </Path>
      <CoreTalent name="Expertise" growth="Every 2 levels, increase Contingency by 1d.">
        <Text>Choose a skillset below as your expertise:</Text>
        <Text>
          <StrongEm>Skullduggery</StrongEm>: Take +1d at stealth, picking locks, lying, and sleight
          of hand.
        </Text>
        <Text>
          <StrongEm>Assassination</StrongEm>: Take +1d at stealth, tracking people, opening strikes,
          and disguises.
        </Text>
        <Text>
          Each session, you have a <StrongEm>3d Contingency</StrongEm> resource pool, always
          planning ahead. You can roll the pool as bonus dice after any roll that falls within your
          expertise.
        </Text>
      </CoreTalent>
      <Section title="Thieves Guild" description="Optional">
        <Text>
          Many rogues learned their trade from a thieves' guild, criminal ring, or underground
          network. These are all one form of a guild or another, whether formal or not.
        </Text>
        <Panel>
          <Text>Thieves guild: Choose 2 that describes your guild and 1 that really doesn't.</Text>
          <List variant="unordered" columns={4}>
            <List.Item>Like family</List.Item>
            <List.Item>Elite training</List.Item>
            <List.Item>Cultish</List.Item>
            <List.Item>Turf-obsessed</List.Item>
            <List.Item>Heroes</List.Item>
            <List.Item>Mercenaries</List.Item>
            <List.Item>Mystics</List.Item>
            <List.Item>Outsiders</List.Item>
            <List.Item>Renegades</List.Item>
            <List.Item>Scoundrels</List.Item>
            <List.Item>In the open</List.Item>
            <List.Item>Wardens</List.Item>
          </List>
        </Panel>
      </Section>
      <Section title="Criminal History" description="Optional">
        <Text>
          Given their skillset, a rogue either learned their trade by way of crime or possess the
          skills to make an excellent criminal, for which there's no lack of opportunities. As you
          start your adventuring career, it's likely you have some lingering criminal history, a
          past that can come back to haunt you in quite fun, dramatic ways.
        </Text>
        <Text>
          Create one or more past crimes by setting the <Strong>crime</Strong> (severity &amp;
          nature), your <Strong>reputation</Strong> from it, and your own reaction about the crime.
        </Text>
        <Stack direction="row" spacing="sm" alignItems="stretch" wrap>
          <Panel spacing="xs" variant="blank" flex={1} minWidth="large" border>
            <Text>
              <Strong allCaps>The Crime</Strong>
            </Text>
            <Table textSize="small" cellPadding="tight" italic>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>petty</Table.Cell>
                  <Table.Cell>theft</Table.Cell>
                  <Table.Cell>vandalism</Table.Cell>
                  <Table.Cell>treason</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>low-level</Table.Cell>
                  <Table.Cell>fraud</Table.Cell>
                  <Table.Cell>gambling</Table.Cell>
                  <Table.Cell>robbery</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>moderate</Table.Cell>
                  <Table.Cell>spying</Table.Cell>
                  <Table.Cell>bribery</Table.Cell>
                  <Table.Cell>assassination</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>serious</Table.Cell>
                  <Table.Cell>smuggling</Table.Cell>
                  <Table.Cell>extortion</Table.Cell>
                  <Table.Cell>heist</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>severe</Table.Cell>
                  <Table.Cell>banditry</Table.Cell>
                  <Table.Cell>arms dealing</Table.Cell>
                  <Table.Cell>impersonation</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>legendary</Table.Cell>
                  <Table.Cell>kidnapping</Table.Cell>
                  <Table.Cell>arson</Table.Cell>
                  <Table.Cell>necromancy</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Panel>
          <Panel spacing="xs" variant="blank" border>
            <Text>
              <Strong allCaps>Reputation</Strong>
            </Text>
            <Table textSize="small" cellPadding="tight" italic>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>barely remembered</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>small bounty</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>known name</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>hunted</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>infamous</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>most wanted</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Panel>
        </Stack>
        <Text>
          <Strong allCaps>Reaction</Strong>:{" "}
          <Em>
            I did what I had to do—I was set up—It was a misunderstanding—I'd do it again in a
            heartbeat—I completely forgot I did that—I've made peace with it—Never again
          </Em>
          . Or write one!
        </Text>
      </Section>
      <Heading level={3}>Rogue Talents</Heading>
      <Talent name="According to Plan">
        <Text>
          You gain 1 story per session and can spend story to flashback to utilizing subterfuge in a
          way that's immediately relevant, like swiping some keys, paying off a guard, or preparing
          an escape route. Make a montage roll, taking +1d for Expertise. The GM always takes
          suspense in place of an impact move.
        </Text>
      </Talent>
      <Talent name="Eldritch Affinity" prohibited="Sorcerer">
        <Text>
          You have spellcasting, as the Sorcery talent (<Em>pg. 72</Em>). You roll Presence to cast
          and choose 3 from magic paths and techniques that serve as touchstones. You can't cast
          potent spells, nor do you risk a wild surge.
        </Text>
      </Talent>
      <Talent name="Lurker">
        <Text>
          On a perfect sneaking past or secretly observing sentient creatures, they:{" "}
          <Em>let a secret slip—give you a golden opportunity</Em>. If caught sneaking, you can{" "}
          <Strong>push yourself</Strong> to stay completely still and avoid detection, but must
          leave the area immediately after.
        </Text>
      </Talent>
      <Talent name="Opportunist">
        <Text>
          When someone nearby rolls defense, you take +1d on an immediate follow-up. On a critical
          by a nearby ally, you can <Strong>push yourself</Strong> to add another critical bonus.
        </Text>
      </Talent>
      <Talent name="Poisoner">
        <Text>
          Each session, you have a <StrongEm>4d Poisons</StrongEm> resource pool. You have access to
          the following poisons:{" "}
          <Em>hallucinations—knockout—memory loss—nausea—paralysis—truth serum</Em>. They each take
          a bit of time to work and are most effective if ingested.
        </Text>
      </Talent>
      <Talent name="Trap Sense">
        <Text>
          You always get a <Strong>hint</Strong> or <Strong>reveal</Strong> on vigilance against
          traps. When you avoid or disable a trap, <Strong>take spark</Strong>.
        </Text>
      </Talent>
      <Talent name="Weasel">
        <Text>
          If caught in a lie or red-handed, you can <Strong>push yourself</Strong> to weasel your
          way out of the situation—for now. You get an exit, but they definitely realize what
          happened soon after.
        </Text>
      </Talent>
      <Panel>
        <Text>
          <Strong>Thieves' Cant</Strong> <Tag>Advice</Tag>: Every rogue worth their salt knows
          Thieves' Cant—a secret language of symbols used to share plans, warnings, and secrets
          right under everyone else's nose. Here are 25, and there's a full list of 42 with symbols
          on <Em>pg. 144</Em>!
        </Text>
        <List columns={4} textSize="small" variant="blank" italic>
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
      </Panel>
      <Path id="sorcerer" name="Sorcerer" also={["Channeler", "Elementalist", "Stormcaller"]}>
        <Text>
          <Em>
            You are a conduit for ancient and unpredictable forces, shaping spells out of the raw
            magic that flows through you.
          </Em>
        </Text>
      </Path>
      <CoreTalent name="Sorcery" growth="Every 2 levels, gain a new technique or magic path.">
        <Text>
          You have spellcasting ability. You roll Presence to cast and your magic paths and
          techniques serve as touchstones. Choose any 4 below (or make a magic path up with the GM),
          with at least 1 magic path and 1 technique:
        </Text>
        <Text>
          <Strong>Magic paths</Strong>: <Em>blood—decay—flame—frost—lux—shadow—stone—tempest</Em>.
        </Text>
        <Text>
          <Strong>Techniques</Strong>:{" "}
          <Em>attack—create—defend—enhance—hinder—influence—transform—traverse</Em>.
        </Text>
        <Text>
          You can cast spells at-will, though they always carry risk and require a roll. When you
          cast, each spell must combine at least one magic path and one technique as touchstones.
          You can <Strong>push yourself</Strong> to cast a <StrongEm>potent spell</StrongEm>, but
          gain no free activation of it.
        </Text>
        <Text>
          When casting, rolling two or more 1s (including thorns) triggers a secondary{" "}
          <Strong>wild surge</Strong>—raw magic spirals out of your control.{" "}
          <StrongEm>Make a 2d story roll</StrongEm> to see what happens. The effect might stem from
          your touchstones, raw magical essence, or something chaotically random. Use the GM
          crucible or ask around your group for ideas.
        </Text>
      </CoreTalent>
      <Section title="Random Wild Surges" description="Optional">
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
        <Panel
          title="Wild Surge Crucible"
          description="Roll 1 on each table, smash them together, and interpret."
          border
        >
          <Panel.Row>
            <Table textSize="small" cellPadding="tight" italic fullWidth>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>skin</Table.Cell>
                  <Table.Cell>temperature</Table.Cell>
                  <Table.Cell>icy</Table.Cell>
                  <Table.Cell>smoke</Table.Cell>
                  <Table.Cell>rain</Table.Cell>
                  <Table.Cell>lightning</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>gust</Table.Cell>
                  <Table.Cell>sparks</Table.Cell>
                  <Table.Cell>rattle</Table.Cell>
                  <Table.Cell>tremor</Table.Cell>
                  <Table.Cell>color</Table.Cell>
                  <Table.Cell>scent</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>ground</Table.Cell>
                  <Table.Cell>fire</Table.Cell>
                  <Table.Cell>water</Table.Cell>
                  <Table.Cell>light</Table.Cell>
                  <Table.Cell>debris</Table.Cell>
                  <Table.Cell>flicker</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>creatures</Table.Cell>
                  <Table.Cell>growth</Table.Cell>
                  <Table.Cell>boom</Table.Cell>
                  <Table.Cell>effect</Table.Cell>
                  <Table.Cell>steps</Table.Cell>
                  <Table.Cell>levitation</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>cloud</Table.Cell>
                  <Table.Cell>invisibility</Table.Cell>
                  <Table.Cell>gloom</Table.Cell>
                  <Table.Cell>distortion</Table.Cell>
                  <Table.Cell>metal</Table.Cell>
                  <Table.Cell>eye</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>shadow</Table.Cell>
                  <Table.Cell>clock</Table.Cell>
                  <Table.Cell>twist</Table.Cell>
                  <Table.Cell>laughter</Table.Cell>
                  <Table.Cell>breath</Table.Cell>
                  <Table.Cell>hum</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Panel.Row>
          <Panel.Row>
            <Table textSize="small" cellPadding="tight" italic fullWidth>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>birds</Table.Cell>
                  <Table.Cell>whispers</Table.Cell>
                  <Table.Cell>glowing</Table.Cell>
                  <Table.Cell>illusion</Table.Cell>
                  <Table.Cell>rapid</Table.Cell>
                  <Table.Cell>whirlwind</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>smell</Table.Cell>
                  <Table.Cell>static</Table.Cell>
                  <Table.Cell>hunger</Table.Cell>
                  <Table.Cell>image</Table.Cell>
                  <Table.Cell>emotion</Table.Cell>
                  <Table.Cell>glimmer</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>lifted</Table.Cell>
                  <Table.Cell>change</Table.Cell>
                  <Table.Cell>phrase</Table.Cell>
                  <Table.Cell>shock</Table.Cell>
                  <Table.Cell>sound</Table.Cell>
                  <Table.Cell>echo</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>shattering</Table.Cell>
                  <Table.Cell>scatter</Table.Cell>
                  <Table.Cell>feeling</Table.Cell>
                  <Table.Cell>pop</Table.Cell>
                  <Table.Cell>brief</Table.Cell>
                  <Table.Cell>shimmer</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>shift</Table.Cell>
                  <Table.Cell>size</Table.Cell>
                  <Table.Cell>surface</Table.Cell>
                  <Table.Cell>agitation</Table.Cell>
                  <Table.Cell>apparition</Table.Cell>
                  <Table.Cell>sparkle</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>notes</Table.Cell>
                  <Table.Cell>vision</Table.Cell>
                  <Table.Cell>voice</Table.Cell>
                  <Table.Cell>mark</Table.Cell>
                  <Table.Cell>glow</Table.Cell>
                  <Table.Cell>dazzle</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Panel.Row>
        </Panel>
      </Section>
      <Heading level={3}>Sorcerer Talents</Heading>
      <Talent name="Eldritch Growth">
        <Text>
          The maelstrom of magic has twisted your body. You gain a permanent physical feature like
          <Em>metal-rending claws</Em>, <Em>venomous fangs</Em>, <Em>leathery wings</Em>, or{" "}
          <Em>thrashing tentacles</Em>. In addition to its obvious benefits, it now serves as a
          touchstone.
        </Text>
      </Talent>
      <Talent name="Maelstrom">
        <Text>
          You open yourself fully to the maelstrom of raw magic. When you cast a{" "}
          <StrongEm>potent spell</StrongEm>, 5s count as 6s, but 4s count as 1s. These 4s also count
          as 1s towards wild surge.
        </Text>
      </Talent>
      <Talent name="Magic Sense">
        <Text>
          You always get a <Strong>hint</Strong> or <Strong>reveal</Strong> on vigilance involving
          magic. When you avoid or disrupt it, <Strong>take spark</Strong>.
        </Text>
      </Talent>
      <Talent name="Spelleater">
        <Text>
          Each session, you have a <StrongEm>3d Spelleater</StrongEm> resource pool. When you suffer
          from magic, roll the pool. If dice remain, ignore the effect and bank{" "}
          <Strong>essence</Strong> (max 2). You can spend essence to increase a spellcasting die
          result by 1, but it triggers <StrongEm>wild surge</StrongEm>.
        </Text>
      </Talent>
      <Talent name="Subtle Casting">
        <Text>
          You can always cast spells subtly, able to conceal that you were the one that cast it.
          This doesn't defeat common sense, of course.
        </Text>
      </Talent>
      <Talent name="Wisps">
        <Text>
          Two small spheres of your magic path float around you. Give them 2 traits:
          <Em>annoying—capricious—malevolent—mesmerizing—whimsical</Em>. They serve as touchstones.
          You can sacrifice one to:{" "}
          <Em>
            assist without risk—distract someone—send a brief message far away—suffer vex in your
            stead
          </Em>
          . Make story rolls to determine effects if sacrificed. They return each session.
        </Text>
      </Talent>
      <Talent name="Wrath">
        <Text>
          When you or a nearby ally gets bloodied, rattled, or dropped, you take +1d and{" "}
          <StrongEm>potency</StrongEm> on your next spell if you immediately lash out.
        </Text>
      </Talent>
      <Path id="warlock" name="Warlock" also={["Blessed One", "Cursed One", "Occultist"]}>
        <Text>
          <Em>
            You have made a pact with a greater being—power in exchange for service, a pact that may
            prove to be a double-edged sword.
          </Em>
        </Text>
      </Path>
      <CoreTalent
        name="Pact"
        growth="Every 3 levels, gain a bonus talent, but decrease max Patience by 2d."
      >
        <Text>
          Create your patron (<Em>below</Em>), a powerful otherworldly being you've made a pact with
          to gain <Strong>gifts</Strong> in exchange for <Strong>obligations</Strong>.
        </Text>
        <Text>
          <Strong>Gifts</Strong>: Your patron actively or passively meddles in your affairs. Before
          each session, roll 2d and write these results down as Gifts. During the session, you can
          replace <StrongEm>any</StrongEm> rolled d6 (<Em>by anyone</Em>) with one of your gift
          results, then erase the Gift.
        </Text>
        <Text>
          You can also cast cantrips with your patron's trappings as touchstones, useful as set
          dressing and cantrip utility (pg. 18). <StrongEm>You gain a bonus talent</StrongEm>, and
          each of your talents is infused with their trappings.
        </Text>
        <Text>
          <Strong>Obligations</Strong>: Each patron has different demands. You have an extra story
          arc to represent their demands. Some patrons expect meaningful progress, while others ask
          only for the lightest of service. You define what this means. Before each session, discuss
          this story arc. Your patron has an <StrongEm>8d Patience</StrongEm> pool. Roll it if your
          patron was not satisfied with your progress last session. At 0d, your patron will give you
          a visit in some form to <StrongEm>clear up the issue</StrongEm>, replenishing the pool.
        </Text>
      </CoreTalent>
      <Text>
        <Strong smallCaps>Patron Creation</Strong>: Roll or choose 2 natures and 2 desires below,
        then assign a distinct color or visual signature to your patron's influence. Decide how they
        communicate <Muted>(visions, messenger, mind-speak)</Muted> and how many followers they have
        <Muted>(many, few, just you)</Muted>. These are their <Strong>trappings</Strong>. Give this
        powerful, otherworldly being a name and describe what you know of them. Establish your
        patron's bond with you and your bond with them. Work with the GM to create a faction for
        them and run it together.
      </Text>
      <Panel
        title="Patron Crucible"
        description="Roll 2 on each table, smash them together, and interpret."
      >
        <Panel.Row>
          <Table textSize="small" cellPadding="tight" italic fullWidth>
            <Table.Head>
              <Table.Row>
                <Table.HeaderCell align="center" colSpan={6} allCaps>
                  Nature
                </Table.HeaderCell>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Cogs</Table.Cell>
                <Table.Cell>Abyss</Table.Cell>
                <Table.Cell>Scourge</Table.Cell>
                <Table.Cell>Shadow</Table.Cell>
                <Table.Cell>Veil</Table.Cell>
                <Table.Cell>Hollow</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Chimera</Table.Cell>
                <Table.Cell>Serpent</Table.Cell>
                <Table.Cell>Flame</Table.Cell>
                <Table.Cell>Green</Table.Cell>
                <Table.Cell>Outsider</Table.Cell>
                <Table.Cell>Balance</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Void</Table.Cell>
                <Table.Cell>Forge</Table.Cell>
                <Table.Cell>Phoenix</Table.Cell>
                <Table.Cell>Whisper</Table.Cell>
                <Table.Cell>Trickster</Table.Cell>
                <Table.Cell>Fiend</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Dead god</Table.Cell>
                <Table.Cell>Thorn</Table.Cell>
                <Table.Cell>Depths</Table.Cell>
                <Table.Cell>Reaper</Table.Cell>
                <Table.Cell>Tempest</Table.Cell>
                <Table.Cell>Storm</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Eternal</Table.Cell>
                <Table.Cell>Harbinger</Table.Cell>
                <Table.Cell>Tide</Table.Cell>
                <Table.Cell>Prism</Table.Cell>
                <Table.Cell>Leviathan</Table.Cell>
                <Table.Cell>Dragon</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Shroud</Table.Cell>
                <Table.Cell>Echo</Table.Cell>
                <Table.Cell>Starborn</Table.Cell>
                <Table.Cell>Dreamer</Table.Cell>
                <Table.Cell>Light</Table.Cell>
                <Table.Cell>Shadow</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Panel.Row>
        <Panel.Row>
          <Table textSize="small" cellPadding="tight" italic fullWidth>
            <Table.Head>
              <Table.Row>
                <Table.HeaderCell align="center" colSpan={6} allCaps>
                  Desires
                </Table.HeaderCell>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Chaos</Table.Cell>
                <Table.Cell>Beauty</Table.Cell>
                <Table.Cell>Minds</Table.Cell>
                <Table.Cell>Wealth</Table.Cell>
                <Table.Cell>Rarities</Table.Cell>
                <Table.Cell>Destruction</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Secrets</Table.Cell>
                <Table.Cell>Fun</Table.Cell>
                <Table.Cell>Control</Table.Cell>
                <Table.Cell>Magic</Table.Cell>
                <Table.Cell>Everything</Table.Cell>
                <Table.Cell>Monuments</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Power</Table.Cell>
                <Table.Cell>Victory</Table.Cell>
                <Table.Cell>Judgment</Table.Cell>
                <Table.Cell>Unity</Table.Cell>
                <Table.Cell>Souls</Table.Cell>
                <Table.Cell>Biomass</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Worshippers</Table.Cell>
                <Table.Cell>Adoration</Table.Cell>
                <Table.Cell>Fear</Table.Cell>
                <Table.Cell>Fame</Table.Cell>
                <Table.Cell>Revenge</Table.Cell>
                <Table.Cell>Knowledge</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Promises</Table.Cell>
                <Table.Cell>Purity</Table.Cell>
                <Table.Cell>Progress</Table.Cell>
                <Table.Cell>Oddities</Table.Cell>
                <Table.Cell>Truth</Table.Cell>
                <Table.Cell>Treasure</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Influence</Table.Cell>
                <Table.Cell>Life</Table.Cell>
                <Table.Cell>Territory</Table.Cell>
                <Table.Cell>Perfection</Table.Cell>
                <Table.Cell>Order</Table.Cell>
                <Table.Cell>Entropy</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Panel.Row>
      </Panel>
      <Heading level={3}>Warlock Talents</Heading>
      <Talent name="Eldritch Weaponry">
        <Text>
          On a perfect when using cantrip utility as a weapon, you can{" "}
          <Strong>push yourself</Strong> to also inflict a spell-level effect with your patron's
          trappings as the touchstone. This effect can't deal more damage—the cantrip already covers
          that.
        </Text>
      </Talent>
      <Talent name="Hex">
        <Text>
          You can roll Presence to hex someone with:{" "}
          <Em>dread—clumsiness—confusion—forgetfulness— misfortune—sleepiness</Em>. Decide when it
          takes effect: <Em>now—soon—much later—specific trigger</Em>. This is a cosmic effect. It's
          magic, but not fully under your control.
        </Text>
      </Talent>
      <Talent name="Knowing Gaze">
        <Text>
          When given time, you can stare into someone's eyes and learn:{" "}
          <Em>
            their greatest desire—what they're hiding—what they want to protect—who they serve
          </Em>
          . This is <StrongEm>highly disconcerting</StrongEm> and only works on someone once. You
          can <Strong>push yourself</Strong> to do this on the spot.
        </Text>
      </Talent>
      <Talent name="Otherworldly Form">
        <Text>
          You can turn into a floating, dispersed form, flavored after your patron's trappings
          <Muted>(swarm of bats, blowing leaves)</Muted>. Choose three things you can do in this
          form:{" "}
          <Em>
            appear barely visible—fly high in the sky—interact with objects—move swiftly—slip
            through small gaps—speak
          </Em>
          .
        </Text>
      </Talent>
      <Talent name="Ritualist">
        <Text>
          You take +1d when working towards overcoming a ritual's challenge and can replace any one
          of a ritual's anchors with yourself.
        </Text>
      </Talent>
      <Talent name="Visions">
        <Text>
          You can roll Presence to ask your patron for forbidden knowledge, like{" "}
          <Em>tightly held secrets</Em> or <Em>that which should not be known</Em>. Ask the GM a
          specific question. The answer may be cryptic or twisted to suit your patron's desires, but
          it will never be an outright lie. On a messy or grim, roll the Patience pool.
        </Text>
      </Talent>
      <Talent name="Wayfarer">
        <Text>
          You can <Strong>push yourself</Strong> to teleport. The further or less familiar the
          destination, the less precise the teleport is. The maximum range is two days' ride away.
          Anything within clear eyesight with no obstruction requires no roll, otherwise make a
          story roll. You can bring others, taking +1t per person.
        </Text>
      </Talent>
      <Path id="wizard" name="Wizard" also={["Diviner", "Summoner", "Witch"]}>
        <Text>
          <Em>
            You wield arcane power through precise knowledge, casting spells from an ever-expanding
            repertoire, your studies endless.
          </Em>
        </Text>
      </Path>
      <CoreTalent
        name="Spellcraft"
        growth="Every 2 levels, increase the castings of spells and potent spells per session by 1
          and create 1 new spell theorem with the Spell Crucible."
      >
        <Text>
          You have spellcasting ability. You roll Wits to cast and the spell theorem you are casting
          serves as its touchstone. You know 4 spell theorems inscribed in your spellbook, created
          using the Spell Crucible (<Em>below</Em>). Each session, you can cast 4 spells and 2
          potent spells. You choose which spell theorem to use when you cast.
        </Text>
        <Text>
          You can learn new spell theorems from studying and experimenting with scrolls, which you
          might find as treasure or obtain from other wizards. This consumes the scroll.
        </Text>
      </CoreTalent>
      <Panel
        title="Spell Crucible"
        description="Roll style, essence, and form. Choose 2, then assign a school."
      >
        <Panel.Row>
          <Table textSize="small" cellPadding="tight" italic fullWidth>
            <Table.Head>
              <Table.Row>
                <Table.HeaderCell align="center" colSpan={6} allCaps>
                  Style
                </Table.HeaderCell>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Binding</Table.Cell>
                <Table.Cell>Oozing</Table.Cell>
                <Table.Cell>Shimmering</Table.Cell>
                <Table.Cell>Shielding</Table.Cell>
                <Table.Cell>Curious</Table.Cell>
                <Table.Cell>Shadowy</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Flaming</Table.Cell>
                <Table.Cell>Slow</Table.Cell>
                <Table.Cell>Wrathful</Table.Cell>
                <Table.Cell>Petrifying</Table.Cell>
                <Table.Cell>Hungry</Table.Cell>
                <Table.Cell>Majestic</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Charming</Table.Cell>
                <Table.Cell>Silent</Table.Cell>
                <Table.Cell>Dazzling</Table.Cell>
                <Table.Cell>Piercing</Table.Cell>
                <Table.Cell>Jovial</Table.Cell>
                <Table.Cell>Frenzied</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Cryptic</Table.Cell>
                <Table.Cell>Withering</Table.Cell>
                <Table.Cell>Primal</Table.Cell>
                <Table.Cell>Screaming</Table.Cell>
                <Table.Cell>Thunderous</Table.Cell>
                <Table.Cell>Prismatic</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Freezing</Table.Cell>
                <Table.Cell>Seeping</Table.Cell>
                <Table.Cell>Ferocious</Table.Cell>
                <Table.Cell>Grasping</Table.Cell>
                <Table.Cell>Venomous</Table.Cell>
                <Table.Cell>Sickening</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Mesmerising</Table.Cell>
                <Table.Cell>Unseen</Table.Cell>
                <Table.Cell>Expanding</Table.Cell>
                <Table.Cell>Swift</Table.Cell>
                <Table.Cell>Phantom</Table.Cell>
                <Table.Cell>Terrible</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Panel.Row>
        <Panel.Row>
          <Table textSize="small" cellPadding="tight" italic fullWidth>
            <Table.Head>
              <Table.Row>
                <Table.HeaderCell align="center" colSpan={6} allCaps>
                  Essence
                </Table.HeaderCell>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Oil</Table.Cell>
                <Table.Cell>Earth</Table.Cell>
                <Table.Cell>Lore</Table.Cell>
                <Table.Cell>Lightning</Table.Cell>
                <Table.Cell>Ash</Table.Cell>
                <Table.Cell>Thorn</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Crystal</Table.Cell>
                <Table.Cell>Air</Table.Cell>
                <Table.Cell>Fire</Table.Cell>
                <Table.Cell>Spirit</Table.Cell>
                <Table.Cell>Acid</Table.Cell>
                <Table.Cell>Vine</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Slime</Table.Cell>
                <Table.Cell>Fungus</Table.Cell>
                <Table.Cell>Death</Table.Cell>
                <Table.Cell>Stasis</Table.Cell>
                <Table.Cell>Sound</Table.Cell>
                <Table.Cell>Water</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Light</Table.Cell>
                <Table.Cell>Hex</Table.Cell>
                <Table.Cell>Blight</Table.Cell>
                <Table.Cell>Terror</Table.Cell>
                <Table.Cell>Mind</Table.Cell>
                <Table.Cell>Draught</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Doom</Table.Cell>
                <Table.Cell>Smoke</Table.Cell>
                <Table.Cell>Sight</Table.Cell>
                <Table.Cell>Mist</Table.Cell>
                <Table.Cell>Vermin</Table.Cell>
                <Table.Cell>Wood</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Pain</Table.Cell>
                <Table.Cell>Energy</Table.Cell>
                <Table.Cell>Feeling</Table.Cell>
                <Table.Cell>Bone</Table.Cell>
                <Table.Cell>Flesh</Table.Cell>
                <Table.Cell>Worm</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Panel.Row>
        <Panel.Row>
          <Table textSize="small" cellPadding="tight" italic fullWidth>
            <Table.Head>
              <Table.Row>
                <Table.HeaderCell align="center" colSpan={6} allCaps>
                  Form
                </Table.HeaderCell>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Beacon</Table.Cell>
                <Table.Cell>Servant</Table.Cell>
                <Table.Cell>Vision</Table.Cell>
                <Table.Cell>Sentinel</Table.Cell>
                <Table.Cell>Ray</Table.Cell>
                <Table.Cell>Poison</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Ring</Table.Cell>
                <Table.Cell>Crown</Table.Cell>
                <Table.Cell>Disk</Table.Cell>
                <Table.Cell>Web</Table.Cell>
                <Table.Cell>Guide</Table.Cell>
                <Table.Cell>Embers</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Chains</Table.Cell>
                <Table.Cell>Word</Table.Cell>
                <Table.Cell>Fang</Table.Cell>
                <Table.Cell>Gate</Table.Cell>
                <Table.Cell>Wall</Table.Cell>
                <Table.Cell>Dark</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Eye</Table.Cell>
                <Table.Cell>Aura</Table.Cell>
                <Table.Cell>Gust</Table.Cell>
                <Table.Cell>Whispers</Table.Cell>
                <Table.Cell>Wings</Table.Cell>
                <Table.Cell>Wave</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Cascade</Table.Cell>
                <Table.Cell>Shield</Table.Cell>
                <Table.Cell>Swarm</Table.Cell>
                <Table.Cell>Pillar</Table.Cell>
                <Table.Cell>Claw</Table.Cell>
                <Table.Cell>Dream</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Bubble</Table.Cell>
                <Table.Cell>Hand</Table.Cell>
                <Table.Cell>Dance</Table.Cell>
                <Table.Cell>Explosion</Table.Cell>
                <Table.Cell>Mask</Table.Cell>
                <Table.Cell>Rot</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Panel.Row>
        <Panel.Row>
          <Text align="center" size="small">
            <Strong allCaps>Magic Schools</Strong>
          </Text>
          <List textSize="small" variant="unordered">
            <List.Item>
              <Strong smallCaps>Abjuration</Strong>: Protects, blocks, dispels, or banishes.
            </List.Item>
            <List.Item>
              <Strong smallCaps>Conjuration</Strong>: Summons creatures, objects, and teleports.
            </List.Item>
            <List.Item>
              <Strong smallCaps>Divination</Strong>: Reveals information, predicts the future, and
              reads minds.
            </List.Item>
            <List.Item>
              <Strong smallCaps>Enchantment</Strong>: Charms, influences, and curses sentient
              creatures.
            </List.Item>
            <List.Item>
              <Strong smallCaps>Evocation</Strong>: Creates and controls elemental and magical
              forces.
            </List.Item>
            <List.Item>
              <Strong smallCaps>Illusion</Strong>: Generates false images and sensory deceptions.
            </List.Item>
            <List.Item>
              <Strong smallCaps>Necromancy</Strong>: Manipulates life, death, and the undead.
            </List.Item>
            <List.Item>
              <Strong smallCaps>Transmutation</Strong>: Transforms matter and alters physical
              properties.
            </List.Item>
          </List>
        </Panel.Row>
      </Panel>
      <Heading level={3}>Wizard Talents</Heading>
      <Talent name="Alchemist">
        <Text>
          Each session, you have a <StrongEm>4d Potions</StrongEm> resource pool. You can have a
          minor potion and roll the pool, or drop 1 and roll for a major potion. You know recipes
          for your spell theorems, plus two more rolled on the Spell Crucible. Learn new recipes by
          sacrificing potions.
        </Text>
      </Talent>
      <Talent name="Arcane Specialty">
        <Text>
          Choose your specialty school. All of your spell theorems now have it plus another school.
          When casting, choose which school to use. On a critical with your specialty school,{" "}
          <Strong>take spark</Strong>.
        </Text>
      </Talent>
      <Talent name="Arcanist">
        <Text>
          You take +1d when rolling an arcana's pool and ignore the first die that would be dropped.
          You also gain 3 <Em>minor arcana</Em> and 1 <Em>major arcana</Em> that you've either
          created or found.
        </Text>
      </Talent>
      <Talent name="Colleagues">
        <Text>
          In every city, some towns, and the occasional dungeon, you can find a <Em>powerful</Em>,{" "}
          <Em>eccentric</Em>
          wizardly colleague who owes you a favor—or maybe you owe them one. If you go out of your
          way to meet and catch up, <Strong>take spark</Strong>.
        </Text>
      </Talent>
      <Talent name="Familiar">
        <Text>
          You manifest a small magical creature, an extension of yourself. You can communicate
          telepathically and send it on simple tasks, making a story roll to see how it goes. By
          entering a trance, you can use its senses. You can also <Strong>push yourself</Strong> to
          cast a spell through it. If your familiar takes damage, it vanishes and reappears at the
          start of the next session.
        </Text>
      </Talent>
      <Talent name="Mastered Theorem">
        <Text>
          Choose one of your spell theorems. You take +1d when casting it and gain 1 extra{" "}
          <StrongEm>potent spell</StrongEm> casting of it per session. Your name becomes linked to
          it and it begins to spread in popularity throughout wizardry—track its spread with
          campaign pools.
        </Text>
      </Talent>
      <Talent name="Prepared Spell">
        <Text>
          You gain 1 story per session and can spend story to flashback to casting a spell with
          specific triggers. If you need to roll a montage to get access to a place, the GM always
          takes suspense in place of an impact move. Roll for the spell's effectiveness now.
        </Text>
      </Talent>
      <Panel>
        <Text>
          <Strong smallCaps>Creating Spell Theorems</Strong>: Roll for style, essence, and form,
          then choose two of the words to form a phrase. Next, assign it a school of magic. You
          interpret these as the spell's touchstones when you cast. Here are some examples:
        </Text>
        <List variant="ordered">
          <List.Item>
            <Strong>Roll</Strong>: <Em>Terrible, Spirit, Gate</Em> →{" "}
            <StrongEm>Spirit Gate</StrongEm> sounds fun! You could assign it to Divina tion to speak
            to the dead or Conjuration to summon spirit warriors.
          </List.Item>
          <List.Item>
            <Strong>Roll</Strong>: <Em>Flaming, Thorn, Aura</Em> → <StrongEm>Thorn Aura</StrongEm>{" "}
            sounds fun! You could assign it to Evocation to create a stabby shield or Enchantment to
            make someone a pariah.
          </List.Item>
        </List>
      </Panel>
    </Page>
  );
};

export default Chapter03;
