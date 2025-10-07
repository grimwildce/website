import Page, { type PageNavigationItem } from "@/components/app/Page";
import Battleground from "@/components/Battleground";
import CampaignPool from "@/components/CampaignPool";
import Challenge from "@/components/Challenge";
import ChallengeSuspense from "@/components/ChallengeSuspense";
import SectionHeading from "@/components/SectionHeading";
import Em from "@/components/ui/Em";
import Grid from "@/components/ui/Grid";
import Heading from "@/components/ui/Heading";
import Line from "@/components/ui/Line";
import List from "@/components/ui/List";
import Move from "@/components/ui/Move";
import Muted from "@/components/ui/Muted";
import Panel from "@/components/ui/Panel";
import Stack from "@/components/ui/Stack";
import Strong from "@/components/ui/Strong";
import StrongEm from "@/components/ui/StrongEm";
import Table from "@/components/ui/Table";
import Text from "@/components/ui/Text";
import { faBurst, faExclamation, faQuestion } from "@fortawesome/free-solid-svg-icons";

const navigation: PageNavigationItem[] = [
  { name: "Running Grimwild", anchor: "#running-grimwild" },
  {
    name: "GM Rules",
    anchor: "#gm-rules",
    children: [
      { name: "Challenges", anchor: "#challenges" },
      { name: "Vigilance", anchor: "#vigilance" },
      { name: "Combat Kit", anchor: "#combat-kit" },
      { name: "Running Combats", anchor: "#running-combats" },
      { name: "Factions", anchor: "#factions" },
      { name: "GM with Moxie", anchor: "#gm-with-moxie" }
    ]
  },
  { name: "Examples of Play", anchor: "#examples-of-play" }
];

