const convertFDCRequestFromJSON = async (req, res, next) => {
  const {order} = req.body;
  const shopName = req.query.shop;

  req.fdc = {
    order,
    shopName
  };

  next();
};

export default convertFDCRequestFromJSON;
