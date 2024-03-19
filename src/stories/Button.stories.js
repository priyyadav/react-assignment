import Button from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
  
  }
}

const Template = args => <Button {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  backgroundColor: "white",
  label: "Press Me",
  size: "xs",
  icon: "heart",
  
}
