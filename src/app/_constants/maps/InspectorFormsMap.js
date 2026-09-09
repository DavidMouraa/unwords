import ChoiceForm from "@/app/_components/sidebars/secondarySidebar/inspector/forms/ChoiceForm";
import NumberForm from "@/app/_components/sidebars/secondarySidebar/inspector/forms/NumberForm";
import StringForm from "@/app/_components/sidebars/secondarySidebar/inspector/forms/StringForm";

const INSPECTOR_FORMS_MAP = {
  variable: {
    string: StringForm,
    number: NumberForm,
  },
  node: {
    choice: ChoiceForm,
  },
}

export default INSPECTOR_FORMS_MAP