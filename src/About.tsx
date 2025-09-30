import Page from "@/components/app/Page";
import BookTitle from "@/components/BookTitle";
import Em from "@/components/ui/Em";
import ExternalLink from "@/components/ui/ExternalLink";
import Line from "@/components/ui/Line";
import Stack from "@/components/ui/Stack";
import Strong from "@/components/ui/Strong";
import Text from "@/components/ui/Text";
import CraftedForGrimwild from "@/svgs/CraftedForGrimwild";
import MadeWithMoxie from "@/svgs/MadeWithMoxie";

const About = () => {
  return (
    <Page>
      <BookTitle subtitle="Community Edition">Grimwild</BookTitle>
      <Stack margin="large" spacing="small">
        <Text margin="none" align="center">
          Based on Grimwild First Edition, Version 1.4
        </Text>
        <Text margin="none" align="center">
          <strong>DESIGNED BY J.D. Maxwell</strong>
        </Text>
      </Stack>
      <Text margin="large" align="center">
        <Em>
          Grimwild Community Edition is a fan-supported edition of Grimwild, created with the
          support and contributions of its community and designed to grow with it. Grimwild
          Community Edition, Grimwild, and Moxie are <Strong>open licensed</Strong> under CC-BY.
          With all text free for personal or commercial use—for adventures, rules supplements, or
          entirely new games! You can use the logos below to indicate compatibility.
        </Em>
      </Text>
      <Stack margin="large" center>
        <CraftedForGrimwild />
        <Text margin="none" align="center">
          <em>odditypress.com/licensing</em>
        </Text>
      </Stack>
      <Stack center>
        <MadeWithMoxie />
        <Text margin="none" align="center">
          <ExternalLink href="https://moxietoolkit.com">
            <Em>moxietoolkit.com</Em>
          </ExternalLink>
        </Text>
      </Stack>
      <Line />
      <Text margin="large">
        <Strong>
          <Em>Grimwild</Em> wouldn't be what it is without its community of contributors.{" "}
          <Em>Endless thanks to all who helped</Em>:
        </Strong>{" "}
        Aleksandar Saranac, Alex Reynolds, Alexandru Seinedin, Andrew Eaton, Archer Whitman, Benji
        Tham, Betsy Brinkerhoff, Blake a.k.a zzyzx, Cassandra Frey, Christopher Umali-Lam, Cinna
        Store, Clinton Pong, Colton Janisch, Denis Gusarov, Felix-Antoine G, Gatien Manzac,
        Harakeke, Jack Mann, Jackson Cassidy, Jason Dunkle, June Bloom, Kyle Roderick, Luke
        Saunders, Mads Marturin, Mark Eckenrode, Matthew Kessler, Michael Joseph, Michael
        Villaronga, MilleVitasVixi, Mitchell Stevenson, Noel Warford, Olin Kirkland, Owen Townsend,
        Vesper Silverflame, Victor Turner, Walter Weingard, Zach La Bounty, and zemrx.
      </Text>
      <Line />
      <Stack margin="large" spacing="small">
        <Text margin="none" align="center">
          <Em>Grimwild Community Edition is licensed under CC BY 4.0.</Em>
        </Text>
        <Text margin="none" align="center">
          <Em>
            Grimwild Community Edition is based on Grimwild © 2024 by J.D. Maxwell and Oddity
            Press, licensed under CC BY 4.0.
          </Em>
        </Text>
        <Text margin="none" align="center">
          <Em>
            Grimwild is based on Moxie © 2024 by J.D. Maxwell and Oddity Press, licensed under CC
            BY 4.0.
          </Em>
        </Text>
      </Stack>
    </Page>
  );
};

export default About;
