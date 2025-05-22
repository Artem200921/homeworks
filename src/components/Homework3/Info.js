import PropTypes from "prop-types";
const Info = (props, index) => {
  return (
    <div className="profile" key={index}>
      <div className="description">
        <img src={props.url} alt={props.name} className="avatar" />
        <p className="name">{props.name}</p>
        <p className="tag">{props.tag}</p>
        <p className="location">{props.location}</p>
      </div>

      <ul className="stats">
        <li className="stat-item">
          <span className="label">Followers</span>
          <span className="quantity"> {props.followers}</span>
        </li>
        <li className="stat-item">
          <span className="label">Views</span>
          <span className="quantity"> {props.views}</span>
        </li>
        <li className="stat-item">
          <span className="label">Likes</span>
          <span className="quantity"> {props.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Info.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Info;
