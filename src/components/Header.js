import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, showAdd, showAddBtn }) => {
  return (
    <div className="header">
      <h1>{title}</h1>
      <Button
        color={showAddBtn ? "red" : "green"}
        text={showAddBtn ? "Close" : "Add"}
        onClick={showAdd}
      />
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
