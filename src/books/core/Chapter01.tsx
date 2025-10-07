import Page, { type PageNavigationItem } from "@/components/app/Page";
import SectionHeading from "@/components/SectionHeading";
import Em from "@/components/ui/Em";
import ExternalLink from "@/components/ui/ExternalLink";
import Heading from "@/components/ui/Heading";
import Line from "@/components/ui/Line";
import List from "@/components/ui/List";
import Move from "@/components/ui/Move";
import Muted from "@/components/ui/Muted";
import Panel from "@/components/ui/Panel";
import Strong from "@/components/ui/Strong";
import StrongEm from "@/components/ui/StrongEm";
import Table from "@/components/ui/Table";
import Text from "@/components/ui/Text";

const navigation: PageNavigationItem[] = [
  { name: "What is Grimwild?", anchor: "#what-is-grimwild" },
  {
    name: "Getting Started",
    anchor: "#getting-started",
    children: [{ name: "Gameplay Overview", anchor: "#gameplay-overview" }]
  },
  { name: "Play with Moxie", anchor: "#play-with-moxie" },
  {
    name: "Core Rules",
    anchor: "#core-rules",
    children: [
      { name: "Working Together", anchor: "#working-together" },
      { name: "Dice Rolls", anchor: "#dice-rolls" },
      { name: "Diminishing Pools", anchor: "#diminishing-pools" },
      { name: "Narrative Weight", anchor: "#narrative-weight" },
      { name: "Character Details", anchor: "#character-details" },
      { name: "Creative Freedom", anchor: "#creative-freedom" },
      { name: "Story Arcs", anchor: "#story-arcs" },
      { name: "Damage & Recovery", anchor: "#damage-recovery" },
      { name: "Odds & Ends", anchor: "#odds-ends" }
    ]
  },
  {
    name: "Spellcasting",
    anchor: "#spellcasting",
    children: [
      { name: "Touchstones", anchor: "#touchstones" },
      { name: "Rituals", anchor: "#rituals" }
    ]
  },
  {
    name: "Treasure",
    anchor: "#treasure",
    children: [
      { name: "Arcana", anchor: "#arcana" },
      { name: "Designing Arcana", anchor: "#designing-arcana" }
    ]
  },
  { name: "Examples of Play", anchor: "#examples-of-play" }
];

