export function Link(props) {
  return (
    <a href={props.href} className="navigation__link">
      {props.children}
    </a>
  );
}
