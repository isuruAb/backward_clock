import { Button } from "react-bootstrap";
import { MouseEventHandler } from "react";

interface IProps {
  text: string;
  type?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const ActionButton: React.FC<IProps> = (props) => {
  return (
    <Button type={props.type} onClick={props.onClick} className="m-2">
      {props.text}
    </Button>
  );
};
export default ActionButton;
