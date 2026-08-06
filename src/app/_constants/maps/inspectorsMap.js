import Number from "@/app/_components/secondarySidebar/inspectorManager/inspectors/Number"
import String from "@/app/_components/secondarySidebar/inspectorManager/inspectors/String"

const INSPECTORS_MAP = {
  variable: {
    string: String,
    number: Number
  }
}

export default INSPECTORS_MAP