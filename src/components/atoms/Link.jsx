import { Link } from "react-router-dom";

const LinkTag = ({children, className, href }) => {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
};

export default LinkTag;