import { Auth } from "aws-amplify";

export const getCurrentUser = async () => {
  try {
    return await Auth.currentUserInfo();
  } catch (error) {
    console.log(error);
  }
};

export const isUserLoggedIn = () => {
  return (
    Object.keys(window.localStorage).filter((itemName) =>
      itemName.includes("CognitoIdentityServiceProvider")
    ).length > 0
  );
};

export const getUserAttribute = async (attributeName) => {
  const currentUser = await getCurrentUser();
  return currentUser.attributes[attributeName];
};

// await getUserAttribute("channels");
