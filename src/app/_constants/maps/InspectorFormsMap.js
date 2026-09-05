import NumberForm from "@/app/_components/sidebars/secondarySidebar/inspector/forms/NumberForm";
import StringForm from "@/app/_components/sidebars/secondarySidebar/inspector/forms/StringForm";

const INSPECTOR_FORMS_MAP = {
  variable: {
    string: StringForm,
    number: NumberForm,
  }
}

export default INSPECTOR_FORMS_MAP