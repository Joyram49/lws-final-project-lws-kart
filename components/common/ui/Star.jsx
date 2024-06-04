const Star = ({ fill }) => {
  return (
    <div className='star-container'>
      <div className='star-background'></div>
      <div className='star-overlay' style={{ "--fill": fill / 100 }}></div>
    </div>
  );
};

export default Star;
