export const protect = (req, res) => {
  try {
    return res.formatResponse(200, "Server is healthy");
  } catch (error) {
    console.error(error);
    return res.formatResponse(
      500,
      "Server cannot be reached",
      null,
      error.message
    );
  }
};
