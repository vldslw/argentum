import { getServerSession } from "#auth";

export default eventHandler(async (event) => {
  const session = await getServerSession(event);
  if (!session) {
    return { status: "unauthenticated" };
  }

  const user = await User.findOne({ email: session.user?.email });
  return {
    email: user?.email,
    firstName: user?.first_name,
    lastName: user?.last_name,
    role: user?.role,
  };
});
