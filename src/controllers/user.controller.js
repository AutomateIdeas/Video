import asynHandler from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";

const registerUser = asynHandler(async (req, res) => {
  const { fullName, email, userName, password } = req.body;
  console.log("email", email);
  console.log("fullName", fullName);
  console.log("password", password);

  //  for Basic coder
  // if (fullName === "") {
  //   throw new ApiError(400, "fullName is required");
  // }

  if (
    [fullName, email, userName, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const userExists = await User.findOne({
    $or: [{ userName }, { email }],
  });
});

export { registerUser };
