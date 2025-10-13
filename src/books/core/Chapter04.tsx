import Page, { type PageNavigationItem } from "@/components/app/Page";
import Em from "@/components/ui/Em";
import Heading from "@/components/ui/Heading";
import Line from "@/components/ui/Line";
import List from "@/components/ui/List";
import Move from "@/components/ui/Move";
import Panel from "@/components/ui/Panel";
import Section from "@/components/ui/Section";
import Stack from "@/components/ui/Stack";
import Strong from "@/components/ui/Strong";
import StrongEm from "@/components/ui/StrongEm";
import Table from "@/components/ui/Table";
import Text from "@/components/ui/Text";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const navigation: PageNavigationItem[] = [
  { name: "Exploring the Grimwild", anchor: "#exploring-the-grimwild" },
  {
    name: "The Three Realities",
    anchor: "#the-three-realities",
    children: [{ name: "Seasons", anchor: "#seasons" }]
  },
  {
    name: "Exploration System",
    anchor: "#exploration-system",
    children: [
      { name: "Region Maps", anchor: "#region-maps" },
      { name: "Site Maps", anchor: "#site-maps" },
      { name: "Settlement Maps", anchor: "#settlement-maps" }
    ]
  },
  {
    name: "Exploration Crucibles",
    anchor: "#exploration-crucibles",
    children: [{ name: "More Crucibles", anchor: "#more-crucibles" }]
  }
];

