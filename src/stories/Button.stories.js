import Button from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    handleClick: { action: "handleClick" }  
  }
}

const Template = args => <Button {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  label: "Press Me",
  size: "default",
  displayType: "text-only",
  type: "default",
  status: "default",

  
}


export const label = Template.bind({})
label.args = {
    label: "test"
}


export const size = Template.bind({})
size.args = {
    size: "xs",
    label: "test"
}


export const displayType = Template.bind({})
displayType.args = {
    displayType: "text-only",
    label: "test"
}

export const type = Template.bind({})
type.args = {
    type: "default",
    label: "test"
}

export const status = Template.bind({})
status.args = {
    status: "default",
    label: "test"
}