const Chapter01 = () => {
  return (
    <Page
      bookTitle="Grimwild Community Edition"
      title="Gameplay"
      pretitle="Chapter 1:"
      navigation={navigation}
    >
      <Heading level={2} id="what-is-grimwild">
        What is Grimwild?
      </Heading>
      <Text>
        <StrongEm>Grimwild is a game of cinematic fantasy adventure</StrongEm>. You go on quests,
        delve into dungeons, and explore the wilderness. It's set in a world of your choosing, or
        one you create together—the key being it's a world in need of adventurers. <Em>Grimwild</Em>{" "}
        isn't a setting. That's up to you. This game gives you the rules, monsters, and adventurers
        to play a campaign in that setting that feels like a fun, ensemble cast TV series, each
        session a new episode.
      </Text>
      <Text>
        <StrongEm>Gameplay flows smoothly</StrongEm>. The rules resolve actions quickly, favoring
        the dramatic over the realistic. They provide a strong framework to pace the game, manage
        tension, and create great scenes. They give significant creative freedom to add set dressing
        and even larger details into scenes to play off of, keeping the story moving forward and
        prioritizing common sense over detailed tracking.
      </Text>
      <Text>
        <StrongEm>The story is character-driven</StrongEm>. As players, you work together to decide
        your adventuring party's identity, then make characters that fit well within it. You set
        your group arcs, then choose your own character arcs, broad themes that give you experience
        when you bring them into play and help steer the story.
      </Text>
      <Text>
        <StrongEm>Characters are revealed through play</StrongEm>. You start with a clear concept
        that fits well within your party, but you don't necessarily need all of the details
        upfront—focus on what sounds fun to bring into play. You can always use the tools the game
        gives you to add details about your past and connect the dots as they come up, leaving
        plenty of space to grow together into a cohesive, colorful party.
      </Text>
      <Text>
        <StrongEm>Things get dramatic</StrongEm>. You're rewarded for playing into your traits in
        ways that complicate the situation, giving good reason to think in-character and sometimes
        picking the less than optimal path. Inevitably, sparks fly, leading to in-fighting between
        protagonists, just like any great story with characters driven by their own motivations.
        This is all cleanly resolved with quarrels—a simple roll to move things forward, encouraging
        and providing a release valve for this friction!
      </Text>
      <Text>
        <StrongEm>The story is a maelstrom of dice rolls and fun ideas</StrongEm>. From all this
        pushing and pulling on the narrative, storylines and side plots emerge. In spite of the
        tension, the choices you make about your party's arcs and the characters growing together
        over time give compelling reason to stay together and focused. It's a TV show that you're
        the main characters of, messy and fun and full of surprises.
      </Text>
      <Heading level={2} id="getting-started">
        Getting Started
      </Heading>
      <Text>
        <Em>Grimwild</Em>'s a tabletop roleplaying game, which this book assumes you're familiar
        with. The basics aren't covered here, but there are plenty of resources online and you can
        always join our Discord community to ask questions. Visit us at{" "}
        <ExternalLink href="#">
          <StrongEm>odditypress.com</StrongEm>
        </ExternalLink>{" "}
        to join.
      </Text>
      <Text>
        <StrongEm>Thematically</StrongEm>, <Em>Grimwild</Em> draws heavily on the heroic fantasy of{" "}
        <Em>Dungeons &amp; Dragons</Em> and wears this influence on its sleeve. It's especially
        rooted in modern <Em>D&amp;D</Em>, from 3rd edition onwards. Inspiration was also taken from{" "}
        <Em>Dungeon World</Em> and its many descendants, like <Em>Unlimited Dungeons</Em>,{" "}
        <Em>Chasing Adventure</Em>, <Em>Homebrew World</Em>, and <Em>Stonetop</Em>.
      </Text>
      <Text>
        <StrongEm>Mechanically</StrongEm>, the <StrongEm>Moxie</StrongEm> system that{" "}
        <Em>Grimwild</Em> is built on draws from a variety of character-driven games, with the
        biggest influences being <Em>Burning Wheel</Em>, <Em>Cortex Prime</Em>,{" "}
        <Em>Blades in the Dark</Em>, and <Em>Fate</Em>.
      </Text>
      <SectionHeading>To Play, You Need:</SectionHeading>
      <List>
        <List.Item>
          <Strong>Players</Strong> : You need one person as the gamemaster (GM) and some players,{" "}
          <Em>ideally three or four</Em>. Guidelines for solo and duet play are in{" "}
          <Em>Ch. 7: Extras</Em>.
        </List.Item>
        <List.Item>
          <Strong>Time</Strong> : Sessions work best at 3 hours. For longer sessions, consider using{" "}
          <Strong>downtime</Strong> (pg. 16) to break them up and reset per-session rules.
        </List.Item>
        <List.Item>
          <Strong>Rules</Strong> : All players should know the core rules, including GM rules.
          They're short, free, and referenced on the sheets. It makes play go much more smoothly.
        </List.Item>
        <List.Item>
          <Strong>Understanding</Strong> : Read the rules once, then re-read them again. They'll
          make more sense.
        </List.Item>
        <List.Item>
          <Strong>Dice</Strong> : Each player needs 4-6 d6s, notated as <StrongEm>d</StrongEm> (
          <Em>e.g., 2d, 4d</Em>), and 2-4 d8s, called <StrongEm>thorns</StrongEm> and notated as{" "}
          <StrongEm>t</StrongEm> (<Em>e.g., 1t, 3t</Em>). The GM needs 8 d6s.
        </List.Item>
        <List.Item>
          <Strong>Sheets</Strong> : Character, GM, and reference sheets are available at{" "}
          <ExternalLink href="#">
            <StrongEm>odditypress.com</StrongEm>
          </ExternalLink>{" "}
          or{" "}
          <ExternalLink href="https://drivethrurpg.com">
            <StrongEm>drivethrurpg.com</StrongEm>
          </ExternalLink>
          . Links to supported VTTs and online tools are on the website. A smaller version of the
          blank character sheet can be found in the back.
        </List.Item>
        <List.Item>
          <Strong>Safety</Strong> : To help everyone feel comfortable with the themes within your
          campaigns, use the{" "}
          <ExternalLink href="https://drive.google.com/drive/folders/114jRmhzBpdqkAlhmveis0nmW73qkAZCj">
            <StrongEm>TTRPG Safety Toolkit</StrongEm>
          </ExternalLink>
          .
        </List.Item>
      </List>
      <SectionHeading>Conventions in This Book:</SectionHeading>
      <List>
        <List.Item>
          <Strong>System Terms</Strong> : These are <Strong>bolded</Strong> when first introduced or
          when clarity is needed. Otherwise, they're not specifically styled. Emphasis is shown with{" "}
          <Em>italics</Em>, sometimes <StrongEm>boldly</StrongEm>. When unsure, reference the index
          in the back.
        </List.Item>
        <List.Item>
          <Strong>Pools</Strong> : In <Em>Grimwild</Em>, “pool” always refers to diminishing pools
          (pg. 13), differing from its broader use in other RPGs.
        </List.Item>
        <List.Item>
          <Strong>D66 Tables</Strong> : These are 6x6 random tables. Roll 2d6: one die for the tens
          place, the other for the ones place (<Em>e.g., 1 and 3 is 13 or 31</Em>
          ). Look at both results (<Em>13 = column 1, row 3; 31 = column 3, row 1</Em>) and choose
          the one that grabs you.
        </List.Item>
        <List.Item>
          <Strong>Crucibles</Strong> : These are d66 tables that provide a few words to smash
          together for inspiration. Interpret them literally or figuratively. Re-roll if needed.
        </List.Item>
        <List.Item>
          <Strong>The Reader</Strong> : This book addresses the reader as “you,” typically from the
          player perspective. In Chapter 3, “you” is the GM perspective.
        </List.Item>
        <List.Item>
          <Strong>Made with Moxie</Strong> : Most of chapters 1 and 2 are the core Moxie system.
        </List.Item>
      </List>
      <Heading level={3} id="gameplay-overview">
        Gameplay Overview
      </Heading>
      <Text>
        <Em>Grimwild</Em> is built with the <StrongEm>Moxie</StrongEm> cinematic toolkit, a tabletop
        RPG ruleset that focuses on cinematic action and character-driven gameplay. Below is how the
        key parts tie together and an intro to the game's terms. The rules are explained throughout
        chapters 1 and 2, followed by <StrongEm>examples of play</StrongEm>. The game uses a lot of
        its own terminology, so here's a <StrongEm>basic rundown of the key parts</StrongEm> which
        you'll encounter throughout the rules. Don't worry about understanding all of this right
        now!
      </Text>
      <SectionHeading>Setting up the Game</SectionHeading>
      <Text>
        <StrongEm>As a group</StrongEm>, form an <Strong>adventuring party</Strong> by choosing a
        few key words that clearly say <Em>what your party is</Em> and <Em>what it's not</Em>. Your
        PCs have already adventured together, each fitting into the party concept in some way. This
        cuts right to the story in progress, ready to jump into your next adventure.
      </Text>
      <Text>
        Make characters by choosing two <Strong>backgrounds</Strong> that reflect your past, like
        your heritage and professions, along with an <Strong>adventurer path</Strong> that grants a
        powerful <Strong>core talent</Strong>. Assign <Strong>stats</Strong>,{" "}
        <Strong>traits</Strong>, and <Strong>desires</Strong>, then forge <Strong>bonds</Strong>{" "}
        with the other PCs. Establish group and character <Strong>story arcs</Strong>, which you
        play towards to drive the story.
      </Text>
      <SectionHeading>Playing the Game</SectionHeading>
      <Text>
        <StrongEm>As a player</StrongEm>, describe what your character thinks, feels, and does. When
        you try something risky, you make an <Strong>action roll</Strong>. When the GM puts you in
        direct danger, you make a <Strong>defense roll</Strong>. You can also make a{" "}
        <Strong>montage roll</Strong> to skip past parts you don't want to play out in detail. Rolls
        are made with a handful of d6s equal to a stat, keeping the highest to set the{" "}
        <Strong>outcome</Strong>: <Strong>perfect</Strong>, <Strong>messy</Strong>, or{" "}
        <Strong>grim</Strong>. Rolling two 6s is a <Strong>critical</Strong> and you choose a bonus.
        Difficulty and damage add one or more d8s called <Strong>thorns</Strong> to your roll, which
        might <Strong>cut</Strong> the outcome down a level. If a grim gets cut, it's a{" "}
        <Strong>disaster</Strong> and things get really bad for you!
      </Text>
      <Text>
        Use your creative freedom to add <Strong>set dressing</Strong> to scenes to play off of, and
        a narrative currency called <Strong>story</Strong> to declare significant{" "}
        <Strong>story details</Strong> to push the fiction. Earn <Strong>spark</Strong> by
        introducing character-related complications called <Strong>tangles</Strong> and facing
        adversity, then spend it to gain a bonus on rolls.
      </Text>
      <Text>
        After each session, you earn <Strong>experience</Strong> (XP) towards increasing in{" "}
        <Strong>level</Strong>, which grants new <Strong>talents</Strong>.
      </Text>
      <SectionHeading>Running the Game</SectionHeading>
      <Text>
        <StrongEm>As the GM</StrongEm>, present dilemmas and drama, then let the players come up
        with solutions. Keep the spotlight moving to give everyone screen time and prompt the
        players to describe their actions. Map the fiction to rules, and make rulings to fill in
        gaps. Open the door wide for collaboration and enjoy the story.
      </Text>
      <Text>
        Use <Strong>GM moves</Strong> as tools and guiding principles to act as the world and pace
        the story. <Strong>Impact moves</Strong> hit the PCs with direct consequences. They require{" "}
        <Strong>prompting</Strong> from <Strong>foreshadowing</Strong>, grim rolls, or by spending{" "}
        <Strong>suspense</Strong>, gained from making <Strong>suspense moves</Strong> or holding off
        on making a prompted impact move.
      </Text>
      <Text>
        Make <Strong>story rolls</Strong> to disclaim decision-making and use the{" "}
        <Strong>GM crucible</Strong> to help come up with ideas. Control the camera to create a
        cinematic feel, zooming in and out on what's important. Use{" "}
        <Strong>diminishing pools</Strong> to create and track tension and{" "}
        <Strong>challenges</Strong> to represent the toughest, most interesting obstacles PCs face.
      </Text>
      <Heading level={2} id="play-with-moxie">
        Play with Moxie
      </Heading>
      <Text>
        <Em>Grimwild</Em> is built with the <Em>Moxie</Em> ruleset and designed for{" "}
        <Strong>cinematic gameplay</Strong>. The heart of that is{" "}
        <StrongEm>narrative collaboration</StrongEm>. It's all about creating a{" "}
        <Em>shared imagination space</Em>, <Em>managing the spotlight</Em>, and{" "}
        <Em>diving into narration</Em>. The rules will get you halfway there—they're all pointing
        towards keeping the pace flowing quickly and the action dramatic. The other half is in your
        hands, the players at the table, and the attitude you all approach the game with.
      </Text>
      <SectionHeading variant="solid">Play Cinematically</SectionHeading>
      <Text>
        <StrongEm>Trust in the collaborative process</StrongEm>. Everyone at the table adds details
        into the story. You have to work together and play off of each other or the game, and the
        story you're telling, will fall flat.
      </Text>
      <Text>
        <StrongEm>Use the camera, your shared imagination</StrongEm>. Each player has two
        perspectives, from your character and as the audience watching this TV show. Use the camera
        and vivid description to paint a cool scene in everyone's mind.
      </Text>
      <Text>
        <StrongEm>Tell us what it looks like, before and after your rolls</StrongEm>. Give details
        about what you do, don't just leave it at broad statements. Zoom in and out. Use the camera
        to show things outside of your own character as well—pan around, cut to other scenes, and
        describe NPCs. Invoke cinematic vibes and create great scenes.
      </Text>
      <SectionHeading variant="solid">Play in Good Faith</SectionHeading>
      <Text>
        <StrongEm>Don't be a weasel</StrongEm>. Do what your character would do, then let the GM map
        it back to the rules. Don't overdo it trying to work your way into better rolls. The fun is
        letting the story flow naturally. When you ask the rules what happens next, follow where it
        points with enthusiasm.
      </Text>
      <Text>
        <StrongEm>Separate player and character knowledge</StrongEm>. It's more fun when everyone
        knows what's going on in the game. Don't keep secrets from each other, keep them from
        characters. As a player, be aware of what your character knows and doesn't know and play
        towards both.
      </Text>
      <Text>
        <StrongEm>Use the meta-channel sparingly</StrongEm>. This is conversation about the game
        between players. It's unavoidable, but minimize it to keep that shared imagination in sync
        at the table. For anything longer than a quick question, call for a pause to talk things
        through, a clean break point to resume from later.
      </Text>
      <Text>
        <StrongEm>Know the rules</StrongEm>. Everyone can get a copy of the game PDF (
        <Em>it's free!</Em>). The rules say a lot about the types of stories to be told with the
        game, and the less time you spend talking about the rules, the more time you have for
        roleplaying. Making a cheat sheet on rules you often forget can be a big help, or even just
        skimming the book pre-game.
      </Text>
      <SectionHeading variant="solid">Play to Tell a Story</SectionHeading>
      <Text>
        Think of the game as a series of improv prompts, posed by yourselves and the rules. When you
        respond to them, consider the following:
      </Text>
      <List>
        <List.Item>
          <Em>What would my character do?</Em>
        </List.Item>
        <List.Item>
          <Em>What would make for a cool scene?</Em>
        </List.Item>
        <List.Item>
          <Em>What would move the story forward?</Em>
        </List.Item>
        <List.Item>
          <Em>What opens the door to get others involved?</Em>
        </List.Item>
      </List>
      <Text>
        <StrongEm>Don't talk yourself out of fun</StrongEm>. The first idea that jumps into your
        head is often the one you should go with. Don't overthink or rationalize yourself out of it.
        Like any great TV show character, go where the fun lies. Great stories involve excitement,
        danger, and hard choices.
      </Text>
      <Text>
        <StrongEm>Open doors and step through them</StrongEm>. The best scenes involve characters
        playing off of each other, so make chances for others to get involved. When someone invites
        you into a scene, step through that door—even if it means a bit of mental gymnastics to
        justify your character's actions. And as long as you step through the door at times,
        remember that it can be just as interesting to close the door instead.
      </Text>
      <Text>
        <StrongEm>Work the spotlight</StrongEm>. There's no turn order of any kind, but there is
        screen time. Strive to make sure everyone gets their fair share, including yourself.
      </Text>
      <List>
        <List.Item>
          <Strong>Grab the spotlight</Strong> when there's a lull or you have a great idea.
        </List.Item>
        <List.Item>
          <Strong>Share the spotlight</Strong> by opening doors or following up on another PC's
          actions.
        </List.Item>
        <List.Item>
          <Strong>Pass the spotlight</Strong> when you've been holding it too long.
        </List.Item>
        <List.Item>
          <Strong>Point the spotlight</Strong> to see another PC's response or what they've been up
          to.
        </List.Item>
        <List.Item>
          <Strong>Never steal the spotlight</Strong>. Everyone works hard to set up their moment.
        </List.Item>
      </List>
      <Text>
        <StrongEm>Don't play to win, play to tell stories</StrongEm>. Work towards the same goal—to
        tell a great story where everyone's character has a chance to grow. Failure isn't losing,
        it's just another opportunity to have a great scene. Of course, your character wants to
        succeed! However, your goal as a player is keeping the story interesting. Play into the bad
        luck just as you do the good to help ensure you craft compelling stories.
      </Text>
      <SectionHeading variant="solid">Play Characters That Grow</SectionHeading>
      <Text>
        <StrongEm>Leave lots of blank space</StrongEm>. Your PC starts with a past and connections
        to the world, but it's best as latticework. Learn who they are through play. Leave space for
        the other PCs and story to fit in.
      </Text>
      <Text>
        <StrongEm>Don't be afraid to change</StrongEm>. PCs often go through hell. Any dramatic
        story has adversity. Let what happens change who they are. Announce what your PC's thinking,
        especially big shifts. If nobody else at the table knows, it's not really happening in that
        shared imagination.
      </Text>
      <Text>
        <StrongEm>Don't be afraid to stay the same</StrongEm>. Some aspects of your character might
        be immutable. That's also part of what makes a great character. There can be those things
        they will stick to, even to the bitter end. Just make sure it's worth it, and fun. Don't die
        on small hills—die on entertaining ones.
      </Text>
      <Text>
        <StrongEm>Make time for smaller moments</StrongEm>. Quiet time, a conversation about
        nothing, introspection, reflection—these make for great scenes to flesh out your characters
        and the world. Don't just rush from action scene to action scene.
      </Text>
      <Text>
        <StrongEm>Most importantly, do stuff</StrongEm>! Find reasons to get into the spotlight,
        push story arcs forward, and make fun scenes. When there's no opportunity, add some details
        to the story to create one!
      </Text>
      <Heading level={2} id="core-rules">
        Core Rules
      </Heading>
      <Text>
        <Strong allCaps>Core Mechanic</Strong>. When things get risky and dramatic, roll to see what
        happens. Grab a few d6 dice (d) equal to the stat the GM picks to test, roll them, and take
        the highest to determine the <Strong>outcome</Strong>—6: <Strong allCaps>Perfect</Strong>,
        4-5: <Strong allCaps>Messy</Strong>, 1-3: <Strong allCaps>Grim</Strong>.
      </Text>
      <List>
        <List.Item>
          A <Strong allCaps>Critical</Strong> happens when you roll two or more 6s.{" "}
          <StrongEm>Ignore any cuts</StrongEm> and choose a <Strong>critical bonus</Strong>:{" "}
          <Em>greater effect—secondary effect—setup a follow-up</Em>.
        </List.Item>
        <List.Item>
          A <Strong allCaps>Disaster</Strong> happens when a grim is cut by a thorn. Whatever the
          risk was before, <Em>double it</Em>—the worst case scenario comes to pass.
        </List.Item>
      </List>
      <Text>
        <Strong allCaps>Spark</Strong>. <Em>Pure protagonist energy</Em>.{" "}
        <StrongEm>Take spark</StrongEm> (max 2) when you add a tangle, roll a disaster, resolve a
        story arc, or quarrel. <StrongEm>Spend it to take +1d on a roll</StrongEm>.
      </Text>
      <Text>
        <Strong allCaps>Thorns</Strong>. One or two d8s (t) added to your roll by the GM to reflect
        a tougher than normal task. Each 7 or 8 on a thorn <Strong>cuts</Strong> a roll's outcome by
        one step <Muted>(messy→grim)</Muted>.
      </Text>
      <Text>
        A normal roll is <Strong>+0t</Strong>/<Em>tough</Em>. The GM adds thorns with their{" "}
        <Em>gut feeling</Em>, given the situation. They can make it <Strong>+1t</Strong>/
        <Em>very tough</Em> or <Strong>+2t</Strong>/<Em>extremely tough</Em>. If it's at{" "}
        <Strong>+3t</Strong>/<Em>impossible</Em> or more, the task can't be done—break it up into
        steps or try a new approach. If needed, they can assess factors:
      </Text>
      <List>
        <List.Item>
          <StrongEm>Intrinsic</StrongEm>: Scale, opposing skill, numbers...{" "}
          <Muted>Huge chasm, expert detective, group of thugs.</Muted>
        </List.Item>
        <List.Item>
          <StrongEm>Externals</StrongEm>: Environment, training, tools...{" "}
          <Muted>Heavy rain, not a doctor, shovel's broken.</Muted>
        </List.Item>
        <List.Item>
          <StrongEm>Intangibles</StrongEm>: Strong feelings, bad info, mojo...{" "}
          <Muted>You love him, the map is wrong, you're cursed.</Muted>
        </List.Item>
      </List>
      <Text>
        <Strong>Damage</Strong> to a PC also adds thorns to a roll, but they don't count towards
        making it <Em>impossible</Em>.
      </Text>
      <Text>
        <Strong allCaps>Smooth Flow</Strong>. If a grim threatens to grind the story to a halt, the
        GM can <Strong>keep things moving</Strong>—you get what you want, but in a way that makes
        things much worse. If a roll somehow turns out to have no effect{" "}
        <Muted>(the guard was already dead)</Muted>, you learn new info or setup for a follow-up.
      </Text>
      <Heading level={3} id="working-together">
        Working Together
      </Heading>
      <Text>
        <Strong allCaps>Assist</Strong>. Help another PC on a roll. State{" "}
        <Strong>how &amp; why</Strong>, then <StrongEm>roll 1d and share the risk</StrongEm>.
        Include your roll result with theirs for the final outcome—then each narrate your
        contribution, using your own result and bonds as a guide.
      </Text>
      <Text>
        <StrongEm>You can assist when another PC's action prompts an impact move</StrongEm>. You
        make a 1d defense roll for them.
      </Text>
      <Text>
        When you <Strong>share the risk</Strong>, you open yourself up to consequences, which can
        prompt a more powerful or additional impact move, or the GM can take suspense instead.
      </Text>
      <Text>
        <Strong allCaps>Teamwork</Strong>. When 3+ PCs work together, the GM picks who rolls the
        action—sometimes the most skilled <Muted>(lifting a boulder)</Muted>, sometimes the least{" "}
        <Muted>(sneaking in)</Muted>. The other PCs assist.
      </Text>
      <Text>
        <Strong allCaps>Setup</Strong>. When a previous action makes a follow-up more effective, you
        assist without risk. You roll 1d as a normal assist, but don't share the risk. If it was
        your own action, you take +1d.
      </Text>
      <Text>
        <Strong allCaps>Outside Assistance</Strong>. When an assist or setup comes from the world,
        like an NPC or the environment, the <StrongEm>GM rolls 1d</StrongEm> to represent it.
      </Text>
      <Heading level={3} id="dice-rolls">
        Dice Rolls
      </Heading>
      <Text>
        <Strong allCaps>Action Roll</Strong>. Roll to pull off something risky. State{" "}
        <Strong>how &amp; why</Strong>, clarifying your intent. The GM picks the stat that matches
        your intentions.
      </Text>
      <Panel border>
        <List>
          <List.Item>
            <Strong allCaps>Perfect</Strong>. You do it, and avoid trouble.
          </List.Item>
          <List.Item>
            <Strong allCaps>Messy</Strong>. You do it, but there's trouble.
            <br />
            <Em>Prompts an impact move.</Em>
          </List.Item>
          <List.Item>
            <Strong allCaps>Grim</Strong>. You fail, and there's trouble.
            <br />
            <Em>Prompts an impact move.</Em>
          </List.Item>
        </List>
      </Panel>
      <Text>
        The GM makes an impact move to introduce consequences. You don't get a defense roll against
        impact moves prompted by your own action rolls— avoiding danger is already factored into the
        roll.
      </Text>
      <Text>
        <Strong allCaps>Montage Roll</Strong>. Roll to condense a sequence you don't want to play
        out in detail, but still want to leave up to the dice. <StrongEm>Roll 2d</StrongEm>,
        resolving it all as a single action roll, then narrate a few beats. Keep things moving or
        zoom in on a grim.
      </Text>
      <Text>
        If multiple PCs join, <StrongEm>each rolls 2d and shares the risk</StrongEm>. Collaborate on
        the results. 6s on separate rolls don't count towards criticals.
      </Text>
      <Text>
        <Strong allCaps>Defense Roll</Strong>. Roll to avoid incoming trouble,{" "}
        <StrongEm>but only when not caused by your own action</StrongEm>. The GM calls for the roll
        and picks a stat to test.
      </Text>
      <Panel border>
        <List>
          <List.Item>
            <Strong allCaps>Perfect</Strong>. You avoid the trouble.
          </List.Item>
          <List.Item>
            <Strong allCaps>Messy</Strong>. You avoid the brunt of the trouble.
            <br />
            <Em>The GM lightens the consequences.</Em>
          </List.Item>
          <List.Item>
            <Strong allCaps>Grim</Strong>. You fail to avoid the trouble.
            <br />
            <Em>The GM follows through on the move.</Em>
          </List.Item>
        </List>
      </Panel>
      <Text>
        The GM calls for defense rolls when they target you directly with an impact move. On a
        messy, there's still some trouble, like taking lesser damage, losing the chance to act, or
        being in a worse position <Muted>(knocked off the cliff→your sword is knocked off)</Muted>.
      </Text>
      <Text>
        <StrongEm>Defense is cinematic—a reaction, out of your hands</StrongEm>. The GM picks the
        stat to fit the danger, your PC's likely reaction, vulnerabilities, and what feels right for
        the moment. This keeps it varied—you can't always use a strong stat.
      </Text>
      <Text>
        <Muted size="medium">
          <Em>
            Brawn absorbs a punch, Agility dodges it, Wits sees it coming, and Presence avoids the
            fight. (Players can soft veto!)
          </Em>
        </Muted>
      </Text>
      <Heading level={3} id="diminishing-pools">
        Diminishing Pools
      </Heading>
      <Text>
        <Strong allCaps>Pools</Strong>. A set of d6s used to track things like time, resources, or
        effort. When triggered (🎲), roll the pool and <Strong>drop</Strong> 1d for each 1-3 result.
        At 0d, the pool depletes and the fiction changes.
      </Text>
      <Text>
        The size of a pool is <Strong>4d</Strong>/<Em>short</Em>, <Strong>6d</Strong>/<Em>mid</Em>,
        or <Strong>8d</Strong>/<Em>long</Em>. At <Strong>0d</Strong>, an event occurs, a situation
        ends, or a resource is depleted. Make sure to reflect the fiction—if a pool and the fiction
        don't match up, adjust or scrap the pool.
      </Text>
      <List>
        <List.Item>
          If no dice are dropped from a task pool on a messy or perfect action roll, instead{" "}
          <Strong>take a secondary effect</Strong>{" "}
          <Muted>(they spill a secret, some mooks die)</Muted>.
        </List.Item>
        <List.Item>
          If the pool roll was 1d and it didn't drop, you can instead <Strong>push yourself</Strong>{" "}
          to drop the last die. In similar cases, the GM can <Strong>spend suspense</Strong> (
          <Em>pg. 30</Em>) to drop the last die.
        </List.Item>
        <List.Item>
          <Strong>Drop</Strong> 1d from the pool before rolling it when a talent tells you to do so
          or you take the <Em>greater effect</Em> critical bonus. This stacks. Pools can be flexibly
          applied in many situations, usually by the GM. Some typical pools are listed below. Others
          are found throughout the book.
        </List.Item>
      </List>
      <Text>
        Pools can be flexibly applied in many situations, usually by the GM. Some typical pools are
        listed below. Others are found throughout the book.
      </Text>
      <Text>
        <Strong smallCaps>Timer Pools</Strong>. Events unfolding in the background. 🎲 Key moments,
        passing, or a few PCs take action. <Muted>6d Reinforcements Arrive, 8d Sunrise.</Muted>
      </Text>
      <Text>
        <Strong smallCaps>Pressure Pools</Strong>. Threats becoming more likely. 🎲 Impact moves,
        major events, or threat level. <Muted>6d Lookouts Spot You, 8d Corruption Grows.</Muted>
      </Text>
      <Text>
        <Strong smallCaps>Task Pools</Strong>. Effort to overcome tasks. 🎲 Task progress, usually
        an action roll. <Muted>4d Barroom Brawl, 6d Tracking Quarry, 8d Escape the Guards.</Muted>
      </Text>
      <Text>
        <Strong smallCaps>Resource Pools</Strong>. Quantity of something precious. 🎲 The resource
        sees significant usage. <Muted>4d Food Supplies, 8d Manpower Left.</Muted>
      </Text>
      <Text>
        <Em>
          <Strong>Note</Strong>: Pools are always notated with the size of the pool in front of it,
          usually written in italics.
        </Em>
      </Text>
      <Heading level={3} id="narrative-weight">
        Narrative Weight
      </Heading>
      <Text>
        <Strong allCaps>Vantage</Strong>. Your character's frame of reference, the sum of your
        backstory, talents, and the current fiction—everything on your sheet and what's affecting
        you in the story. When a question arises about what you can do, have, or know, check it
        against your vantage: does it feel like a <StrongEm>given</StrongEm>, a{" "}
        <StrongEm>stretch</StrongEm>, or a <StrongEm>reach</StrongEm>?
      </Text>
      <Text>
        <Muted size="medium">
          <Em>
            A doctor can suture a wound, a thief likely has a lockpick, but a farmer probably
            wouldn't know an actress.
          </Em>
        </Muted>
      </Text>
      <Text>
        <Strong>Proper vantage</Strong> opens up possibilities and gives the freedom to declare
        story details. Lacking it makes things more difficult, or even impossible.
      </Text>
      <Text>
        <Strong allCaps>Tools of the Trade</Strong>. You're assumed to have the gear and skills that
        are a given for your vantage. This avoids detailed tracking and ensures PCs are competent
        where it makes sense.
      </Text>
      <Text>
        <Strong allCaps>Details</Strong>. Use the details on your sheet as creative inspiration—
        <Em>and limitations!</Em>—for roleplaying. They are player (<Em>not GM</Em>) tools. When
        unsure of your PC's actions or thoughts, play towards or even against a relevant detail.
        Update details as the story unfolds, announcing the change and giving a vignette to{" "}
        <Em>give it weight</Em> and <Em>clearly convey</Em> the change to the other players.
      </Text>
      <Heading level={3} id="character-details">
        Character Details
      </Heading>
      <Text>
        <Strong allCaps>Background</Strong>. Your heritage, upbringing, and profession—the core of
        your vantage. You choose any two that most influences who you are now. Each gives you three
        wises, evocative key phrases that clearly expand your vantage.
      </Text>
      <Text muted>
        The <Strong allCaps>Ragamuffin</Strong> background means you learned a lot from the streets;
        without it, your upbringing is just set dressing.
      </Text>
      <Text>
        <Strong allCaps>Traits</Strong>. Choose 2 that strongly describe you and 1 that definitely
        doesn't.{" "}
        <Muted>
          Brave and rash, <Strong>not</Strong> quiet.
        </Muted>
      </Text>
      <Text>
        <Strong allCaps>Desires</Strong>. Choose 2 that you strongly desire and 1 that you don't at
        all.{" "}
        <Muted>
          Love and thrills, <Strong>not</Strong> wealth.
        </Muted>
      </Text>
      <Text>
        <Strong allCaps>Features</Strong>. Detail your 3 most distinctive, outward features that
        others quickly notice.
      </Text>
      <Text>
        <Strong allCaps>Talents</Strong>. Special advantages and abilities that set your PC apart.
        At character creation, you choose a <Strong allCaps>path</Strong>{" "}
        <Muted>(rogue, wizard, fighter)</Muted>, which gives you its core talent and a list of
        talents that align thematically with it. You gain new talents as you level, choosing from
        your path list or taking talents from other paths.
      </Text>
      <Text>
        The path name is simply a label for organizing talents thematically. On its own, it doesn't
        expand vantage. However, talents do expand vantage.{" "}
        <Muted>
          Being a “fighter” doesn't mean anything, but the Fighting Style core talent expands your
          vantage.
        </Muted>
      </Text>
      <Text>
        <Strong allCaps>Stats</Strong>. Your core capabilities rated from 1/poor to 3/great, used
        for action and defense rolls.
      </Text>
      <Table>
        <Table.Body>
          <Table.Row>
            <Table.HeaderCell smallCaps>Brawn</Table.HeaderCell>
            <Table.Cell>
              <Em>Power, menace, toughness.</Em>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell smallCaps>Agility</Table.HeaderCell>
            <Table.Cell>
              <Em>Precision, athletics, reflexes.</Em>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell smallCaps>Wits</Table.HeaderCell>
            <Table.Cell>
              <Em>Smarts, trickery, reading situations.</Em>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell smallCaps>Presence</Table.HeaderCell>
            <Table.Cell>
              <Em>Influence, willpower, reading people.</Em>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <List>
        <List.Item>
          Brawn and Agility are <Strong>physical</Strong> stats.
        </List.Item>
        <List.Item>
          Wits and Presence are <Strong>mental</Strong> stats.
        </List.Item>
      </List>
      <Text>
        <Strong allCaps>Bonds</Strong>. Your dynamic with each PC. Match an intensity (<Em>left</Em>
        ) and a nature (<Em>right</Em>) below, or write your own. Interpret them as makes sense.
      </Text>
      <Panel border>
        <Table align="center" margin="small" variant="columns" fullWidth allCaps>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Deep</Table.Cell>
              <Table.Cell>Affection</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Complex</Table.Cell>
              <Table.Cell>Camaraderie</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Growing</Table.Cell>
              <Table.Cell>Curiosity</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Lowkey</Table.Cell>
              <Table.Cell>Doubts</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Playful</Table.Cell>
              <Table.Cell>Respect</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Tense</Table.Cell>
              <Table.Cell>Rivalry</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Panel>
      <Text>
        Bonds are your strongest view of the other PC, and not necessarily reciprocal{" "}
        <Muted>(your tense doubts is their playful rivalry)</Muted>. You can change a bond anytime,
        such as in response to something they've done or something new you've learned about them.
        When it changes, give a short vignette (<Em>better if together!</Em>
        ). <StrongEm>The other PC takes spark</StrongEm>.
      </Text>
      <Heading level={3} id="creative-freedom">
        Creative Freedom
      </Heading>
      <Text>
        <Strong allCaps>Set Dressing</Strong>. Add minor, common sense details freely. Make
        assumptions and add <Em>set dressing</Em> to scenes to play off of to keep things flowing
        dynamically. There's no need to check in with the GM—they'll step in if a detail goes beyond
        set dressing. Anything that's a <Em>given</Em> for your vantage, like knowing someone or
        having equipment that makes sense, is set dressing.
      </Text>
      <Text>
        <Strong allCaps>Tangles</Strong>. Character-driven complications you introduce into a scene
        and have to follow-up on. In return, you take spark. Tangles must stem from your vantage or
        story arcs and always have an immediate impact, like an action roll, an option closing off,
        or forcing inaction at an important moment. These are things like:
      </Text>
      <List>
        <List.Item>
          <StrongEm>Unwise decisions</StrongEm> your PC would likely make.
          <br />
          <Muted>You toss aside your sword to keep things fair.</Muted>
        </List.Item>
        <List.Item>
          <StrongEm>Personal motivations</StrongEm> over group goals.
          <br />
          <Muted>You poison the general's wine, getting your revenge.</Muted>
        </List.Item>
        <List.Item>
          <StrongEm>Complications</StrongEm> from beliefs or backstory.
          <br />
          <Muted>You forgot to tell everyone you dated the baron.</Muted>
        </List.Item>
      </List>
      <Text>
        <Strong allCaps>Story</Strong>. <Em>Pure cinematic momentum</Em>. Each session, you have{" "}
        <Strong>2 story</Strong>. Spend it to add <StrongEm>story details</StrongEm> that go beyond
        set dressing, creating new opportunities or shifting the scene in your favor. Added details
        must fit your vantage, <Em>at least as a stretch</Em>, or tie to a story arc. Example
        details:
      </Text>
      <List>
        <List.Item>
          <StrongEm>Character</StrongEm>
          : Gear, contacts, backstory...
          <br />
          <Muted>The wizard was your mentor. You have just the thing!</Muted>
        </List.Item>
        <List.Item>
          <StrongEm>Scene</StrongEm>
          : NPC actions, objects, atmospherics...
          <br />
          <Muted>The guard falls asleep. There's a secret door.</Muted>
        </List.Item>
        <List.Item>
          <StrongEm>Setting</StrongEm>
          : History, geography, factions...
          <br />
          <Muted>There's a town over those hills. The king falls ill.</Muted>
        </List.Item>
      </List>
      <Text>
        Added details can't override rolls or contradict the established story. If your detail
        affects another PC, get permission. The GM can make a story roll to see how true or
        beneficial it is, or add nuance. On a grim, it may backfire! The GM can also veto details to
        keep things coherent.
      </Text>
      <Text>
        There are <Em>gray zones</Em> between set dressing, story details, and details simply too
        impactful to add. Set boundaries with your group.
      </Text>
      <Heading level={3} id="story-arcs">
        Story Arcs
      </Heading>
      <Text>
        Evocative phrases that give your PC and group a thematic direction. Find out where they lead
        through play— they're a starting direction, not the destination.
      </Text>
      <Text>
        Pick a <Strong>group arc</Strong> together, then a <Strong>character arc</Strong>. Pick from
        the examples or write your own. Keep it short.
      </Text>
      <Text>
        <StrongEm>Take spark by resolving an arc</StrongEm> with a meaningful moment,{" "}
        <Em>however big or small it is</Em>. This could mean achieving your goal, adjusting it for
        the next step, or moving on from it entirely.
      </Text>
      <Text>
        <Muted size="medium">
          <Em>
            You shrug your shoulders and let the knight ride off—you have more to worry about than
            your revenge.
          </Em>
        </Muted>
      </Text>
      <Panel border>
        <Table align="center" margin="small" variant="columns" fullWidth>
          <Table.Head>
            <Table.Row>
              <Table.HeaderCell smallCaps>Ambitions</Table.HeaderCell>
              <Table.HeaderCell smallCaps>Struggles</Table.HeaderCell>
              <Table.HeaderCell smallCaps>Growth</Table.HeaderCell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Em>Build a Reputation</Em>
              </Table.Cell>
              <Table.Cell>
                <Em>Come Unraveled</Em>
              </Table.Cell>
              <Table.Cell>
                <Em>Embrace Change</Em>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Em>Explore the World</Em>
              </Table.Cell>
              <Table.Cell>
                <Em>Doubt Convictions</Em>
              </Table.Cell>
              <Table.Cell>
                <Em>Escape My Past</Em>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Em>Finish the Mission</Em>
              </Table.Cell>
              <Table.Cell>
                <Em>Feed My Vices</Em>
              </Table.Cell>
              <Table.Cell>
                <Em>Find Belonging</Em>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Em>Make Things Right</Em>
              </Table.Cell>
              <Table.Cell>
                <Em>Flirt with Betrayal</Em>
              </Table.Cell>
              <Table.Cell>
                <Em>Just Enjoy Life</Em>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Em>Satisfy Desires</Em>
              </Table.Cell>
              <Table.Cell>
                <Em>Keep a Secret</Em>
              </Table.Cell>
              <Table.Cell>
                <Em>Prove Myself</Em>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Em>Uncover the Truth</Em>
              </Table.Cell>
              <Table.Cell>
                <Em>Survive the Storm</Em>
              </Table.Cell>
              <Table.Cell>
                <Em>Settle Debts</Em>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Panel>
      <Text>
        Group arcs unite players around a theme, while character arcs help you express your own
        story. Most importantly, they give you authorial power—you can use story or tangles to add
        story details tied to your arcs to bring them into play!
      </Text>
      <Text>
        Story arcs signal to the GM that you want <StrongEm>drama</StrongEm>,{" "}
        <StrongEm>dilemmas</StrongEm>, and <StrongEm>opportunities</StrongEm> to arise around them.
        Aim to resolve arcs within 3-5 sessions to keep things fresh. For struggles (
        <Em>flirt with betrayal</Em>), get group permission—limiting them to a few sessions and
        involving everyone makes it more fun.
      </Text>
      <Heading level={3} id="damage-recovery">
        Damage &amp; Recovery
      </Heading>
      <Text>
        <Strong allCaps>Marks</Strong>. Light damage, a temporary hindrance to a stat{" "}
        <Muted>(winded, confused)</Muted>.{" "}
        <StrongEm>Take +1t on the next roll with that stat, then clear the mark</StrongEm>.
      </Text>
      <Text>
        If a stat is already marked, you take <Strong>harm</Strong> (<Em>below</Em>) instead. As
        long as a stat is unmarked, even if you have its related harm, you can take a mark to it.
      </Text>
      <Text>
        Marks are often combined with another mark or other consequences when inflicted directly
        <Muted>(Agility mark + thrown off your horse)</Muted>. You also take a mark when you{" "}
        <Strong>push yourself</Strong>.
      </Text>
      <Text>
        <Strong allCaps>Harm</Strong>. Heavy damage to your mind or body, a lingering hindrance.{" "}
        <StrongEm>This is the default damage from an impact move</StrongEm>
        —though it can be split into a couple of marks or other consequences.
      </Text>
      <List>
        <List.Item>
          Heavy physical damage or stacked marks to Brawn or Agility leave you{" "}
          <Strong>bloodied</Strong>.
        </List.Item>
        <List.Item>
          Heavy mental damage or stacked marks to Wits or Presence leave you{" "}
          <Strong>rattled</Strong>.
        </List.Item>
      </List>
      <Text>
        <StrongEm>Bloodied and rattled inflict +1t each on all rolls</StrongEm>. Taking a type of
        harm for the second time leaves you <Strong>dropped</Strong>—you're out of the scene. Make a
        story roll (<Em>usually 2d</Em>)—on a perfect, you're merely out until the scene ends. On a
        messy, things get <StrongEm>even worse</StrongEm>, like also taking on a condition{" "}
        <Muted>(4d dying, broken leg, trauma)</Muted>. On a grim, things get{" "}
        <StrongEm>far worse</StrongEm>, like dying or taking on a permanent condition{" "}
        <Muted>(insanity, morality shift)</Muted>.
      </Text>
      <Text>
        Damage should match the tone of the scene—<Strong>tame stakes</Strong> might inflict a mark,
        while <Strong>dire stakes</Strong> might inflict both harm and dropped at once.
      </Text>
      <Text>
        <Strong allCaps>Vex</Strong>. An intense flash of emotion like <Em>anger</Em>, <Em>fear</Em>
        , or <Em>confusion</Em>. Vex is inflicted as a consequence, either on its own or in addition
        to a mark or harm. Vex prompts an immediate, instinctive response.
      </Text>
      <Text>Choose one:</Text>
      <Panel border>
        <Table margin="small" variant="columns" fullWidth>
          <Table.Body>
            <Table.Row>
              <Table.HeaderCell align="center">
                <Em>Fight</Em>
              </Table.HeaderCell>
              <Table.HeaderCell align="center">
                <Em>Flight</Em>
              </Table.HeaderCell>
              <Table.HeaderCell align="center">
                <Em>Freeze</Em>
              </Table.HeaderCell>
              <Table.HeaderCell align="center">
                <Em>Freakout</Em>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Panel>
      <Text>
        Interpret the response, which usually lasts a beat or two. Your PC is{" "}
        <Em>driven by emotion</Em>, but you decide how it plays out. Aim to balance what's fun, what
        fits the story, and what flows from the emotion.
      </Text>
      <Text>
        <Strong allCaps>Conditions</Strong>. Specific injuries or maladies that impact only relevant
        situations and are often lasting. They sometimes come alongside harm or a mark{" "}
        <Muted>(rattled + broken heart)</Muted>, and can be:
      </Text>
      <List>
        <List.Item>
          <StrongEm>Urgent</StrongEm>: <Em>4d bleeding out, 6d losing your mind.</Em>
        </List.Item>
        <List.Item>
          <StrongEm>Short-term</StrongEm>: <Em>Twisted ankle, drunk.</Em>
        </List.Item>
        <List.Item>
          <StrongEm>Long-term</StrongEm>: <Em>Broken arm, a deep hatred.</Em>
        </List.Item>
        <List.Item>
          <StrongEm>Permanent</StrongEm>: <Em>Gouged out eye, insanity.</Em>
        </List.Item>
      </List>
      <Text>
        <StrongEm>Take +1t when a condition specifically hinders a roll</StrongEm>. Conditions can
        also reduce your vantage, which can prohibit a rolls{" "}
        <Muted>(can't jump with a broken leg)</Muted>.
      </Text>
      <Text>
        Conditions clear when it makes sense, like after a scene, with rest, or when a pool tracking
        them depletes. They may also require treatment or another specific method to clear them.
      </Text>
      <Text>
        <StrongEm>You have the final say on long-term and permanent conditions</StrongEm>. When you
        take one, work with the GM to find a good fit for your PC and the situation.
      </Text>
      <Text>
        <Strong allCaps>Treatment</Strong>. Harm can be cleared with <StrongEm>treatment</StrongEm>,
        which requires time, tools, and training. Treatment always carries risk, requiring an action
        roll. On a messy, they recover but other problems arise{" "}
        <Muted>(left with a mark, takes longer than expected)</Muted>. On a grim, you aggravate the
        situation <Muted>(long-term condition, death)</Muted>.
      </Text>
      <Text>
        <StrongEm>Marks can't benefit from treatment</StrongEm>. They are light enough already that
        only time heals them, cleared with rest, rolling, or specific talents.
      </Text>
      <Text>
        <StrongEm>Conditions can be treated when it makes sense</StrongEm>, which might require
        working towards a task pool or fulfilling specific requirements before it clears.
      </Text>
      <Text>
        <Strong allCaps>Rest</Strong>. A stretch of time between significant action{" "}
        <Muted>(a night's camp, a week's travel)</Muted>. Paced for drama, not realism.{" "}
        <StrongEm>Clear all marks and harm</StrongEm>.
      </Text>
      <Text>
        <Strong allCaps>Downtime</Strong>. Extended breaks <Muted>(a month, a season)</Muted>. Fully
        heal, including relevant conditions, and reset per-session talents. The GM rolls faction
        pools, then picks one and depletes it completely to move the story forward.
      </Text>
      <Heading level={3} id="odds-ends">
        Odds &amp; Ends
      </Heading>
      <Text>
        <Strong allCaps>Potency</Strong>. The ability to pull off <Em>jaw-dropping</Em> feats. When
        you have potency on a task, you ignore thorns from difficulty (
        <Em>but not from other sources like damage</Em>) and can attempt normally impossible (+3t)
        tasks. A <Strong>potent feat</Strong> can do things like:
      </Text>
      <List>
        <List.Item>
          <StrongEm>Group action</StrongEm>
          : Something a team of people could accomplish with an action.
          <br />
          <Muted>Lifting a boulder, a volley of arrows, inciting mutiny.</Muted>
        </List.Item>
        <List.Item>
          <StrongEm>Stretching Limits</StrongEm>
          : Something just beyond normal human limitations.
          <br />
          <Muted>Leap a massive gap, endure fire, tell ridiculous lies.</Muted>
        </List.Item>
        <List.Item>
          <StrongEm>Mystical</StrongEm>
          : Feats that don't fit in with the above, but have similar narrative impact.
          <br />
          <Muted>Befriend a wild tiger, use echoes to create a rockslide.</Muted>
        </List.Item>
      </List>
      <Text>
        Potency is only concerned with difficulty thorns. It alters rolls with thorns from
        difficulty as such:
      </Text>
      <List>
        <List.Item>
          <Strong>+3t</Strong>/<Em>impossible</Em> rolls become +0t/
          <Em>tough</Em>.
        </List.Item>
        <List.Item>
          <Strong>+1t</Strong>/<Strong>+2t</Strong> rolls become +0t/
          <Em>tough</Em>.
        </List.Item>
        <List.Item>
          <Strong>+0t</Strong> rolls are automatically successful if there are no thorns from other
          sources.
        </List.Item>
        <List.Item>
          On a messy or perfect on a +0t/+1t/+2t (from difficulty) you gain <Em>greater effect</Em>{" "}
          (as a critical).
        </List.Item>
      </List>
      <Text>
        There's a <Em>gray zone</Em> between jaw-dropping and too much. Something +3t is okay, but
        +4t is too far.
      </Text>
      <Line color="muted" />
      <Text>
        <Strong allCaps>Power Pools</Strong>. The power of some talents or items, rolled in place of
        a stat. The same roll determines the outcome and drops dice from the pool. Even if it's
        automatically successful, still roll the pool when used and drop dice. You must roll all
        dice in the pool. 🎲 The talent or item is used.{" "}
        <Muted>4d Fireball Wand, 6d Cleric domain.</Muted>
      </Text>
      <Line color="muted" />
      <Text>
        <Strong allCaps>Interrupt</Strong>. Make an action roll to try to stop an impact move. This
        requires a specific talent. If not already involved, you now share the risk. On a messy, the
        GM takes or keeps suspense.
      </Text>
      <Line color="muted" />
      <Text>
        <Strong allCaps>Buffs</Strong>. Beneficial effects <Muted>(fearless, invisible)</Muted> that
        expand vantage, ease tasks, make rolls unnecessary, or provide outside assistance. If you
        give a buff to an ally that persists in your absence, you can assist relevant rolls without
        risk.
      </Text>
      <Line color="muted" />
      <Text>
        <Strong allCaps>Spark</Strong>. Spark carries over each session and you can spend multiple
        spark on a single roll.
      </Text>
      <Line color="muted" />
      <Text>
        <Strong allCaps>Quarrels</Strong>. Conflicts between PCs—arguments, competitions, or even
        violence. Quickly resolve impasses in the story—don't waste time debating! First,{" "}
        <StrongEm>make sure all players agree to the quarrel</StrongEm>. Clearly state the stakes
        for winning and losing, erring on the side of dramatic
        <Muted>(bruises, not bloodied; hurt feelings, not vex)</Muted>. Each{" "}
        <StrongEm>player rolls 2d and the highest wins</StrongEm> <Muted>(5 beats 4)</Muted>. Others
        can assist, or they can join at 2d with their own agenda. On a tie, compromise or keep
        quarreling.
      </Text>
      <Text>
        The winner narrates how they won. Then, the loser narrates how they handle losing. The
        results of the quarrel are <Strong>final</Strong>—it's okay for the PC that lost to be
        bitter, but the story moves in the winner's direction.{" "}
        <StrongEm>Both sides take spark</StrongEm>.
      </Text>
      <Line color="muted" />
      <Text>
        <Strong allCaps>Push Yourself</Strong>. Expend extra effort to activate certain talents that
        it. After using the talent, <StrongEm>mark a related stat</StrongEm> (<Em>your choice</Em>).
        Talents that require you to push yourself can be activated without a mark once per session.
      </Text>
      <Line color="muted" />
      <Text>
        <Strong allCaps>Always</Strong>. If you have the ability to <StrongEm>always</StrongEm>{" "}
        succeed or receive a benefit, it holds true <StrongEm>unless</StrongEm> the GM makes a{" "}
        <Move>Counter</Move> move, a strong NPC trait is in play, or other extenuating circumstances
        arise. <Em>In short, “always” means 95% of the time</Em>.
      </Text>
      <Line color="muted" />
      <Text>
        <Strong allCaps>Pre-Session Recap</Strong>. Before each session (after the first), recall
        the previous session and share your PC's best moment.{" "}
        <StrongEm>Each player takes spark</StrongEm>.
      </Text>
      <Text>
        When all are finished, the <Move>GM Recaps</Move> (<Em>taking suspense</Em>) tying all of
        these moments together into a proper “<Em>Previously on...</Em>” and starts the session.
      </Text>
      <Line color="muted" />
      <Text>
        <Strong allCaps>Post-Session XP</Strong>. After each session, <StrongEm>take 1 XP</StrongEm>{" "}
        and fill in its box. You start at level 1 and advance when you fill boxes equal to the next
        level <Muted>Lvl. 4→5 = 5 more boxes</Muted>. This lets you choose a{" "}
        <StrongEm>new talent</StrongEm>.
      </Text>
      <Text>
        <StrongEm>The GM can award 1 bonus XP for a standout session</StrongEm> (
        <Em>about 1 in 4</Em>). For a slower pace, slash each XP box before filling it.
      </Text>
      <Line color="muted" />
      <Text>
        <Strong allCaps>Level</Strong>. A PC starts at level 1 and can go up to level 7. This takes
        6 months of weekly play. For longer play, slow down progression.
      </Text>
      <Heading level={2} id="spellcasting">
        Spellcasting
      </Heading>
      <Text>
        <Strong>Spellcasting</Strong> is the ability to harness magic, acquired through talents or
        arcana. While each style has its quirks, they all follow the same <Em>laws of magic</Em>.
        Spells are cast using <Strong>touchstones</Strong>
        —key terms like spell names, godly domains, or item descriptions. You interpret these
        on-the-fly, defining the permissions and limitations of your magic when you cast. Each
        source clearly defines its touchstones, casting methods, and costs.
      </Text>
      <Text>
        Magic has four magnitudes: <Strong>cantrips</Strong>, <Strong>spells</Strong>,{" "}
        <Strong>potent spells</Strong>, and <Strong>rituals</Strong>. Determine the magic's
        magnitude by comparing:
      </Text>
      <List>
        <List.Item>
          The <StrongEm>final result</StrongEm>, not the method, to what can be achieved by a
          non-magic action roll.
        </List.Item>
        <List.Item>
          The <StrongEm>narrative impact</StrongEm>, not the result, to the impact of a normal
          action roll.
        </List.Item>
      </List>
      <Text>
        <Strong>Final result</Strong> is used to judge most cases, seeing if the magic is
        replicating what can be done through non-magic means. The second is then used when the first
        isn't possible.
      </Text>
      <Text>
        <Strong>Narrative impact</Strong> is used to judge spellcasting results without mundane
        equivalents, to ensure that magic and non-magic means have the same overall impact on the
        story.
      </Text>
      <Text>
        The GM uses the guideline and examples on these pages to set the line between spells and
        potent spells, as well as the upper limit—beyond extraordinary magic (+4t), only
        accomplishable with rituals. This is a judgment call set through play, so transparency and
        consistency are key.
      </Text>
      <List>
        <List.Item>
          <Strong>Cantrips</Strong> are similar to something that doesn't require a roll. They
          should feel <StrongEm>flavorful</StrongEm>.
        </List.Item>
        <List.Item>
          <Strong>Spells</Strong> are similar to an action roll, impactful but not dominating a
          scene. They should feel <StrongEm>useful</StrongEm>.
        </List.Item>
        <List.Item>
          <Strong>Potent spells</Strong> are similar to a group effort, effort over time, or a
          single effort with potency. They should feel <StrongEm>powerful</StrongEm>.
        </List.Item>
      </List>
      <Text>
        <Muted size="medium">
          <Em>
            Transforming a cat into a dog temporarily is a spell, as the GM feels the narrative
            impact <Strong>within this scene</Strong> is similar to a normal action. If there was
            little to no impact in this scene, it might even be a cantrip. However, turning it into
            a tiger is most definitely a potent spell.
          </Em>
        </Muted>
      </Text>
      <SectionHeading variant="solid">Cantrips</SectionHeading>
      <Text>
        <Strong>Cantrips</Strong> are set dressing, minor effects that don't require rolls. Success
        is automatic.
      </Text>
      <Text muted>
        A fire cantrip lights a candle. The brooms sweep the room clean for you. You talk to the
        flower and it starts to bloom.
      </Text>
      <Text>
        <StrongEm>Cantrip utility</StrongEm> lets you flavor other action rolls with cantrips, or
        even use them to replace gear when using relevant touchstones. This reasonably expands
        vantage. You roll the stat you'd normally roll for the now-possible action, like Brawn or
        Agility to swing a conjured sword.
      </Text>
      <SectionHeading variant="solid">Spells</SectionHeading>
      <Text>
        <Strong>Spells</Strong> have effects equal to an action roll, results one person with the
        right training and tools can achieve. They're the baseline magnitude of magic.
      </Text>
      <List>
        <List.Item>
          <Muted>
            Just like sticking an arrow in a bugbear, a spell can blast it with flames or enchant
            their ally to backstab them. [Result: The bugbear is dead.]
          </Muted>
        </List.Item>
        <List.Item>
          <Muted>
            Just like picking a lock or smashing it apart, a spell can melt through it with acid or
            let you phase through the door. [Result: You get past the lock.]
          </Muted>
        </List.Item>
        <List.Item>
          <Muted>
            Just like outplaying someone at a game, a spell can read your opponent's mind or commune
            with your ancestors for help. [Result: You win the match.]
          </Muted>
        </List.Item>
      </List>
      <SectionHeading variant="solid">Potent Spells</SectionHeading>
      <Text>
        <Strong>Potent spells</Strong> accomplish more than a normal spell—
        <StrongEm>they give potency and broaden vantage</StrongEm>. A potent spell can achieve
        effects equal to an entire group working together, as with normal potency. You can attempt
        jaw-dropping effects (+3t/difficulty). A normally +1t or +2t task has{" "}
        <Em>greater effect</Em> (critical bonus), and a +0t roll is automatic.
      </Text>
      <List>
        <List.Item>
          <Muted>
            Normally, fighting this group of goblins would be extremely difficult (+2t), but a
            potent spell <Strong>Fireball</Strong> is like a whole group fighting them (+2t→+0t,
            plus greater effect!).
          </Muted>
        </List.Item>
        <List.Item>
          <Muted>
            Normally, someone couldn't bust down this thick stone wall, but a potent spell{" "}
            <Strong>Thunderous Boom</Strong> can do it (+3t→+0t).
          </Muted>
        </List.Item>
        <List.Item>
          <Muted>
            Normally, your nemesis would never help you (+3t), but a potent spell{" "}
            <Strong>Charm</Strong> can convince them (+3t→+0t).
          </Muted>
        </List.Item>
      </List>
      <Heading level={3} id="touchstones">
        Touchstones
      </Heading>
      <Text>
        Spellcasting ability comes with touchstones and all magic effects must logically align with
        them, making sense and feeling natural. If it feels like a <Em>reach</Em>, it's beyond the
        touchstone's bounds.
      </Text>
      <List>
        <List.Item>
          <Muted>
            <Strong>Flaming</Strong> can burn or illuminate, but can't calm someone.
          </Muted>
        </List.Item>
        <List.Item>
          <Muted>
            <Strong>Dazzling</Strong> can blind or distract, but can't mend objects.
          </Muted>
        </List.Item>
        <List.Item>
          <Muted>
            <Strong>Warding</Strong> can create barriers, but can't attack.
          </Muted>
        </List.Item>
      </List>
      <Panel>
        <Text muted>
          You cast <Strong>Flaming Claw</Strong> as a spell at the goblins, aiming for a huge claw
          to grab one, ignite it, and hurl it into the rest. This fits the touchstones, but your
          intent—harming multiple goblins at once—might work as a spell on a bunch of mooks, but
          these are some tough goblins. You'll have to choose to target just one or cast a potent
          spell to pull off the full effect.
        </Text>
      </Panel>
      <Text>
        <StrongEm>The GM can veto spells that don't align with your touchstones</StrongEm>. They can
        also instead allow it, but inflict a thorn or collateral effects when it's pushing your
        touchstones, but not completely implausible.
      </Text>
      <List>
        <List.Item>
          <Muted>
            A <Strong>Slime Wall</Strong> spell can slow enemies, but has trouble completely
            blocking them (+1t).
          </Muted>
        </List.Item>
        <List.Item>
          <Muted>
            A <Strong>Dominion</Strong> domain spell can command someone to help, but can't cause
            wounds.
          </Muted>
        </List.Item>
        <List.Item>
          <Muted>
            A <Strong>Wand of Invisibility</Strong> can make objects disappear, but can't make
            sounds vanish.
          </Muted>
        </List.Item>
      </List>
      <Panel>
        <Text muted>
          You want to grab a treasure chest and haul it across the chasm and try to cast your
          flaming claw spell to do it. Discussing it with the GM, you both decide that the claw has
          a physical form, but since it's on fire, it'll scorch anything it touches. The GM says
          that the chest will be <Strong>4d On Fire</Strong>. This is just a spell, since you could
          get across the chasm with an action.
        </Text>
      </Panel>
      <SectionHeading>Examples</SectionHeading>
      <Text>
        Below are some touchstones and how their effectiveness increases with the magnitude of
        magic.
      </Text>
      <Table textSize="small" variant="striped" fullWidth>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell align="left" allCaps>
              Touchstone
            </Table.HeaderCell>
            <Table.HeaderCell align="left" allCaps>
              Cantrip
            </Table.HeaderCell>
            <Table.HeaderCell align="left" allCaps>
              Spell
            </Table.HeaderCell>
            <Table.HeaderCell align="left" allCaps>
              Potent Spell
            </Table.HeaderCell>
            <Table.HeaderCell align="left" allCaps>
              Ritual
            </Table.HeaderCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <StrongEm>Shimmering Vision</StrongEm>
            </Table.Cell>
            <Table.Cell>
              <Em>Flash of light</Em>
            </Table.Cell>
            <Table.Cell>
              <Em>Simple illusion</Em>
            </Table.Cell>
            <Table.Cell>
              <Em>Complex illusion</Em>
            </Table.Cell>
            <Table.Cell>
              <Em>Permanent illusion</Em>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <StrongEm>Jovial Wings</StrongEm>
            </Table.Cell>
            <Table.Cell>
              <Em>Glide downstairs</Em>
            </Table.Cell>
            <Table.Cell>
              <Em>Soar up a wall</Em>
            </Table.Cell>
            <Table.Cell>
              <Em>Fly to the clouds</Em>
            </Table.Cell>
            <Table.Cell>
              <Em>Grow real wings</Em>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <StrongEm>Shadow sorcery</StrongEm>
            </Table.Cell>
            <Table.Cell>
              <Em>Snuff a light</Em>
            </Table.Cell>
            <Table.Cell>
              <Em>Blind a foe</Em>
            </Table.Cell>
            <Table.Cell>
              <Em>Summon darkness</Em>
            </Table.Cell>
            <Table.Cell>
              <Em>Eternal night</Em>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <StrongEm>Healing domain</StrongEm>
            </Table.Cell>
            <Table.Cell>
              <Em>Heal a headache</Em>
            </Table.Cell>
            <Table.Cell>
              <Em>Heal a mark</Em>
            </Table.Cell>
            <Table.Cell>
              <Em>Heal harm</Em>
            </Table.Cell>
            <Table.Cell>
              <Em>Regrow a limb</Em>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <StrongEm>Warding domain</StrongEm>
            </Table.Cell>
            <Table.Cell>
              <Em>Block the rain</Em>
            </Table.Cell>
            <Table.Cell>
              <Em>Shield an ally</Em>
            </Table.Cell>
            <Table.Cell>
              <Em>Shield a group</Em>
            </Table.Cell>
            <Table.Cell>
              <Em>Build a town wall</Em>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <StrongEm>Fiend patron</StrongEm>
            </Table.Cell>
            <Table.Cell>
              <Em>Summon hellflies</Em>
            </Table.Cell>
            <Table.Cell>
              <Em>Summon imp</Em>
            </Table.Cell>
            <Table.Cell>
              <Em>Call a hellhound</Em>
            </Table.Cell>
            <Table.Cell>
              <Em>Summon demon</Em>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <StrongEm>Air primordial</StrongEm>
            </Table.Cell>
            <Table.Cell>
              <Em>Scatter leaves</Em>
            </Table.Cell>
            <Table.Cell>
              <Em>Push off a cliff</Em>
            </Table.Cell>
            <Table.Cell>
              <Em>Carry up a cliffside</Em>
            </Table.Cell>
            <Table.Cell>
              <Em>Craft a tornado</Em>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Text>
        <Strong smallCaps>Touchstone Limitations</Strong>: When you take a magic talent, have a
        discussion with the GM about what your magic can and can't do. Clearly defining it in this
        way makes the magic more fun to play with—{" "}
        <StrongEm>creativity thrives within limitations</StrongEm>. If a PC's magic feels too broad
        during the campaign, consider discussing new limitations to keep it balanced and engaging.
      </Text>
      <Text>
        <Muted size="medium">
          <Em>
            A shadow sorcerer might limit their magic so shadows can never cause physical harm, or
            they might make them tangible but useless in direct sunlight. Most limitations arise
            naturally from the touchstones.
          </Em>
        </Muted>
      </Text>
      <SectionHeading variant="solid">Spellcasting Rulings</SectionHeading>
      <Text>
        Magic's a freeform system, built on flexibility and creative rulings from the GM, with the
        understanding that its freedom is meant to preserve the feeling of magic. While this system
        can be exploited in unfun ways aimed at “winning,” it relies on you buying into your magic
        touchstones and the magnitudes of magic. <StrongEm>Don't be a weasel</StrongEm>
        —play in good faith and have fun with the freedom it gives you. With that in mind, here are
        some common rulings for various situations involving magic:
      </Text>
      <Text>
        <Strong>Magic Trappings</Strong>: Discuss with the GM how your casting appears, its visual
        style, movements you make, and tools you use. All magic is clear and evident—trying to hide
        it is extremely difficult at best, but usually impossible. Losing implements or being
        hindered can deny permission to cast or inflict thorns.
      </Text>
      <Text>
        <Strong>Magic on Defense Rolls</Strong>: The GM chooses the stat for defense rolls, and can
        choose to let you use spellcasting. This counts as set dressing and doesn't cost a resource,
        like dice dropped from a pool. If the GM calls for another stat, but you have a clear
        spell-based counter, you can ask them if you have time to cast a spell instead. This is a
        spell as usual and it's the GM's choice if you have time.
      </Text>
      <Text>
        <Strong>Assisting with Magic</Strong>: Using magic to assist a roll is just set dressing
        with no cost—just keep the narration reasonable (the weaker end of a spell). Remember you're
        assisting. If you're making the action roll on a group level, cast as usual.
      </Text>
      <Text>
        <Strong>Detecting Magic</Strong>: With a relevant touchstone, you can recognize magic
        easily. Without one, it's harder, though magic ability counts as a factor. Without training,
        the magic must be very obvious to be noticed.
      </Text>
      <Text>
        <Strong>Dispelling Magic</Strong>: Anyone aware that something is magic can try to dispel
        it. This does not require training—you can cast a spell with relevant touchstones that
        counters it, cause enough of a disturbance to it (smashing the arcane shield with a
        battleaxe, shaking someone until they're no longer charmed), or outsmarting the magic's
        logic in some way (throwing water on a fire spell). Creativity should be rewarded here.
      </Text>
      <Text>
        <Strong>Healing Magic</Strong>: Spells can clear marks, heal minor conditions, or calm a vex
        response. Potent spells can pull off +3t/<Em>impossible</Em> healing, such as healing harm
        instantly or curing major conditions{" "}
        <Muted>mend a broken bone, but not a severed arm</Muted>. Rituals are needed for more
        extreme conditions like regrowing limbs, curing blindness, or removing deep trauma.
      </Text>
      <Text>
        <Strong>Resurrection</Strong>: Bringing back the dead is a costly, extremely risky ritual
        rarely worth the price you'll surely have to pay. Tread carefully.
      </Text>
      <Text>
        <Strong>Buffs &amp; Debuffs</Strong>: Spells that help or hinder are considered on a
        case-by-case basis, with the player and GM working together. As a starting point, a buff can
        apply the effects of a <StrongEm>critical</StrongEm>:{" "}
        <Em>greater effect—secondary effect—setup</Em>. Debuffs can do the same for anyone working
        against the foe. They can also add vantage <Muted>the ability to fly, invisibility</Muted>.
        Potent buffs might last longer, affect multiple targets, make +0t rolls automatically
        successful, or allow for a potent feat. Get creative with applying the mechanics and capture
        the feeling the spell is going for.
      </Text>
      <Text>
        <Strong>Magic Duration</Strong>: As a rule of thumb, a spell lasts just a moment, maybe two,
        and a potent spell lasts for a scene. This is judged by the GM based on the intended effect,
        which you balance against the magnitude of spell.
      </Text>
      <Text>
        <Strong>Potions</Strong>: Magical items, like potions, that allow you to use them as tools
        require an action to apply, such as rolling Agility to throw and hit someone with a potion.
        The efficacy of a potion is usually automatic, based on what tier of potion it is, but you
        can make a story roll if it's unclear. The more powerful the potion, the more dice you roll
        for the story roll.
      </Text>
      <Heading level={3} id="rituals">
        Rituals
      </Heading>
      <Text>
        <Strong>Rituals</Strong> can accomplish magical effects far beyond what can be done with
        even potent spells, equal to the labor of an entire team of people over an extended period,
        effects that can have significant impact on the world, or push the very limits of
        implausibility. <Strong>Casting a ritual consists of 3 parts</Strong>:
      </Text>
      <List>
        <List.Item>
          Possess a <Strong>source of magic</Strong> with relevant touchstones.
        </List.Item>
        <List.Item>
          <Strong>Anchor</Strong> the ritual to the physical and metaphysical realms.
        </List.Item>
        <List.Item>
          Complete the ritual's <Strong>rites</Strong> to finalize its casting.
        </List.Item>
      </List>
      <Text>
        <Strong>Source of magic</Strong> can be a spellcasting talent or a scroll, potion, or other
        arcana. It might also be something creative like asking or tricking a monster into helping.
        Even a PC without magic ability can initiate a ritual as long as they have a source of
        magic.
      </Text>
      <Text>
        <Strong>Anchors</Strong> for a ritual are chosen by the GM and players together. They should
        feel connected to the ritual's touchstones and intent, and match the intended impact of the
        ritual. <StrongEm>Two or three anchors</StrongEm>, like those below, are best.
      </Text>
      <Table align="center" variant="solid" fullWidth>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell colSpan={2} align="center" allCaps>
              Anchors
            </Table.HeaderCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Em>Ancient Knowledge</Em>
            </Table.Cell>
            <Table.Cell>
              <Em>Harness Energy</Em>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Em>Artifact or Relic</Em>
            </Table.Cell>
            <Table.Cell>
              <Em>Item of Great Import</Em>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Em>Auspicious Timing</Em>
            </Table.Cell>
            <Table.Cell>
              <Em>Sacred Dance</Em>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Em>Circle of Casters</Em>
            </Table.Cell>
            <Table.Cell>
              <Em>Sacrificial Offering</Em>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Em>Divine Guidance</Em>
            </Table.Cell>
            <Table.Cell>
              <Em>Sanctified Ground</Em>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Em>Enchanted Location</Em>
            </Table.Cell>
            <Table.Cell>
              <Em>Specific Helper</Em>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Em>Exotic Ingredients</Em>
            </Table.Cell>
            <Table.Cell></Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Text>
        <Strong>Rites</Strong> are the act of casting the ritual, a challenge that must be overcome,
        made far more difficult or even impossible if any of the anchors are missing.
      </Text>
      <Text>Below are some example rituals and anchors.</Text>
      <List>
        <List.Item>
          <Strong smallCaps>Binding Ritual</Strong>:{" "}
          <Em>Nine chanters. A circle of perfectly round stones. A sacrificial imp.</Em>
        </List.Item>
        <List.Item>
          <Strong smallCaps>Summoning Ritual</Strong>:{" "}
          <Em>Phoenix feathers. A moonlit glade. The hour of the eclipse.</Em>
        </List.Item>
        <List.Item>
          <Strong smallCaps>Regeneration Ritual</Strong>:{" "}
          <Em>Sacred water. The tears of a unicorn. A high priest's blessing.</Em>
        </List.Item>
      </List>
      <Panel>
        <Text>
          <Muted size="medium">
            <Em>
              An enormous fire is raging across the countryside and your party seeks to stop it with
              a <Strong smallCaps>Ritual of Torrential Rails</Strong>. You realize the risks in
              getting the ritual wrong, but you have no choice. First, you have to convince both a{" "}
              <Strong>water elemental</Strong> and an <Strong>air elemental</Strong> (circle of
              casters) to help, then lead them high atop a mountain overlooking the land (enchanted
              location). You gather everything and begin the rites, but at the mountaintop the
              elementals begin to fight, complicating the ritual (+1t). Just then, the tribe of the
              gnoll shaman who's been starting the fires arrives to stop you.
            </Em>
          </Muted>
        </Text>
      </Panel>
      <Panel>
        <Text>
          <Muted size="medium">
            <Em>
              A restless spirit is driving the village to madness, and you must banish it with the{" "}
              <Strong smallCaps>Ritual of Opening the Veil</Strong>. First, locate the cursed{" "}
              <Strong>Tablet of Communion</Strong>, a major arcana that lets you communicate with
              the spirit. With its guidance, you uncover the spirit's grave and gather sanctified
              soil. At the <Strong>witching hour</Strong>, you combine the anchors to perform the
              rites, but the cursed Tablet wrestles for control, threatening to tear open the Veil—a
              new challenge, 8d | Maintain Control.
            </Em>
          </Muted>
        </Text>
      </Panel>
      <Heading level={2} id="treasure">
        Treasure
      </Heading>
      <Text>
        <Strong>Treasure</Strong> is the currency of an adventurer, useful in trade with the
        powerful entities in the world to further your own aims. Your skills put you beyond worrying
        about the expenses of daily life and adventuring gear.
      </Text>
      <Text>
        You deal in treasures—
        <StrongEm>minor</StrongEm>, <StrongEm>major</StrongEm>, and <StrongEm>mythic</StrongEm>,
        anything from a stash of gold to a rare artifact or magical item. While the treasure's label
        gives some indication of its value and the table below shows what you might get for it in
        trade, a treasure is only truly as valuable as what someone will give you for it.
      </Text>
      <Text>
        Treasures are shared by the party, unless chosen otherwise. With each adventure, it's
        assumed that you're gaining some coin to spend on your own. Treasures are the things beyond
        that, valuable resources the party can leverage.
      </Text>
      <Text>
        Hauling treasure isn't a problem unless the GM specifically makes it one. You can also
        assume that when a PC needs one of the party's treasures, they happen to have it on them if
        it makes sense. That is, unless the GM <Move>Complicates Things</Move> (<Em>pg. 33</Em>
        ).
      </Text>
      <Table textSize="small" variant="striped" fullWidth>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell align="center" allCaps>
              Value
            </Table.HeaderCell>
            <Table.HeaderCell allCaps>Tangibles</Table.HeaderCell>
            <Table.HeaderCell allCaps>Intangibles</Table.HeaderCell>
            <Table.HeaderCell allCaps>Magic</Table.HeaderCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell align="center">
              <StrongEm>Minor</StrongEm>
            </Table.Cell>
            <Table.Cell>
              Gift, <Em>noble</Em>
              <br />
              Pet, <Em>exotic</Em>
              <br />
              Map, <Em>detailed</Em>
            </Table.Cell>
            <Table.Cell>
              Service, <Em>highly skilled</Em>
              <br />
              Mercenaries, <Em>a few</Em>
              <br />
              Provide help, <Em>town</Em>
            </Table.Cell>
            <Table.Cell>
              Arcana, <Em>minor</Em>
              <br />
              Casting, <Em>spell</Em>
              <br />
              Ritual, <Em>simple</Em>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell align="center">
              <StrongEm>Major</StrongEm>
            </Table.Cell>
            <Table.Cell>
              Gift, <Em>royal</Em>
              <br />
              Estate, <Em>spacious</Em>
              <br />
              Sailing ship, <Em>swift</Em>
            </Table.Cell>
            <Table.Cell>
              Service, <Em>very risky</Em>
              <br />
              Mercenaries, <Em>a squad</Em>
              <br />
              Provide help, <Em>city</Em>
            </Table.Cell>
            <Table.Cell>
              Arcana, <Em>major</Em>
              <br />
              Casting, <Em>potent spell</Em>
              <br />
              Ritual, <Em>moderate</Em>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell align="center">
              <StrongEm>Mythic</StrongEm>
            </Table.Cell>
            <Table.Cell>
              Gift, <Em>imperial</Em>
              <br />
              Keep, <Em>formidable</Em>
              <br />
              Sailing ship, <Em>mighty</Em>
            </Table.Cell>
            <Table.Cell>
              Service, <Em>unique</Em>
              <br />
              Mercenaries, <Em>an army</Em>
              <br />
              Provide help, <Em>kingdom</Em>
            </Table.Cell>
            <Table.Cell>
              Arcana, <Em>mythic</Em>
              <br />
              Ritual, <Em>complex</Em>
              <br />
              Soul, <Em>powerful</Em>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Text>
        <Strong smallCaps>Finding Treasure</Strong>: When you gain treasure, the GM can either
        specify what it is or just give its tier and handwave it. If you want specifics on it later
        or it becomes important to the story, figure it out then. It's the GM's job to match up
        treasure and the nature of the adventure and campaign. When unsure about what exactly is
        found, they can use a story roll or GM crucible to help.
      </Text>
      <Text>
        <Strong smallCaps>Carousing</Strong>: Any time you're in a settlement, you can carouse by
        selling off a minor treasure, with each PC spending their leisure time as they like. Make a
        montage roll and narrate—or suffer—the results. After the scenes finish up,{" "}
        <StrongEm>everyone takes spark regardless of the roll</StrongEm>.
      </Text>
      <Panel>
        <Text align="center">
          <Strong allCaps>Example Treasures</Strong>
        </Text>
        <Text align="center" size="small">
          <Strong smallCaps>Minor Treasures</Strong>
        </Text>
        <Text align="center" size="small">
          <Em>
            <Strong>Noble signet ring</Strong>, found in the ruins of an ancient castle
          </Em>
          .
          <br />
          <Em>
            <Strong>Map to a hidden city</Strong>, discovered in a bandit's hideout
          </Em>
          .
          <br />
          <Em>
            <Strong>Bag of enchanted seeds</Strong>, unearthed in a druid grove
          </Em>
          .
        </Text>
        <Text align="center" size="small">
          <Strong smallCaps>Major Treasures</Strong>
        </Text>
        <Text align="center" size="small">
          <Em>
            <Strong>Beautiful coastal estate</Strong>, a gift from the prince
          </Em>
          .
          <br />
          <Em>
            <Strong>Living Crystal pendant</Strong>, from a golem's shattered core
          </Em>
          .
          <br />
          <Em>
            <Strong>Starlit Compass</Strong>, from the wreckage of the Nightship
          </Em>
          .
        </Text>
        <Text align="center" size="small">
          <Strong smallCaps>Mythic Treasures</Strong>
        </Text>
        <Text align="center" size="small">
          <Em>
            <Strong>Phoenix Feather Cloak</Strong>, pulled out of a volcanic lair
          </Em>
          .
          <br />
          <Em>
            <Strong>Dragonbane Sword</Strong>, found on a corpse in the dragon's lair
          </Em>
          .
          <br />
          <Em>
            <Strong>The royal treasury</Strong>, carried right out of the vault
          </Em>
          .
        </Text>
      </Panel>
      <Heading level={3} id="arcana">
        Arcana
      </Heading>
      <Text>
        <Strong>Arcana</Strong> are rare artifacts of power, magic imbued in them through ritual or
        other esoteric forces. They grant <StrongEm>vantage</StrongEm>, letting you do what's
        otherwise impossible, or greatly enhance specific tasks by granting outside assistance, at a
        cost. Some create strange, unique effects tied to their creator's intent. As always, it's
        the GM's role to map fiction to rules for each arcana. Arcana have the same tiers as
        treasure: <StrongEm>minor</StrongEm>, <StrongEm>major</StrongEm>, and{" "}
        <StrongEm>mythic</StrongEm>.
      </Text>
      <Text>
        <Strong>An arcana's name and description serve as its touchstones</Strong>, while its tier
        reflects the magnitude of magic bound to it. Unlike the rigid <Em>laws of magic</Em>{" "}
        governing PC magic, guidelines for arcana are looser, typically following this pattern:
      </Text>
      <List>
        <List.Item>
          <StrongEm>Minor arcana</StrongEm> <Em>have cantrip to spell-level effects.</Em>
        </List.Item>
        <List.Item>
          <StrongEm>Major arcana</StrongEm> <Em>have spell to potent spell-level effects.</Em>
        </List.Item>
        <List.Item>
          <StrongEm>Mythic arcana</StrongEm> <Em>have ritual-level effects.</Em>
        </List.Item>
      </List>
      <Heading level={3} id="designing-arcana">
        Designing Arcana
      </Heading>
      <Text>
        Arcana are generally tools for the GM, crafted to fit the campaign. The GM Crucible (
        <Em>pg. 29</Em>) is a great source of inspiration for designing them.
      </Text>
      <Text>
        Arcana are what they are—they're truths within the fiction. They can do what their
        description says. A shortcut to creating one works like this, though. Start with an
        evocative name and a single touchstone word, then apply one or two Sorcery techniques (
        <Em>pg. 72</Em>): <Em>attack—creation—defense</Em>—{" "}
        <Em>enhancement—hindrance—influence—transformation—traversal</Em>. From that, you can build
        out the description. Or begin with the description and work backwards towards defining the
        touchstones.
      </Text>
      <List>
        <List.Item>
          <Muted>Staff of Embers (fire, elementals, creation)</Muted>
        </List.Item>
        <List.Item>
          <Muted>Ring of Solitude (time, hindrance, traversal)</Muted>
        </List.Item>
        <List.Item>
          <Muted>Swiftblade (attack, multiple strikes)</Muted>
        </List.Item>
      </List>
      <Text>
        An arcana's power level can be balanced by giving it requirements, like the following:
      </Text>
      <List>
        <List.Item>
          <Strong>Activation</Strong>: Requires spending spark, pushing yourself, or another
          resource to activate.
        </List.Item>
        <List.Item>
          <Strong>Limited Usage</Strong>: Has a resource or power pool, usually 4d. At 0d, it must
          be recharged by satisfying a specific anchor, like a ritual.
        </List.Item>
      </List>
      <SectionHeading variant="solid">Arcana Rulings</SectionHeading>
      <Text>
        Arcana are as flexible as spellcasting—if not more so—and demand just as much creativity and
        GM rulings when used. Here are some examples:
      </Text>
      <Text>
        <Strong>Wands and similar</Strong>: Bestow spellcasting ability on those wielding them. They
        have limited usage, a power pool rolled to cast from them. They don't require training to
        use.
      </Text>
      <Text>
        <Strong>Potions and similar</Strong>: Potions have a magnitude one level higher than its
        tier. <Em>A Minor Healing Potion</Em> can accomplish what a spell can (heal a mark).{" "}
        <Em>Major potions</Em> are potent spell effects and Mythic potions are ritual-level effects.
      </Text>
      <Text>
        <Strong>Scrolls</Strong>: Single-use arcana that match the tier of their effects, unlike
        other consumables. Lacking vantage to cast spells means you take thorns casting from them.
        Scrolls are also highly sought after for learning spells with the wizard's Spellcraft talent
        (<Em>pg. 76</Em>).
      </Text>
      <Text>
        <Strong>Crafting Arcana</Strong>: The act of binding magic to items requires a ritual and a
        source of magic with the proper touchstones to make it. A ritual of creation generally takes
        far longer, though is often less dangerous, than merely achieving the same effect through a
        ritual.
      </Text>
      <Text>
        <Strong>Purchasing Arcana</Strong>: Prices depend entirely on the seller's desires, usually
        something other than coin. Finding one for sale is exceedingly rare, but you might locate
        someone willing to craft it for you for the right price.
      </Text>
      <Panel title="List of Arcana">
        <Text>
          In <Strong>Chapter 7: Extras</Strong>, you can find 12 pages of minor, major, and mythic
          arcana, as well as a thorough random potion generator!
        </Text>
      </Panel>
      <Heading level={2} id="examples-of-play">
        Examples of Play
      </Heading>
      <Text>
        You tell the GM you want to punch the guy in the face, so he calls for a Brawn roll.
        Confused, you rewind a bit and explain that you're sucker punching him, and it's mostly just
        to get him to back down. Seeing the situation more clearly now, the GM calls for Agility.
      </Text>
      <Text>
        With an Agility of 2, you roll 2d and get 3, 5 :: <Strong>messy</Strong>. You're going to do
        it, but the GM makes an impact move. That guy will be back with some friends. The GM starts
        a <Em>4d Hooligans</Em> timer.
      </Text>
      <Panel textSize="small">
        <Text margin="small">
          This is why the how &amp; why is important. Without it, the GM can't get the stat right.
        </Text>
        <List spacing="none" margin="small">
          <List.Item>On a grim here, X would have happened.</List.Item>
          <List.Item>On a messy, Y would have happened.</List.Item>
          <List.Item>On a perfect, you could have...</List.Item>
        </List>
      </Panel>
      <Line />
      <Text>
        The fighter grabs the orc by the shirt and threatens him, but the orc's not budging. The GM
        makes his impact move—the price for the horses just doubled, and you all have nowhere near
        enough treasure.
      </Text>
      <Text>
        You step up and try a softer approach, negotiating with Presence at +1t from the price
        doubling. You roll 3d1t and get 4, 6, 6 - 7 :: <Strong>critical</Strong>! In spite of the
        price, your critical ignores the cut. You get the horses for the cost of the treasure and
        choose a secondary effect—you want to make sure this orc remains friendly permanently. The
        GM okays it and you're now friends with the best horse trader this side of the Ironback
        Mountains.
      </Text>
      <Panel textSize="small">
        <Text margin="small">For the critical, you could have chosen something else.</Text>
        <List spacing="none" margin="small">
          <List.Item>
            Greater effect would have gotten you the horses for a nominal price.
          </List.Item>
          <List.Item>
            Setup just doesn't make much sense in this situation, though if you were looking to rob
            the orc later, it might apply.
          </List.Item>
        </List>
      </Panel>
      <Line />
      <Text>
        You want to climb up this cliff to get away from the goblins shooting arrows at you. The GM
        has you roll Agility and adds a thorn to represent the goblins. You roll a 5 - 7 ::{" "}
        <Strong>grim</Strong>. Your messy gets cut by the 7 and turns into a grim. The GM lets you
        know you're getting an arrow in your back and falling back down the wall, ending up
        bloodied. You start gleefully narrating how horribly it goes.
      </Text>
      <Text>
        You decide to make a second attempt. This time, you spend spark and now have another thorn
        from being bloodied. You roll 2d2t and get 6, 3 - 7, 1 :: <Strong>messy</Strong>. The messy
        means you did it, so the GM thinks on the consequences and makes you rattled. That was one
        scary as hell climb. Once again, you get to narrating your near-demise.
      </Text>
      <Panel textSize="small">
        <Text margin="small">
          It's possible to roll again for the same thing, as long as the situation's changed. If
          nothing has changed, it shouldn't need a roll in the first place.
        </Text>
        <Text margin="small">
          One very important point is that messy is successful, it's just not pretty. Here the GM
          faces a bit of a dilemma—you're being shot at with arrows. If you took bloodied, you could
          have died. But you did make it to the top of the cliff. They went with rattled due to how
          terrifying it was, but bloodied could have worked as well. It's just that you would have
          been dropped at the top.
        </Text>
      </Panel>
      <Text>
        You call the guard over to distract him with chit-chat, rolling Presence and get 3, 6 ::{" "}
        <Strong>perfect</Strong>! This gives your rogue friend a chance to pick the lock. They spent
        a story point to have found some wire they could finagle into a makeshift lockpick, but
        using it on the lock is still +2t. They roll Agility, getting 3, 4, 2 - 7, 8 ::{" "}
        <Strong>disaster</Strong>! The messy (4) is cut by the thorns twice (7, 8) from a messy to a
        grim, then to a disaster. The lock opens, but the GM makes two impact moves here. The guard
        runs over, kicks the door, bloodies the rogue, and slams it shut, locking it.
      </Text>
      <Panel textSize="small">
        <Text margin="small">
          Without spending that story, the rogue wouldn't have even been able to pick the lock. Had
          the guard been watching, the difficulty (+3t) would have also prevented them from trying.
          These are the kinds of factors players and GMs must consider when judging rolls, and how
          thorns can affect the outcomes.
        </Text>
        <Text margin="small">
          At the end, the GM's second impact move comes from the disaster. In this case, the GM
          could have even dropped the rogue.
        </Text>
      </Panel>
      <Line />
      <Text>
        You want to cast a healing spell to remove an arrow from the rogue. The wizard and fighter
        assist. The GM decides you make the action roll, which ends up being a 2, 4, 1. The fighter
        rolls a 1 and the wizard a 6. The end result is 2, 4, 1, 1, 6 :: <Strong>perfect</Strong>!
      </Text>
      <Text>
        You start narrating. Your describe your healing spell going awry and things getting real
        bloody. The rogue starts fighting it and the fighter says they can't quite hold the
        squirrely rogue down. The wizard steps in with their enchantment magic and soothes the
        rogue, letting you finish your work.
      </Text>
      <Panel textSize="small">
        <Text margin="small">
          When you roll assists, all of the results are combined towards one outcome, but each
          person rolls their own dice.
        </Text>
        <Text margin="small">
          In this case, the healer is most important so they're leading the roll. If nobody had
          medical knowledge, the leader might have been the fighter—holding down the rogue now
          becomes vitally important.
        </Text>
        <Text margin="small">Post roll, be sure to narrate together!</Text>
      </Panel>
      <Line />
      <Text>
        As the session winds to a close, the GM calls for a montage roll to escape the collapsing
        dungeon. You're bloodied, so you have a thorn and roll 1, 1 :: 7, <Strong>disaster</Strong>.
        The wizard in your group rolls 2, 2 :: <Strong>grim</Strong>. The fighter rolls a 4, 2 ::{" "}
        <Strong>messy</Strong>! The best outcome is a messy, so the overall outcome is a messy. You
        manage to get out, but the impact move leaves you each with Agility and Presence marked. You
        collaborate on the narration.
      </Text>
      <Text>
        You already have an Agility mark, so it goes to Brawn—that's marked, too, so it goes to
        bloodied. Unfortunately, you were also bloodied so you're instead dropped. You make a 2d
        roll and get a <Strong>messy</Strong>, completely knocked out.
      </Text>
      <Text>
        The wizard describes getting everyone lost in the tunnels. You narrate collapsing from your
        wounds, telling the group to leave you behind. The fighter refuses, hoists you over their
        shoulder, and heads in a single direction—and somehow finds their way to the surface!
      </Text>
      <Text>
        Outside, the rogue stands waiting and cheekily asks what took you so long. They were
        elsewhere and got a perfect on their montage.
      </Text>
      <Panel textSize="small">
        <Text margin="small">
          After a long adventuring session is the perfect timing for a montage. Everyone has grown a
          bit tired of that location and want to move on to bigger things.
        </Text>
        <Text margin="small">
          Had the overall result here been a grim, it may have been a good idea to zoom in on a
          tough scene as they get caught fleeing the dungeon. The GM could have inflicted those
          marks, dropped your character even, then started the scene off.
        </Text>
        <Text margin="small">
          This is a good look at how damage escalates. If Brawn wasn't marked, you could have gotten
          away with just a mark even if you were already bloodied. Unfortunately, the adventure had
          taken a toll and just that last small hit was the straw that broke the camel's back.
        </Text>
        <Text margin="small">
          A 2d roll on dropped is a good default. That last hit was from a mark, so unlikely to have
          killed you. Even 3d would have been okay.
        </Text>
      </Panel>
      <Line />
      <Text>
        You're walking through the library at night when an assassin strikes from above. This could
        be Wits to see it coming, but the GM thinks it's more of a physical reaction, Agility. The
        GM makes it clear this is dire stakes—a grim means you're dropped, maybe dead!
      </Text>
      <Text>
        You take +1t since the assassin has the drop on you. You get 6, 1 - 8 ::{" "}
        <Strong>messy</Strong>! The knife misses and you don't end up bloodied, but Brawn gets
        marked as the assassin crashes into you, knocking the wind out of you. You're both sprawled
        out on the ground, the knife now between you. What do you do?
      </Text>
      <Panel textSize="small">
        <Text margin="small">
          The GM has a lot of flexibility in choosing the defense they want to test—and testing the
          stats is the best way of thinking about what's happening. The player has no choice in the
          stat, besides a soft veto on things that are very out of character.
        </Text>
        <Text margin="small">
          The GM could have made this Brawn if the assassin had tried to garrote them, or Wits if
          they didn't want to assume the assassin went unspotted. Presence is pretty hard to make
          sense of in this scenario, though.
        </Text>
      </Panel>
      <Line />
      <Text>
        You have a special pack of blessed incense you brought from your home temple. It's a{" "}
        <Em>4d resource pool</Em>. Each time you use it, it triggers a roll to see how much is
        remaining. The first time you use it, you roll 4d and get 6, 2, 6, 4. The 2 result drops the
        pool by 1, <Strong>4d→3d</Strong>. The next time you use it, you roll 3d and get 4 5 5.
        Nothing is dropped from the pool! While you did use it, the pool's an abstract measurement
        of how much is remaining and doesn't change this time. The final time, though, you roll 3d
        again and get 2 1 2, <Strong>3d→0d</Strong>. The pool depletes and you're out of incense!
      </Text>
      <Panel textSize="small">
        <Text margin="small">
          This is a really straightforward example of how pools work. If you were working against a
          task pool or trying to affect a timer with an action roll and it dropped nothing, remember
          that you instead get a secondary effect instead.
        </Text>
      </Panel>
      <Line />
      <Text>
        You and the cleric, as honored prisoners, are hauled out to join the chieftain at the head
        table. The GM has made it clear that the chieftain angers easily, so they start a 4d Temper
        pool. You find a chance during the meal to try to persuade the chieftain to let you go, but
        roll a <Strong>grim</Strong>. Annoyed with your badgering, they bash the table and gesture
        for the guards to haul you back to your tent. This triggers the Temper pool and the GM rolls
        1, 3, 1, 6 :: <Strong>4d→1d</Strong>. With just 1d left, the GM makes sure to describe the
        chieftain being on the edge of losing it. The cleric decides to keep their mouth shut.
      </Text>
      <Panel textSize="small">
        <Text margin="small">
          Pools can be very swingy, which is by design. Here we see things almost instantly move
          towards an incredibly tense situation. This is very cinematic.
        </Text>
        <Text margin="small">
          You might also end up with a much longer leash than you imagined if the pool doesn't drop
          much at all. Either way, it's clear that they had best tread lightly. Even when not
          rolled, pools have a great passive effect on scenes like this.
        </Text>
      </Panel>
      <Line />
      <Text>
        You look to your desire for <StrongEm>belonging</StrongEm> and, feeling found at last,
        replace it with a new one—
        <StrongEm>honor</StrongEm>. You introduce a tangle, deciding to stay on the bridge. “Go,”
        you tell your friends, turning to hold off the horde on the bridge while they escape.
      </Text>
      <Panel textSize="small">
        <Text margin="small">
          While traits and desires don't give spark directly, they do give you vantage to add
          tangles. When they change, you should also let your group see it play out.
        </Text>
      </Panel>
      <Line />
      <Text>
        The heir must survive as the battle turns into a rout. Just then, you introduce a tangle—you
        spot your nemesis, Mortica, across the battlefield. By choosing the tangle, you risk the
        mission to protect the heir, but your vengeance is more important. You take spark.
      </Text>
      <Text>
        The GM decides to make a 2d story roll and lets you know first what might happen. On a
        perfect, you spot her first. On a grim, she spots you first. On a messy, you both spot each
        other.
      </Text>
      <Panel textSize="small">
        <Text margin="small">
          Here we see the player introducing story details via a tangle instead of using story,
          which is completely fine.
        </Text>
        <Text margin="small">
          On a perfect, you might also consider another tangle—to wait until Mortica sees her to
          engage honorably. Mortica, however, would definitely blindside you with an impact move on
          that grim.
        </Text>
      </Panel>
      <Line />
      <Text>
        Fleeing from a massive cave troll, you spend story and invoke your Dwarf of the Deepmoot
        heritage's underground navigation wise. You say you spot a tight side tunnel to lead the
        troll in to fight it. The GM decides the cave troll can't maneuver well and +2t becomes +1t.
      </Text>
      <Panel textSize="small">
        <Text margin="small">
          A cave troll is massively dangerous, +2t, but if it can't maneuver well, it's only kind of
          dangerous. Story can definitely be used to gain mechanical advantage like this.
        </Text>
      </Panel>
      <Line />
      <Text>
        You start the game with the character arcs Enjoy Life and Keep a Secret, which makes sense
        since you're the runaway heir to the Orchard Kingdom. Your job is to find ways to express
        these arcs through play, especially growth arcs like <StrongEm>Enjoying Life</StrongEm>. The
        GM's job is to challenge them and offer opportunity, especially a crisis arc like{" "}
        <StrongEm>Keeping a Secret</StrongEm>. It's clear that you don't want to live a life of
        responsibility, but that life will come calling whether you like it or not.
      </Text>
      <Panel textSize="small">
        <Text margin="small">
          The game will hum along just fine without story arcs. They're a player tool that expands
          vantage and lets you push the story towards what you want to be doing. They tell the GM,
          and other players, that you are interested in these themes.
        </Text>
        <Text margin="small">If they fit your play style well, lean into them.</Text>
      </Panel>
      <Line />
      <Text>
        As you enter the small city, you remember your Settle Debts story arc and want to explore
        it. You spend story and declare that the father you never knew is here and you've carried
        this chip on your shoulder a long time—now's the time to confront him.
      </Text>
      <Text>
        Through play, you learn that your father has become a benevolent guild leader in the city,
        looked up to by all. Not very interested in bringing down someone helpful to the community,
        you bury the feelings and move on. You take spark for finishing the arc.
      </Text>
      <Panel textSize="small">
        <Text margin="small">
          Here, you don't use a tangle, instead opting to spend story. Tangles are always bad, while
          story just makes things happen.
        </Text>
        <Text margin="small">
          Arcs aren't prescriptive. They don't have any ending in mind. Whether you accomplish it,
          end it through failing at it, or just give up on it, you take spark as your character
          finds something new to drive them.
        </Text>
      </Panel>
      <Line />
      <Text>
        You want to spend story to add a detail about the guard dozing off to create a new
        opportunity to sneak in, but the GM vetoes it—they established earlier that the Toadking
        runs a very disciplined army. While not impossible to occur, it still feels off.
      </Text>
      <Panel textSize="small">
        <Text margin="small">
          Hunting for mechanical advantage with story is okay, but it's best used to enable scenes
          you want to explore and bypass those you don't. Still, the Toadking says you have to deal
          with the guards here.
        </Text>
      </Panel>
      <Line />
      <Text>
        Your party meets with the archmage, who reveals a dark secret about your past. The GM
        targets your Presence to keep it together, adding a thorn—the secret is especially damning.
        You roll 4, 1, 5 - 7 :: <Strong>grim</Strong>. You're overwhelmed by memories, becoming
        rattled but choose to spend spark to take vex instead!
      </Text>
      <Text>
        Now you have a choice. You could <StrongEm>fight</StrongEm> and attack the archmage in a
        rage, someone your party sees as an ally. You could <StrongEm>flight</StrongEm> away from
        the group, back outside the tower. You could <StrongEm>freeze</StrongEm>, dropping the
        potion you intended to give the archmage. You could <StrongEm>freakout</StrongEm>, lashing
        out at your allies' shocked, judgmental stares.
      </Text>
      <Panel textSize="small">
        <Text margin="small">
          Rattled can be quite debilitating and vex is an easy out if you have spark, but it does
          come with the consequences—you have to play true and follow through in a way that makes
          sense.
        </Text>
        <Text margin="small">
          Also, don't forget that you take +1t when you follow through due to the emotional turmoil!
          Not all vex responses require an action roll, though.
        </Text>
      </Panel>
      <Line />
      <Text>
        The dragon roars! The party all roll Presence defense, getting <Strong>grims</Strong>.
        Everyone takes vex, terrified! You choose <StrongEm>flight</StrongEm> and scurry away to
        hide. The fighter decides to <StrongEm>freakout</StrongEm>, and runs to hide behind the
        wizard. The wizard <StrongEm>freezes</StrongEm>, dropping her spellbook, which the fighter
        kicks away. The cleric grabs his battlehammer and chooses to <StrongEm>fight</StrongEm>,
        charging towards certain doom.
      </Text>
      <Panel textSize="small">
        <Text margin="small">
          Vex gives a chance to really double down on who your character is or go in the exact
          opposite direction with something surprising. Either way, it's a big open door to
          roleplaying.
        </Text>
      </Panel>
    </Page>
  );
};

export default Chapter01;
