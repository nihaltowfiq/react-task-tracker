import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("clicked");
  };
  return (
    <div className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" onClick={onClick} />
    </div>
  );
};

Header.defaultProps = {
  title: "Tasks Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
