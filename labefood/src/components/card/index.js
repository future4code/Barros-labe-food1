

export const CardCart = ({
  image,
  title,
  description,
  price,
  quantity,
  onClickProduct
}) => {


  return (

    <>

      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="content">
        <div className="info">
          <h1>{title}</h1>
          <p>{description}</p>
          <p>R${price}</p>
        </div>


      </div>

    </>
  );
};
