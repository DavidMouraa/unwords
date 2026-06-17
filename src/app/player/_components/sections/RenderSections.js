import SECTIONS_MAP from "../../_contants/maps/sectionsMap"

export default function RenderSections({ section }) {
  const SectionComponent = SECTIONS_MAP[section.type]

  return <SectionComponent 
    section={section}
  />
}