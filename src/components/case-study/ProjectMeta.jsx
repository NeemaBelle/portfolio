import { Eyebrow } from "./Section";

export function Tag({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-surface-muted px-3 py-1.5 font-sans font-normal text-base leading-[1.3] text-text-body lg:text-lg">
      {children}
    </span>
  );
}

export default function ProjectMeta({ groups }) {
  return (
    <dl className="flex flex-wrap gap-x-10 gap-y-6">
      {groups.map((group) => (
        <div key={group.label} className="flex flex-col gap-2.5">
          <dt>
            <Eyebrow>{group.label}</Eyebrow>
          </dt>
          <dd className="flex flex-wrap gap-2.5">
            {group.items.map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </dd>
        </div>
      ))}
    </dl>
  );
}
