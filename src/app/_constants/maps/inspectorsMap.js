import Number from "@/app/_components/secondarySidebar/inspectorManager/inspectors/variables/Number"
import String from "@/app/_components/secondarySidebar/inspectorManager/inspectors/variables/String"
import Text from "@/app/_components/secondarySidebar/inspectorManager/inspectors/nodes/Text"
import Choice from "@/app/_components/secondarySidebar/inspectorManager/inspectors/nodes/Choice"

const INSPECTORS_MAP = {
  variable: {
    string: String,
    number: Number,
  },
  node: {
    text: Text,
    choice: Choice,
  }
}

export default INSPECTORS_MAP