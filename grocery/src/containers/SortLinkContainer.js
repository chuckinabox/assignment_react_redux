import { connect } from "react-redux";
import SortLink from "../components/SortLink/SortLink";
import { sortName, sortDescription } from "../actions";

const mapStateToProps = (state, ownProps) => {
  const name =
    state.cartNameSort === ownProps.filter && ownProps.field === "Name";
  const description =
    state.cartDescriptionSort === ownProps.filter &&
    ownProps.field === "Description";
  return {
    active: name || description
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClickName: e => {
      e.preventDefault();
      dispatch(sortName(ownProps.filter));
    },
    onClickDescription: e => {
      e.preventDefault();
      dispatch(sortDescription(ownProps.filter));
    }
  };
};

const SortLinkContainer = connect(mapStateToProps, mapDispatchToProps)(
  SortLink
);

export default SortLinkContainer;
