import ReferenceList, { type ReferenceItem } from "@/components/ReferenceList";
import Line from "@/components/ui/Line";
import Muted from "@/components/ui/Muted";
import SmallCaps from "@/components/ui/SmallCaps";
import Text from "@/components/ui/Text";
import { getMarginSize, type MarginSize } from "@/utils/margin";
import classNames from "classnames";

type CampaignPoolTrait =
  | string
  | {
      name: string;
      description?: string;
    };
type CampaignPoolPool = {
  name: string;
  size: number;
};
type CampaignPoolProps = {
  name: string;
  traits?: CampaignPoolTrait[];
  pools?: CampaignPoolPool[];
  margin?: MarginSize;
  references?: ReferenceItem[];
};

const CampaignPoolTrait = ({ trait }: { trait: CampaignPoolTrait }) => {
  if (typeof trait === "string") {
    return (
      <Text size="small" margin="none">
        <em>{trait}</em>
      </Text>
    );
  } else {
    return (
      <Text size="small" margin="none">
        <em>
          {trait.name}
          {trait.description && (
            <>
              {" "}
              <Muted>({trait.description})</Muted>
            </>
          )}
        </em>
      </Text>
    );
  }
};

const CampaignPool = ({ name, traits, pools, references, margin }: CampaignPoolProps) => {
  const hasTraits = traits && traits.length > 0;
  const hasPools = pools && pools.length > 0;
  const hasReferences = references && references.length > 0;

  const containerCss = classNames("text-sm", getMarginSize(margin));

  return (
    <div className={containerCss}>
      <div className="bg-solid text-solid-color rounded-t-sm px-4 py-1 font-bold">
        <SmallCaps>{name}</SmallCaps>
      </div>
      {hasReferences && (
        <ReferenceList
          className="bg-panel-3 px-4 py-1 italic text-sm space-y-1"
          references={references}
        />
      )}
      <div className="bg-panel-1 px-4 py-2 rounded-b-sm">
        {hasTraits && (
          <div>
            {traits.map((trait, index) => (
              <CampaignPoolTrait key={index} trait={trait} />
            ))}
          </div>
        )}
        {hasTraits && hasPools && <Line color="muted" margin="small" />}
        {hasPools && (
          <div>
            {pools.map((pool) => (
              <Text key={pool.name} margin="none" size="small">
                <strong>
                  <em>
                    {pool.size}d {pool.name}
                  </em>
                </strong>
              </Text>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CampaignPool;