const Chapter04 = () => {
  return (
    <Page
      bookTitle="Grimwild Community Edition"
      title="Exploration"
      pretitle="Chapter 4:"
      navigation={navigation}
    >
      <Heading level={2} id="exploring-the-grimwild">
        Exploring the Grimwild
      </Heading>
      <Text>
        Exploration is an adventure, and this pointcrawl system captures that spirit. It's about
        venturing into the unknown, both as your characters and as players, uncovering what lies
        ahead. As you explore, connections form naturally, and a narrative begins to emerge—one
        built from your experiences and the discoveries you yourselves have added to the region.
        It's discovery as PCs, but also as players, figuring out and creating a region together on
        the fly and finding the <StrongEm>wonder</StrongEm> and <StrongEm>drama</StrongEm> that lies
        within it.
      </Text>
      <Text>
        The Grimwild is a <Strong>completely optional campaign setting</Strong> or{" "}
        <Strong>exploration system you can bolt onto your own setting</Strong>. You can base your
        game on it, use it only when needed, or forgo it entirely!
      </Text>
      <Section title="What is the Grimwild?">
        <Text>
          <StrongEm>The Grimwild is a chaotic wildland</StrongEm>, a once sparsely populated
          borderland that was shattered by a cataclysm half a century ago. Within, three realities
          have collided—the original small towns and keeps, the ruins of a long-fallen empire, and a
          savage wilderness teeming with monsters. The Remnants, the Wilds, and the Ruins have fused
          into a surreal region that <StrongEm>defies logic and strict canon</StrongEm>, the three
          bleeding into each other across the Grimwild's expanse. Old settlements have either
          adapted or vanished, and survivors live in a tenuously strange existence where a dragon
          might nest beneath a town or farmers inhabit an ancient wizard's tower.
        </Text>
        <Text>
          <StrongEm>It's a long corridor spanning harsh terrain</StrongEm>, a week's ride east to
          west and twice that north to south— if the way were clear. Such territory is rare in the
          Grimwild. Sheer cliffs line the stormy eastern coast, jagged mountains rise to the west,
          and dense forests and swamps choke the north and south. Surrounding the borders is the
          fog, impossibly dense.
        </Text>
        <Text>
          <StrongEm>
            To enter the fog and leave the Grimwild is to risk becoming lost forever
          </StrongEm>
          , never knowing which of the three realities you will emerge into. Expeditions into and
          out of the region rarely returned. The borderland was written off as a cursed wasteland by
          those outside. Those inside have learned their present situation is better than the
          horrors of the other realms. The Grimwild is isolated, left to its own fate.
        </Text>
        <Text>
          <StrongEm>The Grimwild is a canon-less sandbox</StrongEm> where you have the freedom to
          explore, discover, and make it all up as you go. Logical connections don't matter here,
          giving you the freedom to add whatever sounds fun to your party and let a storyline emerge
          through play. It is a land of discovery, one even its own inhabitants don't understand
          well.
        </Text>
      </Section>
      <Heading level={2} id="the-three-realities">
        The Three Realities
      </Heading>
      <Text>
        Below are some basic truths about the three realities that make up the Grimwild, a set of
        pillars for you to start building within and around. You can hang your own fiction off of
        them, or topple them over and create something totally different. The point is to make a
        sandbox that's easy to play in.
      </Text>
      <Section
        title="The Remnants"
        titleVariant="solid"
        description="Forgotten People of the Borderlands"
      >
        <List variant="unordered">
          <List.Item>
            <Strong>Fiercely Independent</Strong>: Long before the cataclysm, the borderlands
            thrived as a melting pot of cultures, blending traditions into something uniquely their
            own.
          </List.Item>
          <List.Item>
            <Strong>Scattered Settlements</Strong>: Villages, homesteads, and the occasional keep
            dot the harsh landscape, home to survivors who endure isolation.
          </List.Item>
          <List.Item>
            <Strong>Simple Monsters</Strong>: Orcs, goblins, and a few larger beasts lurk, but
            they're nothing compared to the horrors of the <Move>Ruins</Move> and <Move>Wilds</Move>
            .
          </List.Item>
          <List.Item>
            <Strong>Blended Heritage</Strong>: A patchwork of languages, customs, and traditions
            born from centuries of border nations mingling.
          </List.Item>
        </List>
      </Section>
      <Section
        title="The Wilds"
        titleVariant="solid"
        description="Untamed and Unforgiving Wilderness"
      >
        <List variant="unordered">
          <List.Item>
            <Strong>Tribal Nomads</Strong>: Scattered tribes thrive where others perish. Each tribe
            has its own customs, some steeped in ancient magic, while others forge brutal pacts with
            the Wilds' predators.
          </List.Item>
          <List.Item>
            <Strong>Raw Magic</Strong>: The land itself pulses with ancient, untamed power, twisting
            flora, fauna, and even the air into something alive and unpredictable.
          </List.Item>
          <List.Item>
            <Strong>Deadly Terrain</Strong>: Shifting rivers, jagged cliffs, and choking forests
            make navigation a perilous gamble for outsiders.
          </List.Item>
          <List.Item>
            <Strong>Primal Beasts</Strong>: Terrible creatures stalk the Wilds, from towering apex
            predators to grotesque hybrids warped by magic.
          </List.Item>
        </List>
      </Section>
      <Section title="The Ruins" titleVariant="solid" description="A Fallen Empire">
        <List variant="unordered">
          <List.Item>
            <Strong>Shattered Greatness</Strong>: Once a realm of truly unmatched knowledge and
            power, now reduced to crumbling relics of its glory.
          </List.Item>
          <List.Item>
            <Strong>Forgotten Relics</Strong>: Ancient artifacts of magic and technology linger,
            broken or lost, yet still brimming with untapped potential.
          </List.Item>
          <List.Item>
            <Strong>Corrupted Wasteland</Strong>: Overgrown cities and desolate ruins seethe with
            decay, haunted by strange energies and whispers of the past.
          </List.Item>
          <List.Item>
            <Strong>Eldritch Horrors</Strong>: Nightmarish creatures lurk in the
            shadows—aberrations, cursed beings, and the tortured echoes of those consumed by the
            empire's collapse.
          </List.Item>
        </List>
      </Section>
      <Line />
      <Stack>
        <Text align="center">
          <Strong>At this point, you probably have more questions than answers.</Strong>
        </Text>
        <Text align="center">That's the point. You pose the questions, then you answer them.</Text>
        <Text align="center">From this point forward, the Grimwild is yours to create.</Text>
      </Stack>
      <Heading level={3} id="seasons">
        Seasons
      </Heading>
      <Text>
        Create custom months to add a fantastic touch to your world. Stick to a four-season cycle
        with three months per season, rolled on the tables below. Re-order the months as makes
        sense. For the first month, include three simple details like atmospherics, weather, or
        flora. When you reach another month, add three more for it. Add seasons as needed later in
        the campaign. Mix in fantasy elements!
      </Text>
      <Section title="Spring Months">
        <Stack direction="row" spacing="md">
          <Table align="center" textSize="small" cellPadding="tight" italic>
            <Table.Body>
              <Table.Row>
                <Table.Cell>green</Table.Cell>
                <Table.Cell rowSpan={6}>
                  <FontAwesomeIcon icon={faPlus} />
                </Table.Cell>
                <Table.Cell>bloom</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>petal</Table.Cell>
                <Table.Cell>wind</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>moss</Table.Cell>
                <Table.Cell>wave</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>eager</Table.Cell>
                <Table.Cell>dawn</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>fresh</Table.Cell>
                <Table.Cell>shine</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>well</Table.Cell>
                <Table.Cell>hope</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Stack.Item flex={1}>
            <List variant="unordered" muted>
              <List.Item>
                <Strong>Freshwave</Strong>: Frost melts, rivers swell, buds bloom.
              </List.Item>
              <List.Item>
                <Strong>Greenbloom</Strong>: Emerald fields, humming bees, light rainfalls.
              </List.Item>
              <List.Item>
                <Strong>Mossdawn</Strong>: Velvet moss, luminous spores, forest roots awaken.
              </List.Item>
              <List.Item>
                <Strong>Wellhope</Strong>: Calm winds, glowing fungi, clear skies.
              </List.Item>
            </List>
          </Stack.Item>
        </Stack>
      </Section>
      <Line />
      <Section title="Summer Months">
        <Stack direction="row" spacing="md">
          <Table align="center" textSize="small" cellPadding="tight" italic>
            <Table.Body>
              <Table.Row>
                <Table.Cell>ash</Table.Cell>
                <Table.Cell rowSpan={6}>
                  <FontAwesomeIcon icon={faPlus} />
                </Table.Cell>
                <Table.Cell>storm</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>flood</Table.Cell>
                <Table.Cell>haze</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>sear</Table.Cell>
                <Table.Cell>flare</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>lazy</Table.Cell>
                <Table.Cell>glow</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>gold</Table.Cell>
                <Table.Cell>breeze</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>buzz</Table.Cell>
                <Table.Cell>surge</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Stack.Item flex={1}>
            <List variant="unordered" muted>
              <List.Item>
                <Strong>Floodstorm</Strong>: Endless downpours, roaring rivers, lightning skies.
              </List.Item>
              <List.Item>
                <Strong>Lazyglow</Strong>: Dying fungi, heavy stillness, rising heat.
              </List.Item>
              <List.Item>
                <Strong>Goldbreeze</Strong>: Warm winds, rippling fields, golden shimmer.
              </List.Item>
              <List.Item>
                <Strong>Buzzsurge</Strong>: Insect swarms, blooming thistles, pollen bursts.
              </List.Item>
            </List>
          </Stack.Item>
        </Stack>
      </Section>
      <Line />
      <Section title="Fall Months">
        <Stack direction="row" spacing="md">
          <Table align="center" textSize="small" cellPadding="tight" italic>
            <Table.Body>
              <Table.Row>
                <Table.Cell>husk</Table.Cell>
                <Table.Cell rowSpan={6}>
                  <FontAwesomeIcon icon={faPlus} />
                </Table.Cell>
                <Table.Cell>mist</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>wilt</Table.Cell>
                <Table.Cell>moon</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>amber</Table.Cell>
                <Table.Cell>dew</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>rust</Table.Cell>
                <Table.Cell>chill</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>bitter</Table.Cell>
                <Table.Cell>flow</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>turn</Table.Cell>
                <Table.Cell>smoke</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Stack.Item flex={1}>
            <List variant="unordered" muted>
              <List.Item>
                <Strong>Turnsmoke</Strong>: Pollen fires, drifting embers, ashen haze.
              </List.Item>
              <List.Item>
                <Strong>Huskmist</Strong>: Harvested fields, pale fog, rustling stalks.
              </List.Item>
              <List.Item>
                <Strong>Wiltmoon</Strong>: Crumbling leaves, silver light, creeping chill.
              </List.Item>
              <List.Item>
                <Strong>Bitterdew</Strong>: Frosty mornings, sharp scents, stinging dew drops.
              </List.Item>
            </List>
          </Stack.Item>
        </Stack>
      </Section>
      <Line />
      <Section title="Winter Months">
        <Stack direction="row" spacing="md">
          <Table align="center" textSize="small" cellPadding="tight" italic>
            <Table.Body>
              <Table.Row>
                <Table.Cell>storm</Table.Cell>
                <Table.Cell rowSpan={6}>
                  <FontAwesomeIcon icon={faPlus} />
                </Table.Cell>
                <Table.Cell>tide</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>bleak</Table.Cell>
                <Table.Cell>gale</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>quiet</Table.Cell>
                <Table.Cell>sheen</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>howl</Table.Cell>
                <Table.Cell>hush</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>frost</Table.Cell>
                <Table.Cell>freeze</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>drift</Table.Cell>
                <Table.Cell>morn</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Stack.Item flex={1}>
            <List variant="unordered" muted>
              <List.Item>
                <Strong>Quietgale</Strong>: Whispering winds, iced branches, long nights.
              </List.Item>
              <List.Item>
                <Strong>Frostsheen</Strong>: Dark ice, frozen rivers, pale starlight.
              </List.Item>
              <List.Item>
                <Strong>Stormfreeze</Strong>: Raging blizzards, splintering ice, howling skies.
              </List.Item>
              <List.Item>
                <Strong>Howlhush</Strong>: Frozen silence, endless drifts, eerie auroras.
              </List.Item>
            </List>
          </Stack.Item>
        </Stack>
      </Section>
      <Heading level={2} id="exploration-system">
        Exploration System
      </Heading>
      <Text>
        Exploration is played out with a token-based system that lets players and the GM work
        together to create and draw out the world. You gain <Strong>exploration tokens</Strong>,
        then spend them to add things to the map, giving each player equal opportunity to have an
        impact, while the spending of a resource adds weight to the contributions.
      </Text>
      <Text>
        <StrongEm>You're creating a pointcrawl</StrongEm>. A pointcrawl maps out the meaningful
        locations (<Strong>points</Strong>) and the connections (<Strong>paths</Strong>) between
        them, focusing on what really matters. Everything outside those paths? Either it's tough to
        get through, or there's nothing worth finding there. This approach keeps the spotlight on
        the places and journeys that drive the story, cutting out the tedium and keeping exploration
        sharp, deliberate, and packed with interesting things to experience.
      </Text>
      <Section title="Earning Tokens">
        <List variant="unordered">
          <List.Item>
            <Strong smallCaps>Expand the Map</Strong>: When the GM uses the expand the map story
            move all players and the GM gain <StrongEm>3 exploration tokens</StrongEm>.
          </List.Item>
          <List.Item>
            <Strong>Significant Discoveries</Strong>: Earn 1+ tokens by discovering something
            meaningful when you actively explore or uncover key details of an area.
          </List.Item>
          <List.Item>
            <Strong>Exchange Story</Strong>: Spend story 1-for-1 to gain a token, but you have to
            connect it to a wise and explain how you knew about what you spent it on in-character.
          </List.Item>
        </List>
      </Section>
      <Section title="Spending Tokens">
        <Text>
          Exploration tokens can be spent to add points and paths to the map. The token cost depends
          on the map type, covered over the next few pages. Generally, a <Strong>minor</Strong>{" "}
          point or path costs 1 token and a <Strong>major</Strong> point or path costs 2 tokens. You
          use paths to draw connections between the points or to lead you off into unexplored
          territory.
        </Text>
        <Text>
          Each map type (region, settlement, site) has differences in how tokens are spent. Check
          those pages for specifics.
        </Text>
      </Section>
      <Section title="Expand the Map">
        <Text>
          The GM has a new story move called <Move>Expand the Map</Move> that encourages and makes
          time for exploration and mapping. It can be invoked at any time but must be used when:
        </Text>
        <List variant="unordered">
          <List.Item>
            The adventuring party reaches the edge of the known map and cannot proceed without
            expanding it.
          </List.Item>
          <List.Item>
            There's a natural narrative progression requir ing new points or paths to open up.
          </List.Item>
          <List.Item>
            Everyone's just excited to add more to the map, like at the start or end of a session.
          </List.Item>
        </List>
        <Text>
          <Strong>When the GM uses this move:</Strong>
        </Text>
        <List variant="unordered">
          <List.Item>
            Everyone (GM, too) takes <StrongEm>3 exploration tokens</StrongEm>.
          </List.Item>
          <List.Item>
            Pull out the map and go around, in any order, adding points to the map{" "}
            <StrongEm>until all tokens are spent</StrongEm>. You cannot hoard tokens.
          </List.Item>
          <List.Item>
            New areas are added to the map, focusing on key points of interest and the connections
            between them.
          </List.Item>
        </List>
      </Section>
      <Section title="Joy of Exploration">
        <Text>
          <Strong>Take spark</Strong> when you engage with the wonder of exploration as such:
        </Text>
        <List variant="unordered">
          <List.Item>
            <StrongEm>Pause and take in the world around you</StrongEm>. Let your roleplaying bring
            out a moment of beauty—what does your character notice, and how do they feel about it?
            Take spark when it creates a meaningful scene.
          </List.Item>
          <List.Item>
            <StrongEm>Ask a question about the world that nobody knows the answer to</StrongEm>,
            sparking curiosity in yourself and others. Encourage wonder. Take spark when the table
            embraces it.
          </List.Item>
          <List.Item>
            <StrongEm>Travel somewhere far off, simply to see what's there</StrongEm>. Everyone on
            the journey takes spark.
          </List.Item>
          <List.Item>
            <StrongEm>Highlight the unique nature of a place</StrongEm>, even a seemingly mundane
            one. Make the scene about the location itself—exploration is at its heart. Take spark
            when you realize you'll never forget that place.
          </List.Item>
        </List>
      </Section>
      <Heading level={3} id="region-maps">
        Region Maps
      </Heading>
      <Text>
        The Grimwild region map begins with squares along each border: the west are nearly
        impassible mountains, the east a long, cliffside coastline. The north is a heavy forest and
        the south a dire swamp. And throughout each of these is the fog, which you dare not exit—
        entering the fog will take you to one of the three realities, with no way to know which one.
      </Text>
      <Text>
        This creates a limited, but completely unknown sandbox to begin exploring. You enter on one
        side of this sandbox, drawing a path into it. From there, you begin your exploration. Spend
        tokens to:
      </Text>
      <List variant="unordered">
        <List.Item>
          <Strong>1 Token</Strong>: Minor points and minor paths.
        </List.Item>
        <List.Item>
          <Strong>2 Tokens</Strong>: Major points and major paths.
        </List.Item>
        <List.Item>
          <Strong>3 Tokens</Strong>: Curiosities, barriers, and areas. Can also be called for by the
          GM (for free) to spice up the map, asking a player to add it or adding it themself.
        </List.Item>
        <List.Item>
          <Strong>Free</Strong>: <StrongEm>Rough paths</StrongEm> can be added for free, though they
          are difficult to traverse and generally dangerous. <StrongEm>Passes</StrongEm> can be
          added free as parts of a path. <StrongEm>Waypoints</StrongEm> are added to the path by the
          GM. Each represents 1 day of travel on that path.
        </List.Item>
      </List>
      <Text>
        <StrongEm>When you place something on the map</StrongEm>, you always label it. This can be a
        simple evocative label of just a few keywords or even a name. If you aren't sure, you can
        consult the crucibles on <Em>pg. 88</Em> for ideas! You can also label it [Remnants] [Wilds]
        [Ruins] if you want to specify which reality it is mostly from.
      </Text>
      <Text>
        <StrongEm>When you draw a path</StrongEm>, the GM adds waypoints to it - dots that indicate
        1 day of travel. Major paths have dots spread out further while minor paths have them
        closer. Rough paths don't always have them if it's unclear how long it will take—it can be
        possible to estimate!
      </Text>
      <Text>
        <Strong>Here's a list of everything you can add to the map:</Strong>
      </Text>
      <List variant="unordered">
        <List.Item>
          <Strong>Settlement</Strong>: Places people live—towns, tribes, or villages.
        </List.Item>
        <List.Item>
          <Strong>Site</Strong>: Points of interest—dungeons, ruins, unique natural features.
        </List.Item>
        <List.Item>
          <Strong>Danger</Strong>: Hostile monsters, hazardous nature, or enemies.
        </List.Item>
        <List.Item>
          <Strong>Curiosity</Strong>: Unclear but intriguing signs or information waiting to be
          explored.
        </List.Item>
        <List.Item>
          <Strong>Barrier</Strong>: Obstacles to travel—rivers, mountains, cliffs. Only crossable
          via rough paths or passes.
        </List.Item>
        <List.Item>
          <Strong>Area</Strong>: Large, usually natural, spaces with a single theme—lakes, swamps,
          deserts.
        </List.Item>
        <List.Item>
          <Strong>Major Path</Strong>: Well-maintained roadways or trade routes.
        </List.Item>
        <List.Item>
          <Strong>Minor Path</Strong>: Lesser trails—footpaths, forest tracks, game trails.
        </List.Item>
        <List.Item>
          <Strong>Rough Path</Strong>: Difficult and dangerous terrain—overgrown paths, rocky
          trails, dry creek beds.
        </List.Item>
        <List.Item>
          <Strong>Pass</Strong>: Travel enablers—bridges, tunnels, mountain passes.
        </List.Item>
        <List.Item>
          <Strong>Waypoint</Strong>: Marker for 1 day's travel (on horseback, under normal
          conditions).
        </List.Item>
      </List>
      <Text>
        <StrongEm>To start off mapping a region</StrongEm>, begin on one border and use the{" "}
        <Move>Expand the Map</Move> move. The GM draws a rough path into the region, then go through
        one or two rounds of <Move>Expand the Map</Move>.
      </Text>
      <Text>
        Add factions to the map and campaign as needed. There's a factions crucible on pg. 88 to
        help.
      </Text>
      <Heading level={3} id="site-maps">
        Site Maps
      </Heading>
      <Text>
        The <Strong>5-Point Site</Strong> technique, inspired by the <Em>5-Room Dungeon</Em>{" "}
        concept, is used for mapping adventure locations. You create 5 points together using the
        same point cost rules as the region maps. Curiosities, paths, barriers, and areas can be
        added as well and don't take up the 5 points.
      </Text>
      <Text>
        <StrongEm>You must add one type of each of the 5 points below</StrongEm>. The GM begins
        <Move>Expand the Map</Move> by adding the Reward point on the map first.
      </Text>
      <Text>
        When you place one of the points, <StrongEm>describe it with a two word phrase</StrongEm>—or
        use the settlements, sites, or dangers crucibles on the next page. You can either discuss
        them in detail as the map is drawn, leave it up to the GM to expand upon the phrases in
        play, or somewhere in-between. The GM decides what monsters, dangers, and challenges await
        within the site. Here are the 5 points to the map:
      </Text>
      <List variant="ordered">
        <List.Item>
          <Strong>Entrance and Guardian</Strong>: A challenge blocks the way—either a puzzle, trap,
          or guardian to over come.{" "}
          <Em>This point sets the tone and tests the adventurers' mettle</Em>.
        </List.Item>
        <List.Item>
          <Strong>Puzzle or Roleplay Challenge</Strong>: A non-combat encounter that requires clever
          thinking, roleplaying, or teamwork.{" "}
          <Em>This point adds variety and deepens the narrative</Em>.
        </List.Item>
        <List.Item>
          <Strong>Trick or Setback</Strong>: Something unexpected catches the party off-guard—a
          betrayal, illusion, or hidden threat.{" "}
          <Em>This point keeps everyone engaged and on edge</Em>.
        </List.Item>
        <List.Item>
          <Strong>Climactic Showdown</Strong>: The dungeon's central conflict—usually a big combat
          or intense encounter with high stakes.{" "}
          <Em>This point brings resolution or key rewards</Em> .
        </List.Item>
        <List.Item>
          <Strong>Reward and Revelation</Strong>: The loot, knowledge, or reward the party
          sought—but with a twist or hook for future adventures.{" "}
          <Em>This point ends with a memorable moment</Em>.
        </List.Item>
      </List>
      <Heading level={3} id="settlement-maps">
        Settlement Maps
      </Heading>
      <Text>
        Settlement maps are built with expand the map, but with a different drawing style. The GM
        begins by drawing the town's outline, either as a vague <Strong>border</Strong> (
        <Em>a line, like a path</Em>) or as a <Strong>wall</Strong> (<Em>a barrier</Em>). You add
        roads and notable buildings following the rules to the right, and barriers, areas,
        curiosities, and passes as normal.
      </Text>
      <Text>
        Buildings are <StrongEm>points of interest</StrongEm>, with a significant NPC or unique
        function. Not writing a building down doesn't mean it's not there, it just means it's
        unremarkable.
      </Text>
      <List variant="unordered">
        <List.Item>
          <Strong>Road (1 Token)</Strong>: Draw a straight line between any two other lines on the
          map. These act as main roads.
        </List.Item>
        <List.Item>
          <Strong>Building (2 Tokens)</Strong>: Draw a notable building within an empty space
          between roads on the map, generally in small areas you've created. Detail it or use the
          crucible below. You can also spend 3 tokens to add a <Strong>major building</Strong>,
          written on the map in CAPITAL LETTERS.
        </List.Item>
      </List>
      <Panel
        title="Building Crucible"
        description="Roll 1 on each table, smash them together, and interpret."
      >
        <Panel.Row>
          <Table cellPadding="tight" textSize="small" fullWidth italic>
            <Table.Body>
              <Table.Row>
                <Table.Cell>ancient</Table.Cell>
                <Table.Cell>haunted</Table.Cell>
                <Table.Cell>sacred</Table.Cell>
                <Table.Cell>shadowy</Table.Cell>
                <Table.Cell>festive</Table.Cell>
                <Table.Cell>seedy</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>crumbling</Table.Cell>
                <Table.Cell>verdant</Table.Cell>
                <Table.Cell>sprawling</Table.Cell>
                <Table.Cell>overgrown</Table.Cell>
                <Table.Cell>gloomy</Table.Cell>
                <Table.Cell>opulent</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>ornate</Table.Cell>
                <Table.Cell>forgotten</Table.Cell>
                <Table.Cell>mysterious</Table.Cell>
                <Table.Cell>arcane</Table.Cell>
                <Table.Cell>immaculate</Table.Cell>
                <Table.Cell>lonely</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>weathered</Table.Cell>
                <Table.Cell>sturdy</Table.Cell>
                <Table.Cell>thriving</Table.Cell>
                <Table.Cell>bustling</Table.Cell>
                <Table.Cell>crude</Table.Cell>
                <Table.Cell>grimy</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>enchanted</Table.Cell>
                <Table.Cell>humble</Table.Cell>
                <Table.Cell>dilapidated</Table.Cell>
                <Table.Cell>secluded</Table.Cell>
                <Table.Cell>battered</Table.Cell>
                <Table.Cell>timeworn</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>gilded</Table.Cell>
                <Table.Cell>hidden</Table.Cell>
                <Table.Cell>majestic</Table.Cell>
                <Table.Cell>somber</Table.Cell>
                <Table.Cell>towering</Table.Cell>
                <Table.Cell>bleak</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Panel.Row>
        <Panel.Row>
          <Table cellPadding="tight" textSize="small" fullWidth italic>
            <Table.Body>
              <Table.Row>
                <Table.Cell>alchemist</Table.Cell>
                <Table.Cell>shrine</Table.Cell>
                <Table.Cell>temple</Table.Cell>
                <Table.Cell>watchtower</Table.Cell>
                <Table.Cell>gemcutter</Table.Cell>
                <Table.Cell>observatory</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>docks</Table.Cell>
                <Table.Cell>barracks</Table.Cell>
                <Table.Cell>armory</Table.Cell>
                <Table.Cell>guild hall</Table.Cell>
                <Table.Cell>scribe</Table.Cell>
                <Table.Cell>graveyard</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>orphanage</Table.Cell>
                <Table.Cell>stable</Table.Cell>
                <Table.Cell>tower</Table.Cell>
                <Table.Cell>market</Table.Cell>
                <Table.Cell>library</Table.Cell>
                <Table.Cell>brewery</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>baker</Table.Cell>
                <Table.Cell>blacksmith</Table.Cell>
                <Table.Cell>arena</Table.Cell>
                <Table.Cell>keep</Table.Cell>
                <Table.Cell>jail</Table.Cell>
                <Table.Cell>teahouse</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>herbalist</Table.Cell>
                <Table.Cell>tavern</Table.Cell>
                <Table.Cell>inn</Table.Cell>
                <Table.Cell>fletcher</Table.Cell>
                <Table.Cell>manor</Table.Cell>
                <Table.Cell>bathhouse</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>carpenter</Table.Cell>
                <Table.Cell>fortune teller</Table.Cell>
                <Table.Cell>weaver</Table.Cell>
                <Table.Cell>glassblower</Table.Cell>
                <Table.Cell>warehouse</Table.Cell>
                <Table.Cell>clocktower</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Panel.Row>
      </Panel>
      <Heading level={2} id="exploration-crucibles">
        Exploration Crucibles
      </Heading>
      <Panel
        title="Settlement Crucible"
        description="Roll 1 on each table, smash them together, and interpret."
      >
        <Panel.Row>
          <Table cellPadding="tight" textSize="small" fullWidth italic>
            <Table.Body>
              <Table.Row>
                <Table.Cell>bustling</Table.Cell>
                <Table.Cell>prosperous</Table.Cell>
                <Table.Cell>ancient</Table.Cell>
                <Table.Cell>secluded</Table.Cell>
                <Table.Cell>snowy</Table.Cell>
                <Table.Cell>dusty</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>quiet</Table.Cell>
                <Table.Cell>deserted</Table.Cell>
                <Table.Cell>trade</Table.Cell>
                <Table.Cell>forgotten</Table.Cell>
                <Table.Cell>shady</Table.Cell>
                <Table.Cell>windy</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>walled</Table.Cell>
                <Table.Cell>fortified</Table.Cell>
                <Table.Cell>haunted</Table.Cell>
                <Table.Cell>peaceful</Table.Cell>
                <Table.Cell>remote</Table.Cell>
                <Table.Cell>coastal</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>hidden</Table.Cell>
                <Table.Cell>overgrown</Table.Cell>
                <Table.Cell>foggy</Table.Cell>
                <Table.Cell>hilly</Table.Cell>
                <Table.Cell>barren</Table.Cell>
                <Table.Cell>flooded</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>sacred</Table.Cell>
                <Table.Cell>thriving</Table.Cell>
                <Table.Cell>nomadic</Table.Cell>
                <Table.Cell>sunlit</Table.Cell>
                <Table.Cell>rocky</Table.Cell>
                <Table.Cell>mountainous</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>isolated</Table.Cell>
                <Table.Cell>ruined</Table.Cell>
                <Table.Cell>abandoned</Table.Cell>
                <Table.Cell>forested</Table.Cell>
                <Table.Cell>sprawling</Table.Cell>
                <Table.Cell>reclaimed</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Panel.Row>
        <Panel.Row>
          <Table cellPadding="tight" textSize="small" fullWidth italic>
            <Table.Body>
              <Table.Row>
                <Table.Cell>village</Table.Cell>
                <Table.Cell>camp</Table.Cell>
                <Table.Cell>port</Table.Cell>
                <Table.Cell>base</Table.Cell>
                <Table.Cell>oasis</Table.Cell>
                <Table.Cell>watch</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>outpost</Table.Cell>
                <Table.Cell>settlement</Table.Cell>
                <Table.Cell>market</Table.Cell>
                <Table.Cell>stronghold</Table.Cell>
                <Table.Cell>manor</Table.Cell>
                <Table.Cell>hideout</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>town</Table.Cell>
                <Table.Cell>colony</Table.Cell>
                <Table.Cell>watchtower</Table.Cell>
                <Table.Cell>ranch</Table.Cell>
                <Table.Cell>harbor</Table.Cell>
                <Table.Cell>den</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>encampment</Table.Cell>
                <Table.Cell>fortress</Table.Cell>
                <Table.Cell>crossroads</Table.Cell>
                <Table.Cell>grove</Table.Cell>
                <Table.Cell>cliffside</Table.Cell>
                <Table.Cell>homestead</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>trading post</Table.Cell>
                <Table.Cell>hamlet</Table.Cell>
                <Table.Cell>sanctuary</Table.Cell>
                <Table.Cell>plaza</Table.Cell>
                <Table.Cell>peak</Table.Cell>
                <Table.Cell>monastery</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>citadel</Table.Cell>
                <Table.Cell>refuge</Table.Cell>
                <Table.Cell>commune</Table.Cell>
                <Table.Cell>farmstead</Table.Cell>
                <Table.Cell>cavern</Table.Cell>
                <Table.Cell>bastion</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Panel.Row>
      </Panel>
      <Panel
        title="Sites Crucible"
        description="Roll 1 on each table, smash them together, and interpret."
      >
        <Panel.Row>
          <Table cellPadding="tight" textSize="small" fullWidth italic>
            <Table.Body>
              <Table.Row>
                <Table.Cell>ancient</Table.Cell>
                <Table.Cell>abandoned</Table.Cell>
                <Table.Cell>cursed</Table.Cell>
                <Table.Cell>frozen</Table.Cell>
                <Table.Cell>charred</Table.Cell>
                <Table.Cell>hidden</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>forgotten</Table.Cell>
                <Table.Cell>lost</Table.Cell>
                <Table.Cell>enchanted</Table.Cell>
                <Table.Cell>mossy</Table.Cell>
                <Table.Cell>clear</Table.Cell>
                <Table.Cell>secluded</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>sacred</Table.Cell>
                <Table.Cell>mystic</Table.Cell>
                <Table.Cell>weird</Table.Cell>
                <Table.Cell>moonlit</Table.Cell>
                <Table.Cell>foggy</Table.Cell>
                <Table.Cell>collapsed</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>haunted</Table.Cell>
                <Table.Cell>sunken</Table.Cell>
                <Table.Cell>buried</Table.Cell>
                <Table.Cell>ruined</Table.Cell>
                <Table.Cell>sulfurous</Table.Cell>
                <Table.Cell>smoldering</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>crumbling</Table.Cell>
                <Table.Cell>shattered</Table.Cell>
                <Table.Cell>burned</Table.Cell>
                <Table.Cell>underground</Table.Cell>
                <Table.Cell>blessed</Table.Cell>
                <Table.Cell>windblown</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>hidden</Table.Cell>
                <Table.Cell>overgrown</Table.Cell>
                <Table.Cell>desolate</Table.Cell>
                <Table.Cell>echoing</Table.Cell>
                <Table.Cell>forgotten</Table.Cell>
                <Table.Cell>shaded</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Panel.Row>
        <Panel.Row>
          <Table cellPadding="tight" textSize="small" fullWidth italic>
            <Table.Body>
              <Table.Row>
                <Table.Cell>altar</Table.Cell>
                <Table.Cell>circle</Table.Cell>
                <Table.Cell>well</Table.Cell>
                <Table.Cell>chamber</Table.Cell>
                <Table.Cell>labyrinth</Table.Cell>
                <Table.Cell>archway</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>monument</Table.Cell>
                <Table.Cell>sanctuary</Table.Cell>
                <Table.Cell>tower</Table.Cell>
                <Table.Cell>obelisk</Table.Cell>
                <Table.Cell>fountain</Table.Cell>
                <Table.Cell>sanctum</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>temple</Table.Cell>
                <Table.Cell>catacombs</Table.Cell>
                <Table.Cell>crypt</Table.Cell>
                <Table.Cell>cairn</Table.Cell>
                <Table.Cell>portal</Table.Cell>
                <Table.Cell>hall</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>grove</Table.Cell>
                <Table.Cell>shrine</Table.Cell>
                <Table.Cell>spring</Table.Cell>
                <Table.Cell>pillar</Table.Cell>
                <Table.Cell>grotto</Table.Cell>
                <Table.Cell>mine</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>ruins</Table.Cell>
                <Table.Cell>cavern</Table.Cell>
                <Table.Cell>mausoleum</Table.Cell>
                <Table.Cell>pit</Table.Cell>
                <Table.Cell>cemetery</Table.Cell>
                <Table.Cell>lair</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>tomb</Table.Cell>
                <Table.Cell>statue</Table.Cell>
                <Table.Cell>gate</Table.Cell>
                <Table.Cell>throne</Table.Cell>
                <Table.Cell>dungeon</Table.Cell>
                <Table.Cell>vault</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Panel.Row>
      </Panel>
      <Panel
        title="Dangers Crucible"
        description="Roll 1 on each table, smash them together, and interpret."
      >
        <Panel.Row>
          <Table cellPadding="tight" textSize="small" fullWidth italic>
            <Table.Body>
              <Table.Row>
                <Table.Cell>savage</Table.Cell>
                <Table.Cell>foul</Table.Cell>
                <Table.Cell>vile</Table.Cell>
                <Table.Cell>twisted</Table.Cell>
                <Table.Cell>wailing</Table.Cell>
                <Table.Cell>writhing</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>cursed</Table.Cell>
                <Table.Cell>haunted</Table.Cell>
                <Table.Cell>corrupted</Table.Cell>
                <Table.Cell>reckless</Table.Cell>
                <Table.Cell>hungry</Table.Cell>
                <Table.Cell>shrieking</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>raging</Table.Cell>
                <Table.Cell>chaotic</Table.Cell>
                <Table.Cell>maddening</Table.Cell>
                <Table.Cell>brutal</Table.Cell>
                <Table.Cell>rampaging</Table.Cell>
                <Table.Cell>vicious</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>hidden</Table.Cell>
                <Table.Cell>shadowed</Table.Cell>
                <Table.Cell>darkened</Table.Cell>
                <Table.Cell>lurking</Table.Cell>
                <Table.Cell>restless</Table.Cell>
                <Table.Cell>silent</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>venomous</Table.Cell>
                <Table.Cell>forbidden</Table.Cell>
                <Table.Cell>bloodthirsty</Table.Cell>
                <Table.Cell>forgotten</Table.Cell>
                <Table.Cell>seething</Table.Cell>
                <Table.Cell>stalking</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>relentless</Table.Cell>
                <Table.Cell>feral</Table.Cell>
                <Table.Cell>ancient</Table.Cell>
                <Table.Cell>ensnaring</Table.Cell>
                <Table.Cell>malevolent</Table.Cell>
                <Table.Cell>violent</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Panel.Row>
        <Panel.Row>
          <Table cellPadding="tight" textSize="small" fullWidth italic>
            <Table.Body>
              <Table.Row>
                <Table.Cell>beasts</Table.Cell>
                <Table.Cell>monsters</Table.Cell>
                <Table.Cell>brigands</Table.Cell>
                <Table.Cell>shadows</Table.Cell>
                <Table.Cell>specters</Table.Cell>
                <Table.Cell>demons</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>spirits</Table.Cell>
                <Table.Cell>bog</Table.Cell>
                <Table.Cell>cults</Table.Cell>
                <Table.Cell>crypt</Table.Cell>
                <Table.Cell>forest</Table.Cell>
                <Table.Cell>cliffs</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>caverns</Table.Cell>
                <Table.Cell>abyss</Table.Cell>
                <Table.Cell>behemoth</Table.Cell>
                <Table.Cell>fiends</Table.Cell>
                <Table.Cell>serpents</Table.Cell>
                <Table.Cell>warriors</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>ruins</Table.Cell>
                <Table.Cell>wraiths</Table.Cell>
                <Table.Cell>crevice</Table.Cell>
                <Table.Cell>wilds</Table.Cell>
                <Table.Cell>graveyard</Table.Cell>
                <Table.Cell>shades</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>storm</Table.Cell>
                <Table.Cell>marsh</Table.Cell>
                <Table.Cell>gorge</Table.Cell>
                <Table.Cell>tangle</Table.Cell>
                <Table.Cell>depths</Table.Cell>
                <Table.Cell>pathways</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>woods</Table.Cell>
                <Table.Cell>swarm</Table.Cell>
                <Table.Cell>mire</Table.Cell>
                <Table.Cell>mists</Table.Cell>
                <Table.Cell>crags</Table.Cell>
                <Table.Cell>fog</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Panel.Row>
      </Panel>
      <Heading level={3} id="more-crucibles">
        More Crucibles
      </Heading>
      <Panel
        title="Curiosities Crucible"
        description="Roll 1 on each table, smash them together, and interpret."
      >
        <Panel.Row>
          <Table cellPadding="tight" textSize="small" fullWidth italic>
            <Table.Body>
              <Table.Row>
                <Table.Cell>lingering</Table.Cell>
                <Table.Cell>mysterious</Table.Cell>
                <Table.Cell>dancing</Table.Cell>
                <Table.Cell>curious</Table.Cell>
                <Table.Cell>singing</Table.Cell>
                <Table.Cell>low</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>strange</Table.Cell>
                <Table.Cell>distant</Table.Cell>
                <Table.Cell>soft</Table.Cell>
                <Table.Cell>melancholy</Table.Cell>
                <Table.Cell>strange</Table.Cell>
                <Table.Cell>twinkling</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>faint</Table.Cell>
                <Table.Cell>haunting</Table.Cell>
                <Table.Cell>glowing</Table.Cell>
                <Table.Cell>humming</Table.Cell>
                <Table.Cell>pale</Table.Cell>
                <Table.Cell>hazy</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>echoing</Table.Cell>
                <Table.Cell>hidden</Table.Cell>
                <Table.Cell>fading</Table.Cell>
                <Table.Cell>shadowy</Table.Cell>
                <Table.Cell>colorful</Table.Cell>
                <Table.Cell>glittering</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>flickering</Table.Cell>
                <Table.Cell>pulsing</Table.Cell>
                <Table.Cell>whispering</Table.Cell>
                <Table.Cell>radiant</Table.Cell>
                <Table.Cell>resonant</Table.Cell>
                <Table.Cell>rumbling</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>shimmering</Table.Cell>
                <Table.Cell>ethereal</Table.Cell>
                <Table.Cell>drifting</Table.Cell>
                <Table.Cell>moving</Table.Cell>
                <Table.Cell>enveloping</Table.Cell>
                <Table.Cell>floating</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Panel.Row>
        <Panel.Row>
          <Table cellPadding="tight" textSize="small" fullWidth italic>
            <Table.Body>
              <Table.Row>
                <Table.Cell>smoke</Table.Cell>
                <Table.Cell>glow</Table.Cell>
                <Table.Cell>tree line</Table.Cell>
                <Table.Cell>stone face</Table.Cell>
                <Table.Cell>monolith</Table.Cell>
                <Table.Cell>cloud</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>obelisk</Table.Cell>
                <Table.Cell>spire</Table.Cell>
                <Table.Cell>ray</Table.Cell>
                <Table.Cell>silhouette</Table.Cell>
                <Table.Cell>reflection</Table.Cell>
                <Table.Cell>canopy</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>tower</Table.Cell>
                <Table.Cell>waterfall</Table.Cell>
                <Table.Cell>statue</Table.Cell>
                <Table.Cell>bridge</Table.Cell>
                <Table.Cell>bend</Table.Cell>
                <Table.Cell>wall</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>bonfire</Table.Cell>
                <Table.Cell>arch</Table.Cell>
                <Table.Cell>tombstone</Table.Cell>
                <Table.Cell>gate</Table.Cell>
                <Table.Cell>light</Table.Cell>
                <Table.Cell>ravine</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>pillar</Table.Cell>
                <Table.Cell>ruin</Table.Cell>
                <Table.Cell>monument</Table.Cell>
                <Table.Cell>lights</Table.Cell>
                <Table.Cell>canyon</Table.Cell>
                <Table.Cell>crater</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>mist</Table.Cell>
                <Table.Cell>campfire</Table.Cell>
                <Table.Cell>cliff</Table.Cell>
                <Table.Cell>spire</Table.Cell>
                <Table.Cell>cave</Table.Cell>
                <Table.Cell>hilltop</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Panel.Row>
      </Panel>
      <Panel
        title="Barrier Crucible"
        description="Roll 1 on each table, smash them together, and interpret."
      >
        <Panel.Row>
          <Table cellPadding="tight" textSize="small" fullWidth italic>
            <Table.Body>
              <Table.Row>
                <Table.Cell>jagged</Table.Cell>
                <Table.Cell>deep</Table.Cell>
                <Table.Cell>craggy</Table.Cell>
                <Table.Cell>shadowy</Table.Cell>
                <Table.Cell>barren</Table.Cell>
                <Table.Cell>thick</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>steep</Table.Cell>
                <Table.Cell>narrow</Table.Cell>
                <Table.Cell>thorny</Table.Cell>
                <Table.Cell>frozen</Table.Cell>
                <Table.Cell>marshy</Table.Cell>
                <Table.Cell>howling</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>muddy</Table.Cell>
                <Table.Cell>overgrown</Table.Cell>
                <Table.Cell>dark</Table.Cell>
                <Table.Cell>misty</Table.Cell>
                <Table.Cell>choked</Table.Cell>
                <Table.Cell>sinking</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>twisting</Table.Cell>
                <Table.Cell>slippery</Table.Cell>
                <Table.Cell>broken</Table.Cell>
                <Table.Cell>winding</Table.Cell>
                <Table.Cell>tangled</Table.Cell>
                <Table.Cell>rough</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>dense</Table.Cell>
                <Table.Cell>windy</Table.Cell>
                <Table.Cell>snow-covered</Table.Cell>
                <Table.Cell>treacherous</Table.Cell>
                <Table.Cell>raging</Table.Cell>
                <Table.Cell>icy</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>rocky</Table.Cell>
                <Table.Cell>uneven</Table.Cell>
                <Table.Cell>swampy</Table.Cell>
                <Table.Cell>shifting</Table.Cell>
                <Table.Cell>stony</Table.Cell>
                <Table.Cell>rolling</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Panel.Row>
        <Panel.Row>
          <Table cellPadding="tight" textSize="small" fullWidth italic>
            <Table.Body>
              <Table.Row>
                <Table.Cell>ravine</Table.Cell>
                <Table.Cell>forest</Table.Cell>
                <Table.Cell>hills</Table.Cell>
                <Table.Cell>swamp</Table.Cell>
                <Table.Cell>undergrowth</Table.Cell>
                <Table.Cell>scree</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>cliffs</Table.Cell>
                <Table.Cell>ridge</Table.Cell>
                <Table.Cell>valley</Table.Cell>
                <Table.Cell>crevasse</Table.Cell>
                <Table.Cell>crags</Table.Cell>
                <Table.Cell>mire</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>trail</Table.Cell>
                <Table.Cell>pass</Table.Cell>
                <Table.Cell>canyon</Table.Cell>
                <Table.Cell>path</Table.Cell>
                <Table.Cell>peaks</Table.Cell>
                <Table.Cell>desert</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>thicket</Table.Cell>
                <Table.Cell>marsh</Table.Cell>
                <Table.Cell>river</Table.Cell>
                <Table.Cell>shale</Table.Cell>
                <Table.Cell>glacier</Table.Cell>
                <Table.Cell>brush</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>bog</Table.Cell>
                <Table.Cell>caves</Table.Cell>
                <Table.Cell>brambles</Table.Cell>
                <Table.Cell>mud flats</Table.Cell>
                <Table.Cell>shoals</Table.Cell>
                <Table.Cell>ice sheet</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>slopes</Table.Cell>
                <Table.Cell>scrub</Table.Cell>
                <Table.Cell>lava</Table.Cell>
                <Table.Cell>trees</Table.Cell>
                <Table.Cell>tundra</Table.Cell>
                <Table.Cell>underbrush</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Panel.Row>
      </Panel>
      <Panel
        title="Factions Crucible"
        description="Roll 1 on each table, smash them together, and interpret."
      >
        <Panel.Row>
          <Table cellPadding="tight" textSize="small" fullWidth italic>
            <Table.Body>
              <Table.Row>
                <Table.Cell>fierce</Table.Cell>
                <Table.Cell>noble</Table.Cell>
                <Table.Cell>hidden</Table.Cell>
                <Table.Cell>seeking</Table.Cell>
                <Table.Cell>sacred</Table.Cell>
                <Table.Cell>blazing</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>warlike</Table.Cell>
                <Table.Cell>shadowed</Table.Cell>
                <Table.Cell>cunning</Table.Cell>
                <Table.Cell>relentless</Table.Cell>
                <Table.Cell>untamed</Table.Cell>
                <Table.Cell>radiant</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>hostile</Table.Cell>
                <Table.Cell>zealous</Table.Cell>
                <Table.Cell>forbidden</Table.Cell>
                <Table.Cell>guarded</Table.Cell>
                <Table.Cell>loyal</Table.Cell>
                <Table.Cell>defiant</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>peaceful</Table.Cell>
                <Table.Cell>ruthless</Table.Cell>
                <Table.Cell>honorable</Table.Cell>
                <Table.Cell>wise</Table.Cell>
                <Table.Cell>vengeful</Table.Cell>
                <Table.Cell>forgotten</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>curious</Table.Cell>
                <Table.Cell>ancient</Table.Cell>
                <Table.Cell>silent</Table.Cell>
                <Table.Cell>lost</Table.Cell>
                <Table.Cell>eternal</Table.Cell>
                <Table.Cell>vengeful</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>mystic</Table.Cell>
                <Table.Cell>wandering</Table.Cell>
                <Table.Cell>restless</Table.Cell>
                <Table.Cell>merciless</Table.Cell>
                <Table.Cell>patient</Table.Cell>
                <Table.Cell>unseen</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Panel.Row>
        <Panel.Row>
          <Table cellPadding="tight" textSize="small" fullWidth italic>
            <Table.Body>
              <Table.Row>
                <Table.Cell>blades</Table.Cell>
                <Table.Cell>brotherhood</Table.Cell>
                <Table.Cell>coven</Table.Cell>
                <Table.Cell>seekers</Table.Cell>
                <Table.Cell>cult</Table.Cell>
                <Table.Cell>envoys</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>order</Table.Cell>
                <Table.Cell>legion</Table.Cell>
                <Table.Cell>sentinels</Table.Cell>
                <Table.Cell>council</Table.Cell>
                <Table.Cell>guardians</Table.Cell>
                <Table.Cell>shapers</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>clan</Table.Cell>
                <Table.Cell>syndicate</Table.Cell>
                <Table.Cell>alliance</Table.Cell>
                <Table.Cell>hunters</Table.Cell>
                <Table.Cell>circle</Table.Cell>
                <Table.Cell>shadows</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>keepers</Table.Cell>
                <Table.Cell>knights</Table.Cell>
                <Table.Cell>scouts</Table.Cell>
                <Table.Cell>pilgrims</Table.Cell>
                <Table.Cell>raiders</Table.Cell>
                <Table.Cell>brigade</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>guild</Table.Cell>
                <Table.Cell>society</Table.Cell>
                <Table.Cell>heralds</Table.Cell>
                <Table.Cell>companions</Table.Cell>
                <Table.Cell>guard</Table.Cell>
                <Table.Cell>cabal</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>circle</Table.Cell>
                <Table.Cell>band</Table.Cell>
                <Table.Cell>tribe</Table.Cell>
                <Table.Cell>wanderers</Table.Cell>
                <Table.Cell>wardens</Table.Cell>
                <Table.Cell>watchers</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Panel.Row>
      </Panel>
    </Page>
  );
};

export default Chapter04;
