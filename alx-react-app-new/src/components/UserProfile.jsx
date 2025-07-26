const UserProfile = (props) => {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        maxWidth: '300px',
        margin: '20px auto',
        backgroundColor: '#f9f9f9'
      }}
    >
      <h2
        style={{
          fontSize: '24px',
          color: '#333',
          marginBottom: '8px'
        }}
      >
        {props.name}
      </h2>
      <p
        style={{
          fontSize: '16px',
          color: '#555',
          margin: '4px 0'
        }}
      >
        Age: {props.age}
      </p>
      <p
        style={{
          fontSize: '16px',
          color: '#777',
          margin: '4px 0'
        }}
      >
        Bio: {props.bio}
      </p>
    </div>
  );
};

export default UserProfile;
