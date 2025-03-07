export const health = (req, res) => {
  try {
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