const Chapter02 = () => {
  return (
    <Page
      bookTitle="Grimwild Community Edition"
      title="GM Toolkit"
      pretitle="Chapter 2:"
      navigation={navigation}
    >
      <Heading level={2} id="running-grimwild">
        Running Grimwild
      </Heading>
      <Text>
        As the GM, you play the game by a different set of rules, utilizing the tools laid out in
        this chapter to craft an engaging and dynamic game. You wield GM moves and suspense to drive
        the narrative forward, challenges to model difficult tasks, the combat kit to create
        thrilling battles, and story rolls along with the GM crucible for inspiration when the
        unexpected arises.
      </Text>
      <Text>
        Your primary role is mapping fiction to mechanics, keeping the players immersed in the story
        while you seamlessly weave the rules into the narrative, and know when to instead ditch a
        rule and just let the narrative take over.
      </Text>
      <Text>
        Above all, be creative. Use the mechanics as a springboard to manufacture drama, tension,
        and memorable moments.
      </Text>
      <Text>
        <Strong allCaps>Story Rolls</Strong>. Roll to disclaim decision-making, letting the dice
        decide story questions when you don't want to, like an NPC's reaction, off-screen action, or
        how good or bad something that just happened is. You can also collapse any rule back to a
        story roll when there's no specific mechanic to map it to.
      </Text>
      <Text>
        Roll dice based on the odds of a favorable outcome for the chosen perspective.{" "}
        <Em>Are you rolling for the fish or the fisherman?</Em>
      </Text>
      <Panel border>
        <Table align="center" margin="small" variant="columns" fullWidth>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <StrongEm>1d Bad Odds</StrongEm>
              </Table.Cell>
              <Table.Cell>
                <StrongEm>2d Even Odds</StrongEm>
              </Table.Cell>
              <Table.Cell>
                <StrongEm>3d Good Odds</StrongEm>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Panel>
      <Panel border>
        <List margin="small">
          <List.Item>
            <Strong allCaps>Perfect</Strong>. It's the ideal situation.
          </List.Item>
          <List.Item>
            <Strong allCaps>Messy</Strong>. It's okay, but there's a catch.
          </List.Item>
          <List.Item>
            <Strong allCaps>Grim</Strong>. It's not good, and now it's a problem.
          </List.Item>
        </List>
      </Panel>

      <Panel title="GM Crucible" description="Roll 2, smash them together, and interpret.">
        <Panel.Row>
          <Table textSize="small" padding="tight" margin="none" fullWidth>
            <Table.Body>
              <Table.Row>
                <Table.Cell>tough</Table.Cell>
                <Table.Cell>quiet</Table.Cell>
                <Table.Cell>precarious</Table.Cell>
                <Table.Cell>wild</Table.Cell>
                <Table.Cell>mysterious</Table.Cell>
                <Table.Cell>rustic</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>muffled</Table.Cell>
                <Table.Cell>aged</Table.Cell>
                <Table.Cell>romantic</Table.Cell>
                <Table.Cell>menacing</Table.Cell>
                <Table.Cell>puzzling</Table.Cell>
                <Table.Cell>eerie</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>broken</Table.Cell>
                <Table.Cell>dwindling</Table.Cell>
                <Table.Cell>distant</Table.Cell>
                <Table.Cell>perilous</Table.Cell>
                <Table.Cell>bleak</Table.Cell>
                <Table.Cell>tense</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>forgotten</Table.Cell>
                <Table.Cell>abundant</Table.Cell>
                <Table.Cell>hidden</Table.Cell>
                <Table.Cell>withered</Table.Cell>
                <Table.Cell>chaotic</Table.Cell>
                <Table.Cell>looming</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>festive</Table.Cell>
                <Table.Cell>lost</Table.Cell>
                <Table.Cell>immense</Table.Cell>
                <Table.Cell>serene</Table.Cell>
                <Table.Cell>vibrant</Table.Cell>
                <Table.Cell>flickering</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>rugged</Table.Cell>
                <Table.Cell>splintered</Table.Cell>
                <Table.Cell>sacred</Table.Cell>
                <Table.Cell>relentless</Table.Cell>
                <Table.Cell>tangled</Table.Cell>
                <Table.Cell>twisted</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Panel.Row>
        <Panel.Row>
          <Table textSize="small" padding="tight" margin="none" fullWidth>
            <Table.Body>
              <Table.Row>
                <Table.Cell>journey</Table.Cell>
                <Table.Cell>juncture</Table.Cell>
                <Table.Cell>rift</Table.Cell>
                <Table.Cell>scheme</Table.Cell>
                <Table.Cell>nexus</Table.Cell>
                <Table.Cell>team</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>tremor</Table.Cell>
                <Table.Cell>debris</Table.Cell>
                <Table.Cell>symbol</Table.Cell>
                <Table.Cell>scar</Table.Cell>
                <Table.Cell>archive</Table.Cell>
                <Table.Cell>chasm</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>sanctuary</Table.Cell>
                <Table.Cell>betrayal</Table.Cell>
                <Table.Cell>trail</Table.Cell>
                <Table.Cell>wasteland</Table.Cell>
                <Table.Cell>help</Table.Cell>
                <Table.Cell>mystery</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>peak</Table.Cell>
                <Table.Cell>threshold</Table.Cell>
                <Table.Cell>boundary</Table.Cell>
                <Table.Cell>beacon</Table.Cell>
                <Table.Cell>secret</Table.Cell>
                <Table.Cell>wall</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>territory</Table.Cell>
                <Table.Cell>rumor</Table.Cell>
                <Table.Cell>standoff</Table.Cell>
                <Table.Cell>strife</Table.Cell>
                <Table.Cell>maze</Table.Cell>
                <Table.Cell>pact</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>dilemma</Table.Cell>
                <Table.Cell>tradition</Table.Cell>
                <Table.Cell>jackpot</Table.Cell>
                <Table.Cell>omen</Table.Cell>
                <Table.Cell>deception</Table.Cell>
                <Table.Cell>illusion</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Panel.Row>
      </Panel>
      <Grid margin="large">
        <Panel margin="none">
          <Text margin="small">
            <StrongEm>What's inside the temple?</StrongEm>
            <br />
            Roll: <Em>aged + beacon</Em>
            <br />
            Interpret: <Em>Forgotten artifact</Em>
          </Text>
        </Panel>
        <Panel margin="none">
          <Text margin="small">
            <StrongEm>Why is the village so quiet?</StrongEm>
            <br />
            Roll: tense + scheme
            <br />
            Interpret: Plotting rebellion
          </Text>
        </Panel>
        <Panel margin="none">
          <Text margin="small">
            <StrongEm>What caused the havoc?</StrongEm>
            <br />
            Roll: <Em>flickering + rift</Em>
            <br />
            Interpret: <Em>Demonic portal</Em>
          </Text>
        </Panel>
      </Grid>
      <Text>
        A forge for inspiration, encouraging emergent, low-prep gameplay. Turn to the GM crucible,
        often along with a story roll, when you want the seed of an idea to expand upon to help
        answer questions about the story. Roll once on each table. Each roll gives two results{" "}
        <Muted>(3, 1 = 31: precarious or 13: broken)</Muted>. Let your mind drift towards the most
        evocative, then drill down on it and interpret what it might mean.
      </Text>
      <Heading level={2} id="gm-rules">
        GM Rules
      </Heading>
      <Text>
        <Strong allCaps>GM Moves</Strong>. A framework for good GMing practices and{" "}
        <StrongEm>the rules that you (the GM) play by</StrongEm>. While they can be called out
        specifically, they typically sit in the background left unsaid, aligning naturally with what
        you do as GM.
      </Text>
      <List>
        <List.Item>
          <StrongEm>Story moves</StrongEm> set up scenes and pace the game. They hint at problems
          and give players a chance to react to what's happening.{" "}
          <Em>Make these moves as you like at any time</Em>.
        </List.Item>
        <List.Item>
          <StrongEm>Suspense moves</StrongEm> help the players out in some way or escalate tension.{" "}
          <StrongEm>Take suspense when used</StrongEm>. <Em>Make these moves with good timing</Em>.
        </List.Item>
        <List.Item>
          <StrongEm>Impact moves</StrongEm> deal significant consequences, crank up the tension, and
          make the world feel powerful. <Em>Make these moves when prompted</Em>.
        </List.Item>
      </List>
      <Text>
        <Strong allCaps>Prompt</Strong>. A trigger for you to make an impact move, caused by things
        like grim or messy action rolls, a relevant depleted pool, an unaddressed{" "}
        <Move>Foreshadow</Move> move, or by spending suspense
      </Text>
      <Text>
        <Strong allCaps>Suspense</Strong>. <Em>Pure rising tension and cinematic timing</Em>. Gain
        suspense by skipping a prompted impact move or making a suspense move. Spend it to prompt an
        impact move at any time.
      </Text>
      <Text>
        Skipping an impact move feels like the PCs got off lucky—something <Em>should</Em> have
        happened, but didn't. That lingering suspense builds tension, ready to strike later. Use
        this when no immediate move feels compelling or when you want to shift focus to other
        scenes.
      </Text>
      <SectionHeading variant="solid">Hit With Impact</SectionHeading>
      <Text>
        <Strong allCaps>Consequences</Strong>. What happens when things go wrong—from failed rolls,
        timers, or impact moves. They should feel <StrongEm>hard but fair</StrongEm>, reflecting the
        stakes and severity of the situation. Every roll carries risk; otherwise, assume success and
        move on.
      </Text>
      <Text>
        Damage is a solid baseline: in a fight, injuries leave you bloodied by default. Other
        consequences, even narrative ones, should sting just as much. There's no strict formula—
        <Em>it's a gut feeling</Em>. Let the fiction guide you, and make sure to give the fiction
        its teeth.
      </Text>
      <Text>
        <StrongEm>You can split consequences, breaking big consequences into smaller ones</StrongEm>
        . Multiple effects can be just as effective and make more sense in the situation. You might
        break up bloodied into a few marks, or rattled becoming vex and rolling a pool instead.
        Splits make the story move in multiple directions.
      </Text>
      <Text>
        You can also spread consequences, hitting multiple PCs, nearby NPCs, or even a PC who didn't
        prompt the move. Consequences can be identical, vary in severity, or differ entirely. If a
        PC other than the one prompting it is hit, they get a defense roll. Spreads make the impact
        feel broader and pulling more people into a dynamic scene.
      </Text>
      <Text>
        <Strong allCaps>Thinking Offscreen</Strong>. Fallout that happens beyond the immediate
        action. Not all consequences need to occur in the spotlight. Hitting elsewhere builds
        tension, hastens incoming trouble, or creates missed opportunities. These unseen events make
        the world feel alive, adding depth beyond the present moment.
      </Text>
      <Text>
        <Strong allCaps>Using Pools</Strong>. Building pressure with danger or timer pools. Start or
        pressure or timer pool as another outlet for consequences, often{" "}
        <StrongEm>offscreen</StrongEm>. These create looming threats and situations the PCs want to
        avoid or mitigate. They build pressure and offer a strong alternative to skipping the move
        and banking suspense.
      </Text>
      <Text>
        <Strong allCaps>Stakes</Strong>. Framing danger when it's not the default. Most rolls assume
        meaningful consequences. Declaring <Strong>dire stakes</Strong> before a roll or situation
        signals severe stakes—death or worse looms <Muted>(an assassin strikes)</Muted>.{" "}
        <Strong>Tame stakes</Strong> shifts outcomes into lighter territory, rolling for things
        you'd normally skip, with softer consequences <Muted>(a cat's stuck in a tree)</Muted>. It's
        a tool for tone, moving between intense and light play.
      </Text>
      <Text>
        <Strong allCaps>Taking Suspense</Strong>. When nothing comes to mind, skip the impact move
        and take suspense instead!
      </Text>
      <Panel title="Story Moves" description="Use these moves anytime." border>
        <List margin="small">
          <List.Item>
            <Strong smallCaps>Foreshadow</Strong>: Hint at trouble, sometimes with a timer pool.
            Prompts a later impact move.
            <br />
            <Muted>
              “The wizard narrows his eyes angrily as you enter.” • “You hear hoofbeats coming, a 4d
              timer.”
            </Muted>
          </List.Item>
          <List.Item>
            <Strong smallCaps>Question</Strong>: Ask provocative questions to stir up drama or flesh
            out the world.
            <br />
            <Muted>
              “Why did you let them kill that bandit?” • “What do you say about the queen as you sit
              around the fire?”
            </Muted>
          </List.Item>
          <List.Item>
            <Strong smallCaps>Set the Scene</Strong>: Use a story roll to determine how a scene
            starts off when it's unclear.
            <br />
            <Muted>
              “All seem in festive spirits in the great hall.” • “All eyes coldly turn as you enter
              the great hall.”
            </Muted>
          </List.Item>
          <List.Item>
            <Strong smallCaps>Spotlight</Strong>: Focus attention on a PC, encouraging them to act
            or follow-up.
            <br />
            <Muted>
              “You've been quiet for a bit—what are you up to?” • “The crone's eyes lock onto yours,
              expecting an answer.”
            </Muted>
          </List.Item>
          <List.Item>
            <Strong smallCaps>Wrap It Up</Strong>: Call for a montage roll or jump to a likely
            conclusion to a scene.
            <br />
            <Muted>
              “Let's montage your escape from the collapsing dungeon.” • “Okay, you finish mopping
              up the goblin rabble.”
            </Muted>
          </List.Item>
        </List>
      </Panel>
      <Text>
        <Strong allCaps>Story Moves</Strong>. Keep the narrative flowing, the action engaging, and
        get things moving when they stall out. Player actions drive the story, and story moves nudge
        them forward. That doesn't mean the world is passive—you can describe anything happening
        that makes sense. However, from a story and gameplay perspective, it's more satisfying when
        the players have <StrongEm>fair warning</StrongEm> about trouble. They know actions have
        consequences and suspense you've earned can come back to bite them. This feels fair, so
        outside of these you give them the initiative. It shows things aren't arbitrary—
        <StrongEm>the GM is also playing the game, just by different rules</StrongEm>
        .****
      </Text>
      <Panel>
        <Text margin="small">
          <Strong smallCaps>Foreshadow</Strong> to signal upcoming threats and give the players a
          chance to react. This is a great way to introduce adversity when you don't have or want to
          spend suspense. If they fail to deal with it or ignore the danger, it prompts an impact
          move and the pace of the story picks up.
        </Text>
        <Text margin="small">
          <Strong smallCaps>Question</Strong> players to help suss out what kind of story they're
          interested in, share the creative load, and keep the story fresh for yourself. Try to keep
          this focused on their character's perspective, but feel free to dip into the meta channel
          here and talk directly as players about what you all want to see play out in game.
        </Text>
        <Text margin="small">
          <Strong smallCaps>Spotlight</Strong> PCs to help direct the action, ensure no one is left
          out, and put focus where it's needed. This prompts players towards action. Mix in
          cinematic language like “<Em>We cut to…</Em>” or “<Em>The camera pans over to show…</Em>”
          as you use the “camera”, your group's shared imagination space. Cut back and forth between
          PCs and scenes to build tension and avoid focusing on a single PC for too long.
        </Text>
        <Text margin="small">
          <Strong smallCaps>Set the Scene</Strong> when you're unsure about the specifics of the
          current fiction or want to dive straight into the action. Skip detailed planning and
          cautious leadups that often drag gameplay down. Instead,{" "}
          <StrongEm>jump straight into the action</StrongEm>, an in medias res shot of things
          already in motion! The roll sets the opening mood and stakes for the scene. On a grim, it
          can even trigger an impact move, kicking things off with a bang and raising tension right
          away.
        </Text>
        <Text margin="small">
          <Strong smallCaps>Wrap It Up</Strong> when a scene has served its purpose, grown stale, or
          feels like a foregone conclusion. Don't waste game time on these. Closing these scenes out
          decisively keeps the narrative tight and focuses on what's next.
        </Text>
      </Panel>
      <Panel title="Suspense Moves" description="Use these moves with cinematic timing." border>
        <List margin="small">
          <List.Item>
            <Strong smallCaps>Bridge</Strong>: Resolve a problem the PCs face or use exposition to
            connect some dots. <br />
            <Muted>
              “You hear from above, 'Need some help down there?'” • “It suddenly makes sense—the
              baron is a vampire.”
            </Muted>
          </List.Item>
          <List.Item>
            <Strong smallCaps>Build Up</Strong>: Give spark to each PC, who give a brief vignette
            before upcoming action. <br />
            <Muted>
              “The dragon roars in its lair. Let's do a buildup.” • “What does it look like as you
              enter the masquerade?”
            </Muted>
          </List.Item>
          <List.Item>
            <Strong smallCaps>Cutaway</Strong>: Narrate an info-rich scene elsewhere, clueing the
            players in.
            <br />
            <Muted>
              “In a distant village, a strange sickness begins to spread.” • “Meanwhile, we see
              shadows climbing the walls.”
            </Muted>
          </List.Item>
          <List.Item>
            <Strong smallCaps>Entangle</Strong>: Propose an interesting tangle to a PC. Take
            suspense only if they accept. <br />
            <Muted>
              “He looks at you with a smirk, daring you to speak up.” • “The prisoner knows where
              your mother is.”
            </Muted>
          </List.Item>
          <List.Item>
            <Strong smallCaps>Recap</Strong>: Summarize the last session or events further in the
            past.
            <br />
            <Muted>
              “Okay, so last time you wrecked that keep.” • “Remember when you let that bandit go?”
            </Muted>
          </List.Item>
        </List>
      </Panel>
      <Text>
        <Strong allCaps>Suspense Moves</Strong>. Create familiar moments inspired by TV shows,
        incentivizing you mechanically to take the time to structure the story cinematically.{" "}
        <StrongEm>You earn suspense</StrongEm>, so they reward you for handling some of the tedium
        of GMing and remind players to stay engaged. Suspense keeps the world active when things
        stall. When your supply of suspense runs dry, you can use these to jumpstart the action
        again. However, use them carefully—
        <StrongEm>overuse</StrongEm> can get frustrating for players, so pick your spots. But{" "}
        <StrongEm>timely</StrongEm> use makes good, cinematic sense.
      </Text>
      <Panel>
        <Text margin="small">
          <Strong smallCaps>Bridge</Strong> a scene when players are stuck, backed into a corner, or
          a scene feels dull. It provides a quick out and moves the story forward. Normally, it
          would feel like an unearned freebie, the suspense you gain makes it a{" "}
          <StrongEm>fair trade</StrongEm>. Never use it when players are engaged—save it for when
          it's needed.
        </Text>
        <Text margin="small">
          <Strong smallCaps>Build Up</Strong> to focus in tight on your PCs, and to create moments
          that set the stage for major events. These vignettes, whether a quiet campfire scene or
          tense moment before a battle, give players a chance to add depth and feeling to their
          characters that might get overlooked, and the “<StrongEm>free</StrongEm>” spark they gain
          lets them know that what's ahead is going to be a real challenge.
        </Text>
        <Text margin="small">
          <Strong smallCaps>Cutaway</Strong> to clue players in on the bigger picture, like a TV
          show scene. Show villains plotting, armies marching, or even positive events. It's more
          fun when players know what's happening and they can steer their PCs' actions toward that
          drama, even if their characters don't explicitly know about it.
        </Text>
        <Text margin="small">
          <Strong smallCaps>Entangle</Strong> a player by proposing a juicy tangle for their PC.
          Push <StrongEm>dilemmas</StrongEm> and <StrongEm>drama</StrongEm> towards their traits,
          desires, bonds, and story arcs. The players pick them because they want the choices that
          come with! When you have a great idea, propose a tangle for a PC. Remember you only gain
          suspense if they accept, so it's up to you to make the tangle irresistible. Don't push
          hard—this mechanic is built to respect player agency. Don't punish for saying no.
        </Text>
        <Text margin="small">
          <Strong smallCaps>Recap</Strong> at the start of each session to get everyone on the same
          page. Hearing the last session's events builds tension for what's to come. The suspense
          you gain can immediately push the action, or hang over their heads. If a player wants to
          recap, skip taking the suspense! You can also use a mid-session <Move>Recap</Move> to
          remind players of a vital piece of information they've forgotten.
        </Text>
      </Panel>
      <Panel title="Impact Moves" description="Use these moves when prompted." border>
        <List margin="small">
          <List.Item>
            <Strong smallCaps>Complicate Things</Strong>: Escalate a situation, introduce a new
            problem, or pressure a bond. <br />{" "}
            <Muted>
              “A huge storm rolls in.” • “The guard catches sight of you and rings the alarm bell.”
            </Muted>
          </List.Item>
          <List.Item>
            <Strong smallCaps>Counter</Strong>: Deny things a PC can always do or negate something
            they did.
            <br />{" "}
            <Muted>
              “The lich casts a quick protective spell, slowing your strike.” • “The queen raises a
              hand, silencing everyone.”
            </Muted>
          </List.Item>
          <List.Item>
            <Strong smallCaps>Force a Choice</Strong>: Present tough options, with room to only
            choose one.
            <br />{" "}
            <Muted>
              “Your gold pouch and sword slide towards the lava.” • “Now's the choice—the prince or
              the marquis?”
            </Muted>
          </List.Item>
          <List.Item>
            <Strong smallCaps>Hit 'Em Hard</Strong>: Inflict damage on a PC, like bloodied, rattled,
            vex, marks, or a condition. <br />{" "}
            <Muted>
              “The ceiling collapses, raining rocks down on you.” • “She smirks wickedly at you—take
              vex, you're pissed.”
            </Muted>
          </List.Item>
          <List.Item>
            <Strong smallCaps>Lock It In</Strong>: Declare something occurs, closing off immediate
            attempts to change it. <br />{" "}
            <Muted>
              “The thief gets away, nowhere to be seen. • “The bridge behind you collapses. No going
              back.”
            </Muted>
          </List.Item>
        </List>
      </Panel>
      <Text>
        <Strong allCaps>Impact Moves</Strong>. Deliver hard-hitting consequence that challenge PCs
        and push the action forward. They require prompting, so when you use them, they're sure to
        be justified and fair, codified into the rules. They've had fair warning and should have an
        idea of the risks. So when you make a move, make sure it has <Strong allCaps>impact</Strong>{" "}
        to ensure the choices leading to them matter and the world feels powerful.
      </Text>
      <Text>
        When not prompted by a roll, impact moves directly against a PC give them a defense roll.
        Some talents also give the ability to interrupt impact moves, possibly negating them. If the
        roll to interrupt is a messy, you take suspense or keep it if you spent it to prompt the
        move.
      </Text>
      <Panel>
        <Text margin="small">
          <Strong smallCaps>Complicate Things</Strong> to add twists and elevate drama. Use it when
          things feel too stable or you want things to be even more chaotic than they already are.
          It's also great for adding a thorn to a roll by introducing sudden environmental
          obstacles, a great outlet for extra suspense that doesn't introduce new drama.
        </Text>
        <Text margin="small">
          <Strong smallCaps>Counter</Strong> to make the world tenaciously formidable, showing that
          it won't just roll over. You can stop anything a PC does, including successful action
          rolls, talents they “always” have permission to use and extra vigilance. If they use a
          talent that costs them resources, they generally don't have to expend that resource (your
          call) but can't quickly use it again. However, this can never be used to stop defense
          rolls and criticals—don't steal their thunder. Be careful, players get frustrated if their
          victories and advantages are snatched away, so use it in interesting ways and make sure
          the spotlight works its way back to them after you take advantage of the moment.
        </Text>
        <Text margin="small">
          <Strong smallCaps>Force A Choice</Strong> to present stark, binary decisions that they
          can't their way out of. This move offers no easy way out. When you use it, make sure to
          follow through without softening the impact. This adds a real cinematic edge, reflecting
          the truly difficult decisions protagonists must face.
        </Text>
        <Text margin="small">
          <Strong smallCaps>Hit 'Em Hard</Strong> when you need to inflict direct consequences.
          Whether it's damage, betrayal, or loss, this move underscores the seriousness of the
          situation. It's a heavy reminder that the world pushes back against their actions. When
          you use it, you should be hitting them just as hard as they're trying to hit the world.
        </Text>
        <Text margin="small">
          <Strong smallCaps>Lock It In</Strong> to definitively close off an opportunity and close
          out a scene that's threatening to drag on. Players can be tenacious and keep trying to
          find some way to not be defeated. This puts a definitive end to a situation. It makes
          follow-up attempts impossible, which refocuses players' attention forward rather than
          trying to find yet another way to attempt something they've already failed at.
        </Text>
      </Panel>
      <Heading level={3} id="challenges">
        Challenges
      </Heading>
      <Text>
        <Strong allCaps>Challenges</Strong>. A framework to represent <StrongEm>tasks</StrongEm>,{" "}
        <StrongEm>obstacles</StrongEm>, <StrongEm>enemies</StrongEm>, and{" "}
        <StrongEm>scenarios</StrongEm> that have greater tenacity and complexity than a single
        action can accomplish. <Strong>Challenges</Strong> allow you to track progress towards them,
        but also proactively oppose the PCs. Each has <StrongEm>2 bonus suspense</StrongEm> to be
        spent on moves relating to it, and a <StrongEm>task pool</StrongEm> to represent its
        tenacity or complexity. They can also have:
      </Text>
      <List>
        <List.Item>
          <Strong>Traits</Strong> (✱): Qualities they have with strong narrative impact, inflicting
          thorns, denying permissions, or changing vantage.
        </List.Item>
        <List.Item>
          <Strong>Moves</Strong> (◉): Suggested impact moves they might make. These are examples,
          not limitations
        </List.Item>
        <List.Item>
          <Strong>Fail State</Strong> (✘): A trigger that signals the challenge failed, like a
          competing timer pool or a specific event. It prompts <Move>Lock It In</Move>.
        </List.Item>
      </List>
      <Text>
        Interpret these short, evocative phrases as fit the situation. Keep your own created
        challenges similarly brief and flexible. Some uses:
      </Text>
      <List>
        <List.Item>
          Create a dangerous enemy or exceptionally tough task.
          <br />
          <Muted>Navigate a mountain pass. Fight the rogue wizard. Make the mayor pay up.</Muted>
        </List.Item>
        <List.Item>
          Zoom in on pivotal moments. Disable a complex trap.
          <br />
          <Muted>Complete the ritual. Court the prince.</Muted>
        </List.Item>
        <List.Item>
          Zoom out to collapse related tasks into one objective.
          <br />
          <Muted>Evade castle guards. Track down the criminals. Organize a mutiny.</Muted>
        </List.Item>
        <List.Item>
          Turn a broad concept into an actionable objective.
          <br />
          <Muted>
            Restore the desecrated temple. Secure enough alliances. Atone for your sins.
          </Muted>
        </List.Item>
      </List>
      <Grid>
        <Challenge
          title="Navigate Channel"
          poolSize={8}
          traits={["Shark-infested waters", "Treacherous currents"]}
          moves={["Graze Reef", "Violent Winds", "Dense Fog"]}
          failState="6d Storm Blows In"
          textSize="small"
          margin="small"
        />
        <Challenge
          title="Trial by Ordeal"
          poolSize={8}
          traits={["Increasingly difficult", "Benevolent chieftain"]}
          failState="Roll a grim"
          textSize="small"
          margin="small"
        />
        <Challenge
          title="Escaping Thief"
          poolSize={6}
          moves={["Blend Into Crowd", "Narrow Alleys", "Street Musicians"]}
          textSize="small"
          margin="small"
        />
        <Challenge
          title="Stop the Ritual"
          poolSize={6}
          failState="4d Ritual Completed"
          textSize="small"
          margin="small"
        />
      </Grid>
      <SectionHeading variant="solid">Building Challenges</SectionHeading>
      <List variant="ordered">
        <List.Item>
          <StrongEm>Assign a task pool</StrongEm> (4d, 6d, 8d) for its tenacity.
        </List.Item>
        <List.Item>
          <StrongEm>Add traits</StrongEm> (1 or 2) that shape the situation. Skip the obvious{" "}
          <Muted>(storm is windy)</Muted> and highlight what matters{" "}
          <Muted>(strong winds are blinding)</Muted>. Keep them brief and evocative.
        </List.Item>
        <List.Item>
          <StrongEm>List short, punchy moves</StrongEm> (2 or 3) with flexible interpretations.
          These are examples, not limits. You can spend bonus suspense on other moves, or trigger
          these when an impact move is prompted by something else.
        </List.Item>
        <List.Item>
          <StrongEm>Define a fail state</StrongEm>, a specific trigger that pre vents that challenge
          from being accomplished. Avoid obvious outcomes <Muted>(dying in a fight)</Muted> and
          focus on what creates tension <Muted>(breaking a code of honor)</Muted>. Players should
          know the fail state unless mystery is part of the fun—and even then, make it clear one is
          in play.
        </List.Item>
      </List>
      <Text>
        <Strong>Note</Strong>: <Em>Not all of these parts are needed for a challenge.</Em>
      </Text>
      <SectionHeading variant="solid">Using Challenges</SectionHeading>
      <Text>
        Challenges are for moments of narrative importance. They make whatever you assign them to a
        proactive element in the story. Use them to spotlight what's happening—not because it's
        harder, but because it deserves proper screen time and presence. Introduce challenges at
        times like:
      </Text>
      <List>
        <List.Item>
          An impact move is prompted.
          <br />
          <Muted>
            The sleeping dragon wakes up. They fail to reach the pass before winter. The dying
            goblin blows the horn.
          </Muted>
        </List.Item>
        <List.Item>
          You <Move>Foreshadow</Move> to give fair warning.
          <br />
          <Muted>
            Drumming from the deep. Wind blows out the torches. There are signs of battle.
          </Muted>
        </List.Item>
        <List.Item>
          You <Move>Complicate Things</Move> without warning.
          <br />
          <Muted>
            Arrows whizz by, an ambush! The statues spring to life. A huge storm hits the ship.
          </Muted>
        </List.Item>
        <List.Item>
          The PCs head straight towards trouble on their own.
          <br />{" "}
          <Muted size="medium">
            <Em>
              Sneak into a well-guarded keep. Call out the drake. Pass through a haunted forest.
            </Em>
          </Muted>
        </List.Item>
      </List>
      <SectionHeading variant="solid">Linked Challenges</SectionHeading>
      <Text>
        <Strong>Linked challenges</Strong> are greater, more complex interactions, like epicly
        powerful enemies or unbelievably tense social situations. Each part of the whole has its own
        proactive presence in the scene. Give them traits that prompt impact moves, triggered by the
        fiction <Muted>(protect the body)</Muted> for dynamic interactions.
      </Text>
      <Panel title="Negotiating Peace in a Civil War" variant="blank" border>
        <Grid margin="small">
          <Challenge
            title="Duchess Lysandra"
            poolSize={8}
            traits={["Lineal Heir"]}
            moves={["Show Strength"]}
            failState="4d Leaves the Table"
            textSize="small"
            margin="none"
            references={[
              { type: "linked_to", target: "Baran Reynard" },
              { type: "linked_to", target: "Count Lucian" }
            ]}
          />
          <Challenge
            title="Baran Reynard"
            poolSize={4}
            traits={["War weary"]}
            moves={["Challenge Honor"]}
            failState="4d Leaves the Table"
            textSize="small"
            margin="none"
            references={[
              { type: "linked_to", target: "Duchess Lysandra" },
              { type: "linked_to", target: "Count Lucian" }
            ]}
          />
          <Challenge
            title="Count Lucian"
            poolSize={6}
            traits={["Diplomatic"]}
            moves={["Reveal Secrets"]}
            failState="4d Leaves the Table"
            textSize="small"
            margin="none"
            references={[
              { type: "linked_to", target: "Duchess Lysandra" },
              { type: "linked_to", target: "Baran Reynard" }
            ]}
          />
        </Grid>
        <Text margin="small">
          <Muted size="medium">
            <Em>
              Following the death of the Ember Queen, the realm descended into chaos sparking a long
              and bloody civil war. The PCs have managed to bring all three sides to the negotiating
              table, but the road to peace is rocky. They need each to sign off on splitting the
              realm.
            </Em>
          </Muted>
        </Text>
      </Panel>
      <Panel title="Conspiracy Within the Order" variant="blank" border>
        <Grid margin="small">
          <Challenge
            title="False Prophets"
            poolSize={4}
            moves={["Dead End (for now)"]}
            textSize="small"
            margin="none"
            references={[{ type: "linked_to", target: "Altered Scriptures" }]}
          />
          <Challenge
            title="Altered Scriptures"
            poolSize={8}
            moves={["Dead End (for now)"]}
            textSize="small"
            margin="none"
            references={[{ type: "linked_to", target: "False Prophets" }]}
          />
          <Challenge
            title="Missing Relics"
            poolSize={4}
            moves={["Dead End (for now)", "Assassins Strike"]}
            textSize="small"
            margin="none"
            references={[{ type: "linked_to", target: "Altered Scriptures" }]}
          />
          <Challenge
            title="The High Priests"
            poolSize={8}
            failState="8d Ritual of Usurpation"
            textSize="small"
            margin="none"
            references={[{ type: "blocked_by", target: "False Prophets" }]}
          />
        </Grid>
        <Text margin="small">
          <Muted size="medium">
            <Em>
              The cleric's obsession with the odd occurrences within his order has consumed
              him—missing relics, false prophecies, and altered scriptures. He knows that something
              is up and is determined to figure it out.
            </Em>
          </Muted>
        </Text>
      </Panel>
      <Panel title="The Great Red Dragon" variant="blank" border>
        <Grid margin="small">
          <Stack spacing="medium" margin="none">
            <Challenge
              title="Claws"
              poolSize={6}
              traits={["Protect the Body"]}
              moves={["Snatch", "Scratch"]}
              failState="8d Ritual of Usurpation"
              textSize="small"
              margin="none"
              references={[{ type: "linked_to", target: "Body" }]}
            />
            <Challenge
              title="Wings"
              poolSize={6}
              moves={["Wind Buffet"]}
              failState="8d Ritual of Usurpation"
              textSize="small"
              margin="none"
              references={[{ type: "linked_to", target: "Body" }]}
            />
          </Stack>
          <Challenge
            title="Body"
            poolSize={8}
            traits={["Frightful presence", "Impenetrable scales"]}
            moves={["Breathe Fire", "Chomp Down", "Roar"]}
            failState="Fly Away"
            textSize="small"
            margin="none"
          />
          <Stack spacing="medium" margin="none">
            <Challenge
              title="Tail"
              poolSize={6}
              traits={["Protect the Body"]}
              moves={["Tail Sweep", "Crush"]}
              textSize="small"
              margin="none"
              references={[{ type: "linked_to", target: "Body" }]}
            />
            <Challenge
              title="Kobold Minions"
              poolSize={4}
              moves={["Die for Master!"]}
              textSize="small"
              margin="none"
              references={[{ type: "linked_to", target: "Body" }]}
            />
          </Stack>
        </Grid>
        <Text margin="small">
          <Muted size="medium">
            <Em>
              The Great Red Dragon descends, lured into the PCs' trap by the goats as bait. They
              ready the barbed ballista, knowing they must prevent the beast from escaping into the
              sky. The dragon's kobold minions scurry down from its back, swarming the clearing. The
              battle commences.
            </Em>
          </Muted>
        </Text>
      </Panel>
      <Heading level={3} id="vigilance">
        Vigilance
      </Heading>
      <Text>
        <Strong allCaps>Vigilance</Strong>. The assumed alertness of the PCs, avoiding overly
        cautious gameplay to keep the focus on the action.
      </Text>
      <Text>
        <StrongEm>PCs are always considered to be as vigilant as their vantage allows</StrongEm>{" "}
        when dealing with hidden dangers like <Em>traps</Em>, lies, or <Em>secret doors</Em>.
        However, this doesn't mean they are always aware of hidden threats. Instead, the GM uses a
        <Em>gut feeling</Em> to decide how much the PC perceives based on their vantage and the type
        of tension the GM wants to build.
      </Text>
      <Text>
        Each of the three levels of vigilance creates a different dynamic in the scene, a different
        view of PC competence and the danger of the world. These three levels are:{" "}
        <Strong>hint</Strong>, <Strong>reveal</Strong>, and <Strong>strike</Strong>.
      </Text>
      <Text muted>
        Against a prowling panther, it's most likely that a farmer gets a <Strong>hint</Strong>, a
        hunter gets a <Strong>reveal</Strong>, and a scholar takes a <Strong>strike</Strong>. You
        can always mix it up, though, and give just the scholar the <Strong>reveal</Strong>, putting
        them out of their element.
      </Text>
      <Text muted>
        Against a duke lying about their lineage, a priest gets a <Strong>hint</Strong>, another
        noble gets a <Strong>reveal</Strong>, and a commoner takes a <Strong>strike</Strong>. You
        can always mix it up, though, and give the commoner a <Strong>hint</Strong>, knowing just
        the right random tidbit.
      </Text>
      <SectionHeading variant="solid" icon={faQuestion} description="Tests a player's skill.">
        Hint
      </SectionHeading>
      <Text>
        <Move>Foreshadow</Move> with a subtle clue about a hidden element.{" "}
        <StrongEm>The player</StrongEm> gets a single chance to interpret the situation. They're
        limited to just one to highlight the natural response of the PC and to keep things flowing.{" "}
        <StrongEm>Player intuition guides the story forward</StrongEm>. A correct response leads to
        a reveal or possibly bypasses the situation entirely.{" "}
        <Muted>That funny feeling of being watched. A blood trail down a hallway.</Muted>
      </Text>
      <SectionHeading variant="solid" icon={faExclamation} description="Tests a character's skill.">
        Reveal
      </SectionHeading>
      <Text>
        <Move>Foreshadow</Move> with an obvious unveiling of an immediately imminent threat.{" "}
        <StrongEm>The PC</StrongEm> that becomes aware has one chance to react before the danger
        strikes. <StrongEm>Character competence guides the story forward</StrongEm>.{" "}
        <Muted>
          Spotting the assassin in hiding. A whirling of gears betraying the swinging scythe trap
          about to spring.
        </Muted>
      </Text>
      <SectionHeading variant="solid" icon={faBurst} description="Tests a character's defenses.">
        Strike
      </SectionHeading>
      <Text>
        Make an impact move as the danger immediately strikes them. <StrongEm>The GM</StrongEm>{" "}
        assumes the PCs were not vigilant enough.{" "}
        <StrongEm>The dangerous world guides the story forward</StrongEm>.{" "}
        <Muted>The servant slips poison into your glass. A trapdoor opens beneath you.</Muted>
      </Text>
      <SectionHeading>Vigilance Examples</SectionHeading>
      <Text>Below are some ways that a danger can manifest as hints, reveals, or strikes.</Text>
      <Table variant="striped" textSize="small">
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell allCaps>Danger</Table.HeaderCell>
            <Table.HeaderCell allCaps>Hint</Table.HeaderCell>
            <Table.HeaderCell allCaps>Reveal</Table.HeaderCell>
            <Table.HeaderCell allCaps>Strike</Table.HeaderCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <StrongEm>Poisoned dart trap</StrongEm>
            </Table.Cell>
            <Table.Cell>Floor creaks unnaturally</Table.Cell>
            <Table.Cell>Dartgun in wall spotted</Table.Cell>
            <Table.Cell>Darts fly from the walls</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <StrongEm>Flammable gas trap</StrongEm>
            </Table.Cell>
            <Table.Cell>Faint smell lingers</Table.Cell>
            <Table.Cell>Bit of gas ignites</Table.Cell>
            <Table.Cell>Area engulfed in flames</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <StrongEm>Political intrigue</StrongEm>
            </Table.Cell>
            <Table.Cell>Inconsistencies in letter</Table.Cell>
            <Table.Cell>Wax seal is clearly fake</Table.Cell>
            <Table.Cell>Forgery leads to crisis</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <StrongEm>Hidden malice</StrongEm>
            </Table.Cell>
            <Table.Cell>Suspicious glances</Table.Cell>
            <Table.Cell>Threatens a PC</Table.Cell>
            <Table.Cell>Calls the guards</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <StrongEm>Fractured resolve</StrongEm>
            </Table.Cell>
            <Table.Cell>Hesitates when speaking</Table.Cell>
            <Table.Cell>Express doubts or fears</Table.Cell>
            <Table.Cell>Act against plans</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Concealing illusion</Table.Cell>
            <Table.Cell>Shimmering distortion</Table.Cell>
            <Table.Cell>Reveals true form</Table.Cell>
            <Table.Cell>Causes a wrong move</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <StrongEm>Shattered trust</StrongEm>
            </Table.Cell>
            <Table.Cell>Avoids eye contact</Table.Cell>
            <Table.Cell>Lets intentions slip</Table.Cell>
            <Table.Cell>Betrays the party</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <StrongEm>Crumbling ceiling</StrongEm>
            </Table.Cell>
            <Table.Cell>Dust falls lightly</Table.Cell>
            <Table.Cell>Cracks spread visibly</Table.Cell>
            <Table.Cell>Debris crashes down</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <StrongEm>Swarming insects</StrongEm>
            </Table.Cell>
            <Table.Cell>Animals running away</Table.Cell>
            <Table.Cell>Cloud of insects in the sky</Table.Cell>
            <Table.Cell>Swarm descends viciously</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <StrongEm>Cursed relic</StrongEm>
            </Table.Cell>
            <Table.Cell>Air grows unnaturally cold</Table.Cell>
            <Table.Cell>It speaks your name</Table.Cell>
            <Table.Cell>It curses the handler</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Heading level={3} id="combat-kit">
        Combat Kit
      </Heading>
      <Text>
        GM tools to create dynamic <StrongEm>antagonists</StrongEm> and{" "}
        <StrongEm>combat scenarios</StrongEm> quickly. <Strong>Tier</Strong> is an opponent's threat
        level. <Strong>Role</Strong> is a keyword used to guide its behavior in battle to vary its
        tactics. <Strong>Battlegrounds</Strong> make the environment a proactive or obstacle-ridden
        part of the scene. Mix these for dynamic combats.
      </Text>
      <Stack direction="row" wrap>
        <Panel title="Tiers" flex={1}>
          <Panel.Row>
            <Text margin="none">
              <Strong allCaps>Mook</Strong>
            </Text>
            <List margin={{ top: "small", bottom: "none" }}>
              <List.Item>Mostly just set dressing.</List.Item>
              <List.Item>One action roll can take out several.</List.Item>
              <List.Item>Large groups can be a task pool.</List.Item>
            </List>
          </Panel.Row>
          <Panel.Row>
            <Text margin="none">
              <Strong allCaps>Tough</Strong>
            </Text>
            <List margin={{ top: "small", bottom: "none" }}>
              <List.Item>A typical, dangerous enemy.</List.Item>
              <List.Item>One action roll can take out one of them.</List.Item>
              <List.Item>Small groups can be a task pool.</List.Item>
            </List>
          </Panel.Row>
          <Panel.Row>
            <Text margin="none">
              <Strong allCaps>Elite</Strong>
            </Text>
            <List margin={{ top: "small", bottom: "none" }}>
              <List.Item>Strong scene presence.</List.Item>
              <List.Item>A 4d/6d challenge.</List.Item>
              <List.Item>Often leads a group of lesser enemies.</List.Item>
            </List>
          </Panel.Row>
          <Panel.Row>
            <Text margin="none">
              <Strong allCaps>Boss</Strong>
            </Text>
            <List margin={{ top: "small", bottom: "none" }}>
              <List.Item>Commands the scene.</List.Item>
              <List.Item>A 6d/8d challenge or linked challenge.</List.Item>
              <List.Item>Extremely powerful.</List.Item>
            </List>
          </Panel.Row>
        </Panel>
        <Panel title="Roles" centerTitle>
          <Table variant="blank" margin="small" fullWidth>
            <Table.Body>
              <Table.Row>
                <Table.HeaderCell align="center" allCaps>
                  Blaster
                </Table.HeaderCell>
              </Table.Row>
              <Table.Row>
                <Table.HeaderCell align="center" allCaps>
                  Brute
                </Table.HeaderCell>
              </Table.Row>
              <Table.Row>
                <Table.HeaderCell align="center" allCaps>
                  Lurker
                </Table.HeaderCell>
              </Table.Row>
              <Table.Row>
                <Table.HeaderCell align="center" allCaps>
                  Marauder
                </Table.HeaderCell>
              </Table.Row>
              <Table.Row>
                <Table.HeaderCell align="center" allCaps>
                  Marksman
                </Table.HeaderCell>
              </Table.Row>
              <Table.Row>
                <Table.HeaderCell align="center" allCaps>
                  Overseer
                </Table.HeaderCell>
              </Table.Row>
              <Table.Row>
                <Table.HeaderCell align="center" allCaps>
                  Predator
                </Table.HeaderCell>
              </Table.Row>
              <Table.Row>
                <Table.HeaderCell align="center" allCaps>
                  Protector
                </Table.HeaderCell>
              </Table.Row>
              <Table.Row>
                <Table.HeaderCell align="center" allCaps>
                  Skirmisher
                </Table.HeaderCell>
              </Table.Row>
              <Table.Row>
                <Table.HeaderCell align="center" allCaps>
                  Swarmer
                </Table.HeaderCell>
              </Table.Row>
              <Table.Row>
                <Table.HeaderCell align="center" allCaps>
                  Tactician
                </Table.HeaderCell>
              </Table.Row>
              <Table.Row>
                <Table.HeaderCell align="center" allCaps>
                  Trickster
                </Table.HeaderCell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Panel>
      </Stack>
      <Text>
        <Strong allCaps>Battleground</Strong>. Make the location an important, proactive part of the
        scene. Identify environmental elements to bring into play.
      </Text>
      <List>
        <List.Item>
          <StrongEm>Features</StrongEm>: Elements likely to impact, usually compli cating, the
          ongoing action. <Em>They have a strong effect on vantage and difficulty</Em>.<br />
          <Muted>Heavy winds, cluttered warehouse, angry onlookers.</Muted>
        </List.Item>
        <List.Item>
          <StrongEm>Threats</StrongEm>: Hazards that present extra dangers. They either get 2
          suspense <ChallengeSuspense size="small" /> or repeat on a timer.{" "}
          <Em>They have a strong proactive presence in the scene</Em>.<br />
          <Muted>4d heavy waves, 6d guard patrols, 8d artillery.</Muted>
          <br />
          <Muted>
            <ChallengeSuspense size="small" /> Aggressive spirits,{" "}
            <ChallengeSuspense size="small" /> Tornado, <ChallengeSuspense size="small" /> Raging
            waters.
          </Muted>
        </List.Item>
      </List>
      <Text>
        <Strong>Note</Strong>: Enemies gathered into a single task pool are listed with the dice in
        front <Muted>(4d Archers)</Muted>. Challenges are shown with a | after the pool{" "}
        <Muted>(8d | Dragon)</Muted>.
      </Text>
      <Grid columns="large" margin="none">
        <Battleground
          title="Lair of the Magma Serpent"
          features={["Lava pools", "unstable ground"]}
          threats={[{ name: "Lava Eruptions", poolSize: 4 }]}
          enemies={[
            { name: "Fire Elementals", tier: "Tough", role: "Blaster", count: 5 },
            {
              name: "Magma Serpent",
              tier: "Boss",
              role: "Predator",
              poolSize: 8,
              isChallenge: true
            }
          ]}
        />
        <Battleground
          title="Boarding a Pirate Ship"
          features={["Stormy waters", "cramped decks"]}
          threats={[{ name: "Waves Crashing", poolSize: 4 }, { name: "Kraken Tentacles" }]}
          enemies={[
            { name: "Deckhands", tier: "Mook", role: "Brutes", poolSize: 4 },
            { name: "Rigging Archers", tier: "Mook", role: "Marksman", poolSize: 4 },
            { name: "Swashbucklers", tier: "Tough", role: "Marauders", count: 3 },
            {
              name: "Pirate Captain",
              tier: "Elite",
              role: "Overseer",
              poolSize: 4,
              isChallenge: true
            }
          ]}
        />
      </Grid>
      <Heading level={3} id="running-combats">
        Running Combats
      </Heading>
      <Text>
        When a fight breaks out, the action flows naturally, following the spotlight. There are no
        specific rules that differentiate combat from any other scene.
      </Text>
      <Text>
        <StrongEm>There's no turn order</StrongEm>. The GM describes the impending danger in the
        current situation and asks how the PCs respond, or the PCs take action on their own. The
        spotlight is often on the PCs, and the world's actions flow from what they do. You make
        enemies more proactive by <Move>Foreshadowing</Move> events and following up after, or
        spending suspense to make impact moves. This results in a cinematic ebb and flow to combat.
      </Text>
      <Text>
        <StrongEm>Battles occur in the theater of the mind</StrongEm>, using the group's shared
        imagination to keep track of each participant's fictional positioning to map fiction to
        rules. However, using <StrongEm>battlemaps</StrongEm> or sketching maps with minis or
        markers to track locations during a fight works well, too. This helps organize the chaotic
        situation, makes sure everyone gets time to shine, and keeps everyone's imagination aligned.
        Don't get caught up in detailed tracking—update the map with big changes.
      </Text>
      <SectionHeading variant="solid">Combat Rulings</SectionHeading>
      <Text>
        You map the fiction to the rules just like any scene, making rulings to fill in gaps.
        However, in combat you'll often see the same scenarios come up, so for the sake of
        consistency, some common rulings:
      </Text>
      <Text>
        <Strong>Movement</Strong>: Moving usually accompanies another action—the goal isn't just to
        get somewhere, but to get there and do something. If an interesting obstacle blocks the way,
        it needs an action roll.
      </Text>
      <Text>
        <Strong>Weapons</Strong>: Compare the weapons in play and use common sense to resolve any
        issues. Most weapons are evenly matched; the roll only shifts if there's a clear imbalance.
      </Text>
      <Text>
        <Strong>Melee combat</Strong>: Most melee attacks use Brawn, while light, fast weapons rely
        on Agility. Dirty tricks call for Wits, but rarely work more than once.
      </Text>
      <Text>
        <Strong>Ranged combat</Strong>: Precision attacks roll Agility, while thrown weapons use
        Brawn or Agility based on weight and range. Charging an enemy with ranged weapons is
        reckless, adding +1t or requiring a separate action to close the gap.
      </Text>
      <Text>
        <Strong>Ranged and Casters vs. Melee</Strong>: Spellcasting and precise ranged attacks
        demand focus, which is tough with nearby threats. Inflict +1t to these rolls when under
        immediate danger.
      </Text>
      <Text>
        <Strong>Defense Rolls</Strong>: The GM selects the stat to test. Melee attacks are dodged
        with Agility, blocked with Brawn (using armor or shields), anticipated with Wits, or keeping
        your nerve with Presence.
      </Text>
      <Text>
        <Strong>Armor</Strong>: Armor and shields are represented by talents like Bulwark (pg. 62).
        Otherwise, they are vantage and set dressing for defense rolls.
      </Text>
      <Text>
        <Strong>Vulnerabilities</Strong>: Exploiting a vulnerability can lower thorns, drop 1 before
        rolling a pool, or even bypass the need for a roll. In some cases, finding a vulnerability
        is required to attack at all.
      </Text>
      <Text>
        <Strong>Enemy Magic</Strong>: Enemy magic doesn't follow the same rules as PC magic. It
        manifests through GM moves and is constrained only by the fiction.
      </Text>
      <Heading level={3} id="factions">
        Factions
      </Heading>
      <Text>
        <Strong allCaps>Factions</Strong>. Track off-screen developments of major forces, creating a
        feeling of a living world beyond the PCs. They have:
      </Text>
      <List>
        <List.Item>
          <Strong allCaps>Resources</Strong> that show their power and influence, like assets,
          traits, and relationships.
        </List.Item>
        <List.Item>
          <Strong>Goals</Strong> that show their ambitions. Track them with a timer called a{" "}
          <Strong>faction pool</Strong>, rolled between sessions or when triggered by events in the
          story.
        </List.Item>
      </List>
      <Text>
        When a faction pool depletes, the goal is either accomplished or they make their move
        against another faction, with a story roll in their favor determining how it plays out.
      </Text>
      <Text>
        Keep 4-6 active factions, balancing major and minor ones, with competing goals. Replace
        factions that are no longer relevant to the story.
      </Text>
      <Text>
        <Strong allCaps>Campaign Pools</Strong>. Timers that pace long-term events across sessions{" "}
        <Muted>(lunar eclipse, wyvern migration)</Muted>. They work like faction pools but don't
        require faction details. Use them to signal upcoming events or remind you to reintroduce
        plotlines <Muted>(betrayed NPC seeking revenge)</Muted>.
      </Text>
      <Grid columns="large">
        <CampaignPool
          name="Village of Ellit"
          traits={[{ name: "Elders", description: "wise, cautious" }, "Fine archers"]}
          pools={[
            { name: "Ask Baron for Help", size: 4 },
            { name: "Build a wall", size: 8 }
          ]}
          margin="none"
        />
        <CampaignPool
          name="Twisted Forest"
          traits={["Growing eldritch roots", "Ancient spirits"]}
          pools={[
            { name: "Grow Forth", size: 4 },
            { name: "Lure in Outsiders", size: 6 }
          ]}
          margin="none"
        />
        <CampaignPool
          name="Gorge Goblins"
          traits={["Unlimited numbers"]}
          pools={[{ name: "Raid the Village", size: 4 }]}
          margin="none"
        />
        <CampaignPool
          name="War in the East"
          pools={[
            { name: "War Refugees Arrive", size: 4 },
            { name: "Baron Dies", size: 6 }
          ]}
          margin="none"
        />
      </Grid>
      <Line />
      <Panel title="Pemtown Powderkeg" variant="blank" border>
        <Grid margin="small">
          <CampaignPool
            name="Baron Prog of Pemtown"
            traits={[{ name: "Tax collectors", description: "corrupt" }, "Paying off Shaz"]}
            pools={[
              { name: "Squander Treasury", size: 4 },
              { name: "Discipline Troops", size: 6 }
            ]}
            references={[
              { type: "linked_to", target: "Baron's Unpaid Troops" },
              { type: "linked_to", target: "Goblin Horde" },
              { type: "linked_to", target: "Shaz, Orc Warlord" }
            ]}
            margin="none"
          />
          <CampaignPool
            name="Baron's Unpaid Troops"
            traits={[
              "Veterans of the Goblin War",
              { name: "Captain Morris", description: "charismatic" }
            ]}
            pools={[
              { name: "Abandon Posts", size: 4 },
              { name: "Depose the Baron", size: 6 }
            ]}
            references={[
              { type: "linked_to", target: "Baron Prog of Pemtown" },
              { type: "linked_to", target: "Goblin Horde" },
              { type: "linked_to", target: "Woodland Horrors" }
            ]}
            margin="none"
          />
          <CampaignPool
            name="Druids of the Oldgrove"
            traits={["Sworn to non-interference", "Magical wards"]}
            pools={[
              { name: "Quiet the Horrors", size: 6 },
              { name: "Parley with Shaz", size: 8 }
            ]}
            references={[
              { type: "linked_to", target: "Shaz, Orc Warlord" },
              { type: "linked_to", target: "Woodland Horrors" }
            ]}
            margin="none"
          />
          <CampaignPool
            name="Goblin Horde"
            traits={["Nomadic forest dwellers", "Heavily trapped territory"]}
            pools={[
              { name: "Crown the Goblin King", size: 4 },
              { name: "March on Pemtown", size: 6 }
            ]}
            references={[
              { type: "linked_to", target: "Baron Prog of Pemtown" },
              { type: "linked_to", target: "Baron's Unpaid Troops" },
              { type: "linked_to", target: "Shaz, Orc Warlord" }
            ]}
            margin="none"
          />
          <CampaignPool
            name="Shaz, Orc Warlord"
            traits={["Small, elite warband", "Secret tribute from Pemtown"]}
            pools={[
              { name: "Subjugate the Goblins", size: 6 },
              { name: "Subjugate the Druids", size: 8 }
            ]}
            references={[
              { type: "linked_to", target: "Goblin Horde" },
              { type: "linked_to", target: "Baron Prog of Pemtown" },
              { type: "linked_to", target: "Druids of the Oldgrove" }
            ]}
            margin="none"
          />
          <CampaignPool
            name="Woodland Horrors"
            traits={["Goblin War remnants", "Ominous whispers"]}
            pools={[
              { name: "Troops Disappear", size: 4 },
              { name: "Night of Terror", size: 8 }
            ]}
            references={[
              { type: "linked_to", target: "Baron's Unpaid Troops" },
              { type: "linked_to", target: "Druids of the Oldgrove" }
            ]}
            margin="none"
          />
        </Grid>
        <Text margin="small">
          <Muted size="medium">
            <Em>
              The air in Pemtown hums with tension. Baron Prog's coffers run dry, his troops grow
              restless, and whispers of rebellion stir in the ranks. Meanwhile, deep in the forest,
              alliances shift as Shaz's warband, the goblin horde, and the druids of the Oldgrove
              edge closer to explosive confrontation.
            </Em>
          </Muted>
        </Text>
      </Panel>
      <Heading level={3} id="gm-with-moxie">
        GM with Moxie
      </Heading>
      <Text>
        <StrongEm>Map fiction to rules</StrongEm>. Encourage players to focus on the fiction and let
        you handle the rules. The more narratively important something is, the more mechanical
        weight you should give it.
      </Text>
      <Text>
        <Muted size="medium">
          <Em>
            In a game of courtly intrigue, slaying a dragon might be a montage roll for a knight
            while an important dinner party is a complex linked challenge full of dire stakes.
          </Em>
        </Muted>
      </Text>
      <Text>
        Get creative applying the rules, mixing them up in ways not explicitly laid out. Don't be
        afraid to tinker. Moxie is modular and you're not going to break it. Graft on rules from
        other systems you like, or hack Moxie and make it your own.
      </Text>
      <Text>
        If the rules clash with what makes sense in the fiction, the fiction wins. Engage with the
        rules quickly, resolve them, and return to the story.
      </Text>
      <Text muted>“What does that look like?” or “Give us a quick scene.”</Text>
      <Text>
        <StrongEm>Make rulings to fill gaps</StrongEm>. The rules are a flexible framework and
        designed not to cover every detail. When things fall through the cracks, try to interpret
        the rules' intent and make a ruling that fits the moment. If it's a judgment call, tell the
        players. If you're unsure of a rule, make a quick call now and check later. When in doubt,
        everything can collapse down to a single story roll—ask the players what they want to
        happen, then roll to see if that's how it goes down.
      </Text>
      <Text>
        <StrongEm>Pace the game cinematically</StrongEm>. Keep the game flowing like a well-paced
        movie. Don't let scenes drag, wrap it up to move on to something more interesting. If
        players don't seem keen on an upcoming situation, suggest a montage. Skip long planning
        phases by cutting to the action with a Set the SCene move. Reward players buying into these
        techniques by giving them good odds.
      </Text>
      <Text>
        <StrongEm>Follow the players' lead</StrongEm>. Keep tabs on story arcs and present{" "}
        <Em>drama</Em>, <Em>dilemmas</Em>, and <Em>opportunities</Em> related to them. Follow where
        the characters want to go. Present interesting situations related to it. When players
        hesitate or hit an impasse, spur them into action with danger timers, quarrels,{" "}
        <Move>Entangles</Move>, or <Move>Bridge</Move> and move on.
      </Text>
      <Text>
        <StrongEm>Use the moves, or don't</StrongEm>. The GM moves can be explicit rules, merely
        guidelines, or somewhere in between. Some GMs will call them out by name, while others never
        bring them up at all. Either way, as long as your GMing aligns with their intent, you're
        doing it right.
      </Text>
      <Text>
        <StrongEm>Make moves with impact</StrongEm>. Don't pull your punches—impact moves are called
        that for a reason. They shove the story forward. Players have a lot of tools at their
        disposal, so <StrongEm>give the world teeth</StrongEm>. It makes victory even sweeter.
      </Text>
      <Text>
        A single impact move is flexible. You can split it up into a few lesser effects{" "}
        <Muted>(inflict a mark as you break their sword)</Muted>, hit multiple PCs at once, or have
        a PC's action affect a totally different PC, though they do get a defense roll in that case.
      </Text>
      <Text>
        When an impact move doesn't naturally flow from what's happening on-screen (
        <Em>common with messy rolls</Em>), think off-screen instead and complicate their lives
        elsewhere or take suspense and hit later with better dramatic timing.
      </Text>
      <Text>
        <StrongEm>Prompt player narration</StrongEm>. After a roll, make sure the players narrate
        how things play out—even, or especially, on a grim. Describing failure is a great way to
        express their character. Collaborate, but keep them narrating their actions.
      </Text>
      <Text>
        Encourage them to play off of each other as well, especially with assists and montages. Ask
        for reaction shots as other PCs' scenes play out to gauge how they feel about it, or how
        their bond affects their reaction.
      </Text>
      <Text>
        Most importantly, after the rules come into play, get right back to narration. Make sure
        that the flow remains <StrongEm>Fiction→Rules→Fiction</StrongEm>.
      </Text>
      <Text>
        <StrongEm>Be endlessly curious</StrongEm>. Ask provocative questions about the PCs and their
        motivations to give players a chance to expand on their characters.
      </Text>
      <List>
        <List.Item>
          <Em>Why in the world would you do that?</Em>
        </List.Item>
        <List.Item>
          <Em>Okay, so who'd you steal that sword from?</Em>
        </List.Item>
        <List.Item>
          <Em>So are you pissed off or cool with it?</Em>
        </List.Item>
      </List>
      <Heading level={2} id="examples-of-play">
        Examples of Play
      </Heading>
      <Text>
        The cleric charges the Minotaur King. This minotaur is a powerful foe and the thorns it
        inflicts when fighting it must reflect that, so you make it +2t and call for a Brawn roll:
        2, 3, 5 - 7, 8. The initial outcome is a <Strong>messy</Strong>, which drops to a{" "}
        <Strong>grim</Strong> for the first cut, then to a <Strong>disaster</Strong> for the second.
        You hadn't declared dire stakes on this roll, but you know that a disaster can cut past the
        need. You check in with the cleric, “You okay losing a limb here?” Leaning into the
        awfulness of the situation, they laugh it off and nod. You decide the Minotaur King rips off
        their arm! You toss the narration back to the player to let them describe how it all went
        down.
      </Text>
      <Panel>
        <Text size="small" margin="small" muted>
          Horrifying enemies need horrifying consequences. If you hit hard, especially when the dice
          tell you to, players will understand—the world is dangerous. That's why what they're doing
          is heroic.
        </Text>
        <Text size="small" margin="small" muted>
          Still, it's good to check in. You can't give a longterm condition like losing a limb to a
          player without their say so. Had they wanted to avoid that, you could have dropped them
          instead and risked death or found something equally fitting.
        </Text>
      </Panel>
      <Line />
      <Text>
        The fighter stands off alone against 10 bandits. This one's borderline, but the bandits all
        have combat experience and there's an overwhelming number of them, so you make this
        impossible (+3t from inherent difficulty).
      </Text>
      <Text>
        The fighter thinks on it, then they take off running. They want to split the group up for
        better odds. You know this bunch is disorganized, so you decide a trick is relatively
        easy—no thorns, and you call for a wits roll: 4, 3 :: <Strong>messy</Strong>! You let them
        know they pulled it off, but the impact move means they're still facing three bandits —
        fightable, but still +1t. You also give them a mark to Agility as they stumble and twist
        their ankle.
      </Text>
      <Text>
        The fighter grabs the narration and works in that the stumble is how the bandits ended up
        catching up to them. Then they introduce a tangle—they'll start off on the ground, in a
        terrible position, if they can have spark. You give the thumbs up!
      </Text>
      <Panel>
        <Text size="small" margin="small" muted>
          As GM, you have to be really on point and consistent with thorns. There are no hard rules,
          but it's easy to forget how tough enemy numbers can be. Even a great fighter will struggle
          against ten all coming at them.
        </Text>
        <Text size="small" margin="small" muted>
          When considering whether to add a thorn, err on the side of adding it! It makes rolls more
          interesting with higher stakes, but also makes players not just try the first thing that
          comes to mind.
        </Text>
        <Text size="small" margin="small" muted>
          Finally, splitting up consequences like this is a good way to keep scenes moving without
          hammering a PC as things get started. Give them a fighting chance to make for a cool
          scene. A perfect probably would have had them facing 2 bandits.
        </Text>
      </Panel>
      <Line />
      <Text>
        The PCs have made a grave mistake, and the entire cemetery surrounding them is starting to
        come to unlife. You (the GM) tell them there are skeletons and zombies everywhere. They have
        a choice— they could run, and it would be an <Strong>8d | Escape</Strong> challenge, but the
        town would be gone for sure. Or you can stay and fight, just wave after wave of undead. You
        then <Move>Entangle</Move> the rogue's <StrongEm>definitely not honorable</StrongEm> trait.
        The rest seem deadset on staying, but the rogue wavers. They quarrel, and finally the other
        three win out—they stay, and fight like the heroes most of them are.
      </Text>
      <Text>
        You think on what waves of zombies might look like. Each undead is weak individually, but
        the entire horde is epic. You set it up as waves, three linked{" "}
        <Strong>4d-6d-8d | Undead Horde</Strong> challenges.
      </Text>
      <Text>
        You then call for a <Move>Buildup</Move> move. Each player describes their character getting
        ready as the horde starts to claw its way out of the ground. They take spark from the
        quarrel earlier, spark from the <Move>Buildup</Move> move, and the GM takes suspense.
      </Text>
      <Panel>
        <Text size="small" margin="small" muted>
          Setting up challenges on the fly is one of the most important parts of being a GM. With
          time, it becomes second nature and lets you set up dynamic scenarios quickly.
        </Text>
        <Text size="small" margin="small" muted>
          Don't forget about Buildup. This is perfect timing for it. They just got spark from
          quarreling, but a huge horde is incoming, and they're probably going to need more spark
          for narrating a great scene. Unfortunately, the rogue here got stuck with losing out on a
          spark—but it all happened so quickly that as the GM, you should give them a pass and let
          them have three (Entangle, quarrel, Buildup) just this once.
        </Text>
        <Text size="small" margin="small" muted>
          Giving PCs opportunities to get spark like that as well incentivizes them using it. In
          these cases, usually one or two PCs will have spark still on their sheet and miss out on
          getting that second one as theirs is full.
        </Text>
      </Panel>
      <Line />
      <Text>
        The <Strong>8d | Gnoll Marauders</Strong> begin their assault on the walled town. You spend
        suspense to make a move and hit the town gate with the battering ram. You roll the{" "}
        <Em>6d Walls Breached</Em> pool: 3, 4, 5, 1, 1, 6 :: <Strong>6d→3d</Strong>. If the gate
        falls, chaos will reign. The cleric casts a warding domain spell and gets a{" "}
        <Strong>perfect</Strong>! Without a specific rule, you make a quick ruling and add 2d to the
        Breached pool (<Strong>3d→5d</Strong>).
      </Text>
      <Text>
        The wizard steps up and launches a <StrongEm>Frenzied Embers</StrongEm> potent spell at the
        gnolls—a <Strong>critical</Strong>! You roll the marauders' pool, getting 3, 5, 4, 3, 6, 2,
        1, 6 :: <Strong>8d→4d</Strong>. For the critical, the wizard takes a{" "}
        <Em>secondary effect</Em>—they want that battering ram to catch fire. You think it'll
        probably take a while to burn, so you start a 4d Ram Burning pool and roll it: 2 3 3 1 ::
        <Strong>4d→0d</Strong>! Nevermind, it's engulfed in flames!
      </Text>
      <Panel>
        <Text size="small" margin="small" muted>
          This is a great example of secondary effect, and also how pools can quickly change the
          dynamics of a scene.
        </Text>
        <Text size="small" margin="small" muted>
          Had they chosen greater effect, you would have dropped 1d from the pool before rolling it.
          If they had went with setup, they could have rolled an assist without risk with whoever
          came at the gnolls next. Imagine a berserker flying off the wall, greataxe in hand,
          cutting through the exploding fireball at some surprised gnolls!
        </Text>
        <Text size="small" margin="small" muted>
          Mastering setting up and rolling pools is another key GM skill. Here, it's rolled right as
          it's set because it makes sense.
        </Text>
      </Panel>
      <Line />
      <Text>
        The wizard's brought before the kobold elders for her <Strong>4d | Trial by Ordeal</Strong>{" "}
        (pg. 34). The first trial is to lift a boulder, and she gets a perfect! You roll for
        progress (<Strong>4d→4d</Strong>), but none is made. The elders, unimpressed, call for a
        larger boulder, but you say that the benevolent chieftain silences them. You make a ruling,
        dropping 1 from the pool (<Strong>4d→3d</Strong>).
      </Text>
      <Text>
        Next, the wizard must walk across a very narrow balance beam (+1t). Her perfect gets cut to
        a <Strong>messy</Strong>. As she makes it to the end, she stumbles off and smacks her head.
        You decide that Wits gets marked, but the elders seem pleased (<Strong>3d→1d</Strong>). The
        final ordeal is a ridiculous riddle (+2t), and she also takes +1t from damage—and ends up
        rolling a <Strong>disaster</Strong>. You decide it's death by volcano!
      </Text>
      <Panel>
        <Text size="small" margin="small" muted>
          And here's where it all comes together, the mix of setting up challenges, rolling pools,
          reacting within the fiction to how those pools progress, and hitting with appropriate
          impact moves while giving out thorns.
        </Text>
        <Text size="small" margin="small" muted>
          Throughout all of this, there's of course a lot more narration, but this is the ideal flow
          of a challenge. Each roll is giving great prompts for narration and it progresses smoothly
          towards its horrible ending.
        </Text>
      </Panel>
      <Line />
      <Text>
        The fighter takes the helm as they <Strong>8d | Navigate Channel</Strong> (pg. 34). They
        roll Wits, but the thorn from the treacherous currents cuts their perfect to a{" "}
        <Strong>messy</Strong>. You roll for their progress navigating (<Strong>8d→4d</Strong>),
        then make a move—<Move>Graze Reef</Move>. The rogue up in the lookout makes a Wits defense
        roll but gets a <Strong>grim</Strong>. They don't see it and the boat slams against the
        reef. You start a<Em>6d Taking on Water</Em> pool, then roll it (<Strong>6d→4d</Strong>)
        alongside the <Em>6d Storm Blows In</Em> pool (<Strong>6d→2d</Strong>). Things are getting
        bad!
      </Text>
      <Text>
        At the edge of catastrophe, the fighter tries to right the course. They spend spark and the
        rogue and wizard jump in to assist. Before they roll, you make another move—
        <Move>Violent Winds</Move> puts a second thorn onto the roll, and you declare dire stakes at
        this pivotal moment. If this fails, the pools are rolled and one or more of the PCs is going
        overboard into shark-infested waters. Everyone grabs their dice.
      </Text>
      <Panel>
        <Text size="small" margin="small" muted>
          Fail states provide an important check against neverending rolls to whittle down pools.
          Setting up a proper one, here the Storm Blowing In and even later a second one with Taking
          on Water, means there's urgency and care in what they do. They'll work hard together to
          make sure those pools don't get rolled.
        </Text>
        <Text size="small" margin="small" muted>
          This kind of pressure creates teamwork and teamwork is what an adventuring party should be
          all about. If you find your players struggling against challenges, make sure to point out
          mechanics like assists that they might be missing out on.
        </Text>
        <Text size="small" margin="small" muted>
          And don't be afraid of Locking It In if they don't do it. The story will just move on in a
          different direction!
        </Text>
      </Panel>
      <Line />
      <Text>
        <Strong allCaps>You (GM)</Strong>: “Your ship rams the pirate ship!” You{" "}
        <Move>Set the Scene</Move> and get a<Strong>grim</Strong>. “You see the Pirate Captain pull
        out a horn, look terrified, and then blow it. Amidst the high waves surrounding both ships,
        the <ChallengeSuspense size="small" /> <Strong>Kraken's Tentacles</Strong> burst forth from
        the water. There are about 20 deckhands below and a group of 10 archers above, each a{" "}
        <Em>4d mook</Em> pool. There are a few swashbucklers too, and the Captain's an elite.”
      </Text>
      <Text>You put out some tokens representing all of this on the battlemap.</Text>
      <Panel>
        <Text size="small" margin="small" muted>
          When you're using Set the Scene, be ready to hit them a bit hard if a grim comes up. Here
          we have a scene-altering change just because things didn't go well. Only make the roll if
          you're ready to follow through with it. That goes for a perfect, too. If they get the
          perfect, they deserve the easier start! Don't take it from them.
        </Text>
      </Panel>
      <Text>
        <Strong allCaps>You</Strong>: “Go ahead and put your tokens where they make the most sense.
        You were ready for a fight, and the grim resulted in the Kraken getting summoned. What do
        you do?”
      </Text>
      <Text>
        <Strong allCaps>Fighter</Strong>: “I have my bow out and start launching arrows at the
        archers.”
      </Text>
      <Text>
        They roll Agility and get a <Strong>grim</Strong>. You give a mark to Brawn and Presence as
        an arrow slices their arm. You follow up by spending suspense. You have the Pirate Captain
        swing onto their boat and attack the fighter, who rolls a <Strong>grim</Strong> on their
        Brawn defense roll because of the mark. A second mark to Brawn instead marks Agility, then
        they clear the Brawn mark because it was rolled.
      </Text>
      <Panel>
        <Text size="small" margin="small" muted>
          Clearing marks after other marks are applied makes sure you don't end up in weird
          situations where you take a mark, roll it, clear it, take another, roll it, clear it, and
          so on. It's better to change the fiction up and have it move to a different stat.
        </Text>
        <Text size="small" margin="small" muted>
          This all looks a bit clunkier written out than it feels in play, as the character sheet
          helps a lot with this flow visually.
        </Text>
      </Panel>
      <Text>
        <Strong allCaps>Rogue</Strong>: “I want to trick the Kraken into trying to hit me! I'll
        slice at a tentacle, then jump over towards the deckhands, like right into the middle of
        them.”
      </Text>
      <Text>
        You double check their intent, to make the kraken hit the deckhands, and then have him roll
        Wits (+2t), warning that this is dire stakes— this could get them dropped. Hearing that, the
        cleric uses their crossbow to assist with some cover fire at the deckhands. The rogue agrees
        and they roll a <Strong>messy</Strong>, but it works! You think on it and make a ruling
        prioritizing the fiction here. That tentacle is enough to wipe out those deckhands without a
        roll. However, the rogue is definitely dropped, out of the scene in some way.
      </Text>
      <Panel>
        <Text size="small" margin="small" muted>
          If you know a situation could cut straight to a dropped on a grim without being bloodied
          first, you need to let them know that it's dire stakes. Players buying into a roll that
          could leave their PC dead makes them way more okay with it if it happens, or even laughing
          it off when it does.
        </Text>
        <Text size="small" margin="small" muted>
          However, if you drop them out of nowhere and they roll a grim on the story roll, it's
          likely to fall pretty flat.
        </Text>
      </Panel>
      <Text>
        You get ready to make a story roll to see if the rogue's dead, but the cleric jumps in to
        assist again! They roll 1d on a defense roll since the rogue didn't get one and get a
        perfect! They run across and tackle the rogue out of the way just as the tentacle sweeps the
        deckhands off into the sea.
      </Text>
      <Panel>
        <Text size="small" margin="small" muted>
          Remind your players a few times when you first start playing that they can assist on
          action rolls that prompt impact moves. They only get to roll 1d and open themselves up to
          the risk, but it's a chance! They can also spend spark on the roll.
        </Text>
      </Panel>
      <Text>
        You check in that the battlemap has the tokens in roughly the right spots. You also feel
        it's good timing for the threat pool and roll <Em>4d Waves</Em> (<Strong>4d→0d</Strong>).
        Waves wash over the boats and you have everyone make Brawn defense rolls. They all get a
        <Strong>perfect</Strong> except the cleric, who rolled a <Strong>grim</Strong>—they're
        washed overboard!
      </Text>
      <Text>
        <Strong allCaps>Wizard</Strong>: “Can I try to save the cleric just before he goes over? Or
        like right as he goes over? I want to cast <StrongEm>Flaming Claw</StrongEm> to grab him.”
      </Text>
      <Text>
        You let her know she can't undo something that happened, but there's enough gray area to try
        this. You remind her that <StrongEm>Flaming Claw</StrongEm> scorches whatever it touches, so
        the cleric's Agility will get marked no matter what here. She makes the roll and gets a
        messy. The cleric is scorched a bit, but safe as the claw drags him back up the side of the
        boat. Not wanting to further complicate this beat, you decide to take suspense instead of
        making an impact move, a nice soft reset on the action. You point the <Move>Spotlight</Move>{" "}
        back at the PCs.
      </Text>
      <Panel>
        <Text size="small" margin="small" muted>
          The limtations on Flaming Claw are important to make sure magic doesn't start
          overshadowing normal actions. Magic can have a lot of versatility, so make adjustments in
          play to keep things feeling balanced.
        </Text>
        <Text size="small" margin="small" muted>
          Suspense is a great fallback on a messy when you want to wrap up a beat and move on.
          Sometimes a perfect or a grim both make sense, but the middle zone doesn't— let the PCs
          have their easy victory for now, then hit them out of nowhere with suspense later.
        </Text>
      </Panel>
      <Text>
        <Strong allCaps>You</Strong>: “Alright, we have waves and the Kraken smashing the ship, the
        Pirate Captain looking for a fight with the injured fighter, and the rogue and cleric almost
        getting killed. Fighter, I think the action's on you and the pirate captain, who just got
        joined by one of the swashbucklers. Tell us what's next—and do remember that I have that
        suspense I just took.”
      </Text>
      <Line />
      <Text>
        The rogue spots the ambush and sneaks into the trees, up behind the 4 Bandit Rabble. He
        strikes, rolling Agility and gets a <Strong>perfect</Strong>. You let him know these are
        just mooks and this takes out all of them, so he takes the creative liberty to narrate a
        sequence of him dispatching the bandits quietly, one by one.
      </Text>
      <Panel>
        <Text size="small" margin="small" muted>
          A single good roll can take out a couple of mooks or one tough. With a good enough pool
          roll, it can even take out one elite.
        </Text>
      </Panel>
      <Text>
        The player knows there's also a Bandit Leader here, but the rogue character doesn't—he
        introduces a tangle. They recently changed their trait from{" "}
        <StrongEm>definitely not honorable</StrongEm> to <StrongEm>definitely not quiet</StrongEm>,
        so he wants to say his character doesn't know about the bandit and walks out loudly
        bragging. That makes sense and seems in-character, so you okay it and he takes spark.
      </Text>
      <Text>
        The player expected the leader to run away, but you check his role—<Strong>brute</Strong>. A
        smart enemy might flee, but not a brute. You make a 1d (unlikely) story roll for the rogue
        to see if the bandit runs and get a <Strong>grim</Strong>. Looks like it's a fight. You
        declare dire stakes, then make a move that was prompted by the story roll—
        <Move>Hit 'Em Hard</Move>.
      </Text>
      <Panel>
        <Text size="small" margin="small" muted>
          When in doubt about what an enemy would do, look to their role and go from there.
        </Text>
      </Panel>
      <Text>
        The Bandit Leader charges from the bushes. The rogue rolls a <Strong>grim</Strong> and gets
        blindsided. You skip marked and go straight to bloodied. The rogue describes the attack,
        blood flying from a blow to the head. You use a buildup move and you both narrate a moment,
        the bandit looking to finish this, the rogue having a chance to stand up. They face off. The
        rogue takes spark, you take suspense. Now it's a fight.
      </Text>
      <Panel>
        <Text size="small" margin="small" muted>
          Story rolls have consequences, too. If something in the fiction leads to one, the story
          roll can prompt impact moves.
        </Text>
        <Text size="small" margin="small" muted>
          Cinema like this is why we play the game. Imagine all this through the camera lens, your
          shared imagination space. When the mechanics flow like this, the system sings.
        </Text>
      </Panel>
    </Page>
  );
};

export default Chapter02;
