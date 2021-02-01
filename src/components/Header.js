import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Button from "./Button";

const Header = ({ title, showAdd, showAddBtn }) => {
  const location = useLocation();

  return (
    <div className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={showAddBtn ? "red" : "green"}
          text={showAddBtn ? "Close" : "Add"}
          onClick={showAdd}
        />
      )}
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
