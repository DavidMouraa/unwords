export default function ChoiceSection({ section }) {
  console.log(section)

  return (
    <div>
      {section.choices.map((choice) => choice.label)}
    </div>
  )
}