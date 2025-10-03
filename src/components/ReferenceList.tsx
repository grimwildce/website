import SmallCaps from "@/components/ui/SmallCaps";
import { faLink, faLock, type IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ReferenceItemType = "linked_to" | "blocked_by";
export type ReferenceItem = {
  type: ReferenceItemType;
  target: string;
};

const referenceIcon: Record<ReferenceItemType, IconDefinition> = {
  linked_to: faLink,
  blocked_by: faLock
};

type ReferenceListProps = {
  className?: string;
  references: ReferenceItem[];
};

const ReferenceList = ({ className, references }: ReferenceListProps) => {
  return (
    <ul className={className}>
      {references.map((ref, index) => (
        <li key={index}>
          <FontAwesomeIcon icon={referenceIcon[ref.type]} className="mr-1" />
          <SmallCaps>{ref.target}</SmallCaps>
        </li>
      ))}
    </ul>
  );
};

export default ReferenceList;
