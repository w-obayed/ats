import User, { Account, Session } from "@/models/User";

import { connect } from "@/db/dbConfig";

/** @return { import("next-auth/adapters").Adapter } */
export function MyAdapter() {
  return {
    async createUser(userData) {
      await connect();
      const user = await User.create(userData);
      return {
        id: user._id.toString(),
        ...user.toObject(),
      };
    },

    async getUser(id) {
      await connect();
      const user = await User.findById(id);
      if (!user) return null;
      return {
        id: user._id.toString(),
        ...user.toObject(),
      };
    },

    async getUserByEmail(email) {
      await connect();
      const user = await User.findOne({ email });
      if (!user) return null;
      return {
        id: user._id.toString(),
        ...user.toObject(),
      };
    },

    async getUserByAccount({ provider, providerAccountId }) {
      await connect();
      const account = await Account.findOne({ provider, providerAccountId });
      if (!account) return null;
      const user = await User.findById(account.userId);
      return {
        id: user._id.toString(),
        ...user.toObject(),
      };
    },

    async updateUser(user) {
      await connect();
      const updatedUser = await User.findByIdAndUpdate(user.id, user, {
        new: true,
      });
      if (!updatedUser) return null;
      return {
        id: updatedUser._id.toString(),
        ...updatedUser.toObject(),
      };
    },

    async linkAccount(accountData) {
      await connect();
      const account = new Account(accountData);
      await account.save();
    },

    async createSession(sessionData) {
      await connect();
      const session = new Session(sessionData);
      await session.save();
      return {
        id: session._id.toString(),
        ...session.toObject(),
      };
    },

    async getSessionAndUser(sessionToken) {
      await connect();
      const session = await Session.findOne({ sessionToken });
      if (!session) return null;
      const user = await User.findById(session.userId);
      if (!user) return null;
      return {
        user: {
          id: user._id.toString(),
          ...user.toObject(),
        },
        session: {
          id: session._id.toString(),
          ...session.toObject(),
        },
      };
    },

    async updateSession(session) {
      await connect();
      const updatedSession = await Session.findOneAndUpdate(
        { sessionToken: session.sessionToken },
        session,
        { new: true }
      );
      if (!updatedSession) return null;
      return {
        id: updatedSession._id.toString(),
        ...updatedSession.toObject(),
      };
    },

    async deleteSession(sessionToken) {
      await connect();
      await Session.findOneAndDelete({ sessionToken });
    },
  };
}
