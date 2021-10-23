interface IProps {
  children: JSX.Element | string;
}

export default function Header(props: IProps) {
  return <h1 className="font-bold text-blue-600">{props.children}</h1>;
}
